import { useState, useEffect, useRef } from 'react';

const ONBOARDING_FLOW = [
  { from: 'sys', text: "Bonsoir. Je suis là pour t'aider à reprendre tes soirées." },
  { from: 'sys', text: "Quelle app prend le plus de ton temps en ce moment ?" },
  { from: 'me', text: "Instagram, surtout le soir." },
  { from: 'sys', text: "Ok. Combien d'heures, à peu près, par jour ?" },
  { from: 'me', text: "Deux, parfois plus." },
  { from: 'sys', text: "Et qu'est-ce que tu aimerais faire à la place ?" },
];

function ChatBubble({ from, text }) {
  const mine = from === 'me';
  const bg = mine ? '#2A2722' : '#1B1814';
  const fg = mine ? '#F6F1E7' : '#E8DFD2';

  return (
    <div style={{
      alignSelf: mine ? 'flex-end' : 'flex-start',
      maxWidth: '78%',
      background: bg,
      color: fg,
      padding: '12px 16px',
      borderRadius: mine ? '20px 20px 6px 20px' : '20px 20px 20px 6px',
      fontSize: 15.5,
      lineHeight: 1.45,
      letterSpacing: -0.1,
      border: mine ? 'none' : '1px solid #2A2520',
    }}>
      {text}
    </div>
  );
}

export default function OnboardingScreen() {
  const [step, setStep] = useState(3);
  const scrollRef = useRef(null);
  const messages = ONBOARDING_FLOW.slice(0, step);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [step]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(s => {
        if (s >= ONBOARDING_FLOW.length) return 3;
        return s + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: '#0F0D0A',
      color: '#EDE4D5',
      paddingTop: 54,
    }}>
      <div style={{ padding: '18px 24px 14px', borderBottom: '0.5px solid #231F1A' }}>
        <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: '#8A8275', fontWeight: 500 }}>
          Étape 1 sur 4
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 24, lineHeight: 1.15, marginTop: 6, letterSpacing: -0.4, fontWeight: 400 }}>
          Faisons connaissance.
        </div>
      </div>

      <div ref={scrollRef} style={{
        flex: 1, overflowY: 'auto', padding: '20px 20px 12px',
        display: 'flex', flexDirection: 'column', gap: 10,
      }}>
        {messages.map((m, i) => (
          <ChatBubble key={i} from={m.from} text={m.text} />
        ))}
        {step < ONBOARDING_FLOW.length && messages[messages.length - 1]?.from === 'me' && (
          <div style={{
            alignSelf: 'flex-start', display: 'flex', gap: 4,
            padding: '14px 16px', background: '#1B1814',
            borderRadius: 20, border: '1px solid #2A2520',
          }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                width: 6, height: 6, borderRadius: 6,
                background: '#5C5447',
                animation: `sysPulse 1.2s ${i * 0.15}s infinite ease-in-out`,
              }} />
            ))}
          </div>
        )}
      </div>

      <div style={{ padding: '12px 16px 28px', borderTop: '0.5px solid #231F1A', background: '#0F0D0A' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          background: '#1B1814', border: '1px solid #231F1A',
          borderRadius: 999, padding: '10px 14px',
        }}>
          <span style={{ flex: 1, fontSize: 15, color: '#5C5447' }}>
            Écris une réponse…
          </span>
          <div style={{
            width: 32, height: 32, borderRadius: 999,
            background: '#2A2520', color: '#5C5447',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`@keyframes sysPulse { 0%,80%,100% { opacity: .25; transform: translateY(0); } 40% { opacity: 1; transform: translateY(-2px); } }`}</style>
    </div>
  );
}
