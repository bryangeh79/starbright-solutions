import Head from 'next/head';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';

const accentColor = '#a78bfa';
const accentGlow = 'rgba(139,92,246,0.35)';
const accentBg = 'rgba(139,92,246,0.12)';
const accentBorder = 'rgba(139,92,246,0.35)';

const highlights = [
  { icon: '⚡', title: '24/7 全天候自动接待', desc: '全天候响应客户咨询，即时回答常见问题，无需人工值守。' },
  { icon: '🎯', title: '结构化线索采集', desc: '自动收集姓名、电话、邮件、公司与需求摘要，将对话转化为可跟进的结构化线索。' },
  { icon: '📚', title: '知识库驱动回复', desc: '基于导入的 FAQ、产品介绍与服务说明生成回答，确保内容一致、准确、贴近品牌表达。' },
  { icon: '👥', title: '多坐席团队协作', desc: '支持 4 位以上客服/销售同时处理来单，手动分配、查看归属、无缝转接会话。' },
  { icon: '🔄', title: '智能人工交接', desc: '遇复杂问题或客户主动要求时，自动汇总对话摘要并移交人工，保障服务连续性。' },
  { icon: '🌐', title: '多语言支持', desc: '原生支持中文、英文、越南语与马来语，可按需扩展其他语言，无缝服务多语言客户群体。' },
  { icon: '📊', title: '运营报表与管理', desc: '提供咨询总量、新增线索、高频问题、人工交接次数等核心数据，日/周摘要自动生成。' },
  { icon: '🚀', title: '快速部署上线', desc: '产品边界清晰，接入流程标准，中小企业可快速完成配置并投入使用，降低实施风险。' },
];

const channels = [
  { name: 'Website Chat', color: '#6366f1' },
  { name: 'Telegram', color: '#38bdf8' },
  { name: 'WhatsApp', color: '#34d399' },
  { name: 'Facebook Messenger', color: '#60a5fa' },
];

const features = [
  {
    title: '渠道接入',
    color: '#6366f1',
    items: ['官网在线聊天', 'Telegram Bot', 'WhatsApp 接入', 'Facebook Messenger', '渠道来源识别', '统一欢迎消息'],
  },
  {
    title: 'AI 接待能力',
    color: '#a78bfa',
    items: ['FAQ 自动回答', '产品/服务介绍', '营业时间与联系说明', '基础语境理解', '引导式追问', '7×24 全天响应'],
  },
  {
    title: '知识库管理',
    color: '#06b6d4',
    items: ['导入 FAQ 内容', '导入产品与服务资料', '公司介绍问答', '基础文件问答支持', '内容统一管理', '回答范围可控'],
  },
  {
    title: '线索采集',
    color: '#34d399',
    items: ['姓名 / 电话 / 邮件', '公司名称 / 国家地区', '客户需求描述', '咨询摘要生成', '结构化线索输出', '可直接用于跟进'],
  },
  {
    title: '团队协作',
    color: '#fbbf24',
    items: ['4+ 坐席/销售支持', '手动线索分配', '当前归属可见', '基础角色管理', '会话转接', '统一来单视图'],
  },
  {
    title: '人工交接与报表',
    color: '#f87171',
    items: ['客户请求交接', '复杂问题升级', '交接前摘要生成', '留言模式', '咨询/线索/交接统计', '日/周摘要报告'],
  },
];

