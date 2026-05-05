export default function NotifScreen() {
  const fg = '#EFEAE0';
  const sub = 'rgba(239, 234, 224, 0.55)';
  const faint = 'rgba(239, 234, 224, 0.32)';

  return (
    <div style={{
      height: '100%',
      background: 'radial-gradient(120% 80% at 50% 0%, #1A1814 0%, #0A0907 70%)',
      color: fg,
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 70,
    }}>
      <div style={{ textAlign: 'center', padding: '24px 0 28px' }}>
        <div style={{ fontSize: 13, color: sub, letterSpacing: 0.4, fontWeight: 400 }}>mercredi 6 mai</div>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 78, lineHeight: 1, fontWeight: 300,
          letterSpacing: -2, marginTop: 4,
          fontVariantNumeric: 'tabular-nums',
        }}>20:40</div>
      </div>

      <div style={{ padding: '0 14px' }}>
        <div style={{
          background: 'rgba(28, 25, 20, 0.72)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(239, 234, 224, 0.08)',
          borderRadius: 22, padding: '16px 18px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{
              width: 24, height: 24, borderRadius: 6,
              background: '#EFEAE0', color: '#14110D',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, fontStyle: 'italic',
            }}>s</div>
            <span style={{ fontSize: 12, color: sub, letterSpacing: 0.5, textTransform: 'uppercase', fontWeight: 500 }}>Stop your scroll</span>
            <span style={{ marginLeft: 'auto', fontSize: 11, color: faint }}>maintenant</span>
          </div>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 19, lineHeight: 1.25, letterSpacing: -0.2,
            marginBottom: 4, fontWeight: 500,
          }}>Dans 10 minutes, on coupe.</div>
          <div style={{ fontSize: 14.5, lineHeight: 1.45, color: 'rgba(239, 234, 224, 0.78)', marginBottom: 14 }}>
            Sors ton livre, prépare ton thé. Le canapé t'attend jusqu'à 23:20.
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{
              flex: 1, padding: '11px 0', borderRadius: 12,
              background: 'rgba(239, 234, 224, 0.08)',
              border: '1px solid rgba(239, 234, 224, 0.1)',
              color: fg, fontSize: 13.5, fontWeight: 500, letterSpacing: -0.1,
              cursor: 'pointer', fontFamily: 'inherit',
            }}>Compris</button>
            <button style={{
              flex: 1.2, padding: '11px 0', borderRadius: 12,
              background: '#EFEAE0', color: '#14110D',
              border: 'none', fontSize: 13.5, fontWeight: 500, letterSpacing: -0.1,
              cursor: 'pointer', fontFamily: 'inherit',
            }}>Préparer maintenant</button>
          </div>
        </div>

        <div style={{
          marginTop: 8,
          background: 'rgba(28, 25, 20, 0.44)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(239, 234, 224, 0.05)',
          borderRadius: 18, padding: '10px 16px',
          fontSize: 12, color: faint,
          display: 'flex', justifyContent: 'space-between',
        }}>
          <span>Tu as choisi ce créneau lundi.</span>
          <span>Plan</span>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 60, left: 0, right: 0,
        textAlign: 'center', fontSize: 12, color: faint, letterSpacing: 0.3,
      }}>
        Glisse pour ouvrir
      </div>
    </div>
  );
}
