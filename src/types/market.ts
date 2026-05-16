export type MarketId = 'guadeloupe' | 'metropole';

export type MarketConfig = {
  id: MarketId;
  label: string;
  logoSuffix: string;
  heroKicker: string;
  heroTitle: string;
  heroSubtitle: string;
  deliveryText: string;
  offerTitle: string;
  offerBullets: string[];
  phone: string;
  email: string;
  address: string;
};
