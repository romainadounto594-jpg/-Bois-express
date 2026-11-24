import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/navigation';
import { PageBanner } from '../components/PageBanner';

interface ContactFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  requestType: string;
  subjectDetail: string;
  message: string;
  consent: boolean;
}

const INITIAL_FORM: ContactFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  requestType: 'Informations sur un produit',
  subjectDetail: '',
  message: '',
  consent: false,
};

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof ContactFormState, string>> = {};
    if (!form.firstName.trim()) nextErrors.firstName = 'Veuillez saisir votre prénom.';
    if (!form.lastName.trim()) nextErrors.lastName = 'Veuillez saisir votre nom.';
    if (!form.email.trim()) {
      nextErrors.email = 'Veuillez saisir votre adresse email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Adresse email invalide.';
    }
    if (!form.phone.trim()) {
      nextErrors.phone = 'Veuillez saisir votre numéro de téléphone.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = 'Veuillez rédiger votre message (10 caractères minimum).';
    }
    if (!form.consent) {
      nextErrors.consent = 'Vous devez accepter les conditions d’utilisation et la politique de confidentialité.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(INITIAL_FORM);
    setErrors({});
  };

  return (
    <div>
      <PageBanner
        title="Contact"
        backgroundImage="/images/cat-allumage.webp"
        breadcrumbs={[
          { label: 'Accueil', path: '/' },
          { label: 'Contact' },
        ]}
      />

      {/* Contact coordinates strip */}
      <section className="max-w-[1140px] mx-auto px-4 pt-10 pb-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 py-5 border-b border-[#e9e9e9]">
          <a
            href={COMPANY_INFO.phoneHref}
            className="flex items-center gap-3 text-[18px] text-[#595959] hover:text-[#FC8920] transition-colors"
          >
            <Phone className="w-5 h-5 text-[#FC8920] shrink-0" />
            <span>{COMPANY_INFO.phoneDisplay}</span>
          </a>

          <div className="flex items-center gap-3 text-[18px] text-[#595959]">
            <MapPin className="w-5 h-5 text-[#FC8920] shrink-0" />
            <span>{COMPANY_INFO.address}, {COMPANY_INFO.postalCity}</span>
          </div>

          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="flex items-center gap-3 text-[18px] text-[#595959] hover:text-[#FC8920] transition-colors"
          >
            <Mail className="w-5 h-5 text-[#FC8920] shrink-0" />
            <span>{COMPANY_INFO.email}</span>
          </a>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-[820px] mx-auto px-4 py-8 mb-10">
        <div className="text-center mb-8">
          <p className="text-[20px] font-medium text-[#FC8920]">
            Une question ? Une demande ?
          </p>
          <h2 className="text-[36px] sm:text-[46px] font-semibold text-[#292929] mt-1">
            Contactez-nous
          </h2>
        </div>

        {submitted && (
          <div
            role="status"
            className="mb-8 p-5 bg-[#f7f7f7] border border-[#FC8920] rounded-lg flex items-start gap-3"
          >
            <CheckCircle2 className="w-6 h-6 text-[#FC8920] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-[16px] font-semibold text-[#292929]">
                Votre message a bien été envoyé
              </h3>
              <p className="text-[14px] text-[#595959] mt-1">
                Merci pour votre message. L’équipe de Bois express vous répondra dans les plus brefs délais (du lundi au vendredi de 8h à 17h).
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-firstName" className="block text-[14px] font-medium text-[#292929] mb-1.5">
                Prénom *
              </label>
              <input
                id="contact-firstName"
                type="text"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                placeholder="Prénom"
                className="w-full border border-[#dcdcdc] px-3.5 py-2.5 text-[15px] text-[#292929] bg-white focus:outline-none focus:border-[#FC8920]"
              />
              {errors.firstName && (
                <p className="text-[12px] text-red-600 mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-lastName" className="block text-[14px] font-medium text-[#292929] mb-1.5">
                Nom *
              </label>
              <input
                id="contact-lastName"
                type="text"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                placeholder="Nom"
                className="w-full border border-[#dcdcdc] px-3.5 py-2.5 text-[15px] text-[#292929] bg-white focus:outline-none focus:border-[#FC8920]"
              />
              {errors.lastName && (
                <p className="text-[12px] text-red-600 mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-email" className="block text-[14px] font-medium text-[#292929] mb-1.5">
                Email *
              </label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email"
                className="w-full border border-[#dcdcdc] px-3.5 py-2.5 text-[15px] text-[#292929] bg-white focus:outline-none focus:border-[#FC8920]"
              />
              {errors.email && (
                <p className="text-[12px] text-red-600 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-phone" className="block text-[14px] font-medium text-[#292929] mb-1.5">
                Numéro de téléphone *
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Numéro de téléphone"
                className="w-full border border-[#dcdcdc] px-3.5 py-2.5 text-[15px] text-[#292929] bg-white focus:outline-none focus:border-[#FC8920]"
              />
              {errors.phone && (
                <p className="text-[12px] text-red-600 mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-type" className="block text-[14px] font-medium text-[#292929] mb-1.5">
                Votre demande concerne :
              </label>
              <select
                id="contact-type"
                value={form.requestType}
                onChange={(e) => setForm({ ...form, requestType: e.target.value })}
                className="w-full border border-[#dcdcdc] px-3.5 py-2.5 text-[15px] text-[#292929] bg-white focus:outline-none focus:border-[#FC8920]"
              >
                <option value="Informations sur un produit">Informations sur un produit</option>
                <option value="Demande de devis">Demande de devis</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-[14px] font-medium text-[#292929] mb-1.5">
                Préciser l’objet de votre demande
              </label>
              <input
                id="contact-subject"
                type="text"
                value={form.subjectDetail}
                onChange={(e) => setForm({ ...form, subjectDetail: e.target.value })}
                placeholder="Préciser l'objet de votre demande"
                className="w-full border border-[#dcdcdc] px-3.5 py-2.5 text-[15px] text-[#292929] bg-white focus:outline-none focus:border-[#FC8920]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-[14px] font-medium text-[#292929] mb-1.5">
              Message *
            </label>
            <textarea
              id="contact-message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Message"
              className="w-full border border-[#dcdcdc] px-3.5 py-2.5 text-[15px] text-[#292929] bg-white focus:outline-none focus:border-[#FC8920]"
            />
            {errors.message && (
              <p className="text-[12px] text-red-600 mt-1">{errors.message}</p>
            )}
          </div>

          <div>
            <label className="flex items-start gap-2.5 text-[14px] text-[#595959] cursor-pointer">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                className="mt-1 w-4 h-4 accent-[#FC8920] cursor-pointer"
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
            {errors.consent && (
              <p className="text-[12px] text-red-600 mt-1">{errors.consent}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-3 bg-[#FC8920] hover:bg-[#292929] text-white font-semibold text-[15px] transition-colors cursor-pointer"
            >
              Envoyer
            </button>
          </div>
        </form>
      </section>

      {/* Map Embed */}
      <section className="w-full h-[298px] bg-[#e9e9e9]">
        <iframe
          title="Localisation Bois express - 3 rue de Schoeneck, 57600 Forbach"
          src="https://www.openstreetmap.org/export/embed.html?bbox=6.890%2C49.180%2C6.935%2C49.205&layer=mapnik&marker=49.1935%2C6.9135"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </section>
    </div>
  );
};
