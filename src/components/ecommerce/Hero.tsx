import { ArrowRight, FileText } from 'lucide-react';
import { Button } from '../common/Button';
import type { MarketConfig } from '../../types/market';

export function Hero({ market }: { market: MarketConfig }) {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="mb-4 text-sm font-black tracking-[0.28em] text-mvtec-green">{market.heroKicker}</p>
        <h1 className="max-w-3xl text-5xl font-black leading-tight md:text-6xl">{market.heroTitle}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">{market.heroSubtitle}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button>Découvrir la boutique <ArrowRight className="ml-2 inline" size={17} /></Button>
          <Button variant="green"><FileText className="mr-2 inline" size={17} />Obtenir un devis</Button>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/12 to-white/5 p-5 shadow-premium">
        <div className="flex aspect-[16/9] items-end justify-center rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_20%,rgba(0,155,223,.35),transparent_28%),linear-gradient(135deg,#10243a,#050b14)] p-8">
          <div className="grid w-full grid-cols-3 gap-4">
            {['Autolaveuse', 'Nettoyeur HP', 'Aspirateur pro'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center shadow-xl">
                <div className="mx-auto mb-4 h-24 rounded-xl bg-mvtec-blue/50" />
                <p className="font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
