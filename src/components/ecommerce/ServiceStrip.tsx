import { services } from '../../data/services';

export function ServiceStrip() {
  return (
    <section className="border-y border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-6 sm:px-6 md:grid-cols-3 xl:grid-cols-6">
        {services.map((service) => (
          <div key={service} className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-bold text-white/80">
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}
