// Shared illustrative game state for the Augur UI kit.
// Values are illustrative of the Old World data model, not a rules engine.

window.AUGUR_DATA = {
  players: {
    me:  { name: 'Toi',     army: 'Royaume de Bretonnie', vp: 642 },
    foe: { name: 'Adverse', army: 'Peaux-Vertes',          vp: 488 },
  },

  // friendly roster
  myUnits: [
    { id:'u1', name:'Chevaliers du Royaume', points:285, profile:{cc:4,str:3,tou:4,att:1,save:'2+',cd:8},
      fu:{current:9,max:9}, status:'full', isGeneral:true, hasStandard:true },
    { id:'u2', name:'Hommes d\u2019armes', points:120, profile:{cc:3,str:3,tou:3,att:1,save:'5+',cd:7},
      fu:{current:24,max:30}, status:'full', isBSB:true },
    { id:'u3', name:'Archers paysans', points:85, profile:{cc:2,str:3,tou:3,att:1,save:'6+',cd:6},
      fu:{current:4,max:16}, status:'weak' },
    { id:'u4', name:'P\u00e9gase (Damoiselle)', points:165, profile:{cc:4,str:4,tou:4,att:2,save:'5+',cd:8},
      fu:{current:0,max:3}, status:'destroyed' },
  ],

  // enemy roster
  foeUnits: [
    { id:'e1', name:'Gros\u2019Bras Orques', points:210, profile:{cc:3,str:3,tou:4,att:1,save:'6+',cd:7},
      fu:{current:30,max:30}, status:'full', isUnbreakable:false },
    { id:'e2', name:'Gobelins de la nuit', points:140, profile:{cc:2,str:3,tou:3,att:1,save:'6+',cd:5},
      fu:{current:33,max:40}, status:'full', isUnbreakable:true },
    { id:'e3', name:'Chars \u00e0 sangliers', points:160, profile:{cc:3,str:5,tou:4,att:1,save:'4+',cd:7},
      fu:{current:2,max:6}, status:'weak' },
    { id:'e4', name:'Troll des cavernes', points:180, profile:{cc:3,str:5,tou:4,att:3,save:'6+',cd:4},
      fu:{current:0,max:3}, status:'fleeing' },
  ],

  // a precomputed Monte-Carlo result for the headline engagement
  // (Chevaliers du Royaume charging Gobelins de la nuit — the "bad exchange" case)
  result: {
    expectedVP: 38,
    range: [ -12, 96 ],
    badExchange: true,                 // high win-chance, low VP gain (Unbreakable horde)
    me:  { win:0.71, draw:0.08, give:0.10, fallback:0.07, flee:0.04 },
    foe: { win:0.04, draw:0.08, give:0.18, fallback:0.16, flee:0.54 },
  },

  // the "clean" engagement for comparison (Chevaliers vs Chars)
  resultClean: {
    expectedVP: 148,
    range: [ 92, 196 ],
    badExchange: false,
    me:  { win:0.62, draw:0.09, give:0.12, fallback:0.09, flee:0.08 },
    foe: { win:0.08, draw:0.09, give:0.14, fallback:0.16, flee:0.53 },
  },

  objectives: [
    { id:'o1', name:'Centre du champ', holder:'me' },
    { id:'o2', name:'Colline est',     holder:'foe' },
    { id:'o3', name:'Pont',            holder:'none' },
  ],
};
