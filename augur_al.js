// Listes d'armee + aliases synced verbatim from TOW en 1 (AL + SLUG_ALIASES).
const AUGUR_AL = {
  "empire-of-man":{
    characters:[
      {n:"General of the Empire",s:"general-of-the-empire"},
      {n:"Grand Master",s:"grand-master"},
      {n:"Lector of Sigmar (0-1)",s:"lector-of-sigmar"},
      {n:"High Priest of Ulric (0-1)",s:"high-priest-of-ulric"},
      {n:"Captain of the Empire",s:"captain-of-the-empire"},
      {n:"Wizard Lord",s:"wizard-lord"},
      {n:"Master Mage",s:"master-mage"},
      {n:"Chapter Master",s:"chapter-master"},
      {n:"Witch Hunter",s:"witch-hunter"},
      {n:"Priest of Sigmar",s:"priest-of-sigmar"},
      {n:"Priest of Ulric",s:"priest-of-ulric"},
      {n:"Empire Engineer",s:"empire-engineer"},
      {n:"War Altar of Sigmar (0-1)",s:"war-altar-of-sigmar"},
      {n:"Harbinger of Doom",s:"harbinger-of-doom"},
    ],
    core:[
      {n:"State Troops",s:"state-troops"},
      {n:"State Missile Troops",s:"state-missile-troops"},
      {n:"Free Company Militia",s:"free-company-militia"},
      {n:"Empire Archers",s:"empire-archers"},
      {n:"Empire Knights",s:"empire-knights"},
      {n:"Veteran State Troops (0-1)",s:"veteran-state-troops"},
    ],
    special:[
      {n:"Empire Greatswords",s:"empire-greatswords"},
      {n:"Pistoliers",s:"pistoliers"},
      {n:"Outriders",s:"outriders"},
      {n:"Demigryph Knights",s:"demigryph-knights"},
      {n:"Inner Circle Knights (0-1)",s:"inner-circle-knights"},
      {n:"Teutogen Guard (cond.)",s:"teutogen-guard"},
      {n:"Great Cannon",s:"great-cannon"},
      {n:"Mortar",s:"mortar"},
      {n:"Empire War Wagon (0-1)",s:"empire-war-wagon"}
    ],
    rare:[
      {n:"Flagellants",s:"flagellants"},
      {n:"Helblaster Volley Gun (0-1)",s:"helblaster-volley-gun"},
      {n:"Helstorm Rocket Battery (0-1)",s:"helstorm-rocket-battery"},
      {n:"Empire Steam Tank (0-1)",s:"empire-steam-tank"},
      {n:"Empire Road Wardens (0-1)",s:"empire-road-wardens"}
    ],
    mercenaries:[
      {n:"Badlands Ogre Bulls",s:"badlands-ogre-bulls"},
      {n:"Prince Ulther's Dragon Company",s:"prince-ulthers-dragon-company"},
      {n:"Doomseekers (0-3)",s:"doomseeker"},
      {n:"Imperial Dwarf Mercenaries (0-1)",s:"imperial-dwarf-mercenaries"},
      {n:"Imperial Ogres (0-1)",s:"imperial-ogres"},
    ],
    allies:["Dwarfen Mountain Holds","Grand Cathay","Kingdom of Bretonnia","Wood Elf Realms (Suspicious)"],
  },
  "beastmen-brayherds":{
    characters:[
      {n:"Doombull",s:"doombull"},{n:"Great Bray-Shaman",s:"great-bray-shaman"},
      {n:"Bray-Shaman",s:"bray-shaman"},{n:"Wargor",s:"wargor"},{n:"Gorebull",s:"gorebull"},
    ],
    core:[
      {n:"Gor Herd",s:"gor-herd"},{n:"Ungor Herd",s:"ungor-herd"},
      {n:"Ungor Raiders",s:"ungor-raiders"},{n:"Tuskgor Chariots",s:"tuskgor-chariots"},
      {n:"Razorgor Herd",s:"razorgor-herd"},
      {n:"Warhounds of Chaos",s:"warhounds-of-chaos"}
    ],
    special:[
      {n:"Bestigors",s:"bestigors"},{n:"Minotaurs",s:"minotaurs"},
      {n:"Chaos Ogres",s:"chaos-ogres"},{n:"Harpies",s:"harpies"},{n:"Razorgor Chariot",s:"razorgor-chariot"},
      {n:"Ghorgon",s:"ghorgon"},
      {n:"Dragon Ogres",s:"dragon-ogres"}
    ],
    rare:[
      {n:"Chaos Trolls",s:"chaos-trolls"},{n:"Cygor",s:"cygor"},
      {n:"Dragon Ogre Shaggoth (0-1)",s:"dragon-ogre-shaggoth"},{n:"Chaos Giant",s:"chaos-giant"},
    ],
    mercenaries:[
      {n:"Badlands Ogre Bulls",s:"badlands-ogre-bulls"},
      {n:"Chaos Marauder Horsemen (cond.)",s:"chaos-marauder-horsemen"},
    ],
    allies:["Warriors of Chaos","Daemons of Chaos (Suspicious)"],
  },
  "dwarfen-mountain-holds":{
    characters:[
      {n:"Dwarf King",s:"dwarf-king"},{n:"Dwarf Thane",s:"dwarf-thane"},
      {n:"Dwarf Runesmith",s:"dwarf-runesmith"},{n:"Dwarf Runelord",s:"dwarf-runelord"},
      {n:"Dwarf Master Engineer",s:"dwarf-master-engineer"},
      {n:"Dwarf Dragon Slayer",s:"dwarf-dragon-slayer"},
      {n:"Dwarf Daemon Slayer",s:"dwarf-daemon-slayer"},
    ],
    core:[
      {n:"Dwarf Warriors",s:"dwarf-warriors"},{n:"Dwarf Longbeards",s:"dwarf-longbeards"},
      {n:"Dwarf Quarrellers",s:"dwarf-quarrellers"},{n:"Dwarf Thunderers",s:"dwarf-thunderers"},
    ],
    special:[
      {n:"Dwarf Ironbreakers",s:"dwarf-ironbreakers"},{n:"Dwarf Hammerers",s:"dwarf-hammerers"},
      {n:"Dwarf Slayers",s:"dwarf-slayers"},{n:"Dwarf Miners",s:"dwarf-miners"},{n:"Gyrocopters",s:"gyrocopters"},
      {n:"Dwarf Bolt Thrower",s:"dwarf-bolt-thrower"},
      {n:"Dwarf Cannon",s:"dwarf-cannon"},
      {n:"Dwarf Grudge Thrower",s:"dwarf-grudge-thrower"}
    ],
    rare:[
      {n:"Dwarf Irondrakes",s:"dwarf-irondrakes"},
      {n:"Dwarf Flame Cannon",s:"dwarf-flame-cannon"},
      {n:"Dwarf Rangers",s:"dwarf-rangers"},
      {n:"Gyrobombers (0-1)",s:"gyrobombers"},
      {n:"Dwarf Organ Gun (0-1)",s:"dwarf-organ-gun"}
    ],
    mercenaries:[
      {n:"Badlands Ogre Bulls",s:"badlands-ogre-bulls"},
      {n:"Doomseekers",s:"doomseeker"},
    ],
    allies:["Empire of Man","Grand Cathay"],
  },
  "grand-cathay":{
    characters:[
      {n:"Miao Ying, the Storm Dragon (0-1)",s:"miao-ying"},
      {n:"Cathayan Dragon (0-1 / 1000)",s:"cathayan-dragon"},
      {n:"Shugengan Lord (0-1 / 1000 of a Lord)",s:"shugengan-lord"},
      {n:"Gate Master (0-1 / 1000 of a Lord)",s:"gate-master"},
      {n:"Lord Magistrate (0-1 / 1000 of a Lord)",s:"lord-magistrate"},
      {n:"Supreme Astromancer (0-1 / 1000 of a Lord)",s:"astromancer-lord"},
      {n:"Shugengan General",s:"shugengan-general"},
      {n:"Gate Keeper",s:"gate-keeper"},
      {n:"Strategist",s:"strategist"},
      {n:"Astromancer",s:"astromancer"},
    ],
    core:[
      {n:"Jade Warriors",s:"jade-warriors"},
      {n:"Peasant Levy",s:"peasant-archers"},
      {n:"Jade Lancers (0-1 as Core if General is a Gate Master/Keeper)",s:"jade-lancers"},
    ],
    special:[
      {n:"Jade Lancers",s:"jade-lancers"},
      {n:"Crane Gunner Teams",s:"crane-gunners"},
      {n:"Iron Hail Gunners",s:"iron-hail-gunners"},
      {n:"Fire Rain Rocket Battery (0-2 war machines / 1000)",s:"fire-rain-rocket-battery"},
      {n:"Cathayan Grand Cannon (0-2 war machines / 1000)",s:"cathayan-grand-cannon"},
      {n:"Cathayan Sentinel (0-1 Special if General is a Shugengan)",s:"cathayan-sentinel"},
      {n:"Sky Lantern (0-1 Special if General is a Magistrate/Strategist)",s:"sky-lantern"},
    ],
    rare:[
      {n:"Sky Lanterns",s:"sky-lantern"},
      {n:"Cathayan Sentinels",s:"cathayan-sentinel"},
    ],
    mercenaries:[],
    allies:["Dwarfen Mountain Holds","Empire of Man","Kingdom of Bretonnia (Suspect)","Wood Elf Realms (Suspect)","High Elf Realms (Suspect)"],
  },
  "high-elf-realms":{
    characters:[
      {n:"Prince",s:"prince"},
      {n:"Noble",s:"noble"},
      {n:"Archmage",s:"archmage"},{n:"Mage",s:"mage"},
      
      
      {n:"Korhil (0-1)",s:"korhil"},
    ],
    core:[
      {n:"Lothern Sea Guard",s:"lothern-sea-guard"},{n:"Spearmen",s:"spearmen"},
      {n:"Archers",s:"archers"},{n:"Ellyrian Reavers",s:"ellyrian-reavers"},
      {n:"Silver Helms",s:"silver-helms"},
      {n:"White Lions of Chrace",s:"white-lions-of-chrace"},
      {n:"Sisters of Avelorn",s:"sisters-of-avelorn"}
    ],
    special:[
      {n:"Sword Masters of Hoeth",s:"sword-masters-of-hoeth"},
      {n:"Shadow Warriors",s:"shadow-warriors"},
      {n:"Dragon Princes of Caledor",s:"dragon-princes-of-caledor"},
      {n:"Phoenix Guard",s:"phoenix-guard"},
      {n:"Bolt Thrower",s:"bolt-thrower"},
      {n:"Lion Chariots of Chrace",s:"lion-chariots-of-chrace"},
      {n:"Tiranoc Chariots",s:"tiranoc-chariots"},
    ],
    rare:[
      {n:"Lothern Skycutters",s:"lothern-skycutters"},
      {n:"Frostheart Phoenix (0-1)",s:"frostheart-phoenix"},
      {n:"Flamespyre Phoenix (0-1)",s:"flamespyre-phoenix"},
      {n:"Great Eagle",s:"great-eagle"},
      {n:"Eagle Claw Bolt Thrower",s:"eagle-claw-bolt-thrower"},
    ],
    mercenaries:[{n:"Badlands Ogre Bulls",s:"badlands-ogre-bulls"}],
    allies:["Grand Cathay","Wood Elf Realms","Kingdom of Bretonnia (Suspicious)"],
  },
  "kingdom-of-bretonnia":{
    characters:[
      {n:"Bretonnian Lord",s:"bretonnian-lord"},{n:"Paladin",s:"paladin"},
      {n:"Prophetess (0-1)",s:"prophetess"},{n:"Damsel",s:"damsel"},
      {n:"The Green Knight (0-1)",s:"the-green-knight"},
    ],
    core:[
      {n:"Knights of the Realm",s:"knights-of-the-realm"},
      {n:"Peasant Bowmen",s:"peasant-bowmen"},
      {n:"Men-at-Arms",s:"men-at-arms"},
    ],
    special:[
      {n:"Questing Knights",s:"questing-knights"},
      {n:"Pegasus Knights",s:"pegasus-knights"},
      {n:"Mounted Yeomen",s:"mounted-yeomen"},
      {n:"Grail Reliquae",s:"grail-reliquae"}
    ],
    rare:[
      {n:"Grail Knights",s:"grail-knights"},
      {n:"Trebuchet",s:"trebuchet"},
      {n:"Field Trebuchet",s:"field-trebuchet"}
    ],
    mercenaries:[
      {n:"Badlands Ogre Bulls",s:"badlands-ogre-bulls"},
      {n:"Imperial Dwarf Mercenaries (0-1)",s:"imperial-dwarf-mercenaries"},
    ],
    allies:["Empire of Man","High Elf Realms (Suspicious)"],
  },
  "orc-and-goblin-tribes":{
    characters:[
      {n:"Orc Warboss",s:"orc-warboss"},{n:"Black Orc Warboss",s:"black-orc-warboss"},
      {n:"Orc Big Boss",s:"orc-big-boss"},{n:"Black Orc Big Boss",s:"black-orc-big-boss"},
      {n:"Orc Shaman",s:"orc-shaman"},{n:"Night Goblin Shaman",s:"night-goblin-shaman"},
      {n:"Goblin Warboss",s:"goblin-warboss"},{n:"Goblin Big Boss",s:"goblin-big-boss"},
      {n:"Goblin Shaman",s:"goblin-shaman"},
      
      
    ],
    core:[
      {n:"Orc Boyz",s:"orc-boyz"},{n:"Orc Big Uns",s:"orc-big-uns"},
      {n:"Orc Arrer Boyz",s:"orc-arrer-boyz"},
      {n:"Night Goblins",s:"night-goblins"},
      {n:"Goblins",s:"goblins"},{n:"Forest Goblins",s:"forest-goblins"},
      {n:"Wolf Riders",s:"wolf-riders"},{n:"Spider Riders",s:"spider-riders"},{n:"Orc Boar Chariots",s:"orc-boar-chariots"},
      {n:"Black Orcs",s:"black-orcs"},
      {n:"Squig Herd",s:"squig-herd"},
      {n:"Snotlings",s:"snotlings"},
      {n:"Troll Herd",s:"troll-herd"}
    ],
    special:[
      {n:"Night Goblin Fanatics (cond.)",s:"night-goblin-fanatics"},{n:"Squig Hoppers",s:"squig-hoppers"},
      {n:"Goblin Wolf Chariots",s:"goblin-wolf-chariots"},
      {n:"Orc Boar Boyz",s:"orc-boar-boyz"},
      {n:"Pump Wagon (cond.)",s:"pump-wagon"}
    ],
    rare:[
      {n:"Arachnarok Spider",s:"arachnarok-spider"},
      {n:"Mangler Squigs",s:"mangler-squigs"},
      {n:"Nasty Skulkers (cond.)",s:"nasty-skulkers"},
      {n:"Doom Diver Catapult",s:"doom-diver-catapult"},
      {n:"Rock Lobber",s:"rock-lobber"},
      {n:"Giant",s:"giant"}
    ],
    mercenaries:[{n:"Badlands Ogre Bulls",s:"badlands-ogre-bulls"}],
    allies:["Ogre Kingdoms"],
  },
  "tomb-kings-of-khemri":{
    characters:[
      {n:"Tomb King",s:"tomb-king"},
      
      {n:"Liche Priest",s:"liche-priest"},{n:"Tomb Herald",s:"tomb-herald"},
      {n:"Settra the Imperishable (0-1)",s:"settra-the-imperishable"},
    ],
    core:[
      {n:"Skeleton Warriors",s:"skeleton-warriors"},
      {n:"Skeleton Archers",s:"skeleton-archers"},
      {n:"Skeleton Horsemen",s:"skeleton-horsemen"},
      {n:"Skeleton Horse Archers",s:"skeleton-horse-archers"},
      {n:"Ushabti",s:"ushabti"},
      {n:"Skeleton Chariots",s:"skeleton-chariots"}
    ],
    special:[
      {n:"Tomb Guard",s:"tomb-guard"},
      {n:"Necropolis Knights",s:"necropolis-knights"},
      {n:"Bone Giant",s:"bone-giant"},
      {n:"Necrosphinx",s:"necrosphinx"},
      {n:"Khemrian Warsphinx",s:"khemrian-warsphinx"},
      {n:"Carrion",s:"carrion"}
    ],
    rare:[
      {n:"Screaming Skull Catapult",s:"screaming-skull-catapult"},
      {n:"Casket of Souls (0-1)",s:"casket-of-souls"}
    ],
    mercenaries:[],
    allies:[],
  },
  "warriors-of-chaos":{
    characters:[
      {n:"Chaos Lord",s:"chaos-lord"},{n:"Exalted Hero",s:"exalted-hero"},
      {n:"Sorcerer Lord",s:"sorcerer-lord"},{n:"Sorcerer",s:"sorcerer"},
      {n:"Daemon Prince (0-1)",s:"daemon-prince"},
      {n:"Chaos Lord on Manticore",s:"chaos-lord-on-manticore"},
    ],
    core:[
      {n:"Chaos Warriors",s:"chaos-warriors"},
      {n:"Chaos Marauders",s:"chaos-marauders"},
      {n:"Chaos Marauder Horsemen",s:"chaos-marauder-horsemen"},
      {n:"Chaos Knights",s:"chaos-knights"},
      {n:"Chaos Warhounds",s:"chaos-warhounds"},
      {n:"Chaos Chariot",s:"chaos-chariot"}
    ],
    special:[
      {n:"Chaos Chosen",s:"chaos-chosen"},
      {n:"Chaos Ogres",s:"chaos-ogres"},{n:"Dragon Ogres",s:"dragon-ogres"},
    ],
    rare:[
      {n:"Dragon Ogre Shaggoth",s:"dragon-ogre-shaggoth"},
      {n:"Chaos Trolls",s:"chaos-trolls"},
      {n:"Gorebeast Chariot",s:"gorebeast-chariot"},
      {n:"Hellcannon",s:"hellcannon"}
    ],
    mercenaries:[
      {n:"Badlands Ogre Bulls",s:"badlands-ogre-bulls"},
      {n:"Gor Herd (Beastmen)",s:"gor-herd"},
      {n:"Ungor Herd (Beastmen)",s:"ungor-herd"},
    ],
    allies:["Beastmen Brayherds","Daemons of Chaos (Suspicious)"],
  },
  "wood-elf-realms":{
    characters:[
      {n:"Glade Lord",s:"glade-lord"},{n:"Glade Captain",s:"glade-captain"},
      {n:"Spellweaver",s:"spellweaver"},{n:"Spellsinger",s:"spellsinger"},
      {n:"Shadowdancer",s:"shadowdancer"},{n:"Waystalker",s:"waystalker"},
      {n:"Orion King of the Hunt (0-1)",s:"orion-king-of-the-hunt"},
      
    ],
    core:[
      {n:"Glade Guard",s:"glade-guard"},{n:"Dryads",s:"dryads"},
      {n:"Glade Riders",s:"glade-riders"},
      {n:"Eternal Guard",s:"eternal-guard"}
    ],
    special:[
      {n:"Wardancers",s:"wardancers"},
      {n:"Wildwood Rangers",s:"wildwood-rangers"},
      {n:"Tree Kin",s:"tree-kin"},{n:"Wild Riders",s:"wild-riders"},
      {n:"Deepwood Scouts",s:"deepwood-scouts"},
      {n:"Warhawk Riders",s:"warhawk-riders"},
    ],
    rare:[
      {n:"Treeman Ancient",s:"treeman-ancient"},
      {n:"Treeman",s:"treeman"},
      {n:"Waywatchers",s:"waywatchers"},
      {n:"Great Eagle",s:"great-eagle"}
    ],
    mercenaries:[],
    allies:["High Elf Realms","Empire of Man (Suspicious)"],
  },
  "chaos-dwarfs":{
    legacy:true,
    characters:[
      {n:"Sorcerer-Prophet",s:"chaos-dwarf-sorcerer-prophet"},
      {n:"Daemonsmith Sorcerer",s:"chaos-dwarf-daemonsmith"},
      {n:"Infernal Castellan",s:"infernal-castellan"},
      {n:"Infernal Seneschal",s:"infernal-seneschal"},
      {n:"Bull Centaur Taur'ruk",s:"bull-centaur-taurruk"},
      {n:"Hobgoblin Khan",s:"hobgoblin-khan"},
      {n:"Despot (Renegade)",s:"despot"},
    ],
    core:[
      {n:"Infernal Guard",s:"infernal-guard"},
      {n:"Hobgoblin Cutthroats",s:"hobgoblin-cutthroats"},
      {n:"Chaos Dwarf Warriors (Renegade)",s:"chaos-dwarf-warriors-renegade"},
      {n:"Blunderbuss Decimators (Renegade)",s:"blunderbuss-decimators"}
    ],
    special:[
      {n:"Infernal Ironsworn",s:"chaos-dwarf-warriors"},
      {n:"Sneaky Gits",s:"sneaky-gits"},
      {n:"K'daai Fireborn",s:"kdaai-fireborn"},
      {n:"Bull Centaur Renders",s:"bull-centaurs"},
      {n:"Iron Daemon",s:"iron-daemon-war-engine"},
      {n:"Deathshrieker Rocket Launcher",s:"death-rocket"},
      {n:"Magma Cannon",s:"magma-cannon"},
      {n:"Hobgoblin Bolt Thrower",s:"hobgoblin-bolt-thrower"}
    ],
    rare:[
      {n:"Hobgoblin Wolf Riders",s:"hobgoblin-wolf-raiders"},
      {n:"Dreadquake Mortar",s:"dreadquake-mortar"},
    ],
    mercenaries:[
      {n:"Badlands Ogre Bulls",s:"badlands-ogre-bulls"},
      {n:"Orc Mob (O&G)",s:"orc-mob"},
      {n:"Goblin Mob (O&G)",s:"goblin-mob"},
      {n:"Night Goblin Mob (O&G)",s:"night-goblin-mob"},
    ],
    allies:["Warriors of Chaos"],
  },
  "daemons-of-chaos":{
    legacy:true,
    characters:[
      {n:"Bloodthirster (0-1)",s:"bloodthirster"},
      {n:"Lord of Change (0-1)",s:"lord-of-change"},
      {n:"Great Unclean One (0-1)",s:"great-unclean-one"},
      {n:"Keeper of Secrets (0-1)",s:"keeper-of-secrets"},
      {n:"Daemon Prince",s:"daemon-prince"},
      {n:"Herald of Khorne",s:"herald-of-khorne"},
      {n:"Herald of Tzeentch",s:"herald-of-tzeentch"},
      {n:"Herald of Nurgle",s:"herald-of-nurgle"},
      {n:"Herald of Slaanesh",s:"herald-of-slaanesh"},
    ],
    core:[
      {n:"Bloodletters of Khorne",s:"bloodletters-of-khorne"},
      {n:"Plaguebearers of Nurgle",s:"plaguebearers-of-nurgle"},
      {n:"Daemonettes of Slaanesh",s:"daemonettes-of-slaanesh"},
      {n:"Chaos Furies",s:"chaos-furies"},
      {n:"Brimstone Horrors of Tzeentch",s:"brimstone-horrors-of-tzeentch"}
    ],
    special:[
      {n:"Flesh Hounds of Khorne",s:"flesh-hounds-of-khorne"},
      {n:"Flamers of Tzeentch",s:"flamers-of-tzeentch"},
      {n:"Beasts of Nurgle",s:"beasts-of-nurgle"},
      {n:"Fiends of Slaanesh",s:"fiends-of-slaanesh"},
      {n:"Seekers of Slaanesh",s:"seekers-of-slaanesh"},
      {n:"Screamers of Tzeentch",s:"screamers-of-tzeentch"},
      {n:"Bloodcrushers of Khorne",s:"bloodcrushers-of-khorne"},
      {n:"Nurglings",s:"nurglings"},
      {n:"Blue Horrors of Tzeentch",s:"blue-horrors-of-tzeentch"},
      {n:"Horrors of Tzeentch",s:"horrors-of-tzeentch"},
      {n:"Exalted Flamers of Tzeentch",s:"exalted-flamers-of-tzeentch"},
      {n:"Plague Drones of Nurgle",s:"plague-drones-of-nurgle"},
      {n:"Hellflayer of Slaanesh",s:"hellflayer-of-slaanesh"}
    ],
    rare:[
      {n:"Skull Cannon of Khorne",s:"skull-cannon-of-khorne"},
      {n:"Soul Grinder",s:"soul-grinder"},
      {n:"Burning Chariot of Tzeentch",s:"burning-chariot-of-tzeentch"},
    ],
    mercenaries:[],
    allies:["Warriors of Chaos (Suspicious)","Beastmen Brayherds (Suspicious)"],
  },
  "dark-elves":{
    legacy:true,
    characters:[
      {n:"Dreadlord",s:"dreadlord"},
      {n:"Supreme Sorceress",s:"supreme-sorceress"},{n:"Sorceress",s:"sorceress"},
      {n:"Death Hag",s:"death-hag"},{n:"Master",s:"master"},
      {n:"High Beastmaster",s:"high-beastmaster"},{n:"Khainite Assassin",s:"khainite-assassin"},
    ],
    core:[
      {n:"Dark Elf Warriors",s:"dark-elf-warriors"},
      {n:"Dark Elf Crossbowmen",s:"dark-elf-crossbowmen"},
      {n:"Dark Riders",s:"dark-riders"},{n:"Corsairs",s:"corsairs"},
    ],
    special:[
      {n:"Black Guard of Naggarond",s:"black-guard-of-naggarond"},
      {n:"Cold One Knights",s:"cold-one-knights"},
      {n:"Witch Elves",s:"witch-elves"},
      {n:"Executioners",s:"executioners"},
      {n:"Cold One Chariot",s:"cold-one-chariot"},
      {n:"Shades",s:"shades"},
      {n:"Harpies",s:"harpies"},
    ],
    rare:[
      {n:"War Hydra",s:"war-hydra"},
      {n:"Bloodwrack Shrine",s:"bloodwrack-shrine"},
      {n:"Sisters of Slaughter",s:"sisters-of-slaughter"},
      {n:"Kharibdyss",s:"kharibdyss"},
      {n:"Bloodwrack Medusa",s:"bloodwrack-medusa"},
      {n:"Doomfire Warlocks",s:"doomfire-warlocks"},
      {n:"Reaper Bolt Thrower",s:"reaper-bolt-thrower"}
    ],
    mercenaries:[{n:"Badlands Ogre Bulls",s:"badlands-ogre-bulls"}],
    allies:[],
  },
  "lizardmen":{
    legacy:true,
    characters:[
      {n:"Slann Mage-Priest",s:"slann-mage-priest"},
      {n:"Saurus Oldblood",s:"saurus-oldblood"},
      {n:"Skink Chief",s:"skink-chief"},
      {n:"Saurus Scar-Veteran",s:"saurus-scar-veteran"},
      {n:"Skink Priest",s:"skink-priest"},
    ],
    core:[
      {n:"Saurus Warriors",s:"saurus-warriors"},
      {n:"Skinks",s:"skinks"},{n:"Skink Cohort",s:"skink-cohort"},
      {n:"Jungle Swarms",s:"jungle-swarms"},
    ],
    special:[
      {n:"Temple Guard",s:"temple-guard"},
      {n:"Saurus Cavalry",s:"saurus-cavalry"},
      {n:"Kroxigors",s:"kroxigors"},
      {n:"Chameleon Skinks",s:"chameleon-skinks"},
      {n:"Terradons",s:"terradons"},
      {n:"Ripperdactyl Riders",s:"ripperdactyl-riders"},
      {n:"Salamander Hunting Pack",s:"salamander-hunting-pack"},
      {n:"Razordon Hunting Pack",s:"razordon-hunting-pack"},
      {n:"Stegadon",s:"stegadon"},
      {n:"Bastiladon",s:"bastiladon"}
    ],
    rare:[
      {n:"Ancient Stegadon",s:"ancient-stegadon"},{n:"Troglodon",s:"troglodon"},
    ],
    mercenaries:[],allies:[],
  },
  "ogre-kingdoms":{
    legacy:true,
    characters:[
      {n:"Tyrant",s:"tyrant"},{n:"Bruiser",s:"bruiser"},
      {n:"Butcher",s:"butcher"},{n:"Slaughtermaster",s:"slaughtermaster"},
      {n:"Firebelly",s:"firebelly"},{n:"Hunter",s:"hunter"},
    ],
    core:[
      {n:"Ogre Bulls",s:"ogre-bulls"},{n:"Ironguts",s:"ironguts"},
      {n:"Gnoblars",s:"gnoblars"},
      {n:"Sabretusk Pack",s:"sabretusk-pack"},{n:"Gnoblar Trappers",s:"gnoblar-trappers"},
    ],
    special:[
      {n:"Leadbelchers",s:"leadbelchers"},{n:"Mournfang Cavalry",s:"mournfang-cavalry"},
      {n:"Yhettis (cond.)",s:"yhettis"},
      {n:"Ironblaster",s:"ironblaster"},{n:"Scraplauncher",s:"scraplauncher"},
      {n:"Maneaters",s:"maneaters"}
    ],
    rare:[
      {n:"Stonehorn",s:"stonehorn"},{n:"Thundertusk",s:"thundertusk"},
      {n:"Gorgers",s:"gorgers"},
      {n:"Giant",s:"giant"},
    ],
    mercenaries:[],allies:["Orc & Goblin Tribes"],
  },
  "skaven":{
    legacy:true,
    characters:[
      {n:"Grey Seer",s:"grey-seer"},
      {n:"Warlord",s:"warlord"},{n:"Chieftain",s:"chieftain"},
      {n:"Master Moulder",s:"master-moulder"},{n:"Warlock Engineer",s:"warlock-engineer"},
      {n:"Plague Priest",s:"plague-priest"},
      {n:"Master Assassin",s:"master-assassin"},
    ],
    core:[
      {n:"Skaven Clanrats",s:"skaven-clanrats"},

      {n:"Giant Rats",s:"giant-rats"},
      {n:"Skaven Dregs",s:"skaven-dregs"},
      {n:"Rat Swarms",s:"rat-swarms"},
      {n:"Night Runners",s:"night-runners"},
      {n:"Warp-Grinder Weapon Team",s:"warp-grinder-weapon-team"}
    ],
    special:[
      {n:"Plague Monks",s:"plague-monks"},
      {n:"Gutter Runners",s:"gutter-runners"},
      {n:"Rat Ogres",s:"rat-ogres"},
      {n:"Poisoned Wind Mortars",s:"poisoned-wind-mortars"},
      {n:"Warplock Jezzails",s:"warplock-jezzails"},
      {n:"Skaven Stormvermin",s:"skaven-stormvermin"}
    ],
    rare:[
      {n:"Plague Furnace (0-1)",s:"plague-furnace"},
      {n:"Screaming Bell (0-1)",s:"screaming-bell"},
      {n:"Doomwheel",s:"doomwheel"},
      {n:"Warp Lightning Cannon",s:"warp-lightning-cannon"},
      {n:"Hell Pit Abomination (0-1)",s:"hell-pit-abomination"},
      {n:"Plagueclaw Catapult",s:"plagueclaw-catapult"},
      {n:"Plague Censor Bearers",s:"plague-censor-bearers"}
    ],
    mercenaries:[],allies:[],
  },
  "vampire-counts":{
    legacy:true,
    characters:[
      
      {n:"Strigoi Ghoul King",s:"strigoi-ghoul-king"},
      {n:"Necromancer",s:"necromancer"},
      {n:"Vampire",s:"vampire"},{n:"Wight King",s:"wight-king"},
    ],
    core:[
      {n:"Skeleton Warriors",s:"skeleton-warriors-vc"},
      {n:"Zombies",s:"zombies"},{n:"Crypt Ghouls",s:"crypt-ghouls"},
      {n:"Dire Wolves",s:"dire-wolves"},{n:"Bats",s:"bats"},
    ],
    special:[
      {n:"Grave Guard",s:"grave-guard"},{n:"Black Knights",s:"black-knights"},{n:"Spirit Hosts",s:"spirit-hosts"},
      {n:"Cairn Wraiths",s:"cairn-wraiths"},{n:"Corpse Cart",s:"corpse-cart"},
      {n:"Terrorgheist (0-1)",s:"terrorgheist"}
    ],
    rare:[
      {n:"Blood Knights",s:"blood-knights"},
      {n:"Varghulf",s:"varghulf"},
      {n:"Black Coach (0-1)",s:"black-coach"},
      {n:"Mortis Engine (0-1)",s:"mortis-engine"},
      {n:"Hexwraiths",s:"hexwraiths"},
      {n:"Vargheists",s:"vargheists"}
    ],
    mercenaries:[],allies:[],
  },
  "realms-of-men":{
    special_army:true,
    characters:[
      {n:"Renegade Prince (0-1)",s:"renegade-prince"},
      {n:"Renegade Captain",s:"renegade-captain"},
      {n:"Outcast Wizard",s:"outcast-wizard"},
    ],
    core:[
      {n:"Veteran Sellswords (0-1)",s:"veteran-sellswords"},
      {n:"Sellsword Infantry",s:"sellsword-infantry"},
      {n:"Freeblade Knights",s:"freeblade-knights"},
      {n:"Hireling Outriders",s:"hireling-outriders"},
      {n:"Free Company Militia",s:"free-company-militia"},
      {n:"Empire Archers",s:"empire-archers"},
    ],
    special:[
      {n:"Veteran Freeblades",s:"veteran-freeblades"},
      {n:"Border Princes Mortar (0-2)",s:"border-princes-mortar"},
    ],
    rare:[
      {n:"Border Princes Brigands",s:"border-princes-brigands"},
      {n:"Border Princes Organ Gun (0-1)",s:"border-princes-organ-gun"},
      {n:"Border Princes Bombard",s:"border-princes-bombard"},
    ],
    mercenaries:[
      {n:"Badlands Ogre Bulls",s:"badlands-ogre-bulls"},
      {n:"Doomseekers",s:"doomseeker"},
      {n:"Imperial Dwarf Mercenaries",s:"imperial-dwarf-mercenaries"},
      {n:"Imperial Ogres",s:"imperial-ogres"},
    ],
    allies:[],
  },
  "regiments-of-renown":{
    special_army:true,
    characters:[],
    core:[
      {n:"Prince Ulther's Dragon Company",s:"prince-ulthers-dragon-company"},
      {n:"Bugman's Rangers",s:"bugmans-rangers"},
    ],
    special:[
      {n:"Golgfag's Mercenary Ogres",s:"golgfags-mercenary-ogres"},
      {n:"Doomseekers",s:"doomseeker"}
    ],
    rare:[],mercenaries:[],allies:[],
  },
};
const AUGUR_ALIASES = {
  'peasant-levy':'peasant-archers',
  'skeleton-warriors-vc':'skeleton-warriors',
  'sword-masters-of-hoeth':'swordmasters',
  'tuskgor-chariots':'tuskgor-chariots-',
  'supreme-astromancer':'astromancer-lord',
  'crane-gunner-teams':'crane-gunners',
  'archers':'elven-archers',
  'dragon-princes-of-caledor':'dragon-princes',
  'korhil':'korhil-lionmane',
  'lion-chariots-of-chrace':'lion-chariot-of-chrace',
  'lothern-skycutters':'lothern-skycutter',
  'spearmen':'elven-spearmen',
  'sword-masters-of-hoeth':'swordmasters-of-hoeth',
  'tiranoc-chariots':'tiranoc-chariot',
  'cathayan-cavalry':'jade-lancers',
  'dragon-blooded-shugengan-lord':'shugengan-lord',
  'fire-rain-rocket':'fire-rain-rocket-battery',
  'grand-cannon':'cathayan-grand-cannon',
  'jade-warrior-captain':'lord-magistrate',
  'terracotta-sentinel':'cathayan-sentinel',
  'bestigors':'bestigor-herd',
  'minotaurs':'minotaur-herd',
  'tuskgor-chariots':'tuskgor-chariot',
  'ungor-raiders':'ungor-ravagers',
  'warhounds-of-chaos':'chaos-warhounds',
  'bull-centaurs':'bull-centaur-renders',
  'chaos-dwarf-blunderbusses':'infernal-guard',
  'chaos-dwarf-castellan':'infernal-castellan',
  'chaos-dwarf-daemonsmith':'daemonsmith-sorcerer',
  'chaos-dwarf-sorcerer-prophet':'sorcerer-prophet',
  'chaos-dwarf-warriors':'infernal-ironsworn',
  'death-rocket':'deathshrieker-rocket-launcher',
  'hobgoblin-wolf-raiders':'hobgoblin-wolf-riders',
  'iron-daemon-war-engine':'iron-daemon',
  'daemon-prince':'daemon-prince-daemons-of-chaos',
  'exalted-flamers-of-tzeentch':'flamers-of-tzeentch',
  'herald-of-khorne':'daemonic-herald-of-khorne',
  'herald-of-nurgle':'daemonic-herald-of-nurgle',
  'herald-of-slaanesh':'daemonic-herald-of-slaanesh',
  'herald-of-tzeentch':'daemonic-herald-of-tzeentch',
  'horrors-of-tzeentch':'pink-horrors-of-tzeentch',
  'corsairs':'black-ark-corsairs',
  'dark-elf-crossbowmen':'repeater-crossbowmen',
  'dreadlord':'dark-elf-dreadlord',
  'executioners':'har-ganeth-executioners',
  'master':'dark-elf-master',
  'shades':'dark-elf-shades',
  'dwarf-bolt-thrower':'bolt-thrower',
  'dwarf-cannon':'cannon',
  'dwarf-daemon-slayer':'daemon-slayer',
  'dwarf-dragon-slayer':'dragon-slayer',
  'dwarf-flame-cannon':'flame-cannon',
  'dwarf-grudge-thrower':'grudge-thrower',
  'dwarf-hammerers':'hammerers',
  'dwarf-ironbreakers':'ironbreakers',
  'dwarf-irondrakes':'irondrakes',
  'dwarf-king':'king',
  'dwarf-longbeards':'longbeards',
  'dwarf-master-engineer':'engineer',
  'dwarf-miners':'miners',
  'dwarf-organ-gun':'organ-gun',
  'dwarf-quarrellers':'quarrellers',
  'dwarf-rangers':'rangers',
  'dwarf-runelord':'runelord',
  'dwarf-runesmith':'runesmith',
  'dwarf-slayers':'slayers',
  'dwarf-thane':'thane',
  'dwarf-thunderers':'thunderers',
  'gyrobombers':'gyrobomber',
  'gyrocopters':'gyrocopter',
  'bretonnian-lord':'duke',
  'grail-reliquae':'battle-pilgrims',
  'knights-of-the-realm':'mounted-knights-of-the-realm',
  'trebuchet':'field-trebuchet',
  'kroxigors':'kroxigor',
  'razordon-hunting-pack':'razordon-pack',
  'salamander-hunting-pack':'salamander-pack',
  'saurus-cavalry':'cold-one-riders',
  'skink-cohort':'skink-skirmishers',
  'skinks':'skink-skirmishers',
  'terradons':'terradon',
  'gnoblars':'gnoblar-fighters',
  'gorgers':'gorger',
  'scraplauncher':'gnoblar-scraplauncher',
  'yhettis':'yhetees',
  'black-orc-big-boss':'black-orc-bigboss',
  'black-orcs':'black-orc-mob',
  'forest-goblins':'goblin-mob',
  'goblin-big-boss':'goblin-bigboss',
  'goblin-shaman':'goblin-oddgit',
  'goblin-wolf-chariots':'goblin-wolf-chariot',
  'goblins':'goblin-mob',
  'nasty-skulkers':'nasty-skulker',
  'night-goblin-fanatics':'fanatic',
  'night-goblin-shaman':'night-goblin-oddgit',
  'night-goblins':'night-goblin-mob',
  'orc-arrer-boyz':'orc-mob',
  'orc-big-boss':'orc-bigboss',
  'orc-big-uns':'orc-mob',
  'orc-boar-boyz':'orc-boar-boy-mob',
  'orc-boar-chariots':'orc-boar-chariot',
  'orc-boyz':'orc-mob',
  'orc-shaman':'orc-weirdboy',
  'pump-wagon':'snotling-pump-wagon',
  'rock-lobber':'goblin-rock-lobber',
  'snotlings':'snotling-mob',
  'spider-riders':'goblin-spider-rider-mob',
  'squig-herd':'night-goblin-squig-herd',
  'squig-hoppers':'night-goblin-squig-hopper-mob',
  'troll-herd':'common-troll-mob',
  'wolf-riders':'goblin-wolf-rider-mob',
  'chieftain':'skaven-chieftain',
  'plague-censor-bearers':'plague-censer-bearers',
  'poisoned-wind-mortars':'poisoned-wind-globadiers',
  'skaven-clanrats':'clanrats',
  'skaven-stormvermin':'stormvermin',
  'warlord':'skaven-warlord',
  'warp-grinder-weapon-team':'weapon-team',
  'bone-giant':'necrolith-colossus',
  'liche-priest':'mortuary-priest',
  'skeleton-warriors':'skeleton-warriors-tomb-kings',
  'tomb-herald':'royal-herald',
  'bats':'bat-swarms',
  'cairn-wraiths':'cairn-wraith',
  'necromancer':'master-necromancer',
  'skeleton-warriors-vc':'skeleton-warriors-vampire-counts',
  'vampire':'vampire-count',
  'chaos-chosen':'chosen-chaos-warriors',
  'chaos-lord-on-manticore':'chaos-lord',
  'chaos-marauder-horsemen':'marauder-horsemen',
  'exalted-hero':'exalted-champion',
  'sorcerer':'sorcerer-lord',
  'orion-king-of-the-hunt':'orion-the-king-in-the-woods',
  'goblin-wolf-chariot':'wolf-chariot',
  'orc-boar-chariot':'boar-chariot',
  'longma':'great-spirit-longma',
  'chariot-of-the-gods':'the-chariot-of-the-gods',
  'treeman-ancient':'treemen-ancient',
  'sang-froid':'cold-one',
  'coursier-squelette':'skeletal-steed',
  'griffon-empire':'griffon',
  'griffon-high-elves':'griffon',
  'manticore-dark-elves':'manticore',
  'manticore-renegade':'manticore',
  'manticore-warriors-of-chaos':'manticore',
  'skeletal-steed-tomb-kings':'skeletal-steed',
  'skeletal-steed-vampire-counts':'skeletal-steed',

};
const augurResolveSlug = s => (AUGUR_ALIASES[s] || s);
const AUGUR_INFAMY = {
  'tomb-kings-of-khemri': { lists: [
    { key:'nehekharan-royal-host', name:'Nehekharan Royal Host',
      comp:"Le Général doit être un Tomb King ou un Tomb Prince ; il peut devenir Magicien Niveau 1 (Lore de Necromancy) et Hierophant pour +35 pts (The Language of the Priests). Armée de chars et de cavalerie royale.",
      ruleSlugs:['grind-them-down','lay-in-wait','masterful-outriders','steadfast-discipline','the-language-of-the-priests'],
      cat:{ core:{min:33} },
      roster:{
        characters:['tomb-king','tomb-prince','mortuary-priest','royal-herald'],
        core:['skeleton-chariots','skeleton-archers','skeleton-infantry-cohort','skeleton-cavalry-cohort','tomb-guard','tomb-guard-chariots'],
        special:['tomb-guard','skeleton-skirmishers','skeleton-horse-archers','ushabti','necropolis-knights','tomb-guard-chariots','tomb-scorpion','khemrian-warsphinx'],
        rare:['screaming-skull-catapult']
      },
      limit:{ 'skeleton-chariots':'1+ (Core)','tomb-guard':'0-1 en Core','tomb-guard-chariots':'0-1 en Core','tomb-scorpion':'0-2 / 1000 pts','khemrian-warsphinx':'0-2 / 1000 pts','screaming-skull-catapult':'0-2 / 1000 pts' },
      req:[ {any:['tomb-king','tomb-prince'],min:1,label:'1+ Tomb King ou Tomb Prince (Général)'}, {any:['skeleton-chariots'],min:1,label:'1+ unité de Skeleton Chariots en Core'} ],
      units:{}, spells:[], items:[], note:[] },
    { key:'mortuary-cult', name:'Mortuary Cult',
      comp:"Doit inclure au moins un High Priest ou Mortuary Priest comme Hierophant, qui doit aussi être le Général. Armée de prêtres et de constructs animés.",
      ruleSlugs:['authority-of-the-hierophant','harmonious-incantations','sepulchral-animus','the-terrors-below','stone-shaper','immortal-overseer'],
      cat:{ core:{min:33}, rare:{max:33} },
      roster:{
        characters:['high-priest','mortuary-priest','tomb-prince','arch-necrotect','necrotect'],
        core:['skeleton-warriors','skeleton-archers','skeleton-skirmishers','skeleton-horsemen','skeleton-horse-archers','tomb-swarms','ushabti','necroserpents'],
        special:['tomb-scorpion','ushabti','venerable-ushabti','tomb-swarms','carrion','sepulchral-stalkers','necroserpents','skeleton-chariots','necrolith-colossus','necrosphinx'],
        rare:['necrolith-colossus','necrosphinx','screaming-skull-catapult','casket-of-souls','winged-warsphinx']
      },
      limit:{ 'tomb-swarms':'0-1 en Core','ushabti':'0-1 en Core','necroserpents':'0-1 en Core','tomb-scorpion':'1+ / 1000 pts (Special)','necrolith-colossus':'0-1 en Special','necrosphinx':'0-1 en Special','screaming-skull-catapult':'0-2 / 1000 pts','casket-of-souls':'0-1 / 1000 pts','winged-warsphinx':'0-1 / 1000 pts' },
      req:[ {any:['high-priest','mortuary-priest'],min:1,label:'1+ High Priest ou Mortuary Priest (Général)'} ],
      units:{}, spells:[], items:[], note:[] }
  ]},
  'orc-and-goblin-tribes': { lists: [
    { key:'nomadic-waaagh', name:'Nomadic Waaagh!',
      comp:"Tous les personnages doivent être montés (On Da Move). Persos ≤50% (0-1 Black Orc Boss/Black Orc Boar Chariot, 0-1 Orc Warboss/Weirdnob/1000). Core ≥25% (Wolf Rider Mobs, Wolf Chariots ; Boar Boys/Black Orc Chariot 0-1 Core selon Général). Special ≤50% (Boar Boys, Boar Chariots, Pump Wagons). Rare ≤25% (Black Orc Boar Chariots, Giants). Mercenaires ≤25%.",
      ruleSlugs:['on-da-move','cunning-hunters','hunting-packs','hit-em-fast-and-hit-em-ard','solitary-fighters'],
      roster:{
        characters:['black-orc-warboss','black-orc-bigboss','orc-warboss','orc-weirdnob','orc-bigboss','orc-weirdboy','goblin-warboss','goblin-bigboss','goblin-oddnob','goblin-oddgit'],
        core:['goblin-wolf-rider-mob','goblin-wolf-chariot','orc-boar-boy-mob','black-orc-boar-chariot'],
        special:['orc-boar-boy-mob','orc-boar-chariot','snotling-pump-wagon'],
        rare:['black-orc-boar-chariot','giant']
      },
      limit:{ 'black-orc-warboss':'0-1 / Black Orc Boar Chariot','black-orc-bigboss':'0-1 / Black Orc Boar Chariot','orc-warboss':'0-1 / 1000 (ou Weirdnob)','orc-weirdnob':'0-1 / 1000','orc-boar-boy-mob':'0-1 Core (si Général Orc Boss)','black-orc-boar-chariot':'0-1 Core (si Général Black Orc Boss)' },
      req:[],
      units:{}, spells:[], items:[], note:[] },
    { key:'troll-horde', name:'Troll Horde',
      comp:"Persos ≤50% (0-1 Orc Warboss/Weirdnob/1000, Bigbosses, Oddnobs, Troll Hags). Core ≥33% (1 Troll Mob/1000 + 0-1 par Troll Hag, Orc/Goblin Mobs, Spider/Wolf Riders). Special ≤50% (Common/River/Stone Troll Mobs, Wolf Chariots, 0-1 Boar Boys/1000, 0-1 Boar Chariots/1000). Rare ≤25% (Giants). Mercenaires ≤25%.",
      ruleSlugs:['enhanced-regeneration','oi-dis-way','troll-tongue','da-troll-calla','protect-da-boss','syphoned-strength'],
      cat:{ core:{min:33} },
      roster:{
        characters:['orc-warboss','orc-weirdnob','orc-bigboss','orc-weirdboy','goblin-warboss','goblin-bigboss','goblin-oddnob','goblin-oddgit','troll-hag'],
        core:['common-troll-mob','river-troll-mob','stone-troll-mob','orc-mob','goblin-mob','goblin-spider-rider-mob','goblin-wolf-rider-mob'],
        special:['common-troll-mob','river-troll-mob','stone-troll-mob','goblin-wolf-chariot','orc-boar-boy-mob','orc-boar-chariot'],
        rare:['giant']
      },
      limit:{ 'orc-warboss':'0-1 / 1000 (ou Weirdnob)','orc-weirdnob':'0-1 / 1000','troll-hag':'+0-1 Troll Mob en Core','orc-boar-boy-mob':'0-1 / 1000 (Special)','orc-boar-chariot':'0-1 / 1000 (Special)' },
      req:[ {any:['common-troll-mob','river-troll-mob','stone-troll-mob'],min:1,label:'1+ Troll Mob / 1000 (Core)'} ],
      units:{}, spells:[], items:[], note:[] }
  ]},
  'warriors-of-chaos': { lists: [
    { key:'wolves-of-the-sea', name:'Wolves of the Sea',
      comp:"Persos ≤50% (0-1 Chaos Lord/Daemon Prince/Sorcerer Lord, 0-1 Exalted Champion/Sorcerer/1000). Core ≥25% (Marauders, Marauder Horsemen, Berserkers, Warhounds). Special ≤50% (Chaos Warriors, Chariots, Skin Wolves, Huscarls, Spawn). Rare ≤33% (Chaos Ogres/Trolls, Dragon Ogres, 0-1 Gigantic Spawn/1000, Shaggoth, Giant). Mercenaires ≤25% (Gor/Ungor Herds).",
      ruleSlugs:['favour-of-the-gods','sea-born-raiders','warriors-duel','peerless-raider','chainmaker','commander-and-captain'],
      cat:{ rare:{max:33} },
      roster:{
        characters:['chaos-lord','daemon-prince-warriors-of-chaos','sorcerer-lord','exalted-champion','exalted-sorcerer','aspiring-champion','marauder-tribe-chieftain'],
        core:['chaos-marauders','marauder-horsemen','marauder-tribe-berserkers','chaos-warhounds'],
        special:['chaos-warriors','chaos-chariot','skin-wolves','marauder-tribe-huscarls','chaos-spawn'],
        rare:['chaos-ogres','chaos-trolls','dragon-ogres','gigantic-spawn-of-chaos','dragon-ogre-shaggoth','chaos-giant']
      },
      limit:{ 'chaos-lord':'0-1 (ou Daemon Prince/Sorcerer Lord)','daemon-prince-warriors-of-chaos':'0-1','sorcerer-lord':'0-1','exalted-champion':'0-1 / 1000 (ou Exalted Sorcerer)','exalted-sorcerer':'0-1 / 1000','gigantic-spawn-of-chaos':'0-1 / 1000','dragon-ogre-shaggoth':'0-1 / unité de Dragon Ogres','chaos-giant':'0-1 / 1000' },
      req:[],
      units:{}, spells:[], items:[], note:[] },
    { key:'heralds-of-darkness', name:'Heralds of Darkness',
      comp:"Tous les personnages doivent être montés ou Fly (Mounted Host). Persos ≤50% (0-1 Chaos Lord/Daemon Prince, 0-1 Exalted Champion/Sorcerer Lord/1000). Core ≥33% (Chaos Knights 1+, Marauder Horsemen, Warhounds, 0-1 Chariot Core). Special ≤50% (0-1 Chosen Knights, Chosen Chariot, Spawn, Chariots, Chimeras, Dragon Ogres). Rare ≤25% (Gorebeast Chariots, Shaggoth, Gigantic Spawn, Giant, 0-1 Warpfire Dragon). Mercenaires ≤25%.",
      ruleSlugs:['mounted-host','the-shadow-grows','steeds-of-darkness'],
      cat:{ core:{min:33} },
      roster:{
        characters:['chaos-lord','daemon-prince-warriors-of-chaos','exalted-champion','sorcerer-lord','aspiring-champion','exalted-sorcerer'],
        core:['chaos-knights','marauder-horsemen','chaos-warhounds','chaos-chariot'],
        special:['chosen-chaos-knights','chosen-chaos-chariot','chaos-spawn','chaos-chariot','chimera','dragon-ogres'],
        rare:['gorebeast-chariot','dragon-ogre-shaggoth','gigantic-spawn-of-chaos','chaos-giant','warpfire-dragon']
      },
      limit:{ 'chaos-lord':'0-1 (ou Daemon Prince)','daemon-prince-warriors-of-chaos':'0-1','exalted-champion':'0-1 / 1000 (ou Sorcerer Lord)','sorcerer-lord':'0-1 / 1000','chaos-knights':'1+ (Core)','chaos-chariot':'0-1 Core / Special','chosen-chaos-knights':'0-1','chosen-chaos-chariot':'0-1 / 1000','dragon-ogre-shaggoth':'0-1 / unité de Dragon Ogres','gigantic-spawn-of-chaos':'0-1 / 1000','chaos-giant':'0-1 / 1000','warpfire-dragon':'0-1' },
      req:[ {any:['chaos-knights'],min:1,label:'1+ unité de Chaos Knights (Core)'} ],
      units:{}, spells:[], items:[], note:[] }
  ]},
  'wood-elf-realms': { lists: [
    { key:'orions-wild-hunt', name:"Orion's Wild Hunt",
      comp:"Persos ≤50% (0-1 Glade Lord/1000, 0-1 Shadowdancer/Spellsinger/Waystalker/1000, Glade Captains). Core ≥25% (0-1 Wild Riders/1000, Glade Riders). Special ≤50% (0-1 Sisters of the Thorn/1000, Wardancers, Warhawk Riders, Wild Riders, Beast Packs). Rare ≤25% (0-1 Waywatchers/Waystalker, 0-3 Eagles/1000, Deepwood Scouts, Wildwood Rangers).",
      ruleSlugs:['worthy-of-kurnous','the-spirit-of-kurnous','chieftains-of-the-hunter-king'],
      roster:{
        characters:['glade-lord','shadowdancer','spellsinger','waystalker','glade-captain'],
        core:['wild-riders','glade-riders'],
        special:['sisters-of-the-thorn','wardancers','warhawk-riders','wild-riders','wood-elf-beast-pack'],
        rare:['waywatchers','great-eagle','deepwood-scouts','wildwood-rangers']
      },
      limit:{ 'glade-lord':'0-1 / 1000','shadowdancer':'0-1 / 1000 (ou Spellsinger/Waystalker)','spellsinger':'0-1 / 1000','waystalker':'0-1 / 1000','wild-riders':'0-1 / 1000 (Core)','sisters-of-the-thorn':'0-1 / 1000','waywatchers':'0-1 / Waystalker','great-eagle':'0-3 / 1000' },
      req:[],
      units:{}, spells:[], items:[], note:[] },
    { key:'host-of-talsyn', name:'Host of Talsyn',
      comp:"Persos ≤50% (0-1 Glade Lord/Spellweaver/1000, 0-1 Treeman Ancient/1000, 0-1 Warden of Talsyn/1000, 0-1 Shadowdancer/unité de Wardancers). Core ≥25% (Eternal Guard 1+, Dryads, 0-1 Glade Guard/1000, 0-1 Deepwood Scouts Core). Special ≤50% (Deepwood Scouts, Guardians of Talsyn, Wildwood Rangers, Sisters of the Thorn, 0-2 Tree Kin/1000). Rare ≤33% (Treemen, Wardancers, 0-3 Eagles/1000).",
      ruleSlugs:['ancient-enemies','the-awakened-wood','in-tune-with-nature','protectors-of-the-ancient-wood'],
      cat:{ rare:{max:33} },
      roster:{
        characters:['glade-lord','spellweaver','treemen-ancient','warden-of-talsyn','shadowdancer','glade-captain','spellsinger','branchwraith'],
        core:['eternal-guard','dryads','glade-guard','deepwood-scouts'],
        special:['deepwood-scouts','guardians-of-talsyn','wildwood-rangers','sisters-of-the-thorn','tree-kin'],
        rare:['treeman','wardancers','great-eagle']
      },
      limit:{ 'glade-lord':'0-1 / 1000 (ou Spellweaver)','spellweaver':'0-1 / 1000','treemen-ancient':'0-1 / 1000','warden-of-talsyn':'0-1 / 1000','shadowdancer':'0-1 / unité de Wardancers','eternal-guard':'1+ (Core)','glade-guard':'0-1 / 1000','deepwood-scouts':'0-1 Core','tree-kin':'0-2 / 1000','great-eagle':'0-3 / 1000' },
      req:[ {any:['eternal-guard'],min:1,label:'1+ unité d\'Eternal Guard (Core)'} ],
      units:{}, spells:[], items:[], note:[] }
  ]},
  'empire-of-man': { lists: [
    { key:'city-state-of-nuln', name:'City-state of Nuln',
      comp:"Persos ≤50% (0-1 General/Lector par 1000). Core ≥25% (Nuln State Troops, Free Company, Archers, 0-1 Outriders/1000). Special ≤50% (Greatswords, Pistoliers, Outriders, Knights, War Wagons + 0-3 machines : Great Cannon/Mortar). Rare ≤25% (Road Wardens, Helblaster/Helstorm, 0-1 Steam Tank/1000). Mercenaires ≤25%.",
      ruleSlugs:['nuln-state-troops','big-guns-know-no-fear','entrenched-position','gun-limbers','handgun-drill','veteran-outriders'],
      roster:{
        characters:['general-of-the-empire','lector-of-sigmar','captain-of-the-empire','master-mage','witch-hunter','priest-of-sigmar','empire-engineer','war-altar-of-sigmar'],
        core:['state-troops','nuln-veteran-state-troops','outriders','free-company-militia','empire-archers'],
        special:['empire-greatswords','pistoliers','outriders','empire-knights','empire-war-wagon','great-cannon','mortar'],
        rare:['empire-road-wardens','helblaster-volley-gun','helstorm-rocket-battery','empire-steam-tank']
      },
      limit:{ 'general-of-the-empire':'0-1 / 1000 (ou Lector)','lector-of-sigmar':'0-1 / 1000','war-altar-of-sigmar':'monture du Lector','outriders':'0-1 / 1000 (en Core)','great-cannon':'0-3 machines / 1000','mortar':'0-3 machines / 1000','helblaster-volley-gun':'0-2 machines / 1000','helstorm-rocket-battery':'0-2 machines / 1000','empire-steam-tank':'0-1 / 1000' },
      req:[ {any:['state-troops','nuln-veteran-state-troops'],min:1,label:'1+ régiment de Nuln State Troops (Core)'} ],
      units:{}, spells:[], items:[], note:[] },
    { key:'knightly-order', name:'Knightly Order',
      comp:"Persos ≤50% (0-1 Grand Master, 1+ Chapter Master, 0-1 Lector/High Priest of Ulric par 1000). Core ≥25% (Empire Knights 1+/1000, 0-1 Inner Circle Knights en Core, Archers). Special ≤50% (Inner Circle, Demigryph, 0-1 State Troops/1000). Rare ≤25% (Pistoliers).",
      ruleSlugs:['the-knightly-orders'],
      roster:{
        characters:['grand-master','chapter-master','lector-of-sigmar','high-priest-of-ulric','witch-hunter','priest-of-sigmar','priest-of-ulric','war-altar-of-sigmar'],
        core:['inner-circle-knights','empire-knights','empire-archers'],
        special:['inner-circle-knights','demigryph-knights','state-troops','state-missile-troops'],
        rare:['pistoliers']
      },
      limit:{ 'grand-master':'0-1','chapter-master':'1+','lector-of-sigmar':'0-1 / 1000 (ou High Priest)','high-priest-of-ulric':'0-1 / 1000','war-altar-of-sigmar':'monture du Lector','inner-circle-knights':'0-1 en Core','empire-knights':'1+ / 1000','state-troops':'0-1 / 1000','state-missile-troops':'0-1 / 1000' },
      req:[ {any:['empire-knights'],min:1,label:'1+ unité d\'Empire Knights / 1000'}, {any:['chapter-master'],min:1,label:'1+ Chapter Master'} ],
      units:{}, spells:[], items:[], note:[] }
  ]},
  'beastmen-brayherds': { lists: [
    { key:'minotaur-blood-herd', name:'Minotaur Blood Herd',
      comp:"Persos ≤50% (0-1 Doombull, 0-1 Bray-Shaman par 1000). Core ≥33% (1 Minotaur Herd/1000, Gors, Ungors, Warhounds, 0-1 Herdstone). Special ≤50% (0-1 Dragon Ogres/1000, Harpies, Minotaurs, Centigors, Razorgors, Ghorgons). Rare ≤33% (0-1 Shaggoth/1000, Chaos Giants, Chaos Ogres/Trolls).",
      ruleSlugs:['bloodshed-and-butchery','champions-of-slaughter','guardians-of-the-herdstones','magics-of-the-dark-gods'],
      cat:{ core:{min:33}, rare:{max:33} },
      roster:{
        characters:['doombull','bray-shaman','gorebull','wargor','warhoof'],
        core:['minotaur-herd','gor-herd','ungor-herd','chaos-warhounds'],
        special:['dragon-ogres','harpies','minotaur-herd','centigor-herd','razorgor-herd','ghorgon'],
        rare:['dragon-ogre-shaggoth','chaos-giant','chaos-ogres','chaos-trolls']
      },
      limit:{ 'doombull':'0-1 / 1000','bray-shaman':'0-1 / 1000','minotaur-herd':'1 / 1000 (Core)','dragon-ogres':'0-1 / 1000','dragon-ogre-shaggoth':'0-1 / 1000' },
      req:[ {any:['minotaur-herd'],min:1,label:'1+ Minotaur Herd (Core)'} ],
      units:{}, spells:[], items:[], note:[] },
    { key:'wild-herd', name:'Wild Herd',
      comp:"Persos ≤50% (0-1 Beastlord/Great Bray-Shaman par 1000). Core ≥33% (Primal Warherd 1+, 0-1 Tuskgor Chariot/1000, Centigors, Gors, Ungors, Warhounds, Razorgors). Special ≤50%. Rare ≤32%.",
      ruleSlugs:['ancient-sorcery','dark-coven','gifts-from-the-dark-gods','roaming-warbands'],
      cat:{ core:{min:33}, rare:{max:32} },
      roster:{
        characters:['beastlord','great-bray-shaman','wargor','bray-shaman','warhoof'],
        core:['primal-warherd','tuskgor-chariot','centigor-herd','gor-herd','ungor-herd','chaos-warhounds','primal-warhounds','razorgor-herd'],
        special:['dragon-ogres','warped-gors','bestigor-herd','harpies','centigor-herd','tuskgor-chariot','razorgor-chariot','cockatrice','preyton'],
        rare:['dragon-ogre-shaggoth','jabberslythe','cygor','chaos-giant','chaos-spawn']
      },
      limit:{ 'beastlord':'0-1 / 1000','great-bray-shaman':'0-1 / 1000','primal-warherd':'1+ (Core)','tuskgor-chariot':'0-1 / 1000 (Core)','centigor-herd':'0-1 Core / Chieftain','dragon-ogres':'0-1','cockatrice':'0-1 / 1000','preyton':'0-1 / 1000' },
      req:[ {any:['primal-warherd'],min:1,label:'1+ Primal Warherd (Core)'} ],
      units:{}, spells:[], items:[], note:[] }
  ]},
  'dwarfen-mountain-holds': { lists: [
    { key:'royal-clans', name:'Royal Clans',
      comp:"Persos ≤50% (1+ King/Thane, 0-1 Anvil of Doom/Runelord par 1000, Runesmiths). Core ≥25% (Royal Clan Warriors, Longbeards, Quarrellers). Special ≤50% (Hammerers, Dwarf Carts, 0-3 machines : Bolt/Grudge Thrower). Rare ≤25% (Rangers, Ironbreakers, Irondrakes). Mercenaires ≤25%.",
      ruleSlugs:['ancestral-fury','riches-and-heirlooms','striking-a-grudge'],
      roster:{
        characters:['king','thane','anvil-of-doom','runelord','runesmith'],
        core:['royal-clan-warriors','longbeards','quarrellers'],
        special:['hammerers','dwarf-cart','bolt-thrower','grudge-thrower'],
        rare:['rangers','ironbreakers','irondrakes']
      },
      limit:{ 'king':'1+ (ou Thane)','thane':'1+ (ou King)','anvil-of-doom':'0-1 / 1000 (ou Runelord)','runelord':'0-1 / 1000','bolt-thrower':'0-3 machines / 1000','grudge-thrower':'0-3 machines / 1000' },
      req:[ {any:['king','thane'],min:1,label:'1+ King ou Thane'} ],
      units:{}, spells:[], items:[], note:[] },
    { key:'expeditionary-force', name:'Expeditionary Force',
      comp:"Persos ≤50% (1+ Engineer, 0-1 Daemon/Dragon Slayer, Thanes, Runesmiths). Core ≥25% (Warriors, Thunderers, Carts, 0-1 Rangers/1000, 0-1 Scout Gyrocopter/1000 en Core). Special ≤50% (Miners, Gyrocopters, 0-3 machines). Rare ≤33% (Gyrobombers, 0-1 Slayers, Organ Gun/Flame Cannon). Mercenaires ≤25%.",
      ruleSlugs:['expeditionary-marksmen','function-over-form','subterranean-ambush'],
      cat:{ rare:{max:33} },
      roster:{
        characters:['engineer','engineer-sapper','daemon-slayer','dragon-slayer','thane','runesmith'],
        core:['dwarf-warriors','thunderers','dwarf-cart','rangers','scout-gyrocopter'],
        special:['miners','scout-gyrocopter','gyrocopter','bolt-thrower','grudge-thrower','cannon'],
        rare:['gyrobomber','slayers','organ-gun','flame-cannon']
      },
      limit:{ 'engineer':'1+ (ou Sapper)','engineer-sapper':'1+ (ou Engineer)','daemon-slayer':'0-1 (ou Dragon Slayer)','dragon-slayer':'0-1','rangers':'0-1 / 1000 (Core)','scout-gyrocopter':'0-1 / 1000 (Core)','bolt-thrower':'0-3 machines / 1000','grudge-thrower':'0-3 machines / 1000','cannon':'0-3 machines / 1000','organ-gun':'0-2 machines / 1000','flame-cannon':'0-2 machines / 1000','slayers':'0-1' },
      req:[ {any:['engineer','engineer-sapper'],min:1,label:'1+ Engineer ou Engineer Sapper'} ],
      units:{}, spells:[], items:[], note:[] },
    { key:'slayer-host', name:'Slayer Host',
      comp:"Persos ≤50% (Ungrim Ironfist, 0-1 Daemon Slayer/1000, 0-2 Dragon Slayers par unité de Slayers). Core ≥20% (Slayers). Special ≤50% (0-1 Brotherhood of Grimnir, Doomseekers). Rare ≤25% (Goblin-hewer, Dwarf Cart, Hammerers si Ungrim). Mercenaires ≤20%. + Runic Tattoos.",
      ruleSlugs:['from-the-wilds','look-snorri-trolls','troll-hunters','wards-of-grimnir','worst-among-equals'],
      cat:{ core:{min:20} },
      roster:{
        characters:['ungrim-ironfist','daemon-slayer','dragon-slayer'],
        core:['slayers'],
        special:['brotherhood-of-grimnir','doomseeker'],
        rare:['goblin-hewer','dwarf-cart','hammerers']
      },
      limit:{ 'daemon-slayer':'0-1 / 1000','dragon-slayer':'0-2 / unité de Slayers','brotherhood-of-grimnir':'0-1','goblin-hewer':'0-1 / 1000','dwarf-cart':'0-1 / 1000','hammerers':'0-1 (si Ungrim)' },
      req:[ {any:['slayers'],min:1,label:'1+ unité de Slayers (Core)'} ],
      units:{}, spells:[], items:[], note:[] }
  ]},
  'grand-cathay': { lists: [
    { key:'jade-fleet', name:'Jade Fleet',
      comp:"Persos ≤50% (Miao Ying, 0-1 Shugengan Lord/Lord Magistrate par 1000). Core ≥25% (Jade Warriors, 0-1 Jade Lancers/1000 en Core). Special ≤50% (Jade Lancers, 0-3 machines : Fire Rain Rocket/Grand Cannon). Rare ≤25% (Sky Lanterns, Sentinels). Mercenaires ≤33% (Empire, sans Misbehaving Mercenaries).",
      ruleSlugs:['cathayan-black-powder','mercenary-handgun-drill','unity-and-harmony','war-balloons'],
      roster:{
        characters:['miao-ying','shugengan-lord','lord-magistrate','shugengan-general','gate-master','gate-keeper','strategist'],
        core:['jade-warriors','jade-lancers'],
        special:['jade-lancers','fire-rain-rocket-battery','cathayan-grand-cannon'],
        rare:['sky-lantern','cathayan-sentinel']
      },
      limit:{ 'shugengan-lord':'0-1 / 1000 (ou Lord Magistrate)','lord-magistrate':'0-1 / 1000','jade-lancers':'0-1 / 1000 (en Core)','fire-rain-rocket-battery':'0-3 machines / 1000','cathayan-grand-cannon':'0-3 machines / 1000' },
      req:[ {any:['jade-warriors'],min:1,label:'1+ Jade Warriors (Core)'} ],
      units:{}, spells:[], items:[], note:[] },
    { key:'warriors-of-wind-and-field', name:'Warriors of Wind & Field',
      comp:"Persos ≤50% (0-1 Lord Magistrate/Gate Master/Supreme Astromancer par 1000). Core ≥25% (Peasant Levy 1+, Iron Hail Gunners, 0-1 Jade Warriors/1000 en Core). Special ≤50% (Jade Warriors, Crane Gunner Teams, Sky Lanterns, 0-2 machines). Rare ≤25% (Jade Lancers, Sentinels). Mercenaires ≤20% (Badlands Ogre Bulls). (Crane Gunner Teams non encore présents en base.)",
      ruleSlugs:['discipline-of-the-dragon','warriors-of-the-field','warriors-of-the-land','warriors-of-the-wind'],
      roster:{
        characters:['lord-magistrate','gate-master','supreme-astromancer','shugengan-general','gate-keeper','strategist','astromancer'],
        core:['peasant-levy','iron-hail-gunners','jade-warriors'],
        special:['jade-warriors','sky-lantern','fire-rain-rocket-battery','cathayan-grand-cannon','jade-lancers'],
        rare:['jade-lancers','cathayan-sentinel']
      },
      limit:{ 'lord-magistrate':'0-1 / 1000 (ou Gate Master/Supreme Astromancer)','gate-master':'0-1 / 1000','supreme-astromancer':'0-1 / 1000','jade-warriors':'0-1 / 1000 (en Core)','fire-rain-rocket-battery':'0-2 machines / 1000','cathayan-grand-cannon':'0-2 machines / 1000','jade-lancers':'0-1 en Special' },
      req:[ {any:['peasant-levy'],min:1,label:'1+ Peasant Levy (Core)'} ],
      units:{}, spells:[], items:[], note:[] }
  ]},
  'high-elf-realms': { lists: [
    { key:'the-chracian-warhost', name:'The Chracian Warhost',
      comp:"Persos ≤50% (0-1 Prince/Archmage par 1000, 0-1 Chracian Chieftain/Storm Weaver par 1000). Core ≥33% (Spearmen, Archers, Chracian Woodsmen, 0-1 White Lions of Chrace/1000). Special ≤50% (White Lions, Lion Chariots, 0-1 War Lions/1000). Rare ≤33% (Lion Guard, Shadow Warriors/Sisters of Avelorn, Eagles, Bolt Thrower).",
      ruleSlugs:['chracian-pride','hidden-trails','warriors-of-chrace','warriors-of-the-wilderness'],
      cat:{ core:{min:33}, rare:{max:33} },
      roster:{
        characters:['prince','archmage','chracian-chieftain','storm-weaver','noble'],
        core:['elven-spearmen','elven-archers','chracian-woodsmen','white-lions-of-chrace'],
        special:['white-lions-of-chrace','lion-chariot-of-chrace','war-lions'],
        rare:['lion-guard','shadow-warriors','sisters-of-avelorn','great-eagle','eagle-claw-bolt-thrower']
      },
      limit:{ 'prince':'0-1 / 1000 (ou Archmage)','archmage':'0-1 / 1000','chracian-chieftain':'0-1 / 1000 (ou Storm Weaver)','storm-weaver':'0-1 / 1000','white-lions-of-chrace':'0-1 / 1000 (en Core)','war-lions':'0-1 / 1000','lion-guard':'0-1','shadow-warriors':'0-1 / 1000 (ou Sisters)','sisters-of-avelorn':'0-1 / 1000','great-eagle':'0-2 / 1000','eagle-claw-bolt-thrower':'0-1 / 1000' },
      req:[],
      units:{}, spells:[], items:[], note:[] },
    { key:'sea-guard-garrison', name:'Sea Guard Garrison',
      comp:"Persos ≤50% (Sea Guard Commanders, Storm Weavers, 0-1 Dragon Mage/Noble/Mage par 1000). Core ≥33% (Lothern Sea Guard, Ship's Company, 0-1 Shadow Warriors/1000). Special ≤50% (Lothern Skycutters, 0-2 Eagles/1000, 0-3 Bolt Throwers/1000). Rare ≤33% (Ellyrian Reavers, Phoenix, Merwyrms).",
      ruleSlugs:['armies-of-the-sea-lord','from-the-mists','from-the-storm-clouds','old-world-rangers','pride-of-the-fleet'],
      cat:{ core:{min:33}, rare:{max:33} },
      roster:{
        characters:['sea-guard-garrison-commander','storm-weaver','dragon-mage','noble','mage'],
        core:['lothern-sea-guard','ships-company','shadow-warriors'],
        special:['lothern-skycutter','great-eagle','eagle-claw-bolt-thrower'],
        rare:['ellyrian-reavers','flamespyre-phoenix','frostheart-phoenix','merwyrm']
      },
      limit:{ 'dragon-mage':'0-1 / 1000 (ou Noble/Mage)','noble':'0-1 / 1000','mage':'0-1 / 1000','shadow-warriors':'0-1 / 1000 (en Core)','great-eagle':'0-2 / 1000','eagle-claw-bolt-thrower':'0-3 / 1000','flamespyre-phoenix':'0-1 / 1000 (ou Frostheart)','frostheart-phoenix':'0-1 / 1000' },
      req:[],
      units:{}, spells:[], items:[], note:[] }
  ]},
  'kingdom-of-bretonnia': { lists: [
    { key:'bretonnian-exiles', name:'Bretonnian Exiles',
      comp:"Persos ≤50% (0-1 Baron/1000, 0-1 Damsel, Paladins, Outcast Wizards, Sergeants-at-Arms). Core ≥25% (Knights of the Realm pied/montés 1+, Yeoman Guard/Peasant Bowmen 1+, 0-1 Knights Errant/1000, Men-at-Arms, Mounted Yeomen). Special ≤33% (Squires, Pegasus Knights, 0-1 Battle Pilgrims/1000). Rare ≤33% (Questing Knights, Border Princes Brigands, Trebuchet, Bombard). Mercenaires ≤25%.",
      ruleSlugs:['banished-lords','the-exiles-vow','reclaimed-glory'],
      cat:{ special:{max:33}, rare:{max:33} },
      roster:{
        characters:['baron','damsel','paladin','outcast-wizard','sergeant-at-arms'],
        core:['knights-of-the-realm-on-foot','mounted-knights-of-the-realm','yeomen-guard','peasant-bowmen','knights-errant','men-at-arms','mounted-yeomen'],
        special:['squires','pegasus-knights','battle-pilgrims'],
        rare:['questing-knights','border-princes-brigands','field-trebuchet','border-princes-bombard']
      },
      limit:{ 'baron':'0-1 / 1000','damsel':'0-1','knights-errant':'0-1 / 1000','battle-pilgrims':'0-1 / 1000','field-trebuchet':'0-1 / 1000','border-princes-bombard':'0-1 / 1000' },
      req:[ {any:['knights-of-the-realm-on-foot','mounted-knights-of-the-realm'],min:1,label:'1+ Knights of the Realm (pied ou montés)'} ],
      units:{}, spells:[], items:[], note:[] },
    { key:'errantry-crusade', name:'Errantry Crusade',
      comp:"Persos ≤50% (0-1 Duke, 0-1 Baron/Prophetess par 1000, 1+ Paladin, Damsels, Sergeants). Core ≥33% (Knights Errant 1+/1000, 0-1 Battle Pilgrims en Core, Knights of the Realm pied, Squires, montés). Special ≤50% (Men-at-Arms, Peasant Bowmen, Battle Pilgrims, Questing Knights, Pegasus Knights). Rare ≤33% (Grail Knights, Mounted Yeomen, Trebuchet). Mercenaires ≤25%.",
      ruleSlugs:['crusading-knights','crusaders-zeal','the-crusaders-vow','earn-your-spurs'],
      cat:{ core:{min:33}, rare:{max:33} },
      roster:{
        characters:['duke','baron','prophetess','paladin','damsel','sergeant-at-arms'],
        core:['knights-errant','battle-pilgrims','knights-of-the-realm-on-foot','squires','mounted-knights-of-the-realm'],
        special:['men-at-arms','peasant-bowmen','battle-pilgrims','questing-knights','pegasus-knights'],
        rare:['grail-knights','mounted-yeomen','field-trebuchet']
      },
      limit:{ 'duke':'0-1','baron':'0-1 / 1000 (ou Prophetess)','prophetess':'0-1 / 1000','paladin':'1+','knights-errant':'1+ / 1000','battle-pilgrims':'0-1 en Core','field-trebuchet':'0-1' },
      req:[ {any:['knights-errant'],min:1,label:'1+ unité de Knights Errant / 1000'} ],
      units:{}, spells:[], items:[], note:[] }
  ]}
};
const AUGUR_RENEGADE = {
  'chaos-dwarfs': {
    comp: 'Renegade Army List: Characters ≤50% (0-1 Sorcerer-Prophet/Infernal Castellan per 1000), Core ≥25%, Special ≤50%, Rare ≤25%, Mercenaries ≤20%, Allies ≤25% (WoC or Daemons).',
    units: {
      'great-taurus': {troopType:'Monstrous Creature', baseSize:'60 x 100 mm', note:['Troop Type → Monstrous Creature','Base size 50×75 → 60×100 mm']},
      'kdaai-fireborn': {stats:{W:'3'}, addRules:[{name:'Born of Fire'}], note:['Wounds → 3','+ Born of Fire: 3+ Ward save vs attacks with Flaming Attacks']}
    },
    rules: [{n:'Infernal Guard Commanders', c:'May replace Heavy Armour with Full Plate +3 pts. Infernal Castellan may ride a Bale/Great Taurus; Infernal Seneschal may ride a Great Taurus.'}],
    spells: [{n:'Storm of Ash', c:'9+'},{n:'Flames of Hashut', c:'8+'}]
  },
  'daemons-of-chaos': {
    comp: 'Renegade Army List: Characters ≤50% (0-1 Greater Daemon/Daemon Prince per 1000), Core ≥25%, Special ≤50%, Rare ≤25%. Daemonic Locus BSB +25 pts.',
    units: {
      'daemon-prince': {addRules:[{name:'Regeneration (5+)'}], note:['+ Regeneration (5+)']},
      'flesh-hounds-of-khorne': {addRules:[{name:'Swiftstride'}], note:['+ Swiftstride']},
      'palanquin-of-nurgle': {troopType:'Monstrous Infantry', baseSize:'50x50 min, 60x60 max', note:['Troop Type → Monstrous Infantry','Base size → 50×50 / 60×60 mm']},
      'nurglings': {addRules:[{name:'Scouts'}], note:['+ Scouts']},
      'blue-horrors-of-tzeentch': {addRules:[{name:'Skirmishers'}], note:['+ Skirmishers']},
      'seeker-chariot-of-slaanesh': {addRules:[{name:'AP -1 (Impact Hits Only)'}], note:['+ AP -1 (Impact Hits Only)']},
      'skull-cannon-of-khorne': {note:['Weapon: no 360° line of sight — may only fire into its front arc']},
      'bloodthirster': {addRules:[{name:'Close Order'}], note:['All Greater Daemons: + Close Order']},
      'great-unclean-one': {addRules:[{name:'Close Order'}], note:['All Greater Daemons: + Close Order']},
      'keeper-of-secrets': {addRules:[{name:'Close Order'}], note:['All Greater Daemons: + Close Order']},
      'lord-of-change': {addRules:[{name:'Close Order'}], note:['All Greater Daemons: + Close Order']}
    },
    rules: [
      {n:'Daemonic', c:'Removes “that were caused by a non-magical enemy attack” — the Daemonic ward save now also protects against magical attacks.'},
      {n:'Daemonic Instability', c:'If a unit is wholly destroyed by a failed Ld test or a natural double 6, engaged enemy units may attempt to restrain & reform, or overrun.'}
    ],
    spells: [{n:'Plague Wind', c:'Template scatters D6\" each Start of Turn; any unit passed over (not Daemons of Nurgle) suffers -1 Toughness for the turn.'},{n:'Gift of Mutation', c:'7+/10+'}]
  },
  'lizardmen': {
    comp: 'Renegade Army List: Characters ≤50% (0-1 Slann per 1500), Core ≥25%, Special ≤50%, Rare ≤25%, Allies ≤25% (High Elf Realms). Slann may be both BSB and General.',
    units: {
      'slann-mage-priest': {stats:{M:'4'}, troopType:'Monstrous Infantry', baseSize:'50x50 min, 60x60 max', addRules:[{name:'Wisdom of the Old Ones'},{name:'Palanquin'}], removeRules:['Large Target','Close Order'], note:['Movement → 4','Troop Type → Monstrous Infantry','Base → 50×50 / 60×60 mm','− Large Target, − Close Order','+ Wisdom of the Old Ones (reroll 1 casting die /turn, not a Miscast; knows +1 spell)','+ Palanquin (may join a Guardians unit despite Fly)']},
      'temple-guard': {stats:{I:'2'}, note:['Initiative → 2','Guardians reworked: if a friendly Slann within 3\" is hit in Shooting, on 2+ transfer the hit to this unit','May be joined by a character with Palanquin']},
      'ancient-stegadon': {note:['Arcane Configuration: friendly Wizards +1 to Casting rolls within 6\" of one or more Engine of the Gods (not cumulative)']},
      'salamander-hunting-pack': {note:['Fiery Breath → Column of Fire (Rulebook p.229), Cumbersome, Flaming Attacks. Misfire: no shots, remove D3 Skink Handlers (else -1 Wound).']}
    },
    rules: [{n:'Cold Blooded', c:'For a Leadership or Break test, roll an extra D6 and discard the highest result.'}],
    spells: [{n:'Apotheosis', c:'8+/10+ (8+: regain D3 Wounds; 10+: D3+1)'},{n:'Monsoon', c:'Template scatters D6\" each Start of Turn; enemy units passed over become “drenched” for the game.'}]
  },
  'ogre-kingdoms': {
    comp: 'Renegade Army List: Characters ≤50% (0-1 Tyrant/Slaughtermaster per 1000), Core ≥25%, Special ≤50%, Rare ≤25%, Allies ≤25% (Orc & Goblin Tribes).',
    units: {
      'leadbelchers': {note:['Leadbelcher Gun → two profiles: Solid Shot (Armour Bane 1, Cumbersome, Multiple Wounds 2) & Scatter Shot (Armour Bane 1, Cumbersome, Multiple Shots 3). Ignores Move&Shoot and Multiple Shots penalties.']},
      'ironblaster': {note:['Cannon of the Sky-Titans: no 360° line of sight — may only fire into its front arc']}
    },
    rules: [
      {n:'Ogre Kingdoms Special Rules', c:'+ Monstrous Ranks: all Ogre Monstrous Infantry (except Yhetees) gain Press of Battle and Massed Infantry.'},
      {n:'Ironfist', c:'Additional Hand Weapon; +1 armour value; in close combat if used, +1 more (max 3+); counts as a Mundane Shield for magic item selection.'},
      {n:'Running With the Pack (Hunters)', c:'A Hunter joining Sabretusks may keep Skirmish formation; cannot be targeted by enemy shooting and gets a Look Out Sir as the Sabretusks.'}
    ],
    spells: [{n:'Toothcracker', c:'6+/9+'},{n:'Trollguts', c:'7+/10+'}]
  },
  'skaven': {
    comp: 'Renegade Army List: Characters ≤50% (0-1 Warlord & 0-1 Grey Seer per 1000), Core ≥25%, Special ≤50%, Rare ≤25%, Allies ≤25% (WoC, Uneasy).',
    units: {
      'clanrats': {addRules:[{name:'Regiment'}], note:['Unit size → 20+','+ Regiment']},
      'stormvermin': {addRules:[{name:'Regiment'}], note:['+ Regiment']},
      'hell-pit-abomination': {stats:{T:'6'}, addRules:[{name:'Impact Hits (D3+1)'}], note:['Toughness → 6','+ Impact Hits D3+1']},
      'warp-lightning-cannon': {note:['Weapon: + Multiple Wounds D3+1, Magical Attacks; cannot strike an enemy character within 3\" of a friendly 5+ same-type unit unless it is the closest target']},
      'plague-furnace': {baseSize:'60x100 min, 75x100 max', note:['Base → 60×100 / 75×100 mm','May only use Dragged Along to join Plague Monks','If a mount: no Verminous Valour']},
      'screaming-bell': {baseSize:'60x100 min, 75x100 max', note:['Base → 60×100 / 75×100 mm','May only use Dragged Along to join Clanrats or Stormvermin','If a mount: no Verminous Valour']}
    },
    rules: [{n:'Weapon Teams', c:'+ Detachment; remove Deploying Weapon Teams & Weapon Team Leadership; may ignore the minimum models to form a Detachment.'}],
    spells: [{n:'Skitterleap', c:'7+'},{n:'Cloud of Corruption', c:'9+'},{n:'Warp Lightning', c:'9+'}]
  },
  'vampire-counts': {
    comp: 'Renegade: rules changes only (standard composition kept).',
    units: {
      'vampire-count': {stats:{Ld:'9'}, note:['Leadership → 9','Option: Full Plate armour +9 pts']},
      'black-coach': {baseSize:'50x100 min, 60x100 max', note:['Base → 50×100 / 60×100 mm']}
    },
    rules: [
      {n:'Wailing Dirge', c:'If engaged in combat, may only target a unit in base contact.'},
      {n:'Mortis Engine', c:'Accursed Reliquary & Blasphemous Tome are not cumulative with other Mortis Engines.'},
      {n:'Dark Acolyte', c:'If not already a Wizard, counts as a Level 1 Wizard for this rule.'},
      {n:'Dark Vitality', c:'A Vampire Count/Thrall Wizard with this rule may wear armour/shield without penalty (casts & dispels normally).'}
    ],
    spells: [{n:'Raise Dead', c:'9+ — Risen Zombie unit size 2-6'},{n:'Vanhal’s Danse Macabre', c:'7+/11+'},{n:'Hellish Vigour', c:'6+/10+'}]
  },
  'dark-elves': {
    comp: 'Renegade: rules changes only (standard composition kept).',
    units: {
      'manticore': {note:['Toughness +2']},
      'war-hydra': {note:['Serrated maws → AP -1']},
      'cauldron-of-blood': {baseSize:'Min 60x100, max 75x100 mm', note:['Base → 60×100 / 75×100 mm','Blessings of Khaine: Power Level 3']}
    },
    rules: [
      {n:'Murderous', c:'In the first round of combat, may re-roll To Wound rolls of a natural 1. Non-magical weapons only, not the mount; if a magic weapon is used, this rule ceases to apply.'},
      {n:'Character Mounts', c:'Dreadlord/Master may take a Dark Pegasus +35 pts.'}
    ],
    spells: [{n:'Cursing Word', c:'7+'},{n:'Black Horror', c:'Template is difficult terrain; scatters 2D6\" each Start of Turn; enemy units passed over make D6 Strength tests, losing 1 Wound per failure.'}]
  }
};
const AUGUR_RENEGADE_ARMIES = ['chaos-dwarfs','daemons-of-chaos','lizardmen','ogre-kingdoms','skaven','vampire-counts','dark-elves'];
