import { Header } from '../components/ecommerce/Header';
import { Hero } from '../components/ecommerce/Hero';
import { CategoryGrid } from '../components/ecommerce/CategoryGrid';
import { FeaturedProducts } from '../components/ecommerce/FeaturedProducts';
import { MarketOffer } from '../components/ecommerce/MarketOffer';
import { ServiceStrip } from '../components/ecommerce/ServiceStrip';
import { Footer } from '../components/ecommerce/Footer';
import type { MarketConfig } from '../types/market';

export function MarketHome({ market }: { market: MarketConfig }) {
  return (
    <div className="mvtec-page-bg min-h-screen text-white">
      <Header market={market} />
      <main>
        <Hero market={market} />
        <CategoryGrid />
        <FeaturedProducts marketId={market.id} />
        <MarketOffer market={market} />
        <ServiceStrip />
      </main>
      <Footer market={market} />
    </div>
  );
}
