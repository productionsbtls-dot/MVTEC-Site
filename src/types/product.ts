import type { MarketId } from './market';

export type Product = {
  id: string;
  marketIds: MarketId[];
  name: string;
  model: string;
  category: 'nettoyage' | 'hygiene' | 'epi' | 'location' | 'sav';
  price: number;
  image: string;
  stock: 'in_stock' | 'on_quote' | 'low_stock';
};
