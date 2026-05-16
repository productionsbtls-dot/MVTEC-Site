import { MarketHome } from '../features/MarketHome';
import { markets } from '../data/markets';

export default function HomeMetropole() {
  return <MarketHome market={markets.metropole} />;
}
