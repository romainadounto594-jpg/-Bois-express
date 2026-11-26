import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { SimulatedOrder, UserAccount } from '../types';

const USERS_STORAGE_KEY = 'bois_express_users_v1';
const SESSION_STORAGE_KEY = 'bois_express_session_v1';
const ORDERS_STORAGE_KEY = 'bois_express_orders_v1';

interface StoredUser extends UserAccount {
  password: string;
}

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  postalCode: string;
  city: string;
  password: string;
}

export type AuthErrorCode = 'INVALID_CREDENTIALS' | 'EMAIL_EXISTS';

export interface AuthResult {
  ok: boolean;
  error?: string;
  errorCode?: AuthErrorCode;
  user?: UserAccount;
}

interface AuthContextValue {
  user: UserAccount | null;
  orders: SimulatedOrder[];
  login: (email: string, password: string) => AuthResult;
  register: (payload: RegisterPayload) => AuthResult;
  logout: () => void;
  updateProfile: (updates: Partial<Omit<UserAccount, 'id' | 'email' | 'createdAt'>>) => void;
  addOrder: (order: SimulatedOrder) => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const DEMO_USER: StoredUser = {
  id: 'demo-user-1',
  firstName: 'Jean',
  lastName: 'Dupont',
  email: 'client@bois-express.fr',
  phone: '06 12 34 56 78',
  street: '14 rue Nationale',
  postalCode: '57600',
  city: 'Forbach',
  password: 'boisexpress',
  createdAt: '2026-01-15T10:00:00.000Z',
};

function sanitizeUser(record: StoredUser): UserAccount {
  const { password: _pwd, ...safe } = record;
  return safe;
}

function loadUsers(): StoredUser[] {
  try {
    const raw = window.localStorage.getItem(USERS_STORAGE_KEY);
    if (!raw) {
      window.localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify([DEMO_USER]));
      return [DEMO_USER];
    }
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return [DEMO_USER];
    }
    return parsed as StoredUser[];
  } catch {
    return [DEMO_USER];
  }
}

function loadSessionUser(users: StoredUser[]): UserAccount | null {
  try {
    const userId = window.localStorage.getItem(SESSION_STORAGE_KEY);
    if (!userId) return null;
    const found = users.find((u) => u.id === userId);
    return found ? sanitizeUser(found) : null;
  } catch {
    return null;
  }
}

function loadOrders(): SimulatedOrder[] {
  try {
    const raw = window.localStorage.getItem(ORDERS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as SimulatedOrder[]) : [];
  } catch {
    return [];
  }
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<StoredUser[]>(loadUsers);
  const [user, setUser] = useState<UserAccount | null>(() => loadSessionUser(loadUsers()));
  const [allOrders, setAllOrders] = useState<SimulatedOrder[]>(loadOrders);

  useEffect(() => {
    try {
      window.localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    } catch {
      // Ignore quota errors
    }
  }, [users]);

  useEffect(() => {
    try {
      if (user) {
        window.localStorage.setItem(SESSION_STORAGE_KEY, user.id);
      } else {
        window.localStorage.removeItem(SESSION_STORAGE_KEY);
      }
    } catch {
      // Ignore storage errors
    }
  }, [user]);

  useEffect(() => {
    try {
      window.localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(allOrders));
    } catch {
      // Ignore quota errors
    }
  }, [allOrders]);

  const login = useCallback(
    (email: string, password: string): AuthResult => {
      const normalizedEmail = email.trim().toLowerCase();
      const found = users.find(
        (u) => u.email.toLowerCase() === normalizedEmail
      );
      if (!found || found.password !== password) {
        return {
          ok: false,
          errorCode: 'INVALID_CREDENTIALS',
          error: 'Adresse e-mail ou mot de passe incorrect.',
        };
      }
      const safe = sanitizeUser(found);
      setUser(safe);
      return { ok: true, user: safe };
    },
    [users]
  );

  const register = useCallback(
    (payload: RegisterPayload): AuthResult => {
      const normalizedEmail = payload.email.trim().toLowerCase();
      const exists = users.some(
        (u) => u.email.toLowerCase() === normalizedEmail
      );
      if (exists) {
        return {
          ok: false,
          errorCode: 'EMAIL_EXISTS',
          error: 'Un compte existe déjà avec cette adresse e-mail.',
        };
      }

      const created: StoredUser = {
        id: `user-${Date.now()}`,
        firstName: payload.firstName.trim(),
        lastName: payload.lastName.trim(),
        email: normalizedEmail,
        phone: payload.phone.trim(),
        street: payload.street.trim(),
        postalCode: payload.postalCode.trim(),
        city: payload.city.trim(),
        password: payload.password,
        createdAt: new Date().toISOString(),
      };

      setUsers((prev) => [...prev, created]);
      const safe = sanitizeUser(created);
      setUser(safe);
      return { ok: true, user: safe };
    },
    [users]
  );

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const updateProfile = useCallback(
    (updates: Partial<Omit<UserAccount, 'id' | 'email' | 'createdAt'>>) => {
      if (!user) return;
      setUsers((prev) =>
        prev.map((u) => (u.id === user.id ? { ...u, ...updates } : u))
      );
      setUser((prev) => (prev ? { ...prev, ...updates } : prev));
    },
    [user]
  );

  const addOrder = useCallback((order: SimulatedOrder) => {
    setAllOrders((prev) => [order, ...prev]);
  }, []);

  const orders = useMemo(() => {
    if (!user) return [];
    return allOrders.filter((o) => o.userId === user.id);
  }, [allOrders, user]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      orders,
      login,
      register,
      logout,
      updateProfile,
      addOrder,
    }),
    [user, orders, login, register, logout, updateProfile, addOrder]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
