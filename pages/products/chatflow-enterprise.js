import Head from 'next/head';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next/pages';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';

const accentColor = '#d4a528';
const accentGlow = 'rgba(212,165,40,0.4)';
const accentBg = 'rgba(212,165,40,0.1)';
const accentBorder = 'rgba(212,165,40,0.35)';

const channels = [
  { name: 'Website Chat', color: '#6366f1' },
  { name: 'Telegram', color: '#38bdf8' },
  { name: 'WhatsApp', color: '#34d399' },
  { name: 'Facebook Messenger', color: '#60a5fa' },
  { name: 'Shopee', color: '#f97316' },
  { name: 'Lazada', color: '#a855f7' },
  { name: 'TikTok Shop', color: '#ec4899' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: d, ease: [0.22, 1, 0.36, 1] } }),
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function ChatFlowEnterprisePage() {
  const { t } = useTranslation('common');

  const highlights = [
    { icon: '🏢', title: t('cfe_page.h1_title'), desc: t('cfe_page.h1_desc') },
    { icon: '🛒', title: t('cfe_page.h2_title'), desc: t('cfe_page.h2_desc') },
    { icon: '📈', title: t('cfe_page.h3_title'), desc: t('cfe_page.h3_desc') },
    { icon: '⚙️', title: t('cfe_page.h4_title'), desc: t('cfe_page.h4_desc') },
    { icon: '🔐', title: t('cfe_page.h5_title'), desc: t('cfe_page.h5_desc') },
    { icon: '📊', title: t('cfe_page.h6_title'), desc: t('cfe_page.h6_desc') },
    { icon: '🧠', title: t('cfe_page.h7_title'), desc: t('cfe_page.h7_desc') },
    { icon: '📋', title: t('cfe_page.h8_title'), desc: t('cfe_page.h8_desc') },
  ];

  const features = [
    { title: t('cfe_page.feat1_title'), color: '#6366f1', items: t('cfe_page.feat1_items').split('|') },
    { title: t('cfe_page.feat2_title'), color: '#f97316', items: t('cfe_page.feat2_items').split('|') },
    { title: t('cfe_page.feat3_title'), color: '#a78bfa', items: t('cfe_page.feat3_items').split('|') },
    { title: t('cfe_page.feat4_title'), color: '#d4a528', items: t('cfe_page.feat4_items').split('|') },
    { title: t('cfe_page.feat5_title'), color: '#34d399', items: t('cfe_page.feat5_items').split('|') },
    { title: t('cfe_page.feat6_title'), color: '#f87171', items: t('cfe_page.feat6_items').split('|') },
    { title: t('cfe_page.feat7_title'), color: '#06b6d4', items: t('cfe_page.feat7_items').split('|') },
    { title: t('cfe_page.feat8_title'), color: '#fbbf24', items: t('cfe_page.feat8_items').split('|') },
  ];

  const useCases = [
    t('cfe_page.uc1'),
    t('cfe_page.uc2'),
    t('cfe_page.uc3'),
    t('cfe_page.uc4'),
    t('cfe_page.uc5'),
  ];

  const idealItems = [
    t('cfe_page.ideal_i1'),
    t('cfe_page.ideal_i2'),
    t('cfe_page.ideal_i3'),
    t('cfe_page.ideal_i4'),
    t('cfe_page.ideal_i5'),
  ];

  return (
    <>
      <Head>
        <title>{t('cfe_page.meta_title')}</title>
        <meta name="description" content={t('cfe_page.meta_desc')} />
        <meta property="og:title" content={t('cfe_page.meta_title')} />
        <meta property="og:description" content={t('cfe_page.og_desc')} />
        <meta property="og:image" content="/images/Products_ChatFlowEnterprise.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('cfe_page.meta_title')} />
        <meta name="twitter:image" content="/images/Products_ChatFlowEnterprise.png" />
      </Head>

      {/* ── Hero ── */}
      <section style={{
        position: 'relative', background: '#000', overflow: 'hidden',
        paddingTop: '60px', minHeight: '100vh', display: 'flex', alignItems: 'center',
      }}>
        <div className="bg-grid-dots" style={{ position: 'absolute', inset: 0 }} />
        <div style={{
          position: 'absolute', top: '15%', right: '0%',
          width: '700px', height: '700px',
          background: 'radial-gradient(circle, rgba(212,165,40,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', left: '5%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '100px 24px 80px', width: '100%' }}>
          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a href="/products" style={{
              fontFamily: 'Inter, sans-serif', fontSize: '13px',
              color: 'rgba(255,255,255,0.35)', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              transition: 'color 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              {t('cfe_page.breadcrumb_all')}
            </a>
            <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '13px' }}>/</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>ChatFlow Enterprise</span>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}
            className="sb-chatflow-hero-grid">
            {/* Left */}
            <div>
              {/* Badges */}
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '4px 12px', borderRadius: '999px',
                  background: 'rgba(212,165,40,0.15)', border: '1px solid rgba(212,165,40,0.4)',
                  color: accentColor, fontSize: '11px', fontWeight: 600, fontFamily: 'Inter',
                }}>
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%', background: accentColor,
                    boxShadow: '0 0 8px rgba(212,165,40,0.8)',
                  }} />
                  {t('cfe_page.badge_dev')}
                </span>
                {channels.slice(0, 4).map((ch) => (
                  <span key={ch.name} style={{
                    padding: '4px 12px', borderRadius: '999px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.04)',
                    color: 'rgba(255,255,255,0.55)', fontSize: '11px',
                    fontFamily: 'Inter', fontWeight: 500,
                  }}>{ch.name}</span>
                ))}
                <span style={{
                  padding: '4px 12px', borderRadius: '999px',
                  border: '1px solid rgba(212,165,40,0.3)',
                  background: 'rgba(212,165,40,0.08)',
                  color: accentColor, fontSize: '11px',
                  fontFamily: 'Inter', fontWeight: 600,
                }}>{t('cfe_page.badge_ecom')}</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(36px, 5vw, 64px)',
                  fontWeight: 800, letterSpacing: '-0.04em',
                  lineHeight: 1.05, color: '#fff', margin: '0 0 8px 0',
                }}>
                ChatFlow
                <span style={{
                  display: 'block',
                  background: 'linear-gradient(135deg, #d4a528 0%, #f5d060 50%, #c9a227 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>Enterprise</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.18 }}
                style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px',
                  color: accentColor, fontWeight: 600, letterSpacing: '0.06em',
                  textTransform: 'uppercase', margin: '0 0 20px 0',
                }}>
                {t('cfe_page.tagline')}
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '16px',
                  color: 'rgba(255,255,255,0.55)', lineHeight: 1.8,
                  maxWidth: '540px', margin: '0 0 32px 0',
                }}>
                {t('cfe_page.hero_desc')}
              </motion.p>

              {/* Core promise */}
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '10px 20px', borderRadius: '12px',
                  background: 'rgba(212,165,40,0.08)', border: '1px solid rgba(212,165,40,0.25)',
                  marginBottom: '36px',
                }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '13px',
                  color: 'rgba(255,255,255,0.65)', lineHeight: 1.5,
                }}>
                  {t('cfe_page.core_promise')}
                </span>
              </motion.div>

              {/* CTAs */}
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.36 }}
                style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '13px 28px', borderRadius: '999px',
                  background: 'linear-gradient(135deg, #d4a528 0%, #c9a227 100%)',
                  color: '#000', fontSize: '14px', fontWeight: 700,
                  textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                  boxShadow: '0 0 28px ' + accentGlow,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(212,165,40,0.6)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 28px ' + accentGlow; }}>
                  {t('cfe_page.cta_primary')}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="/products/chatflow-pro" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '13px 24px', borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontWeight: 500,
                  textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(167,139,250,0.5)'; e.currentTarget.style.color = '#a78bfa'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}>
                  {t('cfe_page.cta_secondary')}
                </a>
              </motion.div>
            </div>

            {/* Right — Logo */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
              <div style={{
                  width: '100%', borderRadius: '24px',
                  border: '1px solid rgba(212,165,40,0.2)',
                  position: 'relative', overflow: 'hidden',
                  aspectRatio: '16/10',
                  boxShadow: '0 0 60px rgba(212,165,40,0.15)',
                }}>
                <img src="/images/Products_ChatFlowEnterprise.png" alt="ChatFlow Enterprise"
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%', objectFit: 'cover',
                  }} />
              </div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', width: '100%' }}>
                {[
                  { value: '7+', label: t('cfe_page.stat1_label') },
                  { value: '全功能', label: t('cfe_page.stat2_label') },
                  { value: '企业级', label: t('cfe_page.stat3_label') },
                ].map((s) => (
                  <div key={s.label} style={{
                    padding: '14px 10px', borderRadius: '12px', textAlign: 'center',
                    background: 'rgba(212,165,40,0.08)', border: '1px solid rgba(212,165,40,0.2)',
                  }}>
                    <div style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 800,
                      color: accentColor, letterSpacing: '-0.02em', marginBottom: '4px',
                    }}>{s.value}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section style={{ background: '#080808', padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginBottom: '52px' }}>
            <span style={{
              display: 'block', fontSize: '11px', fontWeight: 600, color: accentColor,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              fontFamily: 'Inter, sans-serif', marginBottom: '12px',
            }}>PRODUCT HIGHLIGHTS</span>
            <h2 style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', margin: '0 0 12px 0',
            }}>{t('cfe_page.highlights_title')}</h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px',
              color: 'rgba(255,255,255,0.45)', maxWidth: '480px', lineHeight: 1.75, margin: 0,
            }}>{t('cfe_page.highlights_subtitle')}</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}
            className="sb-cf-highlights-grid">
            {highlights.map((h, i) => (
              <motion.div key={i} variants={fadeUp} custom={i * 0.06}
                style={{
                  padding: '24px 20px', borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.025)',
                  transition: 'border-color 0.3s',
                }}
                whileHover={{ borderColor: 'rgba(212,165,40,0.35)' }}>
                <div style={{
                  width: '38px', height: '38px', borderRadius: '10px', marginBottom: '14px',
                  background: accentBg, border: '1px solid ' + accentBorder,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px',
                }}>{h.icon}</div>
                <h3 style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700,
                  color: '#fff', margin: '0 0 8px 0', letterSpacing: '-0.01em',
                }}>{h.title}</h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '12px',
                  color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0,
                }}>{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Feature Modules ── */}
      <section style={{
        background: 'linear-gradient(180deg, #080808 0%, #0a0a08 100%)',
        padding: '96px 0', borderTop: '1px solid rgba(212,165,40,0.1)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginBottom: '52px' }}>
            <span style={{
              display: 'block', fontSize: '11px', fontWeight: 600, color: accentColor,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              fontFamily: 'Inter, sans-serif', marginBottom: '12px',
            }}>FEATURE MODULES</span>
            <h2 style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', margin: 0,
            }}>{t('cfe_page.features_title')}</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}
            className="sb-cf-ent-features-grid">
            {features.map((f, i) => (
              <motion.div key={i} variants={fadeUp} custom={i * 0.06}
                style={{
                  padding: '22px', borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.025)',
                }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px',
                  paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}>
                  <div style={{
                    width: '7px', height: '7px', borderRadius: '50%', background: f.color,
                    boxShadow: '0 0 7px ' + f.color + '80', flexShrink: 0,
                  }} />
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700,
                    color: '#fff', margin: 0,
                  }}>{f.title}</h3>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {f.items.map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '7px', alignItems: 'flex-start' }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                        stroke={f.color} strokeWidth="2.5" style={{ marginTop: '2px', flexShrink: 0 }}>
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span style={{
                        fontFamily: 'Inter, sans-serif', fontSize: '12px',
                        color: 'rgba(255,255,255,0.5)', lineHeight: 1.55,
                      }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Use Cases + Target ── */}
      <section style={{ background: '#080808', padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}
            className="sb-cf-usecase-grid">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span style={{
                display: 'block', fontSize: '11px', fontWeight: 600, color: accentColor,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif', marginBottom: '12px',
              }}>{t('cfe_page.usecases_badge')}</span>
              <h2 style={{
                fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)',
                fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', margin: '0 0 28px 0',
              }}>{t('cfe_page.usecases_title')}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {useCases.map((uc, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '14px', alignItems: 'flex-start',
                    padding: '14px 18px', borderRadius: '12px',
                    background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)',
                  }}>
                    <span style={{
                      fontFamily: 'monospace', fontSize: '11px', fontWeight: 700,
                      color: accentColor, flexShrink: 0, marginTop: '1px',
                      background: accentBg, border: '1px solid ' + accentBorder,
                      padding: '2px 7px', borderRadius: '5px',
                    }}>{String(i + 1).padStart(2, '0')}</span>
                    <span style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '13px',
                      color: 'rgba(255,255,255,0.65)', lineHeight: 1.6,
                    }}>{uc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }}>
              <span style={{
                display: 'block', fontSize: '11px', fontWeight: 600, color: accentColor,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif', marginBottom: '12px',
              }}>{t('cfe_page.ideal_badge')}</span>
              <h2 style={{
                fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)',
                fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', margin: '0 0 28px 0',
              }}>{t('cfe_page.ideal_title')}</h2>
              <div style={{
                padding: '28px', borderRadius: '16px',
                background: accentBg, border: '1px solid ' + accentBorder,
                marginBottom: '20px',
              }}>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px',
                  color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: '0 0 16px 0',
                }}>
                  {t('cfe_page.ideal_desc')}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {idealItems.map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                        stroke={accentColor} strokeWidth="2.5" style={{ flexShrink: 0 }}>
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: 'linear-gradient(180deg, #080808 0%, #060600 100%)',
        padding: '100px 0', position: 'relative', overflow: 'hidden',
        borderTop: '1px solid rgba(212,165,40,0.15)',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '600px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(212,165,40,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', maxWidth: '580px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(28px, 3.5vw, 46px)',
              fontWeight: 700, color: '#fff', letterSpacing: '-0.03em',
              lineHeight: 1.15, margin: '0 0 16px 0',
            }}>{t('cfe_page.cta_title')}</h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px',
              color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, margin: '0 0 36px 0',
            }}>
              {t('cfe_page.cta_desc')}
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px', borderRadius: '999px',
                background: 'linear-gradient(135deg, #d4a528 0%, #c9a227 100%)',
                color: '#000', fontSize: '14px', fontWeight: 700,
                textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                boxShadow: '0 0 28px ' + accentGlow,
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(212,165,40,0.6)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 28px ' + accentGlow; }}>
                {t('cfe_page.cta_book')}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="/products/chatflow-pro" style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '13px 24px', borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontWeight: 500,
                textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(167,139,250,0.5)'; e.currentTarget.style.color = '#a78bfa'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}>
                {t('cfe_page.cta_pro')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .sb-chatflow-hero-grid { grid-template-columns: 1fr !important; }
          .sb-cf-usecase-grid { grid-template-columns: 1fr !important; }
          .sb-cf-ent-features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .sb-cf-highlights-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .sb-cf-ent-features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .sb-cf-highlights-grid { grid-template-columns: 1fr !important; }
          .sb-cf-ent-features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
