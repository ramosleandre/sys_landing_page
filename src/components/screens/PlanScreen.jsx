const DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const PLAN = [
  [0, 20.83, 23.33, 'lecture'],
  [1, 20.83, 23.33, 'lecture'],
  [2, 21.5, 23.33, 'lecture'],
  [3, 20.83, 23.33, 'lecture'],
  [4, 22.0, 23.5, 'film'],
  [5, 23.0, 24.0, 'lecture'],
  [6, 20.5, 23.33, 'lecture'],
];

export default function PlanScreen() {
  const fg = '#EDE4D5';
  const sub = '#8A8275';
  const faint = '#5C5447';
  const surface = '#0F0D0A';
  const card = '#1B1814';
  const line = '#231F1A';
  const block = '#2D2A24';
  const blockFg = '#F6F1E7';

  const HOURS = [18, 20, 22, 24];
  const trackTop = 18, trackBot = 24;
  const pct = (h) => ((h - trackTop) / (trackBot - trackTop)) * 100;

  return (
    <div style={{ height: '100%', background: surface, color: fg, paddingTop: 54, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '14px 24px 18px' }}>
        <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: sub, fontWeight: 500 }}>Ton plan</div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 26, lineHeight: 1.1, marginTop: 8, letterSpacing: -0.5, fontWeight: 400 }}>
          Cette semaine,<br />17 h libérées.
        </div>
        <div style={{ marginTop: 14, display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontSize: 13, color: sub }}>Objectif</span>
          <span style={{ fontSize: 13, color: fg }}>7 h / sem</span>
          <span style={{ fontSize: 13, color: faint }}>·</span>
          <span style={{ fontSize: 13, color: faint }}>au lieu de 14 h</span>
        </div>
      </div>

      <div style={{ flex: 1, padding: '12px 16px 0', display: 'flex', flexDirection: 'column' }}>
        <div style={{
          background: card, border: `1px solid ${line}`,
          borderRadius: 18, padding: '20px 14px 16px',
          flex: 1, display: 'flex', flexDirection: 'column',
        }}>
          <div style={{ display: 'flex', flex: 1, position: 'relative' }}>
            <div style={{ width: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 26 }}>
              {HOURS.map(h => (
                <div key={h} style={{ fontSize: 10, color: faint, letterSpacing: 0.5, fontVariantNumeric: 'tabular-nums' }}>{h}h</div>
              ))}
            </div>
            <div style={{ flex: 1, position: 'relative' }}>
              {HOURS.map(h => (
                <div key={h} style={{
                  position: 'absolute', left: 0, right: 0,
                  top: `${pct(h)}%`, height: 1, background: line,
                }} />
              ))}
              <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, paddingBottom: 26 }}>
                {DAYS.map((_, di) => (
                  <div key={di} style={{ position: 'relative' }}>
                    {PLAN.filter(p => p[0] === di).map(([, s, e, label], i) => (
                      <div key={i} style={{
                        position: 'absolute', left: 0, right: 0,
                        top: `${pct(s)}%`, height: `${pct(e) - pct(s)}%`,
                        background: block, color: blockFg,
                        borderRadius: 6, padding: '6px 4px',
                        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                        fontSize: 9, lineHeight: 1.1, letterSpacing: 0.2, overflow: 'hidden',
                      }}>
                        <span style={{ fontVariantNumeric: 'tabular-nums', opacity: 0.7 }}>
                          {Math.floor(s)}:{String(Math.round((s % 1) * 60)).padStart(2, '0')}
                        </span>
                        <span style={{ fontStyle: 'italic', opacity: 0.95 }}>{label}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
                {DAYS.map((d, i) => (
                  <div key={i} style={{ fontSize: 10, color: i === 2 ? fg : sub, textAlign: 'center', fontWeight: i === 2 ? 600 : 400, letterSpacing: 0.4 }}>{d}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '16px 4px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: sub, fontWeight: 500 }}>Prochain créneau</div>
            <div style={{ marginTop: 6, fontSize: 15, color: fg }}>
              Ce soir · <span style={{ fontVariantNumeric: 'tabular-nums' }}>20:50 — 23:20</span>
            </div>
            <div style={{ marginTop: 2, fontSize: 13, color: sub, fontStyle: 'italic' }}>lecture</div>
          </div>
          <button style={{
            border: 'none', background: '#EDE4D5', color: '#0F0D0A',
            padding: '12px 18px', borderRadius: 999, fontSize: 13.5, fontWeight: 500,
            letterSpacing: -0.1, cursor: 'pointer',
          }}>Ajuster</button>
        </div>
      </div>

      <div style={{ padding: '0 24px 24px', display: 'flex', justifyContent: 'space-between', borderTop: '0.5px solid #231F1A', paddingTop: 12 }}>
        {['Plan', 'Aujourd\'hui', 'Réglages'].map((t, i) => (
          <div key={t} style={{ fontSize: 12, color: i === 0 ? fg : faint, fontWeight: i === 0 ? 600 : 400, letterSpacing: 0.3 }}>{t}</div>
        ))}
      </div>
    </div>
  );
}
