import type { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/8 p-5 shadow-premium">
      <div className="mb-5 flex h-40 items-center justify-center rounded-2xl bg-white/10">
        <span className="text-sm text-white/50">Image produit</span>
      </div>
      <h3 className="font-black">{product.name}</h3>
      <p className="text-sm text-white/60">{product.model}</p>
      <div className="mt-4 flex items-center justify-between">
        <strong className="text-xl">{formatPrice(product.price)}</strong>
        <span className="text-xs text-mvtec-green">● En stock</span>
      </div>
      <button className="mt-5 w-full rounded-xl bg-mvtec-green px-4 py-3 text-sm font-black text-white transition hover:bg-green-400">
        Ajouter au panier
      </button>
    </article>
  );
}
