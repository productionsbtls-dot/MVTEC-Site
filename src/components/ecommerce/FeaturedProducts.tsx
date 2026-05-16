import { products } from '../../data/products';
import type { MarketId } from '../../types/market';
import { ProductCard } from '../common/ProductCard';

export function FeaturedProducts({ marketId }: { marketId: MarketId }) {
  const marketProducts = products.filter((product) => product.marketIds.includes(marketId));

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-3xl font-black">Nos produits phares</h2>
        <a className="text-sm font-black text-mvtec-blue" href="/boutique">Voir tous les produits →</a>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {marketProducts.slice(0, 5).map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}
