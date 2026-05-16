import type { MarketConfig } from '../types/market';

export const markets: Record<MarketConfig['id'], MarketConfig> = {
  guadeloupe: {
    id: 'guadeloupe',
    label: 'MVTEC Guadeloupe',
    logoSuffix: 'GUADELOUPE',
    heroKicker: 'MVTEC GUADELOUPE',
    heroTitle: 'Votre partenaire matériel & hygiène pour les pros',
    heroSubtitle:
      'Équipements professionnels, solutions d’hygiène, location, maintenance et SAV réactif pour les entreprises guadeloupéennes.',
    deliveryText: 'Livraison partout en Guadeloupe',
    offerTitle: 'Offres pros Guadeloupe',
    offerBullets: ['Livraison locale rapide', 'Intervention sur site', 'Tarifs pros & devis sur mesure'],
    phone: '0590 123 456',
    email: 'contact@mvtec-guadeloupe.fr',
    address: 'ZAE de Jarry, 97122 Baie-Mahault, Guadeloupe',
  },
  metropole: {
    id: 'metropole',
    label: 'MVTEC Métropole',
    logoSuffix: 'MÉTROPOLE',
    heroKicker: 'MVTEC MÉTROPOLE',
    heroTitle: 'Équipements professionnels pour toute la France',
    heroSubtitle:
      'Stock national, livraison rapide et service après-vente expert pour entreprises, collectivités, industries et professionnels du nettoyage.',
    deliveryText: 'Livraison partout en France métropolitaine',
    offerTitle: 'Offres pros Métropole',
    offerBullets: ['Livraison nationale 24/48h', 'Grandes quantités', 'Solutions multi-sites', 'Accompagnement dédié'],
    phone: '01 84 80 01 80',
    email: 'contact@mvtec-metropole.fr',
    address: '10 rue des Entreprises, 75001 Paris, France',
  },
};
