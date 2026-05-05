import { useState, useEffect } from 'react';

function TimerRing({ progress, size = 228 }) {
  const stroke = 1.25;
  const r = size / 2 - stroke;
  const c = 2 * Math.PI * r;
  const dash = c * progress;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(239, 234, 224, 0.12)" strokeWidth={stroke} />
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke="#EFEAE0" strokeWidth={stroke}
        strokeDasharray={`${dash} ${c}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

export default function BlockScreen() {
  const fg = '#EFEAE0';
  const sub = 'rgba(239, 234, 224, 0.55)';
  const faint = 'rgba(239, 234, 224, 0.32)';
  const surface = '#0A0907';

  const [pressing, setPressing] = useState(false);
  const [held, setHeld] = useState(0);
  const HOLD_MS = 1600;

  useEffect(() => {
    if (!pressing) { setHeld(0); return; }
    const start = Date.now();
    const id = setInterval(() => {
      const p = Math.min(1, (Date.now() - start) / HOLD_MS);
      setHeld(p);
      if (p >= 1) {
        clearInterval(id);
        setPressing(false);
      }
    }, 16);
    return () => clearInterval(id);
  }, [pressing]);

  const progress = 0.41;

  return (
    <div style={{
      height: '100%', background: surface, color: fg,
      paddingTop: 54, display: 'flex', flexDirection: 'column',
      position: 'relative',
    }}>
      <div style={{ padding: '20px 24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: sub, fontWeight: 500 }}>Créneau en cours</div>
        <div style={{ fontSize: 11, color: faint, fontVariantNumeric: 'tabular-nums', letterSpacing: 0.4 }}>20:50 — 23:20</div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28, padding: '0 32px' }}>
        <div style={{ position: 'relative' }}>
          <TimerRing progress={progress} size={228} />
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ fontSize: 10, letterSpacing: 2.5, color: sub, textTransform: 'uppercase', fontWeight: 500 }}>Reste</div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 44, fontWeight: 300, letterSpacing: -1.2,
              lineHeight: 1, marginTop: 6,
              fontVariantNumeric: 'tabular-nums',
            }}>1:27</div>
            <div style={{ fontSize: 11, color: faint, marginTop: 4, fontVariantNumeric: 'tabular-nums', letterSpacing: 0.4 }}>jusqu'à 23:20</div>
          </div>
        </div>

        <div style={{ textAlign: 'center', maxWidth: 280 }}>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 22, lineHeight: 1.25, letterSpacing: -0.4, fontWeight: 400,
          }}>Tu as choisi de lire jusqu'à 23:20.</div>
          <div style={{ fontSize: 14, color: sub, marginTop: 10, lineHeight: 1.5 }}>
            Instagram peut attendre. Ton livre est sur la table de chevet.
          </div>
        </div>

        <div style={{
          padding: '8px 14px', border: '1px solid rgba(239,234,224,0.12)',
          borderRadius: 999, fontSize: 12, color: sub, letterSpacing: 0.2,
        }}>
          + 25 min cette semaine
        </div>
      </div>

      <div style={{ padding: '0 24px 36px' }}>
        <div
          onMouseDown={() => setPressing(true)}
          onMouseUp={() => setPressing(false)}
          onMouseLeave={() => setPressing(false)}
          onTouchStart={() => setPressing(true)}
          onTouchEnd={() => setPressing(false)}
          style={{
            position: 'relative',
            border: '1px solid rgba(239,234,224,0.12)',
            borderRadius: 14, padding: '14px 0',
            textAlign: 'center', cursor: 'pointer',
            overflow: 'hidden', userSelect: 'none',
            background: 'rgba(239,234,224,0.02)',
          }}
        >
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            width: `${held * 100}%`,
            background: 'rgba(239, 234, 224, 0.08)',
            transition: pressing ? 'none' : 'width 200ms ease-out',
          }} />
          <div style={{ position: 'relative', fontSize: 13, color: sub, letterSpacing: 0.2 }}>
            {held >= 1 ? 'Relâche pour confirmer' : 'Maintiens pour passer outre'}
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 12, fontSize: 11, color: faint, letterSpacing: 0.2 }}>
          Aucun jugement. Demain, on continue.
        </div>
      </div>
    </div>
  );
}
