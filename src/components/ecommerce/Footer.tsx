import type { MarketConfig } from '../../types/market';

export function Footer({ market }: { market: MarketConfig }) {
  return (
    <footer className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-white/70 md:grid-cols-4">
      <div>
        <div className="text-3xl font-black text-mvtec-blue">MVTEC</div>
        <div className="text-xs font-black tracking-[0.24em] text-mvtec-green">{market.logoSuffix}</div>
      </div>
      <div>
        <h4 className="mb-3 font-black text-white">Boutique</h4>
        <p>Tous les produits</p><p>Nouveautés</p><p>Promotions</p>
      </div>
      <div>
        <h4 className="mb-3 font-black text-white">Services</h4>
        <p>SAV & Maintenance</p><p>Location</p><p>Contrats d’entretien</p>
      </div>
      <div>
        <h4 className="mb-3 font-black text-white">Nous contacter</h4>
        <p>{market.phone}</p><p>{market.email}</p><p>{market.address}</p>
      </div>
    </footer>
  );
}
