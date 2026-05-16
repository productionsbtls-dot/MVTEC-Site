import { CheckCircle2, FileText, Plus } from 'lucide-react';
import type { Product } from '../../types/product';
import { addProductToCart } from '../../utils/cart';
import { formatPrice } from '../../utils/formatPrice';

const categoryThemes: Record<Product['category'], { label: string; glow: string; panel: string }> = {
  nettoyage: {
    label: 'Machine pro',
    glow: 'from-mvtec-blue/70 via-cyan-300/20 to-transparent',
    panel: 'bg-mvtec-blue/15',
  },
  hygiene: {
    label: 'Hygiène',
    glow: 'from-mvtec-green/70 via-emerald-200/20 to-transparent',
    panel: 'bg-mvtec-green/15',
  },
  epi: {
    label: 'Protection',
    glow: 'from-amber-300/70 via-mvtec-green/20 to-transparent',
    panel: 'bg-amber-300/15',
  },
  location: {
    label: 'Location',
    glow: 'from-indigo-300/70 via-mvtec-blue/20 to-transparent',
    panel: 'bg-indigo-300/15',
  },
  sav: {
    label: 'SAV',
    glow: 'from-slate-100/70 via-mvtec-blue/20 to-transparent',
    panel: 'bg-white/10',
  },
};

const stockLabels: Record<Product['stock'], string> = {
  in_stock: 'En stock',
  low_stock: 'Stock limité',
  on_quote: 'Sur devis',
};

type ProductCardProps = {
  product: Product;
  compact?: boolean;
};

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const theme = categoryThemes[product.category];
  const isQuoteOnly = product.stock === 'on_quote';

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] shadow-premium backdrop-blur transition hover:-translate-y-1 hover:border-mvtec-blue/40 hover:bg-white/[0.1]">
      <div className="p-4 pb-0">
        <div className="relative flex h-44 items-end justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#071321]">
          <div className={`absolute inset-x-6 top-4 h-28 rounded-full bg-gradient-to-br ${theme.glow} blur-2xl`} />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.12)_0,transparent_22%),radial-gradient(circle_at_50%_0,rgba(255,255,255,.12),transparent_36%)]" />
          <div className="relative mb-5 flex w-32 flex-col items-center">
            <div className={`h-20 w-24 rounded-t-[2rem] border border-white/15 ${theme.panel} shadow-2xl`} />
            <div className="h-5 w-32 rounded-full border border-white/10 bg-black/45" />
            <div className="mt-2 grid w-28 grid-cols-3 gap-2">
              <span className="h-2 rounded-full bg-mvtec-blue" />
              <span className="h-2 rounded-full bg-white/40" />
              <span className="h-2 rounded-full bg-mvtec-green" />
            </div>
          </div>
          <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white/75">
            {theme.label}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-black leading-tight text-white">{product.name}</h3>
            <p className="mt-1 text-sm text-white/60">{product.model}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-mvtec-green/10 px-2.5 py-1 text-[0.7rem] font-black uppercase text-mvtec-green">
            <CheckCircle2 size={13} /> {stockLabels[product.stock]}
          </span>
        </div>

        {!compact && (
          <p className="mt-4 text-sm leading-6 text-white/[0.62]">
            Sélection premium MVTEC prête pour usage professionnel intensif, accompagnée par nos équipes terrain.
          </p>
        )}

        <div className="mt-auto pt-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">À partir de</span>
              <strong className="block text-2xl font-black text-white">{formatPrice(product.price)}</strong>
            </div>
            {isQuoteOnly && <span className="text-xs font-bold text-white/50">Configurable</span>}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl bg-mvtec-green px-4 py-3 text-sm font-black text-white transition hover:bg-green-400"
              onClick={() => addProductToCart(product.id)}
            >
              <Plus className="mr-2" size={17} /> Panier
            </button>
            <a
              href={`/contact?product=${product.id}`}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-black text-white transition hover:border-mvtec-blue/50 hover:bg-white/15"
            >
              <FileText className="mr-2" size={17} /> Devis
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
