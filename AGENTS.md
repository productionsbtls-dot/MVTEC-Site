# Instructions pour Codex — Projet MVTEC E-commerce

## Objectif

Construire un site e-commerce premium pour MVTEC avec deux marchés : Guadeloupe et Métropole.

## Règles de développement

- Toujours garder le build fonctionnel.
- Ne jamais casser les routes `/guadeloupe`, `/metropole` et `/admin`.
- Utiliser TypeScript strict.
- Séparer les données dans `src/data`.
- Séparer les types dans `src/types`.
- Garder le design sombre, industriel, bleu/vert MVTEC.
- Priorité conversion : devis, panier, confiance, SAV, livraison.

## Tests avant chaque PR

```bash
npm install
npm run typecheck
npm run build
```

## Phases

1. Front Guadeloupe et Métropole.
2. Catalogue et panier localStorage.
3. Back office Black Tigre : catalogue, commandes, médias, SEO.
4. Backend Supabase ou Firebase.
5. Paiement Stripe et emails Brevo.
