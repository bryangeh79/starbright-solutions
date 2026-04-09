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

export default function IndustriesPage() {
  const { t } = useTranslation('common');

  const industries = [
    { abbr: t('industries_page.i1_abbr'), color: '#f59e0b', title: t('industries_page.i1_title'), challenge: t('industries_page.i1_challenge'), approach: t('industries_page.i1_approach'), value: t('industries_page.i1_value') },
    { abbr: t('industries_page.i2_abbr'), color: '#ef4444', title: t('industries_page.i2_title'), challenge: t('industries_page.i2_challenge'), approach: t('industries_page.i2_approach'), value: t('industries_page.i2_value') },
    { abbr: t('industries_page.i3_abbr'), color: '#8b5cf6', title: t('industries_page.i3_title'), challenge: t('industries_page.i3_challenge'), approach: t('industries_page.i3_approach'), value: t('industries_page.i3_value') },
    { abbr: t('industries_page.i4_abbr'), color: '#6366f1', title: t('industries_page.i4_title'), challenge: t('industries_page.i4_challenge'), approach: t('industries_page.i4_approach'), value: t('industries_page.i4_value') },
    { abbr: t('industries_page.i5_abbr'), color: '#06b6d4', title: t('industries_page.i5_title'), challenge: t('industries_page.i5_challenge'), approach: t('industries_page.i5_approach'), value: t('industries_page.i5_value') },
    { abbr: t('industries_page.i6_abbr'), color: '#10b981', title: t('industries_page.i6_title'), challenge: t('industries_page.i6_challenge'), approach: t('industries_page.i6_approach'), value: t('industries_page.i6_value') },
  ];

  const methodSteps = [
    { step: '01', text: t('industries_page.step1'), color: '#6366f1' },
    { step: '02', text: t('industries_page.step2'), color: '#8b5cf6' },
    { step: '03', text: t('industries_page.step3'), color: '#06b6d4' },
    { step: '04', text: t('industries_page.step4'), color: '#10b981' },
  ];

  return (
    <>
      <Head>
        <title>行业应用 | STARBRIGHT SOLUTIONS</title>
        <meta name="description" content="STARBRIGHT SOLUTIONS 按行业梳理核心挑战，为零售、餐饮、教育、金融、电商与企业运营提供针对性的数字化解决方案。" />
      </Head>

      {/* ── Hero ── */}
      <section style={{
        position: 'relative', background: '#000', overflow: 'hidden',
        paddingTop: '60px', minHeight: '52vh',
        display: 'flex', alignItems: 'center',
      }}>
        <div className="bg-grid-dots" style={{ position: 'absolute', inset: 0 }} />
        <div style={{
          position: 'absolute', top: '10%', right: '10%', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
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
              Industry Solutions
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(34px, 4.5vw, 58px)',
              fontWeight: 700, lineHeight: 1.12,
              letterSpacing: '-0.03em', color: '#fff',
              margin: '0 0 20px 0', maxWidth: '720px',
            }}>
            {t('industries_page.hero_title1')}<br />
            <span style={{
              background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 50%, #818cf8 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>{t('industries_page.hero_title2')}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: '16px',
              lineHeight: 1.75, color: 'rgba(255,255,255,0.5)',
              maxWidth: '520px', margin: '0 0 36px 0',
            }}>
            {t('industries_page.hero_desc')}
          </motion.p>

          {/* Industry pills */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {industries.map((ind) => (
              <span key={ind.title} style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 16px', borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.04)',
                color: 'rgba(255,255,255,0.65)', fontSize: '13px',
                fontFamily: 'Inter, sans-serif',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: ind.color, flexShrink: 0 }} />
                {ind.title}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Industry Cards ── */}
      <section style={{ background: '#080808', padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginBottom: '52px' }}>
            <span style={{
              display: 'block', fontSize: '11px', fontWeight: 600, color: '#818cf8',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              fontFamily: 'Inter, sans-serif', marginBottom: '14px',
            }}>{t('industries_page.cards_badge')}</span>
            <h2 style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 700, color: '#fff', letterSpacing: '-0.03em',
              lineHeight: 1.15, margin: '0 0 12px 0',
            }}>{t('industries_page.cards_title')}</h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px',
              color: 'rgba(255,255,255,0.45)', maxWidth: '520px', lineHeight: 1.75, margin: 0,
            }}>{t('industries_page.cards_desc')}</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}
            className="sb-ind-grid">
            {industries.map((ind) => (
              <motion.div key={ind.title} variants={fadeUp}
                style={{
                  padding: '32px', borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.02)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                whileHover={{
                  borderColor: ind.color + '44',
                  boxShadow: '0 0 0 1px ' + ind.color + '18, 0 8px 40px ' + ind.color + '10',
                }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '10px', flexShrink: 0,
                    background: ind.color + '15', border: '1px solid ' + ind.color + '35',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 700, color: ind.color, letterSpacing: '0.02em' }}>{ind.abbr}</span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', margin: '0 0 3px 0' }}>{ind.title}</h3>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{t('industries_page.scenario')}</span>
                  </div>
                </div>

                {/* Content rows */}
                <div style={{ display: 'grid', gap: '16px' }}>
                  {[
                    { label: t('industries_page.challenge_label'), text: ind.challenge, labelColor: '#f87171' },
                    { label: t('industries_page.approach_label'), text: ind.approach, labelColor: ind.color },
                    { label: t('industries_page.value_label'), text: ind.value, labelColor: 'rgba(255,255,255,0.45)' },
                  ].map((row) => (
                    <div key={row.label}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '7px' }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: row.labelColor, flexShrink: 0 }} />
                        <span style={{ fontSize: '11px', fontWeight: 700, color: row.labelColor, fontFamily: 'Inter', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{row.label}</span>
                      </div>
                      <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, fontFamily: 'Inter', margin: 0 }}>{row.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Methodology ── */}
      <section style={{
        background: 'linear-gradient(180deg, #080808 0%, #0a0a14 100%)',
        padding: '96px 0',
        borderTop: '1px solid rgba(99,102,241,0.1)',
        borderBottom: '1px solid rgba(99,102,241,0.1)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }} className="sb-match-grid">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <span style={{
                display: 'block', fontSize: '11px', fontWeight: 600, color: '#818cf8',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif', marginBottom: '14px',
              }}>{t('industries_page.method_badge')}</span>
              <h2 style={{
                fontFamily: 'Inter, sans-serif', fontSize: 'clamp(24px, 3vw, 38px)',
                fontWeight: 700, color: '#fff', letterSpacing: '-0.03em',
                lineHeight: 1.2, margin: '0 0 20px 0',
              }}>{t('industries_page.method_title')}</h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, margin: '0 0 16px 0' }}>
                {t('industries_page.method_p1')}
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, margin: 0 }}>
                {t('industries_page.method_p2')}
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'grid', gap: '10px' }}>
              {methodSteps.map((item) => (
                <div key={item.step} style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '16px 20px', borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.025)',
                }}>
                  <span style={{
                    fontSize: '11px', fontWeight: 700, color: item.color,
                    fontFamily: 'monospace', flexShrink: 0,
                    background: item.color + '18', border: '1px solid ' + item.color + '35',
                    padding: '3px 9px', borderRadius: '6px',
                  }}>{item.step}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.7)', fontWeight: 500, lineHeight: 1.5 }}>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(180deg, #0a0a14 0%, #06060f 100%)', padding: '112px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '600px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', maxWidth: '640px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.15, margin: '0 0 18px 0' }}>
              {t('industries_page.cta_title')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.48)', lineHeight: 1.85, margin: '0 0 40px 0' }}>
              {t('industries_page.cta_desc')}
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
                {t('industries_page.cta_primary')}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="/solutions" style={{
                display: 'inline-flex', alignItems: 'center', padding: '14px 32px',
                borderRadius: '999px', border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.65)', fontSize: '15px', fontWeight: 500,
                textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}>
                {t('industries_page.cta_secondary')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .sb-ind-grid { grid-template-columns: 1fr !important; }
          .sb-match-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
