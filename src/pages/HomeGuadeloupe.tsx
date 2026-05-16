import { MarketHome } from '../features/MarketHome';
import { markets } from '../data/markets';

export default function HomeGuadeloupe() {
  return <MarketHome market={markets.guadeloupe} />;
}