const useCases = [
  '服务型企业官网咨询助手',
  'Telegram / WhatsApp 前台接待机器人',
  '培训机构课程、定价与报名咨询',
  '房产或顾问团队的销售预筛选',
  '中小企业常见问题解答与线索预收集',
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

export default function ChatFlowProPage() {
  return (
    <>
      <Head>
        <title>ChatFlow Pro | STARBRIGHT SOLUTIONS</title>
        <meta name="description" content="ChatFlow Pro — AI 智能接待与客服自动化系统，为中小企业打造，覆盖 Website、Telegram、WhatsApp、Facebook Messenger，快速响应、线索采集、团队协作一体化。" />
        <meta property="og:title" content="ChatFlow Pro | STARBRIGHT SOLUTIONS" />
        <meta property="og:description" content="AI 智能接待与客服自动化系统 — 更快响应、更清晰的线索、更顺畅的团队交接。" />
        <meta property="og:image" content="/images/Products_ChatFlowPro.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ChatFlow Pro | STARBRIGHT SOLUTIONS" />
        <meta name="twitter:image" content="/images/Products_ChatFlowPro.png" />
      </Head>

      {/* ── Hero ── */}
      <section style={{
        position: 'relative', background: '#000', overflow: 'hidden',
        paddingTop: '60px', minHeight: '100vh', display: 'flex', alignItems: 'center',
      }}>
        <div className="bg-grid-dots" style={{ position: 'absolute', inset: 0 }} />
        <div style={{
          position: 'absolute', top: '20%', left: '0%',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '5%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 70%)',
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
              所有产品
            </a>
            <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '13px' }}>/</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>ChatFlow Pro</span>
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
                  background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.4)',
                  color: '#a78bfa', fontSize: '11px', fontWeight: 600, fontFamily: 'Inter',
                }}>
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%', background: '#a78bfa',
                    boxShadow: '0 0 8px rgba(167,139,250,0.8)',
                  }} />
                  ⚡ 开发中
                </span>
                {channels.map((ch) => (
                  <span key={ch.name} style={{
                    padding: '4px 12px', borderRadius: '999px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.04)',
                    color: 'rgba(255,255,255,0.55)', fontSize: '11px',
                    fontFamily: 'Inter', fontWeight: 500,
                  }}>{ch.name}</span>
                ))}
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(40px, 5vw, 68px)',
                  fontWeight: 800, letterSpacing: '-0.04em',
                  lineHeight: 1.05, color: '#fff', margin: '0 0 8px 0',
                }}>
                ChatFlow
                <span style={{
                  display: 'block',
                  background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>Pro</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.18 }}
                style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px',
                  color: accentColor, fontWeight: 600, letterSpacing: '0.06em',
                  textTransform: 'uppercase', margin: '0 0 20px 0',
                }}>
                AI 智能接待与客服自动化系统
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '16px',
                  color: 'rgba(255,255,255,0.55)', lineHeight: 1.8,
                  maxWidth: '520px', margin: '0 0 32px 0',
                }}>
                为中小企业打造的 AI 客服解决方案。更快响应客户咨询、系统化采集线索、支持团队协作，将对话转化为可跟进的业务机会。
              </motion.p>

              {/* Core promise */}
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '10px 20px', borderRadius: '12px',
                  background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.25)',
                  marginBottom: '36px',
                }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '13px',
                  color: 'rgba(255,255,255,0.65)', lineHeight: 1.5,
                }}>
                  快速部署 · 更智能的回复 · 更清晰的线索 · 更顺畅的跟进
                </span>
              </motion.div>

              {/* CTAs */}
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.36 }}
                style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '13px 28px', borderRadius: '999px',
                  background: accentColor, color: '#fff',
                  fontSize: '14px', fontWeight: 600,
                  textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                  boxShadow: '0 0 24px ' + accentGlow,
                  transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 36px rgba(139,92,246,0.55)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 24px ' + accentGlow; }}>
                  预约了解
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="/products" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '13px 24px', borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontWeight: 500,
                  textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}>
                  查看所有产品
                </a>
              </motion.div>
            </div>

            {/* Right — Logo */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
              <div style={{
                  width: '100%', borderRadius: '24px',
                  border: '1px solid rgba(139,92,246,0.2)',
                  position: 'relative', overflow: 'hidden',
                  aspectRatio: '16/10',
                  boxShadow: '0 0 60px rgba(139,92,246,0.15)',
                }}>
                <img src="/images/Products_ChatFlowPro.png" alt="ChatFlow Pro"
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%', objectFit: 'cover',
                  }} />
              </div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', width: '100%' }}>
                {[
                  { value: '4+', label: '渠道接入' },
                  { value: '7×24', label: '全天响应' },
                  { value: '多语言', label: '中/英/越/马' },
                ].map((s) => (
                  <div key={s.label} style={{
                    padding: '14px 10px', borderRadius: '12px', textAlign: 'center',
                    background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)',
                  }}>
                    <div style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 800,
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
            }}>产品核心亮点</h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px',
              color: 'rgba(255,255,255,0.45)', maxWidth: '480px', lineHeight: 1.75, margin: 0,
            }}>专为实际业务场景设计，不只是对话机器人，而是完整的客服自动化解决方案。</p>
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
                whileHover={{ borderColor: 'rgba(139,92,246,0.35)' }}>
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
        background: 'linear-gradient(180deg, #080808 0%, #0a0814 100%)',
        padding: '96px 0', borderTop: '1px solid rgba(139,92,246,0.1)',
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
            }}>功能模块详情</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}
            className="sb-cf-features-grid">
            {features.map((f, i) => (
              <motion.div key={i} variants={fadeUp} custom={i * 0.07}
                style={{
                  padding: '24px', borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.025)',
                }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px',
                  paddingBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}>
                  <div style={{
                    width: '8px', height: '8px', borderRadius: '50%', background: f.color,
                    boxShadow: '0 0 8px ' + f.color + '80', flexShrink: 0,
                  }} />
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700,
                    color: '#fff', margin: 0,
                  }}>{f.title}</h3>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {f.items.map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                        stroke={f.color} strokeWidth="2.5" style={{ marginTop: '2px', flexShrink: 0 }}>
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span style={{
                        fontFamily: 'Inter, sans-serif', fontSize: '12px',
                        color: 'rgba(255,255,255,0.55)', lineHeight: 1.6,
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
              }}>TYPICAL USE CASES</span>
              <h2 style={{
                fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)',
                fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', margin: '0 0 28px 0',
              }}>典型应用场景</h2>
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
              }}>IDEAL FOR</span>
              <h2 style={{
                fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 2.5vw, 34px)',
                fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', margin: '0 0 28px 0',
              }}>适合哪些客户</h2>
              <div style={{
                padding: '28px', borderRadius: '16px',
                background: accentBg, border: '1px solid ' + accentBorder,
                marginBottom: '20px',
              }}>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px',
                  color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: '0 0 16px 0',
                }}>
                  ChatFlow Pro 专为希望以较低运营风险启动 AI 客服能力的中小企业设计——无需复杂系统集成，快速上线，立即见效。
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {['中小企业与服务型商家', '企业官网与在线咨询场景', '培训机构与顾问团队', '需要标准化客服流程的创业团队', '从零开始搭建 AI 客服的企业'].map((item) => (
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
              <div style={{
                padding: '18px 20px', borderRadius: '12px',
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '13px',
                  color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0, fontStyle: 'italic',
                }}>
                  当业务规模扩大、需要电商接入或更深度的工作流自动化时，可自然升级至 ChatFlow Enterprise。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: 'linear-gradient(180deg, #080808 0%, #06060f 100%)',
        padding: '100px 0', position: 'relative', overflow: 'hidden',
        borderTop: '1px solid rgba(139,92,246,0.12)',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '600px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.16) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', maxWidth: '580px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(28px, 3.5vw, 46px)',
              fontWeight: 700, color: '#fff', letterSpacing: '-0.03em',
              lineHeight: 1.15, margin: '0 0 16px 0',
            }}>准备好让 AI 接管重复性工作了吗？</h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px',
              color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, margin: '0 0 36px 0',
            }}>
              了解 ChatFlow Pro 如何帮助您的团队提升响应效率、系统化采集线索，并减少人工重复操作。
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px', borderRadius: '999px',
                background: accentColor, color: '#fff',
                fontSize: '14px', fontWeight: 600,
                textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                boxShadow: '0 0 24px ' + accentGlow,
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 36px rgba(139,92,246,0.55)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 24px ' + accentGlow; }}>
                预约咨询
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="/products/chatflow-enterprise" style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '13px 24px', borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontWeight: 500,
                textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212,165,40,0.5)'; e.currentTarget.style.color = '#d4a528'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}>
                了解 Enterprise 版本 →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .sb-chatflow-hero-grid { grid-template-columns: 1fr !important; }
          .sb-cf-usecase-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .sb-cf-highlights-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .sb-cf-features-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .sb-cf-highlights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
