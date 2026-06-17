Keyboard-free numeric stepper — the default way to enter numbers at the table (attacks, ranks, modifiers).

```jsx
<Stepper label="Attaques" value={attacks} onChange={setAttacks} min={1} max={40} />
<Stepper label="Rangs" value={ranks} onChange={setRanks} signed />
```

Big −/+ targets (52/60px). `signed` shows `+N` for resolution modifiers. Mono tabular value. Disables at min/max.
