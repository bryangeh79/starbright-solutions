import Head from 'next/head';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next/pages';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function SolutionsPage() {
  const { t } = useTranslation('common');

  const solutions = [
    {
      tag: 'Web Dev',
      tagColor: '#6366f1',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: t('solutions_page.s1_title'),
      intro: t('solutions_page.s1_intro'),
      audience: t('solutions_page.s1_audience'),
      detail: t('solutions_page.s1_detail'),
    },
    {
      tag: 'AI',
      tagColor: '#8b5cf6',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12c0-2.76 1.12-5.26 2.93-7.07" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
        </svg>
      ),
      title: t('solutions_page.s2_title'),
      intro: t('solutions_page.s2_intro'),
      audience: t('solutions_page.s2_audience'),
      detail: t('solutions_page.s2_detail'),
    },
    {
      tag: 'Automation',
      tagColor: '#06b6d4',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: t('solutions_page.s3_title'),
      intro: t('solutions_page.s3_intro'),
      audience: t('solutions_page.s3_audience'),
      detail: t('solutions_page.s3_detail'),
    },
    {
      tag: 'Workflow',
      tagColor: '#10b981',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="3" width="6" height="6" rx="1" />
          <rect x="9" y="15" width="6" height="6" rx="1" />
          <path d="M6 9v3a3 3 0 0 0 3 3M18 9v3a3 3 0 0 1-3 3" />
        </svg>
      ),
      title: t('solutions_page.s4_title'),
      intro: t('solutions_page.s4_intro'),
      audience: t('solutions_page.s4_audience'),
      detail: t('solutions_page.s4_detail'),
    },
    {
      tag: 'Analytics',
      tagColor: '#f59e0b',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      ),
      title: t('solutions_page.s5_title'),
      intro: t('solutions_page.s5_intro'),
      audience: t('solutions_page.s5_audience'),
      detail: t('solutions_page.s5_detail'),
    },
  ];

  const process = [
    { step: '01', title: t('solutions_page.p1_title'), desc: t('solutions_page.p1_desc') },
    { step: '02', title: t('solutions_page.p2_title'), desc: t('solutions_page.p2_desc') },
    { step: '03', title: t('solutions_page.p3_title'), desc: t('solutions_page.p3_desc') },
    { step: '04', title: t('solutions_page.p4_title'), desc: t('solutions_page.p4_desc') },
  ];

  return (
    <>
      <Head>
        <title>解决方案 | STARBRIGHT SOLUTIONS</title>
        <meta name="description" content="STARBRIGHT SOLUTIONS 解决方案总览：企业官网建设、AI 客服、自动化与数字化服务。" />
      </Head>

      {/* ── Hero ── */}
      <section style={{
        position: 'relative', background: '#000', overflow: 'hidden',
        paddingTop: '60px', minHeight: '52vh',
        display: 'flex', alignItems: 'center',
      }}>
        <div className="bg-grid-dots" style={{ position: 'absolute', inset: 0 }} />
        <div style={{
          position: 'absolute', top: '0', left: '20%', width: '600px', height: '500px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '80px 24px 72px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ marginBottom: '20px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '5px 14px', borderRadius: '999px',
              border: '1px solid rgba(99,102,241,0.4)', background: 'rgba(99,102,241,0.1)',
              color: '#a5b4fc', fontSize: '12px', fontWeight: 500,
              fontFamily: 'Inter, sans-serif', letterSpacing: '0.03em',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#818cf8' }} />
              Solutions Overview
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(36px, 4.5vw, 60px)',
              fontWeight: 700, lineHeight: 1.1,
              letterSpacing: '-0.03em', color: '#fff',
              margin: '0 0 20px 0', maxWidth: '700px',
            }}>
            {t('solutions_page.hero_title1')}<br />
            <span style={{
              background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 50%, #818cf8 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>{t('solutions_page.hero_title2')}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: '16px',
              lineHeight: 1.75, color: 'rgba(255,255,255,0.5)',
              maxWidth: '520px', margin: '0 0 36px 0',
            }}>
            {t('solutions_page.hero_desc')}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 26px', borderRadius: '999px',
              background: '#6366f1', color: '#fff',
              fontSize: '14px', fontWeight: 600,
              textDecoration: 'none', fontFamily: 'Inter, sans-serif',
              boxShadow: '0 0 20px rgba(99,102,241,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(99,102,241,0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(99,102,241,0.35)'; }}>
              {t('solutions_page.hero_cta1')}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#solutions-overview" style={{
              display: 'inline-flex', alignItems: 'center', padding: '12px 26px',
              borderRadius: '999px', border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.65)', fontSize: '14px', fontWeight: 500,
              textDecoration: 'none', fontFamily: 'Inter, sans-serif',
              transition: 'border-color 0.2s, color 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}>
              {t('solutions_page.hero_cta2')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Solutions Grid ── */}
      <section id="solutions-overview" style={{ background: '#080808', padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginBottom: '52px' }}>
            <span style={{
              display: 'block', fontSize: '11px', fontWeight: 600,
              color: '#818cf8', letterSpacing: '0.12em', textTransform: 'uppercase',
              fontFamily: 'Inter, sans-serif', marginBottom: '14px',
            }}>{t('solutions_page.grid_badge')}</span>
            <h2 style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 700, color: '#fff', letterSpacing: '-0.03em',
              lineHeight: 1.15, margin: '0 0 12px 0',
            }}>{t('solutions_page.grid_title')}</h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px',
              color: 'rgba(255,255,255,0.45)', maxWidth: '480px', lineHeight: 1.75, margin: 0,
            }}>{t('solutions_page.grid_desc')}</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}
            className="sb-sol-grid">
            {solutions.map((s) => (
              <motion.div key={s.title} variants={fadeUp}
                style={{
                  padding: '32px', borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                whileHover={{
                  borderColor: s.tagColor + '44',
                  boxShadow: '0 0 0 1px ' + s.tagColor + '1a, 0 8px 32px ' + s.tagColor + '14',
                }}>
                {/* Header row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: s.tagColor + '18', border: '1px solid ' + s.tagColor + '30',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.tagColor,
                  }}>{s.icon}</div>
                  <span style={{
                    fontSize: '11px', fontWeight: 600, color: s.tagColor,
                    border: '1px solid ' + s.tagColor + '40', background: s.tagColor + '12',
                    padding: '4px 12px', borderRadius: '999px',
                    fontFamily: 'Inter, sans-serif', letterSpacing: '0.04em',
                  }}>{s.tag}</span>
                </div>

                <h3 style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '17px', fontWeight: 600,
                  color: '#fff', letterSpacing: '-0.02em', margin: '0 0 10px 0',
                }}>{s.title}</h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: '0 0 16px 0',
                }}>{s.intro}</p>

                {/* Detail rows */}
                <div style={{
                  paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.07)',
                  display: 'grid', gap: '8px',
                }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <span style={{ fontSize: '11px', color: s.tagColor, fontWeight: 600, fontFamily: 'Inter', flexShrink: 0, marginTop: '2px' }}>{t('solutions_page.fit_label')}</span>
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, fontFamily: 'Inter' }}>{s.audience}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontWeight: 600, fontFamily: 'Inter', flexShrink: 0, marginTop: '2px' }}>{t('solutions_page.feature_label')}</span>
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.65, fontFamily: 'Inter' }}>{s.detail}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Process ── */}
      <section style={{
        background: 'linear-gradient(180deg, #080808 0%, #0a0a14 100%)',
        padding: '96px 0',
        borderTop: '1px solid rgba(99,102,241,0.1)',
        borderBottom: '1px solid rgba(99,102,241,0.1)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginBottom: '52px' }}>
            <span style={{
              display: 'block', fontSize: '11px', fontWeight: 600, color: '#818cf8',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              fontFamily: 'Inter, sans-serif', marginBottom: '14px',
            }}>{t('solutions_page.process_badge')}</span>
            <h2 style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 700, color: '#fff', letterSpacing: '-0.03em',
              lineHeight: 1.15, margin: '0 0 12px 0',
            }}>{t('solutions_page.process_title')}</h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px',
              color: 'rgba(255,255,255,0.45)', maxWidth: '560px', lineHeight: 1.75, margin: 0,
            }}>
              {t('solutions_page.process_desc')}
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }} className="sb-process-grid">
            {process.map((p, i) => (
              <motion.div key={p.step}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  padding: '28px', borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  position: 'relative',
                }}>
                <span style={{
                  display: 'inline-block', fontSize: '11px', fontWeight: 700,
                  color: '#6366f1', letterSpacing: '0.1em', fontFamily: 'monospace',
                  background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)',
                  padding: '3px 9px', borderRadius: '6px', marginBottom: '18px',
                }}>{p.step}</span>
                <h3 style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600,
                  color: '#fff', letterSpacing: '-0.02em', margin: '0 0 10px 0',
                }}>{p.title}</h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '13px',
                  color: 'rgba(255,255,255,0.45)', lineHeight: 1.72, margin: 0,
                }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: 'linear-gradient(180deg, #0a0a14 0%, #06060f 100%)',
        padding: '112px 0', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', maxWidth: '640px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <h2 style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(30px, 4vw, 52px)',
              fontWeight: 800, color: '#fff', letterSpacing: '-0.04em',
              lineHeight: 1.1, margin: '0 0 18px 0',
            }}>{t('solutions_page.cta_title')}</h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px',
              color: 'rgba(255,255,255,0.48)', lineHeight: 1.8, margin: '0 0 40px 0',
            }}>
              {t('solutions_page.cta_desc')}
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 32px', borderRadius: '999px',
                background: '#6366f1', color: '#fff',
                fontSize: '15px', fontWeight: 600,
                textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                boxShadow: '0 0 24px rgba(99,102,241,0.4)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 0 36px rgba(99,102,241,0.55)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(99,102,241,0.4)'; }}>
                {t('solutions_page.cta_primary')}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="/" style={{
                display: 'inline-flex', alignItems: 'center', padding: '14px 32px',
                borderRadius: '999px', border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.65)', fontSize: '15px', fontWeight: 500,
                textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}>
                {t('solutions_page.cta_secondary')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .sb-sol-grid { grid-template-columns: 1fr !important; }
          .sb-process-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .sb-process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
