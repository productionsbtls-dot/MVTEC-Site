import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import type { MarketId } from '../../types/market';
import { ProductCard } from '../common/ProductCard';

export function FeaturedProducts({ marketId }: { marketId: MarketId }) {
  const marketProducts = products.filter((product) => product.marketIds.includes(marketId));

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-mvtec-green">Sélection premium</p>
          <h2 className="mt-2 text-3xl font-black">Nos produits phares</h2>
        </div>
        <Link className="text-sm font-black text-mvtec-blue hover:text-sky-300" to={`/boutique?market=${marketId}`}>
          Voir tous les produits →
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {marketProducts.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} compact />)}
      </div>
    </section>
  );
}
