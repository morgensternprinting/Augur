// Synced verbatim from TOW en 1 OWB_UNIT_DATA (full dataset, canonical slugs).
const OWB_UNIT_DATA = {
  "primal-warhounds": {id:"primal-warhounds", army:"beastmen-brayherds", category:"core", name_fr:"Chiens Primordiaux", name_en:"Primal Warhounds", points:6, unitSize:"10+", specialRules:"Close Order, Horde, Motley Crew, Move Through Cover, Swiftstride, Warband", opts:[{"name_fr": "Peau Blindée (1)", "name_en": "Armoured Hide (1)", "points": 1, "perModel": true}, {"name_fr": "Attaques Empoisonnées", "name_en": "Poisoned Attacks", "points": 1, "perModel": true}, {"name_fr": "Ravageurs Ungors", "name_en": "Ungor Ravagers", "points": 7}], equip:[{"name_fr": "Armes de base (Griffes et crocs)", "name_en": "Hand weapons (Claws and fangs)", "points": 0, "perModel": true, "active": true}]},
  "razorgor-herd": {id:"razorgor-herd", army:"beastmen-brayherds", category:"core", name_fr:"Harde de Razorgor", name_en:"Razorgor Herd", points:52, unitSize:"1+", specialRules:"Armour Bane (1), Fear, Foe Render, Impact Hits (D3), Loner, Open Order, Primal Fury, Razor Tusks, Swiftstride", equip:[{"name_fr": "Armes de base (défenses)", "name_en": "Hand weapons (tusks)", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère (peau calleuse)", "name_en": "Light armour (calloused hide)", "points": 0, "perModel": true, "active": true}]},
  "centigor-herd-core": {id:"centigor-herd-core", army:"beastmen-brayherds", category:"core", name_fr:"Harde de Centigor", name_en:"Centigor Herd", points:17, unitSize:"5+", specialRules:"Drunken, Fast Cavalry, Horde, Mark of Chaos Undivided, Move Through Cover, Open Order, Primal Fury, Skirmishers, Stomp Attacks (1), Swiftstride, Warband", opts:[{"name_fr": "Haches de lancer", "name_en": "Throwing axes", "points": 1, "perModel": true}, {"name_fr": "Javelines", "name_en": "Javelins", "points": 1, "perModel": true}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 1, "perModel": true}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 1, "perModel": true}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 0, "perModel": true}, {"name_fr": "Les Fils de Ghorros", "name_en": "The Sons of Ghorros", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Boucliers", "name_en": "Hand weapons, Shields", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base, Lances de cavalerie, Boucliers", "name_en": "Hand weapons, Cavalry spears, Shields", "points": 1, "perModel": true}, {"name_fr": "Armes de base, Javelots, Boucliers", "name_en": "Hand weapons, Throwing spears, Shields", "points": 1, "perModel": true}, {"name_fr": "Armes de base, Armes lourdes", "name_en": "Hand weapons, Great weapons", "points": 1, "perModel": true}], command:[{"name_fr": "Éventreur (champion)", "name_en": "Gorehoof (champion)", "points": 8}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "tuskgor-chariots-": {id:"tuskgor-chariots-", army:"beastmen-brayherds", category:"core", name_fr:"Char à Sangleboucs", name_en:"Tuskgor Chariot", points:85, specialRules:"Close Order, First Charge, Impact Hits (D6+1), Mark of Chaos Undivided, Primal Fury, Razor Tusks, Warband", equip:[{"name_fr": "Armes de base, Armes lourdes (Aurige Bestigor), Lances de cavalerie (Aurige Gor)", "name_en": "Hand weapons, Great weapons (Bestigor Crew), Cavalry spears (Gor Crew)", "points": 0, "active": true}]},
  "minotaur-herds-core": {id:"minotaur-herds-core", army:"beastmen-brayherds", category:"core", name_fr:"Harde de Minotaure", name_en:"Minotaur Herd", points:44, unitSize:"2+", specialRules:"Blood Greed, Blood Rage, Bull-gors, Close Order, Fear, Foe Render, Impact Hits (1), Mark of Chaos Undivided, Motley Crew, Primal Fury, Warband", opts:[{"name_fr": "Arme de base additionnelle", "name_en": "Additional hand weapon", "points": 3}, {"name_fr": "Arme lourde", "name_en": "Great weapon", "points": 4}, {"name_fr": "Bouclier", "name_en": "Shield", "points": 2}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 3, "perModel": true}], equip:[{"name_fr": "Arme de base", "name_en": "Hand weapon", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Sangor (champion)", "name_en": "Bloodkine (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "bestigor-herds": {id:"bestigor-herds", army:"beastmen-brayherds", category:"special", name_fr:"Harde de Bestigor", name_en:"Bestigor Herd", points:13, unitSize:"5+", specialRules:"Blood Rage, Close Order, Mark of Chaos Undivided, Primal Fury, Warband", opts:[{"name_fr": "Obstiné", "name_en": "Stubborn", "points": 1, "perModel": true}, {"name_fr": "Vétérans", "name_en": "Veteran", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base, Armes lourdes", "name_en": "Hand weapons, Great weapons", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Encorneur (champion)", "name_en": "Gouge-horn (champion)", "points": 8}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "minotaur-herds": {id:"minotaur-herds", army:"beastmen-brayherds", category:"special", name_fr:"Harde de Minotaure", name_en:"Minotaur Herd", points:44, unitSize:"2+", specialRules:"Blood Greed, Blood Rage, Bull-gors, Close Order, Fear, Foe Render, Impact Hits (1), Mark of Chaos Undivided, Motley Crew, Primal Fury, Warband", opts:[{"name_fr": "Arme de base additionnelle", "name_en": "Additional hand weapon", "points": 3}, {"name_fr": "Arme lourde", "name_en": "Great weapon", "points": 4}, {"name_fr": "Bouclier", "name_en": "Shield", "points": 2}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 3, "perModel": true}], equip:[{"name_fr": "Arme de base", "name_en": "Hand weapon", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Sangor (champion)", "name_en": "Bloodkine (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "cockatrice": {id:"cockatrice", army:"beastmen-brayherds", category:"special", name_fr:"Cockatrice", name_en:"Cockatrice", points:170, specialRules:"Close Order, Fly (10), Large Target, Stomp Attacks (1), Stony Stare, Swiftstride, Terror", opts:[{"name_fr": "Vomi acide", "name_en": "Acidic vomit", "points": 20}, {"name_fr": "Attaques Empoisonnées", "name_en": "Poisoned Attacks", "points": 10}], equip:[{"name_fr": "Armes de base (griffes), Regard pétrificateur", "name_en": "Hand weapons (claws), Petrifying gaze", "points": 0, "active": true}], armor:[{"name_fr": "Armure lourde (peau écailleuse)", "name_en": "Heavy armour (scaly skin)", "points": 0, "active": true}]},
  "centigor-herds": {id:"centigor-herds", army:"beastmen-brayherds", category:"special", name_fr:"Harde de Centigor", name_en:"Centigor Herd", points:17, unitSize:"5+", specialRules:"Drunken, Fast Cavalry, Horde, Mark of Chaos Undivided, Move Through Cover, Open Order, Primal Fury, Skirmishers, Stomp Attacks (1), Swiftstride, Warband", opts:[{"name_fr": "Haches de lancer", "name_en": "Throwing axes", "points": 1, "perModel": true}, {"name_fr": "Javelines", "name_en": "Javelins", "points": 1, "perModel": true}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 1, "perModel": true}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 1, "perModel": true}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 0, "perModel": true}, {"name_fr": "Les Fils de Ghorros", "name_en": "The Sons of Ghorros", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Boucliers", "name_en": "Hand weapons, Shields", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base, Lances de cavalerie, Boucliers", "name_en": "Hand weapons, Cavalry spears, Shields", "points": 1, "perModel": true}, {"name_fr": "Armes de base, Javelots, Boucliers", "name_en": "Hand weapons, Throwing spears, Shields", "points": 1, "perModel": true}, {"name_fr": "Armes de base, Armes lourdes", "name_en": "Hand weapons, Great weapons", "points": 1, "perModel": true}], command:[{"name_fr": "Éventreur (champion)", "name_en": "Gorehoof (champion)", "points": 8}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "dragon-ogres": {id:"dragon-ogres", army:"beastmen-brayherds", category:"special", name_fr:"Dragons Ogres", name_en:"Dragon Ogres", points:59, unitSize:"1-9", specialRules:"Armour Bane (1), Armoured Hide (2), Close Order, Fear, Ensorcelled Weapons, Immune to Psychology, Stomp Attacks (2), The Quickening Storm", equip:[{"name_fr": "Arme de base", "name_en": "Hand weapon", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base additionnelles", "name_en": "Additional hand weapons", "points": 3, "perModel": true}, {"name_fr": "Armes lourdes", "name_en": "Great weapons", "points": 4, "perModel": true}, {"name_fr": "Hallebardes", "name_en": "Halberds", "points": 3, "perModel": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 3, "perModel": true}], command:[{"name_fr": "Shartak", "name_en": "Shartak", "points": 7}]},
  "razorgor-chariot": {id:"razorgor-chariot", army:"beastmen-brayherds", category:"special", name_fr:"Char à Razorgors", name_en:"Razorgor Chariot", points:120, specialRules:"Armour Bane (1 - Razorgor only), Close Order, Fear, First Charge, Foe Render (Razorgor only), Impact Hits (D6+2), Mark of Chaos Undivided, Primal Fury, Razor Tusks", equip:[{"name_fr": "Armes de base, Armes lourdes (Aurige Bestigor), Lances de cavalerie (Aurige Gor)", "name_en": "Hand weapons, Great weapons (Bestigor Crew), Cavalry spears (Gor Crew)", "points": 0, "active": true}]},
  "chaos-ogres": {id:"chaos-ogres", army:"beastmen-brayherds", category:"special", name_fr:"Ogres du Chaos", name_en:"Chaos Ogres", points:33, unitSize:"3-15", specialRules:"Armour Bane (1), Close Order, Fear, Impact Hits (1), Ogre Charge", opts:[{"name_fr": "Marque du Chaos Universel", "name_en": "Mark of Chaos Undivided", "points": 0, "perModel": true, "active": true}, {"name_fr": "Marque de Khorne", "name_en": "Mark of Khorne", "points": 3, "perModel": true}, {"name_fr": "Marque de Nurgle", "name_en": "Mark of Nurgle", "points": 3, "perModel": true}, {"name_fr": "Marque de Slaanesh", "name_en": "Mark of Slaanesh", "points": 3, "perModel": true}, {"name_fr": "Marque de Tzeentch", "name_en": "Mark of Tzeentch", "points": 3, "perModel": true}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base additionnelles", "name_en": "Additional hand weapons", "points": 3, "perModel": true}, {"name_fr": "Armes lourdes", "name_en": "Great weapons", "points": 4, "perModel": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Champion (champion)", "name_en": "Champion (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "jabberslythe": {id:"jabberslythe", army:"beastmen-brayherds", category:"special", name_fr:"Jabberslythe", name_en:"Jabberslythe", points:195, specialRules:"Close Order, Fly (9), Large Target, Maddening Aura, Poisoned Attacks, Spurting Bile Blood, Stomp Attacks (D3), Swiftstride, Terror", equip:[{"name_fr": "Griffes mortelles, Langue protractile", "name_en": "Wicked claws, Slythey tongue", "points": 0, "active": true}], armor:[{"name_fr": "Armure lourde (peau écailleuse)", "name_en": "Heavy armour (scaly skin)", "points": 0, "active": true}]},
  "cygor-special": {id:"cygor-special", army:"beastmen-brayherds", category:"special", name_fr:"Cygor", name_en:"Cygor", points:215, specialRules:"Close Order, Ghostsight, Immune to Psychology, Large Target, Soul-eater, Stomp Attacks (D3), Stubborn, Terror, Timmm-berrr!", equip:[{"name_fr": "Arme de base (griffes), Jet de roc", "name_en": "Hand weapon (claws), Hurl attack", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère (peau calleuse)", "name_en": "Light armour (calloused hide)", "points": 0, "active": true}]},
  "ghorgon": {id:"ghorgon", army:"beastmen-brayherds", category:"special", name_fr:"Ghorgon", name_en:"Ghorgon", points:245, specialRules:"Blood Greed, Close Order, Frenzy, Large Target, Primal Fury, Regeneration (6+), Stomp Attacks (D3), Stubborn, Swallow Whole, Terror, Timmm-berrr!", equip:[{"name_fr": "Membres-hachoirs", "name_en": "Cleaver-limbs", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère (peau calleuse)", "name_en": "Light armour (calloused hide)", "points": 0, "active": true}]},
  "herdstone": {id:"herdstone", army:"beastmen-brayherds", category:"special", name_fr:"Pierre de Harde", name_en:"Herdstone", points:100, specialRules:"A Tingle in the Air, Bestial Fury {beastmen}, Dark Sorcery, Fearsome Edifice"},
  "preyton": {id:"preyton", army:"beastmen-brayherds", category:"special", name_fr:"Preyton", name_en:"Preyton", points:160, specialRules:"Close Order, Crown of Antlers {beastmen}, Endless Malice, Fly (10), Impact Hits (D3), Large Target, Terror", opts:[{"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 10}, {"name_fr": "Frénésie", "name_en": "Frenzy", "points": 5}], equip:[{"name_fr": "Armes de base (Griffes et crocs), Ramure difforme", "name_en": "Hand weapons (Claws and fangs), Twisted antlers", "points": 0, "active": true}]},
  "warped-gors": {id:"warped-gors", army:"beastmen-brayherds", category:"special", name_fr:"Gors Difformes", name_en:"Warped Gors", points:16, unitSize:"5+", specialRules:"Armoured Hide (1), Blessing of Chaos, Blood Rage, Mark of Chaos Undivided, Move Through Cover, Open Order, Primal Fury, Random Attacks, Stubborn, Warband", opts:[{"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base, Boucliers", "name_en": "Hand weapons, Shields", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base additionnelles", "name_en": "Additional hand weapons", "points": 0, "perModel": true}], command:[{"name_fr": "Impure-corne (champion)", "name_en": "Splice-horn (champion)", "points": 8}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "tuskgor-chariots-special": {id:"tuskgor-chariots-special", army:"beastmen-brayherds", category:"special", name_fr:"Char à Sangleboucs", name_en:"Tuskgor Chariot", points:85, specialRules:"Close Order, First Charge, Impact Hits (D6+1), Mark of Chaos Undivided, Primal Fury, Razor Tusks, Warband", equip:[{"name_fr": "Armes de base, Armes lourdes (Aurige Bestigor), Lances de cavalerie (Aurige Gor)", "name_en": "Hand weapons, Great weapons (Bestigor Crew), Cavalry spears (Gor Crew)", "points": 0, "active": true}]},
  "dragon-ogre-shaggoth-": {id:"dragon-ogre-shaggoth-", army:"beastmen-brayherds", category:"rare", name_fr:"Shaggoth Dragon Ogre", name_en:"Dragon Ogre Shaggoth", points:225, specialRules:"Armour Bane (2), Armoured Hide (2), Close Order, Ensorcelled Weapons, Immune to Psychology, Large Target, Stomp Attacks (D3+1), Storm Call {warriors}, Terror, The Quickening Storm", equip:[{"name_fr": "Arme de base", "name_en": "Hand weapon", "points": 0, "active": true}, {"name_fr": "Arme de base additionnelle", "name_en": "Additional hand weapon", "points": 3}, {"name_fr": "Arme lourde", "name_en": "Great weapon", "points": 4}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "active": true}, {"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 6}]},
  "cygor": {id:"cygor", army:"beastmen-brayherds", category:"rare", name_fr:"Cygor", name_en:"Cygor", points:215, specialRules:"Close Order, Ghostsight, Immune to Psychology, Large Target, Soul-eater, Stomp Attacks (D3), Stubborn, Terror, Timmm-berrr!", equip:[{"name_fr": "Arme de base (griffes), Jet de roc", "name_en": "Hand weapon (claws), Hurl attack", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère (peau calleuse)", "name_en": "Light armour (calloused hide)", "points": 0, "active": true}]},
  "chaos-giant-": {id:"chaos-giant-", army:"beastmen-brayherds", category:"rare", name_fr:"Géant du Chaos", name_en:"Chaos Giant", points:200, specialRules:"Close Order, Giant Attacks, Immune to Psychology, Large Target, Pick Up And..., Stomp Attacks (D6), Terror, Timmm-berrr!, Unbreakable", opts:[{"name_fr": "Régénération (6+)", "name_en": "Regeneration (6+)", "points": 20}], equip:[{"name_fr": "Massue de Géant", "name_en": "Giant's club", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère (peau calleuse)", "name_en": "Light armour (calloused hide)", "points": 0, "active": true}, {"name_fr": "Armure lourde (peau écailleuse)", "name_en": "Heavy armour (scaly skin)", "points": 10}]},
  "chaos-trolls": {id:"chaos-trolls", army:"beastmen-brayherds", category:"rare", name_fr:"Trolls du Chaos", name_en:"Chaos Trolls", points:41, unitSize:"1-9", specialRules:"Armour Bane (1), Close Order, Fear, Flammable, Regeneration (5+), Stupidity, Motley Crew", opts:[{"name_fr": "Armes de base additionnelles", "name_en": "Additional hand weapons", "points": 3, "perModel": true}, {"name_fr": "Armes lourdes", "name_en": "Great weapons", "points": 4, "perModel": true}], equip:[{"name_fr": "Armes de base, Vomi de Troll", "name_en": "Hand weapons, Troll vomit", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère (peau calleuse)", "name_en": "Light armour (calloused hide)", "points": 0, "perModel": true, "active": true}]},
  "chaos-spawn": {id:"chaos-spawn", army:"beastmen-brayherds", category:"rare", name_fr:"Rejetons du Chaos", name_en:"Chaos Spawn", points:50, unitSize:"1-4", specialRules:"Armour Bane (2), Fear, Immune to Psychology, Open Order, Random Attacks, Random Movement, Stomp Attacks (1), Unbreakable", opts:[{"name_fr": "Rejeton de Khorne", "name_en": "Spawn of Khorne", "points": 3}, {"name_fr": "Rejeton de Nurgle", "name_en": "Spawn of Nurgle", "points": 2}, {"name_fr": "Rejeton de Slaanesh", "name_en": "Spawn of Slaanesh", "points": 3}, {"name_fr": "Rejeton de Tzeentch", "name_en": "Spawn of Tzeentch", "points": 1}], equip:[{"name_fr": "Arme de base (appendices fouettards)", "name_en": "Hand weapon (flailing appendages)", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde (peau écailleuse)", "name_en": "Heavy armour (scaly skin)", "points": 0, "perModel": true, "active": true}]},
  "gigantic-spawn-of-chaos": {id:"gigantic-spawn-of-chaos", army:"beastmen-brayherds", category:"rare", name_fr:"Rejeton Gigantesque du Chaos", name_en:"Gigantic Spawn of Chaos", points:145, specialRules:"Armour Bane (2), Close Order, First Charge, Immune to Psychology, Large Target, Random Attacks, Random Movement, Stomp Attacks (D6), Terror, Timmm-berrr!, Unbreakable", opts:[{"name_fr": "Rejeton Gigantesque de Khorne", "name_en": "Gigantic Spawn of Khorne", "points": 20}, {"name_fr": "Rejeton Gigantesque de Nurgle", "name_en": "Gigantic Spawn of Nurgle", "points": 25}, {"name_fr": "Rejeton Gigantesque de Slaanesh", "name_en": "Gigantic Spawn of Slaanesh", "points": 15}, {"name_fr": "Rejeton Gigantesque de Tzeentch", "name_en": "Gigantic Spawn of Tzeentch", "points": 10}], equip:[{"name_fr": "Serres déchiqueteuses, Gueules avides", "name_en": "Slashing talons {warriors of chaos}, Gnashing maws", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde (Peau écailleuse)", "name_en": "Heavy armour (Scaly skin)", "points": 0, "perModel": true, "active": true}]},
  "bull-centaur-taur'ruk": {id:"bull-centaur-taur'ruk", army:"chaos-dwarfs", category:"characters", name_fr:"Taur’ruk Centaure-Taureau", name_en:"Bull Centaur Taur'ruk", points:145, specialRules:"Armour Bane (1), Armoured Hide (1), Blackshard Armour, Ensorcelled Weapons, Fear, First Charge, Impact Hits (D3+1), Loner, Stampede, Stubborn, Swiftstride", opts:[{"name_fr": "Bouclier", "name_en": "Shield", "points": 3, "perModel": true}], equip:[{"name_fr": "Arme de base", "name_en": "Hand weapon", "points": 0, "perModel": true, "active": true}, {"name_fr": "Arme de Sombreforge", "name_en": "Darkforged weapon", "points": 10, "perModel": true}, {"name_fr": "Arme de base additionnelle", "name_en": "Additional hand weapon", "points": 3, "perModel": true}, {"name_fr": "Arme lourde", "name_en": "Great weapon", "points": 4, "perModel": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}]},
  "kdaai-fireborn": {id:"kdaai-fireborn", army:"chaos-dwarfs", category:"special", name_fr:"K’daai Rejetons de Feu", name_en:"K'daai Fireborn {renegade}", points:41, unitSize:"3+", specialRules:"Blazing Body, Close Order, Ensorcelled Weapons, Fear, Flaming Attacks, Immune to Psychology, Regeneration (5+), Unbreakable, Unstable, Warp-spawned", equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Brûleur d’Hommes (champion)", "name_en": "Manburner (champion)", "points": 7}]},
  "deathshrieker-rocket-launcher": {id:"deathshrieker-rocket-launcher", army:"chaos-dwarfs", category:"special", name_fr:"Lance-Fusées Hurlemort", name_en:"Deathshrieker Rocket Launcher", points:120, specialRules:"Blackshard Armour, Skirmishers", opts:[{"name_fr": "Possédé", "name_en": "Hellbound", "points": 30, "perModel": true}, {"name_fr": "Attelage à Vapeur", "name_en": "Steam Carriage", "points": 10, "perModel": true}], equip:[{"name_fr": "Fusées de Démolition, Fusées Incendiaires Infernales, Armes de base", "name_en": "Demolition Rockets, Infernal Incendiaries, Hand weapons", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}]},
  "magma-cannon": {id:"magma-cannon", army:"chaos-dwarfs", category:"special", name_fr:"Canon à Magma", name_en:"Magma Cannon", points:125, specialRules:"Blackshard Armour, Skirmishers", opts:[{"name_fr": "Possédé", "name_en": "Hellbound", "points": 30, "perModel": true}, {"name_fr": "Attelage à Vapeur", "name_en": "Steam Carriage", "points": 10, "perModel": true}], equip:[{"name_fr": "Lance-flamme, Armes de base", "name_en": "Fire thrower, Hand weapons", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}]},
  "hobgoblin-bolt-thrower": {id:"hobgoblin-bolt-thrower", army:"chaos-dwarfs", category:"special", name_fr:"Baliste Hobgobeline", name_en:"Hobgoblin Bolt Thrower", points:45, specialRules:"Levies, Skirmishers", equip:[{"name_fr": "Baliste, Armes de base", "name_en": "Bolt thrower, Hand weapons", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}]},
  "hobgoblin-wolf-raiders": {id:"hobgoblin-wolf-raiders", army:"chaos-dwarfs", category:"rare", name_fr:"Chevaucheurs de Loups Hobgobelins", name_en:"Hobgoblin Wolf Riders", points:12, unitSize:"5+", specialRules:"Backstab, Evasive, Fast Cavalry, Fire & Flee, Levies, Open Order, Skirmishers, Swiftstride", opts:[{"name_fr": "Lances de cavalerie", "name_en": "Cavalry spears", "points": 0, "perModel": true}, {"name_fr": "Arc court", "name_en": "Shortbow", "points": 1, "perModel": true}, {"name_fr": "Fuite Feinte", "name_en": "Feigned Flight", "points": 2, "perModel": true}, {"name_fr": "Mouvement de Réserve", "name_en": "Reserve Move", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true, "equippedDefault": true}], armor:[{"name_fr": "Armure légère, Boucliers", "name_en": "Light armour, Shields", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Chef (champion)", "name_en": "Boss (champion)", "points": 8}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "dreadquake-mortar": {id:"dreadquake-mortar", army:"chaos-dwarfs", category:"rare", name_fr:"Mortier Trembleffroi", name_en:"Dreadquake Mortar", points:165, specialRules:"Blackshard Armour, Skirmishers", opts:[{"name_fr": "Pourvoyeur Ogre", "name_en": "Ogre Loader", "points": 20, "perModel": true}, {"name_fr": "Possédé", "name_en": "Hellbound", "points": 30, "perModel": true}, {"name_fr": "Attelage à Vapeur", "name_en": "Steam Carriage", "points": 10, "perModel": true}], equip:[{"name_fr": "Mortier Trembleffroi, Armes de base", "name_en": "Dreadquake Mortar {weapon}, Hand weapons", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}]},
  "hellcannon": {id:"hellcannon", army:"chaos-dwarfs", category:"rare", name_fr:"Canon Apocalypse", name_en:"Hellcannon", points:215, specialRules:"Armour Bane (1), Caged Fury, Close Order, Ensorcelled Weapons, Immune to Psychology, Impact Hits (D6), Large Target, Monster Handlers, Regeneration (6+), Terror, Unbreakable, Warp-spawned", equip:[{"name_fr": "Feu Infernal, Armes de base", "name_en": "Doomfire, Hand weapons", "points": 0, "active": true}], armor:[{"name_fr": "4+", "name_en": "4+", "points": 0, "active": true}]},
  "chaos-giant": {id:"chaos-giant", army:"chaos-dwarfs", category:"rare", name_fr:"Géant du Chaos", name_en:"Chaos Giant", points:200, specialRules:"Close Order, Giant Attacks, Immune to Psychology, Large Target, Pick Up And..., Stomp Attacks (D6), Terror, Timmm-berrr!, Unbreakable", opts:[{"name_fr": "Régénération (6+)", "name_en": "Regeneration (6+)", "points": 20}], equip:[{"name_fr": "Massue de Géant", "name_en": "Giant's club", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère (peau calleuse)", "name_en": "Light armour (calloused hide)", "points": 0, "active": true}, {"name_fr": "Armure lourde (peau écailleuse)", "name_en": "Heavy armour (scaly skin)", "points": 10}]},
  "plaguebearers-of-nurgle": {id:"plaguebearers-of-nurgle", army:"daemons-of-chaos", category:"core", name_fr:"Portepestes de Nurgle", name_en:"Plaguebearers of Nurgle", points:13, unitSize:"7+", specialRules:"Close Order, Daemonic {renegade}, Daemons of Nurgle, Poisoned Attacks, Regeneration (6+)", equip:[{"name_fr": "Épées pestilentielles", "name_en": "Plagueswords", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Pouacre (champion)", "name_en": "Plagueridden (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "nurglings-core": {id:"nurglings-core", army:"daemons-of-chaos", category:"core", name_fr:"Nurglings", name_en:"Nurglings", points:45, unitSize:"3+", specialRules:"Daemonic, Daemons of Nurgle, Loner, Poisoned Attacks, Random Attacks, Regeneration (6+), Skirmishers"},
  "bloodletters-of-khorne": {id:"bloodletters-of-khorne", army:"daemons-of-chaos", category:"core", name_fr:"Sanguinaires de Khorne", name_en:"Bloodletters of Khorne", points:14, unitSize:"8+", specialRules:"Close Order, Daemonic {renegade}, Daemons of Khorne, Impetuous, Magic Resistance (-1)", equip:[{"name_fr": "Lames Infernales", "name_en": "Hellblades", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère (cuir calleux)", "name_en": "Light armour (calloused hides)", "points": 0, "active": true}], command:[{"name_fr": "Massacreur (champion)", "name_en": "Bloodreaper (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "flesh-hounds-of-khorne-core": {id:"flesh-hounds-of-khorne-core", army:"daemons-of-chaos", category:"core", name_fr:"Chiens de Khorne", name_en:"Flesh Hounds of Khorne", points:32, unitSize:"5+", specialRules:"Armour Bane (1), Close Order, Counter Charge, Daemonic {renegade}, Daemons of Khorne, Impetuous, Magic Resistance (-2)", opts:[{"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 3, "perModel": true}, {"name_fr": "Avant-garde", "name_en": "Vanguard", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base (Griffes et crocs)", "name_en": "Hand weapons (Claws and fangs)", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère (cuir calleux)", "name_en": "Light armour (calloused hides)", "points": 0, "perModel": true, "active": true}]},
  "pink-horrors-of-tzeentch-core": {id:"pink-horrors-of-tzeentch-core", army:"daemons-of-chaos", category:"core", name_fr:"Horreurs Roses de Tzeentch", name_en:"Pink Horrors of Tzeentch", points:12, unitSize:"9+", specialRules:"Close Order, Daemonic {renegade}, Daemons of Tzeentch, Scintillating Sorcery", equip:[{"name_fr": "Arme de base, Flammes de Tzeentch", "name_en": "Hand weapon, Flames of Tzeentch", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Horreur Iridescente (champion)", "name_en": "Iridescent Horror (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "blue-horrors-of-tzeentch-core": {id:"blue-horrors-of-tzeentch-core", army:"daemons-of-chaos", category:"core", name_fr:"Horreurs Bleues de Tzeentch", name_en:"Blue Horrors of Tzeentch", points:9, unitSize:"9+", specialRules:"Daemonic, Daemons of Tzeentch, Move Through Cover, Open Order", equip:[{"name_fr": "Armes de base, Flammes de Tzeentch", "name_en": "Hand weapons, Flames of Tzeentch", "points": 0, "active": true}], command:[{"name_fr": "Horreur Ectoplasmique (champion)", "name_en": "Ectoplasmic Horror (champion)", "points": 6}]},
  "brimstone-horrors-of-tzeentch": {id:"brimstone-horrors-of-tzeentch", army:"daemons-of-chaos", category:"core", name_fr:"Horreurs Sulfureuses de Tzeentch", name_en:"Brimstone Horrors of Tzeentch", points:38, unitSize:"2+", specialRules:"Daemonic {renegade}, Daemons of Tzeentch, Flaming Attacks, Loner, Skirmishers", equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true}]},
  "chaos-furies": {id:"chaos-furies", army:"daemons-of-chaos", category:"core", name_fr:"Gargouilles du Chaos", name_en:"Chaos Furies", points:12, unitSize:"5+", specialRules:"Daemonic {renegade}, Fly (8), Furious Charge, Skirmishers, Swiftstride, Vanguard", opts:[{"name_fr": "Démon de Khorne", "name_en": "Daemon of Khorne", "points": 2, "perModel": true}, {"name_fr": "Démon de Nurgle", "name_en": "Daemon of Nurgle", "points": 2, "perModel": true}, {"name_fr": "Démon de Slaanesh", "name_en": "Daemon of Slaanesh", "points": 2, "perModel": true}, {"name_fr": "Démon de Tzeentch", "name_en": "Daemon of Tzeentch", "points": 2, "perModel": true}], equip:[{"name_fr": "Serres démoniaques", "name_en": "Daemonic talons", "points": 0, "perModel": true, "active": true}]},
  "chaos-furies-of-slaanesh": {id:"chaos-furies-of-slaanesh", army:"daemons-of-chaos", category:"core", name_fr:"Gargouilles du Chaos de Slaanesh", name_en:"Chaos Furies of Slaanesh", points:14, unitSize:"5+", specialRules:"Daemonic {renegade}, Fly (8), Furious Charge, Skirmishers, Swiftstride, Vanguard, Daemons of Slaanesh", equip:[{"name_fr": "Serres démoniaques", "name_en": "Daemonic talons", "points": 0, "perModel": true, "active": true}]},
  "chaos-furies-of-nurgle": {id:"chaos-furies-of-nurgle", army:"daemons-of-chaos", category:"core", name_fr:"Gargouilles du Chaos de Nurgle", name_en:"Chaos Furies of Nurgle", points:14, unitSize:"5+", specialRules:"Daemonic {renegade}, Fly (8), Furious Charge, Skirmishers, Swiftstride, Vanguard, Daemons of Nurgle", equip:[{"name_fr": "Serres démoniaques", "name_en": "Daemonic talons", "points": 0, "perModel": true, "active": true}]},
  "chaos-furies-of-khorne": {id:"chaos-furies-of-khorne", army:"daemons-of-chaos", category:"core", name_fr:"Gargouilles du Chaos de Khorne", name_en:"Chaos Furies of Khorne", points:14, unitSize:"5+", specialRules:"Daemonic {renegade}, Fly (8), Furious Charge, Skirmishers, Swiftstride, Vanguard, Daemons of Khorne", equip:[{"name_fr": "Serres démoniaques", "name_en": "Daemonic talons", "points": 0, "perModel": true, "active": true}]},
  "chaos-furies-of-tzeentch": {id:"chaos-furies-of-tzeentch", army:"daemons-of-chaos", category:"core", name_fr:"Gargouilles du Chaos de Tzeentch", name_en:"Chaos Furies of Tzeentch", points:14, unitSize:"5+", specialRules:"Daemonic {renegade}, Fly (8), Furious Charge, Skirmishers, Swiftstride, Vanguard, Daemons of Tzeentch", equip:[{"name_fr": "Serres démoniaques", "name_en": "Daemonic talons", "points": 0, "perModel": true, "active": true}]},
  "seekers-of-slaanesh": {id:"seekers-of-slaanesh", army:"daemons-of-chaos", category:"special", name_fr:"Veneuses de Slaanesh", name_en:"Seekers of Slaanesh", points:21, unitSize:"5+", specialRules:"Armour Bane (1 - Steed of Slaanesh only), Counter Charge, Daemonic {renegade}, Daemon of Slaanesh, Fast Cavalry, Open Order, Poisoned Attacks (Steed of Slaanesh only), Skirmishers, Swiftstride", equip:[{"name_fr": "Pinces perforantes, Armes de base (Griffes et crocs)", "name_en": "Piercing claws, Hand weapons (Claws and fangs)", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Accroche-cœur (champion)", "name_en": "Heartseeker (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "fiends-of-slaanesh": {id:"fiends-of-slaanesh", army:"daemons-of-chaos", category:"special", name_fr:"Bêtes de Slaanesh", name_en:"Fiends of Slaanesh", points:66, unitSize:"3+", specialRules:"Close Order, Daemonic {renegade}, Daemons of Slaanesh, Soporific Musk, Swiftstride", equip:[{"name_fr": "Pinces perforantes, Queue venimeuse", "name_en": "Piercing claws, Venomous tail", "points": 0, "active": true}]},
  "seeker-chariot-of-slaanesh": {id:"seeker-chariot-of-slaanesh", army:"daemons-of-chaos", category:"special", name_fr:"Char Traqueur de Slaanesh", name_en:"Seeker Chariot of Slaanesh", points:100, unitSize:"1-3", specialRules:"Armour Bane (1 - Steed of Slaanesh only), Counter Charge, Daemonic {renegade}, Daemon of Slaanesh, First Charge, Impact Hits (D3+1), Open Order, Poisoned Attacks (Steed of Slaanesh only), Swiftstride", equip:[{"name_fr": "Pinces perforantes, Armes de base (Griffes et crocs)", "name_en": "Piercing claws, Hand weapons (Claws and fangs)", "points": 0, "active": true}], armor:[{"name_fr": "5+", "name_en": "5+", "points": 0, "perModel": true, "active": true}]},
  "hellflayer-of-slaanesh": {id:"hellflayer-of-slaanesh", army:"daemons-of-chaos", category:"special", name_fr:"Char Écorcheur de Slaanesh", name_en:"Hellflayer of Slaanesh", points:145, specialRules:"Armour Bane (1 - Steed of Slaanesh only), Close Order, Counter Charge, Daemonic {renegade}, Daemon of Slaanesh, First Charge, Impact Hits (2D6+1), Poisoned Attacks (Steed of Slaanesh only), Swiftstride", equip:[{"name_fr": "Pinces perforantes, Armes de base (Griffes et crocs)", "name_en": "Piercing claws, Hand weapons (Claws and fangs)", "points": 0, "active": true}]},
  "nurglings": {id:"nurglings", army:"daemons-of-chaos", category:"special", name_fr:"Nurglings", name_en:"Nurglings", points:45, unitSize:"3+", specialRules:"Daemonic, Daemons of Nurgle, Loner, Poisoned Attacks, Random Attacks, Regeneration (6+), Skirmishers"},
  "beasts-of-nurgle": {id:"beasts-of-nurgle", army:"daemons-of-chaos", category:"special", name_fr:"Bêtes de Nurgle", name_en:"Beasts of Nurgle", points:62, unitSize:"2+", specialRules:"Attention Seeker, Close Order, Daemonic {renegade}, Daemons of Nurgle, Impetuous, Infernal Favour (1), Loner, Poisoned Attacks, Random Attacks, Regeneration (5+), Slime Trail", equip:[{"name_fr": "Armes de base, Tentacules sinueux", "name_en": "Hand weapons, Writhing tentacles {daemons of chaos}", "points": 0, "active": true}]},
  "plague-drones-of-nurgle": {id:"plague-drones-of-nurgle", army:"daemons-of-chaos", category:"special", name_fr:"Drones de la Peste de Nurgle", name_en:"Plague Drones of Nurgle", points:63, unitSize:"3+", specialRules:"Armour Bane (2 - Rot Fly only), Daemonic {renegade}, Daemons of Nurgle, Fly (9), Poisoned Attacks, Regeneration (6+), Skirmishers, Swiftstride", opts:[{"name_fr": "Proboscis à pus (+1 Initiative)", "name_en": "Plague Proboscis (+1 Initiative)", "points": 2, "perModel": true}, {"name_fr": "Dard venimeux", "name_en": "Venom sting", "points": 2, "perModel": true}], equip:[{"name_fr": "Épées pestilentielles, Têtes de morts, Armes de base (griffes encroûtées de crasse)", "name_en": "Plagueswords, Death's heads, Hand weapons (filth-encrusted claws)", "points": 0, "active": true}], command:[{"name_fr": "Pouacre (champion)", "name_en": "Plagueridden (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "flesh-hounds-of-khorne": {id:"flesh-hounds-of-khorne", army:"daemons-of-chaos", category:"special", name_fr:"Chiens de Khorne", name_en:"Flesh Hounds of Khorne", points:32, unitSize:"5+", specialRules:"Armour Bane (1), Close Order, Counter Charge, Daemonic {renegade}, Daemons of Khorne, Impetuous, Magic Resistance (-2)", opts:[{"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 3, "perModel": true}, {"name_fr": "Avant-garde", "name_en": "Vanguard", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base (Griffes et crocs)", "name_en": "Hand weapons (Claws and fangs)", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère (cuir calleux)", "name_en": "Light armour (calloused hides)", "points": 0, "perModel": true, "active": true}]},
  "bloodcrushers-of-khorne": {id:"bloodcrushers-of-khorne", army:"daemons-of-chaos", category:"special", name_fr:"Équarrisseurs de Khorne", name_en:"Bloodcrushers of Khorne", points:65, unitSize:"3+", specialRules:"Armoured Hide (1), Close Order, Daemonic {renegade}, Daemon of Khorne, Impact Hits (2), Impetuous, Magic Resistance (-1), Swiftstride", equip:[{"name_fr": "Lames Infernales, Sabots sertis d’airain", "name_en": "Hellblades, Brass bound hooves", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère (cuir calleux), Caparaçon (peau d’airain)", "name_en": "Light armour (calloused hides), Barding (brazen hide)", "points": 0, "active": true}], command:[{"name_fr": "Massacreur (champion)", "name_en": "Bloodreaper (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "pink-horrors-of-tzeentch": {id:"pink-horrors-of-tzeentch", army:"daemons-of-chaos", category:"special", name_fr:"Horreurs Roses de Tzeentch", name_en:"Pink Horrors of Tzeentch", points:12, unitSize:"9+", specialRules:"Close Order, Daemonic {renegade}, Daemons of Tzeentch, Scintillating Sorcery", equip:[{"name_fr": "Arme de base, Flammes de Tzeentch", "name_en": "Hand weapon, Flames of Tzeentch", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Horreur Iridescente (champion)", "name_en": "Iridescent Horror (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "blue-horrors-of-tzeentch": {id:"blue-horrors-of-tzeentch", army:"daemons-of-chaos", category:"special", name_fr:"Horreurs Bleues de Tzeentch", name_en:"Blue Horrors of Tzeentch", points:9, unitSize:"9+", specialRules:"Daemonic, Daemons of Tzeentch, Move Through Cover, Open Order", equip:[{"name_fr": "Armes de base, Flammes de Tzeentch", "name_en": "Hand weapons, Flames of Tzeentch", "points": 0, "active": true}], command:[{"name_fr": "Horreur Ectoplasmique (champion)", "name_en": "Ectoplasmic Horror (champion)", "points": 6}]},
  "screamers-of-tzeentch": {id:"screamers-of-tzeentch", army:"daemons-of-chaos", category:"special", name_fr:"Hurleurs de Tzeentch", name_en:"Screamers of Tzeentch", points:44, unitSize:"3+", specialRules:"Daemonic {renegade}, Daemons of Tzeentch, Fly (9), Loner, Skirmishers, Slashing Attack", equip:[{"name_fr": "Morsure de lamproie", "name_en": "Lamprey's bite", "points": 0, "perModel": true, "active": true}]},
  "flamers-of-tzeentch": {id:"flamers-of-tzeentch", army:"daemons-of-chaos", category:"special", name_fr:"Incendiaires de Tzeentch", name_en:"Flamers of Tzeentch", points:40, unitSize:"3-6", specialRules:"Daemonic {renegade}, Daemons of Tzeentch, Flaming Attacks, Infernal Favour (1 - Exalted Flamer only), Lore of Daemons {renegade}, Move Through Cover, Skirmishers", equip:[{"name_fr": "Armes de base, Feu mutant", "name_en": "Hand weapons, Warpflame", "points": 0, "active": true}], command:[{"name_fr": "Pyrobole (champion)", "name_en": "Pyroclaster (champion)", "points": 7}, {"name_fr": "Incendiaire Exalté (champion)", "name_en": "Exalted Flamer (champion)", "points": 40}]},
  "burning-chariot-of-tzeentch": {id:"burning-chariot-of-tzeentch", army:"daemons-of-chaos", category:"rare", name_fr:"Char Incendiaire de Tzeentch", name_en:"Burning Chariot of Tzeentch", points:190, specialRules:"Close Order, Daemonic {renegade}, Daemon of Tzeentch, Fly (9), Impact Hits (D6+1), Lore of Daemons {renegade}, Slashing Attack (Screamers only)", opts:[{"name_fr": "Sorcier de Niveau 2", "name_en": "Level 2 Wizard", "points": 30}, {"name_fr": "Sorcier de Niveau 3", "name_en": "Level 3 Wizard", "points": 60}], equip:[{"name_fr": "Armes de base, Feu mutant, Flammes de Tzeentch, Morsure de lamproie", "name_en": "Hand weapons, Warpflame, Flames of Tzeentch, Lamprey's bite", "points": 0, "active": true}], armor:[{"name_fr": "4+", "name_en": "4+", "points": 0, "active": true}]},
  "soul-grinder": {id:"soul-grinder", army:"daemons-of-chaos", category:"rare", name_fr:"Broyeur d’Âme", name_en:"Soul Grinder", points:255, specialRules:"Close Order, Daemonic {renegade}, Furious Charge, Large Target, Reserve Move, Stomp Attacks (D6+1), Terror", opts: [{"name_fr": "Démon de Khorne", "name_en": "Daemon of Khorne", "points": 10}, {"name_fr": "Démon de Nurgle", "name_en": "Daemon of Nurgle", "points": 10}, {"name_fr": "Démon de Slaanesh", "name_en": "Daemon of Slaanesh", "points": 10}, {"name_fr": "Démon de Tzeentch", "name_en": "Daemon of Tzeentch", "points": 10}, {name_fr: "Torrent funeste", name_en: "Baleful torrent", points: 25}, {name_fr: "Regard du Warp", name_en: "Warp gaze", points: 30}], equip:[{"name_fr": "Arme de base, Griffe de fer, Canon moissonneur", "name_en": "Hand weapon, Iron claw, Harvester cannon", "points": 0, "active": true}, {"name_fr": "Arme de base, Griffe de fer, Canon moissonneur, Torrent de sang brûlant", "name_en": "Hand weapon, Iron claw, Harvester cannon, Baleful torrent", "points": 25}, {"name_fr": "Arme de base, Griffe de fer, Canon moissonneur, Regard corrupteur", "name_en": "Hand weapon, Iron claw, Harvester cannon, Warp gaze", "points": 30}], armor:[{"name_fr": "Armure lourde (Chair démoniaque)", "name_en": "Heavy armour (Daemonic flesh)", "points": 0, "active": true}]},
  "skull-cannon-of-khorne": {id:"skull-cannon-of-khorne", army:"daemons-of-chaos", category:"rare", name_fr:"Canon à Crânes de Khorne", name_en:"Skull Cannon of Khorne", points:185, specialRules:"Brazen Wheels, Close Order, Daemonic {renegade}, Daemon of Khorne, First Charge, Impact Hits (D3+1), Impetuous, Stomp Attacks (D3)", equip:[{"name_fr": "Roues d’airain, Arme de base (faux), Canon de Khorne, Lames Infernales", "name_en": "Brazen wheels, Hand weapon (scything blades), Cannon of Khorne {renegade}, Hellblades", "points": 0, "active": true}], armor:[{"name_fr": "Armure de plate complète", "name_en": "Full plate armour", "points": 0, "active": true}]},
  "sisters-of-slaughter": {id:"sisters-of-slaughter", army:"dark-elves", category:"rare", name_fr:"Sœurs du Massacre", name_en:"Sisters of Slaughter", points:17, unitSize:"10+", specialRules:"Dance of Death, Elven Reflexes, Hatred (High Elves), Impetuous, Loner, Murderous {renegade}, Open Order", equip:[{"name_fr": "Armes de base, Lanières & bocle", "name_en": "Hand weapons, Lash & buckler", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Doyenne (champion)", "name_en": "Hag (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "harpies": {id:"harpies", army:"dark-elves", category:"special", name_fr:"Harpies", name_en:"Harpies", points:11, unitSize:"5+", specialRules:"Fly (10), Move Through Cover, Scouts, Skirmishers, Swiftstride", equip:[{"name_fr": "Armes de base (Griffes)", "name_en": "Hand weapons (Claws)", "points": 0, "perModel": true, "active": true}]},
  "high-beastmaster": {id:"high-beastmaster", army:"dark-elves", category:"characters", name_fr:"Haut Belluaire", name_en:"High Beastmaster", points:75, unitSize:"1", specialRules:"Eternal Hatred, Goad Beast, Hatred (High Elves), Murderous, Strike First"},
  "khainite-assassin": {id:"khainite-assassin", army:"dark-elves", category:"characters", name_fr:"Assassin Khainite", name_en:"Khainite Assassin", points:80, unitSize:"1", specialRules:"Eternal Hatred, Hatred (all enemies), Hidden, Immune to Psychology, Murderous, Poisoned Attacks, Strike First"},
  "kharibdyss": {id:"kharibdyss", army:"dark-elves", category:"rare", name_fr:"Kharibdyss", name_en:"Kharibdyss", points:195, specialRules:"Abyssal Howl, Close Order, Immune to Psychology, Large Target, Monster Handlers, Stomp Attacks (D3+1), Terror", equip:[{"name_fr": "Gueule caverneuse, Tentacules sinueux, Armes de base, Fouets", "name_en": "Cavernous maw, Writhing tentacles, Hand weapons, Whips", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "5+", "name_en": "5+", "points": 0, "perModel": true, "active": true}]},
  "bloodwrack-medusa": {id:"bloodwrack-medusa", army:"dark-elves", category:"rare", name_fr:"Méduse Incarnate", name_en:"Bloodwrack Medusa", points:85, specialRules:"Close Order, Elven Reflexes, Fear, Frenzy, Hatred (High Elves), Magic Resistance (-1), Murderous {renegade}, Poisoned Attacks, Stony Stare", equip:[{"name_fr": "Arme de base, Regard pétrificateur", "name_en": "Hand weapon, Petrifying gaze", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}]},
  "bloodwrack-shrine": {id:"bloodwrack-shrine", army:"dark-elves", category:"rare", name_fr:"Sanctuaires Incarnats", name_en:"Bloodwrack Shrines", points:175, specialRules:"Close Order, Dragged Along, Elven Reflexes, Frenzy, Hatred (High Elves), Impact Hits (D6+1), Large Target, Magic Resistance (-1), Murderous {renegade}, Poisoned Attacks, Stony Stare, Terror", equip:[{"name_fr": "Lances de cavalerie, Regard pétrificateur", "name_en": "Cavalry spears, Petrifying gaze", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "4+", "name_en": "4+", "points": 0, "perModel": true, "active": true}]},
  "bloodwrack-medusas": {id:"bloodwrack-medusas", army:"dark-elves", category:"rare", name_fr:"Méduses Incarnates", name_en:"Bloodwrack Medusas", points:85, specialRules:"Close Order, Elven Reflexes, Fear, Frenzy, Hatred (High Elves), Magic Resistance (-1), Murderous {renegade}, Poisoned Attacks, Stony Stare", equip:[{"name_fr": "Arme de base, Regard pétrificateur", "name_en": "Hand weapon, Petrifying gaze", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}]},
  "doomfire-warlocks": {id:"doomfire-warlocks", army:"dark-elves", category:"rare", name_fr:"Conjurateurs du Feu Maudit", name_en:"Doomfire Warlocks", points:22, unitSize:"5+", specialRules:"Cursed Coven, Dark Runes, Elven Reflexes, Fast Cavalry, Hatred (High Elves), Open Order, Poisoned Attacks (Doomfire Warlocks and Master only), Swiftstride", equip:[{"name_fr": "Arme de base", "name_en": "Hand weapon", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Maître Conjurateur (champion)", "name_en": "Master (champion)", "points": 6}]},
  "reaper-bolt-thrower": {id:"reaper-bolt-thrower", army:"dark-elves", category:"rare", name_fr:"Baliste Faucheuse", name_en:"Reaper Bolt Thrower", points:80, specialRules:"Elven Reflexes, Hatred (High Elves), Skirmishers", equip:[{"name_fr": "Baliste à répétition, Armes de base", "name_en": "Repeater bolt thrower, Hand weapons", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}]},
  "dwarf-cart-bugman": {id:"dwarf-cart-bugman", army:"dwarfen-mountain-holds", category:"core", name_fr:"Chariot Nain", name_en:"Dwarf Cart", points:65, specialRules:"Hatred (Orcs & Goblins), Impact Hits (D3), Magic Resistance (-1), Open Order, Resolute", equip:[{"name_fr": "Armes de base, Chariot de Bugman", "name_en": "Hand weapons, Bugman's Cart", "points": 0, "perModel": true, "active": true}]},
  "dwarf-cart": {id:"dwarf-cart", army:"dwarfen-mountain-holds", category:"core", name_fr:"Chariot Nain", name_en:"Dwarf Cart", points:65, specialRules:"Hatred (Orcs & Goblins), Impact Hits (D3), Magic Resistance (-1), Open Order, Resolute", equip:[{"name_fr": "Armes de base, Chariot de Bugman", "name_en": "Hand weapons, Bugman's Cart", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base, Chariot de Mineur", "name_en": "Hand weapons, Miner's Cart", "points": 0, "perModel": true}]},
  "long-beards": {id:"long-beards", army:"dwarfen-mountain-holds", category:"special", name_fr:"Longues-barbes", name_en:"Longbeards", points:12, unitSize:"5+", specialRules:"Close Order, Gromril Weapons, Hatred (Orcs & Goblins), Magic Resistance (-1), Resolute, Shieldwall, Venerable, Veteran", opts:[{"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}, {"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true, "equippedDefault": true}, {"name_fr": "Armes lourdes", "name_en": "Great weapons", "points": 1, "perModel": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Vieille-barbe (champion)", "name_en": "Elder (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "hammerers": {id:"hammerers", army:"dwarfen-mountain-holds", category:"special", name_fr:"Marteliers", name_en:"Hammerers", points:16, unitSize:"5+", specialRules:"Close Order, Gromril Weapons, Hatred (Orcs & Goblins), Magic Resistance (-1), Resolute, Royal Guard, Shieldwall, Stoic Defenders, Stubborn, Gromril Armour", opts:[{"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}, {"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 1, "perModel": true}, {"name_fr": "Vétérans", "name_en": "Veteran", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base, Grands marteaux", "name_en": "Hand weapons, Great hammers", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Champion Royal", "name_en": "Royal Champion", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "ironbreakers": {id:"ironbreakers", army:"dwarfen-mountain-holds", category:"special", name_fr:"Brise-fer", name_en:"Ironbreakers", points:15, unitSize:"5+", specialRules:"Close Order, Gromril Armour, Gromril Weapons, Hatred (Orcs & Goblins), Magic Resistance (-1), Regimental Unit, Resolute, Runes of Protection, Shieldwall, Stubborn", opts:[{"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base, Boucliers", "name_en": "Hand weapons, Shields", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure de plate complète", "name_en": "Full plate armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Barbe de fer (champion)", "name_en": "Ironbeard (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "miners": {id:"miners", army:"dwarfen-mountain-holds", category:"special", name_fr:"Mineurs", name_en:"Miners", points:12, unitSize:"5+", specialRules:"Ambushers, Close Order, Hatred (Orcs & Goblins), Magic Resistance (-1), Resolute, Vanguard", opts:[{"name_fr": "Charges de démolition", "name_en": "Blasting Charges", "points": 2, "perModel": true}, {"name_fr": "Ordre Dispersé", "name_en": "Open Order", "points": 0, "perModel": true}, {"name_fr": "Vétérans", "name_en": "Veteran", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base, Armes lourdes", "name_en": "Hand weapons, Great weapons", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Prospecteur (champion)", "name_en": "Prospector (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "slayers": {id:"slayers", army:"dwarfen-mountain-holds", category:"special", name_fr:"Tueurs", name_en:"Slayers", points:12, unitSize:"5+", specialRules:"Deathblow, \"Fight Me!\" (Giant Slayer), Hatred (Orcs & Goblins), Immune to Psychology, Loner, Magic Resistance (-2), Motley Crew, Open Order, Resolute, Slayer, Unbreakable", opts:[{"name_fr": "Tueurs de Géants", "name_en": "Giant Slayers", "points": 7}, {"name_fr": "Armes de base additionnelles", "name_en": "Additional hand weapons", "points": 1}, {"name_fr": "Armes lourdes", "name_en": "Great weapons", "points": 2}, {"name_fr": "Embusqueurs, Tirailleurs", "name_en": "Ambushers, Skirmishers", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "brotherhood-of-grimnir": {id:"brotherhood-of-grimnir", army:"dwarfen-mountain-holds", category:"special", name_fr:"Confrérie de Grimnir", name_en:"Brotherhood of Grimnir", points:18, unitSize:"5-30", specialRules:"Blessings of Grimnir (Shrine Keeper only), Close Order, Deathblow, Gromril Weapons, Hatred (Orcs & Goblins), Immune to Psychology, Loner, Magic Resistance (-2), Motley Crew, Resolute, Slayer, Unbreakable", opts:[{"name_fr": "Armes de base additionnelles", "name_en": "Additional hand weapons", "points": 1}, {"name_fr": "Armes lourdes", "name_en": "Great weapons", "points": 2}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Protecteur du Sanctuaire (champion)", "name_en": "Shrine Keeper (champion)", "points": 21}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "doomseeker": {id:"doomseeker", army:"dwarfen-mountain-holds", category:"special", name_fr:"Cherche-mort", name_en:"Doomseeker", points:50, specialRules:"Deathblow, Doomseeker {dwarfs}, First to the Fray, Gromril Weapons, Hatred (Orcs & Goblins), Immune to Psychology, Impact Hits (D3+1), Loner, Magic Resistance (-2), Random Attacks, Resolute, Unbreakable, Vanguard, Whirlwind of Death, Skirmishers", equip:[{"name_fr": "Arme de base", "name_en": "Hand weapon", "points": 0, "active": true}]},
  "gyrocopters": {id:"gyrocopters", army:"dwarfen-mountain-holds", category:"special", name_fr:"Gyrocoptères", name_en:"Gyrocopters", points:60, unitSize:"1-6", specialRules:"Dive Bomb, Fire & Flee, Fly (9), Impact Hits (D3), Magic Resistance (-1), Skirmishers, Swiftstride, Vanguard", equip:[{"name_fr": "Armes de base, Canon à vapeur", "name_en": "Hand weapons, Steam gun {dwarfs}", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base, Canon à soufre", "name_en": "Hand weapons, Brimstone guns", "points": 5, "perModel": true}, {"name_fr": "Armes de base, Canon crépiteur", "name_en": "Hand weapons, Clatterguns", "points": 10, "perModel": true}], armor:[{"name_fr": "Armure de plate complète", "name_en": "Full plate armour", "points": 0, "perModel": true, "active": true}]},
  "bolt-thrower": {id:"bolt-thrower", army:"dwarfen-mountain-holds", category:"special", name_fr:"Baliste", name_en:"Bolt Thrower {dwarfs}", points:55, specialRules:"Hatred (Orcs & Goblins), Magic Resistance (-1), Skirmishers, Stubborn", equip:[{"name_fr": "Baliste, Armes de base", "name_en": "Bolt thrower, Hand weapons", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "active": true}]},
  "grudge-thrower": {id:"grudge-thrower", army:"dwarfen-mountain-holds", category:"special", name_fr:"Catapulte à Rancunes", name_en:"Grudge Thrower", points:95, specialRules:"Hatred (Orcs & Goblins), Magic Resistance (-1), Skirmishers, Stubborn", equip:[{"name_fr": "Catapulte, Armes de base", "name_en": "Stone thrower, Hand weapons", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "active": true}]},
  "cannon": {id:"cannon", army:"dwarfen-mountain-holds", category:"special", name_fr:"Canon", name_en:"Cannon {dwarfs}", points:100, specialRules:"Hatred (Orcs & Goblins), Magic Resistance (-1), Skirmishers, Stubborn", opts:[{"name_fr": "La Fonction L’Emporte Sur La Forme", "name_en": "Function over form", "points": 0}], equip:[{"name_fr": "Canon, Armes de base", "name_en": "Cannon, Hand weapons", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "active": true}]},
  "rangers": {id:"rangers", army:"dwarfen-mountain-holds", category:"rare", name_fr:"Rangers", name_en:"Rangers", points:11, unitSize:"5-20", specialRules:"Dwarf Crafted, Hatred (Orcs & Goblins), Magic Resistance (-1), Move Through Cover, Open Order, Resolute, Scouts, Skirmishers", opts:[{"name_fr": "Armes lourdes", "name_en": "Great weapons", "points": 2, "perModel": true}, {"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base, Arbalètes", "name_en": "Hand weapons, Crossbows", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base, Haches de lancer", "name_en": "Hand weapons, Throwing axes", "points": 0, "perModel": true}, {"name_fr": "Armes de base, Arbalètes, Haches de lancer", "name_en": "Hand weapons, Crossbows, Throwing axes", "points": 1, "perModel": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Baroudeur (champion)", "name_en": "Ol' Deadeye (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "irondrakes": {id:"irondrakes", army:"dwarfen-mountain-holds", category:"rare", name_fr:"Dracs de Fer", name_en:"Irondrakes", points:15, unitSize:"5+", specialRules:"Close Order, Detachment, Gromril Armour, Hatred (Orcs & Goblins), Magic Resistance (-1), Resolute, Runes of Warding, Stubborn", opts:[{"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 1, "perModel": true}, {"name_fr": "Détachement", "name_en": "Detachment", "points": 0}], equip:[{"name_fr": "Armes de base, Canons dracs de feu", "name_en": "Hand weapons, Drakeguns", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure de plate complète", "name_en": "Full plate armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Gardien de Fer (champion)", "name_en": "Ironwarden (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "gyrobomber": {id:"gyrobomber", army:"dwarfen-mountain-holds", category:"rare", name_fr:"Gyrobombardiers", name_en:"Gyrobomber", points:95, specialRules:"Bombing Run, Close Order, Fly (8), Impact Hits (D3+1), Swiftstride, Magic Resistance (-1), Hatred (Orcs & Goblins)", equip:[{"name_fr": "Armes de base, Canon à vapeur", "name_en": "Hand weapons, Steam gun {dwarfs}", "points": 0, "active": true}, {"name_fr": "Armes de base, Canon à soufre", "name_en": "Hand weapons, Brimstone gun", "points": 5}, {"name_fr": "Armes de base, Canon crépiteur", "name_en": "Hand weapons, Clattergun", "points": 10}], armor:[{"name_fr": "Armure de plate complète", "name_en": "Full plate armour", "points": 0, "active": true}]},
  "organ-gun": {id:"organ-gun", army:"dwarfen-mountain-holds", category:"rare", name_fr:"Canon-orgue", name_en:"Organ Gun", points:120, specialRules:"Hatred (Orcs & Goblins), Magic Resistance (-1), Skirmishers, Stubborn", opts:[{"name_fr": "La Fonction L’Emporte Sur La Forme", "name_en": "Function over form", "points": 0}], equip:[{"name_fr": "Canon-orgue, Armes de base", "name_en": "Organ gun {weapon}, Hand weapons", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "active": true}]},
  "flame-cannon": {id:"flame-cannon", army:"dwarfen-mountain-holds", category:"rare", name_fr:"Canon à Flammes", name_en:"Flame Cannon", points:125, specialRules:"Hatred (Orcs & Goblins), Magic Resistance (-1), Skirmishers, Stubborn", opts:[{"name_fr": "La Fonction L’Emporte Sur La Forme", "name_en": "Function over form", "points": 0}], equip:[{"name_fr": "Lance-flammes, Armes de base", "name_en": "Fire thrower, Hand weapons", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "active": true}]},
  "goblin-hewer": {id:"goblin-hewer", army:"dwarfen-mountain-holds", category:"rare", name_fr:"Faucheuse de Gobelins", name_en:"Goblin-Hewer", points:120, specialRules:"Hatred (Orcs & Goblins), Immune to Psychology, Magic Resistance (-1), Skirmishers, Unbreakable", equip:[{"name_fr": "Faucheuse de Gobelins, Armes de base", "name_en": "Goblin-hewer, Hand weapons", "points": 0, "active": true}]},
  "doomseeker-merc": {id:"doomseeker-merc", army:"dwarfen-mountain-holds", category:"mercenaries", name_fr:"Cherche-mort", name_en:"Doomseeker", points:50, specialRules:"Deathblow, Doomseeker {dwarfs}, First to the Fray, Gromril Weapons, Hatred (Orcs & Goblins), Immune to Psychology, Impact Hits (D3+1), Loner, Magic Resistance (-2), Random Attacks, Resolute, Unbreakable, Vanguard, Whirlwind of Death", equip:[{"name_fr": "Arme de base", "name_en": "Hand weapon", "points": 0, "active": true}]},
  "imperial-dwarf-mercenaries": {id:"imperial-dwarf-mercenaries", army:"dwarfen-mountain-holds", category:"mercenaries", name_fr:"Mercenaires Nains Impériaux", name_en:"Imperial Dwarf Mercenaries", points:8, unitSize:"5+", specialRules:"Close Order, Hatred (Orcs & Goblins), Magic Resistance (-1), Resolute, Shieldwall", opts:[{"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}, {"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 1, "perModel": true}, {"name_fr": "Vétérans", "name_en": "Veteran", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes lourdes", "name_en": "Great weapons", "points": 2, "perModel": true}, {"name_fr": "Lances d’infanterie", "name_en": "Thrusting spears", "points": 1, "perModel": true}, {"name_fr": "Arbalètes", "name_en": "Crossbows", "points": 2, "perModel": true}, {"name_fr": "Arquebuses", "name_en": "Handguns", "points": 3, "perModel": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 1, "perModel": true}], command:[{"name_fr": "Vétéran (champion)", "name_en": "Veteran (champion)", "points": 5}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 5}, {"name_fr": "Musicien", "name_en": "Musician", "points": 5}]},
  "goblin-hewer-merc": {id:"goblin-hewer-merc", army:"dwarfen-mountain-holds", category:"mercenaries", name_fr:"Faucheuse de Gobelins", name_en:"Goblin-Hewer", points:120, specialRules:"Hatred (Orcs & Goblins), Immune to Psychology, Magic Resistance (-1), Skirmishers, Unbreakable", equip:[{"name_fr": "Faucheuse de Gobelins, Armes de base", "name_en": "Goblin-hewer, Hand weapons", "points": 0, "active": true}]},
  "prince-ulthers-dragon-company": {id:"prince-ulthers-dragon-company", army:"dwarfen-mountain-holds", category:"mercenaries", name_fr:"Compagnie Dragon du Prince Ulther", name_en:"Prince Ulther's Dragon Company", points:115, specialRules:"Close Order, Drilled, Gromril Weapons, Hatred (Orcs & Goblins), Magic Resistance (-1), Resolute, Stubborn", opts:[{"name_fr": "Soldats de la Compagnie Dragon additionnels", "name_en": "Additional Dragon Company Troopers", "points": 14}], equip:[{"name_fr": "Armes de base, Plusieurs pistolets, Lame Dragon (Prince Ulther), Arme lourde (Borri Forkbeard)", "name_en": "Hand weapons, Brace of pistols, Dragonblade (Prince Ulther), Great weapon (Borri Forkbeard)", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère, Boucliers", "name_en": "Light armour, Shields", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Prince Ulther", "name_en": "Prince Ulther", "points": 0, "active": true}, {"name_fr": "Borri Forkbeard (champion)", "name_en": "Borri Forkbeard (champion)", "points": 0, "active": true}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 0, "active": true}, {"name_fr": "Musicien", "name_en": "Musician", "points": 0, "active": true}]},
  "harbinger-of-doom": {id:"harbinger-of-doom", army:"empire-of-man", category:"characters", name_fr:"Émissaire de la Fin", name_en:"Harbinger of Doom", points:65, specialRules:"Feel No Pain, Furious Charge, Immune to Psychology, Impetuous, Hatred (all enemies), Prayer of the Damned, Unbreakable, Zealot", equip:[{"name_fr": "Arme de base", "name_en": "Hand weapon", "points": 0, "active": true, "equippedDefault": true}, {"name_fr": "Fléau", "name_en": "Flail", "points": 3}, {"name_fr": "Arma a dos manos", "name_en": "Great weapon", "points": 4}], command:[{"name_fr": "Général", "name_en": "General", "points": 0}]},
  "general-hans-von-lowenhacke": {id:"general-hans-von-lowenhacke", army:"empire-of-man", category:"characters", name_fr:"Général Hans von Löwenhacke", name_en:"General Hans von Löwenhacke", points:190, specialRules:"\"Hold the Line!\", Mercenary Commander, Rallying Cry, Strategic Mastery, Stubborn", equip:[{"name_fr": "Arme de base, Jugement, Heaume du Griffon", "name_en": "Hand weapon, Judgement, The Griffon Helm", "points": 0, "active": true, "equippedDefault": true}], armor:[{"name_fr": "Armure de plate complète", "name_en": "Full plate armour", "points": 0, "active": true, "equippedDefault": true}], command:[{"name_fr": "Général", "name_en": "General", "points": 0}]},
  "harald-gemunsen": {id:"harald-gemunsen", army:"empire-of-man", category:"characters", name_fr:"Harald Gemunsen", name_en:"Harald Gemunsen", points:185, specialRules:"Counter Charge, First Charge, Grand Master of the Knights Panther, Hatred (Warriors of Chaos + Beastmen Brayherds + Daemonic models), Immune to Psychology, Magic Resistance (-1), Master of Battle, Rallying Cry, Skilled Duellist, Stubborn, Swiftstride, Veteran", equip:[{"name_fr": "Arme de base, Perce-Bête", "name_en": "Hand weapon, Beast Reaver", "points": 0, "active": true, "equippedDefault": true}], armor:[{"name_fr": "Armure de plate complète, Caparaçon", "name_en": "Full plate armour, Barding", "points": 0, "active": true, "equippedDefault": true}], command:[{"name_fr": "Général", "name_en": "General", "points": 0}]},
  "inner-circle-knights-panther-core": {id:"inner-circle-knights-panther-core", army:"empire-of-man", category:"core", name_fr:"Chevaliers Panthères du Cercle Intérieur", name_en:"Inner Circle Knights Panther", points:31, unitSize:"4+", specialRules:"Order of the Knights Panther, Close Order, Counter Charge, Drilled, First Charge, Inner Circle, Swiftstride, Veteran, Hatred (Warriors of Chaos + Beastmen Brayherds + Daemonic models), Magic Resistance (-1)", opts:[{"name_fr": "Obstiné", "name_en": "Stubborn", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Lances de joute, Boucliers", "name_en": "Hand weapons, Lances, Shields", "points": 1, "perModel": true, "active": true}], armor:[{"name_fr": "Armure de plate complète, Caparaçon", "name_en": "Full plate armour, Barding", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Précepteur du Cercle Intérieur (champion)", "name_en": "Inner Circle Preceptor (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "inner-circle-knights-white-wolf-core": {id:"inner-circle-knights-white-wolf-core", army:"empire-of-man", category:"core", name_fr:"Chevaliers du Loup Blanc du Cercle Intérieur", name_en:"Inner Circle Knights of the White Wolf", points:32, unitSize:"4+", specialRules:"Order of the White Wolf, Close Order, Counter Charge, Drilled, First Charge, Inner Circle, Swiftstride, Veteran, Furious Charge", opts:[{"name_fr": "Obstiné", "name_en": "Stubborn", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Armes lourdes, Boucliers", "name_en": "Hand weapons, Great weapons, Shields", "points": 1, "perModel": true, "active": true}, {"name_fr": "Armes de base, Armes lourdes", "name_en": "Hand weapons, Great weapons", "points": 0, "perModel": true}, {"name_fr": "Armes de base, Marteaux du loup, Boucliers", "name_en": "Hand weapons, Wolf hammers, Shields", "points": 1, "perModel": true}, {"name_fr": "Armes de base, Marteaux du loup", "name_en": "Hand weapons, Wolf hammers", "points": 0, "perModel": true}], armor:[{"name_fr": "Armure de plate complète, Caparaçon", "name_en": "Full plate armour, Barding", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Précepteur du Cercle Intérieur (champion)", "name_en": "Inner Circle Preceptor (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "inner-circle-knights-blazing-sun-core": {id:"inner-circle-knights-blazing-sun-core", army:"empire-of-man", category:"core", name_fr:"Chevaliers du Soleil du Cercle Intérieur", name_en:"Inner Circle Knights of the Blazing Sun", points:31, unitSize:"4+", specialRules:"Order of the Blazing Sun, Close Order, Counter Charge, Drilled, First Charge, Inner Circle, Swiftstride, Veteran, Evasive, Flaming Attacks", opts:[{"name_fr": "Obstiné", "name_en": "Stubborn", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Lances de joute, Boucliers", "name_en": "Hand weapons, Lances, Shields", "points": 1, "perModel": true, "active": true}, {"name_fr": "Armes de base, Armes lourdes, Boucliers", "name_en": "Hand weapons, Great weapons, Shields", "points": 1, "perModel": true}, {"name_fr": "Armes de base, Armes lourdes", "name_en": "Hand weapons, Great weapons", "points": 0, "perModel": true}], armor:[{"name_fr": "Armure de plate complète, Caparaçon", "name_en": "Full plate armour, Barding", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Précepteur du Cercle Intérieur (champion)", "name_en": "Inner Circle Preceptor (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "inner-circle-knights-morr-core": {id:"inner-circle-knights-morr-core", army:"empire-of-man", category:"core", name_fr:"Chevaliers de Morr du Cercle Intérieur", name_en:"Inner Circle Knights of Morr", points:32, unitSize:"4+", specialRules:"Order of the Knights of Morr, Close Order, Counter Charge, Drilled, First Charge, Inner Circle, Swiftstride, Veteran, Hatred (Undead models), Fear, Magical Attacks", opts:[{"name_fr": "Obstiné", "name_en": "Stubborn", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Lances de joute, Boucliers", "name_en": "Hand weapons, Lances, Shields", "points": 1, "perModel": true, "active": true}, {"name_fr": "Armes de base, Armes lourdes, Boucliers", "name_en": "Hand weapons, Great weapons, Shields", "points": 1, "perModel": true}, {"name_fr": "Armes de base, Armes lourdes", "name_en": "Hand weapons, Great weapons", "points": 0, "perModel": true}], armor:[{"name_fr": "Armure de plate complète, Caparaçon", "name_en": "Full plate armour, Barding", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Précepteur du Cercle Intérieur (champion)", "name_en": "Inner Circle Preceptor (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "inner-circle-knights-fiery-heart-core": {id:"inner-circle-knights-fiery-heart-core", army:"empire-of-man", category:"core", name_fr:"Chevaliers du Cœur Ardent du Cercle Intérieur", name_en:"Inner Circle Knights of the Fiery Heart", points:32, unitSize:"4+", specialRules:"Order of the Fiery Heart, Close Order, Counter Charge, Drilled, First Charge, Inner Circle, Swiftstride, Veteran, Hatred (enemy Wizards + Orcs & Goblins)", opts:[{"name_fr": "Obstiné", "name_en": "Stubborn", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Lances de joute, Boucliers", "name_en": "Hand weapons, Lances, Shields", "points": 1, "perModel": true, "active": true}, {"name_fr": "Armes de base, Armes lourdes, Boucliers", "name_en": "Hand weapons, Great weapons, Shields", "points": 1, "perModel": true}, {"name_fr": "Armes de base, Armes lourdes", "name_en": "Hand weapons, Great weapons", "points": 0, "perModel": true}], armor:[{"name_fr": "Armure de plate complète, Caparaçon", "name_en": "Full plate armour, Barding", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Précepteur du Cercle Intérieur (champion)", "name_en": "Inner Circle Preceptor (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "state-troops": {id:"state-troops", army:"empire-of-man", category:"core", name_fr:"Troupes Régulières", name_en:"State Troops", points:5, unitSize:"10+", specialRules:"Close Order, Detachment, Regimental Unit, Horde", opts:[{"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}, {"name_fr": "Détachement", "name_en": "Detachment", "points": 0}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true, "equippedDefault": true}, {"name_fr": "Hallebardes", "name_en": "Halberds", "points": 1, "perModel": true}, {"name_fr": "Lances d’infanterie", "name_en": "Thrusting spears", "points": 1, "perModel": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Sergent (champion)", "name_en": "Sergeant (champion)", "points": 5}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 5}, {"name_fr": "Musicien", "name_en": "Musician", "points": 5}]},
  "nuln-state-troops": {id:"nuln-state-troops", army:"empire-of-man", category:"core", name_fr:"Troupes Régulières de Nuln", name_en:"Nuln State Troops", points:5, unitSize:"10+", specialRules:"Close Order, Regimental Unit, Nuln State Troops {empire}, Horde", opts:[{"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}], equip:[{"name_fr": "Hallebardes", "name_en": "Halberds", "points": 1, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Sergent (champion)", "name_en": "Sergeant (champion)", "points": 5}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 5}, {"name_fr": "Musicien", "name_en": "Musician", "points": 5}]},
  "state-troops-detachment": {id:"state-troops-detachment", army:"empire-of-man", category:"core", name_fr:"Troupes Régulières", name_en:"State Troops", points:5, unitSize:"10+", specialRules:"Close Order, Detachment, Horde", opts:[{"name_fr": "Sergent (champion)", "name_en": "Sergeant (champion)", "points": 0}, {"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true}, {"name_fr": "Hallebardes", "name_en": "Halberds", "points": 1, "perModel": true}, {"name_fr": "Lances d’infanterie", "name_en": "Thrusting spears", "points": 1, "perModel": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}]},
  "veteran-state-troops": {id:"veteran-state-troops", army:"empire-of-man", category:"core", name_fr:"Vétérans des Troupes Régulières", name_en:"Veteran State Troops", points:7, unitSize:"10+", specialRules:"Close Order, Detachment, Regimental Unit, Veteran, Horde", opts:[{"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}, {"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 1, "perModel": true}, {"name_fr": "Détachement", "name_en": "Detachment", "points": 0}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true, "equippedDefault": true}, {"name_fr": "Hallebardes", "name_en": "Halberds", "points": 1, "perModel": true}, {"name_fr": "Lances d’infanterie", "name_en": "Thrusting spears", "points": 1, "perModel": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Sergent Vétéran (champion)", "name_en": "Veteran Sergeant (champion)", "points": 5}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 5}, {"name_fr": "Musicien", "name_en": "Musician", "points": 5}]},
  "nuln-veteran-state-troops": {id:"nuln-veteran-state-troops", army:"empire-of-man", category:"core", name_fr:"Vétérans des Troupes Régulières de Nuln", name_en:"Nuln Veteran State Troops", points:7, unitSize:"10+", specialRules:"Close Order, Regimental Unit, Veteran, Nuln State Troops {empire}, Horde", opts:[{"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}, {"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 1, "perModel": true}], equip:[{"name_fr": "Hallebardes", "name_en": "Halberds", "points": 1, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Sergent Vétéran (champion)", "name_en": "Veteran Sergeant (champion)", "points": 5}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 5}, {"name_fr": "Musicien", "name_en": "Musician", "points": 5}]},
  "state-missile-troops": {id:"state-missile-troops", army:"empire-of-man", category:"core", name_fr:"Troupes de Tir de l’Empire", name_en:"State Missile Troops", points:7, unitSize:"10+", specialRules:"Close Order, Detachment, Regimental Unit", opts:[{"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 1, "perModel": true}, {"name_fr": "Détachement", "name_en": "Detachment", "points": 0}], equip:[{"name_fr": "Armes de base, Arbalètes", "name_en": "Hand weapons, Crossbows", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base, Arquebuses", "name_en": "Hand weapons, Handguns", "points": 1, "perModel": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 1, "perModel": true}], command:[{"name_fr": "Sergent (champion)", "name_en": "Sergeant (champion)", "points": 5}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 5}, {"name_fr": "Musicien", "name_en": "Musician", "points": 5}]},
  "state-missile-troops-detachment": {id:"state-missile-troops-detachment", army:"empire-of-man", category:"core", name_fr:"Troupes de Tir de l’Empire", name_en:"State Missile Troops", points:7, unitSize:"10+", specialRules:"Close Order, Detachment", opts:[{"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 1, "perModel": true}, {"name_fr": "Sergent (champion), Arquebuse", "name_en": "Sergeant (champion), Handgun", "points": 0, "active": true}, {"name_fr": "Sergent (champion), Plusieurs pistolets", "name_en": "Sergeant (champion), Brace of pistols", "points": 5}, {"name_fr": "Sergent (champion), Long fusil de Hochland", "name_en": "Sergeant (champion), Hochland long rifle", "points": 8}, {"name_fr": "Sergent (champion), Arquebuse à répétition", "name_en": "Sergeant (champion), Repeater handgun", "points": 5}], equip:[{"name_fr": "Armes de base, Arbalètes", "name_en": "Hand weapons, Crossbows", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base, Arquebuses", "name_en": "Hand weapons, Handguns", "points": 1, "perModel": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 1, "perModel": true}]},
  "free-company-militia": {id:"free-company-militia", army:"empire-of-man", category:"core", name_fr:"Milice des Franches Compagnies", name_en:"Free Company Militia", points:6, unitSize:"10+", specialRules:"Detachment, Horde, Impetuous, Levies, Open Order, Warband", opts:[{"name_fr": "Détachement", "name_en": "Detachment", "points": 0}], equip:[{"name_fr": "Armes de base additionnelles, Armes de lancer (armes mixtes)", "name_en": "Additional hand weapons, Throwing weapons (mixed weapons)", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Chef de Milice (champion)", "name_en": "Militia leader (champion)", "points": 7}]},
  "empire-archers": {id:"empire-archers", army:"empire-of-man", category:"core", name_fr:"Archers de l’Empire", name_en:"Empire Archers", points:7, unitSize:"5+", specialRules:"Detachment, Move Through Cover, Open Order, Skirmishers, Vanguard", opts:[{"name_fr": "Tir & Fuite", "name_en": "Fire & Flee", "points": 1, "perModel": true}, {"name_fr": "Éclaireurs", "name_en": "Scouts", "points": 1, "perModel": true}, {"name_fr": "Détachement", "name_en": "Detachment", "points": 0}], equip:[{"name_fr": "Armes de base, Arcs de guerre", "name_en": "Hand weapons, Warbows", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Tireur d’Élite (champion)", "name_en": "Marksman (champion)", "points": 5}]},
  "outriders-core": {id:"outriders-core", army:"empire-of-man", category:"core", name_fr:"Escorteurs", name_en:"Outriders", points:19, unitSize:"4+", specialRules:"Fast Cavalry, Fire & Flee, Open Order, Skirmishers, Swiftstride, Vanguard", equip:[{"name_fr": "Armes de base, Pistolets, Arquebuses à répétition", "name_en": "Hand weapons, Pistols, Repeater handguns", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Mitrailleur (champion)", "name_en": "Sharpshooter (champion)", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "empire-knights": {id:"empire-knights", army:"empire-of-man", category:"core", name_fr:"Chevaliers de l’Empire", name_en:"Empire Knights", points:21, unitSize:"4+", specialRules:"Close Order, Counter Charge, First Charge, Swiftstride", opts:[{"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 1, "perModel": true}, {"name_fr": "Obstiné", "name_en": "Stubborn", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Lances de joute, Boucliers", "name_en": "Hand weapons, Lances, Shields", "points": 1, "perModel": true, "active": true}, {"name_fr": "Armes de base, Armes lourdes, Boucliers", "name_en": "Hand weapons, Great weapons, Shields", "points": 1, "perModel": true}, {"name_fr": "Armes de base, Armes lourdes", "name_en": "Hand weapons, Great weapons", "points": 0, "perModel": true}], armor:[{"name_fr": "Armure lourde, Caparaçon", "name_en": "Heavy armour, Barding", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Précepteur (champion)", "name_en": "Preceptor (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "empire-knights-panther": {id:"empire-knights-panther", army:"empire-of-man", category:"core", name_fr:"Chevaliers Panthères", name_en:"Empire Knights Panther", points:23, unitSize:"4+", specialRules:"Order of the Knights Panther, Close Order, Counter Charge, First Charge, Swiftstride, Hatred (Warriors of Chaos + Beastmen Brayherds + Daemonic models)", opts:[{"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 1, "perModel": true}, {"name_fr": "Obstiné", "name_en": "Stubborn", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Lances de joute, Boucliers", "name_en": "Hand weapons, Lances, Shields", "points": 1, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde, Caparaçon", "name_en": "Heavy armour, Barding", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Précepteur (champion)", "name_en": "Preceptor (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "empire-knights-white-wolf": {id:"empire-knights-white-wolf", army:"empire-of-man", category:"core", name_fr:"Chevaliers du Loup Blanc", name_en:"Empire Knights of the White Wolf", points:24, unitSize:"4+", specialRules:"Order of the White Wolf, Close Order, Counter Charge, First Charge, Swiftstride, Furious Charge", opts:[{"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 1, "perModel": true}, {"name_fr": "Obstiné", "name_en": "Stubborn", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Armes lourdes, Boucliers", "name_en": "Hand weapons, Great weapons, Shields", "points": 1, "perModel": true, "active": true}, {"name_fr": "Armes de base, Armes lourdes", "name_en": "Hand weapons, Great weapons", "points": 0, "perModel": true}, {"name_fr": "Armes de base, Marteaux du loup, Boucliers", "name_en": "Hand weapons, Wolf hammers, Shields", "points": 1, "perModel": true}, {"name_fr": "Armes de base, Marteaux du loup", "name_en": "Hand weapons, Wolf hammers", "points": 0, "perModel": true}], armor:[{"name_fr": "Armure lourde, Caparaçon", "name_en": "Heavy armour, Barding", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Précepteur (champion)", "name_en": "Preceptor (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "empire-knights-blazing-sun": {id:"empire-knights-blazing-sun", army:"empire-of-man", category:"core", name_fr:"Chevaliers du Soleil", name_en:"Empire Knights of the Blazing Sun", points:23, unitSize:"4+", specialRules:"Order of the Blazing Sun, Close Order, Counter Charge, First Charge, Swiftstride, Evasive, Flaming Attacks", opts:[{"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 1, "perModel": true}, {"name_fr": "Obstiné", "name_en": "Stubborn", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Lances de joute, Boucliers", "name_en": "Hand weapons, Lances, Shields", "points": 1, "perModel": true, "active": true}, {"name_fr": "Armes de base, Armes lourdes, Boucliers", "name_en": "Hand weapons, Great weapons, Shields", "points": 1, "perModel": true}, {"name_fr": "Armes de base, Armes lourdes", "name_en": "Hand weapons, Great weapons", "points": 0, "perModel": true}], armor:[{"name_fr": "Armure lourde, Caparaçon", "name_en": "Heavy armour, Barding", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Précepteur (champion)", "name_en": "Preceptor (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "empire-knights-morr": {id:"empire-knights-morr", army:"empire-of-man", category:"core", name_fr:"Chevaliers de Morr", name_en:"Empire Knights of Morr", points:24, unitSize:"4+", specialRules:"Order of the Knights of Morr, Close Order, Counter Charge, First Charge, Swiftstride, Hatred (Undead models)", opts:[{"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 1, "perModel": true}, {"name_fr": "Obstiné", "name_en": "Stubborn", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Lances de joute, Boucliers", "name_en": "Hand weapons, Lances, Shields", "points": 1, "perModel": true, "active": true}, {"name_fr": "Armes de base, Armes lourdes, Boucliers", "name_en": "Hand weapons, Great weapons, Shields", "points": 1, "perModel": true}, {"name_fr": "Armes de base, Armes lourdes", "name_en": "Hand weapons, Great weapons", "points": 0, "perModel": true}], armor:[{"name_fr": "Armure lourde, Caparaçon", "name_en": "Heavy armour, Barding", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Précepteur (champion)", "name_en": "Preceptor (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "empire-knights-fiery-heart": {id:"empire-knights-fiery-heart", army:"empire-of-man", category:"core", name_fr:"Chevaliers du Cœur Ardent", name_en:"Empire Knights of the Fiery Heart", points:24, unitSize:"4+", specialRules:"Order of the Fiery Heart, Close Order, Counter Charge, First Charge, Swiftstride, Hatred (enemy Wizards + Orcs & Goblins)", opts:[{"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 1, "perModel": true}, {"name_fr": "Obstiné", "name_en": "Stubborn", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Lances de joute, Boucliers", "name_en": "Hand weapons, Lances, Shields", "points": 1, "perModel": true, "active": true}, {"name_fr": "Armes de base, Armes lourdes, Boucliers", "name_en": "Hand weapons, Great weapons, Shields", "points": 1, "perModel": true}, {"name_fr": "Armes de base, Armes lourdes", "name_en": "Hand weapons, Great weapons", "points": 0, "perModel": true}], armor:[{"name_fr": "Armure lourde, Caparaçon", "name_en": "Heavy armour, Barding", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Précepteur (champion)", "name_en": "Preceptor (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "empire-greatswords": {id:"empire-greatswords", army:"empire-of-man", category:"special", name_fr:"Joueurs d’Épées de l’Empire", name_en:"Empire Greatswords", points:11, unitSize:"5+", specialRules:"Close Order, Regimental Unit, Stubborn", opts:[{"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 2, "perModel": true}, {"name_fr": "Vétérans", "name_en": "Veteran", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base, Armes lourdes", "name_en": "Hand weapons, Great weapons", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure de plate complète", "name_en": "Full plate armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Champion du Comte (champion)", "name_en": "Count's Champion (champion)", "points": 8}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "teutogen-guard": {id:"teutogen-guard", army:"empire-of-man", category:"special", name_fr:"Garde Teutogène", name_en:"Teutogen Guard", points:13, unitSize:"5+", specialRules:"Blessings of Ulric, Close Order, Drilled, Stubborn, Veteran", opts:[{"name_fr": "Gardiens du Temple", "name_en": "Guardians of the Temple", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base, Marteaux du loup", "name_en": "Hand weapons, Wolf hammers", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure de plate complète", "name_en": "Full plate armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Premier Chevalier (champion)", "name_en": "First Knight (champion)", "points": 8}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "pistoliers": {id:"pistoliers", army:"empire-of-man", category:"special", name_fr:"Pistoliers", name_en:"Pistoliers", points:16, unitSize:"5+", specialRules:"Counter Charge, Fast Cavalry, Fire & Flee, Impetuous, Open Order, Skirmishers, Swiftstride", opts:[{"name_fr": "Avant-garde", "name_en": "Vanguard", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Plusieurs pistolets", "name_en": "Hand weapons, Brace of pistols", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Vétérans (champion)", "name_en": "Veteran (champion)", "points": 8}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "outriders": {id:"outriders", army:"empire-of-man", category:"special", name_fr:"Escorteurs", name_en:"Outriders", points:19, unitSize:"4+", specialRules:"Fast Cavalry, Fire & Flee, Open Order, Skirmishers, Swiftstride, Vanguard", equip:[{"name_fr": "Armes de base, Pistolets, Arquebuses à répétition", "name_en": "Hand weapons, Pistols, Repeater handguns", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Mitrailleur (champion)", "name_en": "Sharpshooter (champion)", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "great-cannon": {id:"great-cannon", army:"empire-of-man", category:"special", name_fr:"Grand Canon", name_en:"Great Cannon {empire}", points:125, specialRules:"Skirmishers", opts:[{"name_fr": "Vétérans", "name_en": "Veteran", "points": 10}, {"name_fr": "Vétérans, Avant-garde", "name_en": "Veteran, Vanguard", "points": 5}], equip:[{"name_fr": "Grand canon, Armes de base", "name_en": "Great cannon, Hand weapons", "points": 0, "active": true}]},
  "mortar": {id:"mortar", army:"empire-of-man", category:"special", name_fr:"Mortier", name_en:"Mortar {empire}", points:95, specialRules:"Skirmishers", opts:[{"name_fr": "Vétérans", "name_en": "Veteran", "points": 10, "perModel": true}, {"name_fr": "Vétérans, Avant-garde", "name_en": "Veteran, Vanguard", "points": 5}], equip:[{"name_fr": "Mortier, Armes de base", "name_en": "Mortar, Hand weapons", "points": 0, "active": true}]},
  "empire-war-wagon": {id:"empire-war-wagon", army:"empire-of-man", category:"special", name_fr:"Chariot de Guerre de l’Empire", name_en:"Empire War Wagon", points:140, specialRules:"Close Order, Crushing Weight, Impact Hits (D6+1 - War Wagon only), Large Target, Stable Firing Platform, Stomp Attacks (D3+1)", equip:[{"name_fr": "Armes de base, Assortiment d’armes, Tromblon, Long fusil, Fusil à répétition, Scorpion, Guisarme, Attrape-coquin", "name_en": "Hand weapons, Assorted weapons, Blunderbuss, Long rifle, Repeating rifle, Ball & chain, Hooked halberd, Man-catcher", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "3+", "name_en": "3+", "points": 0, "active": true}]},
  "inner-circle-knights": {id:"inner-circle-knights", army:"empire-of-man", category:"special", name_fr:"Chevaliers du Cercle Intérieur", name_en:"Inner Circle Knights", points:29, unitSize:"4+", specialRules:"Close Order, Counter Charge, Drilled, First Charge, Inner Circle, Swiftstride, Veteran", opts:[{"name_fr": "Obstiné", "name_en": "Stubborn", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Lances de joute, Boucliers", "name_en": "Hand weapons, Lances, Shields", "points": 1, "perModel": true, "active": true}, {"name_fr": "Armes de base, Armes lourdes, Boucliers", "name_en": "Hand weapons, Great weapons, Shields", "points": 1, "perModel": true}, {"name_fr": "Armes de base, Armes lourdes", "name_en": "Hand weapons, Great weapons", "points": 0, "perModel": true}], armor:[{"name_fr": "Armure de plate complète, Caparaçon", "name_en": "Full plate armour, Barding", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Précepteur du Cercle Intérieur (champion)", "name_en": "Inner Circle Preceptor (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "inner-circle-knights-panther": {id:"inner-circle-knights-panther", army:"empire-of-man", category:"special", name_fr:"Chevaliers Panthères du Cercle Intérieur", name_en:"Inner Circle Knights Panther", points:31, unitSize:"4+", specialRules:"Order of the Knights Panther, Close Order, Counter Charge, Drilled, First Charge, Inner Circle, Swiftstride, Veteran, Hatred (Warriors of Chaos + Beastmen Brayherds + Daemonic models), Magic Resistance (-1)", opts:[{"name_fr": "Obstiné", "name_en": "Stubborn", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Lances de joute, Boucliers", "name_en": "Hand weapons, Lances, Shields", "points": 1, "perModel": true, "active": true}], armor:[{"name_fr": "Armure de plate complète, Caparaçon", "name_en": "Full plate armour, Barding", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Précepteur du Cercle Intérieur (champion)", "name_en": "Inner Circle Preceptor (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "inner-circle-knights-white-wolf": {id:"inner-circle-knights-white-wolf", army:"empire-of-man", category:"special", name_fr:"Chevaliers du Loup Blanc du Cercle Intérieur", name_en:"Inner Circle Knights of the White Wolf", points:32, unitSize:"4+", specialRules:"Order of the White Wolf, Close Order, Counter Charge, Drilled, First Charge, Inner Circle, Swiftstride, Veteran, Furious Charge", opts:[{"name_fr": "Obstiné", "name_en": "Stubborn", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Armes lourdes, Boucliers", "name_en": "Hand weapons, Great weapons, Shields", "points": 1, "perModel": true, "active": true}, {"name_fr": "Armes de base, Armes lourdes", "name_en": "Hand weapons, Great weapons", "points": 0, "perModel": true}, {"name_fr": "Armes de base, Marteaux du loup, Boucliers", "name_en": "Hand weapons, Wolf hammers, Shields", "points": 1, "perModel": true}, {"name_fr": "Armes de base, Marteaux du loup", "name_en": "Hand weapons, Wolf hammers", "points": 0, "perModel": true}], armor:[{"name_fr": "Armure de plate complète, Caparaçon", "name_en": "Full plate armour, Barding", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Précepteur du Cercle Intérieur (champion)", "name_en": "Inner Circle Preceptor (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "inner-circle-knights-blazing-sun": {id:"inner-circle-knights-blazing-sun", army:"empire-of-man", category:"special", name_fr:"Chevaliers du Soleil du Cercle Intérieur", name_en:"Inner Circle Knights of the Blazing Sun", points:31, unitSize:"4+", specialRules:"Order of the Blazing Sun, Close Order, Counter Charge, Drilled, First Charge, Inner Circle, Swiftstride, Veteran, Evasive, Flaming Attacks", opts:[{"name_fr": "Obstiné", "name_en": "Stubborn", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Lances de joute, Boucliers", "name_en": "Hand weapons, Lances, Shields", "points": 1, "perModel": true, "active": true}, {"name_fr": "Armes de base, Armes lourdes, Boucliers", "name_en": "Hand weapons, Great weapons, Shields", "points": 1, "perModel": true}, {"name_fr": "Armes de base, Armes lourdes", "name_en": "Hand weapons, Great weapons", "points": 0, "perModel": true}], armor:[{"name_fr": "Armure de plate complète, Caparaçon", "name_en": "Full plate armour, Barding", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Précepteur du Cercle Intérieur (champion)", "name_en": "Inner Circle Preceptor (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "inner-circle-knights-morr": {id:"inner-circle-knights-morr", army:"empire-of-man", category:"special", name_fr:"Chevaliers de Morr du Cercle Intérieur", name_en:"Inner Circle Knights of Morr", points:32, unitSize:"4+", specialRules:"Order of the Knights of Morr, Close Order, Counter Charge, Drilled, First Charge, Inner Circle, Swiftstride, Veteran, Hatred (Undead models), Fear, Magical Attacks", opts:[{"name_fr": "Obstiné", "name_en": "Stubborn", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Lances de joute, Boucliers", "name_en": "Hand weapons, Lances, Shields", "points": 1, "perModel": true, "active": true}, {"name_fr": "Armes de base, Armes lourdes, Boucliers", "name_en": "Hand weapons, Great weapons, Shields", "points": 1, "perModel": true}, {"name_fr": "Armes de base, Armes lourdes", "name_en": "Hand weapons, Great weapons", "points": 0, "perModel": true}], armor:[{"name_fr": "Armure de plate complète, Caparaçon", "name_en": "Full plate armour, Barding", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Précepteur du Cercle Intérieur (champion)", "name_en": "Inner Circle Preceptor (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "inner-circle-knights-fiery-heart": {id:"inner-circle-knights-fiery-heart", army:"empire-of-man", category:"special", name_fr:"Chevaliers du Cœur Ardent du Cercle Intérieur", name_en:"Inner Circle Knights of the Fiery Heart", points:32, unitSize:"4+", specialRules:"Order of the Fiery Heart, Close Order, Counter Charge, Drilled, First Charge, Inner Circle, Swiftstride, Veteran, Hatred (enemy Wizards + Orcs & Goblins)", opts:[{"name_fr": "Obstiné", "name_en": "Stubborn", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Lances de joute, Boucliers", "name_en": "Hand weapons, Lances, Shields", "points": 1, "perModel": true, "active": true}, {"name_fr": "Armes de base, Armes lourdes, Boucliers", "name_en": "Hand weapons, Great weapons, Shields", "points": 1, "perModel": true}, {"name_fr": "Armes de base, Armes lourdes", "name_en": "Hand weapons, Great weapons", "points": 0, "perModel": true}], armor:[{"name_fr": "Armure de plate complète, Caparaçon", "name_en": "Full plate armour, Barding", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Précepteur du Cercle Intérieur (champion)", "name_en": "Inner Circle Preceptor (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "demigryph-knights": {id:"demigryph-knights", army:"empire-of-man", category:"special", name_fr:"Chevaliers Demigriffons", name_en:"Demigryph Knights", points:58, unitSize:"2-12", specialRules:"Close Order, Counter Charge, First Charge, Fear, Swiftstride, Wicked Claws (Demigryph)", equip:[{"name_fr": "Armes de base, Lances de joute, Boucliers", "name_en": "Hand weapons, Lances, Shields", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base, Hallebardes, Boucliers", "name_en": "Hand weapons, Halberds, Shields", "points": 0, "perModel": true}], armor:[{"name_fr": "Armure lourde, Caparaçon", "name_en": "Heavy armour, Barding", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armure de plate complète, Caparaçon", "name_en": "Full plate armour, Barding", "points": 5, "perModel": true}], command:[{"name_fr": "Précepteur Demigriffon (champion)", "name_en": "Demigryph Preceptor (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "demigryph-knights-panther": {id:"demigryph-knights-panther", army:"empire-of-man", category:"special", name_fr:"Chevaliers Panthères Demigriffon", name_en:"Demigryph Knights Panther", points:60, unitSize:"2-12", specialRules:"Order of the Knights Panther, Close Order, Counter Charge, First Charge, Fear, Swiftstride, Wicked Claws (Demigryph), Hatred (Warriors of Chaos + Beastmen Brayherds + Daemonic models)", equip:[{"name_fr": "Armes de base, Lances de joute, Boucliers", "name_en": "Hand weapons, Lances, Shields", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde, Caparaçon", "name_en": "Heavy armour, Barding", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armure de plate complète, Caparaçon", "name_en": "Full plate armour, Barding", "points": 5, "perModel": true}], command:[{"name_fr": "Précepteur Demigriffon (champion)", "name_en": "Demigryph Preceptor (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "demigryph-knights-white-wolf": {id:"demigryph-knights-white-wolf", army:"empire-of-man", category:"special", name_fr:"Chevaliers du Loup Blanc Demigriffon", name_en:"Demigryph Knights of the White Wolf", points:61, unitSize:"2-12", specialRules:"Order of the White Wolf, Close Order, Counter Charge, First Charge, Fear, Swiftstride, Wicked Claws (Demigryph), Furious Charge", equip:[{"name_fr": "Armes de base, Marteaux du loup, Boucliers", "name_en": "Hand weapons, Wolf hammers, Shields", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base, Hallebardes, Boucliers", "name_en": "Hand weapons, Halberds, Shields", "points": 0, "perModel": true}], armor:[{"name_fr": "Armure lourde, Caparaçon", "name_en": "Heavy armour, Barding", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armure de plate complète, Caparaçon", "name_en": "Full plate armour, Barding", "points": 5, "perModel": true}], command:[{"name_fr": "Précepteur Demigriffon (champion)", "name_en": "Demigryph Preceptor (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "demigryph-knights-blazing-sun": {id:"demigryph-knights-blazing-sun", army:"empire-of-man", category:"special", name_fr:"Chevaliers du Soleil Demigriffon", name_en:"Demigryph Knights of the Blazing Sun", points:60, unitSize:"2-12", specialRules:"Order of the Blazing Sun, Close Order, Counter Charge, First Charge, Fear, Swiftstride, Wicked Claws (Demigryph), Evasive, Flaming Attacks", equip:[{"name_fr": "Armes de base, Lances de joute, Boucliers", "name_en": "Hand weapons, Lances, Shields", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base, Hallebardes, Boucliers", "name_en": "Hand weapons, Halberds, Shields", "points": 0, "perModel": true}], armor:[{"name_fr": "Armure lourde, Caparaçon", "name_en": "Heavy armour, Barding", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armure de plate complète, Caparaçon", "name_en": "Full plate armour, Barding", "points": 5, "perModel": true}], command:[{"name_fr": "Précepteur Demigriffon (champion)", "name_en": "Demigryph Preceptor (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "demigryph-knights-morr": {id:"demigryph-knights-morr", army:"empire-of-man", category:"special", name_fr:"Chevaliers de Morr Demigriffon", name_en:"Demigryph Knights of Morr", points:61, unitSize:"2-12", specialRules:"Order of the Knights of Morr, Close Order, Counter Charge, First Charge, Fear, Swiftstride, Wicked Claws (Demigryph), Hatred (Undead models)", equip:[{"name_fr": "Armes de base, Lances de joute, Boucliers", "name_en": "Hand weapons, Lances, Shields", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base, Hallebardes, Boucliers", "name_en": "Hand weapons, Halberds, Shields", "points": 0, "perModel": true}], armor:[{"name_fr": "Armure lourde, Caparaçon", "name_en": "Heavy armour, Barding", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armure de plate complète, Caparaçon", "name_en": "Full plate armour, Barding", "points": 5, "perModel": true}], command:[{"name_fr": "Précepteur Demigriffon (champion)", "name_en": "Demigryph Preceptor (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "demigryph-knights-fiery-heart": {id:"demigryph-knights-fiery-heart", army:"empire-of-man", category:"special", name_fr:"Chevaliers du Cœur Ardent Demigriffon", name_en:"Demigryph Knights of the Fiery Heart", points:61, unitSize:"2-12", specialRules:"Order of the Fiery Heart, Close Order, Counter Charge, First Charge, Fear, Swiftstride, Wicked Claws (Demigryph), Hatred (enemy Wizards + Orcs & Goblins)", equip:[{"name_fr": "Armes de base, Lances de joute, Boucliers", "name_en": "Hand weapons, Lances, Shields", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base, Hallebardes, Boucliers", "name_en": "Hand weapons, Halberds, Shields", "points": 0, "perModel": true}], armor:[{"name_fr": "Armure lourde, Caparaçon", "name_en": "Heavy armour, Barding", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armure de plate complète, Caparaçon", "name_en": "Full plate armour, Barding", "points": 5, "perModel": true}], command:[{"name_fr": "Précepteur Demigriffon (champion)", "name_en": "Demigryph Preceptor (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "empire-road-wardens": {id:"empire-road-wardens", army:"empire-of-man", category:"rare", name_fr:"Patrouilleurs Ruraux de l’Empire", name_en:"Empire Road Wardens", points:18, unitSize:"4+", specialRules:"Fast Cavalry, Fire & Flee, Open Order, Skirmishers, Swiftstride", opts:[{"name_fr": "Fuite Feinte", "name_en": "Feigned Flight", "points": 2, "perModel": true}, {"name_fr": "Avant-garde", "name_en": "Vanguard", "points": 0, "perModel": true, "active": true}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 1, "perModel": true}, {"name_fr": "Éclaireurs", "name_en": "Scouts", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base, Arbalètes", "name_en": "Hand weapons, Crossbows", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base, Plusieurs pistolets", "name_en": "Hand weapons, Brace of pistols", "points": 1, "perModel": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Capitaine (champion)", "name_en": "Captain (champion)", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "steam-tank": {id:"steam-tank", army:"empire-of-man", category:"rare", name_fr:"Tank à Vapeur", name_en:"Steam Tank", points:265, specialRules:"Close Order, Grinding Wheels, Immune to Psychology, Impact Hits (D6+1), Large Target, Steam Power, Stomp Attacks (D3+1), Temperamental, Terror, Unbreakable", opts:[{"name_fr": "Long fusil de Hochland", "name_en": "Hochland long rifle", "points": 10, "perModel": true}, {"name_fr": "Pigeons grenadiers", "name_en": "Pigeon bombs", "points": 20, "perModel": true}, {"name_fr": "Pistolet à répétition", "name_en": "Repeater pistol", "points": 8, "perModel": true}], equip:[{"name_fr": "Canon à Vapeur, Couleuvrine à Vapeur", "name_en": "Steam Cannon, Steam gun {empire}", "points": 0, "active": true}]},
  "flagellants": {id:"flagellants", army:"empire-of-man", category:"rare", name_fr:"Flagellants", name_en:"Flagellants", points:13, unitSize:"5+", specialRules:"Close Order, Fanatical Zeal, Feel No Pain, Furious Charge, Immune to Psychology, Impetuous, Hatred (all enemies), Unbreakable", equip:[{"name_fr": "Armes de base, Fléaux", "name_en": "Hand weapons, Flails", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Prophète (champion)", "name_en": "Prophet of Doom (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}]},
  "helblaster-volley-gun": {id:"helblaster-volley-gun", army:"empire-of-man", category:"rare", name_fr:"Canon à Répétition Feu d’Enfer", name_en:"Helblaster Volley Gun", points:120, specialRules:"Skirmishers", opts:[{"name_fr": "Vétérans, Avant-garde", "name_en": "Veteran, Vanguard", "points": 15}], equip:[{"name_fr": "Canon à Répétition Feu d’Enfer, Armes de base", "name_en": "Helblaster Volley Gun {weapon}, Hand weapons", "points": 0, "active": true}]},
  "helstorm-rocket-battery": {id:"helstorm-rocket-battery", army:"empire-of-man", category:"rare", name_fr:"Batterie Tonnerre de Feu", name_en:"Helstorm Rocket Battery", points:125, specialRules:"Skirmishers", opts:[{"name_fr": "Vétérans, Avant-garde", "name_en": "Veteran, Vanguard", "points": 10}], equip:[{"name_fr": "Batterie Tonnerre de Feu, Armes de base", "name_en": "Helstorm Rocket Battery {weapon}, Hand weapons", "points": 0, "active": true}]},
  "imperial-ogres": {id:"imperial-ogres", army:"empire-of-man", category:"mercenaries", name_fr:"Ogres Impériaux", name_en:"Imperial Ogres", points:31, unitSize:"3+", specialRules:"Armour Bane (1), Close Order, Fear, Impact Hits (1), Mercenaries, Motley Crew, Ogre Charge", opts:[{"name_fr": "Armes lourdes", "name_en": "Great weapons", "points": 4}, {"name_fr": "Morgenstern", "name_en": "Morning Stars", "points": 2}, {"name_fr": "Canons légers", "name_en": "Light cannons", "points": 8}, {"name_fr": "Pistolets Ogres", "name_en": "Ogre pistols", "points": 5}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 3, "perModel": true}], command:[{"name_fr": "Capitaine (champion)", "name_en": "Captain (champion)", "points": 7}]},
  "fire-rain-rocket-battery": {id:"fire-rain-rocket-battery", army:"grand-cathay", category:"special", name_fr:"Batterie de Fusées Pluie de Feu", name_en:"Fire Rain Rocket Battery", points:130, specialRules:"Skirmishers", opts:[{"name_fr": "Chargeur Ogre", "name_en": "Ogre Loader", "points": 35}], equip:[{"name_fr": "Batterie Pluie de Feu, Armes de base", "name_en": "Fire rain rocket, Hand weapons", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "active": true}]},
  "cathayan-sentinel-special": {id:"cathayan-sentinel-special", army:"grand-cathay", category:"special", name_fr:"Sentinelle Cathayenne", name_en:"Cathayan Sentinel", points:230, specialRules:"Close Order, Immune to Psychology, Implacable, Large Target, Stomp Attacks (D3+1), Terror, Timmm-berrr!, Unbreakable", opts:[{"name_fr": "Sentinelle de Terre Cuite", "name_en": "Terracotta Sentinel", "points": 0, "active": true}, {"name_fr": "Sentinelle de Jade", "name_en": "Jade Sentinel", "points": 20}, {"name_fr": "Sentinelle d’Obsidienne", "name_en": "Obsidian Sentinel", "points": 25}, {"name_fr": "Sentinelle de Granit", "name_en": "Granite Sentinel", "points": 35}, {"name_fr": "Sentinelle de Malepierre", "name_en": "Warpstone Sentinel", "points": 40}], equip:[{"name_fr": "Armes de base, Grande lame", "name_en": "Hand weapons, Great blade", "points": 0, "active": true}], armor:[{"name_fr": "Armure lourde (Armure de terre cuite)", "name_en": "Heavy armour (Terracotta armour)", "points": 0, "active": true}]},
  "sky-lantern-special": {id:"sky-lantern-special", army:"grand-cathay", category:"special", name_fr:"Lanterne Céleste", name_en:"Sky Lantern", points:135, specialRules:"Close Order, Disengage, Eye of the Dragon, Feigned Flight, Fire & Flee, Fly (8), Heavenly Beacon, Impact Hits (D3+1 - Sky Lantern only), Large Target, Reserve Move, Scouts, Flammable", opts:[{"name_fr": "Bombes de Lanterne Céleste", "name_en": "Sky Lantern bombs", "points": 15}], equip:[{"name_fr": "Canons Grues de Lanterne Céleste", "name_en": "Sky Lantern Crane Guns", "points": 0, "active": true}, {"name_fr": "Canons grêle de fer, Bombes de poudre à canon", "name_en": "Iron hail guns, Gunpowder bombs", "points": 0}, {"name_fr": "Canons grêle de fer, Bombes de feu du dragon", "name_en": "Iron hail guns, Dragon fire bombs", "points": 20}], armor:[{"name_fr": "4+", "name_en": "4+", "points": 0, "active": true}]},
  "crane-gunner-team": {id:"crane-gunner-team", army:"grand-cathay", category:"special", name_fr:"Crane Gunner Teams", name_en:"Crane Gunner Teams", points:16, unitSize:"3-8", specialRules:"Open Order", opts:[{"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 1, "perModel": true}, {"name_fr": "Mouvement de Réserve", "name_en": "Reserve Move", "points": 2, "perModel": true}], equip:[{"name_fr": "Crane guns, Armes de base", "name_en": "Crane guns, Hand weapons", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère, Tower shields", "name_en": "Light armour, Tower shields", "points": 0, "active": true}]},
  "iron-hail-gunners": {id:"iron-hail-gunners", army:"grand-cathay", category:"special", name_fr:"Iron Hail Gunners", name_en:"Iron Hail Gunners", points:12, unitSize:"4-12", specialRules:"Open Order, Skirmishers", opts:[{"name_fr": "Bombes de poudre à canon", "name_en": "Gunpowder bombs", "points": 2, "perModel": true}], equip:[{"name_fr": "Iron hail guns, Armes de base", "name_en": "Iron hail guns, Hand weapons", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "active": true}], command:[{"name_fr": "Marksman (champion)", "name_en": "Marksman (champion)", "points": 6}]},
  "sky-lantern": {id:"sky-lantern", army:"grand-cathay", category:"rare", name_fr:"Lanterne Céleste", name_en:"Sky Lantern", points:135, specialRules:"Close Order, Disengage, Eye of the Dragon, Feigned Flight, Fire & Flee, Fly (8), Heavenly Beacon, Impact Hits (D3+1 - Sky Lantern only), Large Target, Reserve Move, Scouts, Flammable", opts:[{"name_fr": "Bombes de Lanterne Céleste", "name_en": "Sky Lantern bombs", "points": 15}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 15}], equip:[{"name_fr": "Canons Grues de Lanterne Céleste", "name_en": "Sky Lantern Crane Guns", "points": 0, "active": true}, {"name_fr": "Canons grêle de fer, Bombes de poudre à canon", "name_en": "Iron hail guns, Gunpowder bombs", "points": 0}, {"name_fr": "Canons grêle de fer, Bombes de feu du dragon", "name_en": "Iron hail guns, Dragon fire bombs", "points": 20}], armor:[{"name_fr": "4+", "name_en": "4+", "points": 0, "active": true}]},
  "cathayan-sentinel": {id:"cathayan-sentinel", army:"grand-cathay", category:"rare", name_fr:"Sentinelle Cathayenne", name_en:"Cathayan Sentinel", points:230, specialRules:"Close Order, Immune to Psychology, Implacable, Large Target, Stomp Attacks (D3+1), Terror, Timmm-berrr!, Unbreakable", opts:[{"name_fr": "Sentinelle de Terre Cuite", "name_en": "Terracotta Sentinel", "points": 0, "active": true}, {"name_fr": "Sentinelle de Jade", "name_en": "Jade Sentinel", "points": 20}, {"name_fr": "Sentinelle d’Obsidienne", "name_en": "Obsidian Sentinel", "points": 25}, {"name_fr": "Sentinelle de Granit", "name_en": "Granite Sentinel", "points": 35}, {"name_fr": "Sentinelle de Malepierre", "name_en": "Warpstone Sentinel", "points": 40}], equip:[{"name_fr": "Armes de base, Grande lame", "name_en": "Hand weapons, Great blade", "points": 0, "active": true}], armor:[{"name_fr": "Armure lourde (Armure de terre cuite)", "name_en": "Heavy armour (Terracotta armour)", "points": 0, "active": true}]},
  "sea-guard-garrison.commander": {id:"sea-guard-garrison.commander", army:"high-elf-realms", category:"characters", name_fr:"Commandant de Garnison de la Garde Maritime", name_en:"Sea Guard Garrison Commander", points:90, specialRules:"Accomplished Archers, Ithilmar Weapons, Naval Discipline, Strike First*, Valour of Ages", opts:[{"name_fr": "Lance de cavalerie (si monté)", "name_en": "Cavalry spear (if appropriately mounted)", "points": 2}, {"name_fr": "Bouclier", "name_en": "Shield", "points": 2}], equip:[{"name_fr": "Arme de base, Arc de guerre", "name_en": "Hand weapon, Warbow", "points": 0, "active": true}, {"name_fr": "Arme de base, Arc long", "name_en": "Hand weapon, Longbow", "points": 4, "perModel": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "active": true}, {"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 3}], command:[{"name_fr": "Général", "name_en": "General", "points": 0}, {"name_fr": "Porteur de la Grande Bannière", "name_en": "Battle Standard Bearer", "points": 25}], mounts:[{"name_fr": "À Pied", "name_en": "On foot", "points": 0, "active": true}, {"name_fr": "Grand Aigle", "name_en": "Great Eagle {mount}", "points": 60}, {"name_fr": "Cotre Volant de Lothern", "name_en": "Lothern Skycutter", "points": 90}, {"name_fr": "Griffon", "name_en": "Griffon {high elves}", "points": 130}]},
  "storm-weaver": {id:"storm-weaver", army:"high-elf-realms", category:"characters", name_fr:"Tisseur de Tempête", name_en:"Storm Weaver", points:85, specialRules:"Elven Reflexes, Ithilmar Weapons, Lore of Saphery, Valour of Ages", opts:[{"name_fr": "Sorcier", "name_en": "Wizard", "points": 0, "active": true}], equip:[{"name_fr": "Arme de base", "name_en": "Hand weapon", "points": 0, "active": true}], command:[{"name_fr": "Général", "name_en": "General", "points": 0}], mounts:[{"name_fr": "À Pied", "name_en": "On foot", "points": 0, "active": true}, {"name_fr": "Licorne", "name_en": "Unicorn", "points": 35}]},
  "korhil-lionmane": {id:"korhil-lionmane", army:"high-elf-realms", category:"characters", name_fr:"Korhil Lionmane", name_en:"Korhil Lionmane", points:175, specialRules:"Elven Reflexes, Furious Charge, Mighty Constitution, Move Through Cover*, Stubborn, Valour of Ages", equip:[{"name_fr": "Arme de base, Chayal", "name_en": "Hand weapon, Chayal", "points": 0, "active": true, "equippedDefault": true}], armor:[{"name_fr": "Armure lourde, Fourrure de Charandis", "name_en": "Heavy armour, The Pelt of Charandis", "points": 0, "active": true}], command:[{"name_fr": "Général", "name_en": "General", "points": 0}], mounts:[{"name_fr": "À Pied", "name_en": "On foot", "points": 0, "active": true}, {"name_fr": "Char de Chef de Guerre", "name_en": "Chieftain's Chariot", "points": 105}]},
  "ishaya-vess": {id:"ishaya-vess", army:"high-elf-realms", category:"characters", name_fr:"Ishaya Vess", name_en:"Ishaya Vess", points:170, specialRules:"Commanding Voice, Ithilmar Weapons, Naval Discipline, Rallying Cry, Strike First, Precision Strikes, Valour of Ages", equip:[{"name_fr": "Arme de base, Ire de Mathlann, Arc de guerre", "name_en": "Hand weapon, Mathlann's Ire, Warbow", "points": 0, "active": true, "equippedDefault": true}], armor:[{"name_fr": "Armure lourde, Bouclier", "name_en": "Heavy armour, Shield", "points": 0, "active": true}], command:[{"name_fr": "Général", "name_en": "General", "points": 0}]},
  "elven-spearmen": {id:"elven-spearmen", army:"high-elf-realms", category:"core", name_fr:"Lanciers Elfiques", name_en:"Elven Spearmen", points:9, unitSize:"5+", specialRules:"Close Order, Elven Reflexes, Martial Prowess, Regimental Unit, Valour of Ages", opts:[{"name_fr": "Mur de Boucliers", "name_en": "Shieldwall", "points": 10}, {"name_fr": "Vétérans", "name_en": "Veteran", "points": 1, "perModel": true}, {"name_fr": "Mouvement à Couvert", "name_en": "Move Through Cover", "points": 1, "perModel": true}, {"name_fr": "Cape de Lion", "name_en": "Lion Cloak", "points": 10}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "active": true}, {"name_fr": "Lances d’infanterie", "name_en": "Thrusting spears", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère, Boucliers", "name_en": "Light armour, Shields", "points": 0, "active": true}], command:[{"name_fr": "Sentinelle (champion)", "name_en": "Sentinel (champion)", "points": 5}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 5}, {"name_fr": "Musicien", "name_en": "Musician", "points": 5}]},
  "elven-archers": {id:"elven-archers", army:"high-elf-realms", category:"core", name_fr:"Archers Elfiques", name_en:"Elven Archers", points:10, unitSize:"5+", specialRules:"Close Order, Detachment, Elven Reflexes, Valour of Ages", opts:[{"name_fr": "Vétérans", "name_en": "Veteran", "points": 1, "perModel": true}, {"name_fr": "Détachement", "name_en": "Detachment", "points": 0}, {"name_fr": "Mouvement à Couvert", "name_en": "Move Through Cover", "points": 1, "perModel": true}, {"name_fr": "Cape de Lion", "name_en": "Lion Cloak", "points": 10}, {"name_fr": "Détachement", "name_en": "Detachment", "points": 0}], equip:[{"name_fr": "Armes de base, Arcs longs", "name_en": "Hand weapons, Longbows", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 1, "perModel": true}], command:[{"name_fr": "Sentinelle (champion)", "name_en": "Sentinel (champion)", "points": 5}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 5}, {"name_fr": "Musicien", "name_en": "Musician", "points": 5}]},
  "lothern-sea-guard": {id:"lothern-sea-guard", army:"high-elf-realms", category:"core", name_fr:"Garde Maritime de Lothern", name_en:"Lothern Sea Guard", points:11, unitSize:"5+", specialRules:"Close Order, Elven Reflexes, Martial Prowess, Naval Discipline, Valour of Ages", opts:[{"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}, {"name_fr": "Vétérans", "name_en": "Veteran", "points": 1, "perModel": true}, {"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 0}], equip:[{"name_fr": "Armes de base, Lances d’infanterie, Arcs de guerre", "name_en": "Hand weapons, Thrusting spears, Warbows", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "active": true}], command:[{"name_fr": "Maître Maritime (champion)", "name_en": "Sea Master (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 5}, {"name_fr": "Musicien", "name_en": "Musician", "points": 5}]},
  "ellyrian-reavers": {id:"ellyrian-reavers", army:"high-elf-realms", category:"core", name_fr:"Patrouilleurs Ellyriens", name_en:"Ellyrian Reavers", points:16, unitSize:"5+", specialRules:"Elven Reflexes, Fast Cavalry, Open Order, Swiftstride, Valour of Ages", opts:[{"name_fr": "Arcs courts", "name_en": "Shortbows", "points": 2, "perModel": true}, {"name_fr": "Éclaireurs", "name_en": "Scouts", "points": 2, "perModel": true}, {"name_fr": "Tirailleurs", "name_en": "Skirmishers", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base, Lances de cavalerie", "name_en": "Hand weapons, Cavalry spears", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base, Arcs courts", "name_en": "Hand weapons, Shortbows", "points": 1, "perModel": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "active": true}], command:[{"name_fr": "Émissaire (champion)", "name_en": "Harbinger (champion)", "points": 8}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "silver-helms": {id:"silver-helms", army:"high-elf-realms", category:"core", name_fr:"Heaumes d’Argent", name_en:"Silver Helms", points:23, unitSize:"5+", specialRules:"Close Order, Elven Reflexes, First Charge, Ithilmar Barding, Swiftstride, Valour of Ages", opts:[{"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base, Lances de joute, Armes de base (Sabots)", "name_en": "Hand weapons, Lances, Hand weapons (Hooves)", "points": 0, "active": true}], armor:[{"name_fr": "Armure lourde, Caparaçon", "name_en": "Heavy armour, Barding", "points": 0, "active": true}], command:[{"name_fr": "Grand Heaume (champion)", "name_en": "High Helm (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "sisters-of-avelorn": {id:"sisters-of-avelorn", army:"high-elf-realms", category:"core", name_fr:"Sœurs d’Avelorn", name_en:"Sisters of Avelorn", points:15, unitSize:"5+", specialRules:"Arrows of Isha, Evasive, Ignores Cover, Immune to Psychology, Ithilmar Armour, Ithilmar Weapons, Open Order, Skirmishers, Strike First", opts:[{"name_fr": "Obstiné", "name_en": "Stubborn", "points": 1, "perModel": true}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base, Arcs d’Avelorn", "name_en": "Hand weapons, Bows of Avelorn", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "active": true}], command:[{"name_fr": "Sœur Supérieure", "name_en": "High Sister", "points": 7}]},
  "chracian-woodsmen": {id:"chracian-woodsmen", army:"high-elf-realms", category:"core", name_fr:"Forestier Chracien", name_en:"Chracian Woodsmen", points:12, unitSize:"5+", specialRules:"Elven Reflexes, Move Through Cover, Skirmishers, Valour of Ages", opts:[{"name_fr": "Arcs de guerre", "name_en": "Warbows", "points": 1, "perModel": true}, {"name_fr": "Cape de Lion", "name_en": "Lion Cloak", "points": 1, "perModel": true}, {"name_fr": "Avant-garde", "name_en": "Vanguard", "points": 0, "perModel": true, "active": true}, {"name_fr": "Éclaireurs", "name_en": "Scouts", "points": 0, "perModel": true}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base, Grandes lames de Chrace", "name_en": "Hand weapons, Chracian great blades", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "active": true}, {"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 1, "perModel": true}], command:[{"name_fr": "Capitaine Chracien (champion)", "name_en": "Chracian Captain (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "white-lions-of-chrace": {id:"white-lions-of-chrace", army:"high-elf-realms", category:"core", name_fr:"Lions Blancs de Chrace", name_en:"White Lions of Chrace", points:14, unitSize:"5+", specialRules:"Chracian Warriors, Elven Reflexes, King's Guard, Lion Cloak, Move Through Cover, Open Order, Stubborn, Valour of Ages, Furious Charge", opts:[{"name_fr": "Vétérans (Remplace Valeur des Âges)", "name_en": "Veteran (Replaces Valour of Ages)", "points": 1, "perModel": true}], equip:[{"name_fr": "Grandes lames de Chrace", "name_en": "Chracian great blades", "points": 0, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "active": true}], command:[{"name_fr": "Gardien", "name_en": "Guardian", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "ships-company": {id:"ships-company", army:"high-elf-realms", category:"core", name_fr:"Compagnie d’Équipage", name_en:"Ship's Company", points:9, unitSize:"5+", specialRules:"Detachment, Elven Reflexes, Evasive, Fire & Flee, Open Order, Valour of Ages", opts:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 1, "perModel": true}, {"name_fr": "Tirailleurs (Remplace Ordre Dispersé)", "name_en": "Skirmishers (Replaces Open Order)", "points": 0, "perModel": true}, {"name_fr": "Vétérans (Remplace Valeur des Âges)", "name_en": "Veteran (Replaces Valour of Ages)", "points": 1, "perModel": true}, {"name_fr": "Détachement", "name_en": "Detachment", "points": 0}], equip:[{"name_fr": "Armes de base, Arcs de guerre", "name_en": "Hand weapons, Warbows", "points": 0, "active": true}, {"name_fr": "Armes de base, Lances d’infanterie, Boucliers", "name_en": "Hand weapons, Thrusting spears, Shields", "points": 0}], command:[{"name_fr": "Champion", "name_en": "Champion", "points": 5}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 5}, {"name_fr": "Musicien", "name_en": "Musician", "points": 5}]},
  "dragon-princes": {id:"dragon-princes", army:"high-elf-realms", category:"special", name_fr:"Princes Dragons", name_en:"Dragon Princes", points:37, unitSize:"5+", specialRules:"Close Order, Counter Charge, Dragon Armour, Drilled, Elven Reflexes, First Charge, Impetuous, Ithilmar Barding, Ithilmar Weapons, Sons of Caledor, Swiftstride, Valour of Ages", equip:[{"name_fr": "Armes de base, Lances de joute", "name_en": "Hand weapons, Lances", "points": 0, "active": true}], armor:[{"name_fr": "Armure de plate complète, Boucliers, Caparaçon", "name_en": "Full plate armour, Shields, Barding", "points": 0, "active": true}], command:[{"name_fr": "Maître Dragon", "name_en": "Drakemaster", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "swordmasters": {id:"swordmasters", army:"high-elf-realms", category:"special", name_fr:"Maîtres des Épées de Hoeth", name_en:"Swordmasters of Hoeth", points:14, unitSize:"5+", specialRules:"Cleaving Blow, Close Order, Deflect Shots, Elven Reflexes, Ithilmar Armour, Magic Resistance (-1), Valour of Ages, Warriors of the White Tower", opts:[{"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 1, "perModel": true}], equip:[{"name_fr": "Épées de Hoeth", "name_en": "Swords of Hoeth", "points": 0, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "active": true}], command:[{"name_fr": "Grande Lame", "name_en": "Bladelord", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "phoenix-guard": {id:"phoenix-guard", army:"high-elf-realms", category:"special", name_fr:"Garde Phénix", name_en:"Phoenix Guard", points:16, unitSize:"5+", specialRules:"Blessings of Asuryan, Close Order, Elven Reflexes, Fear, Martial Prowess, Veteran, Witness to Destiny", opts:[{"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 1, "perModel": true}], equip:[{"name_fr": "Hallebardes de cérémonie", "name_en": "Ceremonial halberds", "points": 0, "active": true}], armor:[{"name_fr": "Armure de plate complète", "name_en": "Full plate armour", "points": 0, "active": true}], command:[{"name_fr": "Gardien de la Flamme", "name_en": "Keeper of the Flame", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "shadow-warriors": {id:"shadow-warriors", army:"high-elf-realms", category:"special", name_fr:"Guerriers Fantômes", name_en:"Shadow Warriors", points:14, unitSize:"5+", specialRules:"Elven Reflexes, Evasive, Fire & Flee, Ithilmar Weapons, Move Through Cover, Scouts, Skirmishers, Veteran, Warriors of Nagarythe", opts:[{"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 1, "perModel": true}, {"name_fr": "Escorteurs de Chars", "name_en": "Chariot Runners", "points": 1, "perModel": true}, {"name_fr": "Fuite Feinte", "name_en": "Feigned Flight", "points": 1, "perModel": true}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 0, "perModel": true}], equip:[{"name_fr": "Arcs longs", "name_en": "Longbows", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "active": true}], command:[{"name_fr": "Arpenteur des Ombres", "name_en": "Shadow Walker", "points": 6}]},
  "tiranoc-chariots": {id:"tiranoc-chariots", army:"high-elf-realms", category:"special", name_fr:"Chars de Tiranoc", name_en:"Tiranoc Chariots", points:75, unitSize:"1-4", specialRules:"Elven Reflexes, Impact Hits (D6), Open Order, Quick Shot, Swiftstride, Valour of Ages", equip:[{"name_fr": "Lances de cavalerie, Arcs longs", "name_en": "Cavalry spears, Longbows", "points": 0, "active": true}]},
  "lion-chariot-of-chrace": {id:"lion-chariot-of-chrace", army:"high-elf-realms", category:"special", name_fr:"Char à Lions de Chrace", name_en:"Lion Chariot of Chrace", points:125, specialRules:"Close Order, Elven Reflexes, Fear, First Charge, Impact Hits (D6), Lion Cloak, Stubborn, Valour of Ages", equip:[{"name_fr": "Grandes lames de Chrace", "name_en": "Chracian great blades", "points": 0, "active": true}]},
  "lothern-skycutters": {id:"lothern-skycutters", army:"high-elf-realms", category:"special", name_fr:"Cotre Volant de Lothern", name_en:"Lothern Skycutter", points:90, specialRules:"Close Order, Fear, Fly (10), Elven Reflexes (Sea Guard Crew only), Impact Hits (D3+1), Swiftstride, Valour of Ages", opts:[{"name_fr": "Baliste Œil-d’aigle", "name_en": "Eagle-Eye Bolt Thrower", "points": 25, "perModel": true}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 10, "perModel": true}], equip:[{"name_fr": "Lances de cavalerie, Arcs courts, Griffes mortelles (Rokh d’Écume)", "name_en": "Cavalry spears, Shortbows, Wicked claws (Swiftfeather Roc)", "points": 0, "active": true}]},
  "war-lions": {id:"war-lions", army:"high-elf-realms", category:"special", name_fr:"Lions de Guerre", name_en:"War Lions", points:18, unitSize:"2-6", specialRules:"Cleaving Blow, Fear, Move Through Cover, Open Order, Swiftstride, Vanguard", equip:[{"name_fr": "Armes de base (Griffes et crocs)", "name_en": "Hand weapons (Claws and fangs)", "points": 0, "active": true}]},
  "flamespyre-phoenix": {id:"flamespyre-phoenix", army:"high-elf-realms", category:"rare", name_fr:"Phénix Spire-de-feu", name_en:"Flamespyre Phoenix", points:170, specialRules:"Blessings of Asuryan, Close Order, Fear, Flaming Attacks, Fly (10), From the Ashes, Large Target, Stomp Attacks (2), Swiftstride, Wake of Fire", equip:[{"name_fr": "Griffes mortelles", "name_en": "Wicked claws", "points": 0, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "active": true}]},
  "frostheart-phoenix": {id:"frostheart-phoenix", army:"high-elf-realms", category:"rare", name_fr:"Phénix Cœur-de-Givre", name_en:"Frostheart Phoenix", points:205, specialRules:"Blizzard Aura, Close Order, Fear, Fly (9), Large Target, Stomp Attacks (2), Swiftstride", equip:[{"name_fr": "Griffes mortelles", "name_en": "Wicked claws", "points": 0, "active": true}], armor:[{"name_fr": "Armure de plate complète", "name_en": "Full plate armour", "points": 0, "active": true}]},
  "great-eagle": {id:"great-eagle", army:"high-elf-realms", category:"rare", name_fr:"Grand Aigle", name_en:"Great Eagle", points:60, specialRules:"Close Order, Fear, Fly (10), Stomp Attacks (1), Swiftstride", equip:[{"name_fr": "Griffes mortelles, Gueule dentelée", "name_en": "Wicked claws, Serrated maw", "points": 0, "active": true}]},
  "eagle-claw-bolt-thrower": {id:"eagle-claw-bolt-thrower", army:"high-elf-realms", category:"rare", name_fr:"Baliste Serre d’Aigle", name_en:"Eagle-Claw Bolt Thrower", points:80, specialRules:"Elven Reflexes, Skirmishers, Valour of Ages", equip:[{"name_fr": "Baliste à répétition, Armes de base", "name_en": "Repeater Bolt Thrower, Hand weapons", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}]},
  "lion-guard": {id:"lion-guard", army:"high-elf-realms", category:"rare", name_fr:"Garde Lion", name_en:"Lion Guard", points:18, unitSize:"5+", specialRules:"Champions of Chrace, Close Order, Elven Reflexes, Furious Charge, Lion Cloak, Stubborn, Veteran", equip:[{"name_fr": "Armes de base, Grandes lames de Chrace", "name_en": "Hand weapons, Chracian great blades", "points": 0, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "active": true}], command:[{"name_fr": "Capitaine Garde Lion (champion)", "name_en": "Lion Guard Captain (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "merwyrms": {id:"merwyrms", army:"high-elf-realms", category:"rare", name_fr:"Wyrm des Mers", name_en:"Merwyrm", points:225, specialRules:"Abyssal Cloak, Close Order, Enfeebling Cold, Impact Hits (D3), Large Target, Stomp Attacks (D3+1), Terror", equip:[{"name_fr": "Serres cinglantes, Queue de serpent, Souffle saumâtre", "name_en": "Lashing talons, Serpentine tail, Briny breath", "points": 0, "active": true}], armor:[{"name_fr": "Armure lourde (Écailles irisées)", "name_en": "Heavy armour (Iridescent scales)", "points": 0, "active": true}]},
  "lady-élisse-duachaard": {id:"lady-élisse-duachaard", army:"kingdom-of-bretonnia", category:"characters", name_fr:"Dame Élisse Duchaard", name_en:"Lady Élisse Duchaard", points:225, specialRules:"Arcane Backlash, Armour Bane (2 - Ariandir only), Armoured Hide (1), Aura of the Lady, Beguiling Aura, Blessings of the Lady, Counter Charge, Lore of the Lady, Magical Attacks, Magic Resistance (-2), Shield of the Lady, Stomp Attacks (1), Swiftstride", opts:[{"name_fr": "Sorcier", "name_en": "Wizard", "points": 0, "active": true}], equip:[{"name_fr": "Arme de base, Calice de Brionne, Le Bâton des Éléments", "name_en": "Hand weapon, Chalice of Brionne, The Staff of the Elements", "points": 0, "active": true}], command:[{"name_fr": "Général", "name_en": "General", "points": 0}]},
  "border-princes-brigands": {id:"border-princes-brigands", army:"kingdom-of-bretonnia", category:"rare", name_fr:"Brigands des Principautés Frontalières", name_en:"Border Princes Brigands", points:4, unitSize:"10+", specialRules:"Horde, Impetuous, Levies, Motley Crew, Open Order, Warband", opts:[{"name_fr": "Arme de base additionnelle", "name_en": "Additional hand weapon", "points": 2}, {"name_fr": "Boucliers", "name_en": "Shields", "points": 1}, {"name_fr": "Pistolets", "name_en": "Pistols", "points": 2}, {"name_fr": "Tromblons", "name_en": "Blunderbusses", "points": 4}, {"name_fr": "Arbalètes", "name_en": "Crossbows", "points": 3}, {"name_fr": "Formation", "name_en": "Formation", "points": 0, "active": true}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 2, "perModel": true}, {"name_fr": "Éclaireurs", "name_en": "Scouts", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Desperado (champion)", "name_en": "Desperado (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 5}, {"name_fr": "Musicien", "name_en": "Musician", "points": 5}]},
  "border-princes-bombard": {id:"border-princes-bombard", army:"kingdom-of-bretonnia", category:"rare", name_fr:"Bombarde des Principautés Frontalières", name_en:"Border Princes Bombard", points:100, specialRules:"Levies, Skirmishers", equip:[{"name_fr": "Bombarde, Armes de base", "name_en": "Bombard, Hand weapons", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}]},
  "night-goblin-oddgit": {id:"night-goblin-oddgit", army:"orc-and-goblin-tribes", category:"characters", name_fr:"Zarbzig Gobelin de la Nuit", name_en:"Night Goblin Oddgit", points:55, specialRules:"Fear of Elves, Hatred (Dwarfs), Lore of Mork, Warband", opts:[{"name_fr": "Sorcier", "name_en": "Wizard", "points": 0, "active": true}], equip:[{"name_fr": "Arme de base", "name_en": "Hand weapon", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Général", "name_en": "General", "points": 0}], mounts:[{"name_fr": "À Pied", "name_en": "On foot", "points": 0, "active": true}]},
  "kiknik-toofsnatcha": {id:"kiknik-toofsnatcha", army:"orc-and-goblin-tribes", category:"characters", name_fr:"Kiknik Toofsnatcha", name_en:"Kiknik Toofsnatcha", points:105, specialRules:"All Sneaky Like, Ambushers, Armour Bane (1 - Chompa only), Armoured Hide (1), Chariot Runners, Fast Cavalry, Fear of Elves, Impetuous, 'It & Run, Rallying Cry, Swiftstride, Warband", equip:[{"name_fr": "Râtelier à Trophées du Chef, Frakass’ Crânes, Lance de cavalerie", "name_en": "Da Boss' Trophy Rack, Da Skull Smasha, Cavalry spear", "points": 0, "active": true}], armor:[{"name_fr": "Bouclier, Armure légère", "name_en": "Shield, Light armour", "points": 0, "active": true}], command:[{"name_fr": "Général", "name_en": "General", "points": 0}], mounts:[{"name_fr": "Mâchoir’", "name_en": "Chompa", "points": 0, "active": true}]},
  "ogdruz-swampdigga": {id:"ogdruz-swampdigga", army:"orc-and-goblin-tribes", category:"characters", name_fr:"Ogdruz Swampdigga", name_en:"Ogdruz Swampdigga", points:195, specialRules:"Choppas, Da Troll Calla, Ignore Goblin Panic, Protect Da Boss, Syphoned Strength, Warband", opts:[{"name_fr": "Sorcier de Niveau 3", "name_en": "Level 3 Wizard", "points": 0, "perModel": true, "active": true}], equip:[{"name_fr": "Bâton en Morta, Châle en Peau de Troll, Familier de Savoir", "name_en": "Bog-wood staff, Trollhide shawl, Lore Familiar", "points": 0, "active": true}], command:[{"name_fr": "Général", "name_en": "General", "points": 0}]},
  "troll-hag": {id:"troll-hag", army:"orc-and-goblin-tribes", category:"characters", name_fr:"Mégère Trollesse", name_en:"Troll Hag", points:235, specialRules:"Close Order, Flammable, Immune to Psychology, Indiscriminate Hunger, Large Target, Motherly Love, Regeneration (5+), Slimy Shanks, Stomp Attacks (D6), Stupidity, Terror, Timmm-berrr!, Unbreakable", opts:[{"name_fr": "Sorcier", "name_en": "Wizard", "points": 0, "active": true}], equip:[{"name_fr": "Arme de base (Souche noueuse), Vomi de Troll, Souffle marécageux", "name_en": "Hand weapon (Gnarled stump), Troll vomit, Swamp breath", "points": 0, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "active": true}], command:[{"name_fr": "Général", "name_en": "General", "points": 0}]},
  "common-troll-mob": {id:"common-troll-mob", army:"orc-and-goblin-tribes", category:"core", name_fr:"Bande de Trolls", name_en:"Common Troll Mob", points:41, unitSize:"1-9", specialRules:"Armour Bane (1), Close Order, Fear, Flammable, Regeneration (5+), Stupidity, Motley Crew", opts:[{"name_fr": "Armes de base additionnelles", "name_en": "Additional hand weapons", "points": 3, "perModel": true}, {"name_fr": "Armes lourdes", "name_en": "Great weapons", "points": 4, "perModel": true}], equip:[{"name_fr": "Armes de base, Vomi de Troll", "name_en": "Hand weapons, Troll vomit", "points": 0, "perModel": true, "active": true, "equippedDefault": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "active": true}]},
  "river-troll-mob": {id:"river-troll-mob", army:"orc-and-goblin-tribes", category:"core", name_fr:"Bande de Trolls d’Eau", name_en:"River Troll Mob", points:49, unitSize:"1-9", specialRules:"Armour Bane (1), Close Order, Fear, Flammable, Regeneration (5+), Stupidity, Motley Crew", opts:[{"name_fr": "Armes de base additionnelles", "name_en": "Additional hand weapons", "points": 3, "perModel": true}, {"name_fr": "Armes lourdes", "name_en": "Great weapons", "points": 4, "perModel": true}], equip:[{"name_fr": "Armes de base, Vomi de Troll", "name_en": "Hand weapons, Troll vomit", "points": 0, "perModel": true, "active": true, "equippedDefault": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "active": true}]},
  "stone-troll-mob": {id:"stone-troll-mob", army:"orc-and-goblin-tribes", category:"core", name_fr:"Bande de Trolls de Pierre", name_en:"Stone Troll Mob", points:45, unitSize:"1-9", specialRules:"Armour Bane (1), Armoured Hide (1), Close Order, Fear, Flammable, Magic Resistance (-1), Regeneration (5+), Stupidity, Motley Crew", opts:[{"name_fr": "Armes de base additionnelles", "name_en": "Additional hand weapons", "points": 3, "perModel": true}, {"name_fr": "Armes lourdes", "name_en": "Great weapons", "points": 4, "perModel": true}], equip:[{"name_fr": "Armes de base, Vomi de Troll", "name_en": "Hand weapons, Troll vomit", "points": 0, "perModel": true, "active": true, "equippedDefault": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "active": true}]},
  "orc-mob": {id:"orc-mob", army:"orc-and-goblin-tribes", category:"core", name_fr:"Bande d’Orques", name_en:"Orc Mob", points:5, unitSize:"5+", specialRules:"Choppas, Close Order, Ignore Goblin Panic, Impetuous, Warband", opts:[{"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}, {"name_fr": "Peintures de Guerre", "name_en": "Warpaint", "points": 1, "perModel": true}, {"name_fr": "Grands Kitrou", "name_en": "Big Stabbas", "points": 5}, {"name_fr": "Kostos", "name_en": "Big 'Uns", "points": 2, "perModel": true}, {"name_fr": "Tirailleurs", "name_en": "Skirmishers", "points": 0, "perModel": true}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true, "equippedDefault": true}, {"name_fr": "Arcs de guerre", "name_en": "Warbows", "points": 0, "perModel": true}, {"name_fr": "Armes de base additionnelles", "name_en": "Additional hand weapons", "points": 1, "perModel": true}, {"name_fr": "Lances d’infanterie", "name_en": "Thrusting spears", "points": 1, "perModel": true}, {"name_fr": "Javelots", "name_en": "Throwing spears", "points": 1, "perModel": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}, {"name_fr": "Frénésie", "name_en": "Frenzy", "points": 1, "perModel": true}], command:[{"name_fr": "Chef (champion)", "name_en": "Boss (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 5}, {"name_fr": "Musicien", "name_en": "Musician", "points": 5}]},
  "black-orc-mob-core": {id:"black-orc-mob-core", army:"orc-and-goblin-tribes", category:"core", name_fr:"Bande d’Orques Noirs", name_en:"Black Orc Mob", points:12, unitSize:"5+", specialRules:"Choppas, Close Order, Da Boyz, Furious Charge, Ignore Panic, Motley Crew, Quell Impetuosity", opts:[{"name_fr": "Obstiné", "name_en": "Stubborn", "points": 1, "perModel": true}, {"name_fr": "Vétérans", "name_en": "Veteran", "points": 1, "perModel": true}, {"name_fr": "Boucliers", "name_en": "Shields", "points": 1}, {"name_fr": "Armes lourdes", "name_en": "Great weapons", "points": 2}, {"name_fr": "Armes de base additionnelles", "name_en": "Additional hand weapons", "points": 1}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure de plate complète", "name_en": "Full plate armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Chef (champion)", "name_en": "Boss (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "goblin-mob": {id:"goblin-mob", army:"orc-and-goblin-tribes", category:"core", name_fr:"Bande de Gobelins", name_en:"Goblin Mob", points:3, unitSize:"10+", specialRules:"Close Order, Fear of Elves, Horde, Impetuous, Warband", opts:[{"name_fr": "Zigouillards", "name_en": "Nasty Skulkers", "points": 10}, {"name_fr": "Tirailleurs", "name_en": "Skirmishers", "points": 0, "perModel": true}], equip:[{"name_fr": "Armes de base, Boucliers", "name_en": "Hand weapons, Shields", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base, Lances d’infanterie, Boucliers", "name_en": "Hand weapons, Thrusting spears, Shields", "points": 1, "perModel": true}, {"name_fr": "Armes de base, Arcs courts", "name_en": "Hand weapons, Shortbows", "points": 1, "perModel": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 1, "perModel": true}], command:[{"name_fr": "Chef (champion)", "name_en": "Boss (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 5}, {"name_fr": "Musicien", "name_en": "Musician", "points": 5}]},
  "snotling-mob": {id:"snotling-mob", army:"orc-and-goblin-tribes", category:"core", name_fr:"Bande de Snotlings", name_en:"Snotling Mob", points:35, unitSize:"2+", specialRules:"Immune to Psychology, Impetuous, Loner, Open Order, Skirmishers, Unbreakable, Vanguard", equip:[{"name_fr": "Armes de base, Armes de lancer", "name_en": "Hand weapons, Throwing weapons", "points": 0, "perModel": true, "active": true}]},
  "night-goblin-mob": {"id":"night-goblin-mob","army":"orc-and-goblin-tribes","category":"core","name_fr":"Bande de Gobelins de la Nuit","name_en":"Night Goblin Mob","points":3,"unitSize":"10+","specialRules":"Close Order, Fear of Elves, Hatred (Dwarfs), Horde, Warband","opts":[{"name_fr":"Rétiaires","name_en":"Netters","points":20},{"name_fr":"Fanatiques (0-1 par 10 Gob. de la Nuit, max 3)","name_en":"Fanatics (0-1 per 10 Night Goblins, max 3)","points":25}],"equip":[{"name_fr":"Armes de base, Boucliers","name_en":"Hand weapons, Shields","points":0,"perModel":true,"active":true},{"name_fr":"Armes de base, Lances d’infanterie, Boucliers","name_en":"Hand weapons, Thrusting spears, Shields","points":1,"perModel":true},{"name_fr":"Armes de base, Arcs courts","name_en":"Hand weapons, Shortbows","points":1,"perModel":true}],"command":[{"name_fr":"Chef (champion)","name_en":"Boss (champion)","points":7},{"name_fr":"Porte-étendard","name_en":"Standard bearer","points":5},{"name_fr":"Musicien","name_en":"Musician","points":5}]},
  "fanatics": {id:"fanatics", army:"orc-and-goblin-tribes", category:"core", name_fr:"Fanatiques", name_en:"Fanatics", points:25, specialRules:"Immune to Psychology, Release the Fanatics!", equip:[{"name_fr": "Chaînes & Boulets de Fanatique", "name_en": "Fanatic ball & chain", "points": 0, "active": true}]},
  "goblin-spider-rider-mob": {id:"goblin-spider-rider-mob", army:"orc-and-goblin-tribes", category:"core", name_fr:"Bande de Gobelins sur Araignées", name_en:"Goblin Spider Rider Mob", points:12, unitSize:"5+", specialRules:"Fast Cavalry, Fear of Elves, Impetuous, Move Through Cover, Open Order, Poisoned Attacks, Swiftstride, Warband", opts:[{"name_fr": "Lances de cavalerie", "name_en": "Cavalry spears", "points": 1, "perModel": true}, {"name_fr": "Arcs courts", "name_en": "Shortbows", "points": 1, "perModel": true}, {"name_fr": "Armure légère", "name_en": "Light armour", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base, Boucliers", "name_en": "Hand weapons, Shields", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Chef (champion)", "name_en": "Boss (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 5}, {"name_fr": "Musicien", "name_en": "Musician", "points": 5}]},
  "goblin-wolf-rider-mob": {"id":"goblin-wolf-rider-mob","army":"orc-and-goblin-tribes","category":"core","name_fr":"Bande de Gobelins sur Loups","name_en":"Goblin Wolf Rider Mob","points":10,"unitSize":"5+","specialRules":"Chariot Runners, Fast Cavalry, Fear of Elves, Fire & Flee, Impetuous, Open Order, Skirmishers, Swiftstride, Warband","opts":[{"name_fr":"Fuite Feinte","name_en":"Feigned Flight","points":2,"perModel":true},{"name_fr":"Mouvement de Réserve","name_en":"Reserve Move","points":1,"perModel":true}],"equip":[{"name_fr":"Armes de base, Boucliers","name_en":"Hand weapons, Shields","points":0,"perModel":true,"active":true},{"name_fr":"Armes de base, Boucliers, Lances de cavalerie","name_en":"Hand weapons, Shields, Cavalry spears","points":0,"perModel":true},{"name_fr":"Armes de base, Arcs courts","name_en":"Hand weapons, Shortbows","points":0,"perModel":true}],"armor":[{"name_fr":"Armure légère","name_en":"Light armour","points":1,"perModel":true}],"command":[{"name_fr":"Chef (champion)","name_en":"Boss (champion)","points":7},{"name_fr":"Porte-étendard","name_en":"Standard bearer","points":5},{"name_fr":"Musicien","name_en":"Musician","points":5}]},
  "orc-boar-boy-mob-core": {id:"orc-boar-boy-mob-core", army:"orc-and-goblin-tribes", category:"core", name_fr:"Bande d’Orques sur Sangliers", name_en:"Orc Boar Boy Mob", points:15, unitSize:"4+", specialRules:"Armoured Hide (1), Choppas, Close Order, Counter Charge, Furious Charge (Orc Boar Boys & Boss only), Ignore Goblin Panic, Impetuous, Swiftstride, Tusker Charge, Warband", opts:[{"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}, {"name_fr": "Kostos", "name_en": "Big 'Uns", "points": 2, "perModel": true}, {"name_fr": "Peintures de Guerre", "name_en": "Warpaint", "points": 1, "perModel": true}, {"name_fr": "Avant-garde", "name_en": "Vanguard", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true, "equippedDefault": true}, {"name_fr": "Lances de cavalerie", "name_en": "Cavalry spears", "points": 1, "perModel": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 1, "perModel": true}, {"name_fr": "Frénésie", "name_en": "Frenzy", "points": 1, "perModel": true}], command:[{"name_fr": "Chef (champion)", "name_en": "Boss (champion)", "points": 8}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "night-goblin-squig-herd": {id:"night-goblin-squig-herd", army:"orc-and-goblin-tribes", category:"core", name_fr:"Troupeau de Squigs Gobelins de la Nuit", name_en:"Night Goblin Squig Herd", points:10, unitSize:"5+", specialRules:"Hatred (Dwarfs), Immune to Psychology, Impetuous, Loner, Motley Crew, Open Order, Skirmishers, Squigs Go Wild, Warband", opts:[{"name_fr": "Berger Gobelin de la Nuit", "name_en": "Squig Herder", "points": 3}, {"name_fr": "Lances d’infanterie pour Berger Gobelin de la Nuit", "name_en": "Thrusting spears for Squig Herder", "points": 1}]},
  "black-orc-boar-chariot": {id:"black-orc-boar-chariot", army:"orc-and-goblin-tribes", category:"core", name_fr:"Char à Sangliers Orque Noir", name_en:"Black Orc Boar Chariot", points:130, specialRules:"Choppas, Close Order, First Charge, Furious Charge (Black Orc Crew only), Ignore Panic, Impact Hits (D6+1), Tusker Charge", equip:[{"name_fr": "Arme de base, Arme de base additionnelle", "name_en": "Hand weapon, Additional hand weapon", "points": 2, "active": true}, {"name_fr": "Arme de base, Arme lourde", "name_en": "Hand weapon, Great weapon", "points": 4}], armor:[{"name_fr": "3+", "name_en": "3+", "points": 0, "active": true}], command:[{"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 10}]},
  "orc-boar-boy-mob": {"id":"orc-boar-boy-mob","army":"orc-and-goblin-tribes","category":"special","name_fr":"Bande d’Orques sur Sangliers","name_en":"Orc Boar Boy Mob","points":15,"unitSize":"4+","specialRules":"Armoured Hide (1), Choppas, Close Order, Counter Charge, Furious Charge (Orc Boar Boys & Boss only), Ignore Goblin Panic, Impetuous, Swiftstride, Tusker Charge, Warband","opts":[{"name_fr":"Boucliers","name_en":"Shields","points":1,"perModel":true},{"name_fr":"Kostos","name_en":"Big 'Uns","points":2,"perModel":true},{"name_fr":"Peintures de Guerre","name_en":"Warpaint","points":1,"perModel":true}],"equip":[{"name_fr":"Armes de base","name_en":"Hand weapons","points":0,"perModel":true,"active":true,"equippedDefault":true},{"name_fr":"Lances de cavalerie","name_en":"Cavalry spears","points":1,"perModel":true}],"armor":[{"name_fr":"Armure légère","name_en":"Light armour","points":0,"perModel":true,"active":true},{"name_fr":"Armure lourde","name_en":"Heavy armour","points":1,"perModel":true},{"name_fr":"Frénésie","name_en":"Frenzy","points":1,"perModel":true}],"command":[{"name_fr":"Chef (champion)","name_en":"Boss (champion)","points":8},{"name_fr":"Porte-étendard","name_en":"Standard bearer","points":6},{"name_fr":"Musicien","name_en":"Musician","points":6}]},
  "night-goblin-squig-hopper-mob": {id:"night-goblin-squig-hopper-mob", army:"orc-and-goblin-tribes", category:"special", name_fr:"Bande de Gobelins de la Nuit sur Squigs", name_en:"Night Goblin Squig Hopper Mob", points:12, unitSize:"5+", specialRules:"Hatred (Dwarfs), Immune to Psychology, Impact Hits (1), Loner, Open Order, Random Movement, Skirmishers, Warband", opts:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true, "equippedDefault": true}, {"name_fr": "Lances de cavalerie", "name_en": "Cavalry spears", "points": 1, "perModel": true}], command:[{"name_fr": "Chef (champion)", "name_en": "Boss (champion)", "points": 6}]},
  "orc-boar-chariots": {id:"orc-boar-chariots", army:"orc-and-goblin-tribes", category:"special", name_fr:"Char à Sangliers Orque", name_en:"Orc Boar Chariot", points:90, specialRules:"Choppas, Close Order, First Charge, Ignore Goblin Panic, Impact Hits (D6+1), Impetuous, Tusker Charge, Warband", opts:[{"name_fr": "Troisième Aurige Orque", "name_en": "Third Orc crew member", "points": 5}, {"name_fr": "Frénésie", "name_en": "Frenzy", "points": 4}, {"name_fr": "Frénésie", "name_en": "Frenzy", "points": 6}, {"name_fr": "Peintures de Guerre", "name_en": "Warpaint", "points": 10}], equip:[{"name_fr": "Armes de base, Lances de cavalerie", "name_en": "Hand weapons, Cavalry spears", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "4+", "name_en": "4+", "points": 0, "active": true}]},
  "goblin-wolf-chariot": {id:"goblin-wolf-chariot", army:"orc-and-goblin-tribes", category:"special", name_fr:"Chars à Loups Gobelins", name_en:"Goblin Wolf Chariots", points:53, unitSize:"1-5", specialRules:"Fear of Elves, Impact Hits (D3+1), Impetuous, Open Order, Swiftstride, Warband", opts:[{"name_fr": "Troisième Loup Géant", "name_en": "Third Giant Wolf", "points": 5, "perModel": true}], equip:[{"name_fr": "Armes de base, Lances de cavalerie, Arcs courts", "name_en": "Hand weapons, Cavalry spears, Shortbows", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "5+", "name_en": "5+", "points": 0, "active": true}], command:[{"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 5}]},
  "snotling-pump-wagon": {id:"snotling-pump-wagon", army:"orc-and-goblin-tribes", category:"special", name_fr:"Chariots à Pompe Snotlings", name_en:"Snotling Pump Wagons", points:35, unitSize:"1-6", specialRules:"Armour Bane (3 - Impact Hits), Immune to Psychology, Impact Hits (D3+1), Loner, Open Order, Random Movement", equip:[{"name_fr": "Armes de base, Armes de lancer", "name_en": "Hand weapons, Throwing weapons", "points": 0, "perModel": true, "active": true}]},
  "goblin-bolt-throwa": {id:"goblin-bolt-throwa", army:"orc-and-goblin-tribes", category:"special", name_fr:"Baliste Gobeline", name_en:"Goblin Bolt Throwa", points:45, specialRules:"Fear of Elves, Skirmishers", opts:[{"name_fr": "Brute Orque, Fouet", "name_en": "Orc Bully, Whip", "points": 10}], equip:[{"name_fr": "Baliste, Armes de base", "name_en": "Bolt thrower, Hand weapons", "points": 0, "active": true}]},
  "doom-diver-catapult": {id:"doom-diver-catapult", army:"orc-and-goblin-tribes", category:"rare", name_fr:"Catapulte à Plongeurs de la Mort", name_en:"Doom Diver Catapult", points:95, specialRules:"Doom Diver, Fear of Elves, Skirmishers", opts:[{"name_fr": "Brute Orque, Fouet", "name_en": "Orc Bully, Whip", "points": 10}], equip:[{"name_fr": "Catapulte, Armes de base", "name_en": "Stone thrower, Hand weapons", "points": 0, "active": true}]},
  "goblin-rock-lobber": {id:"goblin-rock-lobber", army:"orc-and-goblin-tribes", category:"rare", name_fr:"Lance-rocs Gobelin", name_en:"Goblin Rock Lobber", points:75, specialRules:"Fear of Elves, Skirmishers", opts:[{"name_fr": "Brute Orque, Fouet", "name_en": "Orc Bully, Whip", "points": 10}], equip:[{"name_fr": "Catapulte, Armes de base", "name_en": "Stone thrower, Hand weapons", "points": 0, "active": true}]},
  "arachnarok-spider": {id:"arachnarok-spider", army:"orc-and-goblin-tribes", category:"rare", name_fr:"Arachnarok", name_en:"Arachnarok Spider", points:310, specialRules:"Close Order, Howdah, Immune to Psychology, Large Target, Move Through Cover, Poisoned Attacks, Stomp Attacks (D6), Stubborn, Swiftstride, Terror", opts:[{"name_fr": "Catatoile", "name_en": "Spidersilk lobber", "points": 35, "perModel": true}], equip:[{"name_fr": "Arme de base (crochets empoisonnés), Injection de venin, Armes de base, Lances de cavalerie, Arcs courts", "name_en": "Hand weapon (poisonous fangs), Venom surge, Hand weapons, Cavalry spears, Shortbows", "points": 0, "perModel": true, "active": true}], armor:[{"name_en": "4+", "points": 0, "active": true}]},
  "mangler-squigs": {id:"mangler-squigs", army:"orc-and-goblin-tribes", category:"rare", name_fr:"Squigs Broyeurs", name_en:"Mangler Squigs", points:95, specialRules:"Close Order, Hatred (Dwarfs), Immune to Psychology, Impact Hits (D6), Ker-splat, Large Target, Random Attacks, Random Movement, Spiked Ball & Chains, Stomp Attacks (D3), Timmm-berrr!", equip:[{"name_fr": "Colossale gueule garnie de crocs", "name_en": "Colossal fang-filled gob", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}]},
  "black-orc-boar-chariot-rare": {id:"black-orc-boar-chariot-rare", army:"orc-and-goblin-tribes", category:"rare", name_fr:"Char à Sangliers Orque Noir", name_en:"Black Orc Boar Chariot", points:130, specialRules:"Choppas, Close Order, First Charge, Furious Charge (Black Orc Crew only), Ignore Panic, Impact Hits (D6+1), Tusker Charge", equip:[{"name_fr": "Arme de base, Arme de base additionnelle", "name_en": "Hand weapon, Additional hand weapon", "points": 2, "active": true}, {"name_fr": "Arme de base, Arme lourde", "name_en": "Hand weapon, Great weapon", "points": 4}], armor:[{"name_fr": "3+", "name_en": "3+", "points": 0, "active": true}], command:[{"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 10}]},
  "badlands-ogre-bulls": {id:"badlands-ogre-bulls", army:"orc-and-goblin-tribes", category:"mercenaries", name_fr:"Buffles Ogres des Terres Arides", name_en:"Badlands Ogre Bulls", points:31, unitSize:"3+", specialRules:"Armour Bane (1), Close Order, Fear, Impact Hits (1), Mercenaries, Motley Crew, Ogre Charge", opts:[{"name_fr": "Armes de base additionnelles", "name_en": "Additional hand weapons", "points": 3, "perModel": true}, {"name_fr": "Armes lourdes", "name_en": "Great weapons", "points": 4, "perModel": true}, {"name_fr": "Poings d’Acier", "name_en": "Ironfists", "points": 4, "perModel": true}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 4, "perModel": true}], command:[{"name_fr": "Broyeur (champion)", "name_en": "Crusher (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Beugleur (musicien)", "name_en": "Bellower (musician)", "points": 6}]},
  "bonegrinder-giant": {id:"bonegrinder-giant", army:"orc-and-goblin-tribes", category:"mercenaries", name_fr:"Géant Broyeur d’Os", name_en:"Bonegrinder Giant", points:300, specialRules:"Bonegrinder Giant Attacks, Close Order, Immune to Psychology, Large Target, Mercenaries, Stomp Attacks (D6+1), Terror, Timmm-berrr!, Unbreakable", equip:[{"name_fr": "Massue de Géant Broyeur d’Os", "name_en": "Bonegrinder Giant's club", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "active": true}]},
  "warp-lightning-cannon": {id:"warp-lightning-cannon", army:"skaven", category:"rare", name_fr:"Canon à Malefoudre", name_en:"Warp Lightning Cannon", points:110, specialRules:"Skirmishers", equip:[{"name_fr": "Canon à Malefoudre, Armes de base", "name_en": "Warp Lightning Cannon {renegade}, Hand weapons", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}]},
  "plagueclaw-catapult": {id:"plagueclaw-catapult", army:"skaven", category:"rare", name_fr:"Catapulte de la Peste", name_en:"Plagueclaw Catapult", points:110, specialRules:"Random Attacks, Skirmishers, Stubborn", equip:[{"name_fr": "Catapulte de la Peste, Armes de base", "name_en": "Plagueclaw Catapult, Hand weapons", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}]},
  "plague-censer-bearers": {id:"plague-censer-bearers", army:"skaven", category:"rare", name_fr:"Encenseurs à Peste", name_en:"Plague Censer Bearers", points:13, unitSize:"2-10", specialRules:"Frenzy, Scurry Away, Skirmishers, Stubborn, Warband", equip:[{"name_fr": "Armes de base, Encensoirs à Peste", "name_en": "Hand weapons, Plague censers", "points": 0, "perModel": true, "active": true}]},
  "skeleton-chariots": {id:"skeleton-chariots", army:"tomb-kings-of-khemri", category:"core", name_fr:"Chars Squelettes", name_en:"Skeleton Chariots", points:41, unitSize:"1+", specialRules:"Arrows of Asaph, Dry as Dust, Horde, Impact Hits (D3), Nehekharan Undead, Open Order, Regeneration (6+), Reserve Move, Swiftstride", equip:[{"name_fr": "Armes de base, Lances de cavalerie, Arcs de guerre", "name_en": "Hand weapons, Cavalry spears, Warbows", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "4+", "name_en": "4+", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Maître Aurige (champion)", "name_en": "Master Charioteer (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "tomb-swarms": {id:"tomb-swarms", army:"tomb-kings-of-khemri", category:"core", name_fr:"Nuées des Tombes", name_en:"Tomb Swarms", points:37, unitSize:"2-10", specialRules:"Dry as Dust, Nehekharan Undead, Poisoned Attacks, Regeneration (6+), Skirmishers", opts:[{"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base (Morsures venimeuses et dards)", "name_en": "Hand weapons (Venomous bites and stings)", "points": 0, "perModel": true, "active": true}]},
  "skeleton-horsemen": {id:"skeleton-horsemen", army:"tomb-kings-of-khemri", category:"core", name_fr:"Cavaliers Squelettes", name_en:"Skeleton Horsemen", points:11, unitSize:"5+", specialRules:"Close Order, Horde, Nehekharan Undead, Regeneration (6+), Swiftstride, Vanguard", opts:[{"name_fr": "Contre-charge", "name_en": "Counter Charge", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true, "equippedDefault": true}, {"name_fr": "Lances de cavalerie", "name_en": "Cavalry spears", "points": 1, "perModel": true}], armor:[{"name_fr": "Pas d’armure, Boucliers", "name_en": "No armour, Shields", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armure légère, Boucliers", "name_en": "Light armour, Shields", "points": 1, "perModel": true}], command:[{"name_fr": "Maître des Chevaux (champion)", "name_en": "Master of Horse (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "skeleton-horse-archers": {id:"skeleton-horse-archers", army:"tomb-kings-of-khemri", category:"core", name_fr:"Archers Squelettes à Cheval", name_en:"Skeleton Horse Archers", points:11, unitSize:"5+", specialRules:"Arrows of Asaph, Nehekharan Undead, Open Order, Regeneration (6+), Reserve Move, Scouts, Skirmishers, Swiftstride", opts:[{"name_fr": "Escorteurs de Chars", "name_en": "Chariot Runners", "points": 1, "perModel": true}, {"name_fr": "Escorteurs de Chars", "name_en": "Chariot Runners", "points": 0, "perModel": true}], equip:[{"name_fr": "Armes de base, Arcs de guerre", "name_en": "Hand weapons, Warbows", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 1, "perModel": true}], command:[{"name_fr": "Maître des Chevaux (champion)", "name_en": "Master of Horse (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "skeleton-infantry-cohorts": {id:"skeleton-infantry-cohorts", army:"tomb-kings-of-khemri", category:"core", name_fr:"Cohorte d’Infanterie Squelette", name_en:"Skeleton Infantry Cohort", points:0, specialRules:"Arrows of Asaph, Close Order, Horde, Motley Crew*, Nehekharan Undead, Regeneration (6+), Regimental Unit, Steadfast Discipline", opts:[{"name_fr": "Guerriers de l’Ost Royal", "name_en": "Royal Host Warriors", "points": 5}, {"name_fr": "Archers de l’Ost Royal", "name_en": "Royal Host Archers", "points": 5}, {"name_fr": "Phalange de Nehekhara", "name_en": "Nehekharan Phalanx", "points": 10}], equip:[{"name_fr": "Armes de base (les deux), Lances d’infanterie (Guerriers), Arcs de guerre (Archers)", "name_en": "Hand weapons (both), Thrusting spears (Warriors), Warbows (Archers)", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère (les deux), Boucliers (Guerriers)", "name_en": "Light armour (both), Shields (Warriors)", "points": 0, "active": true}], command:[{"name_fr": "Maître d’Armes (champion)", "name_en": "Master of Arms (champion)", "points": 5}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 5}, {"name_fr": "Musicien", "name_en": "Musician", "points": 5}]},
  "skeleton-cavalry-cohort": {id:"skeleton-cavalry-cohort", army:"tomb-kings-of-khemri", category:"core", name_fr:"Cohorte de Cavalerie Squelette", name_en:"Skeleton Cavalry Cohort", points:0, specialRules:"Arrows of Asaph, Close Order, Horde, Motley Crew*, Nehekharan Undead, Regeneration (6+), Steadfast Discipline, Swiftstride, Vanguard", opts:[{"name_fr": "Cavaliers de l’Ost Royal", "name_en": "Royal Host Horsemen", "points": 12}, {"name_fr": "Archers à Cheval de l’Ost Royal", "name_en": "Royal Host Horse Archers", "points": 11}, {"name_fr": "Contre-charge", "name_en": "Counter Charge", "points": 1}], equip:[{"name_fr": "Armes de base (les deux), Lances de cavalerie (Cavaliers), Arcs de guerre (Archers à Cheval)", "name_en": "Hand weapons (both), Cavalry spears (Horsemen), Warbows (Horse Archers)", "points": 0, "active": true}], armor:[{"name_fr": "Armure légère (les deux), Boucliers (Cavaliers)", "name_en": "Light armour (both), Shields (Horsemen)", "points": 0, "active": true}], command:[{"name_fr": "Maître des Chevaux (champion)", "name_en": "Master of Horse (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "necroserpents": {id:"necroserpents", army:"tomb-kings-of-khemri", category:"core", name_fr:"Nécroserpents", name_en:"Necroserpents", points:38, unitSize:"2+", specialRules:"Ambushers, Armoured Hide (1), Impact Hits (1), Indomitable (1), Move Through Cover, Nehekharan Undead, Open Order, Poisoned Attacks, Regeneration (6+), Swiftstride", opts:[{"name_fr": "Les Horreurs d’En dessous", "name_en": "The Terrors Below", "points": 2, "perModel": true}], equip:[{"name_fr": "Queues fouettardes et crocs venimeux (Armes de base)", "name_en": "Lashing tails and venomous fangs (Hand weapons)", "points": 0, "active": true}]},
  "tomb-guard-chariots-core": {id:"tomb-guard-chariots-core", army:"tomb-kings-of-khemri", category:"core", name_fr:"Chars Gardien des Tombes", name_en:"Tomb Guard Chariots", points:49, unitSize:"3+", specialRules:"Cleaving Blow (Tomb Guard Crew only), Dry as Dust, Impact Hits (D3+1), Indomitable (2), Khopesh, Nehekharan Undead, Open Order, Regeneration (6+), Reserve Move, Swiftstride", equip:[{"name_fr": "Armes de base, Hallebardes, Boucliers", "name_en": "Hand weapons, Halberds, Shields", "points": 0, "active": true}], command:[{"name_fr": "Capitaine des Tombes (champion)", "name_en": "Tomb Captain (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "ushabti": {id:"ushabti", army:"tomb-kings-of-khemri", category:"core", name_fr:"Ushabti", name_en:"Ushabti", points:49, unitSize:"3+", specialRules:"Arrows of Asaph, Close Order, Indomitable (1), Khopesh, Nehekharan Undead, Regeneration (6+)", equip:[{"name_fr": "Armes de base, Lames rituelles", "name_en": "Hand weapons, Ritual blades", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base, Grands arcs", "name_en": "Hand weapons, Greatbows", "points": 0, "perModel": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Ancien (champion)", "name_en": "Ancient (champion)", "points": 7}]},
  "venerable-ushabti": {id:"venerable-ushabti", army:"tomb-kings-of-khemri", category:"special", name_fr:"Ushabti Vénérables", name_en:"Venerable Ushabti", points:56, unitSize:"3+", specialRules:"Close Order, Indomitable (1), Khopesh, Magic Resistance (-2), Nehekharan Undead, Regeneration (6+)", equip:[{"name_fr": "Armes de base, Lames rituelles", "name_en": "Hand weapons, Ritual blades", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Ancien Vénérable", "name_en": "Venerable Ancient", "points": 7}]},
  "carrion": {id:"carrion", army:"tomb-kings-of-khemri", category:"special", name_fr:"Charognards", name_en:"Carrion", points:27, unitSize:"2+", specialRules:"Fly (10), Nehekharan Undead, Regeneration (6+), Skirmishers, Swiftstride", equip:[{"name_fr": "Armes de base (Becs et serres)", "name_en": "Hand weapons (Beaks and talons)", "points": 0, "perModel": true, "active": true}]},
  "necropolis-knights": {id:"necropolis-knights", army:"tomb-kings-of-khemri", category:"special", name_fr:"Chevaliers de la Nécropole", name_en:"Necropolis Knights", points:54, unitSize:"2+", specialRules:"Armoured Hide (1), Cleaving Blow, Close Order, Impact Hits (1), Indomitable (1), Khopesh, Nehekharan Undead, Poisoned Attacks, Regeneration (6+), Swiftstride", opts:[{"name_fr": "Boucliers", "name_en": "Shields", "points": 0, "perModel": true, "active": true}, {"name_fr": "Arme lourde pour le Capitaine uniquement", "name_en": "Great weapon for Captain only", "points": 3}], equip:[{"name_fr": "Armes de base, Lances de cavalerie, Armes de base (Queues fouettardes)", "name_en": "Hand weapons, Cavalry spears, Hand weapons (Lashing tails)", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true}], command:[{"name_fr": "Capitaine de la Nécropole (champion)", "name_en": "Necropolis Captain (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "tomb-guard": {id:"tomb-guard", army:"tomb-kings-of-khemri", category:"special", name_fr:"Gardien des Tombes", name_en:"Tomb Guard", points:10, unitSize:"5+", specialRules:"Cleaving Blow, Close Order, Indomitable (1), Khopesh, Nehekharan Undead, Regeneration (6+), Regimental Unit", opts:[{"name_fr": "Bien Entraînés (0-1 par tranche de 1000 points)", "name_en": "Drilled (0-1 per 1000 points)", "points": 1, "perModel": true}, {"name_fr": "Phalange de Nehekhara (0-1 par tranche de 1000 points)", "name_en": "Nehekharan Phalanx (0-1 per 1000 points)", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true}, {"name_fr": "Hallebardes", "name_en": "Halberds", "points": 1, "perModel": true}], armor:[{"name_fr": "Armure légère, Boucliers", "name_en": "Light armour, Shields", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Capitaine des Tombes (champion)", "name_en": "Tomb Captain (champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "sepulchral-stalkers": {id:"sepulchral-stalkers", army:"tomb-kings-of-khemri", category:"special", name_fr:"Rôdeurs Sépulcraux", name_en:"Sepulchral Stalkers", points:52, unitSize:"2+", specialRules:"Close Order, Indomitable (1), Nehekharan Undead, Regeneration (6+), Swiftstride", opts:[{"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Hallebardes, Queues sinueuses, Regard pétrificateur", "name_en": "Hand weapons, Halberds, Writhing tails, Petrifying gaze", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}]},
  "tomb-scorpion": {id:"tomb-scorpion", army:"tomb-kings-of-khemri", category:"special", name_fr:"Scorpion des Tombes", name_en:"Tomb Scorpion", points:70, specialRules:"Close Order, Indomitable (1), Magic Resistance (-1), Nehekharan Undead, Regeneration (6+), Stomp Attacks (D3), Swiftstride, Vanguard", opts:[{"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 5, "perModel": true}, {"name_fr": "Les Horreurs d’En dessous", "name_en": "The Terrors Below", "points": 2, "perModel": true}], equip:[{"name_fr": "Pinces décapitantes, Dard venimeux", "name_en": "Decapitating claws, Envenomed sting", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde (Carapace osseuse)", "name_en": "Heavy armour (Bone carapace)", "points": 0, "perModel": true, "active": true}]},
  "khemrian-warsphinx": {id:"khemrian-warsphinx", army:"tomb-kings-of-khemri", category:"special", name_fr:"Sphinx de Guerre de Khemri", name_en:"Khemrian Warsphinx", points:175, specialRules:"Arrows of Asaph, Cleaving Blow (Tomb Guard Crew only), Close Order, Howdah, Indomitable (2), Khopesh (Tomb Guard Crew only), Large Target, Nehekharan Undead, Regeneration (6+), Stomp Attacks (D3), Terror", opts:[{"name_fr": "Peut ajouter jusqu’à deux Gardiens des Tombes supplémentaires", "name_en": "May add up to two additional Tomb Guard Crew", "points": 10, "perModel": true}, {"name_fr": "Dard venimeux", "name_en": "Envenomed sting", "points": 5, "perModel": true}, {"name_fr": "Rugissement ardent", "name_en": "Fiery roar", "points": 20, "perModel": true}], equip:[{"name_fr": "Griffes mortelles (Sphinx de Guerre), Armes de base (Aurige Gardien des Tombes uniquement), Lances de cavalerie (Aurige Gardien des Tombes uniquement), Arcs courts (Aurige Gardien des Tombes uniquement)", "name_en": "Wicked claws (Warsphinx), Hand weapons (Tomb Guard Crew only), Cavalry spears (Tomb Guard Crew only), Shortbows (Tomb Guard Crew only)", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "5+", "name_en": "5+", "points": 0, "active": true}]},
  "winged-warsphinx": {id:"winged-warsphinx", army:"tomb-kings-of-khemri", category:"special", name_fr:"Sphinx de Guerre Ailé", name_en:"Winged Warsphinx", points:180, specialRules:"Close Order, Counter Charge, Fly (9), Indomitable (2), Large Target, Nehekharan Undead, Regeneration (6+), Stomp Attacks (D3), Swiftstride, Terror", opts:[{"name_fr": "Dard venimeux", "name_en": "Envenomed sting", "points": 5, "perModel": true}, {"name_fr": "Rugissement ardent", "name_en": "Fiery roar", "points": 20, "perModel": true}], equip:[{"name_fr": "Griffes mortelles", "name_en": "Wicked claws", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "active": true}]},
  "tomb-guard-chariots": {id:"tomb-guard-chariots", army:"tomb-kings-of-khemri", category:"special", name_fr:"Chars Gardien des Tombes", name_en:"Tomb Guard Chariots", points:49, unitSize:"3+", specialRules:"Cleaving Blow (Tomb Guard Crew only), Dry as Dust, Impact Hits (D3+1), Indomitable (2), Khopesh, Nehekharan Undead, Open Order, Regeneration (6+), Reserve Move, Swiftstride", equip:[{"name_fr": "Armes de base, Hallebardes, Boucliers", "name_en": "Hand weapons, Halberds, Shields", "points": 0, "active": true}], command:[{"name_fr": "Capitaine des Tombes (champion)", "name_en": "Tomb Captain (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "necrolith-colossus": {id:"necrolith-colossus", army:"tomb-kings-of-khemri", category:"special", name_fr:"Colosse Nécrolithe", name_en:"Necrolith Colossus", points:160, specialRules:"Close Order, Indomitable (2), Large Target, Nehekharan Undead, Regeneration (6+), Stomp Attacks (D3), Terror, Timmm-berrr!, Unstoppable Assault", equip:[{"name_fr": "Paire de grands khopeshs", "name_en": "Paired great khopeshes", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}]},
  "necrosphinx": {id:"necrosphinx", army:"tomb-kings-of-khemri", category:"special", name_fr:"Nécrosphinx", name_en:"Necrosphinx", points:195, specialRules:"Close Order, Fly (9), Indomitable (2), Large Target, Nehekharan Undead, Regeneration (5+), Stomp Attacks (D3+2), Swiftstride, Terror", opts:[{"name_fr": "Dard venimeux", "name_en": "Envenomed sting", "points": 5, "perModel": true}], equip:[{"name_fr": "Lames fendoirs, Frappe de décapitation", "name_en": "Cleaving blades, Decapitating strike", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}]},
  "screaming-skull-catapult": {id:"screaming-skull-catapult", army:"tomb-kings-of-khemri", category:"rare", name_fr:"Catapulte à Crânes Hurlants", name_en:"Screaming Skull Catapult", points:105, specialRules:"Dry as Dust, Indomitable (1), Nehekharan Undead, Regeneration (6+), Skirmishers", opts:[{"name_fr": "Crânes de l’Ennemi", "name_en": "Skulls of the Foe", "points": 20, "perModel": true}], equip:[{"name_fr": "Catapulte à crânes hurlants, Armes de base", "name_en": "Screaming skull catapult {weapon}, Hand weapons", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}]},
  "casket-of-souls": {id:"casket-of-souls", army:"tomb-kings-of-khemri", category:"rare", name_fr:"Arche des Âmes Damnées", name_en:"Casket of Souls", points:135, specialRules:"Cleaving Blow, Covenant of Power, Dry as Dust, Immovable Object, Indomitable (2), Nehekharan Undead, Regeneration (5+), Skirmishers, Unbound Spirits, Vortex of Souls", equip:[{"name_fr": "Armes de base, Armes lourdes", "name_en": "Hand weapons, Great weapons", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}]},
  "black-coach": {id:"black-coach", army:"vampire-counts", category:"rare", name_fr:"Carrosse Noir", name_en:"Black Coach", points:205, specialRules:"Close Order, First Charge, Impact Hits (D6+2), Indomitable (1), Magical Attacks, Necromantic Undead, Regeneration (6+), Spectral Coach, Terror", equip:[{"name_fr": "Faux spectrale, Sabots ferrés (Armes de base)", "name_en": "Spectral scythe {black coach}, Iron-shod hooves (Hand weapons)", "points": 0, "perModel": true, "active": true}]},
  "varghulf": {id:"varghulf", army:"vampire-counts", category:"rare", name_fr:"Varghulf", name_en:"Varghulf", points:140, specialRules:"Bestial Fury, Close Order, Counter Charge, Dark Vitality {renegade}, Flammable, Frenzy, Indomitable (1), Necromantic Undead, Regeneration (5+), Swiftstride, Terror", equip:[{"name_fr": "Griffes mortelles", "name_en": "Wicked claws", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Peau calleuse (Armure légère)", "name_en": "Calloused hide (light armour)", "points": 0, "perModel": true, "active": true}]},
  "blood-knights": {id:"blood-knights", army:"vampire-counts", category:"rare", name_fr:"Chevaliers de Sang", name_en:"Blood Knights", points:39, unitSize:"5+", specialRules:"Accursed Weapons, Close Order, Counter Charge, Dark Vitality {renegade}, First Charge, Flammable, Indomitable (1), Martial Pride, Necromantic Undead, Regeneration (6+), Swiftstride", opts:[{"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 3, "perModel": true}], equip:[{"name_fr": "Armes de base, Lances de joute, Sabots ferrés", "name_en": "Hand weapons, Lances, Iron-shod hooves", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde, Boucliers, Caparaçon", "name_en": "Heavy armour, Shields, Barding", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armure de plate complète, Boucliers, Caparaçon", "name_en": "Full plate armour, Shields, Barding", "points": 5, "perModel": true}], command:[{"name_fr": "Kasztellan", "name_en": "Kastellan (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "hexwraiths": {id:"hexwraiths", army:"vampire-counts", category:"rare", name_fr:"Émissaires d’Outre-tombe", name_en:"Hexwraiths", points:31, unitSize:"5-10", specialRules:"Ethereal, Flaming Attacks, Fly (8), Magical Attacks, Necromantic Undead, Open Order, Regeneration (6+), Spectral Reapers, Swiftstride, Terror", equip:[{"name_fr": "Armes de base, Armes lourdes, Sabots squelettiques (Armes de base)", "name_en": "Hand weapons, Great weapons, Skeletal hooves (Hand weapons)", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Émissaire Infernal", "name_en": "Hellwraith", "points": 6}]},
  "frydaal-the-chainmaker": {id:"frydaal-the-chainmaker", army:"warriors-of-chaos", category:"characters", name_fr:"Frydaal la Forgechaîne", name_en:"Frydaal the Chainmaker", points:235, specialRules:"Ambushers, Chainmaker, Chaos Armour {warriors of chaos} (5+), Commander & Captain, Ensorcelled Weapons, Gaze of the Gods, Impact Hits (1), Mark of Chaos Undivided, Peerless Raider, Rallying Cry", equip:[{"name_fr": "Arme de base, Courroux de la Tempête", "name_en": "Hand weapon, Storm's Wrath", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure de plate complète, Bouclier", "name_en": "Full plate armour, Shield", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Général", "name_en": "General", "points": 0}]},
  "galrauch": {id:"galrauch", army:"warriors-of-chaos", category:"characters", name_fr:"Galrauch, Le Grand Dragon", name_en:"Galrauch", points:465, specialRules:"Armoured Hide (1), Breath of Change, Close Order, Fly (10), Large Target, Mark of Tzeentch, Regeneration (5+), Spirit of Galrauch, Stomp Attacks (D6), Swiftstride, Terror, Two-headed Dragon", opts:[{"name_fr": "Sorcier de Niveau 4", "name_en": "Level 4 Wizard", "points": 0, "active": true}], equip:[{"name_fr": "Griffes cruelles, Feu Sombre du Chaos, Vapeurs de Contagion", "name_en": "Wicked Claws, Dark Fire of Chaos, Fumes of Contagion", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure de plate complète (Écailles de Dragon)", "name_en": "Full plate armour (Draconic scales)", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Général", "name_en": "General", "points": 0}]},
  "chaos-warriors": {id:"chaos-warriors", army:"warriors-of-chaos", category:"core", name_fr:"Guerriers du Chaos", name_en:"Chaos Warriors", points:13, unitSize:"5+", specialRules:"Close Order, Ensorcelled Weapons", opts:[{"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}, {"name_fr": "Marque du Chaos", "name_en": "Mark of Chaos", "points": 0, "active": true}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base additionnelles", "name_en": "Additional hand weapons", "points": 1, "perModel": true}, {"name_fr": "Armes lourdes", "name_en": "Great weapons", "points": 2, "perModel": true}, {"name_fr": "Hallebardes", "name_en": "Halberds", "points": 1, "perModel": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Champion", "name_en": "Champion", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "chaos-knights": {id:"chaos-knights", army:"warriors-of-chaos", category:"core", name_fr:"Chevaliers du Chaos", name_en:"Chaos Knights", points:27, unitSize:"4+", specialRules:"Close Order, Ensorcelled Weapons, First Charge, Swiftstride, Counter Charge", opts:[{"name_fr": "Marque du Chaos", "name_en": "Mark of Chaos", "points": 0, "active": true}], equip:[{"name_fr": "Armes de base, Boucliers", "name_en": "Hand weapons, Shields", "points": 0, "perModel": true, "active": true}, {"name_fr": "Lances de joute, Boucliers", "name_en": "Lances, Shields", "points": 2, "perModel": true}], armor:[{"name_fr": "Armure lourde, Caparaçon", "name_en": "Heavy armour, Barding", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Champion", "name_en": "Champion", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "chaos-marauders": {id:"chaos-marauders", army:"warriors-of-chaos", category:"core", name_fr:"Maraudeurs du Chaos", name_en:"Chaos Marauders", points:6, unitSize:"5+", specialRules:"Horde, Mark of Chaos Undivided, Shieldwall, Warband", opts:[{"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}, {"name_fr": "Culte Chaotique", "name_en": "Chaotic Cult", "points": 0, "active": true}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 1, "perModel": true}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 1, "perModel": true}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 0, "perModel": true}, {"name_fr": "Formation", "name_en": "Formation", "points": 0, "active": true}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true, "equippedDefault": true}, {"name_fr": "Armes lourdes", "name_en": "Great weapons", "points": 2, "perModel": true}, {"name_fr": "Fléaux", "name_en": "Flails", "points": 1, "perModel": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Chef Maraudeur (champion)", "name_en": "Marauder Headman (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 5}, {"name_fr": "Musicien", "name_en": "Musician", "points": 5}]},
  "marauder-horsemen": {id:"marauder-horsemen", army:"warriors-of-chaos", category:"core", name_fr:"Cavaliers Maraudeurs", name_en:"Marauder Horsemen", points:12, unitSize:"5+", specialRules:"Fast Cavalry, Fire & Flee, Mark of Chaos Undivided, Swiftstride, Warband", opts:[{"name_fr": "Haches de lancer", "name_en": "Throwing axes", "points": 1, "perModel": true}, {"name_fr": "Culte Chaotique", "name_en": "Chaotic Cult", "points": 0, "active": true}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 1, "perModel": true}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 1, "perModel": true}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 0, "perModel": true}, {"name_fr": "Formation", "name_en": "Formation", "points": 0, "active": true}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true, "equippedDefault": true}, {"name_fr": "Lances de cavalerie", "name_en": "Cavalry spears", "points": 0, "perModel": true}, {"name_fr": "Javelots", "name_en": "Throwing spears", "points": 0, "perModel": true}, {"name_fr": "Fléaux", "name_en": "Flails", "points": 1, "perModel": true}], armor:[{"name_fr": "Armure légère, Boucliers", "name_en": "Light armour, Shields", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Chef Cavalier Maraudeur (champion)", "name_en": "Marauder Horsemaster (champion)", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 5}, {"name_fr": "Musicien", "name_en": "Musician", "points": 5}]},
  "chaos-warhounds": {id:"chaos-warhounds", army:"warriors-of-chaos", category:"core", name_fr:"Chiens du Chaos", name_en:"Chaos Warhounds {warriors of chaos}", points:6, unitSize:"5+", specialRules:"Loner, Move Through Cover, Open Order, Swiftstride", opts:[{"name_fr": "Peau Blindée (1)", "name_en": "Armoured Hide (1)", "points": 1, "perModel": true}, {"name_fr": "Attaques Empoisonnées", "name_en": "Poisoned Attacks", "points": 1, "perModel": true}, {"name_fr": "Avant-garde", "name_en": "Vanguard", "points": 5}], equip:[{"name_fr": "Griffes et crocs (Armes de base)", "name_en": "Claws and fangs (Hand weapons)", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Dresseur", "name_en": "Handler", "points": 15}]},
  "forsaken": {id:"forsaken", army:"warriors-of-chaos", category:"core", name_fr:"Déchus", name_en:"Forsaken", points:19, unitSize:"5+", specialRules:"Chaos Armour {warriors of chaos} (5+), Ensorcelled Weapons, Furious Charge, Immune to Psychology, Impetuous, Loner, Open Order, Rampant Mutation, Random Attacks, Stubborn", opts:[{"name_fr": "Déchus de Khorne", "name_en": "Forsaken by Khorne", "points": 0, "active": true}, {"name_fr": "Déchus de Nurgle", "name_en": "Forsaken by Nurgle", "points": 0}, {"name_fr": "Déchus de Slaanesh", "name_en": "Forsaken by Slaanesh", "points": 0}, {"name_fr": "Déchus de Tzeentch", "name_en": "Forsaken by Tzeentch", "points": 0}], equip:[{"name_fr": "Armes mutantes (Armes de base)", "name_en": "Mutated weapons (Hand weapons)", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}]},
  "marauder-tribe-berserkers": {id:"marauder-tribe-berserkers", army:"warriors-of-chaos", category:"core", name_fr:"Berserkers Maraudeurs", name_en:"Marauder Tribe Berserkers", points:8, unitSize:"5+", specialRules:"Frenzy, Mark of Chaos Undivided, Move Through Cover, Open Order, Relentless Warriors, Skirmishers, Warband", opts:[{"name_fr": "Haches de lancer", "name_en": "Throwing axes", "points": 1, "perModel": true}, {"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true, "equippedDefault": true}, {"name_fr": "Armes de base additionnelles", "name_en": "Additional hand weapons", "points": 1, "perModel": true}, {"name_fr": "Fléaux", "name_en": "Flails", "points": 1, "perModel": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "active": true}], command:[{"name_fr": "Décapiteur (Champion)", "name_en": "Headtaker (Champion)", "points": 8}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "chaos-chariot": {id:"chaos-chariot", army:"warriors-of-chaos", category:"core", name_fr:"Char du Chaos", name_en:"Chaos Chariot", points:110, specialRules:"Close Order, Ensorcelled Weapons, First Charge, Impact Hits (D6+1)", opts:[{"name_fr": "Marque du Chaos Universel", "name_en": "Mark of Chaos Undivided", "points": 0, "active": true}, {"name_fr": "Marque de Khorne", "name_en": "Mark of Khorne", "points": 10}, {"name_fr": "Marque de Nurgle", "name_en": "Mark of Nurgle", "points": 10}, {"name_fr": "Marque de Slaanesh", "name_en": "Mark of Slaanesh", "points": 10}, {"name_fr": "Marque de Tzeentch", "name_en": "Mark of Tzeentch", "points": 10}], equip:[{"name_fr": "Armes de base, Hallebardes", "name_en": "Hand weapons, Halberds", "points": 0, "active": true}]},
  "chosen-chaos-warriors": {id:"chosen-chaos-warriors", army:"warriors-of-chaos", category:"special", name_fr:"Guerriers du Chaos Élus", name_en:"Chosen Chaos Warriors", points:17, unitSize:"5+", specialRules:"Chaos Armour {warriors of chaos} (6+), Close Order, Ensorcelled Weapons, Stubborn", opts:[{"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}, {"name_fr": "Marque du Chaos", "name_en": "Mark of Chaos", "points": 0, "active": true}, {"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 1, "perModel": true}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armes de base additionnelles", "name_en": "Additional hand weapons", "points": 1, "perModel": true}, {"name_fr": "Armes lourdes", "name_en": "Great weapons", "points": 2, "perModel": true}, {"name_fr": "Hallebardes", "name_en": "Halberds", "points": 1, "perModel": true}], armor:[{"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armure de plate complète", "name_en": "Full plate armour", "points": 2, "perModel": true}], command:[{"name_fr": "Champion", "name_en": "Champion", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "chosen-chaos-knights": {id:"chosen-chaos-knights", army:"warriors-of-chaos", category:"special", name_fr:"Chevaliers du Chaos Élus", name_en:"Chosen Chaos Knights", points:36, unitSize:"4+", specialRules:"Chaos Armour {warriors of chaos} (6+), Close Order, Counter Charge, Ensorcelled Weapons, First Charge, Stubborn, Swiftstride", opts:[{"name_fr": "Marque du Chaos", "name_en": "Mark of Chaos", "points": 0, "active": true}, {"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 2, "perModel": true}], equip:[{"name_fr": "Armes de base, Boucliers", "name_en": "Hand weapons, Shields", "points": 0, "perModel": true, "active": true}, {"name_fr": "Lances de joute, Boucliers", "name_en": "Lances, Shields", "points": 2, "perModel": true}], armor:[{"name_fr": "Armure lourde, Caparaçon", "name_en": "Heavy armour, Barding", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armure de plate complète, Caparaçon", "name_en": "Full plate armour, Barding", "points": 3, "perModel": true}], command:[{"name_fr": "Champion", "name_en": "Champion", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "chosen-chaos-chariot": {id:"chosen-chaos-chariot", army:"warriors-of-chaos", category:"special", name_fr:"Char du Chaos Élu", name_en:"Chosen Chaos Chariot", points:140, specialRules:"Close Order, Counter Charge, Ensorcelled Weapons, First Charge, Impact Hits (D6+1 - Chariot only), Mark of Chaos Undivided", opts:[{"name_fr": "Marque du Chaos", "name_en": "Mark of Chaos", "points": 0, "active": true}], equip:[{"name_fr": "Armes de base, Hallebardes", "name_en": "Hand weapons, Halberds", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "3+", "name_en": "3+", "points": 0, "active": true}]},
  "chimera": {id:"chimera", army:"warriors-of-chaos", category:"special", name_fr:"Chimère", name_en:"Chimera", points:180, specialRules:"Armour Bane (2 - Claws and fangs only), Close Order, Fly (10), Large Target, Stomp Attacks (1), Swiftstride, Terror", opts:[{"name_fr": "Souffle Enflammé", "name_en": "Flaming Breath {warriors of chaos}", "points": 20}, {"name_fr": "Queue de démon", "name_en": "Fiend tail", "points": 10}, {"name_fr": "Régénération (5+)", "name_en": "Regeneration (5+)", "points": 15}, {"name_fr": "Attaques Empoisonnées", "name_en": "Poisoned Attacks", "points": 10}], equip:[{"name_fr": "Griffes et crocs (Arme de base)", "name_en": "Claws and fangs (Hand weapon)", "points": 0, "active": true}], armor:[{"name_fr": "Peau écailleuse (Armure lourde)", "name_en": "Scaly skin (Heavy armour)", "points": 0, "active": true}]},
  "skin-wolves": {id:"skin-wolves", army:"warriors-of-chaos", category:"special", name_fr:"Loups Écorcheurs", name_en:"Skin Wolves", points:45, unitSize:"2+", specialRules:"Blood Rage, Mark of Chaos Undivided, Open Order, Primal Fury, Regeneration (5+), Skirmishers, Swiftstride, Warped Form, Fear", equip:[{"name_fr": "Armes de base (Griffes et crocs)", "name_en": "Hand weapons (Claws and fangs)", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Jarl Loup Écorcheur (champion)", "name_en": "Skin Wolf Jarl (champion)", "points": 7}]},
  "marauder-tribe-huscarls": {id:"marauder-tribe-huscarls", army:"warriors-of-chaos", category:"special", name_fr:"Housecarls de Tribu Maraudeurs", name_en:"Marauder Tribe Huscarls", points:18, unitSize:"5+", specialRules:"Close Order, Counter Charge, Furious Charge, Mark of Chaos Undivided, Swiftstride, Warband", opts:[{"name_fr": "Haches de lancer", "name_en": "Throwing axes", "points": 1, "perModel": true}, {"name_fr": "Javelines", "name_en": "Javelins", "points": 1, "perModel": true}, {"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}, {"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 2, "perModel": true}, {"name_fr": "Marque du Chaos", "name_en": "Mark of Chaos", "points": 0, "active": true}], equip:[{"name_fr": "Armes de base", "name_en": "Hand weapons", "points": 0, "perModel": true, "active": true, "equippedDefault": true}, {"name_fr": "Lances de cavalerie", "name_en": "Cavalry spears", "points": 0, "perModel": true}, {"name_fr": "Fléaux", "name_en": "Flails", "points": 1, "perModel": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}, {"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 1, "perModel": true}], command:[{"name_fr": "Première Lame (champion)", "name_en": "First Sword (champion)", "points": 8}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "gorebeast-chariot": {id:"gorebeast-chariot", army:"warriors-of-chaos", category:"rare", name_fr:"Char Éventreur", name_en:"Gorebeast Chariot", points:135, specialRules:"Armour Bane (1 - Gorebeast only), Close Order, Ensorcelled Weapons, First Charge, Impact Hits (D6+2), Killing Blow (Gorebeast only)", opts:[{"name_fr": "Marque du Chaos Universel", "name_en": "Mark of Chaos Undivided", "points": 0, "active": true}, {"name_fr": "Marque de Khorne", "name_en": "Mark of Khorne", "points": 10}, {"name_fr": "Marque de Nurgle", "name_en": "Mark of Nurgle", "points": 10}, {"name_fr": "Marque de Slaanesh", "name_en": "Mark of Slaanesh", "points": 10}, {"name_fr": "Marque de Tzeentch", "name_en": "Mark of Tzeentch", "points": 10}], equip:[{"name_fr": "Armes de base, Hallebardes", "name_en": "Hand weapons, Halberds", "points": 0, "active": true}]},
  "dragon-ogre-shaggoth": {id:"dragon-ogre-shaggoth", army:"warriors-of-chaos", category:"rare", name_fr:"Shaggoth Dragon Ogre", name_en:"Dragon Ogre Shaggoth", points:225, specialRules:"Armour Bane (2), Armoured Hide (2), Close Order, Ensorcelled Weapons, Immune to Psychology, Large Target, Stomp Attacks (D3+1), Storm Call {warriors}, Terror, The Quickening Storm", equip:[{"name_fr": "Arme de base", "name_en": "Hand weapon", "points": 0, "active": true}, {"name_fr": "Arme de base additionnelle", "name_en": "Additional hand weapon", "points": 3}, {"name_fr": "Arme lourde", "name_en": "Great weapon", "points": 4}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "active": true}, {"name_fr": "Armure lourde", "name_en": "Heavy armour", "points": 6}]},
  "warpfire-dragon": {id:"warpfire-dragon", army:"warriors-of-chaos", category:"rare", name_fr:"Dragon de Maleflamme", name_en:"Warpfire Dragon", points:375, specialRules:"Explosive Demise, Fire & Chaos, Fly (10), Large Target, Lore of Chaos, Magical Attacks, Magic Resistance (-2), Mark of Chaos Undivided, Regeneration (5+), Stomp Attacks (D6), Swiftstride, Terror, Warpfire Aura, Close Order", opts:[{"name_fr": "Sorcier de Niveau 1", "name_en": "Level 1 Wizard", "points": 30}, {"name_fr": "Sorcier de Niveau 2", "name_en": "Level 2 Wizard", "points": 60}], equip:[{"name_fr": "Griffes cruelles, Explosion de Maleflamme", "name_en": "Wicked Claws, Warpfire Blast", "points": 0, "active": true}], armor:[{"name_fr": "Armure de plate complète (Écailles de Dragon)", "name_en": "Full plate armour (Draconic scales)", "points": 0, "active": true}]},
  "glade-riders": {id:"glade-riders", army:"wood-elf-realms", category:"core", name_fr:"Cavaliers Sylvains", name_en:"Glade Riders", points:17, unitSize:"4+", specialRules:"Elven Reflexes, Fast Cavalry, Fire & Flee, Open Order, Skirmishers, Swiftstride", opts:[{"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 2, "perModel": true}, {"name_fr": "Bien Entraînés", "name_en": "Drilled", "points": 2, "perModel": true}, {"name_fr": "Mouvement de Réserve", "name_en": "Reserve Move", "points": 1, "perModel": true}, {"name_fr": "Charge Dévastatrice, Impétueux", "name_en": "Furious Charge, Impetuous", "points": 10}, {"name_fr": "Bodkins Cabalistiques", "name_en": "Arcane Bodkins", "points": 2, "perModel": true}, {"name_fr": "Flèches de Fléau des Furies", "name_en": "Hagbane Tips", "points": 2, "perModel": true}, {"name_fr": "Traits de Feu Lunaire", "name_en": "Moonfire Shot", "points": 1, "perModel": true}, {"name_fr": "Échardes d’Archère Hâtive", "name_en": "Swiftshiver Shards", "points": 2, "perModel": true}, {"name_fr": "Pointes de Parabole Pure", "name_en": "Trueflight Arrows", "points": 1, "perModel": true}], equip:[{"name_fr": "Arme de base, Lances de cavalerie, Arcs longs Asrai", "name_en": "Hand weapon, Cavalry spears, Asrai longbows", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Chevalier Sylvain", "name_en": "Glade Knight", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "wild-riders-core": {id:"wild-riders-core", army:"wood-elf-realms", category:"core", name_fr:"Cavaliers Sauvages", name_en:"Wild Riders", points:26, unitSize:"5+", specialRules:"Counter Charge, Elven Reflexes, Fast Cavalry, Fear, Frenzy, Furious Charge (Wild Riders & Wild Hunter only), Move Through Cover, Open Order, Swiftstride, Talismanic Tattoos", opts:[{"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}], equip:[{"name_fr": "Arme de base, Lance de chasse", "name_en": "Hand weapon, Hunting spear", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Chasseur Sauvage", "name_en": "Wild Hunter", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "deepwood-scouts": {id:"deepwood-scouts", army:"wood-elf-realms", category:"special", name_fr:"Éclaireurs du Grand-bois", name_en:"Deepwood Scouts", points:13, unitSize:"5+", specialRules:"Elven Reflexes, Evasive, Fire & Flee, Move Through Cover, Scouts, Skirmishers", opts:[{"name_fr": "Bodkins Cabalistiques", "name_en": "Arcane Bodkins", "points": 2, "perModel": true}, {"name_fr": "Flèches de Fléau des Furies", "name_en": "Hagbane Tips", "points": 2, "perModel": true}, {"name_fr": "Traits de Feu Lunaire", "name_en": "Moonfire Shot", "points": 1, "perModel": true}, {"name_fr": "Échardes d’Archère Hâtive", "name_en": "Swiftshiver Shards", "points": 2, "perModel": true}, {"name_fr": "Pointes de Parabole Pure", "name_en": "Trueflight Arrows", "points": 1, "perModel": true}], equip:[{"name_fr": "Arme de base, Arcs longs Asrai", "name_en": "Hand weapon, Asrai longbows", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Féal", "name_en": "Lord's Bowmen", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "wildwood-rangers": {id:"wildwood-rangers", army:"wood-elf-realms", category:"special", name_fr:"Patrouilleurs du Bois Sauvage", name_en:"Wildwood Rangers", points:14, unitSize:"5+", specialRules:"Close Order, Elven Reflexes, Guardians of the Wildwood, Immune to Psychology, Move Through Cover", opts:[{"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}], equip:[{"name_fr": "Arme de base, Vouge de patrouilleurs", "name_en": "Hand weapon, Ranger's glaive", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Garde du Bois Sauvage", "name_en": "Wildwood Warden", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "wardancers": {id:"wardancers", army:"wood-elf-realms", category:"special", name_fr:"Danseurs de Guerre", name_en:"Wardancers", points:16, unitSize:"5+", specialRules:"Dances of Loec, Evasive, Furious Charge, Immune to Psychology, Loner, Motley Crew, Move Through Cover, Open Order, Skirmishers, Strike First, Talismanic Tattoos", opts:[{"name_fr": "Arme de base additionnelle", "name_en": "Additional hand weapon", "points": 1}, {"name_fr": "Javelot", "name_en": "Throwing spear", "points": 0}], equip:[{"name_fr": "Arme de base", "name_en": "Hand weapon", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Chantelame", "name_en": "Bladesinger", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "sisters-of-the-thorn": {id:"sisters-of-the-thorn", army:"wood-elf-realms", category:"special", name_fr:"Sœurs de l’Épine", name_en:"Sisters of the Thorn", points:22, unitSize:"5+", specialRules:"Daughters of Eternity, Deepwood Coven, Elven Reflexes, Fast Cavalry, Fire & Flee, Move Through Cover, Open Order, Poisoned Attacks, Swiftstride", equip:[{"name_fr": "Armes de base, Javelines de bruyère noire", "name_en": "Hand weapons, Blackbriar javelins", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Suivante de l’Épine", "name_en": "Handmaiden of the Thorn", "points": 8}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 6}, {"name_fr": "Musicien", "name_en": "Musician", "points": 6}]},
  "wild-riders": {id:"wild-riders", army:"wood-elf-realms", category:"special", name_fr:"Cavaliers Sauvages", name_en:"Wild Riders", points:26, unitSize:"5+", specialRules:"Counter Charge, Elven Reflexes, Fast Cavalry, Fear, Frenzy, Furious Charge (Wild Riders & Wild Hunter only), Move Through Cover, Open Order, Swiftstride, Talismanic Tattoos", opts:[{"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}], equip:[{"name_fr": "Arme de base, Lance de chasse", "name_en": "Hand weapon, Hunting spear", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Chasseur Sauvage", "name_en": "Wild Hunter", "points": 7}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 7}, {"name_fr": "Musicien", "name_en": "Musician", "points": 7}]},
  "warhawk-riders": {id:"warhawk-riders", army:"wood-elf-realms", category:"special", name_fr:"Guerriers Faucons", name_en:"Warhawk Riders", points:44, unitSize:"3+", specialRules:"Elven Reflexes, Evasive, Fear, Feigned Flight, Fire & Flee, Fly (10), Skirmishers, Swiftstride", opts:[{"name_fr": "Charge Dévastatrice, Impétueux", "name_en": "Furious Charge, Impetuous", "points": 10}, {"name_fr": "Bodkins Cabalistiques", "name_en": "Arcane Bodkins", "points": 2, "perModel": true}, {"name_fr": "Flèches de Fléau des Furies", "name_en": "Hagbane Tips", "points": 2, "perModel": true}, {"name_fr": "Traits de Feu Lunaire", "name_en": "Moonfire Shot", "points": 1, "perModel": true}, {"name_fr": "Échardes d’Archère Hâtive", "name_en": "Swiftshiver Shards", "points": 2, "perModel": true}, {"name_fr": "Pointes de Parabole Pure", "name_en": "Trueflight Arrows", "points": 1, "perModel": true}], equip:[{"name_fr": "Arme de base, Lance de cavalerie, Arc long Asrai, Griffes mortelles (Faucon de Guerre)", "name_en": "Hand weapon, Cavalry spear, Asrai longbow, Wicked claws (Warhawk)", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Cavalier du Vent", "name_en": "Wind Rider", "points": 8}]},
  "tree-kin": {id:"tree-kin", army:"wood-elf-realms", category:"special", name_fr:"Lémures", name_en:"Tree Kin", points:51, unitSize:"2+", specialRules:"Armour Bane (2), Close Order, Fear, Flammable, Immune to Psychology, Magical Attacks, Move Through Cover, Regeneration (5+), Stomp Attacks (1), Stubborn, Tree Spirit, Tree Whack", opts:[{"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 1, "perModel": true}], equip:[{"name_fr": "Arme de base", "name_en": "Hand weapon", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure lourde (Peau de chêne)", "name_en": "Heavy armour (Hardwood flesh)", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Ancien", "name_en": "Elder", "points": 7}]},
  "guardians-of-talsyn": {id:"guardians-of-talsyn", army:"wood-elf-realms", category:"special", name_fr:"Gardiens de Talsyn", name_en:"Guardians of Talsyn", points:18, unitSize:"5+", specialRules:"Close Order, Drilled, Elven Reflexes, Martial Prowess, Move Through Cover, Parry, Stubborn, Veteran", opts:[{"name_fr": "Boucliers", "name_en": "Shields", "points": 1, "perModel": true}], equip:[{"name_fr": "Arme de base, Lances Asrai", "name_en": "Hand weapon, Asrai spears", "points": 0, "perModel": true, "active": true}], armor:[{"name_fr": "Armure légère", "name_en": "Light armour", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Maître de Veille (Champion)", "name_en": "Watchmaster (Champion)", "points": 6}, {"name_fr": "Porte-étendard", "name_en": "Standard bearer", "points": 5}, {"name_fr": "Musicien", "name_en": "Musician", "points": 5}]},
  "waywatchers": {id:"waywatchers", army:"wood-elf-realms", category:"rare", name_fr:"Forestiers", name_en:"Waywatchers", points:16, unitSize:"5+", specialRules:"Elven Reflexes, Evasive, Feigned Flight, Fire & Flee, Ignores Cover, Move Through Cover, Scouts, Skirmishers", opts:[{"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 1, "perModel": true}, {"name_fr": "Avant-garde", "name_en": "Vanguard", "points": 1, "perModel": true}, {"name_fr": "Vétérans", "name_en": "Veteran", "points": 1, "perModel": true}, {"name_fr": "Bodkins Cabalistiques", "name_en": "Arcane Bodkins", "points": 2, "perModel": true}, {"name_fr": "Flèches de Fléau des Furies", "name_en": "Hagbane Tips", "points": 2, "perModel": true}, {"name_fr": "Traits de Feu Lunaire", "name_en": "Moonfire Shot", "points": 1, "perModel": true}, {"name_fr": "Échardes d’Archère Hâtive", "name_en": "Swiftshiver Shards", "points": 2, "perModel": true}, {"name_fr": "Pointes de Parabole Pure", "name_en": "Trueflight Arrows", "points": 1, "perModel": true}], equip:[{"name_fr": "Arme de base, Arcs longs Asrai", "name_en": "Hand weapon, Asrai longbows", "points": 0, "perModel": true, "active": true}], command:[{"name_fr": "Sentinelle", "name_en": "Sentinel", "points": 6}]},
  "giant-eagle": {id:"giant-eagle", army:"wood-elf-realms", category:"rare", name_fr:"Grand Aigle", name_en:"Great Eagle", points:60, specialRules:"Close Order, Fear, Fly (10), Stomp Attacks (1), Swiftstride", equip:[{"name_fr": "Griffes mortelles, Gueule dentelée", "name_en": "Wicked claws, Serrated maw", "points": 0, "perModel": true, "active": true}]},
  "treeman": {id:"treeman", army:"wood-elf-realms", category:"rare", name_fr:"Homme-arbre", name_en:"Treeman", points:215, specialRules:"Armour Bane (1), Close Order, Flammable, Immune to Psychology, Large Target, Magical Attacks, Move Through Cover, Regeneration (5+), Stomp Attacks (D3), Stubborn, Terror, Timmm-berrr!, Tree Spirit, Tree Whack", opts:[{"name_fr": "Embusqueurs", "name_en": "Ambushers", "points": 10}], equip:[{"name_fr": "Poings de chêne, Racines étrangleuses", "name_en": "Oaken fists, Strangleroots", "points": 0, "active": true}], armor:[{"name_fr": "Armure de plate complète (Armure arboricole)", "name_en": "Full plate armour (Arboreal armour)", "points": 0, "active": true}]},
  "wood-elf-beast-pack": {id:"wood-elf-beast-pack", army:"wood-elf-realms", category:"rare", name_fr:"Meute de Bêtes des Elfes Sylvains", name_en:"Wood Elf Beast Pack", points:11, unitSize:"1+", specialRules:"Elven Reflexes, Motley Crew, Move Through Cover, Run with the Pack, Skirmishers", opts:[{"name_fr": "Charge Dévastatrice, Impétueux", "name_en": "Furious Charge, Impetuous", "points": 10}]},
  "deepwood-hounds": {id:"deepwood-hounds", army:"wood-elf-realms", category:"rare", name_fr:"Chien du Grand-bois", name_en:"Deepwood Hound", points:8, specialRules:"Motley Crew, Run with the Pack, Skirmishers, Warband", equip:[{"name_fr": "Armes de base (Griffes, crocs, défenses, dents)", "name_en": "Hand weapons (Claws, fangs, tusks, teeth)", "points": 0, "active": true}]},
  "forest-cat": {id:"forest-cat", army:"wood-elf-realms", category:"rare", name_fr:"Chat des Forêts", name_en:"Forest Cat", points:6, specialRules:"Armour Bane (1), Motley Crew, Run with the Pack, Skirmishers", equip:[{"name_fr": "Armes de base (Griffes, crocs, défenses, dents)", "name_en": "Hand weapons (Claws, fangs, tusks, teeth)", "points": 0, "active": true}]},
  "sylvan-boar": {id:"sylvan-boar", army:"wood-elf-realms", category:"rare", name_fr:"Sanglier Sylvain", name_en:"Sylvan Boar", points:11, specialRules:"Furious Charge, Motley Crew, Razor Tusks, Run with the Pack, Skirmishers", equip:[{"name_fr": "Armes de base (Griffes, crocs, défenses, dents)", "name_en": "Hand weapons (Claws, fangs, tusks, teeth)", "points": 0, "active": true}]},
  "bear-of-loren": {id:"bear-of-loren", army:"wood-elf-realms", category:"rare", name_fr:"Ours de Loren", name_en:"Bear of Loren", points:20, specialRules:"Armoured Hide (1), Cleaving Blow, Fear, Motley Crew, Run with the Pack, Skirmishers", equip:[{"name_fr": "Armes de base (Griffes, crocs, défenses, dents)", "name_en": "Hand weapons (Claws, fangs, tusks, teeth)", "points": 0, "active": true}]},
  "general-of-the-empire": {
    id: "general-of-the-empire",
    army: "empire-of-man",
    category: "characters",
    name_fr: "Général de l’Empire",
    name_en: "General of the Empire",
    points: 90,
    specialRules: "\"Tenez la Ligne!\", Cri de Ralliement",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true},
      {name_fr: "Pistolet", name_en: "Pistol", points: 5, perModel: true},
      {name_fr: "Plusieurs pistolets", name_en: "Brace of pistols", points: 10, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Hallebarde", name_en: "Halberd", points: 3, active: false, perModel: true},
      {name_fr: "Lance de joute", name_en: "Lance", points: 4, active: false, perModel: true},
      {name_fr: "Arquebuse", name_en: "Handgun", points: 6, active: false, perModel: true},
      {name_fr: "Arc long", name_en: "Longbow", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 3, active: false},
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 6, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier Caparaçonné", name_en: "Barded Warhorse", points: 16},
      {name_fr: "Destrier de l’Empire", name_en: "Empire warhorse", points: 12},
      {name_fr: "Pégase", name_en: "Pegasus", points: 30},
      {name_fr: "Demigriffon", name_en: "Demigryph", points: 50},
      {name_fr: "Griffon", name_en: "Griffon {empire}", points: 130},
      {name_fr: "Griffon Impérial", name_en: "Imperial Griffon", points: 160}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 100}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "captain-of-the-empire": {
    id: "captain-of-the-empire",
    army: "empire-of-man",
    category: "characters",
    name_fr: "Capitaine de l’Empire",
    name_en: "Captain of the Empire",
    points: 45,
    specialRules: "\"Tenez la Ligne!\", Cri de Ralliement",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true},
      {name_fr: "Pistolet", name_en: "Pistol", points: 5, perModel: true},
      {name_fr: "Plusieurs pistolets", name_en: "Brace of pistols", points: 10, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Hallebarde", name_en: "Halberd", points: 3, active: false, perModel: true},
      {name_fr: "Lance de joute", name_en: "Lance", points: 4, active: false, perModel: true},
      {name_fr: "Arquebuse", name_en: "Handgun", points: 6, active: false, perModel: true},
      {name_fr: "Arc long", name_en: "Longbow", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 3, active: false},
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 6, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier Caparaçonné", name_en: "Barded Warhorse", points: 16},
      {name_fr: "Destrier de l’Empire", name_en: "Empire warhorse", points: 12},
      {name_fr: "Pégase", name_en: "Pegasus", points: 30},
      {name_fr: "Demigriffon", name_en: "Demigryph", points: 50},
      {name_fr: "Griffon", name_en: "Griffon {empire}", points: 130}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "wizard-lord": {
    id: "wizard-lord",
    army: "empire-of-man",
    category: "characters",
    name_fr: "Seigneur Sorcier",
    name_en: "Wizard Lord",
    points: 130,
    specialRules: "Attaques Magiques, Résistance à la Magie (-1)",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier de l’Empire", name_en: "Empire Warhorse", points: 12},
      {name_fr: "Pégase", name_en: "Pegasus", points: 30},
      {name_fr: "Griffon Impérial", name_en: "Imperial Griffon", points: 160}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor-mages", "talisman", "arcane-item", "enchanted-item"], maxPoints: 100}
    ], lores: ["daemonology", "dark-magic", "elementalism", "battle-magic", "illusion", "necromancy"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "master-mage": {
    id: "master-mage",
    army: "empire-of-man",
    category: "characters",
    name_fr: "Maître Mage",
    name_en: "Master Mage",
    points: 60,
    specialRules: "Attaques Magiques, Résistance à la Magie (-1)",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier de l’Empire", name_en: "Empire Warhorse", points: 12},
      {name_fr: "Pégase", name_en: "Pegasus", points: 30}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor-mages", "talisman", "arcane-item", "enchanted-item"], maxPoints: 50}
    ], lores: ["daemonology", "dark-magic", "elementalism", "battle-magic", "illusion", "necromancy"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "grand-master": {
    id: "grand-master",
    army: "empire-of-man",
    category: "characters",
    name_fr: "Grand Maître",
    name_en: "Grand Master",
    points: 145,
    specialRules: "Contre-charge, Première Charge, Immunisé à la Psychologie, Maître des Batailles, Cri de Ralliement, Obstiné, Rapide, Vétérans",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true},
      {name_fr: "Ordre des Chevaliers Panthères", name_en: "Order of the Knights Panther", points: 10},
      {name_fr: "Ordre des Chevaliers Panthères", name_en: "Order of the Knights Panther", points: 10},
      {name_fr: "Ordre du Loup Blanc", name_en: "Order of the White Wolf", points: 15},
      {name_fr: "Ordre du Loup Blanc", name_en: "Order of the White Wolf", points: 15},
      {name_fr: "Ordre du Soleil", name_en: "Order of the Blazing Sun", points: 10},
      {name_fr: "Ordre du Soleil", name_en: "Order of the Blazing Sun", points: 10},
      {name_fr: "Ordre des Chevaliers de Morr", name_en: "Order of the Knights of Morr", points: 15},
      {name_fr: "Ordre des Chevaliers de Morr", name_en: "Order of the Knights of Morr", points: 15},
      {name_fr: "Ordre du Cœur Ardent", name_en: "Order of the Fiery Heart", points: 15},
      {name_fr: "Ordre du Cœur Ardent", name_en: "Order of the Fiery Heart", points: 15}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Lance de joute", name_en: "Lance", points: 4, active: false, perModel: true},
      {name_fr: "Marteau du loup", name_en: "Wolf hammer", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true},
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 3, active: false}
    ],
    mounts: [
      {name_fr: "Destrier Caparaçonné", name_en: "Barded Warhorse", points: 16, active: true},
      {name_fr: "Pégase", name_en: "Pegasus", points: 30},
      {name_fr: "Demigriffon", name_en: "Demigryph", points: 50}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 100}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "chapter-master": {
    id: "chapter-master",
    army: "empire-of-man",
    category: "characters",
    name_fr: "Maître de Chapitre",
    name_en: "Chapter Master",
    points: 75,
    specialRules: "Contre-charge, Première Charge, Immunisé à la Psychologie, Maître des Batailles, Cri de Ralliement, Obstiné, Rapide, Vétérans",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true},
      {name_fr: "Ordre des Chevaliers Panthères", name_en: "Order of the Knights Panther", points: 10},
      {name_fr: "Ordre des Chevaliers Panthères", name_en: "Order of the Knights Panther", points: 10},
      {name_fr: "Ordre du Loup Blanc", name_en: "Order of the White Wolf", points: 15},
      {name_fr: "Ordre du Loup Blanc", name_en: "Order of the White Wolf", points: 15},
      {name_fr: "Ordre du Soleil", name_en: "Order of the Blazing Sun", points: 10},
      {name_fr: "Ordre du Soleil", name_en: "Order of the Blazing Sun", points: 10},
      {name_fr: "Ordre des Chevaliers de Morr", name_en: "Order of the Knights of Morr", points: 15},
      {name_fr: "Ordre des Chevaliers de Morr", name_en: "Order of the Knights of Morr", points: 15},
      {name_fr: "Ordre du Cœur Ardent", name_en: "Order of the Fiery Heart", points: 15},
      {name_fr: "Ordre du Cœur Ardent", name_en: "Order of the Fiery Heart", points: 15}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Lance de joute", name_en: "Lance", points: 4, active: false, perModel: true},
      {name_fr: "Marteau du loup", name_en: "Wolf hammer", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true},
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 3, active: false}
    ],
    mounts: [
      {name_fr: "Destrier Caparaçonné", name_en: "Barded Warhorse", points: 16, active: true},
      {name_fr: "Pégase", name_en: "Pegasus", points: 30},
      {name_fr: "Demigriffon", name_en: "Demigryph", points: 50}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "witch-hunter": {
    id: "witch-hunter",
    army: "empire-of-man",
    category: "characters",
    name_fr: "Répurgateur",
    name_en: "Witch Hunter",
    points: 55,
    specialRules: "Immunisé à la Psychologie, Coup Fatal, Ne Tolérez Pas...",
    opts: [
      {name_fr: "Les Sorcières", name_en: "The Witch", points: 0, active: true},
      {name_fr: "Les Revenants", name_en: "The Revenant", points: 0},
      {name_fr: "Les Mutants", name_en: "The Mutant", points: 0},
      {name_fr: "Les Démons", name_en: "The Daemon", points: 0}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false},
      {name_fr: "Arbalète", name_en: "Crossbow", points: 6, active: false},
      {name_fr: "Arquebuse", name_en: "Handgun", points: 6, active: false},
      {name_fr: "Pistolet", name_en: "Pistol", points: 5, active: false},
      {name_fr: "Plusieurs pistolets", name_en: "Brace of pistols", points: 10, active: false}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier de l’Empire", name_en: "Empire Warhorse", points: 12},
      {name_fr: "Pégase", name_en: "Pegasus", points: 30}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "lector-of-sigmar": {
    id: "lector-of-sigmar",
    army: "empire-of-man",
    category: "characters",
    name_fr: "Archidiacre de Sigmar",
    name_en: "Lector of Sigmar",
    points: 110,
    specialRules: "Attaques Magiques, Résistance à la Magie (-1), Prières de Sigmar",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 3, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier Caparaçonné", name_en: "Barded Warhorse", points: 16},
      {name_fr: "Destrier de l’Empire", name_en: "Empire Warhorse", points: 12},
      {name_fr: "Autel de Guerre de Sigmar", name_en: "War Altar of Sigmar", points: 135}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 100}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "priest-of-sigmar": {
    id: "priest-of-sigmar",
    army: "empire-of-man",
    category: "characters",
    name_fr: "Prêtre de Sigmar",
    name_en: "Priest of Sigmar",
    points: 60,
    specialRules: "Attaques Magiques, Résistance à la Magie (-1), Prières de Sigmar",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 3, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier de l’Empire", name_en: "Empire Warhorse", points: 12},
      {name_fr: "Destrier Caparaçonné", name_en: "Barded Warhorse", points: 16}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "high-priest-of-ulric": {
    id: "high-priest-of-ulric",
    army: "empire-of-man",
    category: "characters",
    name_fr: "Grand Prêtre d’Ulric",
    name_en: "High Priest of Ulric",
    points: 110,
    specialRules: "Attaques Magiques, Résistance à la Magie (-1), Prières d’Ulric",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 3, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier Caparaçonné", name_en: "Barded Warhorse", points: 16},
      {name_fr: "Destrier de l’Empire", name_en: "Empire Warhorse", points: 12}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 100}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "priest-of-ulric": {
    id: "priest-of-ulric",
    army: "empire-of-man",
    category: "characters",
    name_fr: "Prêtre d’Ulric",
    name_en: "Priest of Ulric",
    points: 60,
    specialRules: "Attaques Magiques, Résistance à la Magie (-1), Prières d’Ulric",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 3, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier Caparaçonné", name_en: "Barded Warhorse", points: 16},
      {name_fr: "Destrier de l’Empire", name_en: "Empire Warhorse", points: 12}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "empire-engineer": {
    id: "empire-engineer",
    army: "empire-of-man",
    category: "characters",
    name_fr: "Ingénieur de l’Empire",
    name_en: "Empire Engineer",
    points: 45,
    specialRules: "Nuages de Suie et de Fumée, Maître en Balistique",
    opts: [
      {name_fr: "Pigeons grenadiers", name_en: "Pigeon bombs", points: 20}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true},
      {name_fr: "Tromblon à grenades", name_en: "Grenade launching blunderbuss", points: 10, active: false},
      {name_fr: "Long fusil de Hochland", name_en: "Hochland long rifle", points: 10, active: false},
      {name_fr: "Arquebuse à répétition", name_en: "Repeater handgun", points: 8, active: false},
      {name_fr: "Pistolet à répétition", name_en: "Repeater pistol", points: 8, active: false}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 3, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Chariot de Guerre de l’Empire", name_en: "Empire War Wagon", points: 140}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "prince": {
    id: "prince",
    army: "high-elf-realms",
    category: "characters",
    name_fr: "Prince",
    name_en: "Prince",
    points: 130,
    specialRules: "Armes en Ithilmar, Frappe En Premier, Valeur des Âges",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true},
      {name_fr: "Arc long", name_en: "Longbow", points: 4, perModel: true},
      {name_fr: "Arc d’Avelorn", name_en: "Bow of Avelorn", points: 12, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 2, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Hallebarde", name_en: "Halberd", points: 3, active: false, perModel: true},
      {name_fr: "Lance de joute", name_en: "Lance", points: 4, active: false, perModel: true},
      {name_fr: "Épée de Hoeth", name_en: "Sword of Hoeth", points: 0, active: false},
      {name_fr: "Épée de Hoeth", name_en: "Sword of Hoeth", points: 0, active: false},
      {name_fr: "Arc d’Avelorn", name_en: "Bow of Avelorn", points: 0, active: false},
      {name_fr: "Hallebarde de cérémonie", name_en: "Ceremonial halberd", points: 0, active: false},
      {name_fr: "Grande lame de Chrace", name_en: "Chracian great blade", points: 0, active: false},
      {name_fr: "Arc de guerre", name_en: "Warbow", points: 0, active: false}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 3, active: false},
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 6, active: false},
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 0, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Coursier Elfique", name_en: "Elven Steed", points: 14},
      {name_fr: "Coursier Elfique Caparaçonné", name_en: "Barded Elven Steed", points: 18},
      {name_fr: "Grand Aigle", name_en: "Great Eagle {mount}", points: 60},
      {name_fr: "Char de Tiranoc", name_en: "Tiranoc Chariot", points: 75},
      {name_fr: "Cotre Volant de Lothern", name_en: "Lothern Skycutter", points: 90},
      {name_fr: "Char à Lions de Chrace", name_en: "Lion Chariot of Chrace", points: 125},
      {name_fr: "Griffon", name_en: "Griffon {high elves}", points: 130},
      {name_fr: "Phénix Spire-de-feu", name_en: "Flamespyre Phoenix {mount}", points: 170},
      {name_fr: "Dragon Solaire", name_en: "Sun Dragon", points: 180},
      {name_fr: "Phénix Cœur-de-Givre", name_en: "Frostheart Phoenix {mount}", points: 205},
      {name_fr: "Dragon Lunaire", name_en: "Moon Dragon", points: 235},
      {name_fr: "Dragon Stellaire", name_en: "Star Dragon", points: 290}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item", "arcane-item"], maxPoints: 100},
      {name_fr: "Honneurs Elfiques", name_en: "Elven Honours", types: ["elven-honour"], maxPoints: 0}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "noble": {
    id: "noble",
    army: "high-elf-realms",
    category: "characters",
    name_fr: "Noble",
    name_en: "Noble",
    points: 70,
    specialRules: "Armes en Ithilmar, Frappe En Premier, Valeur des Âges",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true},
      {name_fr: "Arc long", name_en: "Longbow", points: 4, perModel: true},
      {name_fr: "Arc d’Avelorn", name_en: "Bow of Avelorn", points: 12, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 2, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Hallebarde", name_en: "Halberd", points: 3, active: false, perModel: true},
      {name_fr: "Lance de joute", name_en: "Lance", points: 4, active: false, perModel: true},
      {name_fr: "Épée de Hoeth", name_en: "Sword of Hoeth", points: 0, active: false},
      {name_fr: "Épée de Hoeth", name_en: "Sword of Hoeth", points: 0, active: false},
      {name_fr: "Arc d’Avelorn", name_en: "Bow of Avelorn", points: 0, active: false},
      {name_fr: "Hallebarde de cérémonie", name_en: "Ceremonial halberd", points: 0, active: false},
      {name_fr: "Grande lame de Chrace", name_en: "Chracian great blade", points: 0, active: false},
      {name_fr: "Arc de guerre", name_en: "Warbow", points: 0, active: false}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 3, active: false},
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 6, active: false},
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 0, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Coursier Elfique", name_en: "Elven Steed", points: 14},
      {name_fr: "Coursier Elfique Caparaçonné", name_en: "Barded Elven Steed", points: 18},
      {name_fr: "Grand Aigle", name_en: "Great Eagle {mount}", points: 60},
      {name_fr: "Char de Tiranoc", name_en: "Tiranoc Chariot", points: 75},
      {name_fr: "Cotre Volant de Lothern", name_en: "Lothern Skycutter", points: 90},
      {name_fr: "Char à Lions de Chrace", name_en: "Lion Chariot of Chrace", points: 125},
      {name_fr: "Griffon", name_en: "Griffon {high elves}", points: 130},
      {name_fr: "Phénix Spire-de-feu", name_en: "Flamespyre Phoenix {mount}", points: 170},
      {name_fr: "Dragon Solaire", name_en: "Sun Dragon", points: 180},
      {name_fr: "Phénix Cœur-de-Givre", name_en: "Frostheart Phoenix {mount}", points: 205}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item", "arcane-item"], maxPoints: 50},
      {name_fr: "Honneurs Elfiques", name_en: "Elven Honours", types: ["elven-honour"], maxPoints: 0}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "archmage": {
    id: "archmage",
    army: "high-elf-realms",
    category: "characters",
    name_fr: "Archimage",
    name_en: "Archmage",
    points: 155,
    specialRules: "Réflexes Elfiques, Armes en Ithilmar, Bienfait de Lileath, Domaine de Saphery, Valeur des Âges",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Épée de Hoeth", name_en: "Sword of Hoeth", points: 0, active: false},
      {name_fr: "Arc d’Avelorn", name_en: "Bow of Avelorn", points: 0, active: false},
      {name_fr: "Hallebarde de cérémonie", name_en: "Ceremonial halberd", points: 0, active: false},
      {name_fr: "Grande lame de Chrace", name_en: "Chracian great blade", points: 0, active: false},
      {name_fr: "Arc de guerre", name_en: "Warbow", points: 0, active: false}
    ],
    armor: [
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 0, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Coursier Elfique", name_en: "Elven Steed", points: 14},
      {name_fr: "Coursier Elfique Caparaçonné", name_en: "Barded Elven Steed", points: 18},
      {name_fr: "Grand Aigle", name_en: "Great Eagle {mount}", points: 60},
      {name_fr: "Cotre Volant de Lothern", name_en: "Lothern Skycutter", points: 90},
      {name_fr: "Char à Lions de Chrace", name_en: "Lion Chariot of Chrace", points: 125},
      {name_fr: "Phénix Spire-de-feu", name_en: "Flamespyre Phoenix {mount}", points: 170},
      {name_fr: "Dragon Solaire", name_en: "Sun Dragon", points: 180},
      {name_fr: "Phénix Cœur-de-Givre", name_en: "Frostheart Phoenix {mount}", points: 205},
      {name_fr: "Dragon Lunaire", name_en: "Moon Dragon", points: 235},
      {name_fr: "Dragon Stellaire", name_en: "Star Dragon", points: 290}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item", "arcane-item"], maxPoints: 100},
      {name_fr: "Honneurs Elfiques", name_en: "Elven Honours", types: ["elven-honour"], maxPoints: 0}
    ], lores: ["battle-magic", "elementalism", "high-magic", "illusion"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "mage": {
    id: "mage",
    army: "high-elf-realms",
    category: "characters",
    name_fr: "Mage",
    name_en: "Mage",
    points: 80,
    specialRules: "Réflexes Elfiques, Armes en Ithilmar, Bienfait de Lileath, Domaine de Saphery, Valeur des Âges",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Épée de Hoeth", name_en: "Sword of Hoeth", points: 0, active: false},
      {name_fr: "Arc d’Avelorn", name_en: "Bow of Avelorn", points: 0, active: false},
      {name_fr: "Hallebarde de cérémonie", name_en: "Ceremonial halberd", points: 0, active: false},
      {name_fr: "Grande lame de Chrace", name_en: "Chracian great blade", points: 0, active: false},
      {name_fr: "Arc de guerre", name_en: "Warbow", points: 0, active: false}
    ],
    armor: [
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 0, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Coursier Elfique", name_en: "Elven Steed", points: 14},
      {name_fr: "Coursier Elfique Caparaçonné", name_en: "Barded Elven Steed", points: 18},
      {name_fr: "Grand Aigle", name_en: "Great Eagle {mount}", points: 60},
      {name_fr: "Cotre Volant de Lothern", name_en: "Lothern Skycutter", points: 90},
      {name_fr: "Char à Lions de Chrace", name_en: "Lion Chariot of Chrace", points: 125},
      {name_fr: "Phénix Spire-de-feu", name_en: "Flamespyre Phoenix {mount}", points: 170},
      {name_fr: "Dragon Solaire", name_en: "Sun Dragon", points: 180},
      {name_fr: "Phénix Cœur-de-Givre", name_en: "Frostheart Phoenix {mount}", points: 205}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item", "arcane-item"], maxPoints: 50},
      {name_fr: "Honneurs Elfiques", name_en: "Elven Honours", types: ["elven-honour"], maxPoints: 0}
    ], lores: ["battle-magic", "elementalism", "high-magic", "illusion"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "dragon-mage": {
    id: "dragon-mage",
    army: "high-elf-realms",
    category: "characters",
    name_fr: "Mage Dragon",
    name_en: "Dragon Mage",
    points: 275,
    specialRules: "Bienfaits d’Asuryan, Ordre Serré, Armure Dragon, Réflexes Elfiques, Vol (10), Impétueux, Armes en Ithilmar, Grande Cible, Bienfait de Lileath, Domaine de Saphery, Attaques de Piétinement (D6), Rapide, Terreur, Valeur des Âges",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "Dragon Solaire", name_en: "Sun Dragon", points: 0, active: true}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item", "arcane-item"], maxPoints: 50}
    ], lores: ["battle-magic", "elementalism"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "handmaiden-of-the-everqueen": {
    id: "handmaiden-of-the-everqueen",
    army: "high-elf-realms",
    category: "characters",
    name_fr: "Suivante de la Reine Éternelle",
    name_en: "Handmaiden of the Everqueen",
    points: 65,
    specialRules: "Flèches d’Isha, Esquiveur, Ignore les Couverts, Immunisé à la Psychologie, Armure en Ithilmar, Armes en Ithilmar, Frappe En Premier",
    opts: [
      {name_fr: "Cor d’Isha", name_en: "Horn of Isha", points: 25, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base, Lance de suivante, Arc d’Avelorn", name_en: "Hand weapon, Handmaiden's spear, Bow of Avelorn", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 3, active: false}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "chracian-chieftain": {
    id: "chracian-chieftain",
    army: "high-elf-realms",
    category: "characters",
    name_fr: "Chef de Guerre Chracien",
    name_en: "Chracian Chieftain",
    points: 105,
    specialRules: "Charge Dévastatrice, Armes en Ithilmar, Cape de Lion, Mouvement à Couvert*, Frappe En Premier*, Obstiné, Valeur des Âges",
    opts: [],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 4, active: false},
      {name_fr: "Grande lame de Chrace", name_en: "Chracian great blade", points: 3, active: false}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Char de Chef de Guerre", name_en: "Chieftain's Chariot", points: 105}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 75}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "dark-elf-dreadlord": {
    id: "dark-elf-dreadlord",
    army: "dark-elves",
    category: "characters",
    name_fr: "Despote Elfe Noir",
    name_en: "Dark Elf Dreadlord",
    points: 130,
    specialRules: "Haine Éternelle, Haine (Hauts Elfes)*, Meurtriers, Frappe En Premier*",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true},
      {name_fr: "Arbalète à répétition", name_en: "Repeater crossbow", points: 6, perModel: true},
      {name_fr: "Arbalète de poing à répétition", name_en: "Repeater handbow", points: 5, perModel: true},
      {name_fr: "Paire d’arbalètes à répétition de poing", name_en: "Brace of Repeater handbows", points: 10, perModel: true},
      {name_fr: "Cape en peau de Dragon des Mers", name_en: "Sea Dragon Cloak", points: 4, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Hallebarde", name_en: "Halberd", points: 3, active: false, perModel: true},
      {name_fr: "Lance de joute", name_en: "Lance", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 3, active: false},
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 6, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Coursier Noir", name_en: "Dark Steed", points: 14},
      {name_fr: "Sang-froid", name_en: "Cold One {dark elves}", points: 18},
      {name_fr: "Pégase Noir", name_en: "Dark Pegasus", points: 35},
      {name_fr: "Char à Sang-froid", name_en: "Cold One Chariot", points: 125},
      {name_fr: "Dragon Noir", name_en: "Black Dragon", points: 280},
      {name_fr: "Manticore", name_en: "Manticore {dark elves}", points: 130},
      {name_fr: "Manticore", name_en: "Manticore {renegade}", points: 130}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 100}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "dark-elf-master": {
    id: "dark-elf-master",
    army: "dark-elves",
    category: "characters",
    name_fr: "Maître Elfe Noir",
    name_en: "Dark Elf Master",
    points: 70,
    specialRules: "Haine Éternelle, Haine (Hauts Elfes)*, Meurtriers, Frappe En Premier*",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true},
      {name_fr: "Arbalète à répétition", name_en: "Repeater crossbow", points: 6, perModel: true},
      {name_fr: "Arbalète de poing à répétition", name_en: "Repeater handbow", points: 5, perModel: true},
      {name_fr: "Paire d’arbalètes à répétition de poing", name_en: "Brace of Repeater handbows", points: 10, perModel: true},
      {name_fr: "Cape en peau de Dragon des Mers", name_en: "Sea Dragon Cloak", points: 4, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Hallebarde", name_en: "Halberd", points: 3, active: false, perModel: true},
      {name_fr: "Lance de joute", name_en: "Lance", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 3, active: false},
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 6, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Coursier Noir", name_en: "Dark Steed", points: 14},
      {name_fr: "Sang-froid", name_en: "Cold One {dark elves}", points: 18},
      {name_fr: "Pégase Noir", name_en: "Dark Pegasus", points: 35},
      {name_fr: "Char à Sang-froid", name_en: "Cold One Chariot", points: 125}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "supreme-sorceress": {
    id: "supreme-sorceress",
    army: "dark-elves",
    category: "characters",
    name_fr: "Sorcière Suprême",
    name_en: "Supreme Sorceress",
    points: 150,
    specialRules: "Réflexes Elfiques, Haine Éternelle, Haine (Hauts Elfes), Bénédiction d’Hekarti, Domaine de Naggaroth, Meurtriers",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Coursier Noir", name_en: "Dark Steed", points: 14},
      {name_fr: "Sang-froid", name_en: "Cold One {dark elves}", points: 18},
      {name_fr: "Pégase Noir", name_en: "Dark Pegasus", points: 35},
      {name_fr: "Dragon Noir", name_en: "Black Dragon", points: 280}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "talisman", "arcane-item", "enchanted-item", "armor-mages"], maxPoints: 100}
    ], lores: ["battle-magic", "daemonology", "dark-magic", "elementalism", "illusion"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "sorceress": {
    id: "sorceress",
    army: "dark-elves",
    category: "characters",
    name_fr: "Sorcière",
    name_en: "Sorceress",
    points: 75,
    specialRules: "Réflexes Elfiques, Haine Éternelle, Haine (Hauts Elfes), Bénédiction d’Hekarti, Domaine de Naggaroth, Meurtriers",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Coursier Noir", name_en: "Dark Steed", points: 14},
      {name_fr: "Sang-froid", name_en: "Cold One {dark elves}", points: 18},
      {name_fr: "Pégase Noir", name_en: "Dark Pegasus", points: 35}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor-mages", "talisman", "arcane-item", "enchanted-item"], maxPoints: 50}
    ], lores: ["daemonology", "dark-magic", "elementalism", "battle-magic", "illusion"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "high-beastmaster": {
    id: "high-beastmaster",
    army: "dark-elves",
    category: "characters",
    name_fr: "Haut Belluaire",
    name_en: "High Beastmaster",
    points: 75,
    specialRules: "Haine Éternelle, Dompteur, Haine (Hauts Elfes)*, Meurtriers, Frappe En Premier*",
    opts: [
      {name_fr: "Arbalète à répétition", name_en: "Repeater crossbow", points: 6, perModel: true},
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true},
      {name_fr: "Cape en peau de Dragon des Mers", name_en: "Sea Dragon Cloak", points: 4, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base, Fouet", name_en: "Hand weapon, Whip", points: 0, active: true, perModel: true},
      {name_fr: "Arme de base, Fouet, Lance de cavalerie", name_en: "Hand weapon, Whip, Cavalry spear", points: 2, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 3, active: false}
    ],
    mounts: [
      {name_fr: "Char à Courre", name_en: "Scourgerunner Chariot", points: 85, active: true},
      {name_fr: "Manticore", name_en: "Manticore {dark elves}", points: 130},
      {name_fr: "Manticore", name_en: "Manticore {renegade}", points: 130}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 75}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "death-hag": {
    id: "death-hag",
    army: "dark-elves",
    category: "characters",
    name_fr: "Matriarche",
    name_en: "Death Hag",
    points: 70,
    specialRules: "Haine Éternelle, Frénésie, Haine (Tous les ennemis), Solitaire, Meurtriers, Attaques Empoisonnées, Frappe En Premier, Dons de Khaine",
    opts: [],
    equip: [
      {name_fr: "Deux armes de base", name_en: "Two hand weapons", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Chaudron de Sang", name_en: "Cauldron of Blood {renegade}", points: 150}
    ],
    magic: {items: [
      {name_fr: "Dons de Khaine", name_en: "Gifts of Khaine", types: ["gift-of-khaine"], maxPoints: 20},
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "talisman", "enchanted-item"], maxPoints: 75}
    ], lores: []},
    command: []
  },
  "khainite-assassin": {
    id: "khainite-assassin",
    army: "dark-elves",
    category: "characters",
    name_fr: "Assassin Khainite",
    name_en: "Khainite Assassin",
    points: 80,
    specialRules: "Haine Éternelle, Haine (Tous les ennemis), Caché, Immunisé à la Psychologie, Meurtriers, Frappe En Premier",
    opts: [],
    equip: [
      {name_fr: "Arme de base, Armes de lancer", name_en: "Hand weapon, Throwing weapons", points: 0, active: true, perModel: true},
      {name_fr: "Arme de base, Armes de lancer, Arme de base additionnelle", name_en: "Hand weapon, Throwing weapons, Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme de base, Armes de lancer, Arbalète de poing à répétition", name_en: "Hand weapon, Throwing weapons, Repeater handbow", points: 5, active: false, perModel: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true}
    ],
    magic: {items: [
      {name_fr: "Poisons Interdits", name_en: "Forbidden Poisons", types: ["forbidden-poison"], maxPoints: 15},
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "talisman", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: []
  },
  "dark-elf-warriors": {
    id: "dark-elf-warriors",
    army: "dark-elves",
    category: "core",
    name_fr: "Guerriers Elfes Noirs",
    name_en: "Dark Elf Warriors",
    points: 8,
    specialRules: "Ordre Serré, Réflexes Elfiques, Haine (Hauts Elfes), Prouesses Martiales",
    opts: [
      {name_fr: "Vétérans", name_en: "Veteran", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, perModel: true},
      {name_fr: "Lances d’infanterie", name_en: "Thrusting spears", points: 1, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère, Boucliers", name_en: "Light armour, Shields", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Patricien (champion)", name_en: "Lordling (champion)", points: 5},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 5, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 5}
    ]
  },
  "repeater-crossbowmen": {
    id: "repeater-crossbowmen",
    army: "dark-elves",
    category: "core",
    name_fr: "Arbalétriers Elfes Noirs",
    name_en: "Repeater Crossbowmen",
    points: 11,
    specialRules: "Ordre Serré, Réflexes Elfiques, Haine (Hauts Elfes), Prouesses Martiales",
    opts: [
      {name_fr: "Boucliers", name_en: "Shields", points: 1, perModel: true},
      {name_fr: "Vétérans", name_en: "Veteran", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Arbalètes à répétition", name_en: "Hand weapons, Repeater crossbows", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Patricien (champion)", name_en: "Lordling (champion)", points: 5},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 5, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 5}
    ]
  },
  "black-ark-corsairs": {
    id: "black-ark-corsairs",
    army: "dark-elves",
    category: "core",
    name_fr: "Corsaires des Arches Noires",
    name_en: "Black Ark Corsairs",
    points: 11,
    specialRules: "Réflexes Elfiques, Haine (Hauts Elfes), Mouvement à Couvert, Ordre Dispersé, Cape en peau de Dragon des Mers",
    opts: [],
    equip: [
      {name_fr: "Armes de base, Arme de base additionnelle", name_en: "Hand weapons, Additional hand weapon", points: 0, active: false, perModel: true},
      {name_fr: "Armes de base, Arbalètes à répétition de poing", name_en: "Hand weapons, Repeater handbows", points: 0, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Écumeur (champion)", name_en: "Reaver (champion)", points: 6},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "dark-riders": {
    id: "dark-riders",
    army: "dark-elves",
    category: "core",
    name_fr: "Cavaliers Noirs",
    name_en: "Dark Riders",
    points: 16,
    specialRules: "Réflexes Elfiques, Cavalerie Rapide, Haine (Hauts Elfes), Ordre Dispersé, Tirailleurs, Rapide",
    opts: [
      {name_fr: "Boucliers", name_en: "Shields", points: 1, perModel: true},
      {name_fr: "Tir & Fuite", name_en: "Fire & Flee", points: 1, perModel: true},
      {name_fr: "Éclaireurs", name_en: "Scouts", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Lances de cavalerie", name_en: "Hand weapons, Cavalry spears", points: 0, active: true, perModel: true},
      {name_fr: "Armes de base, Lances de cavalerie, Arbalètes à répétition", name_en: "Hand weapons, Cavalry spears, Repeater crossbows", points: 2, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Héraut (champion)", name_en: "Herald (champion)", points: 6},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "witch-elves": {
    id: "witch-elves",
    army: "dark-elves",
    category: "special",
    name_fr: "Furies",
    name_en: "Witch Elves",
    points: 11,
    specialRules: "Ordre Serré, Réflexes Elfiques, Frénésie, Haine (Hauts Elfes), Horde, Solitaire, Meurtriers, Attaques Empoisonnées",
    opts: [],
    equip: [
      {name_fr: "Deux armes de base", name_en: "Two hand weapons", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Doyenne (champion)", name_en: "Hag (champion)", points: 7},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 7, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 7}
    ]
  },
  "har-ganeth-executioners": {
    id: "har-ganeth-executioners",
    army: "dark-elves",
    category: "special",
    name_fr: "Exécuteurs de Har Ganeth",
    name_en: "Har Ganeth Executioners",
    points: 15,
    specialRules: "Ordre Serré, Réflexes Elfiques, Haine (Hauts Elfes), Meurtriers, Vétérans",
    opts: [
      {name_fr: "Bien Entraînés", name_en: "Drilled", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Grandes épées d’Har Ganeth", name_en: "Hand weapons, Har Ganeth greatswords", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Maître du Draich (champion)", name_en: "Draich Master (champion)", points: 6, magic: {"types": ["weapon", "armor", "talisman", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "dark-elf-shades": {
    id: "dark-elf-shades",
    army: "dark-elves",
    category: "special",
    name_fr: "Ombres Elfes Noirs",
    name_en: "Dark Elf Shades",
    points: 15,
    specialRules: "Réflexes Elfiques, Esquiveur, Haine (Hauts Elfes), Mouvement à Couvert, Éclaireurs, Tirailleurs",
    opts: [
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 1, perModel: true},
      {name_fr: "Escorteurs de Chars", name_en: "Chariot Runners", points: 1, perModel: true},
      {name_fr: "Vétérans", name_en: "Veteran", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Arbalètes à répétition", name_en: "Hand weapons, Repeater crossbows", points: 0, active: true, perModel: true},
      {name_fr: "Armes de base, Arbalètes à répétition, Armes de base additionnelles", name_en: "Hand weapons, Repeater crossbows, Additional hand weapons", points: 1, active: false, perModel: true},
      {name_fr: "Armes de base, Arbalètes à répétition, Armes lourdes", name_en: "Hand weapons, Repeater crossbows, Great weapons", points: 2, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 1, active: false}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Ombre Sanglante (champion)", name_en: "Bloodshade (champion)", points: 6, magic: {"types": ["weapon", "armor", "talisman", "enchanted-item"], "maxPoints": 25}}
    ]
  },
  "harpies": {
    id: "harpies",
    army: "dark-elves",
    category: "special",
    name_fr: "Harpies",
    name_en: "Harpies",
    points: 11,
    specialRules: " Vol (10), Mouvement à Couvert, Éclaireurs, Tirailleurs, Rapide",
    opts: [],
    equip: [
      {name_fr: "Armes de base (Griffes)", name_en: "Hand weapons (Claws)", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "black-guard-of-naggarond": {
    id: "black-guard-of-naggarond",
    army: "dark-elves",
    category: "special",
    name_fr: "Garde Noire de Naggarond",
    name_en: "Black Guard of Naggarond",
    points: 15,
    specialRules: "Ordre Serré, Réflexes Elfiques, Haine Éternelle, Haine (Hauts Elfes), Immunisé à la Psychologie, Prouesses Martiales, Obstiné",
    opts: [
      {name_fr: "Bien Entraînés", name_en: "Drilled", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Hallebardes d’effroi", name_en: "Hand weapons, Dread halberds", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Maître de la Tour (champion)", name_en: "Tower Master (champion)", points: 7, magic: {"types": ["weapon", "armor", "talisman", "enchanted-item"], "maxPoints": 50}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 7, magic: {"types": ["banner"], "maxPoints": 100}},
      {name_fr: "Musicien", name_en: "Musician", points: 7}
    ]
  },
  "cold-one-knights": {
    id: "cold-one-knights",
    army: "dark-elves",
    category: "special",
    name_fr: "Chevaliers sur Sang-froid",
    name_en: "Cold One Knights",
    points: 31,
    specialRules: "Arme Perforante (1 - Sang-froid uniquement), Peau Blindée (1), Ordre Serré, Réflexes Elfiques, Peur, Première Charge, Haine (Hauts Elfes), Stupidité, Rapide",
    opts: [],
    equip: [
      {name_fr: "Armes de base, Lances de joute, Boucliers", name_en: "Hand weapons, Lances, Shields", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true},
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 4, active: false}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Chevalier d’Effroi (champion)", name_en: "Dread Knight (champion)", points: 7, magic: {"types": ["weapon", "armor", "talisman", "enchanted-item"], "maxPoints": 50}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 7, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 7}
    ]
  },
  "scourgerunner-chariots": {
    id: "scourgerunner-chariots",
    army: "dark-elves",
    category: "special",
    name_fr: "Chars à Courre",
    name_en: "Scourgerunner Chariots",
    points: 85,
    specialRules: "Réflexes Elfiques, Haine (Hauts Elfes), Touches d’Impact (D6), Ordre Dispersé, Cape en peau de Dragon des Mers, Rapide",
    opts: [],
    equip: [
      {name_fr: "Harpon ravageur*, Armes de base, Lances de cavalerie, Arbalètes à répétition", name_en: "Ravager harpoon*, Hand weapons, Cavalry spears, Repeater crossbows", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "5+", name_en: "5+", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: []
  },
  "cold-one-chariot": {
    id: "cold-one-chariot",
    army: "dark-elves",
    category: "special",
    name_fr: "Char à Sang-froid",
    name_en: "Cold One Chariot",
    points: 125,
    specialRules: "Arme Perforante (1 - Sang-froid uniquement), Ordre Serré, Réflexes Elfiques, Peur,  Première Charge, Haine (Hauts Elfes), Touches d’Impact (D6+1), Stupidité",
    opts: [],
    equip: [
      {name_fr: "Armes de base, Lances de cavalerie, Arbalètes à répétition", name_en: "Hand weapons, Cavalry spears, Repeater crossbows", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "4+", name_en: "4+", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: []
  },
  "war-hydra": {
    id: "war-hydra",
    army: "dark-elves",
    category: "special",
    name_fr: "Hydre de Guerre",
    name_en: "War Hydra",
    points: 200,
    specialRules: "Ordre Serré, Attaques Supplémentaires (+PV restants), Immunisé à la Psychologie, Grande Cible, Dresseurs de Monstres, Régénération (5+), Attaques de Piétinement (D3), Terreur",
    opts: [],
    equip: [
      {name_fr: "Griffes mortelles, Gueules dentelées, Souffle ardent, Armes de base, Fouets", name_en: "Wicked claws, Serrated maws {renegade}, Fiery breath {dark elves}, Hand weapons, Whips", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "5+", name_en: "5+", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: []
  },
  "kharibdyss": {
    id: "kharibdyss",
    army: "dark-elves",
    category: "special",
    name_fr: "Kharibdyss",
    name_en: "Kharibdyss",
    points: 195,
    specialRules: "Hurlement Abyssal, Ordre Serré, Immunisé à la Psychologie, Grande Cible, Dresseurs de Monstres, Attaques de Piétinement (D3+1), Terreur",
    opts: [],
    equip: [
      {name_fr: "Gueule caverneuse, Tentacules sinueux, Armes de base, Fouets", name_en: "Cavernous maw, Writhing tentacles {dark elves}, Hand weapons, Whips", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "5+", name_en: "5+", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: []
  },
  "king": {
    id: "king",
    army: "dwarfen-mountain-holds",
    category: "characters",
    name_fr: "Roi",
    name_en: "King",
    points: 125,
    specialRules: "Rancune Ancestrale, Facture Naine, Armure en Gromril, Armes en Gromril, Haine (Orques & Gobelins), Résistance à la Magie (-1), Cri de Ralliement, Résolu, Obstiné",
    opts: [
      {name_fr: "Pistolet", name_en: "Pistol", points: 5},
      {name_fr: "Bouclier", name_en: "Shield", points: 2}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false},
      {name_fr: "Arbalète", name_en: "Crossbow", points: 6, active: false},
      {name_fr: "Arquebuse", name_en: "Handgun", points: 6, active: false}
    ],
    armor: [
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Pierre de Serment", name_en: "Oathstone", points: 15},
      {name_fr: "Porteurs de Bouclier", name_en: "Shieldbearers", points: 60}
    ],
    magic: {items: [
      {name_fr: "Runes", name_en: "Runes", types: ["weapon-runes", "ranged-weapon-runes", "armor-runes", "talismanic-runes"], maxPoints: 125}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "thane": {
    id: "thane",
    army: "dwarfen-mountain-holds",
    category: "characters",
    name_fr: "Thane",
    name_en: "Thane",
    points: 60,
    specialRules: "Rancune Ancestrale, Facture Naine, Armure en Gromril, Armes en Gromril, Haine (Orques & Gobelins), Résistance à la Magie (-1), Cri de Ralliement, Résolu, Obstiné",
    opts: [
      {name_fr: "Pistolet", name_en: "Pistol", points: 5},
      {name_fr: "Bouclier", name_en: "Shield", points: 2}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false},
      {name_fr: "Arbalète", name_en: "Crossbow", points: 6, active: false},
      {name_fr: "Arquebuse", name_en: "Handgun", points: 6, active: false}
    ],
    armor: [
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Pierre de Serment", name_en: "Oathstone", points: 15},
      {name_fr: "Porteurs de Bouclier", name_en: "Shieldbearers", points: 60}
    ],
    magic: {items: [
      {name_fr: "Runes", name_en: "Runes", types: ["weapon-runes", "ranged-weapon-runes", "armor-runes", "talismanic-runes"], maxPoints: 75}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner-runes"], "maxPoints": 0, "maxItemsPerCategory": 3}}
    ]
  },
  "anvil-of-doom": {
    id: "anvil-of-doom",
    army: "dwarfen-mountain-holds",
    category: "characters",
    name_fr: "Enclume du Destin",
    name_en: "Anvil of Doom",
    points: 235,
    specialRules: "Bouclier Ancestral, Armure en Gromril, Armes en Gromril, Haine (Orques & Gobelins), Immunisé à la Psychologie, Résistance à la Magie (-3), Résolu, Savoir Runique, Tirailleurs, Frapper les Runes, Indémoralisable",
    opts: [],
    equip: [
      {name_fr: "Armes de base, Boucliers", name_en: "Hand weapons, Shields", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Runes", name_en: "Runes", types: ["weapon-runes", "armor-runes", "talismanic-runes"], maxPoints: 100}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "runelord": {
    id: "runelord",
    army: "dwarfen-mountain-holds",
    category: "characters",
    name_fr: "Seigneur Forgerune",
    name_en: "Runelord",
    points: 120,
    specialRules: "Arme Perforante (1), Forgefeu, Armure en Gromril, Armes en Gromril, Haine (Orques & Gobelins), Résistance à la Magie (-2), Résolu, Savoir Runique, Obstiné",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2},
      {name_fr: "Pierre de Serment", name_en: "Oathstone", points: 15}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true},
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 3, active: false}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Runes", name_en: "Runes", types: ["weapon-runes", "armor-runes", "talismanic-runes"], maxPoints: 125}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "runesmith": {
    id: "runesmith",
    army: "dwarfen-mountain-holds",
    category: "characters",
    name_fr: "Forgerune",
    name_en: "Runesmith",
    points: 65,
    specialRules: "Arme Perforante (1), Forgefeu, Armure en Gromril, Armes en Gromril, Haine (Orques & Gobelins), Résistance à la Magie (-2), Résolu, Savoir Runique, Obstiné",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2},
      {name_fr: "Pierre de Serment", name_en: "Oathstone", points: 15}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true},
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 3, active: false}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Runes", name_en: "Runes", types: ["weapon-runes", "armor-runes", "talismanic-runes"], maxPoints: 75}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner-runes"], "maxPoints": 0, "maxItemsPerCategory": 3}}
    ]
  },
  "daemon-slayer": {
    id: "daemon-slayer",
    army: "dwarfen-mountain-holds",
    category: "characters",
    name_fr: "Tueur de Démons",
    name_en: "Daemon Slayer",
    points: 130,
    specialRules: "Ultime Attaque, Armes en Gromril, Haine (Orques & Gobelins), Immunisé à la Psychologie, Coup Fatal, Solitaire, Résistance à la Magie (-2), Résolu, Tueur de Démons, Indémoralisable, Avant-garde",
    opts: [
      {name_fr: "Éclaireurs", name_en: "Scouts", points: 10}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false}
    ],
    armor: [],
    mounts: [],
    magic: {items: [
      {name_fr: "Runes d’Arme", name_en: "Weapon Runes", types: ["weapon-runes"], maxPoints: 100},
      {name_fr: "Runes de Talisman", name_en: "Talismanic Runes", types: ["talismanic-runes"], maxPoints: 25},
      {name_fr: "Tatouages Runiques", name_en: "Runic Tattoos", types: ["runic-tattoos"], maxPoints: 0}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "dragon-slayer": {
    id: "dragon-slayer",
    army: "dwarfen-mountain-holds",
    category: "characters",
    name_fr: "Tueur de Dragons",
    name_en: "Dragon Slayer",
    points: 70,
    specialRules: "Ultime Attaque, Armes en Gromril, Haine (Orques & Gobelins), Immunisé à la Psychologie, Coup Fatal, Solitaire, Résistance à la Magie (-2), Résolu, Tueur de Dragons, Indémoralisable, Avant-garde",
    opts: [
      {name_fr: "Éclaireurs", name_en: "Scouts", points: 10}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false}
    ],
    armor: [],
    mounts: [],
    magic: {items: [
      {name_fr: "Runes d’Arme", name_en: "Weapon Runes", types: ["weapon-runes"], maxPoints: 75},
      {name_fr: "Tatouages Runiques", name_en: "Runic Tattoos", types: ["runic-tattoos"], maxPoints: 0}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner-runes"], "maxPoints": 0, "maxItemsPerCategory": 3}}
    ]
  },
  "engineer": {
    id: "engineer",
    army: "dwarfen-mountain-holds",
    category: "characters",
    name_fr: "Ingénieur",
    name_en: "Engineer",
    points: 50,
    specialRules: "Maître de l’Artillerie, Facture Naine, Retranchement, Armure en Gromril, Haine (Orques & Gobelins), Résistance à la Magie (-1), Résolu, \"Restez en Retrait Chef\", Obstiné",
    opts: [
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4},
      {name_fr: "Arquebuse", name_en: "Handgun", points: 8},
      {name_fr: "Tireur d’Élite Expéditionnaire", name_en: "Expeditionary Marksman", points: 10}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true},
      {name_fr: "Pistolet", name_en: "Pistol", points: 6, active: false},
      {name_fr: "Plusieurs pistolets", name_en: "Brace of pistols", points: 10, active: false}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Runes", name_en: "Runes", types: ["weapon-runes", "ranged-weapon-runes", "armor-runes", "talismanic-runes"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner-runes"], "maxPoints": 0, "maxItemsPerCategory": 3}}
    ]
  },
  "engineer-sapper": {
    id: "engineer-sapper",
    army: "dwarfen-mountain-holds",
    category: "characters",
    name_fr: "Ingénieur Sapeur",
    name_en: "Engineer Sapper",
    points: 70,
    specialRules: "\"Creusez!\", Facture Naine, Armure en Gromril, Haine (Orques & Gobelins), Terrain Hostile, Résistance à la Magie (-1), Résolu, Obstiné",
    opts: [
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4},
      {name_fr: "Arquebuse", name_en: "Handgun", points: 8}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true},
      {name_fr: "Pistolet", name_en: "Pistol", points: 6, active: false},
      {name_fr: "Plusieurs pistolets", name_en: "Brace of pistols", points: 10, active: false}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Runes", name_en: "Runes", types: ["weapon-runes", "ranged-weapon-runes", "armor-runes", "talismanic-runes"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "thorgrim-ullekson": {
    id: "thorgrim-ullekson",
    army: "dwarfen-mountain-holds",
    category: "characters",
    name_fr: "Thorgrim Ulleksson",
    name_en: "Thorgrim Ulleksson",
    points: 250,
    specialRules: "Armure en Gromril, Science des Rancunes, Haine (Orques & Gobelins), Résistance à la Magie (-1), Cri de Ralliement, Résolu, Obstiné",
    opts: [],
    equip: [
      {name_fr: "Arme de base, Solde-Rancunes, La Pierre de Rancune", name_en: "Hand weapon, Grudge-settler, The Grudgestone", points: 0, active: true}
    ],
    armor: [
      {name_fr: "L’Armure de Skaldor, Bouclier", name_en: "The Armour of Skaldour, Shield", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "ungrim-ironfist": {
    id: "ungrim-ironfist",
    army: "dwarfen-mountain-holds",
    category: "characters",
    name_fr: "Ungrim Poing-de-Fer",
    name_en: "Ungrim Ironfist",
    points: 315,
    specialRules: "Ultime Attaque, Armure en Gromril, Haine (Orques & Gobelins), Immunisé à la Psychologie, Roi de la Forteresse des Tueurs, Résistance à la Magie (-2), Cri de Ralliement, Résolu, Tueur, Indémoralisable",
    opts: [],
    equip: [
      {name_fr: "Arme de base, La Hache de Dargo", name_en: "Hand weapon, The Axe of Dargo", points: 0, active: true}
    ],
    armor: [
      {name_fr: "La Couronne du Tueur, Armure légère", name_en: "The Slayer Crown, Light armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "burlok-damminson": {
    id: "burlok-damminson",
    army: "dwarfen-mountain-holds",
    category: "characters",
    name_fr: "Burlok Damminson",
    name_en: "Burlok Damminson",
    points: 85,
    specialRules: "Facture Naine, Armure en Gromril, Haine (Orques & Gobelins), Résistance à la Magie (-1), Positions Préparées, Instruments de Télémétrie, Résolu, \"Restez en Retrait Chef\", Obstiné",
    opts: [],
    equip: [
      {name_fr: "Marteau fournaise, Pistolet à rivets", name_en: "Furnace hammer, Rivet gun", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "dwarf-warriors": {
    id: "dwarf-warriors",
    army: "dwarfen-mountain-holds",
    category: "core",
    name_fr: "Guerriers Nains",
    name_en: "Dwarf Warriors",
    points: 8,
    specialRules: "Ordre Serré, Haine (Orques & Gobelins), Résistance à la Magie (-1), Résolu, Mur de Boucliers",
    opts: [
      {name_fr: "Armes lourdes", name_en: "Great weapons", points: 1, perModel: true},
      {name_fr: "Boucliers", name_en: "Shields", points: 1, perModel: true},
      {name_fr: "Bien Entraînés", name_en: "Drilled", points: 1, perModel: true},
      {name_fr: "Vétérans", name_en: "Veteran", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Vétéran (champion)", name_en: "Veteran (champion)", points: 5, magic: {"types": ["weapon-runes"], "maxPoints": 25, "maxItemsPerCategory": 3}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 5, magic: {"types": ["banner-runes"], "maxPoints": 50, "maxItemsPerCategory": 3, "armyComposition": {"royal-clan": {"maxPoints": 75}}}},
      {name_fr: "Musicien", name_en: "Musician", points: 5}
    ]
  },
  "royal-clan-warriors": {
    id: "royal-clan-warriors",
    army: "dwarfen-mountain-holds",
    category: "core",
    name_fr: "Guerriers des Clans Royaux",
    name_en: "Royal Clan Warriors",
    points: 10,
    specialRules: "Ordre Serré, Armure en Gromril, Armes en Gromril, Haine (Orques & Gobelins), Résistance à la Magie (-1), Résolu, Mur de Boucliers",
    opts: [
      {name_fr: "Bien Entraînés", name_en: "Drilled", points: 1, perModel: true},
      {name_fr: "Obstiné", name_en: "Stubborn", points: 1, perModel: true},
      {name_fr: "Vétérans", name_en: "Veteran", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Boucliers", name_en: "Hand weapons, Shields", points: 0, active: true, perModel: true},
      {name_fr: "Armes de base, Grandes haches de gromril", name_en: "Hand weapons, Gromril great axes", points: 1, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Vétéran des Clans Royaux", name_en: "Royal Clan Veteran", points: 6, magic: {"types": ["weapon-runes", "talismanic-runes"], "maxPoints": 50, "maxItemsPerCategory": 3}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner-runes"], "maxPoints": 75, "maxItemsPerCategory": 3}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "long-beards-core": {
    id: "long-beards-core",
    army: "dwarfen-mountain-holds",
    category: "core",
    name_fr: "Longues-barbes",
    name_en: "Longbeards",
    points: 12,
    specialRules: "Ordre Serré, Armes en Gromril, Haine (Orques & Gobelins), Résistance à la Magie (-1), Résolu, Mur de Boucliers, Vénérables, Vétérans",
    opts: [
      {name_fr: "Boucliers", name_en: "Shields", points: 1, perModel: true},
      {name_fr: "Bien Entraînés", name_en: "Drilled", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Armes lourdes", name_en: "Great weapons", points: 1, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Vieille-barbe (champion)", name_en: "Elder (champion)", points: 6, magic: {"types": ["weapon-runes", "talismanic-runes"], "maxPoints": 50, "maxItemsPerCategory": 3}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner-runes"], "maxPoints": 50, "maxItemsPerCategory": 3, "armyComposition": {"royal-clan": {"maxPoints": 75}}}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "quarrellers": {
    id: "quarrellers",
    army: "dwarfen-mountain-holds",
    category: "core",
    name_fr: "Arbalétriers",
    name_en: "Quarrellers",
    points: 9,
    specialRules: "Ordre Serré, Facture Naine, Haine (Orques & Gobelins), Résistance à la Magie (-1), Résolu",
    opts: [
      {name_fr: "Armes lourdes", name_en: "Great weapons", points: 2, perModel: true},
      {name_fr: "Boucliers", name_en: "Shields", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Arbalètes", name_en: "Hand weapons, Crossbows", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Vétéran (champion)", name_en: "Veteran (champion)", points: 5},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 5},
      {name_fr: "Musicien", name_en: "Musician", points: 5}
    ]
  },
  "thunderers": {
    id: "thunderers",
    army: "dwarfen-mountain-holds",
    category: "core",
    name_fr: "Arquebusiers",
    name_en: "Thunderers",
    points: 10,
    specialRules: "Ordre Serré, Facture Naine, Haine (Orques & Gobelins), Résistance à la Magie (-1), Résolu",
    opts: [
      {name_fr: "Armes lourdes", name_en: "Great weapons", points: 2, perModel: true},
      {name_fr: "Boucliers", name_en: "Shields", points: 1, perModel: true},
      {name_fr: "Tireurs d’Élite Expéditionnaires", name_en: "Expeditionary Marksmen", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Arquebuses", name_en: "Hand weapons, Handguns", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Vétéran (champion)", name_en: "Veteran (champion)", points: 5},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 5},
      {name_fr: "Musicien", name_en: "Musician", points: 5}
    ]
  },
  "rangers-core": {
    id: "rangers-core",
    army: "dwarfen-mountain-holds",
    category: "core",
    name_fr: "Rangers",
    name_en: "Rangers",
    points: 11,
    specialRules: "Facture Naine, Haine (Orques & Gobelins), Résistance à la Magie (-1), Mouvement à Couvert, Ordre Dispersé, Résolu, Éclaireurs, Tirailleurs",
    opts: [
      {name_fr: "Armes lourdes", name_en: "Great weapons", points: 2, perModel: true},
      {name_fr: "Boucliers", name_en: "Shields", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Arbalètes", name_en: "Hand weapons, Crossbows", points: 0, active: true, perModel: true},
      {name_fr: "Armes de base, Haches de lancer", name_en: "Hand weapons, Throwing axes", points: 0, active: false, perModel: true},
      {name_fr: "Armes de base, Arbalètes, Haches de lancer", name_en: "Hand weapons, Crossbows, Throwing axes", points: 1, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Baroudeur (champion)", name_en: "Ol' Deadeye (champion)", points: 6},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner-runes"], "maxPoints": 25, "maxItemsPerCategory": 3, "armyComposition": {"royal-clan": {"maxPoints": 50}}}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "scout-gyrocopters": {
    id: "scout-gyrocopters",
    army: "dwarfen-mountain-holds",
    category: "core",
    name_fr: "Gyrocoptères de Reconnaissance",
    name_en: "Scout Gyrocopters",
    points: 60,
    specialRules: "Formation Étendue, Tir & Fuite, Vol (10), Haine (Orques & Gobelins), Mitraillage au Sol, Touches d’Impact (D3), Résistance à la Magie (-1), Tirailleurs, Rapide, Avant-garde",
    opts: [],
    equip: [
      {name_fr: "Armes de base, Canon crépiteur", name_en: "Hand weapons, Clatterguns", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: []
  },
  "daemon-prince": {
    id: "daemon-prince",
    army: "daemons-of-chaos",
    category: "characters",
    name_fr: "Prince Démon",
    name_en: "Daemon Prince {daemons of chaos}",
    points: 210,
    specialRules: "Armure du Chaos, Démoniaque, Faveur Infernale (2), Domaine des Démons",
    opts: [
      {name_fr: "Vol (9)", name_en: "Fly (9)", points: 30},
      {name_fr: "Non aligné", name_en: "No daemonic alignment", points: 0, active: true},
      {name_fr: "Démon de Khorne", name_en: "Daemon of Khorne", points: 10},
      {name_fr: "Démon de Nurgle", name_en: "Daemon of Nurgle", points: 10},
      {name_fr: "Démon de Slaanesh", name_en: "Daemon of Slaanesh", points: 10},
      {name_fr: "Démon de Tzeentch", name_en: "Daemon of Tzeentch", points: 10}
    ],
    equip: [
      {name_fr: "Arme de base, Arme ensorcelée", name_en: "Hand weapon, Ensorcelled weapon", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 6, active: false}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Dons Démoniaques", name_en: "Daemonic Gifts", types: ["daemonic-gift-common", "daemonic-gift-khorne", "daemonic-gift-nurgle", "daemonic-gift-slaanesh", "daemonic-gift-tzeentch"], maxPoints: 100}
    ], lores: ["battle-magic", "daemonology", "dark-magic"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "chaos-lord": {
    id: "chaos-lord",
    army: "warriors-of-chaos",
    category: "characters",
    name_fr: "Seigneur du Chaos",
    name_en: "Chaos Lord",
    points: 195,
    specialRules: "Armure du Chaos (5+), Armes Ensorcelées, Regard des Dieux, Cri de Ralliement",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2},
      {name_fr: "Marque du Chaos", name_en: "Mark of Chaos", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false},
      {name_fr: "Fléau", name_en: "Flail", points: 3, active: false},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false},
      {name_fr: "Hallebarde", name_en: "Halberd", points: 3, active: false},
      {name_fr: "Lance de joute", name_en: "Lance", points: 4, active: false}
    ],
    armor: [
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier du Chaos", name_en: "Chaos Steed", points: 16},
      {name_fr: "Monture Démoniaque", name_en: "Daemonic Mount", points: 35},
      {name_fr: "Char du Chaos", name_en: "Chaos Chariot", points: 110},
      {name_fr: "Manticore", name_en: "Manticore {warriors of chaos}", points: 120},
      {name_fr: "Char Éventreur", name_en: "Gorebeast Chariot", points: 135},
      {name_fr: "Char du Chaos Élu", name_en: "Chosen Chaos Chariot", points: 140},
      {name_fr: "Dragon du Chaos", name_en: "Chaos Dragon", points: 285}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 100},
      {name_fr: "Dons du Chaos", name_en: "Gifts of Chaos", types: ["gift-of-chaos"], maxPoints: 50},
      {name_fr: "Traits Chaotiques", name_en: "Chaotic Traits", types: ["chaotic-trait"], maxPoints: 0}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "sorcerer-lord": {
    id: "sorcerer-lord",
    army: "warriors-of-chaos",
    category: "characters",
    name_fr: "Seigneur Sorcier",
    name_en: "Sorcerer Lord",
    points: 195,
    specialRules: "Armure du Chaos (5+), Armes Ensorcelées, Regard des Dieux, Domaine du Chaos",
    opts: [
      {name_fr: "Marque du Chaos", name_en: "Mark of Chaos", points: 0, active: true},
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier du Chaos", name_en: "Chaos Steed", points: 16},
      {name_fr: "Monture Démoniaque", name_en: "Daemonic Mount", points: 35},
      {name_fr: "Char du Chaos", name_en: "Chaos Chariot", points: 110},
      {name_fr: "Manticore", name_en: "Manticore {warriors of chaos}", points: 120},
      {name_fr: "Dragon du Chaos", name_en: "Chaos Dragon", points: 285}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "arcane-item", "enchanted-item"], maxPoints: 100},
      {name_fr: "Dons du Chaos", name_en: "Gifts of Chaos", types: ["gift-of-chaos"], maxPoints: 50},
      {name_fr: "Traits Chaotiques", name_en: "Chaotic Traits", types: ["chaotic-trait"], maxPoints: 0}
    ], lores: ["battle-magic", "daemonology", "dark-magic", "shadowlands"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "exalted-champion": {
    id: "exalted-champion",
    army: "warriors-of-chaos",
    category: "characters",
    name_fr: "Champion Exalté",
    name_en: "Exalted Champion",
    points: 125,
    specialRules: "Armure du Chaos (5+), Armes Ensorcelées, Regard des Dieux, Cri de Ralliement",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2},
      {name_fr: "Marque du Chaos", name_en: "Mark of Chaos", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false},
      {name_fr: "Fléau", name_en: "Flail", points: 3, active: false},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false},
      {name_fr: "Hallebarde", name_en: "Halberd", points: 3, active: false},
      {name_fr: "Lance de joute", name_en: "Lance", points: 4, active: false}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier du Chaos", name_en: "Chaos Steed", points: 16},
      {name_fr: "Monture Démoniaque", name_en: "Daemonic Mount", points: 35},
      {name_fr: "Char du Chaos", name_en: "Chaos Chariot", points: 110},
      {name_fr: "Manticore", name_en: "Manticore {warriors of chaos}", points: 120},
      {name_fr: "Char Éventreur", name_en: "Gorebeast Chariot", points: 135},
      {name_fr: "Char du Chaos Élu", name_en: "Chosen Chaos Chariot", points: 140},
      {name_fr: "Dragon du Chaos", name_en: "Chaos Dragon", points: 285}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 75},
      {name_fr: "Dons du Chaos", name_en: "Gifts of Chaos", types: ["gift-of-chaos"], maxPoints: 50},
      {name_fr: "Traits Chaotiques", name_en: "Chaotic Traits", types: ["chaotic-trait"], maxPoints: 0}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "exalted-sorcerer": {
    id: "exalted-sorcerer",
    army: "warriors-of-chaos",
    category: "characters",
    name_fr: "Sorcier Exalté",
    name_en: "Exalted Sorcerer",
    points: 90,
    specialRules: "Armure du Chaos (5+), Armes Ensorcelées, Regard des Dieux, Domaine du Chaos",
    opts: [
      {name_fr: "Marque du Chaos", name_en: "Mark of Chaos", points: 0, active: true},
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier du Chaos", name_en: "Chaos Steed", points: 16},
      {name_fr: "Monture Démoniaque", name_en: "Daemonic Mount", points: 35},
      {name_fr: "Char du Chaos", name_en: "Chaos Chariot", points: 110}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "arcane-item", "enchanted-item"], maxPoints: 50},
      {name_fr: "Dons du Chaos", name_en: "Gifts of Chaos", types: ["gift-of-chaos"], maxPoints: 50},
      {name_fr: "Traits Chaotiques", name_en: "Chaotic Traits", types: ["chaotic-trait"], maxPoints: 0}
    ], lores: ["battle-magic", "daemonology", "dark-magic", "shadowlands"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "aspiring-champion": {
    id: "aspiring-champion",
    army: "warriors-of-chaos",
    category: "characters",
    name_fr: "Aspirant Champion",
    name_en: "Aspiring Champion",
    points: 70,
    specialRules: "Armure du Chaos (5+), Armes Ensorcelées, Regard des Dieux, Cri de Ralliement",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2},
      {name_fr: "Marque du Chaos", name_en: "Mark of Chaos", points: 0, active: true},
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 10}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false},
      {name_fr: "Fléau", name_en: "Flail", points: 3, active: false},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false},
      {name_fr: "Hallebarde", name_en: "Halberd", points: 3, active: false},
      {name_fr: "Lance de joute", name_en: "Lance", points: 4, active: false}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier du Chaos", name_en: "Chaos Steed", points: 16},
      {name_fr: "Monture Démoniaque", name_en: "Daemonic Mount", points: 35},
      {name_fr: "Char du Chaos", name_en: "Chaos Chariot", points: 110},
      {name_fr: "Char Éventreur", name_en: "Gorebeast Chariot", points: 135},
      {name_fr: "Char du Chaos Élu", name_en: "Chosen Chaos Chariot", points: 140}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50},
      {name_fr: "Dons du Chaos", name_en: "Gifts of Chaos", types: ["gift-of-chaos"], maxPoints: 50},
      {name_fr: "Traits Chaotiques", name_en: "Chaotic Traits", types: ["chaotic-trait"], maxPoints: 0}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "marauder-tribe-chieftain": {
    id: "marauder-tribe-chieftain",
    army: "warriors-of-chaos",
    category: "characters",
    name_fr: "Chef de Tribu Maraudeur",
    name_en: "Marauder Tribe Chieftain",
    points: 65,
    specialRules: "Embusqueurs, Armure du Chaos (6+), Regard des Dieux, Marque du Chaos Universel, Cri de Ralliement, Bande de Guerre",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true},
      {name_fr: "Haches de lancer", name_en: "Throwing axes", points: 2, perModel: true},
      {name_fr: "Javelines", name_en: "Javelins", points: 2, perModel: true},
      {name_fr: "Marque du Chaos", name_en: "Mark of Chaos", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true},
      {name_fr: "Fléau", name_en: "Flail", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Cheval de Guerre", name_en: "Warhorse {warriors of chaos}", points: 14}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50},
      {name_fr: "Traits Chaotiques", name_en: "Chaotic Traits", types: ["chaotic-trait"], maxPoints: 0}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "beastlord": {
    id: "beastlord",
    army: "beastmen-brayherds",
    category: "characters",
    name_fr: "Seigneur des Bêtes",
    name_en: "Beastlord",
    points: 115,
    specialRules: "Rage Sanguinaire, Braillecorne (Général Uniquement), Déchiqueteur, Regard des Dieux, Marque du Chaos Universel, Fureur Primale, Bande de Guerre",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2},
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 10},
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 10}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false}
    ],
    armor: [
      {name_fr: "Pas d’armure", name_en: "No armour", points: 0, active: true},
      {name_fr: "Armure légère", name_en: "Light armour", points: 2, active: false},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 4, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Char à Sangleboucs", name_en: "Tuskgor Chariot", points: 85},
      {name_fr: "Char à Razorgors", name_en: "Razorgor Chariot", points: 120}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["enchanted-item", "talisman", "armor", "weapon"], maxPoints: 100},
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["enchanted-item", "talisman", "armor", "weapon"], maxPoints: 125},
      {name_fr: "Mutations du Chaos", name_en: "Chaos Mutations", types: ["chaos-mutation"], maxPoints: 50},
      {name_fr: "Mutations du Chaos", name_en: "Chaos Mutations", types: ["chaos-mutation"], maxPoints: 75}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "wargor": {
    id: "wargor",
    army: "beastmen-brayherds",
    category: "characters",
    name_fr: "Wargor",
    name_en: "Wargor",
    points: 55,
    specialRules: "Rage Sanguinaire, Braillecorne (Général Uniquement), Déchiqueteur, Regard des Dieux, Marque du Chaos Universel, Fureur Primale, Bande de Guerre",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2},
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 10},
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 10}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false}
    ],
    armor: [
      {name_fr: "Pas d’armure", name_en: "No armour", points: 0, active: true},
      {name_fr: "Armure légère", name_en: "Light armour", points: 2, active: false},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 4, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Char à Sangleboucs", name_en: "Tuskgor Chariot", points: 85},
      {name_fr: "Char à Razorgors", name_en: "Razorgor Chariot", points: 120}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["enchanted-item", "talisman", "armor", "weapon"], maxPoints: 50},
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["enchanted-item", "talisman", "armor", "weapon"], maxPoints: 75},
      {name_fr: "Mutations du Chaos", name_en: "Chaos Mutations", types: ["chaos-mutation"], maxPoints: 50},
      {name_fr: "Mutations du Chaos", name_en: "Chaos Mutations", types: ["chaos-mutation"], maxPoints: 75}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "great-bray-shaman": {
    id: "great-bray-shaman",
    army: "beastmen-brayherds",
    category: "characters",
    name_fr: "Grand Braillechamane",
    name_en: "Great Bray-Shaman",
    points: 150,
    specialRules: "Braillesceptre, Regard des Dieux, Domaine des Bêtes, Marque du Chaos Universel, Fureur Primale, Bande de Guerre",
    opts: [
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 10},
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Braillesceptre", name_en: "Braystaff", points: 0, active: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Char à Sangleboucs", name_en: "Tuskgor Chariot", points: 85},
      {name_fr: "Char à Razorgors", name_en: "Razorgor Chariot", points: 120}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["enchanted-item", "talisman", "armor-mages", "weapon", "arcane-item"], maxPoints: 100},
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["enchanted-item", "talisman", "armor-mages", "weapon", "arcane-item"], maxPoints: 125},
      {name_fr: "Mutations du Chaos", name_en: "Chaos Mutations", types: ["chaos-mutation"], maxPoints: 50},
      {name_fr: "Mutations du Chaos", name_en: "Chaos Mutations", types: ["chaos-mutation"], maxPoints: 75}
    ], lores: ["daemonology", "dark-magic", "elementalism"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "bray-shaman": {
    id: "bray-shaman",
    army: "beastmen-brayherds",
    category: "characters",
    name_fr: "Braillechamane",
    name_en: "Bray-Shaman",
    points: 65,
    specialRules: "Braillesceptre, Regard des Dieux, Domaine des Bêtes, Marque du Chaos Universel, Fureur Primale, Bande de Guerre",
    opts: [
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 10},
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Braillesceptre", name_en: "Braystaff", points: 0, active: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Char à Sangleboucs", name_en: "Tuskgor Chariot", points: 85},
      {name_fr: "Char à Razorgors", name_en: "Razorgor Chariot", points: 120}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["enchanted-item", "talisman", "armor-mages", "weapon", "arcane-item"], maxPoints: 50},
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["enchanted-item", "talisman", "armor-mages", "weapon", "arcane-item"], maxPoints: 75},
      {name_fr: "Mutations du Chaos", name_en: "Chaos Mutations", types: ["chaos-mutation"], maxPoints: 50},
      {name_fr: "Mutations du Chaos", name_en: "Chaos Mutations", types: ["chaos-mutation"], maxPoints: 75}
    ], lores: ["daemonology", "dark-magic", "elementalism"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "doombull": {
    id: "doombull",
    army: "beastmen-brayherds",
    category: "characters",
    name_fr: "Doombull",
    name_en: "Doombull",
    points: 210,
    specialRules: "Arme Perforante (1), Soif de Sang, Rage Sanguinaire, Taurogors, Peur, Déchiqueteur, Regard des Dieux, Touches d’Impact (1), Marque du Chaos Universel, Fureur Primale, Appel du Massacreur, Bande de Guerre",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 5},
      {name_fr: "Sorcier de Niveau 1", name_en: "Level 1 Wizard", points: 35},
      {name_fr: "Sorcier de Niveau 2", name_en: "Level 2 Wizard", points: 65}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false}
    ],
    armor: [
      {name_fr: "Pas d’armure", name_en: "No armour", points: 0, active: true},
      {name_fr: "Armure légère", name_en: "Light armour", points: 3, active: false},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 6, active: false}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["enchanted-item", "talisman", "armor", "weapon"], maxPoints: 100},
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["enchanted-item", "talisman", "armor", "weapon", "arcane-item"], maxPoints: 100},
      {name_fr: "Mutations du Chaos", name_en: "Chaos Mutations", types: ["chaos-mutation"], maxPoints: 50},
      {name_fr: "Mutations du Chaos / Dons du Chaos", name_en: "Chaos Mutations / Gifts of Chaos", types: ["chaos-mutation", "gift-of-chaos"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "gorebull": {
    id: "gorebull",
    army: "beastmen-brayherds",
    category: "characters",
    name_fr: "Gorebull",
    name_en: "Gorebull",
    points: 130,
    specialRules: "Arme Perforante (1), Soif de Sang, Rage Sanguinaire, Taurogors, Peur, Déchiqueteur, Regard des Dieux, Touches d’Impact (1), Marque du Chaos Universel, Fureur Primale, Appel du Massacreur, Bande de Guerre",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 5},
      {name_fr: "Sorcier de Niveau 1", name_en: "Level 1 Wizard", points: 35},
      {name_fr: "Sorcier de Niveau 2", name_en: "Level 2 Wizard", points: 65}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false}
    ],
    armor: [
      {name_fr: "Pas d’armure", name_en: "No armour", points: 0, active: true},
      {name_fr: "Armure légère", name_en: "Light armour", points: 3, active: false},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 6, active: false}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["enchanted-item", "talisman", "armor", "weapon"], maxPoints: 50},
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["enchanted-item", "talisman", "armor", "weapon", "arcane-item"], maxPoints: 50},
      {name_fr: "Mutations du Chaos", name_en: "Chaos Mutations", types: ["chaos-mutation"], maxPoints: 50},
      {name_fr: "Mutations du Chaos / Dons du Chaos", name_en: "Chaos Mutations / Gifts of Chaos", types: ["chaos-mutation", "gift-of-chaos"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "warhoof": {
    id: "warhoof",
    army: "beastmen-brayherds",
    category: "characters",
    name_fr: "Sabot-guerrier",
    name_en: "Warhoof",
    points: 75,
    specialRules: "Ivres, Cavalerie Rapide, Regard des Dieux, Marque du Chaos Universel, Mouvement à Couvert, Fureur Primale, Attaques de Piétinement (1), Rapide, Bande de Guerre",
    opts: [
      {name_fr: "Haches de lancer", name_en: "Throwing axes", points: 2},
      {name_fr: "Javelines", name_en: "Javelins", points: 2},
      {name_fr: "Bouclier", name_en: "Shield", points: 2},
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 10},
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 10}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 2, active: false},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false}
    ],
    armor: [
      {name_fr: "Pas d’armure", name_en: "No armour", points: 0, active: true},
      {name_fr: "Armure légère", name_en: "Light armour", points: 2, active: false},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 4, active: false}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["enchanted-item", "talisman", "armor", "weapon"], maxPoints: 50},
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["enchanted-item", "talisman", "armor", "weapon"], maxPoints: 75},
      {name_fr: "Mutations du Chaos", name_en: "Chaos Mutations", types: ["chaos-mutation"], maxPoints: 50},
      {name_fr: "Mutations du Chaos", name_en: "Chaos Mutations", types: ["chaos-mutation"], maxPoints: 75}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "kralmaw": {
    id: "kralmaw",
    army: "beastmen-brayherds",
    category: "characters",
    name_fr: "Kralmaw",
    name_en: "Kralmaw",
    points: 245,
    specialRules: "Braillesceptre, Vision du Futur, Regard des Dieux, Esprit Malin, Domaine des Bêtes, Marque du Chaos Universel, Fureur Primale, Bande de Guerre",
    opts: [
      {name_fr: "Sorcier de Niveau 4", name_en: "Level 4 Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base, Totem d’Épouvante", name_en: "Hand weapon, Grisly Totem", points: 0, active: true}
    ],
    armor: [],
    mounts: [],
    magic: {items: [], lores: ["dark-magic", "primal-magic"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "ghorros": {
    id: "ghorros",
    army: "beastmen-brayherds",
    category: "characters",
    name_fr: "Ghorros",
    name_en: "Ghorros",
    points: 155,
    specialRules: "Ivres, Père des Bêtes, Regard des Dieux, Marque du Chaos Universel, Mouvement à Couvert, Fureur Primale, Attaques de Piétinement (D3), Rapide, Les Fils de Ghorros, Bande de Guerre",
    opts: [],
    equip: [
      {name_fr: "Arme de base, Écrase-Hommes, Le Crâne du Seigneur Licorne", name_en: "Hand weapon, Mansmasher, The Skull of the Unicorn Lord", points: 0, active: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "primal-warherd": {
    id: "primal-warherd",
    army: "beastmen-brayherds",
    category: "core",
    name_fr: "Harde de Guerre Primordiale",
    name_en: "Primal Warherd",
    points: 0,
    specialRules: "Charge Bestiale (Gors uniquement), Rage Sanguinaire, Ordre Serré, Horde, Impétueux, Marque du Chaos Universel, Unité Mixte, Bande Hétéroclite, Mouvement à Couvert, Fureur Primale, Bande de Guerre",
    opts: [],
    equip: [],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Déchiqueteur (champion)", name_en: "Foe-render (champion)", points: 7, magic: {"types": ["weapon", "armor", "talisman", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 5, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 5}
    ]
  },
  "gors": {
    id: "gors",
    army: "beastmen-brayherds",
    category: "core",
    name_fr: "Gors",
    name_en: "Gors",
    points: 6,
    specialRules: "",
    opts: [],
    equip: [],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "ungors": {
    id: "ungors",
    army: "beastmen-brayherds",
    category: "core",
    name_fr: "Ungors",
    name_en: "Ungors",
    points: 6,
    specialRules: "",
    opts: [],
    equip: [],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "bestigor-herds-core": {
    id: "bestigor-herds-core",
    army: "beastmen-brayherds",
    category: "core",
    name_fr: "Harde de Bestigor",
    name_en: "Bestigor Herd",
    points: 13,
    specialRules: "Rage Sanguinaire, Ordre Serré, Marque du Chaos Universel, Fureur Primale, Bande de Guerre",
    opts: [
      {name_fr: "Obstiné", name_en: "Stubborn", points: 1, perModel: true},
      {name_fr: "Vétérans", name_en: "Veteran", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Armes lourdes", name_en: "Hand weapons, Great weapons", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Encorneur (champion)", name_en: "Gouge-horn (champion)", points: 8, magic: {"types": ["enchanted-item", "talisman", "armor", "weapon", "chaos-mutation"], "maxPoints": 50}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "gor-herd": {
    id: "gor-herd",
    army: "beastmen-brayherds",
    category: "core",
    name_fr: "Harde de Gor",
    name_en: "Gor Herd",
    points: 7,
    specialRules: "Charge Bestiale, Rage Sanguinaire, Horde, Marque du Chaos Universel, Mouvement à Couvert, Ordre Dispersé, Fureur Primale, Tirailleurs, Bande de Guerre",
    opts: [
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 1, perModel: true},
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 1, perModel: true},
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 0, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Armes de base additionnelles", name_en: "Hand weapons, Additional hand weapons", points: 0, active: true, perModel: true},
      {name_fr: "Armes de base, Boucliers", name_en: "Hand weapons, Shields", points: 0, active: false, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Pure-corne (champion)", name_en: "True-horn (champion)", points: 7, magic: {"types": ["weapon", "armor", "talisman", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 5, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 5}
    ]
  },
  "ungor-herd": {
    id: "ungor-herd",
    army: "beastmen-brayherds",
    category: "core",
    name_fr: "Harde d’Ungor",
    name_en: "Ungor Herd",
    points: 5,
    specialRules: "Escorteurs de Chars, Horde, Marque du Chaos Universel, Mouvement à Couvert, Ordre Dispersé, Fureur Primale, Tirailleurs, Bande de Guerre",
    opts: [
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 1, perModel: true},
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 1, perModel: true},
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 0, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Boucliers", name_en: "Hand weapons, Shields", points: 0, active: true, perModel: true},
      {name_fr: "Lances d’infanterie, Boucliers", name_en: "Thrusting spears, Shields", points: 1, active: false, perModel: true},
      {name_fr: "Javelots, Boucliers", name_en: "Throwing spears, Shields", points: 1, active: false, perModel: true},
      {name_fr: "Arcs courts", name_en: "Shortbows", points: 0, active: false, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Mi-corne (champion)", name_en: "Half-horn (champion)", points: 7},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 5},
      {name_fr: "Musicien", name_en: "Musician", points: 5}
    ]
  },
  "warhounds": {
    id: "warhounds",
    army: "beastmen-brayherds",
    category: "core",
    name_fr: "Chiens du Chaos",
    name_en: "Chaos Warhounds",
    points: 6,
    specialRules: "Solitaire, Mouvement à Couvert, Ordre Dispersé, Rapide",
    opts: [
      {name_fr: "Peau Blindée (1)", name_en: "Armoured Hide (1)", points: 1, perModel: true},
      {name_fr: "Attaques Empoisonnées", name_en: "Poisoned Attacks", points: 1, perModel: true},
      {name_fr: "Avant-garde", name_en: "Vanguard", points: 5}
    ],
    equip: [
      {name_fr: "Armes de base (Griffes et crocs)", name_en: "Hand weapons (Claws and fangs)", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "bloodthirster": {
    id: "bloodthirster",
    army: "daemons-of-chaos",
    category: "characters",
    name_fr: "Buveur de Sang",
    name_en: "Bloodthirster",
    points: 355,
    specialRules: "Démoniaque, Charge Démoniaque, Démon de Khorne, Vol (10), Charge Dévastatrice, Touches d’Impact (D3), Impétueux, Faveur Infernale (2), Grande Cible, Résistance à la Magie (-2), Terreur",
    opts: [
      {name_fr: "Fléau de Sang", name_en: "Bloodflail", points: 25, perModel: true},
      {name_fr: "Grande Hache", name_en: "Great axe", points: 35, perModel: true},
      {name_fr: "Fouet de Khorne", name_en: "Lash of Khorne", points: 15, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Dons Démoniaques", name_en: "Daemonic Gifts", types: ["daemonic-gift-common", "daemonic-gift-khorne"], maxPoints: 100}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "daemonic-herald-of-khorne": {
    id: "daemonic-herald-of-khorne",
    army: "daemons-of-chaos",
    category: "characters",
    name_fr: "Héraut Démoniaque de Khorne",
    name_en: "Daemonic Herald of Khorne",
    points: 80,
    specialRules: "Démoniaque, Démon de Khorne, Charge Dévastatrice, Impétueux, Faveur Infernale (1), Résistance à la Magie (-1)",
    opts: [],
    equip: [
      {name_fr: "Lame Infernale", name_en: "Hellblade", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Armure légère (cuir calleux)", name_en: "Light armour (calloused hides)", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Juggernaut de Khorne", name_en: "Juggernaut of Khorne", points: 50},
      {name_fr: "Trône de Sang de Khorne", name_en: "Blood Throne of Khorne", points: 160}
    ],
    magic: {items: [
      {name_fr: "Dons Démoniaques", name_en: "Daemonic Gifts", types: ["daemonic-gift-common", "daemonic-gift-khorne"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Locus Démoniaque (Porteur de la Grande Bannière)", name_en: "Daemonic Locus (Battle Standard Bearer)", points: 25, magic: {"types": ["daemonic-icon-common", "daemonic-icon-khorne"], "maxPoints": 0}}
    ]
  },
  "great-unclean-one": {
    id: "great-unclean-one",
    army: "daemons-of-chaos",
    category: "characters",
    name_fr: "Grand Immonde",
    name_en: "Great Unclean One",
    points: 330,
    specialRules: "Démoniaque, Démon de Nurgle, Faveur Infernale (2), Grande Cible, Domaine des Démons, Attaques Empoisonnées, Régénération (5+), Attaques de Piétinement (D3+1), Terreur",
    opts: [
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 6, perModel: true},
      {name_fr: "Épée bilieuse", name_en: "Bilesword", points: 10, perModel: true},
      {name_fr: "Fléau pestilentiel", name_en: "Plagueflail", points: 25, perModel: true},
      {name_fr: "Sorcier de Niveau 2", name_en: "Level 2 Wizard", points: 30}, {name_fr: "Sorcier de Niveau 3", name_en: "Level 3 Wizard", points: 60}, {name_fr: "Sorcier de Niveau 4", name_en: "Level 4 Wizard", points: 90}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: {items: [
      {name_fr: "Dons Démoniaques", name_en: "Daemonic Gifts", types: ["daemonic-gift-common", "daemonic-gift-nurgle"], maxPoints: 100}
    ], lores: ["daemonology", "battle-magic", "dark-magic"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "daemonic-herald-of-nurgle": {
    id: "daemonic-herald-of-nurgle",
    army: "daemons-of-chaos",
    category: "characters",
    name_fr: "Héraut Démoniaque de Nurgle",
    name_en: "Daemonic Herald of Nurgle",
    points: 95,
    specialRules: "Démoniaque, Démon de Nurgle, Faveur Infernale (1), Domaine des Démons, Attaques Empoisonnées, Régénération (6+)",
    opts: [
      {name_fr: "Têtes de morts", name_en: "Death's heads", points: 10, perModel: true},
      {name_fr: "Sorcier de Niveau 1", name_en: "Level 1 Wizard", points: 30},
      {name_fr: "Sorcier de Niveau 2", name_en: "Level 2 Wizard", points: 60}
    ],
    equip: [
      {name_fr: "Épée pestilentielle", name_en: "Plaguesword", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Palanquin de Nurgle", name_en: "Palanquin of Nurgle", points: 40}
    ],
    magic: {items: [
      {name_fr: "Dons Démoniaques", name_en: "Daemonic Gifts", types: ["daemonic-gift-common", "daemonic-gift-nurgle"], maxPoints: 50}
    ], lores: ["daemonology", "dark-magic", "battle-magic"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Locus Démoniaque (Porteur de la Grande Bannière)", name_en: "Daemonic Locus (Battle Standard Bearer)", points: 25, magic: {"types": ["daemonic-icon-common", "daemonic-icon-nurgle"], "maxPoints": 0}}
    ]
  },
  "keeper-of-secrets": {
    id: "keeper-of-secrets",
    army: "daemons-of-chaos",
    category: "characters",
    name_fr: "Gardien des Secrets",
    name_en: "Keeper of Secrets",
    points: 330,
    specialRules: "Démoniaque, Démon de Slaanesh, Faveur Infernale (2), Grande Cible, Domaine des Démons, Attaques de Piétinement (D3), Rapide, Terreur",
    opts: [
      {name_fr: "Sorcier de Niveau 2", name_en: "Level 2 Wizard", points: 30}, {name_fr: "Sorcier de Niveau 3", name_en: "Level 3 Wizard", points: 60}, {name_fr: "Sorcier de Niveau 4", name_en: "Level 4 Wizard", points: 90}
    ],
    equip: [
      {name_fr: "Pinces empaleuses", name_en: "Impaling claws", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: {items: [
      {name_fr: "Dons Démoniaques", name_en: "Daemonic Gifts", types: ["daemonic-gift-common", "daemonic-gift-slaanesh"], maxPoints: 100}
    ], lores: ["dark-magic", "daemonology", "illusion"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "daemon-prince-daemons-of-chaos": {
    id: "daemon-prince-daemons-of-chaos",
    army: "daemons-of-chaos",
    category: "characters",
    name_fr: "Prince Démon",
    name_en: "Daemon Prince",
    points: 210,
    specialRules: "Démoniaque, Faveur Infernale (2), Armure du Chaos, Domaine des Démons",
    opts: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 6},
      {name_fr: "Vol (9)", name_en: "Fly (9)", points: 30},
      {name_fr: "Démon de Khorne", name_en: "Daemon of Khorne", points: 10},
      {name_fr: "Démon de Nurgle", name_en: "Daemon of Nurgle", points: 10},
      {name_fr: "Démon de Slaanesh", name_en: "Daemon of Slaanesh", points: 10},
      {name_fr: "Démon de Tzeentch", name_en: "Daemon of Tzeentch", points: 10},
      {name_fr: "Sorcier de Niveau 1", name_en: "Level 1 Wizard", points: 25},
      {name_fr: "Sorcier de Niveau 2", name_en: "Level 2 Wizard", points: 50},
      {name_fr: "Sorcier de Niveau 3", name_en: "Level 3 Wizard", points: 75},
      {name_fr: "Sorcier de Niveau 4", name_en: "Level 4 Wizard", points: 100}
    ],
    equip: [],
    armor: [],
    mounts: [],
    magic: {items: [
      {name_fr: "Dons Démoniaques", name_en: "Daemonic Gifts", types: ["daemonic-gift-common", "daemonic-gift-khorne", "daemonic-gift-nurgle", "daemonic-gift-slaanesh", "daemonic-gift-tzeentch"], maxPoints: 100}
    ], lores: ["battle-magic", "daemonology", "dark-magic", "elementalism", "illusion"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "daemonic-herald-of-slaanesh": {
    id: "daemonic-herald-of-slaanesh",
    army: "daemons-of-chaos",
    category: "characters",
    name_fr: "Héraut Démoniaque de Slaanesh",
    name_en: "Daemonic Herald of Slaanesh",
    points: 85,
    specialRules: "Démoniaque, Démon de Slaanesh, Faveur Infernale (1), Domaine des Démons",
    opts: [
      {name_fr: "Sorcier de Niveau 1", name_en: "Level 1 Wizard", points: 30},
      {name_fr: "Sorcier de Niveau 2", name_en: "Level 2 Wizard", points: 60}
    ],
    equip: [
      {name_fr: "Pinces perforantes", name_en: "Piercing claws", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Monture de Slaanesh", name_en: "Steed of Slaanesh", points: 16},
      {name_fr: "Char Traqueur de Slaanesh", name_en: "Seeker Chariot of Slaanesh", points: 100},
      {name_fr: "Char Traqueur Exalté", name_en: "Exalted Seeker Chariot of Slaanesh", points: 185}
    ],
    magic: {items: [
      {name_fr: "Dons Démoniaques", name_en: "Daemonic Gifts", types: ["daemonic-gift-common", "daemonic-gift-slaanesh"], maxPoints: 50}
    ], lores: ["daemonology", "dark-magic", "illusion"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Locus Démoniaque (Porteur de la Grande Bannière)", name_en: "Daemonic Locus (Battle Standard Bearer)", points: 25, magic: {"types": ["daemonic-icon-common", "daemonic-icon-slaanesh"], "maxPoints": 0}}
    ]
  },
  "lord-of-change": {
    id: "lord-of-change",
    army: "daemons-of-chaos",
    category: "characters",
    name_fr: "Duc du Changement",
    name_en: "Lord of Change",
    points: 310,
    specialRules: "Démoniaque, Démon de Tzeentch, Attaques Enflammées, Vol (9), Faveur Infernale (2), Grande Cible, Domaine des Démons, Attaques de Piétinement (D3), Rapide, Terreur",
    opts: [
      {name_fr: "Baguette de Tzeentch", name_en: "Tzeentchian Wand", points: 20, perModel: true},
      {name_fr: "Sorcier de Niveau 3", name_en: "Level 3 Wizard", points: 30}, {name_fr: "Sorcier de Niveau 4", name_en: "Level 4 Wizard", points: 60}
    ],
    equip: [
      {name_fr: "Arme de base, Arme lourde (Bâton de Tzeentch)", name_en: "Hand weapon, Great weapon (Staff of Tzeentch)", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: {items: [
      {name_fr: "Dons Démoniaques", name_en: "Daemonic Gifts", types: ["daemonic-gift-common", "daemonic-gift-tzeentch"], maxPoints: 100}
    ], lores: ["daemonology", "dark-magic", "elementalism", "battle-magic", "illusion"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "daemonic-herald-of-tzeentch": {
    id: "daemonic-herald-of-tzeentch",
    army: "daemons-of-chaos",
    category: "characters",
    name_fr: "Héraut Démoniaque de Tzeentch",
    name_en: "Daemonic Herald of Tzeentch",
    points: 90,
    specialRules: "Démoniaque, Démon de Tzeentch, Faveur Infernale (1), Domaine des Démons",
    opts: [
      {name_fr: "Sorcier de Niveau 2", name_en: "Level 2 Wizard", points: 30}, {name_fr: "Sorcier de Niveau 3", name_en: "Level 3 Wizard", points: 60}
    ],
    equip: [
      {name_fr: "Arme de base, Flammes de Tzeentch", name_en: "Hand weapon, Flames of Tzeentch", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Disque de Tzeentch", name_en: "Disc of Tzeentch", points: 20},
      {name_fr: "Char de Tzeentch", name_en: "Chariot of Tzeentch", points: 90},
      {name_fr: "Char Incendiaire de Tzeentch", name_en: "Burning Chariot of Tzeentch", points: 190}
    ],
    magic: {items: [
      {name_fr: "Dons Démoniaques", name_en: "Daemonic Gifts", types: ["daemonic-gift-common", "daemonic-gift-tzeentch"], maxPoints: 50}
    ], lores: ["daemonology", "dark-magic", "elementalism", "battle-magic", "illusion"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Locus Démoniaque (Porteur de la Grande Bannière)", name_en: "Daemonic Locus (Battle Standard Bearer)", points: 25, magic: {"types": ["daemonic-icon-common", "daemonic-icon-tzeentch"], "maxPoints": 0}}
    ]
  },
  "daemonettes-of-slaanesh": {
    id: "daemonettes-of-slaanesh",
    army: "daemons-of-chaos",
    category: "core",
    name_fr: "Démonettes de Slaanesh",
    name_en: "Daemonettes of Slaanesh",
    points: 11,
    specialRules: "Ordre Serré, Démoniaque, Démons de Slaanesh",
    opts: [],
    equip: [
      {name_fr: "Pinces perforantes", name_en: "Piercing claws", points: 0, active: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Tentatrice (champion)", name_en: "Alluress (champion)", points: 6},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["daemonic-icon-slaanesh"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "seekers-of-slaanesh-core": {
    id: "seekers-of-slaanesh-core",
    army: "daemons-of-chaos",
    category: "core",
    name_fr: "Veneuses de Slaanesh",
    name_en: "Seekers of Slaanesh",
    points: 21,
    specialRules: "Arme Perforante (1 - Monture de Slaanesh uniquement), Contre-charge, Démoniaque, Démon de Slaanesh, Cavalerie Rapide, Ordre Dispersé, Attaques Empoisonnées (Monture de Slaanesh uniquement), Tirailleurs, Rapide",
    opts: [],
    equip: [
      {name_fr: "Pinces perforantes, Armes de base (Griffes et crocs)", name_en: "Piercing claws, Hand weapons (Claws and fangs)", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Accroche-cœur (champion)", name_en: "Heartseeker (champion)", points: 6},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["daemonic-icon-slaanesh"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "black-orc-warboss": {
    id: "black-orc-warboss",
    army: "chaos-dwarfs",
    category: "characters",
    name_fr: "Chef de Guerre Orque Noir",
    name_en: "Black Orc Warboss",
    points: 135,
    specialRules: "Kikoup’, Lé Boyz, Charge Dévastatrice, Ignore la Panique, Calme l’Impétuosité, Cri de Ralliement, Waaagh!",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 2, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Sanglier", name_en: "War Boar", points: 16},
      {name_fr: "Char à Sangliers", name_en: "Boar Chariot", points: 90},
      {name_fr: "Char à Sangliers Orque Noir", name_en: "Black Orc Boar Chariot", points: 130},
      {name_fr: "Vouivre", name_en: "Wyvern", points: 130}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 100}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "black-orc-bigboss": {"id":"black-orc-bigboss","army":"chaos-dwarfs","category":"characters","name_fr":"Grand Chef Orque Noir","name_en":"Black Orc Bigboss","points":75,"specialRules":"Kikoup’, Lé Boyz, Charge Dévastatrice, Ignore la Panique, Calme l’Impétuosité, Cri de Ralliement, Waaagh!","opts":[{"name_fr":"Bouclier","name_en":"Shield","points":2,"perModel":true}],"equip":[{"name_fr":"Arme de base","name_en":"Hand weapon","points":0,"active":true,"perModel":true},{"name_fr":"Arme de base additionnelle","name_en":"Additional hand weapon","points":3,"active":false,"perModel":true},{"name_fr":"Arme lourde","name_en":"Great weapon","points":4,"active":false,"perModel":true},{"name_fr":"Lance de cavalerie","name_en":"Cavalry spear","points":2,"active":false,"perModel":true}],"armor":[{"name_fr":"Armure de plate complète","name_en":"Full plate armour","points":0,"active":true}],"mounts":[{"name_fr":"À Pied","name_en":"On foot","points":0,"active":true},{"name_fr":"Sanglier","name_en":"War Boar","points":16},{"name_fr":"Char à Sangliers","name_en":"Boar Chariot","points":90},{"name_fr":"Char à Sangliers Orque Noir","name_en":"Black Orc Boar Chariot","points":130}],"magic":{"items":[{"name_fr":"Objets Magiques","name_en":"Magic Items","types":["weapon","armor","talisman","enchanted-item"],"maxPoints":50}],"lores":[]},"command":[{"name_fr":"Général","name_en":"General","points":0},{"name_fr":"Porteur de la Grande Bannière","name_en":"Battle Standard Bearer","points":25}]},
  "orc-warboss": {
    id: "orc-warboss",
    army: "orc-and-goblin-tribes",
    category: "characters",
    name_fr: "Chef de Guerre Orque",
    name_en: "Orc Warboss",
    points: 110,
    specialRules: "Kikoup’, Charge Dévastatrice (ne s’applique pas à la monture), Ignore la Panique des Gobelins, Impétueux, Cri de Ralliement, Waaagh!, Bande de Guerre",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true},
      {name_fr: "Peintures de Guerre", name_en: "Warpaint", points: 5, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 2, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 3, active: false},
      {name_fr: "Frénésie", name_en: "Frenzy", points: 3, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Sanglier", name_en: "War Boar", points: 16},
      {name_fr: "Char à Sangliers", name_en: "Boar Chariot", points: 90},
      {name_fr: "Vouivre", name_en: "Wyvern", points: 130}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 100}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "orc-bigboss": {
    id: "orc-bigboss",
    army: "orc-and-goblin-tribes",
    category: "characters",
    name_fr: "Grand Chef Orque",
    name_en: "Orc Bigboss",
    points: 55,
    specialRules: "Kikoup’, Charge Dévastatrice (ne s’applique pas à la monture), Ignore la Panique des Gobelins, Impétueux, Cri de Ralliement, Waaagh!, Bande de Guerre",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true},
      {name_fr: "Peintures de Guerre", name_en: "Warpaint", points: 5, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 2, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 3, active: false},
      {name_fr: "Frénésie", name_en: "Frenzy", points: 3, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Sanglier", name_en: "War Boar", points: 16},
      {name_fr: "Char à Sangliers", name_en: "Boar Chariot", points: 90}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "orc-weirdnob": {
    id: "orc-weirdnob",
    army: "orc-and-goblin-tribes",
    category: "characters",
    name_fr: "Bizarnob Orque",
    name_en: "Orc Weirdnob",
    points: 140,
    specialRules: "Kikoup’, Ignore la Panique des Gobelins, Domaine de Gork, La Loi du Nombre, Bande de Guerre",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true},
      {name_fr: "Peintures de Guerre", name_en: "Warpaint", points: 5, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Frénésie", name_en: "Frenzy", points: 0, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Sanglier", name_en: "War Boar", points: 16},
      {name_fr: "Vouivre", name_en: "Wyvern", points: 130}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "talisman", "arcane-item", "enchanted-item"], maxPoints: 100}
    ], lores: ["battle-magic", "elementalism", "waaagh-magic", "troll-magic"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "orc-weirdboy": {
    id: "orc-weirdboy",
    army: "orc-and-goblin-tribes",
    category: "characters",
    name_fr: "Bizarboy Orque",
    name_en: "Orc Weirdboy",
    points: 65,
    specialRules: "Kikoup’, Ignore la Panique des Gobelins, Domaine de Gork, La Loi du Nombre, Bande de Guerre",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true},
      {name_fr: "Peintures de Guerre", name_en: "Warpaint", points: 5, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Frénésie", name_en: "Frenzy", points: 0, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Sanglier", name_en: "War Boar", points: 16}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "talisman", "arcane-item", "enchanted-item"], maxPoints: 50}
    ], lores: ["battle-magic", "elementalism", "waaagh-magic", "troll-magic"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "goblin-warboss": {
    id: "goblin-warboss",
    army: "orc-and-goblin-tribes",
    category: "characters",
    name_fr: "Chef de Guerre Gobelin",
    name_en: "Goblin Warboss",
    points: 60,
    specialRules: "Peur des Elfes, Impétueux, Cri de Ralliement, Bande de Guerre",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 2, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 3, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Loup Géant", name_en: "Giant Wolf", points: 10},
      {name_fr: "Araignée Géante", name_en: "Gigantic Spider", points: 35},
      {name_fr: "Char à Loups", name_en: "Wolf Chariot", points: 53}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 100}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "goblin-bigboss": {
    id: "goblin-bigboss",
    army: "orc-and-goblin-tribes",
    category: "characters",
    name_fr: "Grand Chef Gobelin",
    name_en: "Goblin Bigboss",
    points: 35,
    specialRules: "Peur des Elfes, Impétueux, Cri de Ralliement, Bande de Guerre",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 2, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 3, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Loup Géant", name_en: "Giant Wolf", points: 10},
      {name_fr: "Araignée Géante", name_en: "Gigantic Spider", points: 35},
      {name_fr: "Char à Loups", name_en: "Wolf Chariot", points: 53}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "goblin-oddnob": {
    id: "goblin-oddnob",
    army: "orc-and-goblin-tribes",
    category: "characters",
    name_fr: "Zarbnob Gobelin",
    name_en: "Goblin Oddnob",
    points: 135,
    specialRules: "Peur des Elfes, Domaine de Mork, Bande de Guerre",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Loup Géant", name_en: "Giant Wolf", points: 10},
      {name_fr: "Char à Loups", name_en: "Wolf Chariot", points: 53},
      {name_fr: "Arachnarok", name_en: "Arachnarok Spider", points: 310}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "talisman", "arcane-item", "enchanted-item"], maxPoints: 100}
    ], lores: ["elementalism", "waaagh-magic", "troll-magic"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "goblin-oddgit": {
    id: "goblin-oddgit",
    army: "orc-and-goblin-tribes",
    category: "characters",
    name_fr: "Zarbzig Gobelin",
    name_en: "Goblin Oddgit",
    points: 60,
    specialRules: "Peur des Elfes, Domaine de Mork, Bande de Guerre",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Loup Géant", name_en: "Giant Wolf", points: 10},
      {name_fr: "Char à Loups", name_en: "Wolf Chariot", points: 53}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "talisman", "arcane-item", "enchanted-item"], maxPoints: 50}
    ], lores: ["elementalism", "waaagh-magic", "troll-magic"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "night-goblin-warboss": {
    id: "night-goblin-warboss",
    army: "orc-and-goblin-tribes",
    category: "characters",
    name_fr: "Chef de Guerre Gobelin de la Nuit",
    name_en: "Night Goblin Warboss",
    points: 55,
    specialRules: "Peur des Elfes, Haine (Nains), Cri de Ralliement, Bande de Guerre",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 2, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 3, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Squig des Cavernes Géant", name_en: "Giant Cave Squig", points: 25}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 100}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "night-goblin-bigboss": {
    id: "night-goblin-bigboss",
    army: "orc-and-goblin-tribes",
    category: "characters",
    name_fr: "Grand Chef Gobelin de la Nuit",
    name_en: "Night Goblin Bigboss",
    points: 30,
    specialRules: "Peur des Elfes, Haine (Nains), Cri de Ralliement, Bande de Guerre",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 2, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 3, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Squig des Cavernes Géant", name_en: "Giant Cave Squig", points: 25}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "night-goblin-oddnob": {
    id: "night-goblin-oddnob",
    army: "orc-and-goblin-tribes",
    category: "characters",
    name_fr: "Zarbnob Gobelin de la Nuit",
    name_en: "Night Goblin Oddnob",
    points: 130,
    specialRules: "Peur des Elfes, Haine (Nains), Domaine de Mork, Bande de Guerre",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "talisman", "arcane-item", "enchanted-item"], maxPoints: 100}
    ], lores: ["illusion", "waaagh-magic", "troll-magic"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "skaven-warlord": {
    id: "skaven-warlord",
    army: "skaven",
    category: "characters",
    name_fr: "Seigneur de Guerre",
    name_en: "Skaven Warlord",
    points: 90,
    specialRules: "Sauve qui Peut!, Courageux mais pas Téméraire, Bande de Guerre, Armes à base de Malepierre",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false},
      {name_fr: "Hallebarde", name_en: "Halberd", points: 3, active: false}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 3, active: false}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 100}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "skaven-chieftain": {
    id: "skaven-chieftain",
    army: "skaven",
    category: "characters",
    name_fr: "Chef Skaven",
    name_en: "Skaven Chieftain",
    points: 45,
    specialRules: "Sauve qui Peut!, Courageux mais pas Téméraire, Bande de Guerre, Armes à base de Malepierre",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false},
      {name_fr: "Hallebarde", name_en: "Halberd", points: 3, active: false}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 3, active: false}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "grey-seer": {
    id: "grey-seer",
    army: "skaven",
    category: "characters",
    name_fr: "Prophète Gris",
    name_en: "Grey Seer",
    points: 185,
    specialRules: "Domaine du Rat Cornu, Attaques Magiques, Résistance à la Magie (-1), Sauve qui Peut!, Courageux mais pas Téméraire, Bande de Guerre, Armes à base de Malepierre (ne s’applique pas à la monture)",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base, Fragments de Malepierre (D3)", name_en: "Hand weapon, Warpstone Tokens (D3)", points: 0, active: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Cloche Hurlante", name_en: "Screaming Bell {renegade}", points: 185}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "talisman", "arcane-item", "enchanted-item", "armor-mages"], maxPoints: 100}
    ], lores: ["battle-magic", "daemonology", "dark-magic", "elementalism", "illusion"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "warlock-engineer": {
    id: "warlock-engineer",
    army: "skaven",
    category: "characters",
    name_fr: "Technomage",
    name_en: "Warlock Engineer",
    points: 35,
    specialRules: "Domaine du Rat Cornu, Attaques Magiques, Sauve qui Peut!, Courageux mais pas Téméraire, Bande de Guerre, Armes à base de Malepierre",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0},
      {name_fr: "Fragments de Malepierre (D3)", name_en: "Warpstone Tokens (D3)", points: 0}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true},
      {name_fr: "Arme de base, Mousquet à Malepierre", name_en: "Hand weapon, Warplock musket", points: 9, active: false},
      {name_fr: "Arme de base, Pistolet à Malepierre", name_en: "Hand weapon, Warplock pistol", points: 6, active: false}
    ],
    armor: [],
    mounts: [],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "talisman", "arcane-item", "enchanted-item", "armor-mages"], maxPoints: 50}
    ], lores: ["battle-magic", "elementalism"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "master-assassin": {
    id: "master-assassin",
    army: "skaven",
    category: "characters",
    name_fr: "Maître Assassin",
    name_en: "Master Assassin",
    points: 90,
    specialRules: "Embusqueurs, Infiltration Eshin, Esquiveur, Fuite Feinte, Tir & Fuite, Caché, Mouvement à Couvert, Attaques Empoisonnées, Sauve qui Peut!, Courageux mais pas Téméraire, Armes à base de Malepierre",
    opts: [],
    equip: [
      {name_fr: "Deux armes de base, Armes de lancer", name_en: "Two hand weapons, Throwing weapons", points: 0, active: true}
    ],
    armor: [],
    mounts: [],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "talisman", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: []
  },
  "plague-priest": {
    id: "plague-priest",
    army: "skaven",
    category: "characters",
    name_fr: "Prêtre de la Peste",
    name_en: "Plague Priest",
    points: 60,
    specialRules: "Nuage de Mouches, Frénésie, Domaine du Rat Cornu, Attaques Magiques, Sauve qui Peut!, Courageux mais pas Téméraire, Bande de Guerre, Armes à base de Malepierre (ne s’applique pas à la monture)",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false},
      {name_fr: "Arme de base, Encensoir à Peste", name_en: "Hand weapon, Plague censer", points: 6, active: false}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Creuset de la Peste", name_en: "Plague Furnace {renegade}", points: 170}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "talisman", "enchanted-item", "armor-mages", "arcane-item"], maxPoints: 50}
    ], lores: ["daemonology", "battle-magic", "dark-magic"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "stormvermin": {
    id: "stormvermin",
    army: "skaven",
    category: "core",
    name_fr: "Vermines de choc",
    name_en: "Stormvermin",
    points: 10,
    specialRules: "Ordre Serré, Horde, Sauve qui Peut!, Bande de Guerre, Armes à base de Malepierre",
    opts: [
      {name_fr: "Boucliers", name_en: "Shields", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Hallebardes", name_en: "Hand weapons, Halberds", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Grandes-dents (champion)", name_en: "Fangleader (champion)", points: 8, magic: {"types": ["weapon", "armor", "talisman", "arcane-item", "enchanted-item", "banner"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "clanrats": {
    id: "clanrats",
    army: "skaven",
    category: "core",
    name_fr: "Guerriers des clans",
    name_en: "Clanrats",
    points: 4,
    specialRules: "Ordre Serré, Horde, Sauve qui Peut!, Bande de Guerre",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de base, Lance d’infanterie", name_en: "Hand weapon, Thrusting spear", points: 1, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Grandes-griffes (champion)", name_en: "Clawleader (champion)", points: 7},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 5},
      {name_fr: "Musicien", name_en: "Musician", points: 5}
    ]
  },
  "skaven-dregs": {
    id: "skaven-dregs",
    army: "skaven",
    category: "core",
    name_fr: "Déchets Skavens",
    name_en: "Skaven Dregs",
    points: 2,
    perModel: true,
    unitSize: "20-40",
    specialRules: "Ordre Serré, Levées, Horde, Sauve qui Peut!, Sacrifiable, Rats Acculés, Solitaire",
    opts: [
      {name_fr: "Lances", name_en: "Spears", points: 1, perModel: true},
      {name_fr: "Boucliers", name_en: "Shields", points: 1, perModel: true},
      {name_fr: "Frondes", name_en: "Slings", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Chef de meute", name_en: "Packmaster", points: 5},
      {name_fr: "Maître corrupteur", name_en: "Master Moulder", points: 20},
      {name_fr: "Musicien", name_en: "Musician", points: 2}
    ]
  },
  "weapon-team": {
    id: "weapon-team",
    army: "skaven",
    category: "core",
    name_fr: "Équipes d’armes",
    name_en: "Weapon Team",
    points: 15,
    specialRules: "Solitaire, Ordre Dispersé, Sauve qui Peut!",
    opts: [],
    equip: [
      {name_fr: "Armes de base, Ratasphère", name_en: "Hand weapons, Doom-flayer", points: 40, active: true, perModel: true},
      {name_fr: "Armes de base, Mortier à Globes Toxiques", name_en: "Hand weapons, Poisoned Wind Mortar", points: 55, active: false, perModel: true},
      {name_fr: "Armes de base, Mitrailleuse Ratling", name_en: "Hand weapons, Ratling Gun", points: 50, active: false, perModel: true},
      {name_fr: "Armes de base, Lance-Feu", name_en: "Hand weapons, Warpfire Thrower", points: 60, active: false, perModel: true},
      {name_fr: "Armes de base, Foreuse à Malepierre", name_en: "Hand weapons, Warp Grinder", points: 30, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: []
  },
  "poisoned-wind-globadiers": {
    id: "poisoned-wind-globadiers",
    army: "skaven",
    category: "special",
    name_fr: "Globadiers",
    name_en: "Poisoned Wind Globadiers",
    points: 10,
    unitSize: "2-10",
    specialRules: "Scurry Away, Skirmishers, Warband, Life is Cheap",
    opts: [],
    equip: [
      {name_fr: "Globes à Vent du Poison", name_en: "Poisoned Wind globes", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true, perModel: true}
    ],
    mounts: [],
    magic: null,
    command: []
  },
  "rat-swarms": {
    id: "rat-swarms",
    army: "skaven",
    category: "core",
    name_fr: "Nuées de rats",
    name_en: "Rat Swarms",
    points: 36,
    specialRules: "Immunisé à la Psychologie, Solitaire, Tirailleurs, Indémoralisable, Avant-garde",
    opts: [],
    equip: [
      {name_fr: "Armes de base (Griffes et crocs)", name_en: "Hand weapons (Claws and fangs)", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "giant-rats": {
    id: "giant-rats",
    army: "skaven",
    category: "core",
    name_fr: "Rats Géants",
    name_en: "Giant Rats",
    points: 3,
    specialRules: "Ordre Serré, Combat Sur Plusieurs Rangs, Horde, Sauve qui Peut!, Bande de Guerre",
    opts: [
      {name_fr: "Chef de meute, Fouet", name_en: "Packmaster, Whip", points: 5, perModel: true},
      {name_fr: "Chef de meute, Attrape-choses", name_en: "Packmaster, Things-catcher", points: 10, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base (Griffes et crocs)", name_en: "Hand weapons (Claws and teeth)", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Maître corrupteur (champion)", name_en: "Master Moulder (champion)", points: 7, magic: {"types": ["weapon", "armor", "talisman", "arcane-item", "enchanted-item"], "maxPoints": 25}}
    ]
  },
  "night-runners": {
    id: "night-runners",
    army: "skaven",
    category: "core",
    name_fr: "Coureurs Nocturnes",
    name_en: "Night Runners",
    points: 7,
    specialRules: "Esquiveur, Tir & Fuite, Sauve qui Peut!, Tirailleurs",
    opts: [],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 2, active: false, perModel: true},
      {name_fr: "Arme de base, Fronde", name_en: "Hand weapon, Sling", points: 2, active: false, perModel: true},
      {name_fr: "Arme de base, Armes de lancer", name_en: "Hand weapon, Throwing weapons", points: 1, active: false, perModel: true},
      {name_fr: "Arme de base additionnelle, Fronde", name_en: "Additional hand weapon, Sling", points: 4, active: false, perModel: true},
      {name_fr: "Arme de base additionnelle, Armes de lancer", name_en: "Additional hand weapon, Throwing weapons", points: 3, active: false, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Grande-cape", name_en: "Nightleader", points: 6}
    ]
  },
  "plague-monks-core": {
    id: "plague-monks-core",
    army: "skaven",
    category: "core",
    name_fr: "Moines de la Peste",
    name_en: "Plague Monks",
    points: 7,
    specialRules: "Ordre Serré, Frénésie, Horde, Sauve qui Peut!, Bande de Guerre",
    opts: [],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Armes de base additionnelles", name_en: "Additional hand weapons", points: 2, active: false, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Diacre de la Peste", name_en: "Plague Deacon", points: 6, magic: {"types": ["weapon", "talisman", "enchanted-item", "armor"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "gutter-runners": {
    id: "gutter-runners",
    army: "skaven",
    category: "special",
    name_fr: "Coureurs d’Égouts",
    name_en: "Gutter Runners",
    points: 14,
    specialRules: "Esquiveur, Fuite Feinte, Tir & Fuite, Mouvement à Couvert, Éclaireurs, Sauve qui Peut!, Tirailleurs",
    opts: [
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 1, perModel: true},
      {name_fr: "Attaques Empoisonnées", name_en: "Poisoned Attacks", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Deux armes de base", name_en: "Two hand weapons", points: 0, active: true, perModel: true},
      {name_fr: "Deux armes de base, Fronde", name_en: "Two hand weapons, Sling", points: 2, active: false, perModel: true},
      {name_fr: "Deux armes de base, Armes de lancer", name_en: "Two hand weapons, Throwing weapons", points: 1, active: false, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Assassin", name_en: "Assassin", points: 7, magic: {"types": ["weapon", "armor", "talisman", "enchanted-item"], "maxPoints": 25}}
    ]
  },
  "rat-ogres": {
    id: "rat-ogres",
    army: "skaven",
    category: "special",
    name_fr: "Rat-ogres",
    name_en: "Rat Ogres",
    points: 48,
    specialRules: "Arme Perforante (2), Ordre Serré, Peur, Frénésie, Horde, À l’Abri du Danger, Sauve qui Peut!, Bande de Guerre",
    opts: [
      {name_fr: "Chef de meute, Fouet", name_en: "Packmaster, Whip", points: 5, perModel: true},
      {name_fr: "Chef de meute, Attrape-choses", name_en: "Packmaster, Things-catcher", points: 10, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde (peaux mutées)", name_en: "Heavy armour (mutated hides)", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Maître corrupteur (champion)", name_en: "Master Moulder (champion)", points: 7, magic: {"types": ["weapon", "armor", "talisman", "arcane-item", "enchanted-item"], "maxPoints": 25}}
    ]
  },
  "plague-monks": {
    id: "plague-monks",
    army: "skaven",
    category: "special",
    name_fr: "Moines de la Peste",
    name_en: "Plague Monks",
    points: 7,
    specialRules: "Ordre Serré, Frénésie, Horde, Sauve qui Peut!, Bande de Guerre",
    opts: [],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Armes de base additionnelles", name_en: "Additional hand weapons", points: 2, active: false, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Diacre de la Peste", name_en: "Plague Deacon", points: 6, magic: {"types": ["weapon", "talisman", "enchanted-item", "armor"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "warplock-jezzails": {
    id: "warplock-jezzails",
    army: "skaven",
    category: "special",
    name_fr: "Jezzails",
    name_en: "Warplock Jezzails",
    points: 19,
    specialRules: "Ordre Dispersé, Sauve qui Peut!, Bande de Guerre",
    opts: [],
    equip: [
      {name_fr: "Armes de base, Jezzails", name_en: "Hand weapons, Warplock jezzails {skaven}", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Pavois", name_en: "Pavise", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: []
  },
  "poisoned-wind-globadiers": {
    id: "poisoned-wind-globadiers",
    army: "skaven",
    category: "special",
    name_fr: "Globadiers",
    name_en: "Poisoned Wind Globadiers",
    points: 10,
    specialRules: "Sauve qui Peut!, Tirailleurs, Bande de Guerre",
    opts: [],
    equip: [
      {name_fr: "Armes de base, Globes de Vent Empoisonné", name_en: "Hand weapons, Poisoned Wind globes", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: []
  },
  "hell-pit-abomination": {
    id: "hell-pit-abomination",
    army: "skaven",
    category: "rare",
    name_fr: "Abomination de Malefosse",
    name_en: "Hell Pit Abomination {renegade}",
    points: 210,
    specialRules: "Attaques Abominables, Ordre Serré, Immunisé à la Psychologie, Grande Cible, Résistance à la Magie (-1), Attaques Aléatoires, Mouvement Aléatoire, Régénération (5+), Attaques de Piétinement (D3+1), Terreur, Timmm-berrr!, Trop Horrible pour Mourir, Indémoralisable",
    opts: [],
    equip: [
      {name_fr: "Griffes de Malepierre", name_en: "Warpstone claws", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "doomwheel": {
    id: "doomwheel",
    army: "skaven",
    category: "rare",
    name_fr: "Roue Infernale",
    name_en: "Doomwheel",
    points: 145,
    specialRules: "Ordre Serré, Écrasement, Immunisé à la Psychologie, Touches d’Impact (D3+1), Grande Cible, Attaques Aléatoires (Rats uniquement), Mouvement Aléatoire, Attaques de Piétinement (2), Zzzzap!",
    opts: [],
    equip: [
      {name_fr: "Armes de base (Griffes et crocs)", name_en: "Hand weapons (Claws and fangs)", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "slann-mage-priest": {
    id: "slann-mage-priest",
    army: "lizardmen",
    category: "characters",
    name_fr: "Prêtre-Mage Slann",
    name_en: "Slann Mage-Priest {renegade}",
    points: 285,
    specialRules: "Bouclier Arcanique, Sang Froid, Ordre Serré, Vol (8), Grande Cible, Domaine de Lustrie",
    opts: [
      {name_fr: "Sorcier de Niveau 4", name_en: "Level 4 Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["arcane-item", "weapon", "armor-mages", "talisman", "banner", "enchanted-item"], maxPoints: 100},
      {name_fr: "Disciplines Ancestrales", name_en: "Disciplines of the Old Ones", types: ["discipline-old-ones"], maxPoints: 0}
    ], lores: ["elementalism", "battle-magic", "high-magic", "necromancy", "illusion"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0, exclusive: false},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, exclusive: false, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "saurus-oldblood": {
    id: "saurus-oldblood",
    army: "lizardmen",
    category: "characters",
    name_fr: "Sang Ancien Saurus",
    name_en: "Saurus Oldblood",
    points: 140,
    specialRules: "Sang Froid, Charge Dévastatrice, Lames d’Obsidienne, Cri de Ralliement",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 4, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Hallebarde", name_en: "Halberd", points: 3, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde (Peau écailleuse)", name_en: "Heavy armour (Scaly skin)", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Sang-froid", name_en: "Cold One {lizardmen}", points: 18},
      {name_fr: "Carnosaure", name_en: "Carnosaur", points: 170}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "banner", "enchanted-item"], maxPoints: 100}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "saurus-scar-veteran": {
    id: "saurus-scar-veteran",
    army: "lizardmen",
    category: "characters",
    name_fr: "Vétéran Scarifié Saurus",
    name_en: "Saurus Scar-Veteran",
    points: 90,
    specialRules: "Sang Froid, Charge Dévastatrice, Lames d’Obsidienne, Cri de Ralliement",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 4, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Hallebarde", name_en: "Halberd", points: 3, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde (Peau écailleuse)", name_en: "Heavy armour (Scaly skin)", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Sang-froid", name_en: "Cold One {lizardmen}", points: 18},
      {name_fr: "Carnosaure", name_en: "Carnosaur", points: 170}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "banner", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "skink-priest": {
    id: "skink-priest",
    army: "lizardmen",
    category: "characters",
    name_fr: "Prêtre Skink",
    name_en: "Skink Priest",
    points: 60,
    specialRules: "Vassal Magique, Aquatique**, Sang Froid, Domaine de Lustrie",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère (Peau calleuse)*", name_en: "Light armour (Calloused hide)*", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Stégadon Ancestral", name_en: "Ancient Stegadon", points: 230}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "banner", "arcane-item", "enchanted-item"], maxPoints: 50}
    ], lores: ["elementalism", "battle-magic", "illusion"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "skink-chief": {
    id: "skink-chief",
    army: "lizardmen",
    category: "characters",
    name_fr: "Chef Skink",
    name_en: "Skink Chief",
    points: 45,
    specialRules: "Aquatique**, Sang Froid, Attaques Empoisonnées",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 4, active: false, perModel: true},
      {name_fr: "Sarbacane", name_en: "Blowpipe", points: 4, active: false, perModel: true},
      {name_fr: "Javeline", name_en: "Javelin", points: 3, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère (Peau calleuse)", name_en: "Light armour (Calloused hide)", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Téradon", name_en: "Terradon", points: 30},
      {name_fr: "Entérodactyle", name_en: "Ripperdactyl", points: 35},
      {name_fr: "Stégadon", name_en: "Stegadon", points: 215}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "saurus-warriors": {
    id: "saurus-warriors",
    army: "lizardmen",
    category: "core",
    name_fr: "Guerriers Saurus",
    name_en: "Saurus Warriors",
    points: 14,
    specialRules: "Ordre Serré, Sang Froid, Lames d’Obsidienne",
    opts: [
      {name_fr: "Mur de Boucliers", name_en: "Shieldwall", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Boucliers", name_en: "Hand weapons, Shields", points: 0, active: true, perModel: true},
      {name_fr: "Lances d’infanterie, Boucliers", name_en: "Thrusting spears, Shields", points: 1, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde (Peau écailleuse)", name_en: "Heavy armour (Scaly skin)", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Premier de Couvée (champion)", name_en: "Spawn Leader (champion)", points: 7, magic: {"types": ["weapon", "armor", "talisman", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 7},
      {name_fr: "Musicien", name_en: "Musician", points: 7}
    ]
  },
  "temple-guard": {
    id: "temple-guard",
    army: "lizardmen",
    category: "core",
    name_fr: "Gardien du Temple",
    name_en: "Temple Guard {renegade}",
    points: 16,
    specialRules: "Ordre Serré, Sang Froid, Gardiens, Lames d’Obsidienne, Mur de Boucliers, Obstiné",
    opts: [],
    equip: [
      {name_fr: "Armes de base, Hallebardes, Boucliers", name_en: "Hand weapons, Halberds, Shields", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde (Peau écailleuse)", name_en: "Heavy armour (Scaly skin)", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Gardien Révéré (champion)", name_en: "Revered Guardian (champion)", points: 7, magic: {"types": ["weapon", "armor", "talisman", "enchanted-item"], "maxPoints": 50}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 7, magic: {"types": ["banner"], "maxPoints": 100}},
      {name_fr: "Musicien", name_en: "Musician", points: 7}
    ]
  },
  "skink-cohort": {
    id: "skink-cohort",
    army: "lizardmen",
    category: "core",
    name_fr: "Cohortes de Skinks",
    name_en: "Skink Cohort",
    points: 5,
    specialRules: "Aquatique, Ordre Serré, Sang Froid, Mouvement à Couvert, Attaques Empoisonnées (Javelines & Arcs courts), Engeance (Spawn-kin)",
    opts: [
      {name_fr: "Kroxigor (0-1 par 8 Skinks, max 3)", name_en: "Kroxigor (0-1 per 8 Skinks, max 3)", points: 49}
    ],
    equip: [
      {name_fr: "Armes de base, Sarbacanes", name_en: "Hand weapons, Blowpipes", points: 0, active: true, perModel: true},
      {name_fr: "Armes de base, Javelines & Boucliers", name_en: "Hand weapons, Javelins & Shields", points: 0, active: false, perModel: true},
      {name_fr: "Armes de base, Arcs courts", name_en: "Hand weapons, Shortbows", points: 0, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère (Peaux calleuses)", name_en: "Light armour (Calloused hides)", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Skink Brave (champion)", name_en: "Skink Brave (champion)", points: 5},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 5},
      {name_fr: "Musicien", name_en: "Musician", points: 5}
    ]
  },
  "skink-skirmishers": {
    id: "skink-skirmishers",
    army: "lizardmen",
    category: "core",
    name_fr: "Tirailleurs Skinks",
    name_en: "Skink Skirmishers",
    points: 5,
    specialRules: "Sang Froid, Mouvement à Couvert, Attaques Empoisonnées (Javelines uniquement), Tirailleurs",
    opts: [
      {name_fr: "Éclaireurs", name_en: "Scouts", points: 10},
      {name_fr: "Avant-garde", name_en: "Vanguard", points: 5}
    ],
    equip: [
      {name_fr: "Armes de base, Javelines, Boucliers", name_en: "Hand weapons, Javelins, Shields", points: 0, active: true, perModel: true},
      {name_fr: "Armes de base, Sarbacanes", name_en: "Hand weapons, Blowpipes", points: 1, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère (Peaux calleuses)", name_en: "Light armour (Calloused hides)", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Chef de Patrouille (champion)", name_en: "Patrol Leader (champion)", points: 5}
    ]
  },
  "jungle-swarms": {
    id: "jungle-swarms",
    army: "lizardmen",
    category: "core",
    name_fr: "Nuées de la Jungle",
    name_en: "Jungle Swarms",
    points: 40,
    specialRules: "Sang Froid, Immunisé à la Psychologie, Solitaire, Mouvement à Couvert, Attaques Empoisonnées, Tirailleurs, Indémoralisable, Avant-garde",
    opts: [],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "chameleon-skinks": {
    id: "chameleon-skinks",
    army: "lizardmen",
    category: "special",
    name_fr: "Skinks Caméléons",
    name_en: "Chameleon Skinks",
    points: 11,
    specialRules: "Sang Froid, Esquiveur, Mouvement à Couvert, Éclaireurs, Tirailleurs",
    opts: [],
    equip: [
      {name_fr: "Sarbacanes, Armes de base", name_en: "Blowpipes, Hand weapons", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère (Peaux calleuses)", name_en: "Light armour (Calloused hides)", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Chef de Patrouille (champion)", name_en: "Patrol Leader (champion)", points: 6}
    ]
  },
  "kroxigors": {
    id: "kroxigors",
    army: "lizardmen",
    category: "special",
    name_fr: "Kroxigors",
    name_en: "Kroxigors",
    points: 49,
    specialRules: "Aquatique, Ordre Serré, Sang Froid, Peur, Écran de Tirailleurs",
    opts: [],
    equip: [
      {name_fr: "Armes lourdes", name_en: "Great weapons", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde (Peau écailleuse)", name_en: "Heavy armour (Scaly skin)", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Ancestral (champion)", name_en: "Ancient (champion)", points: 7}
    ]
  },
  "terradon-riders": {
    id: "terradon-riders",
    army: "lizardmen",
    category: "special",
    name_fr: "Monteurs de Téradon",
    name_en: "Terradon Riders",
    points: 32,
    specialRules: "Peau Blindée (1), Sang Froid, Rochers, Peur, Vol (10), Attaques Empoisonnées (Javelines uniquement), Tirailleurs, Rapide",
    opts: [],
    equip: [
      {name_fr: "Armes de base, Javelines", name_en: "Hand weapons, Javelins", points: 0, active: true, perModel: true},
      {name_fr: "Armes de base, Bolas à pyrosangsues", name_en: "Hand weapons, Fireleech bolas", points: 1, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère (Peaux calleuses)", name_en: "Light armour (Calloused hides)", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Chef Céleste (champion)", name_en: "Sky Leader (champion)", points: 6}
    ]
  },
  "ripperdactyl-riders": {
    id: "ripperdactyl-riders",
    army: "lizardmen",
    category: "special",
    name_fr: "Monteurs d’Entérodactyle",
    name_en: "Ripperdactyl Riders",
    points: 40,
    specialRules: "Peau Blindée (1), Coup de Fendoir (Entérodactyle uniquement), Sang Froid, Peur, Vol (9), Charge Dévastatrice (Entérodactyle uniquement), Impétueux, Tirailleurs, Rapide, Crapauds",
    opts: [],
    equip: [
      {name_fr: "Lances de cavalerie, Boucliers", name_en: "Cavalry spears, Shields", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère (Peaux calleuses)", name_en: "Light armour (Calloused hides)", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Champion Entérodactyle", name_en: "Ripperdactyl Champion", points: 6}
    ]
  },
  "cold-one-riders": {
    id: "cold-one-riders",
    army: "lizardmen",
    category: "special",
    name_fr: "Monteurs de Sang-froid",
    name_en: "Cold One Riders",
    points: 34,
    specialRules: "Arme Perforante (1 - Sang-froid uniquement), Peau Blindée (1), Ordre Serré, Sang Froid, Peur, Lames d’Obsidienne, Stupidité, Rapide",
    opts: [
      {name_fr: "Bien Entraînés", name_en: "Drilled", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Boucliers", name_en: "Hand weapons, Shields", points: 0, active: true, perModel: true},
      {name_fr: "Lances de cavalerie, Boucliers", name_en: "Cavalry spears, Shields", points: 1, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde (Peau écailleuse)", name_en: "Heavy armour (Scaly skin)", points: 0, active: true}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Bannière Magique", name_en: "Magical Standard", types: ["banner"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Chef de Meute (champion)", name_en: "Pack Leader (champion)", points: 7, magic: {"types": ["weapon", "armor", "talisman", "banner", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 7},
      {name_fr: "Musicien", name_en: "Musician", points: 7}
    ]
  },
  "bastiladon": {
    id: "bastiladon",
    army: "lizardmen",
    category: "special",
    name_fr: "Bastiladon",
    name_en: "Bastiladon",
    points: 160,
    specialRules: "Ordre Serré, Sang Froid, Immunisé à la Psychologie, Touches d’Impact (D3), Défense Impénétrable, Grande Cible, Attaques Empoisonnées (Javelines uniquement), Attaques de Piétinement (D3+1), Obstiné, Terreur",
    opts: [
      {name_fr: "Quatrième membre d’équipage Skink", name_en: "Fourth Skink crew member", points: 5}
    ],
    equip: [
      {name_fr: "Armes de base, Javelines, Balayage furieux, Arche de Sotek", name_en: "Hand weapons, Javelins, Thunderous bludgeon, Ark of Sotek", points: 0, active: true},
      {name_fr: "Armes de base, Javelines, Balayage furieux, Machine Solaire", name_en: "Hand weapons, Javelins, Thunderous bludgeon, Solar Engine", points: 15, active: false}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "stegadon": {
    id: "stegadon",
    army: "lizardmen",
    category: "special",
    name_fr: "Stégadon",
    name_en: "Stegadon",
    points: 215,
    specialRules: "Ordre Serré, Sang Froid, Howdah, Immunisé à la Psychologie, Touches d’Impact (D3+1), Grande Cible, Attaques Empoisonnées (Javelines uniquement), Attaques de Piétinement (D3+2), Obstiné, Terreur",
    opts: [],
    equip: [
      {name_fr: "Armes de base, Javelines, Grandes cornes, Arc géant", name_en: "Hand weapons, Javelins, Great horns, Giant bow", points: 0, active: true},
      {name_fr: "Armes de base, Javelines, Grandes cornes, Sarbacanes géantes", name_en: "Hand weapons, Javelins, Great horns, Giant blowpipes", points: 0, active: false}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "salamander-pack": {
    id: "salamander-pack",
    army: "lizardmen",
    category: "rare",
    name_fr: "Meute de Salamandres",
    name_en: "Salamander Pack",
    points: 75,
    specialRules: "Aquatique, Maître des Bêtes, Sang Froid, Peur, Tirailleurs",
    opts: [
      {name_fr: "Coureurs Skinks avec Armes de base et Armure légère (Peaux calleuses)", name_en: "Skink Handlers with Hand weapons and Light armour (Calloused hides)", points: 5, perModel: true}
    ],
    equip: [
      {name_fr: "Griffes mortelles, Souffle ardent", name_en: "Wicked claws, Fiery breath {lizardmen}", points: 0, active: true, perModel: true},
      {name_fr: "Griffes mortelles, Souffle ardent", name_en: "Wicked claws, Fiery breath {renegade}", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde (Peau écailleuse)", name_en: "Heavy armour (Scaly skin)", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: []
  },
  "razordon-pack": {
    id: "razordon-pack",
    army: "lizardmen",
    category: "rare",
    name_fr: "Meute de Razordons",
    name_en: "Razordon Pack",
    points: 60,
    specialRules: "Aquatique, Maître des Bêtes, Sang Froid, Peur, Tirailleurs",
    opts: [
      {name_fr: "Coureurs Skinks avec Armes de base et Armure légère (Peaux calleuses)", name_en: "Skink Handlers with Hand weapons and Light armour (Calloused hides)", points: 5, perModel: true}
    ],
    equip: [
      {name_fr: "Griffes mortelles, Épines acérées", name_en: "Wicked claws, Razor barbs", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde (Peau écailleuse)", name_en: "Heavy armour (Scaly skin)", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: []
  },
  "troglodon": {
    id: "troglodon",
    army: "lizardmen",
    category: "rare",
    name_fr: "Troglodon",
    name_en: "Troglodon",
    points: 200,
    specialRules: "Vassal Magique, Aquatique, Ordre Serré, Sang Froid, Immunisé à la Psychologie, Grande Cible, Domaine de Lustrie, Rugissement Primal, Attaques de Piétinement (2), Obstiné, Terreur",
    opts: [],
    equip: [
      {name_fr: "Serres venimeuses, Crachat de venin", name_en: "Venomous talons, Venom spray", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Armure lourde (Peau écailleuse)", name_en: "Heavy armour (Scaly skin)", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Oracle Skink avec Arme de base", name_en: "Skink Oracle with Hand weapon", points: 0}
    ]
  },
  "ancient-stegadon": {
    id: "ancient-stegadon",
    army: "lizardmen",
    category: "rare",
    name_fr: "Stégadon Ancestral",
    name_en: "Ancient Stegadon",
    points: 230,
    specialRules: "Ordre Serré, Sang Froid, Howdah, Immunisé à la Psychologie, Touches d’Impact (D3+1), Grande Cible, Attaques Empoisonnées (Javelines uniquement), Attaques de Piétinement (D3+2), Obstiné, Terreur",
    opts: [],
    equip: [
      {name_fr: "Armes de base, Javelines, Grandes cornes, Arc géant", name_en: "Hand weapons, Javelins, Great horns, Giant bow", points: 0, active: true},
      {name_fr: "Armes de base, Javelines, Grandes cornes, Sarbacanes géantes", name_en: "Hand weapons, Javelins, Great horns, Giant blowpipes", points: 0, active: false},
      {name_fr: "Armes de base, Javelines, Grandes cornes, Machine des Dieux", name_en: "Hand weapons, Javelins, Great horns, Engine of the Gods", points: 25, active: false},
      {name_fr: "Armes de base, Javelines, Grandes cornes, Machine des Dieux", name_en: "Hand weapons, Javelins, Great horns, Engine of the Gods {renegade}", points: 25, active: false}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "duke": {
    id: "duke",
    army: "kingdom-of-bretonnia",
    category: "characters",
    name_fr: "Duc",
    name_en: "Duke",
    points: 175,
    specialRules: "Bénédiction de la Dame, Cri de Ralliement, Le Vœu du Graal",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true},
      {name_fr: "Morgenstern", name_en: "Morning star", points: 3, active: false},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false},
      {name_fr: "Lance de joute", name_en: "Lance", points: 4, active: false}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier Bretonnien", name_en: "Bretonnian Warhorse", points: 16},
      {name_fr: "Pégase Caparaçonné", name_en: "Barded Pegasus", points: 30},
      {name_fr: "Pégase Royal", name_en: "Royal Pegasus", points: 70},
      {name_fr: "Hippogriffe", name_en: "Hippogryph", points: 120}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 100},
      {name_fr: "Vertus Chevaleresques", name_en: "Knightly Virtues", types: ["knightly-virtue"], maxPoints: 0}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "baron": {
    id: "baron",
    army: "kingdom-of-bretonnia",
    category: "characters",
    name_fr: "Baron",
    name_en: "Baron",
    points: 100,
    specialRules: "Bénédiction de la Dame, Cri de Ralliement, Le Vœu du Chevalier",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2},
      {name_fr: "Le Vœu de la Quête", name_en: "The Questing Vow", points: 15},
      {name_fr: "Le Vœu du Graal", name_en: "The Grail Vow", points: 20},
      {name_fr: "Le Vœu de l’Exilé (remplace le Vœu du Chevalier)", name_en: "The Exile's Vow (replaces the Knight's Vow)", points: 0},
      {name_fr: "Le Vœu du Croisé (remplace le Vœu du Chevalier)", name_en: "The Crusader's Vow (replaces the Knight's Vow)", points: 0}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true},
      {name_fr: "Morgenstern", name_en: "Morning star", points: 3, active: false},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false},
      {name_fr: "Lance de joute", name_en: "Lance", points: 4, active: false}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier Bretonnien", name_en: "Bretonnian Warhorse", points: 16},
      {name_fr: "Pégase Caparaçonné", name_en: "Barded Pegasus", points: 30},
      {name_fr: "Pégase Royal", name_en: "Royal Pegasus", points: 70},
      {name_fr: "Hippogriffe", name_en: "Hippogryph", points: 120}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 75},
      {name_fr: "Vertus Chevaleresques", name_en: "Knightly Virtues", types: ["knightly-virtue"], maxPoints: 0}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "prophetess": {
    id: "prophetess",
    army: "kingdom-of-bretonnia",
    category: "characters",
    name_fr: "Prophétesse",
    name_en: "Prophetess",
    points: 135,
    specialRules: "Aura de la Dame, Bénédiction de la Dame, Domaine de la Dame, Attaques Magiques, Résistance à la Magie (-2), Bouclier de la Dame",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier", name_en: "Warhorse {bretonnia}", points: 12},
      {name_fr: "Destrier Bretonnien", name_en: "Bretonnian Warhorse", points: 16},
      {name_fr: "Licorne", name_en: "Unicorn", points: 35},
      {name_fr: "Pégase Royal", name_en: "Royal Pegasus", points: 70}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "arcane-item", "enchanted-item"], maxPoints: 100}
    ], lores: ["battle-magic", "elementalism", "illusion"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "paladin": {
    id: "paladin",
    army: "kingdom-of-bretonnia",
    category: "characters",
    name_fr: "Paladin",
    name_en: "Paladin",
    points: 60,
    specialRules: "Bénédiction de la Dame, Cri de Ralliement, Le Vœu du Chevalier",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2},
      {name_fr: "Le Vœu de la Quête", name_en: "The Questing Vow", points: 15},
      {name_fr: "Le Vœu du Graal", name_en: "The Grail Vow", points: 20},
      {name_fr: "Le Vœu de l’Exilé (remplace le Vœu du Chevalier)", name_en: "The Exile's Vow (replaces the Knight's Vow)", points: 0},
      {name_fr: "Le Vœu du Croisé (remplace le Vœu du Chevalier)", name_en: "The Crusader's Vow (replaces the Knight's Vow)", points: 0}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true},
      {name_fr: "Morgenstern", name_en: "Morning star", points: 3, active: false},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false},
      {name_fr: "Lance de joute", name_en: "Lance", points: 4, active: false}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier Bretonnien", name_en: "Bretonnian Warhorse", points: 16},
      {name_fr: "Pégase Caparaçonné", name_en: "Barded Pegasus", points: 30},
      {name_fr: "Pégase Royal", name_en: "Royal Pegasus", points: 70}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50},
      {name_fr: "Vertus Chevaleresques", name_en: "Knightly Virtues", types: ["knightly-virtue"], maxPoints: 0}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 0, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "damsel": {
    id: "damsel",
    army: "kingdom-of-bretonnia",
    category: "characters",
    name_fr: "Damoiselle",
    name_en: "Damsel",
    points: 60,
    specialRules: "Aura de la Dame, Bénédiction de la Dame, Domaine de la Dame, Attaques Magiques, Résistance à la Magie (-2), Bouclier de la Dame",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier", name_en: "Warhorse {bretonnia}", points: 12},
      {name_fr: "Destrier Bretonnien", name_en: "Bretonnian Warhorse", points: 16},
      {name_fr: "Licorne", name_en: "Unicorn", points: 35}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "arcane-item", "enchanted-item"], maxPoints: 50}
    ], lores: ["battle-magic", "elementalism", "illusion"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "sergeant-at-arms": {
    id: "sergeant-at-arms",
    army: "kingdom-of-bretonnia",
    category: "characters",
    name_fr: "Sergent d’Armes",
    name_en: "Sergeant-at-Arms",
    points: 45,
    specialRules: "Conscrits, Devoir du Paysan, Paysannerie, Bande de Guerre",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true},
      {name_fr: "Hallebarde", name_en: "Halberd", points: 2, active: false},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 2, active: false},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 2, active: false}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier", name_en: "Warhorse {bretonnia}", points: 12}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 25}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "outcast-wizard": {
    id: "outcast-wizard",
    army: "kingdom-of-bretonnia",
    category: "characters",
    name_fr: "Mage Proscrit",
    name_en: "Outcast Wizard",
    points: 45,
    specialRules: "Attaques Magiques, Résistance à la Magie (-1), Arcaniste Autodidacte",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier", name_en: "Warhorse {bretonnia}", points: 12}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "talisman", "armor-mages", "arcane-item", "enchanted-item"], maxPoints: 75}
    ], lores: ["battle-magic", "daemonology", "dark-magic", "elementalism", "illusion", "necromancy"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "the-green-knight": {
    id: "the-green-knight",
    army: "kingdom-of-bretonnia",
    category: "characters",
    name_fr: "Le Chevalier de Sinople",
    name_en: "The Green Knight",
    points: 275,
    specialRules: "Aura Féérique, Chevalier Béni, Éthéré, Gardien des Sites Sacrés, Immunisé à la Psychologie, Solitaire, Mouvement à Couvert, Cri de Ralliement, Terreur, Indémoralisable, Instables",
    opts: [],
    equip: [
      {name_fr: "La Lame de Douleur", name_en: "The Dolorous Blade", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Armure lourde, Bouclier, Caparaçon", name_en: "Heavy armour, Shield, Barding", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: []
  },
  "sir-cecil-gastonne-the-wyrm-slayer": {
    id: "sir-cecil-gastonne-the-wyrm-slayer",
    army: "kingdom-of-bretonnia",
    category: "characters",
    name_fr: "Sir Cecil Gastonne",
    name_en: "Sir Cecil Gastonne",
    points: 165,
    specialRules: "Bénédiction de la Dame, Cri de Ralliement, Le Sauroctone, Le Vœu de l’Exilé",
    opts: [],
    equip: [
      {name_fr: "Consolatrice", name_en: "Sorrow's End", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Cape en Peau de Dragon, Armure lourde, Bouclier", name_en: "Dragonhide Cloak, Heavy armour, Shield", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "lady-élisse-duachaard": {
    id: "lady-élisse-duachaard",
    army: "kingdom-of-bretonnia",
    category: "characters",
    name_fr: "Dame Élisse Duchaard",
    name_en: "Lady Élisse Duchaard",
    points: 225,
    specialRules: "Contrecoup Arcanique, Arme Perforante (2 - Ariandir uniquement), Peau Blindée (1), Aura de la Dame, Aura Envoûtante, Bénédiction de la Dame, Contre-charge, Domaine de la Dame, Attaques Magiques, Résistance à la Magie (-2), Bouclier de la Dame, Attaques de Piétinement (1), Rapide",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base, Calice de Brionne, Le Bâton des Éléments", name_en: "Hand weapon, Chalice of Brionne, The Staff of the Elements", points: 0, active: true}
    ],
    armor: [],
    mounts: [],
    magic: {items: [], lores: ["elementalism"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "men-at-arms": {
    id: "men-at-arms",
    army: "kingdom-of-bretonnia",
    category: "core",
    name_fr: "Hommes d’Armes",
    name_en: "Men-at-Arms",
    points: 4,
    specialRules: "Ordre Serré, Horde, Conscrits, Paysannerie, Mur de Boucliers, Bande de Guerre",
    opts: [],
    equip: [
      {name_fr: "Armes de base, Armes d’hast, Boucliers", name_en: "Hand weapons, Polearms, Shields", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Prévôt (champion)", name_en: "Yeoman (champion)", points: 7},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 5},
      {name_fr: "Musicien", name_en: "Musician", points: 5},
      {name_fr: "Moine du Graal", name_en: "Grail Monk", points: 7}
    ]
  },
  "peasant-bowmen": {
    id: "peasant-bowmen",
    army: "kingdom-of-bretonnia",
    category: "core",
    name_fr: "Paysans Archers",
    name_en: "Peasant Bowmen",
    points: 5,
    specialRules: "Ordre Serré, Conscrits, Paysannerie",
    opts: [
      {name_fr: "Pieux de Défense", name_en: "Defensive Stakes", points: 10},
      {name_fr: "Braséros", name_en: "Burning Braziers", points: 20},
      {name_fr: "Tirailleurs", name_en: "Skirmishers", points: 0}
    ],
    equip: [
      {name_fr: "Armes de base, Arcs longs", name_en: "Hand weapons, Longbows", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Pas d’armure", name_en: "No armour", points: 0, active: true},
      {name_fr: "Armure légère", name_en: "Light armour", points: 1, active: false}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Maître Archer (champion)", name_en: "Villein (champion)", points: 7},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 5},
      {name_fr: "Musicien", name_en: "Musician", points: 5}
    ]
  },
  "knights-of-the-realm": {
    id: "knights-of-the-realm",
    army: "kingdom-of-bretonnia",
    category: "core",
    name_fr: "Chevaliers du Royaume à Pied",
    name_en: "Knights of the Realm on Foot",
    points: 11,
    specialRules: "Bénédiction de la Dame, Ordre Serré, Charge Dévastatrice, Le Vœu du Chevalier",
    opts: [
      {name_fr: "Le Vœu de l’Exilé (remplace le Vœu du Chevalier)", name_en: "The Exile's Vow (replaces the Knight's Vow)", points: 0},
      {name_fr: "Le Vœu du Croisé (remplace le Vœu du Chevalier)", name_en: "The Crusader's Vow (replaces the Knight's Vow)", points: 0}
    ],
    equip: [
      {name_fr: "Armes de base, Boucliers", name_en: "Hand weapons, Shields", points: 0, active: true, perModel: true},
      {name_fr: "Armes de base, Armes lourdes", name_en: "Hand weapons, Great weapons", points: 1, active: false, perModel: true},
      {name_fr: "Armes de base, Armes lourdes, Boucliers", name_en: "Hand weapons, Great weapons, Shields", points: 2, active: false, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Champion du Royaume (champion)", name_en: "First Knight (champion)", points: 6, magic: {"maxPoints": 25, "types": ["weapon", "armor", "talisman", "enchanted-item"]}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"maxPoints": 25, "types": ["banner"]}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "mounted-knights-of-the-realm": {
    id: "mounted-knights-of-the-realm",
    army: "kingdom-of-bretonnia",
    category: "core",
    name_fr: "Chevaliers du Royaume Montés",
    name_en: "Mounted Knights of the Realm",
    points: 24,
    specialRules: "Bénédiction de la Dame, Ordre Serré, Contre-charge, Destriers Supérieurs, Première Charge, Formation en Fer de Lance, Rapide, Le Vœu du Chevalier",
    opts: [
      {name_fr: "Le Vœu de l’Exilé (remplace le Vœu du Chevalier)", name_en: "The Exile's Vow (replaces the Knight's Vow)", points: 0},
      {name_fr: "Le Vœu du Croisé (remplace le Vœu du Chevalier)", name_en: "The Crusader's Vow (replaces the Knight's Vow)", points: 0}
    ],
    equip: [
      {name_fr: "Armes de base, Lances de joute, Boucliers", name_en: "Hand weapons, Lances, Shields", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde, Caparaçon", name_en: "Heavy armour, Barding", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Champion du Royaume (champion)", name_en: "First Knight (champion)", points: 7, magic: {"maxPoints": 25, "types": ["weapon", "armor", "talisman", "enchanted-item"]}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 7, magic: {"maxPoints": 25, "types": ["banner"]}},
      {name_fr: "Musicien", name_en: "Musician", points: 7}
    ]
  },
  "knights-errant": {
    id: "knights-errant",
    army: "kingdom-of-bretonnia",
    category: "core",
    name_fr: "Chevaliers Errants",
    name_en: "Knights Errant",
    points: 19,
    specialRules: "Bénédiction de la Dame, Ordre Serré, Destriers Supérieurs, Première Charge, Impétueux, Formation en Fer de Lance, Rapide, Le Vœu du Chevalier",
    opts: [
      {name_fr: "Le Vœu de l’Exilé (remplace le Vœu du Chevalier)", name_en: "The Exile's Vow (replaces the Knight's Vow)", points: 0},
      {name_fr: "Le Vœu du Croisé (remplace le Vœu du Chevalier)", name_en: "The Crusader's Vow (replaces the Knight's Vow)", points: 0}
    ],
    equip: [
      {name_fr: "Armes de base, Lances de joute, Boucliers", name_en: "Hand weapons, Lances, Shields", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde, Caparaçon", name_en: "Heavy armour, Barding", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Preux Chevalier (champion)", name_en: "Gallant (champion)", points: 6},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"maxPoints": 25, "types": ["banner"]}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "yeoman-guard": {
    id: "yeoman-guard",
    army: "kingdom-of-bretonnia",
    category: "core",
    name_fr: "Gardes Roturiers",
    name_en: "Yeomen Guard",
    points: 5,
    specialRules: "Ordre Serré, Horde, Paysannerie, Mur de Boucliers, Vétérans, Bande de Guerre",
    opts: [],
    equip: [
      {name_fr: "Armes de base, Hallebardes", name_en: "Hand weapons, Halberds", points: 0, active: true, perModel: true},
      {name_fr: "Armes de base, Armes d’hast", name_en: "Hand weapons, Polearms", points: 1, active: false, perModel: true},
      {name_fr: "Armes de base, Lances d’infanterie", name_en: "Hand weapons, Thrusting spears", points: 0, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère, Boucliers", name_en: "Light armour, Shields", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Prévôt (champion)", name_en: "Warden (champion)", points: 6},
      {name_fr: "Moine du Graal", name_en: "Grail Monk", points: 7},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 25}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "battle-pilgrims": {
    id: "battle-pilgrims",
    army: "kingdom-of-bretonnia",
    category: "special",
    name_fr: "Pèlerins du Graal",
    name_en: "Battle Pilgrims",
    points: 6,
    specialRules: "Ordre Serré, Haine (Tous les ennemis), Conscrits, Paysannerie, Obstiné",
    opts: [],
    equip: [
      {name_fr: "Armes de base, Boucliers", name_en: "Hand weapons, Shields", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Reliquaire du Graal", name_en: "Grail Reliquae", points: 65}
    ]
  },
  "questing-knights": {
    id: "questing-knights",
    army: "kingdom-of-bretonnia",
    category: "special",
    name_fr: "Chevaliers de la Quête",
    name_en: "Questing Knights",
    points: 26,
    specialRules: "Bénédiction de la Dame, Ordre Serré, Destriers Supérieurs, Première Charge, Formation en Fer de Lance, Rapide, le Vœu de la Quête",
    opts: [],
    equip: [
      {name_fr: "Armes de base, Armes lourdes, Boucliers", name_en: "Hand weapons, Great weapons, Shields", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde, Caparaçon", name_en: "Heavy armour, Barding", points: 0, active: true}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Vertu Chevaleresque du Champion de la Quête", name_en: "Paragon's Knightly Virtues", types: ["knightly-virtue"], maxPoints: 0}
    ], lores: []},
    command: [
      {name_fr: "Champion de la Quête (champion)", name_en: "Paragon (champion)", points: 7, magic: {"maxPoints": 25, "types": ["weapon", "armor", "talisman", "enchanted-item"]}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 7, magic: {"maxPoints": 100, "types": ["banner"]}},
      {name_fr: "Musicien", name_en: "Musician", points: 7}
    ]
  },
  "pegasus-knights": {
    id: "pegasus-knights",
    army: "kingdom-of-bretonnia",
    category: "special",
    name_fr: "Chevaliers Pégases",
    name_en: "Pegasus Knights",
    points: 59,
    specialRules: "Bénédiction de la Dame, Contre-charge, Formation Éparse, Première Charge, Vol (10), Charge Dévastatrice (Chevaliers Pégases & Champion Pégase uniquement), Tirailleurs, Rapide, Le Vœu du Chevalier",
    opts: [
      {name_fr: "Le Vœu de l’Exilé (remplace le Vœu du Chevalier)", name_en: "The Exile's Vow (replaces the Knight's Vow)", points: 0},
      {name_fr: "Le Vœu du Croisé (remplace le Vœu du Chevalier)", name_en: "The Crusader's Vow (replaces the Knight's Vow)", points: 0}
    ],
    equip: [
      {name_fr: "Arme de base, Lances de joute, Boucliers", name_en: "Hand weapon, Lances, Shields", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde, Caparaçon", name_en: "Heavy armour, Barding", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Champion Pégase (champion)", name_en: "First Knight (champion)", points: 7},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 7, magic: {"maxPoints": 50, "types": ["banner"]}},
      {name_fr: "Musicien", name_en: "Musician", points: 7}
    ]
  },
  "mounted-yeomen": {
    id: "mounted-yeomen",
    army: "kingdom-of-bretonnia",
    category: "special",
    name_fr: "Sergents montés",
    name_en: "Mounted Yeomen",
    points: 13,
    specialRules: "Cavalerie Rapide, Tir & Fuite, Conscrits, Ordre Dispersé, Paysannerie, Mouvement de Réserve, Tirailleurs, Rapide",
    opts: [
      {name_fr: "Boucliers", name_en: "Shields", points: 1, perModel: true},
      {name_fr: "Fuite Feinte", name_en: "Feigned Flight", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Lances de cavalerie, Arcs courts", name_en: "Hand weapons, Cavalry spears, Shortbows", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Pas d’armure", name_en: "No armour", points: 0, active: true},
      {name_fr: "Armure légère", name_en: "Light armour", points: 2, active: false}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Prévôt (champion)", name_en: "Warden (champion)", points: 5},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 5},
      {name_fr: "Musicien", name_en: "Musician", points: 5}
    ]
  },
  "squires": {
    id: "squires",
    army: "kingdom-of-bretonnia",
    category: "special",
    name_fr: "Écuyers",
    name_en: "Squires",
    points: 7,
    specialRules: "Mouvement à Couvert, Ordre Dispersé, Paysannerie, Tirailleurs, Avant-garde",
    opts: [
      {name_fr: "Tir & Fuite", name_en: "Fire & Flee", points: 1, perModel: true},
      {name_fr: "Éclaireurs", name_en: "Scouts", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Arcs longs", name_en: "Hand weapons, Longbows", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Escuyer (champion)", name_en: "Esquire (champion)", points: 7},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 5},
      {name_fr: "Musicien", name_en: "Musician", points: 5}
    ]
  },
  "grail-knights": {
    id: "grail-knights",
    army: "kingdom-of-bretonnia",
    category: "rare",
    name_fr: "Chevaliers du Graal",
    name_en: "Grail Knights",
    points: 38,
    specialRules: "Bénédiction de la Dame, Ordre Serré, Contre-charge, Destriers Supérieurs, Première Charge, Formation en Fer de Lance, Saints Vivants, Rapide, Le Vœu du Graal",
    opts: [],
    equip: [
      {name_fr: "Armes de base, Lances de joute, Boucliers", name_en: "Hand weapons, Lances, Shields", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde, Caparaçon", name_en: "Heavy armour, Barding", points: 0, active: true}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Vertu Chevaleresque du Gardien du Graal", name_en: "Grail Guardian's Knightly Virtues", types: ["knightly-virtue"], maxPoints: 0}
    ], lores: []},
    command: [
      {name_fr: "Gardien du Graal (champion)", name_en: "Grail Guardian (champion)", points: 7, magic: {"maxPoints": 50, "types": ["weapon", "armor", "talisman", "enchanted-item"]}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 7, magic: {"maxPoints": 100, "types": ["banner"]}},
      {name_fr: "Musicien", name_en: "Musician", points: 7}
    ]
  },
  "field-trebuchet": {
    id: "field-trebuchet",
    army: "kingdom-of-bretonnia",
    category: "rare",
    name_fr: "Trébuchet de Campagne",
    name_en: "Field Trebuchet",
    points: 100,
    specialRules: "Conscrits, Paysannerie, Tirailleurs",
    opts: [],
    equip: [
      {name_fr: "Trébuchet de Campagne, Armes de base", name_en: "Field Trebuchet, Hand weapons", points: 0, active: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "vampire-count": {
    id: "vampire-count",
    army: "vampire-counts",
    category: "characters",
    name_fr: "Comte Vampire",
    name_en: "Vampire Count {renegade}",
    points: 160,
    specialRules: "Sombre Vitalité, Inflammable, Indomptable (2), Domaine de la Non-vie, Mort-vivant Nécromantique, Régénération (5+)",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true},
      {name_fr: "Sorcier de Niveau 1", name_en: "Level 1 Wizard", points: 30, perModel: true},
      {name_fr: "Sorcier de Niveau 2", name_en: "Level 2 Wizard", points: 60, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Lance de joute (si monté)", name_en: "Lance (when mounted)", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Pas d’armure", name_en: "No armour", points: 0, active: true},
      {name_fr: "Armure légère", name_en: "Light armour", points: 3, active: false},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 6, active: false},
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 9, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Cauchemar", name_en: "Nightmare", points: 16},
      {name_fr: "Trône de Sabbat", name_en: "Coven Throne", points: 210},
      {name_fr: "Terreur des Abîmes", name_en: "Abyssal Terror", points: 120},
      {name_fr: "Dragon Zombie", name_en: "Zombie Dragon", points: 215}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "arcane-item", "enchanted-item"], maxPoints: 100},
      {name_fr: "Pouvoirs Vampiriques", name_en: "Vampiric Powers", types: ["vampiric-power"], maxPoints: 100}
    ], lores: ["dark-magic", "illusion", "necromancy"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "vampire-thrall": {
    id: "vampire-thrall",
    army: "vampire-counts",
    category: "characters",
    name_fr: "Vampires Nouveau-né",
    name_en: "Vampire Thrall",
    points: 75,
    specialRules: "Bannière du Comte, Sombre Vitalité, Inflammable, Indomptable (1), Domaine de la Non-vie, Mort-vivant Nécromantique, Régénération (5+)",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true},
      {name_fr: "Sorcier de Niveau 1", name_en: "Level 1 Wizard", points: 30, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Lance de joute (si monté)", name_en: "Lance (when mounted)", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Pas d’armure", name_en: "No armour", points: 0, active: true},
      {name_fr: "Armure légère", name_en: "Light armour", points: 3, active: false},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 6, active: false},
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 9, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Cauchemar", name_en: "Nightmare", points: 16},
      {name_fr: "Trône de Sabbat", name_en: "Coven Throne", points: 210}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "arcane-item", "enchanted-item"], maxPoints: 50},
      {name_fr: "Pouvoirs Vampiriques", name_en: "Vampiric Powers", types: ["vampiric-power"], maxPoints: 50}
    ], lores: ["dark-magic", "illusion", "necromancy"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "master-necromancer": {
    id: "master-necromancer",
    army: "vampire-counts",
    category: "characters",
    name_fr: "Maître Nécromancien",
    name_en: "Master Necromancer",
    points: 130,
    specialRules: "Sombre Vitalité, Indomptable (1), Invocation de Nehek, Domaine de la Non-vie, Mort-vivant Nécromantique, Régénération (5+)",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Cauchemar", name_en: "Nightmare", points: 16},
      {name_fr: "Machine Mortis", name_en: "Mortis Engine", points: 195},
      {name_fr: "Terreur des Abîmes", name_en: "Abyssal Terror", points: 120},
      {name_fr: "Dragon Zombie", name_en: "Zombie Dragon", points: 215}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor-mages", "arcane-item", "enchanted-item", "talisman"], maxPoints: 100}
    ], lores: ["dark-magic", "illusion", "necromancy"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "necromantic-acolyte": {
    id: "necromantic-acolyte",
    army: "vampire-counts",
    category: "characters",
    name_fr: "Acolyte Nécromantique",
    name_en: "Necromantic Acolyte",
    points: 60,
    specialRules: "Sorcier de Niveau 1 (ou 2), Sombre Vitalité, Indomptable (1), Invocation de Nehek, Domaine de la Non-vie, Mort-vivant Nécromantique, Régénération (5+)",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Cauchemar", name_en: "Nightmare", points: 16},
      {name_fr: "Machine Mortis", name_en: "Mortis Engine", points: 195}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor-mages", "talisman", "arcane-item", "enchanted-item"], maxPoints: 50}
    ], lores: ["dark-magic", "illusion", "necromancy"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "strigoi-ghoul-king": {
    id: "strigoi-ghoul-king",
    army: "vampire-counts",
    category: "characters",
    name_fr: "Roi Goule",
    name_en: "Strigoi Ghoul King",
    points: 145,
    specialRules: "Sombre Vitalité, Inflammable, Haine (Tous les ennemis), Indomptable (1), Domaine de la Non-vie, Mort-vivant Nécromantique, Attaques Empoisonnées, Régénération (5+), La Soif Rouge",
    opts: [
      {name_fr: "Sorcier de Niveau 1", name_en: "Level 1 Wizard", points: 30, perModel: true},
      {name_fr: "Sorcier de Niveau 2", name_en: "Level 2 Wizard", points: 60, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Terreurgheist", name_en: "Terrorgheist {mount}", points: 185}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "talisman", "arcane-item", "enchanted-item"], maxPoints: 75},
      {name_fr: "Pouvoirs Vampiriques", name_en: "Vampiric Powers", types: ["vampiric-power"], maxPoints: 75}
    ], lores: ["battle-magic", "dark-magic", "necromancy"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "cairn-wraith": {
    id: "cairn-wraith",
    army: "vampire-counts",
    category: "characters",
    name_fr: "Spectres des Cairns",
    name_en: "Cairn Wraith",
    points: 50,
    specialRules: "Éthéré, Indomptable (1), Mort-vivant Nécromantique, Régénération (6+), Terreur",
    opts: [],
    equip: [
      {name_fr: "Faux spectrale", name_en: "Spectral scythe {cairn wraith}", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "wight-king": {
    id: "wight-king",
    army: "vampire-counts",
    category: "characters",
    name_fr: "Roi Revenant",
    name_en: "Wight King",
    points: 85,
    specialRules: "Indomptable (1), Coup Fatal, Mort-vivant Nécromantique, Régénération (5+)",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Lance de joute (si monté)", name_en: "Lance (when mounted)", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Coursier Squelette", name_en: "Skeletal Steed {vampire counts}", points: 14}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 100}
    ], lores: []},
    command: []
  },
  "wight-lord": {
    id: "wight-lord",
    army: "vampire-counts",
    category: "characters",
    name_fr: "Seigneur Revenant",
    name_en: "Wight Lord",
    points: 40,
    specialRules: "Coup Fatal, Mort-vivant Nécromantique, Régénération (6+), Bannière du Revenant",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Lance de joute (si monté)", name_en: "Lance (when mounted)", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Coursier Squelette", name_en: "Skeletal Steed {vampire counts}", points: 14}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "tomb-banshee": {
    id: "tomb-banshee",
    army: "vampire-counts",
    category: "characters",
    name_fr: "Banshee",
    name_en: "Tomb Banshee",
    points: 90,
    specialRules: "Éthéré, Indomptable (1), Attaques Magiques, Mort-vivant Nécromantique, Régénération (6+), Terreur, Cri Funeste",
    opts: [],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "skeleton-warriors": {
    id: "skeleton-warriors",
    army: "tomb-kings-of-khemri",
    category: "core",
    name_fr: "Guerriers Squelette",
    name_en: "Skeleton Warriors {tomb kings}",
    points: 4,
    specialRules: "Ordre Serré, Horde, Morts-vivants de Nehekhara, Régénération (6+), Unité Régimentaire",
    opts: [
      {name_fr: "Boucliers", name_en: "Shields", points: 0, active: true, perModel: true},
      {name_fr: "Phalange de Nehekhara", name_en: "Nehekharan Phalanx", points: 10}
    ],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, perModel: true},
      {name_fr: "Lances d’infanterie", name_en: "Thrusting spears", points: 1, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 1, active: false}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Maître d’Armes (champion)", name_en: "Master of Arms (champion)", points: 5, magic: {"types": ["weapon", "armor", "talisman", "arcane-item", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 5, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 5}
    ]
  },
  "zombies": {
    id: "zombies",
    army: "vampire-counts",
    category: "core",
    name_fr: "Zombies",
    name_en: "Zombies",
    points: 3,
    specialRules: "Ordre Serré, Horde, Mort-vivant Nécromantique, Régénération (6+), Cadavres Frais",
    opts: [],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 5},
      {name_fr: "Musicien", name_en: "Musician", points: 5}
    ]
  },
  "crypt-ghouls": {
    id: "crypt-ghouls",
    army: "vampire-counts",
    category: "core",
    name_fr: "Goules",
    name_en: "Crypt Ghouls",
    points: 9,
    specialRules: "Mouvement à Couvert, Mort-vivant Nécromantique, Ordre Dispersé, Attaques Empoisonnées, Régénération (6+), Mouvement de Réserve, Tirailleurs",
    opts: [],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Nécrophage", name_en: "Crypt Ghast", points: 6}
    ]
  },
  "bat-swarm": {
    id: "bat-swarm",
    army: "vampire-counts",
    category: "core",
    name_fr: "Nuées de Chauves-souris",
    name_en: "Bat Swarms",
    points: 39,
    specialRules: "Vol (7), Mort-vivant Nécromantique, Régénération (6+), Tirailleurs",
    opts: [],
    equip: [
      {name_fr: "Griffes et crocs (Armes de base)", name_en: "Claws and fangs (Hand weapons)", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "dire-wolves": {
    id: "dire-wolves",
    army: "vampire-counts",
    category: "core",
    name_fr: "Loup Funeste",
    name_en: "Dire Wolves",
    points: 8,
    specialRules: "Mort-vivant Nécromantique, Ordre Dispersé, Régénération (6+), Mouvement de Réserve, Charge Écumante, Rapide, Avant-garde",
    opts: [],
    equip: [
      {name_fr: "Griffes et crocs (Armes de base)", name_en: "Claws and fangs (Hand weapons)", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Loup de Sang", name_en: "Doom Wolf", points: 6}
    ]
  },
  "grave-guard-core": {
    id: "grave-guard-core",
    army: "vampire-counts",
    category: "core",
    name_fr: "Garde des Cryptes",
    name_en: "Grave Guard",
    points: 11,
    specialRules: "Coup de Fendoir, Ordre Serré, Indomptable (1), Mort-vivant Nécromantique, Régénération (6+)",
    opts: [
      {name_fr: "Boucliers", name_en: "Shields", points: 0, active: true, perModel: true},
      {name_fr: "Bien Entraînés", name_en: "Drilled", points: 2, perModel: true},
      {name_fr: "Défense Implacable", name_en: "Implacable Defence", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, perModel: true},
      {name_fr: "Armes lourdes (remplace les boucliers)", name_en: "Great weapons (replace shields)", points: 1, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Sénéchal", name_en: "Seneschal", points: 6, magic: {"types": ["weapon", "armor", "talisman", "arcane-item", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "black-knights-core": {
    id: "black-knights-core",
    army: "vampire-counts",
    category: "core",
    name_fr: "Chevaliers Noirs",
    name_en: "Black Knights",
    points: 24,
    specialRules: "Coup de Fendoir (Chevaliers Noirs & Chevalier Infernal uniquement), Ordre Serré, Première Charge, Mort-vivant Nécromantique, Régénération (6+), Rapide",
    opts: [
      {name_fr: "Caparaçon", name_en: "Barding", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Sabots squelettiques", name_en: "Hand weapons, Skeletal hooves", points: 0, active: true, perModel: true},
      {name_fr: "Lances de joute, Sabots squelettiques", name_en: "Lances, Skeletal hooves", points: 2, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde, Boucliers", name_en: "Heavy armour, Shields", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Chevalier Infernal", name_en: "Hell Knight", points: 6, magic: {"types": ["weapon", "armor", "talisman", "arcane-item", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "grave-guard": {
    id: "grave-guard",
    army: "vampire-counts",
    category: "special",
    name_fr: "Garde des Cryptes",
    name_en: "Grave Guard",
    points: 11,
    specialRules: "Coup de Fendoir, Ordre Serré, Indomptable (1), Mort-vivant Nécromantique, Régénération (6+)",
    opts: [
      {name_fr: "Boucliers", name_en: "Shields", points: 0, active: true, perModel: true},
      {name_fr: "Bien Entraînés", name_en: "Drilled", points: 2, perModel: true},
      {name_fr: "Défense Implacable", name_en: "Implacable Defence", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, perModel: true},
      {name_fr: "Armes lourdes (remplace les boucliers)", name_en: "Great weapons (replace shields)", points: 1, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Sénéchal", name_en: "Seneschal", points: 6, magic: {"types": ["weapon", "armor", "talisman", "arcane-item", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "black-knights": {
    id: "black-knights",
    army: "vampire-counts",
    category: "special",
    name_fr: "Chevaliers Noirs",
    name_en: "Black Knights",
    points: 24,
    specialRules: "Coup de Fendoir (Chevaliers Noirs & Chevalier Infernal uniquement), Ordre Serré, Première Charge, Mort-vivant Nécromantique, Régénération (6+), Rapide",
    opts: [
      {name_fr: "Caparaçon", name_en: "Barding", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Sabots squelettiques", name_en: "Hand weapons, Skeletal hooves", points: 0, active: true, perModel: true},
      {name_fr: "Lances de joute, Sabots squelettiques", name_en: "Lances, Skeletal hooves", points: 2, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde, Boucliers", name_en: "Heavy armour, Shields", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Chevalier Infernal", name_en: "Hell Knight", points: 6, magic: {"types": ["weapon", "armor", "talisman", "arcane-item", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "crypt-horrors": {
    id: "crypt-horrors",
    army: "vampire-counts",
    category: "special",
    name_fr: "Horreurs des Cryptes",
    name_en: "Crypt Horrors",
    points: 46,
    specialRules: "Indomptable (1), Mouvement à Couvert, Mort-vivant Nécromantique, Ordre Dispersé, Régénération (6+), Attaques de Piétinement (1)",
    opts: [],
    equip: [
      {name_fr: "Griffes crasseuses", name_en: "Filth-encrusted claws", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Hideur des Cryptes", name_en: "Crypt Haunter", points: 7}
    ]
  },
  "fell-bats": {
    id: "fell-bats",
    army: "vampire-counts",
    category: "special",
    name_fr: "Chauves-Souris Géantes",
    name_en: "Fell Bats",
    points: 15,
    specialRules: "Vol (10), Mort-vivant Nécromantique, Régénération (6+), Tirailleurs, Rapide",
    opts: [],
    equip: [
      {name_fr: "Griffes et crocs (Armes de base)", name_en: "Claws and fangs (Hand weapons)", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "spirit-hosts": {
    id: "spirit-hosts",
    army: "vampire-counts",
    category: "special",
    name_fr: "Nuée d’Esprits",
    name_en: "Spirit Hosts",
    points: 49,
    specialRules: "Esprits Liés, Éthéré, Attaques Magiques, Mort-vivant Nécromantique, Ordre Dispersé, Régénération (6+), Mouvement de Réserve",
    opts: [],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "vargheists": {
    id: "vargheists",
    army: "vampire-counts",
    category: "rare",
    name_fr: "Vargheists",
    name_en: "Vargheists",
    points: 61,
    specialRules: "Arme Perforante (2), Sombre Vitalité, Inflammable, Vol (9), Frénésie, Indomptable (1), Mort-vivant Nécromantique, Régénération (6+), Tirailleurs",
    opts: [],
    equip: [
      {name_fr: "Griffes mortelles", name_en: "Wicked claws", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Vargoyle", name_en: "Vargoyle", points: 7}
    ]
  },
  "terrorgheist": {
    id: "terrorgheist",
    army: "vampire-counts",
    category: "special",
    name_fr: "Terreurgheist",
    name_en: "Terrorgheist",
    points: 205,
    specialRules: "Ordre Serré, Vol (9), Indomptable (1), Infesté, Grande Cible, Mort-vivant Nécromantique, Régénération (5+), Attaques de Piétinement (D6), Rapide, Terreur, Cri Funeste",
    opts: [],
    equip: [
      {name_fr: "Serres crasseuses, Gueule pourrie", name_en: "Filth-encrusted talons, Rancid maw", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Peau calleuse (Armure légère)", name_en: "Calloused hide (light armour)", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: []
  },
  "corpse-cart": {
    id: "corpse-cart",
    army: "vampire-counts",
    category: "special",
    name_fr: "Charrette Macabre",
    name_en: "Corpse Cart",
    points: 115,
    specialRules: "Sorcier de Niveau 1 (Nécromancie), Ordre Serré, Sombre Vitalité, Première Charge, Touches d’Impact (D3+1), Indomptable (1), Domaine de la Non-vie, Mort-vivant Nécromantique, Attaques Aléatoires (Cortège Inapaisé uniquement), Régénération (6+)",
    opts: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, perModel: true},
      {name_fr: "Fouet", name_en: "Whip", points: 3, perModel: true},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 3, perModel: true}
    ],
    equip: [
      {name_fr: "Brasero Infernal", name_en: "Balefire Brazier", points: 10, active: true},
      {name_fr: "Tintinnabulation Dissonante", name_en: "Warped Tintinnabulation", points: 15, active: false}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "tomb-king": {
    id: "tomb-king",
    army: "tomb-kings-of-khemri",
    category: "characters",
    name_fr: "Roi des Tombes",
    name_en: "Tomb King",
    points: 160,
    specialRules: "Malédiction de la Nécropole, Desséchés, Inflammable, Indomptable (2), Khopesh, Que Ma Volonté Soit Faite, Morts-vivants de Nehekhara, Régénération (5+)",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Fléau", name_en: "Flail", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Hallebarde", name_en: "Halberd", points: 3, active: false, perModel: true},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 2, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Coursier Squelette", name_en: "Skeletal Steed {tomb kings}", points: 12},
      {name_fr: "Coursier Squelette Caparaçonné", name_en: "Barded Skeletal Steed", points: 16},
      {name_fr: "Char Squelette", name_en: "Skeleton Chariot", points: 35},
      {name_fr: "Dragon d’Os Nécrolithe", name_en: "Necrolith Bone Dragon", points: 195},
      {name_fr: "Sphinx de Guerre de Khemri", name_en: "Khemrian Warsphinx", points: 175}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 100},
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item", "arcane-item"], maxPoints: 100}
    ], lores: ["necromancy"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "The Hierophant", name_en: "The Hierophant", points: 0, exclusive: false}
    ]
  },
  "tomb-prince": {
    id: "tomb-prince",
    army: "tomb-kings-of-khemri",
    category: "characters",
    name_fr: "Prince des Tombes",
    name_en: "Tomb Prince",
    points: 90,
    specialRules: "Malédiction de la Nécropole, Desséchés, Inflammable, Indomptable (2), Khopesh, Que Ma Volonté Soit Faite, Morts-vivants de Nehekhara, Régénération (5+)",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Fléau", name_en: "Flail", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Hallebarde", name_en: "Halberd", points: 3, active: false, perModel: true},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 2, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Coursier Squelette", name_en: "Skeletal Steed {tomb kings}", points: 12},
      {name_fr: "Coursier Squelette Caparaçonné", name_en: "Barded Skeletal Steed", points: 16},
      {name_fr: "Char Squelette", name_en: "Skeleton Chariot", points: 35}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50},
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item", "arcane-item"], maxPoints: 50}
    ], lores: ["necromancy"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "The Hierophant", name_en: "The Hierophant", points: 0, exclusive: false}
    ]
  },
  "royal-herald": {
    id: "royal-herald",
    army: "tomb-kings-of-khemri",
    category: "characters",
    name_fr: "Héraut Royal",
    name_en: "Royal Herald",
    points: 60,
    specialRules: "Bannière du Roi, Desséchés, Inflammable, Indomptable (1), Khopesh, Morts-vivants de Nehekhara, Régénération (5+), Protecteur Assermenté",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false},
      {name_fr: "Fléau", name_en: "Flail", points: 3, active: false},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false},
      {name_fr: "Hallebarde", name_en: "Halberd", points: 3, active: false},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 2, active: false}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Coursier Squelette", name_en: "Skeletal Steed {tomb kings}", points: 12},
      {name_fr: "Coursier Squelette Caparaçonné", name_en: "Barded Skeletal Steed", points: 16},
      {name_fr: "Char Squelette", name_en: "Skeleton Chariot", points: 35}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "arcane-item", "enchanted-item"], maxPoints: 75}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "high-priest": {
    id: "high-priest",
    army: "tomb-kings-of-khemri",
    category: "characters",
    name_fr: "Grand Prêtre",
    name_en: "High Priest",
    points: 140,
    specialRules: "Levez-vous!, Malédiction de la Nécropole, Indomptable (1), Khopesh, Domaine de Nehekhara, Morts-vivants de Nehekhara, Régénération (5+), Surgis de Sous les Sables",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Coursier Squelette", name_en: "Skeletal Steed {tomb kings}", points: 12},
      {name_fr: "Coursier Squelette Caparaçonné", name_en: "Barded Skeletal Steed", points: 16},
      {name_fr: "Dragon d’Os Nécrolithe", name_en: "Necrolith Bone Dragon", points: 195}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor-mages", "talisman", "arcane-item", "enchanted-item"], maxPoints: 100},
      {name_fr: "Parchemins d’Incantation", name_en: "Incantation Scrolls", types: ["incantation-scroll"], maxPoints: 0}
    ], lores: ["elementalism", "illusion", "necromancy"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "The Hierophant", name_en: "The Hierophant", points: 0, exclusive: false}
    ]
  },
  "mortuary-priest": {
    id: "mortuary-priest",
    army: "tomb-kings-of-khemri",
    category: "characters",
    name_fr: "Prêtre Mortuaire",
    name_en: "Mortuary Priest",
    points: 55,
    specialRules: "Levez-vous!, Malédiction de la Nécropole, Indomptable (1), Khopesh, Domaine de Nehekhara, Morts-vivants de Nehekhara, Régénération (5+), Surgis de Sous les Sables",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Coursier Squelette", name_en: "Skeletal Steed {tomb kings}", points: 12},
      {name_fr: "Coursier Squelette Caparaçonné", name_en: "Barded Skeletal Steed", points: 16}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor-mages", "talisman", "arcane-item", "enchanted-item"], maxPoints: 50},
      {name_fr: "Parchemins d’Incantation", name_en: "Incantation Scrolls", types: ["incantation-scroll"], maxPoints: 0}
    ], lores: ["elementalism", "illusion", "necromancy"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "The Hierophant", name_en: "The Hierophant", points: 0, exclusive: false},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "arch-necrotect": {
    id: "arch-necrotect",
    army: "tomb-kings-of-khemri",
    category: "characters",
    name_fr: "Archi-Nécrotecte",
    name_en: "Arch Necrotect",
    points: 90,
    specialRules: "Desséchés, Inflammable, Contremaître Immortel, Khopesh, Morts-vivants de Nehekhara, Régénération (5+), Tailleur de Pierre",
    opts: [],
    equip: [
      {name_fr: "Arme de base, Fouet", name_en: "Hand weapon, Whip", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 75},
      {name_fr: "Parchemins d’Incantation", name_en: "Incantation Scrolls", types: ["incantation-scroll"], maxPoints: 0}
    ], lores: []},
    command: []
  },
  "necrotect": {
    id: "necrotect",
    army: "tomb-kings-of-khemri",
    category: "characters",
    name_fr: "Nécrotecte",
    name_en: "Necrotect",
    points: 55,
    specialRules: "Desséchés, Éternel Contremaître, Inflammable, Khopesh, Morts-vivants de Nehekhara, Régénération (6+)",
    opts: [],
    equip: [
      {name_fr: "Arme de base, Fouet", name_en: "Hand weapon, Whip", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50},
      {name_fr: "Parchemins d’Incantation", name_en: "Incantation Scrolls", types: ["incantation-scroll"], maxPoints: 0}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "settra-the-imperishable": {
    id: "settra-the-imperishable",
    army: "tomb-kings-of-khemri",
    category: "characters",
    name_fr: "Settra l’Impérissable",
    name_en: "Settra the Imperishable",
    points: 445,
    specialRules: "Commandeur des Légions, Malédiction de la Nécropole, Desséchés, Inflammable, Touches d’Impact (2D3), Indomptable (3), Domaine de Nehekhara, Que Ma Volonté Soit Faite, Morts-vivants de Nehekhara, Régénération (5+), Settra Ne s’Agenouille Pas!, Settra le Grand",
    opts: [
      {name_fr: "Sorcier de Niveau 1", name_en: "Level 1 Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "La Lame Bénie de Ptra", name_en: "The Blessed Blade of Ptra", points: 0, active: true}
    ],
    armor: [
      {name_fr: "La Couronne de Nehekhara, La Broche-Scarabée d’Usirian", name_en: "The Crown of Nehekhara, The Scarab Brooch of Usirian", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "Le Char des Dieux", name_en: "The Chariot of the Gods", points: 0, active: true}
    ],
    magic: {items: [], lores: ["necromancy"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "The Hierophant", name_en: "The Hierophant", points: 0}
    ]
  },
  "prince-apophas-the-cursed-scarab-lord": {
    id: "prince-apophas-the-cursed-scarab-lord",
    army: "tomb-kings-of-khemri",
    category: "characters",
    name_fr: "Prince Apophas",
    name_en: "Prince Apophas",
    points: 130,
    specialRules: "Embusqueurs, Vol (9), Indomptable (2), Khopesh, Solitaire, Morts-vivants de Nehekhara, Régénération (5+), Prince Scarabée, Faucheur d’Usirian, Terreur",
    opts: [],
    equip: [
      {name_fr: "Arme de base, Masse Grouillante", name_en: "Hand weapon, Swarming Mass", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: []
  },
  "nekaph-emissary-of-settra": {
    id: "nekaph-emissary-of-settra",
    army: "tomb-kings-of-khemri",
    category: "characters",
    name_fr: "Nekaph",
    name_en: "Nekaph",
    points: 120,
    specialRules: "Desséchés, Inflammable, Héraut du Désespoir, Indomptable (2), Coup Fatal, Morts-vivants de Nehekhara, Régénération (5+), Champion de Settra, Protecteur Assermenté",
    opts: [],
    equip: [
      {name_fr: "Le Fléau des Rois Conquis", name_en: "The Flail of Conquered Kings", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "skeleton-archers": {
    id: "skeleton-archers",
    army: "tomb-kings-of-khemri",
    category: "core",
    name_fr: "Archers Squelettes",
    name_en: "Skeleton Archers",
    points: 5,
    specialRules: "Flèches d’Asaph, Détachement, Morts-vivants de Nehekhara, Ordre Dispersé, Régénération (6+)",
    opts: [
      {name_fr: "Détachement", name_en: "Detachment", points: 0}
    ],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, perModel: true},
      {name_fr: "Arcs de guerre", name_en: "Warbows", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 1, active: false}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Maître des Flèches (champion)", name_en: "Master of Arrows (champion)", points: 5},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 5},
      {name_fr: "Musicien", name_en: "Musician", points: 5}
    ]
  },
  "tomb-guard-core": {
    id: "tomb-guard-core",
    army: "tomb-kings-of-khemri",
    category: "core",
    name_fr: "Gardien des Tombes",
    name_en: "Tomb Guard",
    points: 10,
    specialRules: "Coup de Fendoir, Ordre Serré, Indomptable (1), Khopesh, Morts-vivants de Nehekhara, Régénération (6+), Unité Régimentaire",
    opts: [
      {name_fr: "Bien Entraînés", name_en: "Drilled", points: 1, perModel: true},
      {name_fr: "Phalange de Nehekhara", name_en: "Nehekharan Phalanx", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, perModel: true},
      {name_fr: "Hallebardes", name_en: "Halberds", points: 1, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère, Boucliers", name_en: "Light armour, Shields", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Capitaine des Tombes (champion)", name_en: "Tomb Captain (champion)", points: 6, magic: {"types": ["talisman", "armor", "weapon", "arcane-item", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "sepulchral-stalkers-core": {
    id: "sepulchral-stalkers-core",
    army: "tomb-kings-of-khemri",
    category: "core",
    name_fr: "Rôdeurs Sépulcraux",
    name_en: "Sepulchral Stalkers",
    points: 52,
    specialRules: "Ordre Serré, Indomptable (1), Morts-vivants de Nehekhara, Régénération (6+), Rapide",
    opts: [
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Hallebardes, Queues sinueuses, Regard pétrificateur", name_en: "Hand weapons, Halberds, Writhing tails, Petrifying gaze", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: []
  },
  "skeleton-skirmishers": {
    id: "skeleton-skirmishers",
    army: "tomb-kings-of-khemri",
    category: "core",
    name_fr: "Tirailleurs Squelettes",
    name_en: "Skeleton Skirmishers",
    points: 4,
    specialRules: "Flèches d’Asaph, Escorteurs de Chars, Morts-vivants de Nehekhara, Régénération (6+), Tirailleurs, Avant-garde",
    opts: [
      {name_fr: "Boucliers", name_en: "Shields", points: 1, perModel: true},
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 1, perModel: true},
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 0, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, perModel: true},
      {name_fr: "Armes de base, Arcs de guerre", name_en: "Hand weapons, Warbows", points: 1, active: false, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "glade-lord": {
    id: "glade-lord",
    army: "wood-elf-realms",
    category: "characters",
    name_fr: "Seigneur Sylvain",
    name_en: "Glade Lord",
    points: 135,
    specialRules: "La Flèche de Kurnous, Esquiveur, Tir & Fuite, Ignore les Couverts, Mouvement à Couvert, Cri de Ralliement, Frappe En Premier",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true},
      {name_fr: "Arc long Asrai", name_en: "Asrai longbow", points: 0, perModel: true},
      {name_fr: "Tatouages Talismaniques", name_en: "Talismanic Tattoos", points: 10},
      {name_fr: "Bodkins Cabalistiques", name_en: "Arcane Bodkins", points: 6, perModel: true},
      {name_fr: "Flèches de Fléau des Furies", name_en: "Hagbane Tips", points: 6, perModel: true},
      {name_fr: "Traits de Feu Lunaire", name_en: "Moonfire Shot", points: 3, perModel: true},
      {name_fr: "Échardes d’Archère Hâtive", name_en: "Swiftshiver Shards", points: 6, perModel: true},
      {name_fr: "Pointes de Parabole Pure", name_en: "Trueflight Arrows", points: 3, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 2, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Coursier Elfique", name_en: "Elven Steed", points: 14},
      {name_fr: "Grand Cerf", name_en: "Great Stag", points: 50},
      {name_fr: "Faucon de Guerre", name_en: "Warhawk", points: 30},
      {name_fr: "Dragon des Forêts", name_en: "Forest Dragon", points: 275},
      {name_fr: "Grand Aigle", name_en: "Great Eagle {mount}", points: 60}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 100},
      {name_fr: "Fiel-follets des Forêts", name_en: "Forest Spites", types: ["forest-spite"], maxPoints: 50},
      {name_fr: "Clans", name_en: "Kindreds", types: ["kindred"], maxPoints: 0}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "glade-captain": {
    id: "glade-captain",
    army: "wood-elf-realms",
    category: "characters",
    name_fr: "Capitaine Sylvain",
    name_en: "Glade Captain",
    points: 70,
    specialRules: "La Flèche de Kurnous, Esquiveur, Tir & Fuite, Ignore les Couverts, Mouvement à Couvert, Cri de Ralliement, Frappe En Premier",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2},
      {name_fr: "Arc long Asrai", name_en: "Asrai longbow", points: 0},
      {name_fr: "Tatouages Talismaniques", name_en: "Talismanic Tattoos", points: 10},
      {name_fr: "Bodkins Cabalistiques", name_en: "Arcane Bodkins", points: 6},
      {name_fr: "Flèches de Fléau des Furies", name_en: "Hagbane Tips", points: 6},
      {name_fr: "Traits de Feu Lunaire", name_en: "Moonfire Shot", points: 3},
      {name_fr: "Échardes d’Archère Hâtive", name_en: "Swiftshiver Shards", points: 6},
      {name_fr: "Pointes de Parabole Pure", name_en: "Trueflight Arrows", points: 3}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 2, active: false}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Coursier Elfique", name_en: "Elven Steed", points: 14},
      {name_fr: "Grand Cerf", name_en: "Great Stag", points: 50},
      {name_fr: "Faucon de Guerre", name_en: "Warhawk", points: 30},
      {name_fr: "Grand Aigle", name_en: "Great Eagle {mount}", points: 60}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50},
      {name_fr: "Fiel-follets des Forêts", name_en: "Forest Spites", types: ["forest-spite"], maxPoints: 50},
      {name_fr: "Clans", name_en: "Kindreds", types: ["kindred"], maxPoints: 0}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "spellweaver": {
    id: "spellweaver",
    army: "wood-elf-realms",
    category: "characters",
    name_fr: "Tisseur de Charmes",
    name_en: "Spellweaver",
    points: 155,
    specialRules: "Réflexes Elfiques, Domaine d’Athel Loren, Attaques Magiques, Mouvement à Couvert",
    opts: [
      {name_fr: "Tatouages Talismaniques", name_en: "Talismanic Tattoos", points: 15, perModel: true},
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Coursier Elfique", name_en: "Elven Steed", points: 14},
      {name_fr: "Licorne", name_en: "Unicorn", points: 35},
      {name_fr: "Faucon de Guerre", name_en: "Warhawk", points: 30},
      {name_fr: "Grand Aigle", name_en: "Great Eagle {mount}", points: 60}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "talisman", "arcane-item", "enchanted-item"], maxPoints: 100},
      {name_fr: "Fiel-follets des Forêts", name_en: "Forest Spites", types: ["forest-spite"], maxPoints: 50},
      {name_fr: "Clans", name_en: "Kindreds", types: ["kindred"], maxPoints: 0}
    ], lores: ["battle-magic", "elementalism", "high-magic", "illusion", "lore-of-the-wilds"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "spellsinger": {
    id: "spellsinger",
    army: "wood-elf-realms",
    category: "characters",
    name_fr: "Chanteur de Sorts",
    name_en: "Spellsinger",
    points: 80,
    specialRules: "Réflexes Elfiques, Domaine d’Athel Loren, Attaques Magiques, Mouvement à Couvert",
    opts: [
      {name_fr: "Tatouages Talismaniques", name_en: "Talismanic Tattoos", points: 15, perModel: true},
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Coursier Elfique", name_en: "Elven Steed", points: 14},
      {name_fr: "Licorne", name_en: "Unicorn", points: 35},
      {name_fr: "Faucon de Guerre", name_en: "Warhawk", points: 30},
      {name_fr: "Grand Aigle", name_en: "Great Eagle {mount}", points: 60}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "talisman", "arcane-item", "enchanted-item"], maxPoints: 50},
      {name_fr: "Fiel-follets des Forêts", name_en: "Forest Spites", types: ["forest-spite"], maxPoints: 50},
      {name_fr: "Clans", name_en: "Kindreds", types: ["kindred"], maxPoints: 0}
    ], lores: ["battle-magic", "elementalism", "high-magic", "illusion", "lore-of-the-wilds"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "shadowdancer": {
    id: "shadowdancer",
    army: "wood-elf-realms",
    category: "characters",
    name_fr: "Danseur des Ombres",
    name_en: "Shadowdancer",
    points: 85,
    specialRules: "Esquiveur, Charge Dévastatrice, Immunisé à la Psychologie, Solitaire, Mouvement à Couvert, Frappe En Premier, Tatouages Talismaniques, Troubadour de Loec",
    opts: [
      {name_fr: "Sorcier de Niveau 1", name_en: "Level 1 Wizard", points: 35, perModel: true}
    ],
    equip: [
      {name_fr: "Lance de Loec", name_en: "Spear of Loec", points: 0, active: true, perModel: true},
      {name_fr: "Lames du Trompeur", name_en: "Trickster's Blades", points: 0, active: false, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "talisman", "arcane-item", "enchanted-item"], maxPoints: 50},
      {name_fr: "Fiel-follets des Forêts", name_en: "Forest Spites", types: ["forest-spite"], maxPoints: 50}
    ], lores: ["battle-magic", "illusion", "lore-of-the-wilds"]},
    command: []
  },
  "waystalker": {
    id: "waystalker",
    army: "wood-elf-realms",
    category: "characters",
    name_fr: "Rôdeur Sylvain",
    name_en: "Waystalker",
    points: 85,
    specialRules: "Réflexes Elfiques, Esquiveur, Fuite Feinte, Tir & Fuite, Archer à l’Œil de Faucon, Ignore les Couverts, Mouvement à Couvert, Éclaireurs",
    opts: [
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 10},
      {name_fr: "Bodkins Cabalistiques", name_en: "Arcane Bodkins", points: 6},
      {name_fr: "Flèches de Fléau des Furies", name_en: "Hagbane Tips", points: 6},
      {name_fr: "Traits de Feu Lunaire", name_en: "Moonfire Shot", points: 3},
      {name_fr: "Échardes d’Archère Hâtive", name_en: "Swiftshiver Shards", points: 6},
      {name_fr: "Pointes de Parabole Pure", name_en: "Trueflight Arrows", points: 3}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 3, active: false}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50},
      {name_fr: "Fiel-follets des Forêts", name_en: "Forest Spites", types: ["forest-spite"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "treeman-ancient": {
    id: "treeman-ancient",
    army: "wood-elf-realms",
    category: "characters",
    name_fr: "Homme-arbre Vénérable",
    name_en: "Treeman Ancient",
    points: 265,
    specialRules: "Ordre Serré, Inflammable, Immunisé à la Psychologie, Grande Cible, Domaine d’Athel Loren, Attaques Magiques, Mouvement à Couvert, Régénération (5+), Attaques de Piétinement (D3), Obstiné, Terreur, Timmm-berrr!, Esprit des Forêts, Abattage",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true},
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 10}
    ],
    equip: [
      {name_fr: "Poings de chêne, Racines étrangleuses", name_en: "Oaken fists, Strangleroots", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Armure de plate complète (Armure arboricole)", name_en: "Full plate armour (Arboreal armour)", points: 0, active: true}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Fiel-follets des Forêts", name_en: "Forest Spites", types: ["forest-spite"], maxPoints: 100}
    ], lores: ["battle-magic", "elementalism"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "branchwraith": {
    id: "branchwraith",
    army: "wood-elf-realms",
    category: "characters",
    name_fr: "Branchimère",
    name_en: "Branchwraith",
    points: 80,
    specialRules: "Peur, Inflammable, Immunisé à la Psychologie, Domaine d’Athel Loren, Attaques Magiques, Mouvement à Couvert, Régénération (6+), Esprit des Forêts",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère (Chair d’aubier)", name_en: "Light armour (Sapwood flesh)", points: 0, active: true}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Fiel-follets des Forêts", name_en: "Forest Spites", types: ["forest-spite"], maxPoints: 50}
    ], lores: ["battle-magic", "elementalism", "illusion"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "orion": {
    id: "orion",
    army: "wood-elf-realms",
    category: "characters",
    name_fr: "Orion",
    name_en: "Orion",
    points: 455,
    specialRules: "Frénésie, Immunisé à la Psychologie, Attaques Magiques (Chien), Mouvement à Couvert, Résistance à la Magie (2 - Orion), Ordre Dispersé, Attaques de Piétinement (D3+2), Frappe En Premier (Orion), Terreur, Limiers Spectraux (Chien), Indémoralisable",
    opts: [],
    equip: [
      {name_fr: "Cape d’Isha, Serre du Faucon, Cor de la Chasse Sauvage, Lance de Kurnous, Arme de base (Chien)", name_en: "Cloak of Isha, Hawk's Talon, Horn of the Wild Hunt, Spear of Kurnous, Hand weapon (Hound)", points: 0, active: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "araloth": {
    id: "araloth",
    army: "wood-elf-realms",
    category: "characters",
    name_fr: "Araloth",
    name_en: "Araloth",
    points: 150,
    specialRules: "Intrépide Entre Tous, Esquiveur, Faveur de la Déesse, Mouvement à Couvert, Cri de Ralliement, Skaryn le Voleur d’Yeux, Frappe En Premier, Obstiné",
    opts: [],
    equip: [
      {name_fr: "Lance de Talsyn", name_en: "Spear of Talsyn", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Armure lourde, Bouclier", name_en: "Heavy armour, Shield", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "warden-of-talsyn": {
    id: "warden-of-talsyn",
    army: "wood-elf-realms",
    category: "characters",
    name_fr: "Veilleur de Talsyn",
    name_en: "Warden Of Talsyn",
    points: 125,
    specialRules: "Ordre Serré, Incomparable Courage, Bien Entraînés, Réflexes Elfiques, Immunisé à la Psychologie, Mouvement à Couvert, Parade, Frappe En Premier, Obstiné",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 2}
    ],
    equip: [
      {name_fr: "Arme de base, Lance Asrai", name_en: "Hand weapon, Asrai spear", points: 0, active: true},
      {name_fr: "Arme de base, Arme de base additionnelle", name_en: "Hand weapon, Additional hand weapon", points: 3, active: false},
      {name_fr: "Arme de base, Arme lourde", name_en: "Hand weapon, Great weapon", points: 4, active: false}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 75}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "glade-guard": {
    id: "glade-guard",
    army: "wood-elf-realms",
    category: "core",
    name_fr: "Gardes Sylvains",
    name_en: "Glade Guard",
    points: 10,
    specialRules: "Réflexes Elfiques, Mouvement à Couvert, Ordre Dispersé",
    opts: [
      {name_fr: "Tir & Fuite", name_en: "Fire & Flee", points: 1, perModel: true},
      {name_fr: "Avant-garde", name_en: "Vanguard", points: 1, perModel: true},
      {name_fr: "Bodkins Cabalistiques", name_en: "Arcane Bodkins", points: 2, perModel: true},
      {name_fr: "Flèches de Fléau des Furies", name_en: "Hagbane Tips", points: 2, perModel: true},
      {name_fr: "Traits de Feu Lunaire", name_en: "Moonfire Shot", points: 1, perModel: true},
      {name_fr: "Échardes d’Archère Hâtive", name_en: "Swiftshiver Shards", points: 2, perModel: true},
      {name_fr: "Pointes de Parabole Pure", name_en: "Trueflight Arrows", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base, Arcs longs Asrai", name_en: "Hand weapon, Asrai longbows", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Féal", name_en: "Lord's Bowmen", points: 6, magic: {"types": ["weapon", "talisman", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "deepwood-scouts-core": {
    id: "deepwood-scouts-core",
    army: "wood-elf-realms",
    category: "core",
    name_fr: "Éclaireurs du Grand-bois",
    name_en: "Deepwood Scouts",
    points: 13,
    specialRules: "Réflexes Elfiques, Esquiveur, Tir & Fuite, Mouvement à Couvert, Éclaireurs, Tirailleurs",
    opts: [
      {name_fr: "Bodkins Cabalistiques", name_en: "Arcane Bodkins", points: 2, perModel: true},
      {name_fr: "Flèches de Fléau des Furies", name_en: "Hagbane Tips", points: 2, perModel: true},
      {name_fr: "Traits de Feu Lunaire", name_en: "Moonfire Shot", points: 1, perModel: true},
      {name_fr: "Échardes d’Archère Hâtive", name_en: "Swiftshiver Shards", points: 2, perModel: true},
      {name_fr: "Pointes de Parabole Pure", name_en: "Trueflight Arrows", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base, Arcs longs Asrai", name_en: "Hand weapon, Asrai longbows", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Féal", name_en: "Lord's Bowmen", points: 6, magic: {"types": ["weapon", "talisman", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "eternal-guard": {
    id: "eternal-guard",
    army: "wood-elf-realms",
    category: "core",
    name_fr: "Garde Éternelle",
    name_en: "Eternal Guard",
    points: 12,
    specialRules: "Ordre Serré, Réflexes Elfiques, Prouesses Martiales, Mouvement à Couvert, Obstiné",
    opts: [
      {name_fr: "Boucliers", name_en: "Shields", points: 1, perModel: true},
      {name_fr: "Bien Entraînés", name_en: "Drilled", points: 1, perModel: true},
      {name_fr: "Vétérans", name_en: "Veteran", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base, Lances Asrai", name_en: "Hand weapon, Asrai spears", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Gardien Éternel (champion)", name_en: "Eternal Warden (champion)", points: 5, magic: {"types": ["weapon", "armor", "talisman", "enchanted-item"], "maxPoints": 50}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 5, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 5}
    ]
  },
  "dryads": {
    id: "dryads",
    army: "wood-elf-realms",
    category: "core",
    name_fr: "Dryades",
    name_en: "Dryads",
    points: 13,
    specialRules: "Peur, Inflammable, Immunisé à la Psychologie, Attaques Magiques, Mouvement à Couvert, Ordre Dispersé, Régénération (6+), Tirailleurs, Obstiné, Esprit des Forêts, Arme Perforante (1)",
    opts: [
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère (Chair d’aubier)", name_en: "Light armour (Sapwood flesh)", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Nymphe", name_en: "Nymph", points: 5, magic: {"types": ["forest-spite"], "maxPoints": 25}}
    ]
  },
  "tyrant": {
    id: "tyrant",
    army: "ogre-kingdoms",
    category: "characters",
    name_fr: "Tyran",
    name_en: "Tyrant",
    points: 185,
    specialRules: "Arme Perforante (1), Charge Buffle, Peur, Touches d’Impact (2), Charge Ogre",
    opts: [
      {name_fr: "Pistolet Ogre", name_en: "Ogre pistol", points: 6},
      {name_fr: "Paire de pistolets Ogres", name_en: "Brace of Ogre pistols", points: 12}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 4, active: false, perModel: true},
      {name_fr: "Poing d’Acier", name_en: "Ironfist", points: 6, active: false, perModel: true},
      {name_fr: "Poing d’Acier", name_en: "Ironfist {renegade}", points: 6, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 5, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 3, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Mastauroc", name_en: "Stonehorn", points: 195},
      {name_fr: "Mégastodonte", name_en: "Thundertusk", points: 165}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 100},
      {name_fr: "Grand Nom", name_en: "Big Name", types: ["big-name"], maxPoints: 0}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "bruiser": {
    id: "bruiser",
    army: "ogre-kingdoms",
    category: "characters",
    name_fr: "Cogneur",
    name_en: "Bruiser",
    points: 110,
    specialRules: "Arme Perforante (1), Charge Buffle, Peur, Touches d’Impact (2), Charge Ogre",
    opts: [
      {name_fr: "Pistolet Ogre", name_en: "Ogre pistol", points: 6},
      {name_fr: "Paire de pistolets Ogres", name_en: "Brace of Ogre pistols", points: 12}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 4, active: false, perModel: true},
      {name_fr: "Poing d’Acier", name_en: "Ironfist", points: 6, active: false, perModel: true},
      {name_fr: "Poing d’Acier", name_en: "Ironfist {renegade}", points: 6, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 5, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 3, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Mastauroc", name_en: "Stonehorn", points: 195},
      {name_fr: "Mégastodonte", name_en: "Thundertusk", points: 165}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50},
      {name_fr: "Grand Nom", name_en: "Big Name", types: ["big-name"], maxPoints: 0}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "slaughtermaster": {
    id: "slaughtermaster",
    army: "ogre-kingdoms",
    category: "characters",
    name_fr: "Désosseur",
    name_en: "Slaughtermaster",
    points: 230,
    specialRules: "Arme Perforante (1), Peur, Touches d’Impact (2), Domaine de La Gueule, Charge Ogre",
    opts: [
      {name_fr: "Chaudron de Boucher", name_en: "Butcher's Cauldron", points: 30, perModel: true},
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 4, active: false, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["enchanted-item", "talisman", "weapon", "arcane-item"], maxPoints: 100},
      {name_fr: "Grand Nom", name_en: "Big Name", types: ["big-name"], maxPoints: 0}
    ], lores: ["battle-magic", "elementalism", "illusion", "lore-of-the-great-maw"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "butcher": {
    id: "butcher",
    army: "ogre-kingdoms",
    category: "characters",
    name_fr: "Boucher",
    name_en: "Butcher",
    points: 105,
    specialRules: "Arme Perforante (1), Peur, Touches d’Impact (2), Domaine de La Gueule, Charge Ogre",
    opts: [
      {name_fr: "Chaudron de Boucher", name_en: "Butcher's Cauldron", points: 30},
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 4, active: false, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["enchanted-item", "talisman", "weapon", "arcane-item"], maxPoints: 50},
      {name_fr: "Grand Nom", name_en: "Big Name", types: ["big-name"], maxPoints: 0}
    ], lores: ["battle-magic", "elementalism", "illusion", "lore-of-the-great-maw"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "hunter": {
    id: "hunter",
    army: "ogre-kingdoms",
    category: "characters",
    name_fr: "Chasseur",
    name_en: "Hunter",
    points: 115,
    specialRules: "Arme Perforante (1), Peur, Touches d’Impact (1), Solitaire, Mouvement à Couvert, Charge Ogre, Courir avec la Meute",
    opts: [
      {name_fr: "Embusqueurs (à pied)", name_en: "Ambushers", points: 10},
      {name_fr: "Éclaireurs (à pied)", name_en: "Scouts", points: 5},
      {name_fr: "Avant-garde (à pied)", name_en: "Vanguard", points: 3}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 4, active: false, perModel: true},
      {name_fr: "Lance-harpon", name_en: "Harpoon launcher", points: 10, active: false, perModel: true},
      {name_fr: "Arme de base additionnelle, Lance-harpon", name_en: "Additional hand weapon, Harpoon launcher", points: 14, active: false, perModel: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Mastauroc", name_en: "Stonehorn", points: 195},
      {name_fr: "Mégastodonte", name_en: "Thundertusk", points: 165}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50},
      {name_fr: "Grand Nom", name_en: "Big Name", types: ["big-name"], maxPoints: 0}
    ], lores: []},
    command: []
  },
  "firebelly": {
    id: "firebelly",
    army: "ogre-kingdoms",
    category: "characters",
    name_fr: "Ventre-feu",
    name_en: "Firebelly",
    points: 110,
    specialRules: "Arme Perforante (1), Bénédictions du Dieu Volcan, Peur, Attaques Enflammées, Touches d’Impact (1), Charge Ogre",
    opts: [
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 6, perModel: true},
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base, Souffle enflammé", name_en: "Hand weapon, Flaming breath {ogre kingdoms}", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "talisman", "enchanted-item", "arcane-item"], maxPoints: 50}
    ], lores: ["battle-magic", "elementalism"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "ogre-bulls": {
    id: "ogre-bulls",
    army: "ogre-kingdoms",
    category: "core",
    name_fr: "Buffles Ogres",
    name_en: "Ogre Bulls",
    points: 31,
    specialRules: "Arme Perforante (1), Ordre Serré, Peur, Touches d’Impact (1), Charge Ogre",
    opts: [
      {name_fr: "Gnoblar Longue-vue (Porte-étendard)", name_en: "Look-out Gnoblar (Standard bearer)", points: 5}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Armes de base additionnelles", name_en: "Additional hand weapons", points: 3, active: false, perModel: true},
      {name_fr: "Poings d’Acier", name_en: "Ironfists", points: 4, active: false, perModel: true},
      {name_fr: "Poings d’Acier", name_en: "Ironfists {renegade}", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Broyeur (champion)", name_en: "Crusher (champion)", points: 6},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Beugleur (musicien)", name_en: "Bellower (musician)", points: 6}
    ]
  },
  "ironguts": {
    id: "ironguts",
    army: "ogre-kingdoms",
    category: "core",
    name_fr: "Ventres-durs",
    name_en: "Ironguts",
    points: 39,
    specialRules: "Ordre Serré, Peur, Touches d’Impact (1), Charge Ogre",
    opts: [
      {name_fr: "Gnoblar Longue-vue (Porte-étendard)", name_en: "Look-out Gnoblar (Standard bearer)", points: 5},
      {name_fr: "Vétérans", name_en: "Veteran", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Armes lourdes", name_en: "Hand weapons, Great weapons", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: [], maxPoints: 0}
    ], lores: []},
    command: [
      {name_fr: "Ventre de fer (champion)", name_en: "Gutlord (champion)", points: 7, magic: {"types": ["weapon", "armor", "talisman", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 7, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Beugleur (musicien)", name_en: "Bellower (musician)", points: 7}
    ]
  },
  "gnoblar-fighters": {
    id: "gnoblar-fighters",
    army: "ogre-kingdoms",
    category: "core",
    name_fr: "Guerriers Gnoblars",
    name_en: "Gnoblar Fighters",
    points: 2,
    specialRules: "Ordre Serré, Horde, Complètement Insignifiant",
    opts: [],
    equip: [
      {name_fr: "Armes de base, Armes de lancer (Trucs pointus)", name_en: "Hand weapons, Throwing weapons (Sharp stuff)", points: 0, active: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Mord-nez (champion)", name_en: "Groinbiter (champion)", points: 5}
    ]
  },
  "gnoblar-trappers": {
    id: "gnoblar-trappers",
    army: "ogre-kingdoms",
    category: "core",
    name_fr: "Trappeurs Gnoblars",
    name_en: "Gnoblar Trappers",
    points: 5,
    specialRules: "Complètement Insignifiant, Mouvement à Couvert, Éclaireurs, Tirailleurs, Pièges & Collets",
    opts: [],
    equip: [
      {name_fr: "Armes de base, Armes de lancer (Trucs pointus)", name_en: "Hand weapons, Throwing weapons (Sharp stuff)", points: 0, active: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Braconnier (champion)", name_en: "Snarefinger (champion)", points: 5}
    ]
  },
  "sabretusk-pack": {
    id: "sabretusk-pack",
    army: "ogre-kingdoms",
    category: "core",
    name_fr: "Meutes de Crocs de Sabre",
    name_en: "Sabretusk Pack",
    points: 17,
    specialRules: "Arme Perforante (1), Peur, Impétueux, Solitaire, Mouvement à Couvert, Ordre Dispersé, Tirailleurs, Rapide",
    opts: [
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 3, perModel: true},
      {name_fr: "Éclaireurs", name_en: "Scouts", points: 2, perModel: true},
      {name_fr: "Avant-garde", name_en: "Vanguard", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base (Griffes et crocs)", name_en: "Hand weapons (Claws and fangs)", points: 0, active: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "leadbelchers": {
    id: "leadbelchers",
    army: "ogre-kingdoms",
    category: "special",
    name_fr: "Crache-plomb",
    name_en: "Leadbelchers {renegade}",
    points: 41,
    specialRules: "Ordre Serré, Peur, Touches d’Impact (1), Charge Ogre",
    opts: [
      {name_fr: "Vétérans", name_en: "Veteran", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Crache-plomb", name_en: "Hand weapons, Leadbelcher guns {renegade}", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Crache-tonnerre (champion)", name_en: "Thunderfist (champion)", points: 8},
      {name_fr: "Beugleur (musicien)", name_en: "Bellower (musician)", points: 6}
    ]
  },
  "maneaters": {
    id: "maneaters",
    army: "ogre-kingdoms",
    category: "special",
    name_fr: "Mangeurs d’Hommes",
    name_en: "Maneaters",
    points: 54,
    specialRules: "Ordre Serré, Peur, Touches d’Impact (1), Bande Hétéroclite, Charge Ogre",
    opts: [
      {name_fr: "Immunisé à la Psychologie", name_en: "Immune to Psychology", points: 0},
      {name_fr: "Attaques Empoisonnées", name_en: "Poisoned Attacks", points: 0},
      {name_fr: "Obstiné", name_en: "Stubborn", points: 0},
      {name_fr: "Avant-garde", name_en: "Vanguard", points: 0},
      {name_fr: "Armes de base additionnelles", name_en: "Additional hand weapons", points: 3},
      {name_fr: "Poings d’Acier", name_en: "Ironfists", points: 4},
      {name_fr: "Poings d’Acier", name_en: "Ironfists {renegade}", points: 4},
      {name_fr: "Armes lourdes", name_en: "Great weapons", points: 4},
      {name_fr: "Pistolets Ogres", name_en: "Ogre pistols", points: 6},
      {name_fr: "Paire de pistolets Ogres", name_en: "Brace of Ogre pistols", points: 12},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 3},
      {name_fr: "Gnoblar Longue-vue (Porte-étendard)", name_en: "Look-out Gnoblar (Standard bearer)", points: 5}
    ],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Capitaine Mangeur d’Hommes (champion)", name_en: "Maneater Captain (champion)", points: 7, magic: {"types": ["weapon", "armor", "talisman", "enchanted-item"], "maxPoints": 50}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 7, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Beugleur (musicien)", name_en: "Bellower (musician)", points: 7}
    ]
  },
  "mournfang-cavalry": {
    id: "mournfang-cavalry",
    army: "ogre-kingdoms",
    category: "special",
    name_fr: "Cavalerie Férox",
    name_en: "Mournfang Cavalry",
    points: 64,
    specialRules: "Peau Blindée (1), Ordre Serré, Peur, Touches d’Impact (D3), Charge Férox, Rapide",
    opts: [
      {name_fr: "Paire de pistolets Ogres (Broyeur)", name_en: "Brace of Ogre pistols (Crusher)", points: 12}
    ],
    equip: [
      {name_fr: "Arme de base, Défenses monstrueuses (Férox)", name_en: "Hand weapon, Monstrous tusks (Mournfang)", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Poing d’Acier", name_en: "Ironfist", points: 4, active: false, perModel: true},
      {name_fr: "Poing d’Acier", name_en: "Ironfist {renegade}", points: 4, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 3, active: false}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Broyeur (champion)", name_en: "Crusher (champion)", points: 7, magic: {"types": ["weapon", "armor", "talisman", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 7, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Beugleur (musicien)", name_en: "Bellower (musician)", points: 7}
    ]
  },
  "yhetees": {
    id: "yhetees",
    army: "ogre-kingdoms",
    category: "special",
    name_fr: "Yétis",
    name_en: "Yhetees",
    points: 46,
    specialRules: "Peau Blindée (1), Peur, Inflammable, Solitaire, Mouvement à Couvert, Frisson Paralysant, Ordre Dispersé, Rapide",
    opts: [
      {name_fr: "Éclaireurs", name_en: "Scouts", points: 3, perModel: true},
      {name_fr: "Avant-garde", name_en: "Vanguard", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de Sinistregivre", name_en: "Grimfrost weapons", points: 0, active: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Dos-gris", name_en: "Greyback", points: 7}
    ]
  },
  "ironblaster": {
    id: "ironblaster",
    army: "ogre-kingdoms",
    category: "special",
    name_fr: "Boute-fer",
    name_en: "Ironblaster",
    points: 185,
    specialRules: "Arme Perforante (2 - Rhinox uniquement), Ordre Serré, Peur, Première Charge, Touches d’Impact (D6+1), Grande Cible",
    opts: [],
    equip: [
      {name_fr: "Canon des Titans Célestes, Armes de base", name_en: "Cannon of the Sky-titans {renegade}, Hand weapons", points: 0, active: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "gnoblar-scraplauncher": {
    id: "gnoblar-scraplauncher",
    army: "ogre-kingdoms",
    category: "special",
    name_fr: "Lance-ferraille Gnoblar",
    name_en: "Gnoblar Scraplauncher",
    points: 140,
    specialRules: "Arme Perforante (2 - Rhinox uniquement), Ordre Serré, Peur, Première Charge, Touches d’Impact (D6+1), Grande Cible",
    opts: [],
    equip: [
      {name_fr: "Catapulte Lance-ferraille, Armes de base", name_en: "Scraplauncher catapult, Hand weapons", points: 0, active: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "stonehorn-riders": {
    id: "stonehorn-riders",
    army: "ogre-kingdoms",
    category: "rare",
    name_fr: "Chevaucheurs de Mastauroc",
    name_en: "Stonehorn Riders",
    points: 245,
    specialRules: "Arme Perforante (2 - Mastauroc uniquement), Ordre Serré, Première Charge, Howdah, Touches d’Impact (D6+1), Grande Cible, Squelette de Pierre, Rapide, Terreur, Charge Tonnerre",
    opts: [
      {name_fr: "Lance-harpon (Chevaucheur Ogre)", name_en: "Harpoon launcher (Ogre Beast Rider)", points: 8}
    ],
    equip: [
      {name_fr: "Arme de base, Cornes de pierre (Mastauroc), Lance-harpon (Servant Ogre), Croque-monsieur (Chevaucheur Ogre)", name_en: "Hand weapon, Horns of stone (Stonehorn), Harpoon launcher (Ogre Crew), Chaintrap (Ogre Beast Rider)", points: 0, active: true},
      {name_fr: "Arme de base, Cornes de pierre (Mastauroc), Lance-harpon (Servant Ogre), Vautour de sang (Chevaucheur Ogre)", name_en: "Hand weapon, Horns of stone (Stonehorn), Harpoon launcher (Ogre Crew), Blood vulture (Ogre Beast Rider)", points: 5, active: false}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "thundertusk-riders": {
    id: "thundertusk-riders",
    army: "ogre-kingdoms",
    category: "rare",
    name_fr: "Chevaucheurs de Mégastodonte",
    name_en: "Thundertusk Riders",
    points: 215,
    specialRules: "Ordre Serré, Première Charge, Howdah, Touches d’Impact (D3), Grande Cible, Frisson Paralysant, Attaques de Piétinement (3), Rapide, Terreur",
    opts: [
      {name_fr: "Lance-harpon (Chevaucheur Ogre)", name_en: "Harpoon launcher (Ogre Beast Rider)", points: 8}
    ],
    equip: [
      {name_fr: "Arme de base, Grandes défenses (Mégastodonte), Souffle glacial (Mégastodonte), Lance-harpon (Servant Ogre), Croque-monsieur (Chevaucheur Ogre)", name_en: "Hand weapon, Great tusks (Thundertusk), Chill breath (Thundertusk), Harpoon launcher (Ogre Crew), Chaintrap (Ogre Beast Rider)", points: 0, active: true},
      {name_fr: "Arme de base, Grandes défenses (Mégastodonte), Souffle glacial (Mégastodonte), Lance-harpon (Servant Ogre), Vautour de sang (Chevaucheur Ogre)", name_en: "Hand weapon, Great tusks (Thundertusk), Chill breath (Thundertusk), Harpoon launcher (Ogre Crew), Blood vulture (Ogre Beast Rider)", points: 5, active: false}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "giant": {
    id: "giant",
    army: "ogre-kingdoms",
    category: "rare",
    name_fr: "Géants",
    name_en: "Giant",
    points: 200,
    specialRules: "Ordre Serré, Attaques de Géant, Immunisé à la Psychologie, Grande Cible, Ramassage, Attaques de Piétinement (D6), Terreur, Timmm-berrr!, Indémoralisable",
    opts: [],
    equip: [
      {name_fr: "Massue de Géant", name_en: "Giant's club", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Armure légère (Peau calleuse)", name_en: "Light armour (Calloused hide)", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: []
  },
  "gorgers": {
    id: "gorgers",
    army: "ogre-kingdoms",
    category: "rare",
    name_fr: "Cannibale",
    name_en: "Gorger",
    points: 90,
    specialRules: "Embusqueurs, Ordre Serré, Peur, Frénésie, Faim Dévorante, Régénération (6+), Rapide, Indémoralisable",
    opts: [
      {name_fr: "Éclaireurs", name_en: "Scouts", points: 3},
      {name_fr: "Avant-garde", name_en: "Vanguard", points: 3}
    ],
    equip: [
      {name_fr: "Griffes mortelles, Mâchoire extensible", name_en: "Wicked claws, Distensible jaw", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Armure légère (Peau calleuse)", name_en: "Light armour (Calloused hide)", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: []
  },
  "sorcerer-prophet": {
    id: "sorcerer-prophet",
    army: "chaos-dwarfs",
    category: "characters",
    name_fr: "Sorcier-Prophète",
    name_en: "Sorcerer-Prophet",
    points: 195,
    specialRules: "Armure Sombréclat, Armes Ensorcelées, Ingénieur Infernal, Domaine d’Hashut, Résolu, Malédiction du Sorcier, Obstiné",
    opts: [
      {name_fr: "Bombes au Naptha", name_en: "Naptha bombs", points: 15, perModel: true},
      {name_fr: "Sang d’Hashut", name_en: "Blood of Hashut", points: 20, perModel: true},
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de Sombreforge", name_en: "Darkforged weapon", points: 10, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Sombre Taurus", name_en: "Bale Taurus", points: 160},
      {name_fr: "Grand Taurus", name_en: "Great Taurus", points: 120},
      {name_fr: "Grand Taurus", name_en: "Great Taurus {renegade}", points: 120},
      {name_fr: "Lammasu", name_en: "Lammasu", points: 95}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor-mages", "talisman", "arcane-item", "enchanted-item", "armor"], maxPoints: 100}
    ], lores: ["daemonology", "dark-magic", "elementalism"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "daemonsmith-sorcerer": {
    id: "daemonsmith-sorcerer",
    army: "chaos-dwarfs",
    category: "characters",
    name_fr: "Forgeron-Démoniste",
    name_en: "Daemonsmith Sorcerer",
    points: 85,
    specialRules: "Armure Sombréclat, Armes Ensorcelées, Ingénieur Infernal, Domaine d’Hashut, Résolu, Malédiction du Sorcier, Obstiné",
    opts: [
      {name_fr: "Bombes au Naptha", name_en: "Naptha bombs", points: 15, perModel: true},
      {name_fr: "Sang d’Hashut", name_en: "Blood of Hashut", points: 20, perModel: true},
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de Sombreforge", name_en: "Darkforged weapon", points: 10, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Grand Taurus", name_en: "Great Taurus", points: 120},
      {name_fr: "Grand Taurus", name_en: "Great Taurus {renegade}", points: 120},
      {name_fr: "Lammasu", name_en: "Lammasu", points: 95}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor-mages", "talisman", "arcane-item", "enchanted-item", "armor"], maxPoints: 50}
    ], lores: ["daemonology", "dark-magic", "elementalism"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "infernal-castellan": {
    id: "infernal-castellan",
    army: "chaos-dwarfs",
    category: "characters",
    name_fr: "Châtelain Infernal",
    name_en: "Infernal Castellan",
    points: 125,
    specialRules: "Armure Sombréclat, Armes Ensorcelées, Cri de Ralliement, Résolu, Obstiné",
    opts: [
      {name_fr: "Pistolet", name_en: "Pistol", points: 5, perModel: true},
      {name_fr: "Bombes au Naptha", name_en: "Naptha bombs", points: 7, perModel: true},
      {name_fr: "Glaive Ardent", name_en: "Fireglaive", points: 10, perModel: true},
      {name_fr: "Tromblon Grêle-de-Tir", name_en: "Hailshot blunderbuss", points: 10, perModel: true},
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de Sombreforge", name_en: "Darkforged weapon", points: 10, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true},
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 3, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Grand Taurus", name_en: "Great Taurus {renegade}", points: 120},
      {name_fr: "Sombre Taurus", name_en: "Bale Taurus", points: 160}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 100}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "bull-centaur-taurruk": {
    id: "bull-centaur-taurruk",
    army: "chaos-dwarfs",
    category: "characters",
    name_fr: "Taur'ruk Centaure-Taureau",
    name_en: "Bull Centaur Taur'ruk",
    points: 145,
    specialRules: "Arme Perforante (1), Peau Blindée (1), Armure Sombréclat, Armes Ensorcelées, Peur, Première Charge, Touches d'Impact (D3+1), Solitaire, Ruée, Obstiné, Rapide",
    opts: [
      {name_fr: "Arme de Sombreforge", name_en: "Darkforged weapon", points: 10, active: false, perModel: true},
      {name_fr: "Arme de base supplémentaire", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true},
      {name_fr: "Bouclier", name_en: "Shield", points: 3, active: false}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 75}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "hobgoblin-wolf-riders": {
    id: "hobgoblin-wolf-riders",
    army: "chaos-dwarfs",
    category: "rare",
    name_fr: "Chevaucheurs de Loups Hobgobelins",
    name_en: "Hobgoblin Wolf Riders",
    points: 12,
    specialRules: "Coup en Traître, Esquiveur, Cavalerie Rapide, Tir & Fuite, Conscrits, Ordre Lâche, Tirailleurs, Rapide",
    opts: [
      {name_fr: "Lances de cavalerie", name_en: "Cavalry spears", points: 0, active: false, perModel: true},
      {name_fr: "Arcs courts", name_en: "Shortbows", points: 1, active: false, perModel: true},
      {name_fr: "Fuite Simulée (0-1/1000)", name_en: "Feigned Flight (0-1 per 1000)", points: 2, active: false, perModel: true},
      {name_fr: "Mouvement de Réserve (0-1/1000)", name_en: "Reserve Move (0-1 per 1000)", points: 1, active: false, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère, Bouclier", name_en: "Light armour, Shield", points: 0, active: true, perModel: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Chef (champion)", name_en: "Boss (champion)", points: 8},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "infernal-seneschal": {
    id: "infernal-seneschal",
    army: "chaos-dwarfs",
    category: "characters",
    name_fr: "Sénéchal Infernal",
    name_en: "Infernal Seneschal",
    points: 60,
    specialRules: "Armure Sombréclat, Armes Ensorcelées, Cri de Ralliement, Résolu, Obstiné",
    opts: [
      {name_fr: "Pistolet", name_en: "Pistol", points: 5, perModel: true},
      {name_fr: "Bombes au Naptha", name_en: "Naptha bombs", points: 7, perModel: true},
      {name_fr: "Glaive Ardent", name_en: "Fireglaive", points: 10, perModel: true},
      {name_fr: "Tromblon Grêle-de-Tir", name_en: "Hailshot blunderbuss", points: 10, perModel: true},
      {name_fr: "Bouclier", name_en: "Shield", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de Sombreforge", name_en: "Darkforged weapon", points: 10, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true},
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 3, active: false}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Grand Taurus", name_en: "Great Taurus", points: 120}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "bull-centaur-taur'ruk": {
    id: "bull-centaur-taur'ruk",
    army: "chaos-dwarfs",
    category: "characters",
    name_fr: "Taur’ruk Centaure-Taureau",
    name_en: "Bull Centaur Taur'ruk",
    points: 145,
    specialRules: "Arme Perforante (1), Peau Blindée (1), Armure Sombréclat, Armes Ensorcelées, Peur, Première Charge, Touches d’Impact (D3+1), Solitaire, Ruée, Obstiné, Rapide",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 3, perModel: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true},
      {name_fr: "Arme de Sombreforge", name_en: "Darkforged weapon", points: 10, active: false, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 75}
    ], lores: []},
    command: []
  },
  "hobgoblin-khan": {
    id: "hobgoblin-khan",
    army: "chaos-dwarfs",
    category: "characters",
    name_fr: "Khan Hobgobelin",
    name_en: "Hobgoblin Khan",
    points: 45,
    specialRules: "Coup en Traître, Esquiveur, Conscrits, Bande de Guerre",
    opts: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 3},
      {name_fr: "Bouclier", name_en: "Shield", points: 2},
      {name_fr: "Arme de tir", name_en: "Ranged weapon", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 3, active: false, perModel: true},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 4, active: false, perModel: true},
      {name_fr: "Lance de cavalerie", name_en: "Cavalry spear", points: 2, active: false}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Loup Géant", name_en: "Giant Wolf", points: 10}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "infernal-guard": {
    id: "infernal-guard",
    army: "chaos-dwarfs",
    category: "core",
    name_fr: "Garde Infernale",
    name_en: "Infernal Guard",
    points: 11,
    specialRules: "Ordre Serré, Détachement, Unité Régimentaire, Résolu, Mur de Boucliers, Obstiné",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 1, perModel: true},
      {name_fr: "Bien Entraînés", name_en: "Drilled", points: 1, perModel: true},
      {name_fr: "Armure Sombréclat", name_en: "Blackshard Armour", points: 1, perModel: true},
      {name_fr: "Détachement", name_en: "Detachment", points: 0}
    ],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, perModel: true},
      {name_fr: "Armes lourdes", name_en: "Great weapons", points: 2, active: false, perModel: true},
      {name_fr: "Glaive Ardents", name_en: "Fireglaives", points: 4, active: false, perModel: true},
      {name_fr: "Tromblon Grêle-de-Tir", name_en: "Hailshot blunderbuss", points: 5, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Masque de Mort (champion)", name_en: "Deathmask (champion)", points: 6, magic: {"types": ["weapon", "talisman", "armor", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "hobgoblin-cutthroats": {
    id: "hobgoblin-cutthroats",
    army: "chaos-dwarfs",
    category: "core",
    name_fr: "Coupe-jarrets Hobgobelins",
    name_en: "Hobgoblin Cutthroats",
    points: 3,
    specialRules: "Coup en Traître, Ordre Serré, Horde, Conscrits, Bande de Guerre",
    opts: [],
    equip: [
      {name_fr: "Armes de base, Boucliers", name_en: "Hand weapons, Shields", points: 0, active: true, perModel: true},
      {name_fr: "Armes de base, Arcs courts", name_en: "Hand weapons, Shortbows", points: 0, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 1, active: false}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Chef (champion)", name_en: "Boss (champion)", points: 7},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 5},
      {name_fr: "Musicien", name_en: "Musician", points: 5}
    ]
  },
  "black-orc-mob": {
    id: "black-orc-mob",
    army: "chaos-dwarfs",
    category: "core",
    name_fr: "Bande d’Orques Noirs",
    name_en: "Black Orc Mob",
    points: 12,
    specialRules: "Kikoup’, Ordre Serré, Lé Boyz, Charge Dévastatrice, Ignore la Panique, Bande Hétéroclite, Calme l’Impétuosité",
    opts: [
      {name_fr: "Obstiné", name_en: "Stubborn", points: 1, perModel: true},
      {name_fr: "Vétérans", name_en: "Veteran", points: 1, perModel: true},
      {name_fr: "Boucliers", name_en: "Shields", points: 1},
      {name_fr: "Arme lourde", name_en: "Great weapon", points: 2},
      {name_fr: "Arme de base additionnelle", name_en: "Additional hand weapon", points: 1}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Chef", name_en: "Boss", points: 6, magic: {"types": ["weapon", "talisman", "armor", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "infernal-ironsworn-core": {
    id: "infernal-ironsworn-core",
    army: "chaos-dwarfs",
    category: "core",
    name_fr: "Jurefers Infernaux",
    name_en: "Infernal Ironsworn",
    points: 19,
    specialRules: "Armure Sombréclat, Ordre Serré, Bien Entraînés, Armes Ensorcelées, Calme la Panique, Unité Régimentaire, Résolu, Mur de Boucliers, Obstiné, Vétérans",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, perModel: true},
      {name_fr: "Armes lourdes", name_en: "Great weapons", points: 2, active: false, perModel: true},
      {name_fr: "Hallebardes", name_en: "Halberds", points: 1, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Superviseur (champion)", name_en: "Overseer (champion)", points: 7, magic: {"types": ["weapon", "talisman", "armor", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 7, magic: {"types": ["banner"], "maxPoints": 100}},
      {name_fr: "Musicien", name_en: "Musician", points: 7}
    ]
  },
  "infernal-ironsworn": {
    id: "infernal-ironsworn",
    army: "chaos-dwarfs",
    category: "special",
    name_fr: "Jurefers Infernaux",
    name_en: "Infernal Ironsworn",
    points: 19,
    specialRules: "Armure Sombréclat, Ordre Serré, Bien Entraînés, Armes Ensorcelées, Calme la Panique, Unité Régimentaire, Résolu, Mur de Boucliers, Obstiné, Vétérans",
    opts: [
      {name_fr: "Bouclier", name_en: "Shield", points: 1, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, perModel: true},
      {name_fr: "Armes lourdes", name_en: "Great weapons", points: 2, active: false, perModel: true},
      {name_fr: "Hallebardes", name_en: "Halberds", points: 1, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure de plate complète", name_en: "Full plate armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Superviseur (champion)", name_en: "Overseer (champion)", points: 7, magic: {"types": ["weapon", "talisman", "armor", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 7, magic: {"types": ["banner"], "maxPoints": 100}},
      {name_fr: "Musicien", name_en: "Musician", points: 7}
    ]
  },
  "sneaky-gits": {
    id: "sneaky-gits",
    army: "chaos-dwarfs",
    category: "special",
    name_fr: "Assassins Hobgobelins",
    name_en: "Sneaky Gits",
    points: 6,
    specialRules: "Embusqueurs, Coup en Traître, Esquiveur, Conscrits, Mouvement à Couvert, Tirailleurs",
    opts: [],
    equip: [
      {name_fr: "Deux armes de base, Armes de lancer", name_en: "Two hand weapons, Throwing weapons", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 1, active: false}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Chef Meurtrier (champion)", name_en: "Murder Boss (champion)", points: 6},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "kdaai-fireborn": {
    id: "kdaai-fireborn",
    army: "chaos-dwarfs",
    category: "special",
    name_fr: "K’daai Rejetons de Feu",
    name_en: "K'daai Fireborn {renegade}",
    points: 41,
    specialRules: "Corps Embrasé, Ordre Serré, Armes Ensorcelées, Peur, Attaques Enflammées, Immunisé à la Psychologie, Régénération (5+), Indémoralisable, Instables, Engeance du Warp",
    opts: [],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Brûleur d’Hommes (champion)", name_en: "Manburner (champion)", points: 7, magic: {"types": ["weapon", "armor", "armor-mages", "talisman", "enchanted-item", "arcane-item"], "maxPoints": 25}}
    ]
  },
  "bull-centaur-renders": {
    id: "bull-centaur-renders",
    army: "chaos-dwarfs",
    category: "special",
    name_fr: "Hacheurs Centaures-Taureaux",
    name_en: "Bull Centaur Renders",
    points: 56,
    specialRules: "Peau Blindée (1), Armure Sombréclat, Ordre Serré, Armes Ensorcelées, Peur, Première Charge, Touches d’Impact (D3), Solitaire, Ruée, Obstiné, Rapide",
    opts: [],
    equip: [
      {name_fr: "Armes de base", name_en: "Hand weapons", points: 0, active: true, equippedDefault: true, perModel: true},
      {name_fr: "Armes lourdes", name_en: "Great weapons", points: 4, active: false, perModel: true},
      {name_fr: "Bouclier", name_en: "Shield", points: 3, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Ba’hal", name_en: "Ba'hal", points: 6, magic: {"types": ["weapon", "talisman", "armor", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "iron-daemon": {
    id: "iron-daemon",
    army: "chaos-dwarfs",
    category: "special",
    name_fr: "Démon d’Acier",
    name_en: "Iron Daemon",
    points: 275,
    specialRules: "Train d’Artillerie, Ordre Serré, Peur, Roues de Broyage, Immunisé à la Psychologie, Touches d’Impact (D6+1), Grande Cible, Destruction Inexorable, Attaques de Piétinement (D3+1), Indémoralisable",
    opts: [
      {name_fr: "Possédé", name_en: "Hellbound", points: 35, perModel: true}
    ],
    equip: [
      {name_fr: "Canonnade à Vapeur, Armes de base", name_en: "Steam Cannonade, Hand weapons", points: 0, active: true, perModel: true},
      {name_fr: "Briseur de Crânes, Armes de base", name_en: "Skullcracker, Hand weapons", points: 10, active: false, perModel: true}
    ],
    armor: [],
    mounts: [],
    magic: null,
    command: []
  },
  "miao-ying": {
    id: "miao-ying",
    army: "grand-cathay",
    category: "characters",
    name_fr: "Miao Ying",
    name_en: "Miao Ying",
    points: 485,
    specialRules: "Armure Céleste (5+), Dédain des Dragons, Haine (Guerriers du Chaos & figurines Démoniaques), Résistance à la Magie (-1), Maîtrise des Vents de la Tempête, Domaine du Yang, Domaine du Yin, Maîtrise des Vents Élémentaires, Obstiné, Matriarche Suprême de Nan-Gau, Transformation du Dragon, Volonté des Dragons, Courroux de la Tempête, Cri de Ralliement (Forme Humaine), Vol (9 - Forme de Dragon), Grande Cible (Forme de Dragon), Attaques de Piétinement (D6 - Forme de Dragon), Rapide (Forme de Dragon), Terreur (Forme de Dragon)",
    opts: [
      {name_fr: "Sorcier de Niveau 4 (Forme Humaine), Sorcier de Niveau 2 (Forme de Dragon)", name_en: "Level 4 Wizard (Human Form), Level 2 Wizard (Dragon Form)", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Serres de la Tempête, Feu de dragon (Forme de Dragon)", name_en: "Talons of the Storm, Dragon fire (Dragon Form)", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Armure lourde, Armure de plate complète (Forme de Dragon)", name_en: "Heavy armour, Full plate armour (Dragon Form)", points: 0, active: true}
    ],
    mounts: [],
    magic: {items: [], lores: ["battle-magic", "elementalism", "high-magic"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "shugengan-lord": {
    id: "shugengan-lord",
    army: "grand-cathay",
    category: "characters",
    name_fr: "Seigneur Shugengan",
    name_en: "Shugengan Lord",
    points: 220,
    specialRules: "Peau Blindée (2), Armure Céleste (5+), Contre-charge, Peur, Vol (9), Touches d’Impact (D3+1), Maîtrise des Vents Élémentaires, Rapide, Volonté des Dragons, Couronne de Cornes",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true},
      {name_fr: "Pistolet feu de dragon", name_en: "Dragon fire pistol", points: 4},
      {name_fr: "Domaine du Yang", name_en: "Lore of Yang", points: 0, active: true},
      {name_fr: "Domaine du Yin", name_en: "Lore of Yin", points: 0}
    ],
    equip: [
      {name_fr: "Arme de base, Serres de fer", name_en: "Hand weapon, Iron talons", points: 0, active: true},
      {name_fr: "Lame Céleste, Serres de fer", name_en: "Celestial blade, Iron talons", points: 6, active: false},
      {name_fr: "Lance cathayennes, Serres de fer", name_en: "Cathayan lance, Iron talons", points: 4, active: false}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 4, active: false}
    ],
    mounts: [
      {name_fr: "Grand Esprit Longma", name_en: "Great Spirit Longma", points: 0, active: true}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "armor-mages", "talisman", "arcane-item", "enchanted-item"], maxPoints: 100}
    ], lores: ["battle-magic", "elementalism", "illusion", "high-magic"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "shugengan-general": {
    id: "shugengan-general",
    army: "grand-cathay",
    category: "characters",
    name_fr: "Général Shugengan",
    name_en: "Shugengan General",
    points: 145,
    specialRules: "Peau Blindée (2), Armure Céleste (5+), Contre-charge, Peur, Vol (9), Touches d’Impact (D3+1), Maîtrise des Vents Élémentaires, Rapide, Volonté des Dragons, Couronne de Cornes",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true},
      {name_fr: "Pistolet feu de dragon", name_en: "Dragon fire pistol", points: 4},
      {name_fr: "Domaine du Yang", name_en: "Lore of Yang", points: 0, active: true},
      {name_fr: "Domaine du Yin", name_en: "Lore of Yin", points: 0}
    ],
    equip: [
      {name_fr: "Arme de base, Serres de fer", name_en: "Hand weapon, Iron talons", points: 0, active: true},
      {name_fr: "Lame Céleste, Serres de fer", name_en: "Celestial blade, Iron talons", points: 6, active: false},
      {name_fr: "Lance cathayennes, Serres de fer", name_en: "Cathayan lance, Iron talons", points: 4, active: false}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 4, active: false}
    ],
    mounts: [
      {name_fr: "Grand Esprit Longma", name_en: "Great Spirit Longma", points: 0, active: true}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "armor-mages", "talisman", "arcane-item", "enchanted-item"], maxPoints: 50}
    ], lores: ["battle-magic", "elementalism", "illusion", "high-magic"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },

  "shugengan": {
    id: "shugengan",
    army: "grand-cathay",
    category: "characters",
    name_fr: "Général Shugengan",
    name_en: "Shugengan General",
    points: 145,
    specialRules: "Peau Blindée (2), Armure Céleste (5+), Contre-charge, Peur, Vol (9), Touches d’Impact (D3+1), Maîtrise des Vents Élémentaires, Rapide, Volonté des Dragons, Couronne de Cornes",
    opts: [
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true},
      {name_fr: "Pistolet feu de dragon", name_en: "Dragon fire pistol", points: 4},
      {name_fr: "Domaine du Yang", name_en: "Lore of Yang", points: 0, active: true},
      {name_fr: "Domaine du Yin", name_en: "Lore of Yin", points: 0}
    ],
    equip: [
      {name_fr: "Arme de base, Serres de fer", name_en: "Hand weapon, Iron talons", points: 0, active: true},
      {name_fr: "Lame Céleste, Serres de fer", name_en: "Celestial blade, Iron talons", points: 6, active: false},
      {name_fr: "Lance cathayennes, Serres de fer", name_en: "Cathayan lance, Iron talons", points: 4, active: false}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true},
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 4, active: false}
    ],
    mounts: [
      {name_fr: "Grand Esprit Longma", name_en: "Great Spirit Longma", points: 0, active: true}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "armor-mages", "talisman", "arcane-item", "enchanted-item"], maxPoints: 50}
    ], lores: ["battle-magic", "elementalism", "illusion", "high-magic"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "lord-magistrate": {
    id: "lord-magistrate",
    army: "grand-cathay",
    category: "characters",
    name_fr: "Seigneur Magistrat",
    name_en: "Lord Magistrate",
    points: 65,
    specialRules: "Stratège, Harmonie de la Pierre & de l’Acier, Volonté des Dragons",
    opts: [
      {name_fr: "Bombes de poudre à canon", name_en: "Gunpowder bombs", points: 5},
      {name_fr: "Bombes de feu du dragon", name_en: "Dragon fire bombs", points: 10}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Lanterne Céleste", name_en: "Sky Lantern", points: 135}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 100}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "supreme-astromancer": {
    id: "supreme-astromancer",
    army: "grand-cathay",
    category: "characters",
    name_fr: "Supreme Astromancer",
    name_en: "Supreme Astromancer",
    points: 125,
    specialRules: "Magical Attacks, Magic Resistance (-1), Mastery of the Elemental Winds",
    opts: [
      {name_fr: "Domaine du Yang", name_en: "Lore of Yang", points: 0, active: true},
      {name_fr: "Domaine du Yin", name_en: "Lore of Yin", points: 0},
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Cathayan Horse", name_en: "Cathayan Horse", points: 16}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "talisman", "enchanted-item", "arcane-item"], maxPoints: 100}
    ], lores: ["battle-magic", "elementalism", "high-magic", "illusion"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "strategist": {
    id: "strategist",
    army: "grand-cathay",
    category: "characters",
    name_fr: "Stratège",
    name_en: "Strategist",
    points: 40,
    specialRules: "Stratège, Harmonie de la Pierre & de l’Acier, Volonté des Dragons",
    opts: [
      {name_fr: "Bombes de poudre à canon", name_en: "Gunpowder bombs", points: 5},
      {name_fr: "Bombes de feu du dragon", name_en: "Dragon fire bombs", points: 10}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "gate-master": {
    id: "gate-master",
    army: "grand-cathay",
    category: "characters",
    name_fr: "Maître des Portes",
    name_en: "Gate Master",
    points: 80,
    specialRules: "Harmonie de la Pierre & de l’Acier, Volonté des Dragons",
    opts: [],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true},
      {name_fr: "Lame Céleste", name_en: "Celestial blade", points: 6, active: false},
      {name_fr: "Lance cathayennes (si monté)", name_en: "Cathayan lance (if appropriately mounted)", points: 4, active: false}
    ],
    armor: [
      {name_fr: "Armure lourde, Bouclier", name_en: "Heavy armour, Shield", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier Cathayen", name_en: "Cathayan Warhorse", points: 16}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 100}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "gate-keeper": {
    id: "gate-keeper",
    army: "grand-cathay",
    category: "characters",
    name_fr: "Gardien des Portes",
    name_en: "Gate Keeper",
    points: 45,
    specialRules: "Harmonie de la Pierre & de l’Acier, Volonté des Dragons",
    opts: [],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true, equippedDefault: true},
      {name_fr: "Lame Céleste", name_en: "Celestial blade", points: 6, active: false},
      {name_fr: "Lance cathayennes (si monté)", name_en: "Cathayan lance (if appropriately mounted)", points: 4, active: false}
    ],
    armor: [
      {name_fr: "Armure lourde, Bouclier", name_en: "Heavy armour, Shield", points: 0, active: true}
    ],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Destrier Cathayen", name_en: "Cathayan Warhorse", points: 16}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "armor", "talisman", "enchanted-item"], maxPoints: 50}
    ], lores: []},
    command: [
      {name_fr: "Général", name_en: "General", points: 0},
      {name_fr: "Porteur de la Grande Bannière", name_en: "Battle Standard Bearer", points: 25, magic: {"types": ["banner"], "maxPoints": 0}}
    ]
  },
  "astromancer": {
    id: "astromancer",
    army: "grand-cathay",
    category: "characters",
    name_fr: "Astromancer",
    name_en: "Astromancer",
    points: 65,
    specialRules: "Magical Attacks, Magic Resistance (-1), Mastery of the Elemental Winds",
    opts: [
      {name_fr: "Domaine du Yang", name_en: "Lore of Yang", points: 0, active: true},
      {name_fr: "Domaine du Yin", name_en: "Lore of Yin", points: 0},
      {name_fr: "Sorcier", name_en: "Wizard", points: 0, active: true}
    ],
    equip: [
      {name_fr: "Arme de base", name_en: "Hand weapon", points: 0, active: true}
    ],
    armor: [],
    mounts: [
      {name_fr: "À Pied", name_en: "On foot", points: 0, active: true},
      {name_fr: "Cathayan Horse", name_en: "Cathayan Horse", points: 16}
    ],
    magic: {items: [
      {name_fr: "Objets Magiques", name_en: "Magic Items", types: ["weapon", "talisman", "enchanted-item", "arcane-item"], maxPoints: 50}
    ], lores: ["battle-magic", "elementalism", "high-magic", "illusion"]},
    command: [
      {name_fr: "Général", name_en: "General", points: 0}
    ]
  },
  "astromancer-lord": {
    id:"astromancer-lord", army:"grand-cathay", category:"characters", name_fr:"Astromancien Suprême", name_en:"Supreme Astromancer", points:125,
    specialRules:"Magical Attacks, Magic Resistance (-1), Mastery of the Elemental Winds",
    opts:[{name_fr:"Domaine du Yang", name_en:"Lore of Yang", points:0, active:true},{name_fr:"Domaine du Yin", name_en:"Lore of Yin", points:0},{name_fr:"Sorcier", name_en:"Wizard", points:0, active:true},{name_fr:"Sorcier de niveau 4", name_en:"Level 4 Wizard", points:30}],
    equip:[{name_fr:"Arme de base", name_en:"Hand weapon", points:0, active:true}], armor:[],
    mounts:[{name_fr:"À Pied", name_en:"On foot", points:0, active:true},{name_fr:"Destrier Cathayen", name_en:"Cathayan Steed", points:16}],
    magic:{items:[{name_fr:"Objets Magiques", name_en:"Magic Items", types:["weapon","talisman","enchanted-item","arcane-item"], maxPoints:100}], lores:["battle-magic","elementalism","high-magic","illusion"]},
    command:[{name_fr:"Général", name_en:"General", points:0}]
  },
  "crane-gunners": {
    id:"crane-gunners", army:"grand-cathay", category:"special", name_fr:"Équipes de Canons Grues", name_en:"Crane Gunner Teams", points:16, unitSize:"3-8",
    specialRules:"Open Order",
    opts:[{name_fr:"Embusqueurs (0-1/1000)", name_en:"Ambushers (0-1 per 1000)", points:1, perModel:true},{name_fr:"Mouvement de Réserve", name_en:"Reserve Move", points:2, perModel:true}],
    equip:[{name_fr:"Armes de base, Canons grues, Pavois", name_en:"Hand weapons, Crane guns, Pavise", points:0, active:true}],
    armor:[{name_fr:"Armure légère", name_en:"Light armour", points:0, active:true}], mounts:[], magic:null,
    command:[]
  },
  "peasant-archers": {
    id:"peasant-archers", army:"grand-cathay", category:"core", name_fr:"Levée Paysanne", name_en:"Peasant Levy", points:4, unitSize:"10+",
    specialRules:"Close Order, Horde, Warband",
    opts:[{name_fr:"Longues lances", name_en:"Longspears", points:0, perModel:true},{name_fr:"Arcs de guerre", name_en:"Warbows", points:0, perModel:true},{name_fr:"Tirailleurs (au lieu d'Ordre Serré)", name_en:"Skirmishers", points:0, perModel:true},{name_fr:"Embusqueurs (0-1/1000)", name_en:"Ambushers (0-1 per 1000)", points:1, perModel:true}],
    equip:[{name_fr:"Armes de base", name_en:"Hand weapons", points:0, active:true}],
    armor:[{name_fr:"Armure légère", name_en:"Light armour", points:1, active:false, perModel:true}], mounts:[], magic:null,
    command:[{name_fr:"Doyen Paysan (champion)", name_en:"Peasant Elder (champion)", points:8},{name_fr:"Porte-étendard", name_en:"Standard bearer", points:5},{name_fr:"Musicien", name_en:"Musician", points:5}]
  },
  "peasant-levy": {
    id: "peasant-levy",
    army: "grand-cathay",
    category: "core",
    name_fr: "Peasant Levy",
    name_en: "Peasant Levy",
    points: 4,
    specialRules: "Close Order, Horde, Warband",
    opts: [
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 1, perModel: true},
      {name_fr: "Tirailleurs", name_en: "Skirmishers", points: 0, perModel: true},
      {name_fr: "Move through Cover", name_en: "Move through Cover", points: 20},
      {name_fr: "Reserve Move, Scouts", name_en: "Reserve Move, Scouts", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Long spears", name_en: "Hand weapons, Long spears", points: 0, active: true, perModel: true},
      {name_fr: "Armes de base, Arcs de guerre", name_en: "Hand weapons, Warbows", points: 0, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Pas d’armure", name_en: "No armour", points: 0, active: true},
      {name_fr: "Armure légère", name_en: "Light armour", points: 1, active: false}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Peasant Elder (champion)", name_en: "Peasant Elder (champion)", points: 8},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 5},
      {name_fr: "Musicien", name_en: "Musician", points: 5}
    ]
  },
  "jade-warriors": {
    id: "jade-warriors",
    army: "grand-cathay",
    category: "core",
    name_fr: "Guerriers de Jade",
    name_en: "Jade Warriors",
    points: 8,
    specialRules: "Ordre Serré, Posture Défensive, Détachement, Unité Régimentaire, Volonté des Dragons",
    opts: [
      {name_fr: "Bien Entraînés", name_en: "Drilled", points: 1, perModel: true},
      {name_fr: "Obstiné", name_en: "Stubborn", points: 2, perModel: true},
      {name_fr: "Garde du Dragon Céleste", name_en: "Celestial Dragon Guard", points: 2, perModel: true},
      {name_fr: "Détachement", name_en: "Detachment", points: 0}
    ],
    equip: [
      {name_fr: "Armes de base, Boucliers", name_en: "Hand weapons, Shields", points: 0, active: true, perModel: true},
      {name_fr: "Armes de base, Hallebardes", name_en: "Hand weapons, Halberds", points: 0, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Officier de Jade (champion)", name_en: "Jade Officer (champion)", points: 6, magic: {"types": ["weapon", "armor", "talisman", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "jade-lancers-core": {
    id: "jade-lancers-core",
    army: "grand-cathay",
    category: "core",
    name_fr: "Lanciers de Jade",
    name_en: "Jade Lancers",
    points: 20,
    specialRules: "Cataphractaires Cathayens, Ordre Serré, Contre-charge, Horde, Rapide, Volonté des Dragons",
    opts: [
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 1, perModel: true},
      {name_fr: "Bien Entraînés", name_en: "Drilled", points: 1, perModel: true},
      {name_fr: "Obstiné", name_en: "Stubborn", points: 2, perModel: true},
      {name_fr: "Garde du Dragon Céleste", name_en: "Celestial Dragon Guard", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Lances cathayennes, Boucliers", name_en: "Hand weapons, Cathayan lances, Shields", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde, Caparaçon", name_en: "Heavy armour, Barding", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Officier Lancier de Jade (champion)", name_en: "Jade Lancer Officer (champion)", points: 6, magic: {"types": ["weapon", "armor", "talisman", "enchanted-item"], "maxPoints": 50}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "jade-warriors-special": {
    id: "jade-warriors-special",
    army: "grand-cathay",
    category: "special",
    name_fr: "Guerriers de Jade",
    name_en: "Jade Warriors",
    points: 8,
    specialRules: "Ordre Serré, Posture Défensive, Détachement, Unité Régimentaire, Volonté des Dragons",
    opts: [
      {name_fr: "Bien Entraînés", name_en: "Drilled", points: 1, perModel: true},
      {name_fr: "Obstiné", name_en: "Stubborn", points: 2, perModel: true},
      {name_fr: "Garde du Dragon Céleste", name_en: "Celestial Dragon Guard", points: 2, perModel: true},
      {name_fr: "Détachement", name_en: "Detachment", points: 0}
    ],
    equip: [
      {name_fr: "Armes de base, Boucliers", name_en: "Hand weapons, Shields", points: 0, active: true, perModel: true},
      {name_fr: "Armes de base, Hallebardes", name_en: "Hand weapons, Halberds", points: 0, active: false, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde", name_en: "Heavy armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Officier de Jade (champion)", name_en: "Jade Officer (champion)", points: 6, magic: {"types": ["weapon", "armor", "talisman", "enchanted-item"], "maxPoints": 25}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "jade-lancers": {
    id: "jade-lancers",
    army: "grand-cathay",
    category: "special",
    name_fr: "Lanciers de Jade",
    name_en: "Jade Lancers",
    points: 20,
    specialRules: "Cataphractaires Cathayens, Ordre Serré, Contre-charge, Horde, Rapide, Volonté des Dragons",
    opts: [
      {name_fr: "Embusqueurs", name_en: "Ambushers", points: 1, perModel: true},
      {name_fr: "Bien Entraînés", name_en: "Drilled", points: 1, perModel: true},
      {name_fr: "Obstiné", name_en: "Stubborn", points: 2, perModel: true},
      {name_fr: "Garde du Dragon Céleste", name_en: "Celestial Dragon Guard", points: 2, perModel: true}
    ],
    equip: [
      {name_fr: "Armes de base, Lances cathayennes, Boucliers", name_en: "Hand weapons, Cathayan lances, Shields", points: 0, active: true, perModel: true}
    ],
    armor: [
      {name_fr: "Armure lourde, Caparaçon", name_en: "Heavy armour, Barding", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: [
      {name_fr: "Officier Lancier de Jade (champion)", name_en: "Jade Lancer Officer (champion)", points: 6, magic: {"types": ["weapon", "armor", "talisman", "enchanted-item"], "maxPoints": 50}},
      {name_fr: "Porte-étendard", name_en: "Standard bearer", points: 6, magic: {"types": ["banner"], "maxPoints": 50}},
      {name_fr: "Musicien", name_en: "Musician", points: 6}
    ]
  },
  "cathayan-grand-cannon": {
    id: "cathayan-grand-cannon",
    army: "grand-cathay",
    category: "special",
    name_fr: "Grand Canon Cathayen",
    name_en: "Cathayan Grand Cannon",
    points: 130,
    specialRules: "Tirailleurs",
    opts: [
      {name_fr: "Chargeur Ogre", name_en: "Ogre Loader", points: 35}
    ],
    equip: [
      {name_fr: "Grand canon, Armes de base", name_en: "Grand cannon, Hand weapons", points: 0, active: true}
    ],
    armor: [
      {name_fr: "Armure légère", name_en: "Light armour", points: 0, active: true}
    ],
    mounts: [],
    magic: null,
    command: []
  }
};
