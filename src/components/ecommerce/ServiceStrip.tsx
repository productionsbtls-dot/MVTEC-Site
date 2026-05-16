import { services } from '../../data/services';

export function ServiceStrip() {
  return (
    <section className="border-y border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 py-6 md:grid-cols-3 xl:grid-cols-6">
        {services.map((service) => (
          <div key={service} className="text-sm font-bold text-white/80">{service}</div>
        ))}
      </div>
    </section>
  );
}
