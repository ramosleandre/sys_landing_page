import { useState, useEffect } from 'react';
import SitePhone from './components/SitePhone';
import OnboardingScreen from './components/screens/OnboardingScreen';
import PlanScreen from './components/screens/PlanScreen';
import NotifScreen from './components/screens/NotifScreen';
import BlockScreen from './components/screens/BlockScreen';
import HomeWidgetsScreen from './components/screens/HomeWidgetsScreen';
import OverviewScreen from './components/screens/OverviewScreen';

// ─── Design tokens ───────────────────────────────────────────
const BG = '#0F0D0A';
const BG_ALT = '#14110D';
const CARD = '#1B1814';
const INK = '#EDE4D5';
const SUB = '#8A8275';
const FAINT = '#5C5447';
const LINE = '#231F1A';
const INK_INV = '#0F0D0A';
const BG_INV = '#EDE4D5';

// ─── Navigation ──────────────────────────────────────────────
function SiteNav() {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 56px', borderBottom: `1px solid ${LINE}`,
      position: 'sticky', top: 0, background: 'rgba(15,13,10,0.85)',
      backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', zIndex: 10,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 28, height: 28, borderRadius: 7, background: INK, color: BG,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16, fontStyle: 'italic', fontWeight: 500,
        }}>s</div>
        <span style={{ fontSize: 17, letterSpacing: -0.2, fontWeight: 400 }}>
          Stop your scroll
        </span>
      </div>
      <div style={{ display: 'flex', gap: 28, fontSize: 13.5, color: SUB }}>
        <a href="#how" style={{ color: 'inherit', textDecoration: 'none' }}>Comment ça marche</a>
        <a href="#manifeste" style={{ color: 'inherit', textDecoration: 'none' }}>Manifeste</a>
        <a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Tarifs</a>
        <a href="#faq" style={{ color: 'inherit', textDecoration: 'none' }}>FAQ</a>
      </div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <span style={{ fontSize: 13, color: SUB, cursor: 'pointer' }}>Connexion</span>
        <button style={{
          background: INK, color: BG, border: 'none', borderRadius: 999,
          padding: '8px 16px', fontSize: 13, fontWeight: 500, cursor: 'pointer',
          fontFamily: 'inherit',
        }}>Télécharger</button>
      </div>
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────
function HeroPhoneCarousel() {
  const slides = [
    { key: 'onb', node: <OnboardingScreen />, label: '01 · Faisons connaissance' },
    { key: 'plan', node: <PlanScreen />, label: '02 · Ton plan personnalisé' },
    { key: 'notif', node: <NotifScreen />, label: '03 · Le coup de pouce' },
    { key: 'block', node: <BlockScreen />, label: '04 · Le moment de vérité' },
  ];
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI(x => (x + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
      <div style={{ position: 'relative', width: 260, height: 260 * 844 / 390 }}>
        {slides.map((s, idx) => (
          <div key={s.key} style={{
            position: 'absolute', inset: 0,
            opacity: idx === i ? 1 : 0,
            transform: idx === i ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 700ms ease, transform 700ms ease',
            pointerEvents: idx === i ? 'auto' : 'none',
          }}>
            <SitePhone width={260}>{s.node}</SitePhone>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        {slides.map((s, idx) => (
          <div key={idx} onClick={() => setI(idx)} style={{
            width: idx === i ? 18 : 6, height: 6, borderRadius: 6,
            background: idx === i ? INK : LINE,
            cursor: 'pointer', transition: 'all 300ms ease',
          }} />
        ))}
      </div>
      <div style={{ fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: FAINT, fontWeight: 500 }}>
        {slides[i].label}
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section style={{ padding: '72px 56px 96px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center' }}>
      <div>
        <div style={{ fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', color: SUB, fontWeight: 500 }}>
          Calm tech, sans gamification
        </div>
        <h1 style={{
          fontSize: 64, lineHeight: 1.02, letterSpacing: -2,
          margin: '20px 0 0', fontWeight: 400, maxWidth: 540,
        }}>
          Reprends tes soirées.<br />
          <span style={{ fontStyle: 'italic', color: SUB }}>Sans te juger.</span>
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.55, color: SUB, marginTop: 24, maxWidth: 460 }}>
          On choisit pour toi. Tes scrolls deviennent des heures de lecture, de marche, de thé. Par paliers — 14 h, 10 h, 7 h. Jusqu'à devenir inutile.
        </p>
        <div style={{ marginTop: 32, display: 'flex', gap: 12 }}>
          <button style={{
            background: INK, color: BG, border: 'none', borderRadius: 999,
            padding: '14px 22px', fontSize: 14.5, fontWeight: 500, cursor: 'pointer',
            letterSpacing: -0.1, fontFamily: 'inherit',
          }}>Télécharger pour iPhone</button>
          <button style={{
            background: 'transparent', color: INK, border: `1px solid ${LINE}`,
            borderRadius: 999, padding: '14px 22px', fontSize: 14.5, fontWeight: 500, cursor: 'pointer',
            letterSpacing: -0.1, fontFamily: 'inherit',
          }}>Voir la démo</button>
        </div>
        <div style={{ marginTop: 36, display: 'flex', gap: 32 }}>
          {[
            ['9 h', 'récupérées par semaine'],
            ['7 j', "d'essai gratuit"],
            ['0', 'streak, badge ou notif inutile'],
          ].map(([n, l], idx) => (
            <div key={idx}>
              <div style={{ fontSize: 24, letterSpacing: -0.4, fontWeight: 400 }}>{n}</div>
              <div style={{ fontSize: 12, color: FAINT, marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <HeroPhoneCarousel />
      </div>
    </section>
  );
}

// ─── How It Works ────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      n: '01',
      title: 'Tu réponds à quelques questions.',
      body: "Une conversation courte, pas un formulaire. Quelle app, combien d'heures, qu'est-ce que tu aimerais faire à la place.",
      phone: <OnboardingScreen />,
    },
    {
      n: '02',
      title: 'On te rend ton plan, déjà décidé.',
      body: "Tes créneaux sont posés sur la semaine. Plus rien à arbitrer. Tu peux ajuster si vraiment besoin.",
      phone: <PlanScreen />,
    },
    {
      n: '03',
      title: 'On te prévient, doucement.',
      body: "Dix minutes avant, un mot bienveillant. Pendant le créneau, l'app sociale ne s'ouvre pas. Skip volontairement difficile.",
      phone: <NotifScreen />,
    },
  ];

  return (
    <section id="how" style={{ padding: '64px 56px', borderTop: `1px solid ${LINE}`, background: BG_ALT }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 48 }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', color: SUB, fontWeight: 500 }}>Comment ça marche</div>
          <h2 style={{ fontSize: 40, lineHeight: 1.1, letterSpacing: -1, margin: '12px 0 0', fontWeight: 400 }}>
            Trois étapes. Puis l'app s'efface.
          </h2>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
        {steps.map((s, idx) => (
          <div key={idx} style={{
            background: CARD, border: `1px solid ${LINE}`, borderRadius: 24,
            padding: 28, display: 'flex', flexDirection: 'column', gap: 20,
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 28, letterSpacing: -0.6, color: FAINT, fontStyle: 'italic', fontWeight: 300 }}>{s.n}</span>
              <div style={{ width: 24, height: 1, background: LINE, alignSelf: 'center' }} />
            </div>
            <div>
              <h3 style={{ fontSize: 22, lineHeight: 1.2, letterSpacing: -0.4, margin: 0, fontWeight: 400 }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: SUB, marginTop: 10 }}>{s.body}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto', paddingTop: 12 }}>
              <SitePhone width={210}>{s.phone}</SitePhone>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Widget Showcase ─────────────────────────────────────────
function WidgetShowcase() {
  return (
    <section style={{ padding: '80px 56px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <SitePhone width={260}>
          <HomeWidgetsScreen />
        </SitePhone>
      </div>
      <div>
        <div style={{ fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', color: SUB, fontWeight: 500 }}>Sur ton écran d'accueil</div>
        <h2 style={{ fontSize: 40, lineHeight: 1.1, letterSpacing: -1, margin: '12px 0 0', fontWeight: 400, maxWidth: 440 }}>
          Un rappel discret. <span style={{ fontStyle: 'italic', color: SUB }}>Jamais une alarme.</span>
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: SUB, marginTop: 18, maxWidth: 440 }}>
          Trois tailles, quatre contenus. Tu choisis ce que tu veux voir : le prochain créneau, la progression de la semaine, l'anneau seul, ou ton plan du jour. Le widget se met à jour tout seul.
        </p>
        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            ['Prochain créneau', 'Activité, heure, compte à rebours.'],
            ['Progression de la semaine', "Heures libérées sur l'objectif."],
            ['Anneau seul', 'Discret. Aucun texte.'],
            ['Plan du jour', "Tous les créneaux d'aujourd'hui."],
          ].map(([t, d], idx) => (
            <div key={idx} style={{
              display: 'flex', alignItems: 'baseline', gap: 14, padding: '10px 0',
              borderTop: idx === 0 ? `1px solid ${LINE}` : 'none',
              borderBottom: `1px solid ${LINE}`,
            }}>
              <span style={{ fontSize: 11, color: FAINT, fontVariantNumeric: 'tabular-nums', minWidth: 18 }}>{String(idx + 1).padStart(2, '0')}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14.5, color: INK, letterSpacing: -0.1 }}>{t}</div>
                <div style={{ fontSize: 12.5, color: SUB, marginTop: 2 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Overview Block ──────────────────────────────────────────
function OverviewBlock() {
  return (
    <section style={{
      padding: '80px 56px', background: BG_INV, color: INK_INV,
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
    }}>
      <div>
        <div style={{ fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(15,13,10,0.55)', fontWeight: 500 }}>Vue d'ensemble</div>
        <h2 style={{ fontSize: 40, lineHeight: 1.1, letterSpacing: -1, margin: '12px 0 0', fontWeight: 400, maxWidth: 440, color: INK_INV }}>
          Tu vois la transformation,<br /><span style={{ fontStyle: 'italic', color: 'rgba(15,13,10,0.65)' }}>pas tes échecs.</span>
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(15,13,10,0.7)', marginTop: 18, maxWidth: 440 }}>
          Le temps libéré, les paliers franchis, les habitudes qui s'installent. Pas de streak qui te punit si tu craques. Tu tiens, ou tu ne tiens pas. Demain on continue.
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <SitePhone width={260}>
          <OverviewScreen />
        </SitePhone>
      </div>
    </section>
  );
}

// ─── Pricing ─────────────────────────────────────────────────
function Pricing() {
  return (
    <section id="pricing" style={{ padding: '80px 56px', background: BG, borderTop: `1px solid ${LINE}` }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', color: SUB, fontWeight: 500 }}>Tarifs</div>
        <h2 style={{ fontSize: 40, lineHeight: 1.1, letterSpacing: -1, margin: '12px 0 0', fontWeight: 400 }}>
          Simple. <span style={{ fontStyle: 'italic', color: SUB }}>Et qui s'arrête.</span>
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 980, margin: '0 auto' }}>
        {[
          { name: 'Essai', price: '0', sub: '7 jours', highlight: false, items: ['Tous les écrans', 'Un palier', 'Un widget'] },
          { name: 'Mensuel', price: '4,90', sub: '\u20ac / mois', highlight: true, items: ['Paliers illimités', 'Widgets illimités', "Vue d'ensemble", 'Annulable, évidemment'] },
          { name: 'Annuel', price: '39', sub: '\u20ac / an', highlight: false, items: ['Tout du mensuel', 'Deux mois offerts', 'Accès anticipé'] },
        ].map((p, idx) => (
          <div key={idx} style={{
            background: p.highlight ? INK : CARD,
            color: p.highlight ? BG : INK,
            border: p.highlight ? 'none' : `1px solid ${LINE}`,
            borderRadius: 22, padding: 28,
            display: 'flex', flexDirection: 'column', gap: 18,
          }}>
            <div style={{ fontSize: 12, letterSpacing: 1.6, textTransform: 'uppercase', color: p.highlight ? 'rgba(15,13,10,0.45)' : SUB, fontWeight: 500 }}>{p.name}</div>
            <div>
              <span style={{ fontSize: 48, letterSpacing: -1.4, lineHeight: 1, fontWeight: 300 }}>{p.price}</span>
              <span style={{ fontSize: 13, color: p.highlight ? 'rgba(15,13,10,0.45)' : SUB, marginLeft: 6 }}>{p.sub}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, color: p.highlight ? 'rgba(15,13,10,0.7)' : INK }}>
              {p.items.map((it, j) => (
                <div key={j} style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
                  <span style={{ width: 4, height: 4, borderRadius: 4, background: p.highlight ? BG : INK, display: 'inline-block', marginTop: 6 }} />
                  <span>{it}</span>
                </div>
              ))}
            </div>
            <button style={{
              marginTop: 'auto',
              background: p.highlight ? BG : INK,
              color: p.highlight ? INK : BG,
              border: 'none', borderRadius: 999, padding: '12px 0', fontSize: 13.5, fontWeight: 500,
              cursor: 'pointer', fontFamily: 'inherit',
            }}>{p.highlight ? 'Commencer' : 'Choisir'}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      padding: '40px 56px', background: BG, borderTop: `1px solid ${LINE}`,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontSize: 12, color: FAINT,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 18, height: 18, borderRadius: 4, background: INK }} />
        <span>Stop your scroll · 2026</span>
      </div>
      <div style={{ display: 'flex', gap: 24 }}>
        <span style={{ cursor: 'pointer' }}>Manifeste</span>
        <span style={{ cursor: 'pointer' }}>Confidentialité</span>
        <span style={{ cursor: 'pointer' }}>Conditions</span>
        <span style={{ cursor: 'pointer' }}>Contact</span>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{
      width: '100%', minHeight: '100vh', background: BG, color: INK,
      fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
    }}>
      <SiteNav />
      <HeroSection />
      <HowItWorks />
      <WidgetShowcase />
      <OverviewBlock />
      <Pricing />
      <Footer />
    </div>
  );
}
