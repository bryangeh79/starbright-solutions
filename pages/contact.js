import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react';
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
    note: '用于正式需求、报价与资料发送',
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
    note: '点击可直接打开 WhatsApp 会话',
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
    note: '点击可直接打开 Telegram 账号',
    color: '#38bdf8',
    bg: 'rgba(56,189,248,0.12)',
    border: 'rgba(56,189,248,0.3)',
  },
];

const introCards = [
  { icon: '🎯', title: '当前需要解决的核心问题', desc: '流量不足、咨询转化率低、官网形象老旧，或内部流程效率有待提升——信息越具体，评估越准确。' },
  { icon: '📋', title: '期望达成的目标', desc: '提升线索量、强化品牌形象、降低人工回复成本，或构建完整的系统支撑体系。' },
  { icon: '📎', title: '参考资料与现有基础', desc: '如已有参考网站、旧官网链接、产品介绍或现有系统说明，将有助于我们更快判断方向。' },
  { icon: '📅', title: '预期时间节点与推进阶段', desc: '是否有明确的上线期限，或计划按阶段推进？了解时间安排有助于制定合理的实施计划。' },
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '64px', alignItems: 'center' }}
            className="sb-contact-hero-grid">

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
                  项目咨询 · 合作沟通 · 需求梳理
                </span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(32px, 4vw, 54px)',
                  fontWeight: 700, lineHeight: 1.1,
                  letterSpacing: '-0.03em', color: '#fff',
                  margin: '0 0 20px 0',
                }}>
                与我们分享您的想法，<br />
                <span className="gradient-text-indigo">一起找到最合适的方向</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '16px',
                  lineHeight: 1.75, color: 'rgba(255,255,255,0.5)',
                  maxWidth: '460px', margin: '0 0 12px 0',
                }}>
                如您正在规划企业官网、网站系统、AI 客服或业务自动化项目，欢迎直接提交需求。我们将根据您的业务目标、预算范围与时间要求，提供清晰、可执行的合作建议。
              </motion.p>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px',
                  color: 'rgba(255,255,255,0.35)', lineHeight: 1.7,
                }}>
                您也可以先说明当前需要解决的核心问题、期望达成的目标，以及是否有参考网站或现有系统，我们将协助判断最适合的切入点。
              </motion.p>
            </div>

            {/* Right panel */}
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(12px)',
                padding: '32px',
              }}>
              <div style={{
                height: '3px', borderRadius: '2px',
                background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)',
                marginBottom: '24px',
              }} />
              <h2 style={{
                fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 700,
                color: '#fff', margin: '0 0 20px 0', letterSpacing: '-0.02em',
              }}>适合联系的情况</h2>
              {[
                '准备升级企业官网，强化品牌表达与咨询转化',
                '需要网站系统、轻量工具或业务流程自动化',
                '想规划 AI 客服、自动回复或线索承接流程',
                '目前只有初步想法，希望先做需求梳理',
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '12px', alignItems: 'flex-start',
                  paddingBottom: i < 3 ? '14px' : 0,
                  borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  marginBottom: i < 3 ? '14px' : 0,
                }}>
                  <div style={{
                    width: '20px', height: '20px', borderRadius: '50%',
                    background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: '1px',
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '13px',
                    color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, margin: 0,
                  }}>{item}</p>
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
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 3vw, 38px)',
                fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', margin: '0 0 12px 0',
              }}>
              您可以先告知我们的内容
            </motion.h2>
            <motion.p variants={fadeUp} custom={0.05}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: '15px',
                color: 'rgba(255,255,255,0.4)', margin: 0,
              }}>
              这部分只负责帮我们把项目边界看清楚
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}
            className="sb-contact-intro-grid">
            {introCards.map((card, i) => (
              <motion.div key={i} variants={fadeUp} custom={i * 0.08}
                style={{
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.02)',
                  padding: '28px 24px',
                }}>
                <div style={{ fontSize: '28px', marginBottom: '16px' }}>{card.icon}</div>
                <h3 style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700,
                  color: '#fff', margin: '0 0 10px 0', letterSpacing: '-0.02em',
                }}>{card.title}</h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '13px',
                  color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0,
                }}>{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Contact Form + Channels ── */}
      <section style={{ background: '#050505', padding: '80px 0 100px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '48px', alignItems: 'start' }}
            className="sb-contact-main-grid">

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 style={{
                fontFamily: 'Inter, sans-serif', fontSize: 'clamp(24px, 2.5vw, 34px)',
                fontWeight: 700, color: '#fff', letterSpacing: '-0.03em',
                margin: '0 0 8px 0',
              }}>留下你的需求</h2>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: '14px',
                color: 'rgba(255,255,255,0.4)', margin: '0 0 36px 0',
              }}>
                填写完成后会跳转到你的邮件客户端，直接发送到我们邮箱
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { name: 'name', label: '姓名', placeholder: '你的姓名', required: true },
                  { name: 'company', label: '公司名称', placeholder: '公司 / 品牌名（可选）', required: false },
                  { name: 'contact', label: '联系方式', placeholder: 'WhatsApp / Telegram / Email', required: true },
                ].map((field) => (
                  <div key={field.name}>
                    <label style={{
                      display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '12px',
                      fontWeight: 600, color: 'rgba(255,255,255,0.5)',
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}>
                      {field.label}
                      {field.required && <span style={{ color: '#6366f1', marginLeft: '4px' }}>*</span>}
                    </label>
                    <input
                      type="text"
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      style={{
                        width: '100%', padding: '12px 16px', borderRadius: '10px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#fff', fontSize: '14px', fontFamily: 'Inter, sans-serif',
                        outline: 'none', boxSizing: 'border-box',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{
                    display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '12px',
                    fontWeight: 600, color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}>
                    需求说明 <span style={{ color: '#6366f1' }}>*</span>
                  </label>
                  <textarea
                    name="requirement"
                    placeholder="请描述项目目标、功能需求、现有痛点或参考案例，信息越详细越有助于我们快速评估"
                    required
                    rows={5}
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: '10px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#fff', fontSize: '14px', fontFamily: 'Inter, sans-serif',
                      outline: 'none', boxSizing: 'border-box', resize: 'vertical',
                      transition: 'border-color 0.2s', lineHeight: 1.7,
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  />
                </div>

                <button type="submit" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  padding: '14px 32px', borderRadius: '999px',
                  background: 'rgba(99,102,241,1)',
                  color: '#fff', fontSize: '14px', fontWeight: 600,
                  fontFamily: 'Inter, sans-serif', border: 'none', cursor: 'pointer',
                  boxShadow: '0 0 24px rgba(99,102,241,0.4)',
                  transition: 'background 0.2s, box-shadow 0.2s, transform 0.2s',
                  marginTop: '4px',
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#5254cc';
                    e.currentTarget.style.boxShadow = '0 0 36px rgba(99,102,241,0.6)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(99,102,241,1)';
                    e.currentTarget.style.boxShadow = '0 0 24px rgba(99,102,241,0.4)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                  发送需求
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </motion.div>

            {/* Channels sidebar */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <h2 style={{
                fontFamily: 'Inter, sans-serif', fontSize: '20px',
                fontWeight: 700, color: '#fff', letterSpacing: '-0.02em',
                margin: '0 0 8px 0',
              }}>直接联系我们</h2>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: '13px',
                color: 'rgba(255,255,255,0.4)', margin: '0 0 28px 0',
              }}>
                也可以直接通过以下渠道发起对话
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {contactChannels.map((ch) => (
                  <a key={ch.label} href={ch.href}
                    target={ch.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex', gap: '16px', alignItems: 'flex-start',
                      padding: '20px', borderRadius: '14px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      background: 'rgba(255,255,255,0.02)',
                      textDecoration: 'none',
                      transition: 'border-color 0.3s, background 0.3s, transform 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = ch.border;
                      e.currentTarget.style.background = ch.bg;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px',
                      background: ch.bg, border: '1px solid ' + ch.border,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: ch.color, flexShrink: 0,
                    }}>
                      {ch.icon}
                    </div>
                    <div>
                      <div style={{
                        fontFamily: 'Inter, sans-serif', fontSize: '11px',
                        fontWeight: 600, color: 'rgba(255,255,255,0.4)',
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        marginBottom: '4px',
                      }}>{ch.label}</div>
                      <div style={{
                        fontFamily: 'Inter, sans-serif', fontSize: '13px',
                        fontWeight: 600, color: ch.color, marginBottom: '4px',
                        wordBreak: 'break-all',
                      }}>{ch.value}</div>
                      <div style={{
                        fontFamily: 'Inter, sans-serif', fontSize: '12px',
                        color: 'rgba(255,255,255,0.35)', lineHeight: 1.5,
                      }}>{ch.note}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Response time */}
              <div style={{
                marginTop: '24px', padding: '16px 20px', borderRadius: '12px',
                background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <div style={{
                    width: '7px', height: '7px', borderRadius: '50%', background: '#34d399',
                    boxShadow: '0 0 8px rgba(52,211,153,0.8)',
                  }} />
                  <span style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '12px',
                    fontWeight: 600, color: 'rgba(255,255,255,0.7)',
                  }}>通常在 24 小时内回复</span>
                </div>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '12px',
                  color: 'rgba(255,255,255,0.35)', margin: 0, lineHeight: 1.6,
                }}>
                  工作日优先处理，如需紧急沟通建议通过 WhatsApp 或 Telegram 联系
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
