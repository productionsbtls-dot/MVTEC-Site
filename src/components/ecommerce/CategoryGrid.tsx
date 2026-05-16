import { categories } from '../../data/categories';

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {categories.map((category) => (
          <article key={category.id} className="rounded-3xl border border-white/10 bg-white p-6 text-slate-950 shadow-premium">
            <h3 className="text-xl font-black">{category.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
            <button className="mt-5 text-sm font-black text-mvtec-blue">Voir les produits →</button>
          </article>
        ))}
      </div>
    </section>
  );
}
