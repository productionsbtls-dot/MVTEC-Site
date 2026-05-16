import { ArrowRight, FileText, ShieldCheck, Truck } from 'lucide-react';
import type { MarketConfig } from '../../types/market';

export function Hero({ market }: { market: MarketConfig }) {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
      <div>
        <p className="mb-4 text-sm font-black tracking-[0.28em] text-mvtec-green">{market.heroKicker}</p>
        <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">{market.heroTitle}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.72]">{market.heroSubtitle}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/boutique"
            className="inline-flex items-center rounded-xl bg-mvtec-blue px-5 py-3 text-sm font-black text-white transition hover:bg-sky-400"
          >
            Découvrir la boutique <ArrowRight className="ml-2" size={17} />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center rounded-xl bg-mvtec-green px-5 py-3 text-sm font-black text-white transition hover:bg-green-400"
          >
            <FileText className="mr-2" size={17} /> Obtenir un devis
          </a>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
            <Truck className="mb-3 text-mvtec-green" size={24} />
            <p className="font-black">Logistique dédiée</p>
            <p className="mt-1 text-sm text-white/[0.58]">{market.deliveryText}, suivi et mise en service.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
            <ShieldCheck className="mb-3 text-mvtec-blue" size={24} />
            <p className="font-black">SAV terrain</p>
            <p className="mt-1 text-sm text-white/[0.58]">Maintenance, pièces et contrats pour sécuriser votre exploitation.</p>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.12] to-white/5 p-4 shadow-premium sm:p-5">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_20%,rgba(0,155,223,.38),transparent_28%),linear-gradient(135deg,#10243a,#050b14)] p-5 sm:p-8">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />
          <div className="relative grid min-h-[320px] items-end gap-4 sm:grid-cols-3">
            {[
              { name: 'Autolaveuse', tag: 'Sols industriels', height: 'h-36', color: 'bg-mvtec-blue/25' },
              { name: 'Nettoyeur HP', tag: 'Intervention rapide', height: 'h-44', color: 'bg-mvtec-green/[0.22]' },
              { name: 'Aspirateur pro', tag: 'Usage intensif', height: 'h-32', color: 'bg-white/[0.12]' },
            ].map((item) => (
              <div key={item.name} className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center shadow-xl backdrop-blur">
                <div className={`mx-auto mb-4 flex ${item.height} max-w-32 items-end justify-center rounded-t-[2rem] border border-white/15 ${item.color}`}>
                  <div className="mb-4 h-3 w-20 rounded-full bg-white/[0.55]" />
                </div>
                <p className="font-black">{item.name}</p>
                <p className="mt-1 text-xs text-white/[0.52]">{item.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
