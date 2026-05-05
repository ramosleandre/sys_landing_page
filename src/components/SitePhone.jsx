const DESIGN_W = 390;
const DESIGN_H = 844;

function DynamicIsland() {
  return (
    <div style={{
      position: 'absolute',
      top: 12,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 36,
      borderRadius: 20,
      background: '#000',
      zIndex: 10,
    }} />
  );
}

export default function SitePhone({ width = 260, children }) {
  const scale = width / DESIGN_W;
  const height = DESIGN_H * scale;

  return (
    <div style={{ width, height, position: 'relative' }}>
      <div style={{
        width: DESIGN_W,
        height: DESIGN_H,
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
      }}>
        <div style={{
          width: DESIGN_W,
          height: DESIGN_H,
          borderRadius: 54,
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(239,234,224,0.08)',
        }}>
          <DynamicIsland />
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
