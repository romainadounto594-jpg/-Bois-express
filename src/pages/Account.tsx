import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
  ShoppingCart,
  Phone,
  MapPin,
  Mail,
  LogOut,
  Package,
  User,
  CheckCircle2,
  Eye,
  EyeOff,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/navigation';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';
import { formatPrice } from '../context/CartContext';
import { PageBanner } from '../components/PageBanner';

export const Account: React.FC = () => {
  const { totalItems, subtotal } = useCart();
  const { user, orders, login, register, logout, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTarget = searchParams.get('redirect');

  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPwd, setShowLoginPwd] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Register state
  const [regForm, setRegForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    postalCode: '',
    city: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });
  const [showRegPwd, setShowRegPwd] = useState(false);
  const [regErrors, setRegErrors] = useState<Record<string, string>>({});
  const [regGeneralError, setRegGeneralError] = useState('');

  // Profile edit state
  const [editingProfile, setEditingProfile] = useState(false);
  const [profileSaved, setProfileSaved] = useState(false);
  const [profileDraft, setProfileDraft] = useState({
    firstName: user?.firstName ?? '',
    lastName: user?.lastName ?? '',
    phone: user?.phone ?? '',
    street: user?.street ?? '',
    postalCode: user?.postalCode ?? '',
    city: user?.city ?? '',
  });

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    if (!loginEmail.trim() || !loginPassword) {
      setLoginError('Veuillez saisir votre e-mail et votre mot de passe.');
      return;
    }
    const res = login(loginEmail, loginPassword);
    if (!res.ok) {
      setLoginError(res.error ?? 'Connexion impossible.');
      return;
    }
    if (redirectTarget) {
      navigate(redirectTarget);
    }
  };

  const handleFillDemo = () => {
    setLoginEmail('client@bois-express.fr');
    setLoginPassword('boisexpress');
    setLoginError('');
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegGeneralError('');
    const nextErrors: Record<string, string> = {};

    if (!regForm.firstName.trim()) nextErrors.firstName = 'Prénom requis.';
    if (!regForm.lastName.trim()) nextErrors.lastName = 'Nom requis.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regForm.email.trim())) {
      nextErrors.email = 'Adresse e-mail invalide.';
    }
    if (!regForm.phone.trim()) nextErrors.phone = 'Téléphone requis.';
    if (!regForm.street.trim()) nextErrors.street = 'Adresse requise.';
    if (!regForm.postalCode.trim()) nextErrors.postalCode = 'Code postal requis.';
    if (!regForm.city.trim()) nextErrors.city = 'Ville requise.';
    if (regForm.password.length < 6) {
      nextErrors.password = 'Le mot de passe doit contenir au moins 6 caractères.';
    }
    if (regForm.password !== regForm.confirmPassword) {
      nextErrors.confirmPassword = 'Les mots de passe ne correspondent pas.';
    }
    if (!regForm.acceptTerms) {
      nextErrors.acceptTerms = 'Veuillez accepter les conditions d’utilisation.';
    }

    setRegErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const res = register({
      firstName: regForm.firstName,
      lastName: regForm.lastName,
      email: regForm.email,
      phone: regForm.phone,
      street: regForm.street,
      postalCode: regForm.postalCode,
      city: regForm.city,
      password: regForm.password,
    });

    if (!res.ok) {
      setRegGeneralError(res.error ?? 'Inscription impossible.');
      return;
    }

    if (redirectTarget) {
      navigate(redirectTarget);
    }
  };

  const startEditProfile = () => {
    if (!user) return;
    setProfileDraft({
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      street: user.street,
      postalCode: user.postalCode,
      city: user.city,
    });
    setEditingProfile(true);
    setProfileSaved(false);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(profileDraft);
    setEditingProfile(false);
    setProfileSaved(true);
    window.setTimeout(() => setProfileSaved(false), 3000);
  };

  return (
    <div>
      <PageBanner
        title="Mon compte"
        backgroundImage="/images/cat-allumage.webp"
        breadcrumbs={[
          { label: 'Accueil', path: '/' },
          { label: 'Mon compte' },
        ]}
      />

      <section className="max-w-[1140px] mx-auto px-4 sm:px-6 py-12">
        {!user ? (
          <div>
            {redirectTarget && (
              <div className="mb-8 p-4 bg-[#FC8920]/10 border border-[#FC8920] rounded-[10px] text-[14px] text-[#292929]">
                Connectez-vous ou créez votre compte client Bois express pour finaliser votre commande plus rapidement.
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Connexion */}
              <div className="border border-[#d5d5d5] rounded-[10px] p-6 sm:p-8 bg-white">
                <h2 className="text-[24px] font-semibold text-[#292929] mb-2">
                  Connexion
                </h2>
                <p className="text-[14px] text-[#595959] mb-6">
                  Accédez à votre espace client et retrouvez vos commandes simulées.
                </p>

                {loginError && (
                  <div
                    role="alert"
                    className="mb-4 p-3 bg-red-50 border border-red-300 text-red-700 text-[13px] rounded"
                  >
                    {loginError}
                  </div>
                )}

                <form onSubmit={handleLoginSubmit} noValidate className="space-y-4">
                  <div>
                    <label
                      htmlFor="login-email"
                      className="block text-[14px] font-medium text-[#292929] mb-1.5"
                    >
                      Adresse e-mail *
                    </label>
                    <input
                      id="login-email"
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="exemple@domaine.fr"
                      className="w-full border border-[#dcdcdc] px-3.5 py-2.5 text-[15px] text-[#292929] rounded focus:outline-none focus:border-[#FC8920]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="login-password"
                      className="block text-[14px] font-medium text-[#292929] mb-1.5"
                    >
                      Mot de passe *
                    </label>
                    <div className="relative">
                      <input
                        id="login-password"
                        type={showLoginPwd ? 'text' : 'password'}
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="Votre mot de passe"
                        className="w-full border border-[#dcdcdc] px-3.5 py-2.5 pr-11 text-[15px] text-[#292929] rounded focus:outline-none focus:border-[#FC8920]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPwd((v) => !v)}
                        aria-label="Afficher ou masquer le mot de passe"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#595959] hover:text-[#292929] cursor-pointer"
                      >
                        {showLoginPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <button
                      type="submit"
                      className="px-7 py-2.5 bg-[#FC8920] hover:bg-[#292929] text-white font-semibold text-[15px] rounded transition-colors cursor-pointer"
                    >
                      Se connecter
                    </button>

                    <button
                      type="button"
                      onClick={handleFillDemo}
                      className="text-[13px] font-medium text-[#FC8920] hover:underline cursor-pointer"
                    >
                      Utiliser le compte démo
                    </button>
                  </div>
                </form>

                <div className="mt-6 pt-4 border-t border-[#e9e9e9] text-[13px] text-[#595959]">
                  <p className="font-medium text-[#292929]">Compte de démonstration :</p>
                  <p>E-mail : <span className="font-semibold">client@bois-express.fr</span> · Mot de passe : <span className="font-semibold">boisexpress</span></p>
                </div>
              </div>

              {/* Inscription */}
              <div className="border border-[#d5d5d5] rounded-[10px] p-6 sm:p-8 bg-[#f7f7f7]">
                <h2 className="text-[24px] font-semibold text-[#292929] mb-2">
                  Inscription
                </h2>
                <p className="text-[14px] text-[#595959] mb-6">
                  Créez votre compte client pour enregistrer votre adresse de livraison et suivre vos commandes.
                </p>

                {regGeneralError && (
                  <div
                    role="alert"
                    className="mb-4 p-3 bg-red-50 border border-red-300 text-red-700 text-[13px] rounded"
                  >
                    {regGeneralError}
                  </div>
                )}

                <form onSubmit={handleRegisterSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="reg-firstName" className="block text-[14px] font-medium text-[#292929] mb-1">
                        Prénom *
                      </label>
                      <input
                        id="reg-firstName"
                        type="text"
                        value={regForm.firstName}
                        onChange={(e) => setRegForm({ ...regForm, firstName: e.target.value })}
                        className="w-full border border-[#dcdcdc] bg-white px-3.5 py-2.5 text-[14px] text-[#292929] rounded focus:outline-none focus:border-[#FC8920]"
                      />
                      {regErrors.firstName && (
                        <p className="text-[12px] text-red-600 mt-1">{regErrors.firstName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="reg-lastName" className="block text-[14px] font-medium text-[#292929] mb-1">
                        Nom *
                      </label>
                      <input
                        id="reg-lastName"
                        type="text"
                        value={regForm.lastName}
                        onChange={(e) => setRegForm({ ...regForm, lastName: e.target.value })}
                        className="w-full border border-[#dcdcdc] bg-white px-3.5 py-2.5 text-[14px] text-[#292929] rounded focus:outline-none focus:border-[#FC8920]"
                      />
                      {regErrors.lastName && (
                        <p className="text-[12px] text-red-600 mt-1">{regErrors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="reg-email" className="block text-[14px] font-medium text-[#292929] mb-1">
                        Adresse e-mail *
                      </label>
                      <input
                        id="reg-email"
                        type="email"
                        value={regForm.email}
                        onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                        className="w-full border border-[#dcdcdc] bg-white px-3.5 py-2.5 text-[14px] text-[#292929] rounded focus:outline-none focus:border-[#FC8920]"
                      />
                      {regErrors.email && (
                        <p className="text-[12px] text-red-600 mt-1">{regErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="reg-phone" className="block text-[14px] font-medium text-[#292929] mb-1">
                        Téléphone *
                      </label>
                      <input
                        id="reg-phone"
                        type="tel"
                        value={regForm.phone}
                        onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                        className="w-full border border-[#dcdcdc] bg-white px-3.5 py-2.5 text-[14px] text-[#292929] rounded focus:outline-none focus:border-[#FC8920]"
                      />
                      {regErrors.phone && (
                        <p className="text-[12px] text-red-600 mt-1">{regErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="reg-street" className="block text-[14px] font-medium text-[#292929] mb-1">
                      Adresse de livraison *
                    </label>
                    <input
                      id="reg-street"
                      type="text"
                      value={regForm.street}
                      onChange={(e) => setRegForm({ ...regForm, street: e.target.value })}
                      placeholder="Numéro et nom de rue"
                      className="w-full border border-[#dcdcdc] bg-white px-3.5 py-2.5 text-[14px] text-[#292929] rounded focus:outline-none focus:border-[#FC8920]"
                    />
                    {regErrors.street && (
                      <p className="text-[12px] text-red-600 mt-1">{regErrors.street}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="reg-postal" className="block text-[14px] font-medium text-[#292929] mb-1">
                        Code postal *
                      </label>
                      <input
                        id="reg-postal"
                        type="text"
                        value={regForm.postalCode}
                        onChange={(e) => setRegForm({ ...regForm, postalCode: e.target.value })}
                        placeholder="57600"
                        className="w-full border border-[#dcdcdc] bg-white px-3.5 py-2.5 text-[14px] text-[#292929] rounded focus:outline-none focus:border-[#FC8920]"
                      />
                      {regErrors.postalCode && (
                        <p className="text-[12px] text-red-600 mt-1">{regErrors.postalCode}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="reg-city" className="block text-[14px] font-medium text-[#292929] mb-1">
                        Ville *
                      </label>
                      <input
                        id="reg-city"
                        type="text"
                        value={regForm.city}
                        onChange={(e) => setRegForm({ ...regForm, city: e.target.value })}
                        placeholder="Forbach"
                        className="w-full border border-[#dcdcdc] bg-white px-3.5 py-2.5 text-[14px] text-[#292929] rounded focus:outline-none focus:border-[#FC8920]"
                      />
                      {regErrors.city && (
                        <p className="text-[12px] text-red-600 mt-1">{regErrors.city}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="reg-password" className="block text-[14px] font-medium text-[#292929] mb-1">
                        Mot de passe *
                      </label>
                      <div className="relative">
                        <input
                          id="reg-password"
                          type={showRegPwd ? 'text' : 'password'}
                          value={regForm.password}
                          onChange={(e) => setRegForm({ ...regForm, password: e.target.value })}
                          placeholder="6 caractères minimum"
                          className="w-full border border-[#dcdcdc] bg-white px-3.5 py-2.5 pr-10 text-[14px] text-[#292929] rounded focus:outline-none focus:border-[#FC8920]"
                        />
                        <button
                          type="button"
                          onClick={() => setShowRegPwd((v) => !v)}
                          aria-label="Afficher le mot de passe"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#595959] cursor-pointer"
                        >
                          {showRegPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      {regErrors.password && (
                        <p className="text-[12px] text-red-600 mt-1">{regErrors.password}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="reg-confirm" className="block text-[14px] font-medium text-[#292929] mb-1">
                        Confirmer le mot de passe *
                      </label>
                      <input
                        id="reg-confirm"
                        type={showRegPwd ? 'text' : 'password'}
                        value={regForm.confirmPassword}
                        onChange={(e) => setRegForm({ ...regForm, confirmPassword: e.target.value })}
                        className="w-full border border-[#dcdcdc] bg-white px-3.5 py-2.5 text-[14px] text-[#292929] rounded focus:outline-none focus:border-[#FC8920]"
                      />
                      {regErrors.confirmPassword && (
                        <p className="text-[12px] text-red-600 mt-1">{regErrors.confirmPassword}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="flex items-start gap-2.5 text-[13px] text-[#595959] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={regForm.acceptTerms}
                        onChange={(e) => setRegForm({ ...regForm, acceptTerms: e.target.checked })}
                        className="mt-0.5 w-4 h-4 accent-[#FC8920] cursor-pointer"
                      />
                      <span>
                        J’accepte les{' '}
                        <Link to="/conditions-dutilisation" className="text-[#FC8920] underline">
                          conditions d’utilisation
                        </Link>{' '}
                        et la{' '}
                        <Link to="/protection-des-donnees" className="text-[#FC8920] underline">
                          politique de confidentialité
                        </Link>
                        .
                      </span>
                    </label>
                    {regErrors.acceptTerms && (
                      <p className="text-[12px] text-red-600 mt-1">{regErrors.acceptTerms}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-2.5 bg-[#292929] hover:bg-[#FC8920] text-white font-semibold text-[15px] rounded transition-colors cursor-pointer"
                  >
                    Créer mon compte
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Logged-in Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 bg-[#f7f7f7] border border-[#d5d5d5] rounded-[10px]">
              <div>
                <p className="text-[14px] text-[#FC8920] font-semibold">Espace client connecté</p>
                <h2 className="text-[24px] font-semibold text-[#292929]">
                  Bonjour {user.firstName} {user.lastName}
                </h2>
                <p className="text-[14px] text-[#595959]">{user.email}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/boutique"
                  className="px-5 py-2.5 bg-[#FC8920] hover:bg-[#292929] text-white font-semibold text-[14px] rounded transition-colors"
                >
                  Commander des combustibles
                </Link>
                <button
                  type="button"
                  onClick={logout}
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#292929] text-[#292929] hover:bg-[#292929] hover:text-white font-semibold text-[14px] rounded transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  Déconnexion
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left: Profile & Cart */}
              <div className="space-y-6">
                <div className="border border-[#d5d5d5] rounded-[10px] p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[18px] font-semibold text-[#292929] flex items-center gap-2">
                      <User className="w-5 h-5 text-[#FC8920]" />
                      Mes coordonnées
                    </h3>
                    {!editingProfile && (
                      <button
                        type="button"
                        onClick={startEditProfile}
                        className="text-[13px] font-semibold text-[#FC8920] hover:underline cursor-pointer"
                      >
                        Modifier
                      </button>
                    )}
                  </div>

                  {profileSaved && (
                    <div className="mb-3 p-2.5 bg-[#f7f7f7] border border-[#FC8920] rounded text-[13px] text-[#292929] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FC8920] shrink-0" />
                      Coordonnées mises à jour.
                    </div>
                  )}

                  {editingProfile ? (
                    <form onSubmit={handleSaveProfile} className="space-y-3 text-[14px]">
                      <input
                        type="text"
                        value={profileDraft.firstName}
                        onChange={(e) => setProfileDraft({ ...profileDraft, firstName: e.target.value })}
                        placeholder="Prénom"
                        className="w-full border border-[#dcdcdc] px-3 py-2 rounded"
                      />
                      <input
                        type="text"
                        value={profileDraft.lastName}
                        onChange={(e) => setProfileDraft({ ...profileDraft, lastName: e.target.value })}
                        placeholder="Nom"
                        className="w-full border border-[#dcdcdc] px-3 py-2 rounded"
                      />
                      <input
                        type="tel"
                        value={profileDraft.phone}
                        onChange={(e) => setProfileDraft({ ...profileDraft, phone: e.target.value })}
                        placeholder="Téléphone"
                        className="w-full border border-[#dcdcdc] px-3 py-2 rounded"
                      />
                      <input
                        type="text"
                        value={profileDraft.street}
                        onChange={(e) => setProfileDraft({ ...profileDraft, street: e.target.value })}
                        placeholder="Adresse"
                        className="w-full border border-[#dcdcdc] px-3 py-2 rounded"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={profileDraft.postalCode}
                          onChange={(e) => setProfileDraft({ ...profileDraft, postalCode: e.target.value })}
                          placeholder="Code postal"
                          className="w-full border border-[#dcdcdc] px-3 py-2 rounded"
                        />
                        <input
                          type="text"
                          value={profileDraft.city}
                          onChange={(e) => setProfileDraft({ ...profileDraft, city: e.target.value })}
                          placeholder="Ville"
                          className="w-full border border-[#dcdcdc] px-3 py-2 rounded"
                        />
                      </div>
                      <div className="flex gap-2 pt-1">
                        <button
                          type="submit"
                          className="px-4 py-2 bg-[#FC8920] text-white font-semibold rounded cursor-pointer"
                        >
                          Enregistrer
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingProfile(false)}
                          className="px-4 py-2 bg-[#e9e9e9] text-[#292929] font-medium rounded cursor-pointer"
                        >
                          Annuler
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-1.5 text-[14px] text-[#595959]">
                      <p className="font-semibold text-[#292929]">
                        {user.firstName} {user.lastName}
                      </p>
                      <p>{user.street}</p>
                      <p>
                        {user.postalCode} {user.city}
                      </p>
                      <p>Tél : {user.phone}</p>
                    </div>
                  )}
                </div>

                <div className="border border-[#d5d5d5] rounded-[10px] p-6 bg-white">
                  <h3 className="text-[18px] font-semibold text-[#292929] mb-3 flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-[#FC8920]" />
                    Votre panier en cours
                  </h3>
                  <p className="text-[14px] text-[#595959] mb-4">
                    <strong className="text-[#292929] tabular-nums">{totalItems}</strong>{' '}
                    article(s) ·{' '}
                    <strong className="text-[#292929] tabular-nums">{formatPrice(subtotal)}</strong>
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    <Link
                      to="/panier"
                      className="px-4 py-2 bg-[#595959] hover:bg-[#292929] text-white font-semibold text-[13px] rounded transition-colors"
                    >
                      Voir le panier
                    </Link>
                    {totalItems > 0 && (
                      <Link
                        to="/commander"
                        className="px-4 py-2 bg-[#FC8920] hover:bg-[#292929] text-white font-semibold text-[13px] rounded transition-colors"
                      >
                        Passer au paiement
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Order History */}
              <div className="lg:col-span-2 border border-[#d5d5d5] rounded-[10px] p-6 bg-white">
                <h3 className="text-[20px] font-semibold text-[#292929] mb-5 flex items-center gap-2 pb-3 border-b border-[#dcdcdc]">
                  <Package className="w-5 h-5 text-[#FC8920]" />
                  Mes commandes ({orders.length})
                </h3>

                {orders.length === 0 ? (
                  <div className="text-center py-10 text-[#595959]">
                    <p className="text-[15px] mb-4">
                      Vous n’avez encore passé aucune commande sur ce compte.
                    </p>
                    <Link
                      to="/boutique"
                      className="inline-block px-5 py-2.5 bg-[#FC8920] hover:bg-[#292929] text-white font-semibold text-[14px] rounded transition-colors"
                    >
                      Découvrir le catalogue
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-5">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="border border-[#dcdcdc] rounded-lg p-4 sm:p-5 bg-[#f7f7f7]/50"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#dcdcdc]">
                          <div>
                            <span className="font-bold text-[#292929] text-[15px]">
                              Commande {order.orderNumber}
                            </span>
                            <span className="block text-[12px] text-[#595959]">
                              Passée le{' '}
                              {new Date(order.createdAt).toLocaleDateString('fr-FR', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="inline-block px-2.5 py-1 bg-[#FC8920]/15 text-[#292929] border border-[#FC8920] rounded text-[12px] font-semibold">
                              {order.status}
                            </span>
                            <p className="font-bold text-[#292929] text-[16px] mt-1 tabular-nums">
                              {formatPrice(order.total)}
                            </p>
                          </div>
                        </div>

                        <ul className="space-y-2 text-[14px] text-[#595959] mb-3">
                          {order.items.map((item) => (
                            <li
                              key={item.productId}
                              className="flex items-center justify-between gap-2"
                            >
                              <span>
                                <strong className="text-[#292929] tabular-nums">
                                  {item.quantity} ×
                                </strong>{' '}
                                {item.title}
                              </span>
                              <span className="font-medium text-[#292929] tabular-nums shrink-0">
                                {formatPrice(item.unitPrice * item.quantity)}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="text-[12px] text-[#595959] pt-2 border-t border-[#dcdcdc]/70 flex flex-wrap gap-x-6 gap-y-1">
                          <span>
                            Livraison :{' '}
                            <strong className="text-[#292929]">
                              {order.deliveryMethod === 'home'
                                ? `${order.shippingAddress.street}, ${order.shippingAddress.postalCode} ${order.shippingAddress.city}`
                                : 'Retrait au dépôt de Forbach'}
                            </strong>
                          </span>
                          <span>
                            Paiement :{' '}
                            <strong className="text-[#292929]">
                              {order.paymentMethod === 'card'
                                ? `Carte bancaire (•••• ${order.cardLast4 ?? '4242'})`
                                : order.paymentMethod === 'transfer'
                                ? 'Virement bancaire'
                                : 'À la livraison'}
                            </strong>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Customer Service Footer Box */}
        <div className="mt-10 border border-[#d5d5d5] rounded-[10px] p-6 bg-[#f7f7f7] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-[18px] font-semibold text-[#292929]">
              Service client Bois express
            </h3>
            <p className="text-[14px] text-[#595959]">
              Notre équipe est joignable du lundi au vendredi de 8h à 17h pour toute question sur vos livraisons.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[14px] text-[#292929]">
            <a href={COMPANY_INFO.phoneHref} className="flex items-center gap-2 hover:text-[#FC8920]">
              <Phone className="w-4 h-4 text-[#FC8920]" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-[#FC8920]">
              <Mail className="w-4 h-4 text-[#FC8920]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FC8920]" />
              <span>{COMPANY_INFO.fullAddress}</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
