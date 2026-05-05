export default function HomeWidgetsScreen() {
  const ink = '#EFEAE0';
  const muted = 'rgba(239,234,224,0.55)';
  const widgetBg = 'rgba(28,25,20,0.78)';
  const widgetBorder = 'rgba(239,234,224,0.07)';

  return (
    <div style={{
      height: '100%',
      background: 'linear-gradient(180deg, #2A2620 0%, #14110D 100%)',
      paddingTop: 54,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
    }}>
      <div style={{ padding: '14px 24px 10px' }}>
        <div style={{ fontSize: 12, color: 'rgba(239,234,224,0.5)', letterSpacing: 0.4 }}>mercredi 6 mai</div>
        <div style={{
          fontFamily: "'Inter', sans-serif", fontSize: 30, lineHeight: 1.1,
          color: '#EFEAE0', letterSpacing: -0.6, marginTop: 2, fontWeight: 300,
        }}>20:14</div>
      </div>

      <div style={{ padding: '18px 16px 12px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {/* Large widget */}
        <div style={{
          background: widgetBg, borderRadius: 22, padding: 16, border: `1px solid ${widgetBorder}`,
          backdropFilter: 'blur(18px) saturate(160%)', WebkitBackdropFilter: 'blur(18px) saturate(160%)',
          display: 'flex', gap: 14, alignItems: 'center',
        }}>
          <div style={{ position: 'relative', width: 84, height: 84, flexShrink: 0 }}>
            <svg viewBox="0 0 84 84" width={84} height={84}>
              <circle cx="42" cy="42" r="38" fill="none" stroke="rgba(239,234,224,0.12)" strokeWidth="1.25" />
              <circle cx="42" cy="42" r="38" fill="none" stroke={ink} strokeWidth="1.25"
                strokeDasharray={`${2 * Math.PI * 38 * 0.42} ${2 * Math.PI * 38}`}
                strokeLinecap="round" transform="rotate(-90 42 42)" />
            </svg>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: 9, letterSpacing: 1.6, textTransform: 'uppercase', color: muted, fontWeight: 500 }}>Reste</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 22, color: ink, lineHeight: 1, marginTop: 2, fontVariantNumeric: 'tabular-nums', letterSpacing: -0.6, fontWeight: 300 }}>1:27</div>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 10, letterSpacing: 1.6, textTransform: 'uppercase', color: muted, fontWeight: 500 }}>Ce soir</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: ink, marginTop: 4, lineHeight: 1.25, letterSpacing: -0.2, fontWeight: 400 }}>Lecture jusqu'à 23:20.</div>
            <div style={{ fontSize: 12, color: muted, marginTop: 4 }}>Instagram en pause · 2h30</div>
          </div>
        </div>

        {/* Two small widgets */}
        <div style={{ display: 'flex', gap: 14 }}>
          <div style={{
            flex: 1, background: widgetBg, borderRadius: 22, padding: 14,
            border: `1px solid ${widgetBorder}`,
            backdropFilter: 'blur(18px) saturate(160%)',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 132,
          }}>
            <div style={{ fontSize: 9, letterSpacing: 1.6, textTransform: 'uppercase', color: muted, fontWeight: 500 }}>Semaine</div>
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 28, color: ink, lineHeight: 1, letterSpacing: -0.6, fontVariantNumeric: 'tabular-nums', fontWeight: 300 }}>
                4<span style={{ fontSize: 13, color: muted }}> / 7 h</span>
              </div>
              <div style={{ display: 'flex', gap: 3, marginTop: 10 }}>
                {[1, 1, 1, 1, 0.4, 0, 0].map((v, i) => (
                  <div key={i} style={{
                    flex: 1, height: 22, borderRadius: 3,
                    background: i < 4 ? ink : 'rgba(239,234,224,0.08)',
                    opacity: i === 4 ? 0.4 : 1,
                  }} />
                ))}
              </div>
              <div style={{ fontSize: 11, color: muted, marginTop: 8 }}>Tu tiens le rythme.</div>
            </div>
          </div>

          <div style={{
            flex: 1, background: widgetBg, borderRadius: 22, padding: 14,
            border: `1px solid ${widgetBorder}`,
            backdropFilter: 'blur(18px) saturate(160%)',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 132,
          }}>
            <div style={{ fontSize: 9, letterSpacing: 1.6, textTransform: 'uppercase', color: muted, fontWeight: 500 }}>À la place</div>
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: ink, lineHeight: 1.2, letterSpacing: -0.2, fontStyle: 'italic', fontWeight: 400 }}>lecture</div>
              <div style={{ fontSize: 11, color: muted, marginTop: 4 }}>20:50 — 23:20</div>
              <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 6, height: 6, borderRadius: 6, background: ink }} />
                <span style={{ fontSize: 11, color: ink }}>Démarre dans 36 min</span>
              </div>
            </div>
          </div>
        </div>

        {/* App icons */}
        <div style={{ marginTop: 8, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, padding: '0 8px' }}>
          {[
            ['Plan', '#1F1B16'],
            ['Lire', '#7A6B52'],
            ['Notes', '#A89D87'],
            ['Réveil', '#5C5447'],
          ].map(([name, tone], i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 60, height: 60, borderRadius: 14, background: tone, opacity: 0.92, position: 'relative' }}>
                {name === 'Plan' && (
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif", color: '#FBF7EF', fontSize: 24, fontStyle: 'italic', fontWeight: 400 }}>s</div>
                )}
              </div>
              <div style={{ fontSize: 11, color: '#EFEAE0', letterSpacing: 0.1 }}>{name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dock */}
      <div style={{ position: 'absolute', left: 16, right: 16, bottom: 38 }}>
        <div style={{
          background: 'rgba(28,25,20,0.55)',
          borderRadius: 28, padding: '10px 14px',
          backdropFilter: 'blur(22px) saturate(180%)',
          border: `1px solid ${widgetBorder}`,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14,
        }}>
          {['#7A6B52', '#A89D87', '#5C5447', '#C2B49A'].map((tone, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: 56, height: 56, borderRadius: 13, background: tone, opacity: 0.9 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
