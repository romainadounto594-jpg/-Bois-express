import React, { useMemo, useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { DELIVERY_ZONES_FRANCE, DELIVERY_ZONES_GERMANY } from '../data/zones';
import { PageBanner } from '../components/PageBanner';

export const ZonesLivraison: React.FC = () => {
  const [query, setQuery] = useState('');

  const normalized = query.trim().toLowerCase();

  const filteredFrance = useMemo(
    () =>
      normalized
        ? DELIVERY_ZONES_FRANCE.filter((city) =>
            city.toLowerCase().includes(normalized)
          )
        : DELIVERY_ZONES_FRANCE,
    [normalized]
  );

  const filteredGermany = useMemo(
    () =>
      normalized
        ? DELIVERY_ZONES_GERMANY.filter((city) =>
            city.toLowerCase().includes(normalized)
          )
        : DELIVERY_ZONES_GERMANY,
    [normalized]
  );

  return (
    <div>
      <PageBanner
        title="Zones de livraison"
        backgroundImage="/images/delivery-vrac.webp"
        breadcrumbs={[
          { label: 'Accueil', path: '/' },
          { label: 'Zones de livraison' },
        ]}
      />

      <section className="max-w-[1140px] mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-[540px] mx-auto mb-10">
          <label
            htmlFor="zone-search"
            className="block text-[14px] font-semibold text-[#292929] mb-2 text-center"
          >
            Vérifiez si votre commune est desservie par nos livraisons à domicile
          </label>
          <div className="relative">
            <Search className="w-4 h-4 text-[#595959] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="zone-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher une commune (ex : Forbach, Sarreguemines, Saarbrucken…)"
              className="w-full border border-[#dcdcdc] rounded-md pl-10 pr-4 py-2.5 text-[15px] text-[#292929] focus:outline-none focus:border-[#FC8920]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* France */}
          <div className="border border-[#d5d5d5] rounded-[10px] p-6 bg-white">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#dcdcdc]">
              <h2 className="text-[22px] font-semibold text-[#292929] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#FC8920]" />
                Zone de livraison en France
              </h2>
              <span className="text-[13px] font-medium text-[#595959] tabular-nums">
                {filteredFrance.length} communes
              </span>
            </div>

            {filteredFrance.length === 0 ? (
              <p className="text-[14px] text-[#595959]">Aucune commune française ne correspond à votre recherche.</p>
            ) : (
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1.5 text-[14px] text-[#595959]">
                {filteredFrance.map((city) => (
                  <li key={city} className="truncate">
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Allemagne */}
          <div className="border border-[#d5d5d5] rounded-[10px] p-6 bg-white">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#dcdcdc]">
              <h2 className="text-[22px] font-semibold text-[#292929] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#FC8920]" />
                Zone de livraison en Allemagne
              </h2>
              <span className="text-[13px] font-medium text-[#595959] tabular-nums">
                {filteredGermany.length} communes
              </span>
            </div>

            {filteredGermany.length === 0 ? (
              <p className="text-[14px] text-[#595959]">Aucune commune allemande ne correspond à votre recherche.</p>
            ) : (
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1.5 text-[14px] text-[#595959]">
                {filteredGermany.map((city) => (
                  <li key={city} className="truncate">
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
