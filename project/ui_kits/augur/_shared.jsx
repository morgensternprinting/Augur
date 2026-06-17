// Shared bits for Augur screens (header, scroll body, section label).

function ScreenHeader({ title, eyebrow, right = null }) {
  return (
    <div style={{
      flex: 'none', padding: '8px var(--screen-pad) 12px',
      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12,
    }}>
      <div>
        {eyebrow && <div style={{
          font: '600 var(--fs-label)/1 var(--font-ui)', letterSpacing: 'var(--ls-label)',
          textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 4,
        }}>{eyebrow}</div>}
        <h1 style={{
          margin: 0, font: '600 var(--fs-display)/var(--lh-snug) var(--font-display)',
          color: 'var(--text-primary)', letterSpacing: 'var(--ls-tight)',
        }}>{title}</h1>
      </div>
      {right}
    </div>
  );
}

function Body({ children, style = {} }) {
  return (
    <div style={{
      flex: 1, minHeight: 0, overflowY: 'auto',
      padding: '0 var(--screen-pad) var(--screen-pad)',
      display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)', ...style,
    }}>{children}</div>
  );
}

function SectionLabel({ children, style = {} }) {
  return <div style={{
    font: '600 var(--fs-label)/1 var(--font-ui)', letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase', color: 'var(--text-tertiary)',
    margin: '6px 0 2px', ...style,
  }}>{children}</div>;
}

Object.assign(window, { ScreenHeader, Body, SectionLabel });
