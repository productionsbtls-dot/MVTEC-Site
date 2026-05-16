import { Link } from 'react-router-dom';
import { MapPin, Search, ShoppingCart, User } from 'lucide-react';
import type { MarketConfig } from '../../types/market';

export function Header({ market }: { market: MarketConfig }) {
  return (
    <header className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-5">
      <Link to={`/${market.id}`} className="min-w-44">
        <div className="text-4xl font-black tracking-tight text-mvtec-blue">MVTEC</div>
        <div className="text-xs font-black tracking-[0.28em] text-mvtec-green">{market.logoSuffix}</div>
      </Link>

      <div className="hidden flex-1 items-center rounded-2xl border border-white/10 bg-white/8 px-4 py-3 lg:flex">
        <input className="flex-1 bg-transparent text-sm outline-none" placeholder="Rechercher un produit, une marque..." />
        <Search size={18} />
      </div>

      <nav className="hidden items-center gap-5 text-sm font-semibold text-white/80 xl:flex">
        <Link to={`/${market.id}`}>Accueil</Link>
        <Link to="/boutique">Boutique</Link>
        <Link to="/location">Location</Link>
        <Link to="/sav">SAV</Link>
        <Link to="/boutique">Hygiène</Link>
        <Link to="/boutique">EPI</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="ml-auto hidden items-center gap-4 text-xs text-white/80 md:flex">
        <MapPin className="text-mvtec-green" size={20} />
        <span>{market.deliveryText}</span>
        <User size={22} />
        <ShoppingCart size={24} />
      </div>
    </header>
  );
}
