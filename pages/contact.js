import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'next-i18next/pages';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';

const pageTitle = 'STARBRIGHT SOLUTIONS | 联系我们：项目咨询与合作入口';
const pageDescription =
  'STARBRIGHT SOLUTIONS 联系我们页，适合咨询企业官网建设、软件开发、Web Development、AI Automation 与 Digital Solutions 的项目咨询、需求沟通与合作入口。';

const contactChannels = [
  {
    label: 'Email',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
    value: 'starbrightsolutions3333@gmail.com',
    href: 'mailto:starbrightsolutions3333@gmail.com',
    noteKey: 'contact_page.email_note',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.12)',
    border: 'rgba(99,102,241,0.3)',
  },
  {
    label: 'WhatsApp',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    value: '0123456789',
    href: 'https://wa.me/0123456789',
    noteKey: 'contact_page.wa_note',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.12)',
    border: 'rgba(52,211,153,0.3)',
  },
  {
    label: 'Telegram',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
      </svg>
    ),
    value: '@123456789',
    href: 'https://t.me/123456789',
    noteKey: 'contact_page.tg_note',
    color: '#38bdf8',
    bg: 'rgba(56,189,248,0.12)',
    border: 'rgba(56,189,248,0.3)',
  },
];

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

export default function ContactPage() {
  const { t } = useTranslation('common');

  const introCards = [
    { icon: '🎯', title: t('contact_page.icard1_title'), desc: t('contact_page.icard1_desc') },
    { icon: '📋', title: t('contact_page.icard2_title'), desc: t('contact_page.icard2_desc') },
    { icon: '📎', title: t('contact_page.icard3_title'), desc: t('contact_page.icard3_desc') },
    { icon: '📅', title: t('contact_page.icard4_title'), desc: t('contact_page.icard4_desc') },
  ];

  const sidebarItems = [
    t('contact_page.sidebar_item1'),
    t('contact_page.sidebar_item2'),
    t('contact_page.sidebar_item3'),
    t('contact_page.sidebar_item4'),
  ];

  const formFields = [
    { name: 'name', label: t('contact_page.name_label'), placeholder: t('contact_page.name_ph'), required: true },
    { name: 'company', label: t('contact_page.company_label'), placeholder: t('contact_page.company_ph'), required: false },
    { name: 'contact', label: t('contact_page.contact_label'), placeholder: t('contact_page.contact_ph'), required: true },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim() || '';
    const company = formData.get('company')?.toString().trim() || '';
    const contact = formData.get('contact')?.toString().trim() || '';
    const requirement = formData.get('requirement')?.toString().trim() || '';

    const subject = encodeURIComponent('STARBRIGHT SOLUTIONS 官网咨询：' + (company || name || '新需求'));
    const body = encodeURIComponent(
      ['姓名：' + (name || '未填写'), '公司名称：' + (company || '未填写'), '联系方式：' + (contact || '未填写'), '', '需求说明：', requirement || '未填写'].join('\n')
    );

    window.location.href = 'mailto:starbrightsolutions3333@gmail.com?subject=' + subject + '&body=' + body;
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      {/* ── Hero ── */}
      <section style={{
        position: 'relative', background: '#000', overflow: 'hidden',
        paddingTop: '60px', minHeight: '50vh', display: 'flex', alignItems: 'center',
      }}>
        <div className="bg-grid-dots" style={{ position: 'absolute', inset: 0 }} />
        <div style={{
          position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
          width: '800px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '100px 24px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '64px', alignItems: 'center' }} className="sb-contact-hero-grid">

            {/* Left copy */}
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
                  {t('contact_page.badge')}
                </span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 20px 0' }}>
                {t('contact_page.hero_title1')}<br />
                <span className="gradient-text-indigo">{t('contact_page.hero_title2')}</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: '460px', margin: '0 0 12px 0' }}>
                {t('contact_page.hero_p1')}
              </motion.p>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>
                {t('contact_page.hero_p2')}
              </motion.p>
            </div>

            {/* Right panel */}
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)', padding: '32px' }}>
              <div style={{ height: '3px', borderRadius: '2px', background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)', marginBottom: '24px' }} />
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 700, color: '#fff', margin: '0 0 20px 0', letterSpacing: '-0.02em' }}>
                {t('contact_page.sidebar_title')}
              </h2>
              {sidebarItems.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '12px', alignItems: 'flex-start',
                  paddingBottom: i < 3 ? '14px' : 0,
                  borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  marginBottom: i < 3 ? '14px' : 0,
                }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, margin: 0 }}>{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Intro Cards ── */}
      <section style={{ background: '#080808', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            style={{ textAlign: 'center', marginBottom: '56px' }}>
            <motion.h2 variants={fadeUp}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', margin: '0 0 12px 0' }}>
              {t('contact_page.intro_title')}
            </motion.h2>
            <motion.p variants={fadeUp} custom={0.05}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
              {t('contact_page.intro_desc')}
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}
            className="sb-contact-intro-grid">
            {introCards.map((card, i) => (
              <motion.div key={i} variants={fadeUp} custom={i * 0.08}
                style={{ borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', padding: '28px 24px' }}>
                <div style={{ fontSize: '28px', marginBottom: '16px' }}>{card.icon}</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#fff', margin: '0 0 10px 0', letterSpacing: '-0.02em' }}>{card.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Contact Form + Channels ── */}
      <section style={{ background: '#050505', padding: '80px 0 100px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '48px', alignItems: 'start' }} className="sb-contact-main-grid">

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(24px, 2.5vw, 34px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', margin: '0 0 8px 0' }}>
                {t('contact_page.form_title')}
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.4)', margin: '0 0 36px 0' }}>
                {t('contact_page.form_subtitle')}
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {formFields.map((field) => (
                  <div key={field.name}>
                    <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                      {field.label}
                      {field.required && <span style={{ color: '#6366f1', marginLeft: '4px' }}>*</span>}
                    </label>
                    <input
                      type="text"
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '14px', fontFamily: 'Inter, sans-serif', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    {t('contact_page.req_label')} <span style={{ color: '#6366f1' }}>*</span>
                  </label>
                  <textarea
                    name="requirement"
                    placeholder={t('contact_page.req_ph')}
                    required
                    rows={5}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '14px', fontFamily: 'Inter, sans-serif', outline: 'none', boxSizing: 'border-box', resize: 'vertical', transition: 'border-color 0.2s', lineHeight: 1.7 }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  />
                </div>

                <button type="submit" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px 32px', borderRadius: '999px', background: 'rgba(99,102,241,1)', color: '#fff', fontSize: '14px', fontWeight: 600, fontFamily: 'Inter, sans-serif', border: 'none', cursor: 'pointer', boxShadow: '0 0 24px rgba(99,102,241,0.4)', transition: 'background 0.2s, box-shadow 0.2s, transform 0.2s', marginTop: '4px' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#5254cc'; e.currentTarget.style.boxShadow = '0 0 36px rgba(99,102,241,0.6)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(99,102,241,1)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(99,102,241,0.4)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  {t('contact_page.submit')}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </form>
            </motion.div>

            {/* Channels sidebar */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', margin: '0 0 8px 0' }}>
                {t('contact_page.channels_title')}
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: '0 0 28px 0' }}>
                {t('contact_page.channels_desc')}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {contactChannels.map((ch) => (
                  <a key={ch.label} href={ch.href}
                    target={ch.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', textDecoration: 'none', transition: 'border-color 0.3s, background 0.3s, transform 0.2s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = ch.border; e.currentTarget.style.background = ch.bg; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: ch.bg, border: '1px solid ' + ch.border, display: 'flex', alignItems: 'center', justifyContent: 'center', color: ch.color, flexShrink: 0 }}>
                      {ch.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>{ch.label}</div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: ch.color, marginBottom: '4px', wordBreak: 'break-all' }}>{ch.value}</div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>{t(ch.noteKey)}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Response time */}
              <div style={{ marginTop: '24px', padding: '16px 20px', borderRadius: '12px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 8px rgba(52,211,153,0.8)' }} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>{t('contact_page.response_status')}</span>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: 0, lineHeight: 1.6 }}>
                  {t('contact_page.response_note')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .sb-contact-hero-grid { grid-template-columns: 1fr !important; }
          .sb-contact-main-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .sb-contact-intro-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .sb-contact-intro-grid { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); }
      `}</style>
    </>
  );
}
