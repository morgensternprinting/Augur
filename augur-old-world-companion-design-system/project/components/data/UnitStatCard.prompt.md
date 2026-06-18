Roster unit as a profile card: name, points, role badges, stat line, and a Force d'Unité bar with the 25% threshold tick.

```jsx
<UnitStatCard side="friendly" selected unit={{
  name: 'Gardes du Roi', points: 285,
  profile: { cc:4, str:3, tou:4, att:1, save:'4+', cd:8 },
  fu: { current: 18, max: 25 }, status: 'full',
  isGeneral: true, hasStandard: true,
}} />
```

`side="enemy"` switches the accent rail to flee-red. `compact` drops stat pills for list rows.
