import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, FileText, ShoppingCart } from 'lucide-react';
import { ProductCard } from '../components/common/ProductCard';
import { Footer } from '../components/ecommerce/Footer';
import { Header } from '../components/ecommerce/Header';
import { categories } from '../data/categories';
import { markets } from '../data/markets';
import { products } from '../data/products';
import type { MarketId } from '../types/market';
import type { Product } from '../types/product';

const marketFilterOptions: Array<{ id: 'all' | MarketId; label: string }> = [
  { id: 'all', label: 'Tous marchés' },
  { id: 'guadeloupe', label: 'Guadeloupe' },
  { id: 'metropole', label: 'Métropole' },
];

const categoryFilterOptions: Array<{ id: 'all' | Product['category']; label: string }> = [
  { id: 'all', label: 'Toutes catégories' },
  ...categories.map((category) => ({ id: category.id, label: category.title })),
];

function isMarketFilter(value: string | null): value is MarketId {
  return value === 'guadeloupe' || value === 'metropole';
}

function isCategoryFilter(value: string | null): value is Product['category'] {
  return categories.some((category) => category.id === value);
}

export default function Boutique() {
  const [searchParams, setSearchParams] = useSearchParams();
  const marketParam = searchParams.get('market');
  const categoryParam = searchParams.get('category');
  const selectedMarket = isMarketFilter(marketParam) ? marketParam : 'all';
  const selectedCategory = isCategoryFilter(categoryParam) ? categoryParam : 'all';
  const headerMarket = selectedMarket === 'metropole' ? markets.metropole : markets.guadeloupe;

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const matchesMarket = selectedMarket === 'all' || product.marketIds.includes(selectedMarket);
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

        return matchesMarket && matchesCategory;
      }),
    [selectedCategory, selectedMarket],
  );

  const updateFilter = (key: 'market' | 'category', value: string) => {
    const nextParams = new URLSearchParams(searchParams);

    if (value === 'all') {
      nextParams.delete(key);
    } else {
      nextParams.set(key, value);
    }

    setSearchParams(nextParams);
  };

  return (
    <div className="mvtec-page-bg min-h-screen text-white">
      <Header market={headerMarket} />
      <main>
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-premium sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-mvtec-green">Boutique MVTEC</p>
                <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
                  Catalogue professionnel filtrable par marché et catégorie
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.68]">
                  Matériel de nettoyage, hygiène, EPI, location et SAV pour les professionnels en Guadeloupe et en Métropole.
                  Ajoutez les références simples au panier ou demandez un devis pour les projets sur mesure.
                </p>
              </div>
              <div className="grid gap-3 rounded-3xl border border-white/10 bg-black/25 p-5 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/[0.06] p-4">
                  <ShoppingCart className="mb-3 text-mvtec-blue" size={25} />
                  <p className="font-black">Panier localStorage</p>
                  <p className="mt-1 text-sm text-white/[0.58]">Préparez une liste d’achat sans compte client.</p>
                </div>
                <div className="rounded-2xl bg-white/[0.06] p-4">
                  <FileText className="mb-3 text-mvtec-green" size={25} />
                  <p className="font-black">Devis prioritaire</p>
                  <p className="mt-1 text-sm text-white/[0.58]">Idéal pour volumes, contrats, location et maintenance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
          <div className="mb-6 grid gap-4 rounded-3xl border border-white/10 bg-black/[0.22] p-4 shadow-premium lg:grid-cols-[auto_1fr_1fr] lg:items-center">
            <div className="inline-flex items-center gap-2 font-black text-white">
              <Filter className="text-mvtec-green" size={20} /> Filtres
            </div>
            <div className="flex flex-wrap gap-2">
              {marketFilterOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`rounded-xl px-4 py-2 text-sm font-black transition ${
                    selectedMarket === option.id ? 'bg-mvtec-blue text-white' : 'bg-white/10 text-white/[0.65] hover:bg-white/15 hover:text-white'
                  }`}
                  onClick={() => updateFilter('market', option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {categoryFilterOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`rounded-xl px-4 py-2 text-sm font-black transition ${
                    selectedCategory === option.id ? 'bg-mvtec-green text-white' : 'bg-white/10 text-white/[0.65] hover:bg-white/15 hover:text-white'
                  }`}
                  onClick={() => updateFilter('category', option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm font-bold text-white/[0.62]">
              {filteredProducts.length} résultat{filteredProducts.length > 1 ? 's' : ''} — disponibilité selon marché sélectionné
            </p>
            <Link to="/contact" className="text-sm font-black text-mvtec-green hover:text-green-300">
              Besoin d’un volume ou d’une référence spéciale ? Demander un devis →
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </section>
      </main>
      <Footer market={headerMarket} />
    </div>
  );
}
