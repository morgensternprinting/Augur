Compact mono key/value block for one profile stat. Lay several in a flex row to show a full profile.

```jsx
<div style={{display:'flex',gap:6}}>
  <StatPill label="CC" value={4} />
  <StatPill label="F" value={3} />
  <StatPill label="E" value={4} />
  <StatPill label="A" value={2} emphasis />
  <StatPill label="Svg" value="5+" />
  <StatPill label="Cd" value={7} />
</div>
```
