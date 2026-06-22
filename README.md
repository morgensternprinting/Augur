# Augur — Les présages du champ de bataille

**Compagnon de table pour Warhammer: The Old World (TOW).** Avant même de lancer un dé, Augur lit les présages de tes engagements : il prévoit l'issue probable de chaque combat et te guide pas à pas dans la phase de corps à corps.

🔮 **Application en ligne → https://morgensternprinting.github.io/Augur/**

---

## Fonctionnalités

- **Prévision de combat (moteur Monte-Carlo, 8000 itérations).** Mets deux unités face à face et obtiens l'écart de points de victoire attendu, les probabilités de gagner / nul / fuir, et les pertes moyennes par round. Trois visualisations : Verdict, Cadran, Duel.
- **Moteur de règles exact.** Tableaux officiels Touche (CC vs CC) et Blessure (F vs E), sauvegardes avec modificateur de Force, sauvegardes invulnérables (ward) et Régénération, Coup Fatal, Tueur, ordre de frappe par Initiative (Frappe en premier/dernier, charge, contre-charge), et ~37 règles spéciales d'armée calculées exactement (attaques empoisonnées, enflammées, éthérées, haine/peur ciblées, frénésie, relances, auras défensives, ripostes, etc.).
- **Défi — duel de champions.** Section dédiée 1v1 entre personnages : prévision victoire/nul/défaite + surtuerie moyenne, reportée d'un clic dans le résultat de combat.
- **Assistant de phase de combat.** Questionnaire guidé en 4 étapes : charge & réaction → résultat de combat → test de moral → poursuite, avec saisie et lancer de dés intégrés.
- **Suivi de partie.** Compteur de tours / phases / sous-phases pour les deux joueurs, choix du premier joueur, nombre de rounds configurable, et — si une liste est chargée — un **digest des règles actives par sous-phase** pour chaque unité.
- **Tables de référence rapide.** Incidents de tir, Fiascos magiques, tableaux Touche/Blessure générés en direct par le moteur.
- **Import de listes.** Formats **TOW en 1** (`.json`) et **OWB Builder** (`.owb.json`) — les objets magiques et options sont appliqués automatiquement au calcul.
- **Lance-dés** configurable (N dés, faces, garder les meilleurs/pires, relance des 1, préréglages).
- **Bilingue FR / EN** (bascule par drapeau, mémorisée), **responsive** téléphone / tablette / PC.

## Utilisation

Ouvre simplement le lien ci-dessus dans un navigateur (mobile ou bureau). Aucune installation. L'état de partie et les listes importées sont sauvegardés localement dans le navigateur.

## Technique

- **Application autonome :** un seul `index.html` (React 18 + Babel standalone via CDN, **sans étape de build**).
- **Données** chargées via `<script src>` : `unit_db.js` (profils + règles), `owb_unit_data.js` (points + noms FR), `rules_db.js` / `rules_fr.js` (règles + noms FR), `items_db.js` (objets magiques). Ces fichiers doivent rester dans le même dossier que `index.html`.
- **Déploiement :** GitHub Pages depuis `main` / racine (`.nojekyll` présent).
- **Tests :** une batterie de tests moteur (`runEngineSelfTests`) s'exécute au démarrage et journalise dans la console.

### Développement local

L'app a besoin d'être servie en HTTP (et non `file://`) pour charger les données. Avec Python :

```bash
python -m http.server 8000
# puis ouvrir http://localhost:8000/index.html
```

## Avertissement

Warhammer: The Old World, les noms d'unités, de règles et l'univers associé sont la propriété de **Games Workshop**. Augur est un outil d'aide de jeu **non officiel, non affilié et non approuvé** par Games Workshop, distribué gratuitement à des fins personnelles. Aucune approbation de Games Workshop n'est sous-entendue.

## Licence

Code : usage personnel. Le contenu de règles reste la propriété de ses ayants droit respectifs.
