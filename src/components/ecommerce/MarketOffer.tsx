import type { MarketConfig } from '../../types/market';

export function MarketOffer({ market }: { market: MarketConfig }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="rounded-[2rem] border border-mvtec-green/30 bg-gradient-to-br from-mvtec-green/20 to-mvtec-blue/20 p-8 shadow-premium">
        <h2 className="text-3xl font-black">{market.offerTitle}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {market.offerBullets.map((bullet) => (
            <div key={bullet} className="rounded-2xl bg-black/25 p-5 font-bold text-white/90">✓ {bullet}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
