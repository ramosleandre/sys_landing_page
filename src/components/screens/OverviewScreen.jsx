export default function OverviewScreen() {
  const fg = '#EDE4D5';
  const sub = '#8A8275';
  const faint = '#5C5447';
  const surface = '#0F0D0A';
  const card = '#1B1814';
  const line = '#231F1A';
  const ink = fg;

  const weekProgress = 4 / 7;
  const dayDots = [
    { d: 'L', state: 'done' },
    { d: 'M', state: 'done' },
    { d: 'M', state: 'done' },
    { d: 'J', state: 'done' },
    { d: 'V', state: 'today' },
    { d: 'S', state: 'planned' },
    { d: 'D', state: 'planned' },
  ];

  const dotColor = (s) =>
    s === 'done' ? ink :
    s === 'today' ? ink :
    '#2A2620';

  const habits = [
    { name: 'lecture le soir', sessions: 4, total: 5, pct: 0.8, last: 'hier · 2 h 14' },
    { name: 'marche après le déjeuner', sessions: 3, total: 5, pct: 0.6, last: 'aujourd\'hui · 22 min' },
    { name: 'thé sans téléphone', sessions: 2, total: 7, pct: 0.28, last: 'lundi' },
  ];

  return (
    <div style={{ height: '100%', background: surface, color: fg, paddingTop: 54, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
      <div style={{ padding: '18px 24px 24px' }}>
        <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: sub, fontWeight: 500 }}>Vue d'ensemble · semaine 19</div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 30, lineHeight: 1.1, letterSpacing: -0.6, marginTop: 10, fontWeight: 400 }}>
          Tu as récupéré<br />
          <span style={{ fontStyle: 'italic' }}>9 h 12</span> sur les écrans.
        </div>
        <div style={{ marginTop: 12, fontSize: 13.5, color: sub, lineHeight: 1.5 }}>
          Sur un objectif de 7 h libérées par semaine. Continue, sans te presser.
        </div>
      </div>

      {/* Objective card */}
      <div style={{ padding: '0 16px 16px' }}>
        <div style={{ background: card, border: `1px solid ${line}`, borderRadius: 18, padding: 18 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: sub, fontWeight: 500 }}>Objectif hebdomadaire</div>
            <div style={{ fontSize: 11, color: faint, fontVariantNumeric: 'tabular-nums' }}>4 / 7 h</div>
          </div>
          <div style={{ marginTop: 12, height: 6, borderRadius: 3, background: 'rgba(239,234,224,0.06)', overflow: 'hidden' }}>
            <div style={{ width: `${weekProgress * 100}%`, height: '100%', background: ink, borderRadius: 3 }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 14 }}>
            {dayDots.map((dd, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{
                  width: 8, height: 8, borderRadius: 999,
                  background: dotColor(dd.state),
                  border: dd.state === 'today' ? `2px solid ${ink}` : 'none',
                  outline: dd.state === 'today' ? '2px solid #0F0D0A' : 'none',
                  outlineOffset: dd.state === 'today' ? -1 : 0,
                  boxShadow: dd.state === 'today' ? '0 0 0 3px rgba(239,234,224,0.15)' : 'none',
                }} />
                <span style={{ fontSize: 10, color: dd.state === 'today' ? fg : faint, letterSpacing: 0.4, fontWeight: dd.state === 'today' ? 600 : 400 }}>{dd.d}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14, fontSize: 13, color: sub, lineHeight: 1.5 }}>
            Encore <span style={{ color: fg }}>3 h</span> à libérer d'ici dimanche. Trois créneaux suffisent.
          </div>
        </div>
      </div>

      {/* Time + Palier */}
      <div style={{ padding: '0 16px 16px', display: 'flex', gap: 10 }}>
        <div style={{ flex: 1, background: card, border: `1px solid ${line}`, borderRadius: 18, padding: 16 }}>
          <div style={{ fontSize: 10, letterSpacing: 1.6, textTransform: 'uppercase', color: sub, fontWeight: 500 }}>Temps libéré</div>
          <div style={{ marginTop: 10, fontFamily: "'Inter', sans-serif", fontSize: 30, lineHeight: 1, letterSpacing: -0.7, fontVariantNumeric: 'tabular-nums', fontWeight: 300 }}>
            32 h
          </div>
          <div style={{ fontSize: 11.5, color: sub, marginTop: 4 }}>depuis le 14 avril</div>
          <svg viewBox="0 0 100 28" width="100%" height="28" style={{ marginTop: 12 }} preserveAspectRatio="none">
            <polyline
              points="0,22 14,18 28,20 42,12 56,14 70,8 84,10 100,4"
              fill="none" stroke={ink} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
        </div>
        <div style={{ flex: 1, background: card, border: `1px solid ${line}`, borderRadius: 18, padding: 16 }}>
          <div style={{ fontSize: 10, letterSpacing: 1.6, textTransform: 'uppercase', color: sub, fontWeight: 500 }}>Palier</div>
          <div style={{ marginTop: 10, fontFamily: "'Inter', sans-serif", fontSize: 18, lineHeight: 1.15, letterSpacing: -0.2, fontStyle: 'italic', fontWeight: 400 }}>
            10 h → 7 h
          </div>
          <div style={{ fontSize: 11.5, color: sub, marginTop: 4 }}>en cours · semaine 3 sur 4</div>
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 5 }}>
            {[
              ['14 h', 'done'],
              ['10 h', 'done'],
              ['7 h', 'current'],
              ['5 h', 'next'],
            ].map(([h, s], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{
                  width: 6, height: 6, borderRadius: 999,
                  background: s === 'next' ? '#2A2620' : ink,
                }} />
                <span style={{ fontSize: 11, color: s === 'next' ? faint : fg, fontVariantNumeric: 'tabular-nums', textDecoration: s === 'done' ? 'line-through' : 'none', textDecorationColor: faint }}>{h}</span>
                {s === 'current' && <span style={{ fontSize: 10, color: sub, marginLeft: 'auto', letterSpacing: 0.3 }}>maintenant</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Habits */}
      <div style={{ padding: '8px 16px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '0 4px 12px' }}>
          <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: sub, fontWeight: 500 }}>Bonnes habitudes</div>
          <div style={{ fontSize: 12, color: faint, letterSpacing: 0.1 }}>Voir tout</div>
        </div>
        <div style={{ background: card, border: `1px solid ${line}`, borderRadius: 18, overflow: 'hidden' }}>
          {habits.map((h, i) => (
            <div key={i} style={{ padding: '14px 16px', borderTop: i === 0 ? 'none' : `0.5px solid ${line}`, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, letterSpacing: -0.2, fontStyle: 'italic', fontWeight: 400 }}>{h.name}</div>
                <div style={{ fontSize: 11, color: faint, fontVariantNumeric: 'tabular-nums' }}>{h.sessions} / {h.total}</div>
              </div>
              <div style={{ height: 3, borderRadius: 2, background: 'rgba(239,234,224,0.06)', overflow: 'hidden' }}>
                <div style={{ width: `${h.pct * 100}%`, height: '100%', background: ink }} />
              </div>
              <div style={{ fontSize: 11.5, color: sub }}>{h.last}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Reminders */}
      <div style={{ padding: '8px 16px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '0 4px 12px' }}>
          <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: sub, fontWeight: 500 }}>Prochains rappels</div>
        </div>
        <div style={{ background: card, border: `1px solid ${line}`, borderRadius: 18, overflow: 'hidden' }}>
          {[
            ['Ce soir · 20:40', 'Sors ton livre, prépare ton thé.'],
            ['Demain · 12:30', 'Déjeuner sans téléphone.'],
            ['Vendredi · 22:00', 'Film, pas de scroll.'],
          ].map(([when, what], i) => (
            <div key={i} style={{ padding: '14px 16px', borderTop: i === 0 ? 'none' : `0.5px solid ${line}`, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{ width: 4, alignSelf: 'stretch', borderRadius: 2, background: i === 0 ? ink : '#2A2620', marginTop: 4, marginBottom: 4 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase', color: sub, fontWeight: 500, fontVariantNumeric: 'tabular-nums' }}>{when}</div>
                <div style={{ fontSize: 14.5, color: fg, marginTop: 4, lineHeight: 1.4 }}>{what}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
