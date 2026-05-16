import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-mvtec-green">Catalogue MVTEC</p>
          <h2 className="mt-2 text-3xl font-black text-white">Univers pros à forte disponibilité</h2>
        </div>
        <Link to="/boutique" className="text-sm font-black text-mvtec-blue hover:text-sky-300">Explorer le catalogue →</Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {categories.map((category) => (
          <article
            key={category.id}
            className="group rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-premium transition hover:-translate-y-1 hover:border-mvtec-green/40 hover:bg-white/[0.1]"
          >
            <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-mvtec-blue/70 to-mvtec-green/70 shadow-lg shadow-mvtec-blue/20" />
            <h3 className="text-xl font-black text-white">{category.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/[0.62]">{category.description}</p>
            <Link to={`/boutique?category=${category.id}`} className="mt-5 inline-block text-sm font-black text-mvtec-green">
              Voir les produits →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
