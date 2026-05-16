import { FileText, PhoneCall } from 'lucide-react';
import type { MarketConfig } from '../../types/market';

export function MarketOffer({ market }: { market: MarketConfig }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="overflow-hidden rounded-[2rem] border border-mvtec-green/30 bg-gradient-to-br from-mvtec-green/20 to-mvtec-blue/20 p-6 shadow-premium sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-mvtec-green">Conversion pro</p>
            <h2 className="mt-3 text-3xl font-black">{market.offerTitle}</h2>
            <p className="mt-4 leading-7 text-white/[0.68]">
              Pour les achats complexes, volumes, contrats ou déploiements multi-sites, MVTEC prépare une offre claire avec
              disponibilité, transport, mise en service et SAV.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact" className="inline-flex items-center rounded-xl bg-mvtec-green px-5 py-3 text-sm font-black text-white transition hover:bg-green-400">
                <FileText className="mr-2" size={17} /> Demander un devis
              </a>
              <a href={`tel:${market.phone.replaceAll(' ', '')}`} className="inline-flex items-center rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-black text-white transition hover:bg-white/15">
                <PhoneCall className="mr-2" size={17} /> {market.phone}
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {market.offerBullets.map((bullet) => (
              <div key={bullet} className="rounded-2xl border border-white/10 bg-black/25 p-5 font-bold text-white/90">
                <span className="mr-2 text-mvtec-green">✓</span> {bullet}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
