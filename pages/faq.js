import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'next-i18next/pages';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';

const pageTitle = 'STARBRIGHT SOLUTIONS | FAQ 常见问题：服务流程与合作说明';
const pageDescription =
  'STARBRIGHT SOLUTIONS FAQ 常见问题页，汇总企业官网建设、软件开发、Web Development、AI Automation 与 Digital Solutions 的服务流程、合作方式与常见咨询说明。';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

function FAQAccordion({ items, color }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} style={{
            borderRadius: i === 0 ? '12px 12px 4px 4px' : i === items.length - 1 ? '4px 4px 12px 12px' : '4px',
            background: isOpen ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
            border: '1px solid ' + (isOpen ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)'),
            overflow: 'hidden',
            transition: 'background 0.2s, border-color 0.2s',
          }}>
            <button onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                width: '100%', padding: '16px 20px',
                display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px',
                background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
              }}>
              <span style={{
                fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600,
                color: isOpen ? '#fff' : 'rgba(255,255,255,0.75)',
                lineHeight: 1.5, transition: 'color 0.2s',
              }}>{item.question}</span>
              <div style={{
                width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
                background: isOpen ? color + '30' : 'rgba(255,255,255,0.07)',
                border: '1px solid ' + (isOpen ? color + '60' : 'rgba(255,255,255,0.12)'),
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s, transform 0.3s, border-color 0.2s',
                transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                marginTop: '1px',
              }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                  stroke={isOpen ? color : 'rgba(255,255,255,0.5)'} strokeWidth="2.5">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: 'hidden' }}>
                  <div style={{ padding: '0 20px 20px 20px' }}>
                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '16px' }} />
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: 0 }}>{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function FAQPage() {
  const { t } = useTranslation('common');

  const faqGroups = [
    {
      title: t('faq_page.g1_title'), icon: '🤝', summary: t('faq_page.g1_summary'),
      color: '#6366f1', bg: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.3)',
      items: [
        { question: t('faq_page.g1_q1'), answer: t('faq_page.g1_a1') },
        { question: t('faq_page.g1_q2'), answer: t('faq_page.g1_a2') },
        { question: t('faq_page.g1_q3'), answer: t('faq_page.g1_a3') },
      ],
    },
    {
      title: t('faq_page.g2_title'), icon: '🗺️', summary: t('faq_page.g2_summary'),
      color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.3)',
      items: [
        { question: t('faq_page.g2_q1'), answer: t('faq_page.g2_a1') },
        { question: t('faq_page.g2_q2'), answer: t('faq_page.g2_a2') },
        { question: t('faq_page.g2_q3'), answer: t('faq_page.g2_a3') },
      ],
    },
    {
      title: t('faq_page.g3_title'), icon: '⚙️', summary: t('faq_page.g3_summary'),
      color: '#06b6d4', bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.3)',
      items: [
        { question: t('faq_page.g3_q1'), answer: t('faq_page.g3_a1') },
        { question: t('faq_page.g3_q2'), answer: t('faq_page.g3_a2') },
        { question: t('faq_page.g3_q3'), answer: t('faq_page.g3_a3') },
      ],
    },
    {
      title: t('faq_page.g4_title'), icon: '🤖', summary: t('faq_page.g4_summary'),
      color: '#34d399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.3)',
      items: [
        { question: t('faq_page.g4_q1'), answer: t('faq_page.g4_a1') },
        { question: t('faq_page.g4_q2'), answer: t('faq_page.g4_a2') },
        { question: t('faq_page.g4_q3'), answer: t('faq_page.g4_a3') },
      ],
    },
    {
      title: t('faq_page.g5_title'), icon: '🏭', summary: t('faq_page.g5_summary'),
      color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.3)',
      items: [
        { question: t('faq_page.g5_q1'), answer: t('faq_page.g5_a1') },
        { question: t('faq_page.g5_q2'), answer: t('faq_page.g5_a2') },
        { question: t('faq_page.g5_q3'), answer: t('faq_page.g5_a3') },
      ],
    },
  ];

  const checkItems = [
    { label: t('faq_page.check1_label'), sub: t('faq_page.check1_sub') },
    { label: t('faq_page.check2_label'), sub: t('faq_page.check2_sub') },
    { label: t('faq_page.check3_label'), sub: t('faq_page.check3_sub') },
  ];

  const ctaItems = [t('faq_page.cta_item1'), t('faq_page.cta_item2'), t('faq_page.cta_item3')];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      {/* ── Hero ── */}
      <section style={{
        position: 'relative', background: '#000', overflow: 'hidden',
        paddingTop: '60px', minHeight: '44vh', display: 'flex', alignItems: 'center',
      }}>
        <div className="bg-grid-dots" style={{ position: 'absolute', inset: 0 }} />
        <div style={{
          position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
          width: '700px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.11) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '100px 24px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '64px', alignItems: 'center' }} className="sb-faq-hero-grid">

            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                style={{ marginBottom: '20px' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '5px 14px', borderRadius: '999px',
                  border: '1px solid rgba(99,102,241,0.4)', background: 'rgba(99,102,241,0.1)',
                  color: '#a5b4fc', fontSize: '12px', fontWeight: 500,
                  fontFamily: 'Inter, sans-serif', letterSpacing: '0.03em',
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#818cf8' }} />
                  {t('faq_page.badge')}
                </span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 20px 0' }}>
                {t('faq_page.hero_title1')}<br />
                <span className="gradient-text-indigo">{t('faq_page.hero_title2')}</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: '460px', margin: '0 0 12px 0' }}>
                {t('faq_page.hero_p1')}
              </motion.p>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>
                {t('faq_page.hero_p2')}
              </motion.p>
            </div>

            {/* Right checklist */}
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)', padding: '32px' }}>
              <div style={{ height: '3px', borderRadius: '2px', background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)', marginBottom: '24px' }} />
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 700, color: '#fff', margin: '0 0 20px 0', letterSpacing: '-0.02em' }}>
                {t('faq_page.check_title')}
              </h2>
              {checkItems.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '14px', alignItems: 'flex-start',
                  paddingBottom: i < 2 ? '16px' : 0,
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  marginBottom: i < 2 ? '16px' : 0,
                }}>
                  <div style={{
                    width: '22px', height: '22px', borderRadius: '50%',
                    background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: '1px',
                    fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, color: '#818cf8',
                  }}>{i + 1}</div>
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.8)', margin: '0 0 3px 0' }}>{item.label}</p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ Groups ── */}
      <section style={{ background: '#080808', padding: '80px 0 100px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            style={{ textAlign: 'center', marginBottom: '64px' }}>
            <motion.h2 variants={fadeUp}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', margin: '0 0 12px 0' }}>
              {t('faq_page.groups_title')}
            </motion.h2>
            <motion.p variants={fadeUp} custom={0.05}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.4)', margin: '0 auto', maxWidth: '480px' }}>
              {t('faq_page.groups_desc')}
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {faqGroups.map((group, i) => (
              <motion.div key={group.title} variants={fadeUp} custom={i * 0.08}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    background: group.bg, border: '1px solid ' + group.border,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '18px', flexShrink: 0,
                  }}>{group.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', fontWeight: 700, color: '#fff', margin: '0 0 2px 0', letterSpacing: '-0.02em' }}>{group.title}</h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>{group.summary}</p>
                  </div>
                </div>
                <FAQAccordion items={group.items} color={group.color} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#050505', padding: '80px 0 100px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }} className="sb-faq-cta-grid">

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(24px, 2.5vw, 34px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', margin: '0 0 16px 0' }}>
                {t('faq_page.cta_left_title')}
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: '0 0 28px 0' }}>
                {t('faq_page.cta_left_p')}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {ctaItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" style={{ marginTop: '2px', flexShrink: 0 }}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }}
              style={{ borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', padding: '36px' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', margin: '0 0 12px 0' }}>
                {t('faq_page.cta_right_title')}
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: '0 0 28px 0' }}>
                {t('faq_page.cta_right_p')}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '12px 24px', borderRadius: '999px',
                  background: 'rgba(99,102,241,1)', color: '#fff', fontSize: '14px', fontWeight: 600,
                  textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                  boxShadow: '0 0 20px rgba(99,102,241,0.35)',
                  transition: 'background 0.2s, box-shadow 0.2s, transform 0.2s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#5254cc'; e.currentTarget.style.boxShadow = '0 0 32px rgba(99,102,241,0.55)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(99,102,241,1)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(99,102,241,0.35)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  {t('faq_page.cta_primary')}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
                <a href="/solutions" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '12px 24px', borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.15)', background: 'transparent',
                  color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: 500,
                  textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                  transition: 'border-color 0.2s, color 0.2s, background 0.2s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.background = 'transparent'; }}>
                  {t('faq_page.cta_secondary')}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .sb-faq-hero-grid { grid-template-columns: 1fr !important; }
          .sb-faq-cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
