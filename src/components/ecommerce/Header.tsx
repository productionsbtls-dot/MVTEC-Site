import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, MapPin, Menu, Search, ShoppingCart, User } from 'lucide-react';
import { markets } from '../../data/markets';
import type { MarketConfig } from '../../types/market';
import { getCartSummary, subscribeToCartUpdates } from '../../utils/cart';

export function Header({ market }: { market: MarketConfig }) {
  const [cartCount, setCartCount] = useState(() => getCartSummary().totalItems);

  useEffect(() => subscribeToCartUpdates(() => setCartCount(getCartSummary().totalItems)), []);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#06111f]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6">
        <Link to={`/${market.id}`} className="min-w-36 sm:min-w-44">
          <div className="text-3xl font-black tracking-tight text-mvtec-blue sm:text-4xl">MVTEC</div>
          <div className="text-[0.65rem] font-black tracking-[0.28em] text-mvtec-green">{market.logoSuffix}</div>
        </Link>

        <div className="hidden flex-1 items-center rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 lg:flex">
          <input
            className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/[0.38]"
            placeholder="Rechercher un produit, une marque, une référence..."
          />
          <Search className="text-white/[0.55]" size={18} />
        </div>

        <nav className="hidden items-center gap-5 text-sm font-semibold text-white/[0.78] xl:flex">
          <Link className="transition hover:text-mvtec-green" to={`/${market.id}`}>Accueil</Link>
          <Link className="transition hover:text-mvtec-green" to="/boutique">Boutique</Link>
          <Link className="transition hover:text-mvtec-green" to="/location">Location</Link>
          <Link className="transition hover:text-mvtec-green" to="/sav">SAV</Link>
          <Link className="transition hover:text-mvtec-green" to="/contact">Contact</Link>
        </nav>

        <div className="ml-auto hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.07] p-1 md:flex">
          {Object.values(markets).map((availableMarket) => (
            <Link
              key={availableMarket.id}
              to={`/${availableMarket.id}`}
              className={`rounded-xl px-3 py-2 text-xs font-black uppercase tracking-[0.14em] transition ${
                availableMarket.id === market.id
                  ? 'bg-mvtec-blue text-white shadow-lg shadow-mvtec-blue/20'
                  : 'text-white/[0.58] hover:bg-white/10 hover:text-white'
              }`}
            >
              {availableMarket.id === 'guadeloupe' ? '971' : 'FR'}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 text-xs text-white/[0.78] md:flex">
          <MapPin className="text-mvtec-green" size={20} />
          <span className="hidden max-w-36 leading-4 2xl:block">{market.deliveryText}</span>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-mvtec-green px-3 py-2 font-black text-white transition hover:bg-green-400"
          >
            <FileText className="mr-2" size={16} /> Devis
          </Link>
          <User size={22} />
          <Link to="/boutique" className="relative rounded-xl bg-white/10 p-2 transition hover:bg-white/15" aria-label="Voir le panier">
            <ShoppingCart size={23} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-mvtec-green px-1 text-[0.65rem] font-black text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        <button type="button" className="rounded-xl border border-white/10 bg-white/10 p-2 text-white md:hidden" aria-label="Ouvrir le menu">
          <Menu size={23} />
        </button>
      </div>
    </header>
  );
}
