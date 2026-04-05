import Head from 'next/head';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';

const accentColor = '#d4a528';
const accentGlow = 'rgba(212,165,40,0.4)';
const accentBg = 'rgba(212,165,40,0.1)';
const accentBorder = 'rgba(212,165,40,0.35)';

const highlights = [
  { icon: '🏢', title: '包含全部 Pro 功能', desc: '在 Pro 完整功能基础上，进一步扩展电商接入、销售辅助、工作流自动化与深度分析能力。' },
  { icon: '🛒', title: '电商平台接入', desc: '支持 Shopee、Lazada、TikTok Shop 及其他定制平台，整合客户数据与订单状态，统一管理电商客服。' },
  { icon: '📈', title: '销售辅助与转化流程', desc: '线索评分、意向识别、自动标签、报价发送、预约与演示预订，将客服系统延伸至销售转化链路。' },
  { icon: '⚙️', title: '工作流自动化', desc: '与 CRM、Google Sheets、邮件系统、工单平台对接，将前端对话数据自动同步至内部业务系统。' },
  { icon: '🔐', title: '企业级权限与管控', desc: 'Admin / Manager / Agent 三级角色体系，支持审计日志、会话分配、VIP 优先处理与投诉升级流程。' },
  { icon: '📊', title: '深度分析与自定义报表', desc: '渠道效果、线索来源、AI 解决率、人工干预率、转化漏斗与销售归因分析，支持自定义报表导出。' },
  { icon: '🧠', title: '高级 AI 对话能力', desc: '多轮引导式对话、客户历史记录利用、意图识别、情感分析与优先级判断，支持品牌语气规则配置。' },
  { icon: '📋', title: '企业知识库管理', desc: '部门级知识库分隔，支持 SOP / 手册 / 网页 / 文件导入，动态更新、回答范围管控与敏感内容限制。' },
];

const channels = [
  { name: 'Website Chat', color: '#6366f1' },
  { name: 'Telegram', color: '#38bdf8' },
  { name: 'WhatsApp', color: '#34d399' },
  { name: 'Facebook Messenger', color: '#60a5fa' },
  { name: 'Shopee', color: '#f97316' },
  { name: 'Lazada', color: '#a855f7' },
  { name: 'TikTok Shop', color: '#ec4899' },
];

const features = [
  {
    title: '全渠道统一视图',
    color: '#6366f1',
    items: ['多渠道会话统一管理', '跨渠道客户身份识别', '统一客户档案', '渠道来源追踪', '全局会话搜索'],
  },
  {
    title: '电商平台集成',
    color: '#f97316',
    items: ['Shopee 接入层', 'Lazada 接入层', 'TikTok Shop 接入层', '其他平台定制接入', '客户数据同步', '订单/状态关联'],
  },
  {
    title: '高级 AI 对话',
    color: '#a78bfa',
    items: ['强化语境理解', '多轮引导式对话', '客户历史利用', '意图与情感识别', '优先级判断', '品牌语气规则'],
  },
  {
    title: '销售与转化辅助',
    color: '#d4a528',
    items: ['线索评分与意向识别', '自动标签与产品推荐', '信息包自动发送', '报价与预约流程', '未转化线索跟进', '支付流程引导'],
  },
  {
    title: '工作流自动化',
    color: '#34d399',
    items: ['CRM 数据同步', 'Google Sheets 同步', '自动发送邮件', '报价单触发', '工单创建', '预约与售后提醒'],
  },
  {
    title: '企业协作与权控',
    color: '#f87171',
    items: ['Admin/Manager/Agent 角色', '会话分配与转接', 'VIP 优先处理', '投诉升级流程', '审计日志', '访问权限管理'],
  },
  {
    title: '高级知识库',
    color: '#06b6d4',
    items: ['部门级知识库分隔', 'SOP/文件/网页导入', '动态内容更新', '回答范围管控', '敏感内容限制', '准确性与一致性治理'],
  },
  {
    title: '深度分析报表',
    color: '#fbbf24',
    items: ['渠道效果分析', '线索来源追踪', 'AI 解决率', '人工干预率', '转化漏斗报告', '自定义报表导出'],
  },
];

const useCases = [
  '跨平台电商客服与销售辅助',
  '成长型企业统一 AI 互动层（官网 + 社交渠道 + 内部跟进）',
  '需要线索评分、报价流程与预约自动化的企业销售台',
  '多团队支持环境：升级处理、VIP 管理与分析报表',
  '客户互动数据需同步至 CRM、工单或内部系统的业务自动化项目',
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
  return (
    <>
      <Head>
        <title>ChatFlow Enterprise | STARBRIGHT SOLUTIONS</title>
        <meta name="description" content="ChatFlow Enterprise — AI 客户互动与业务自动化系统，面向成长型企业，涵盖全渠道接入、电商集成、销售转化流程、工作流自动化与深度分析报表。" />
        <meta property="og:title" content="ChatFlow Enterprise | STARBRIGHT SOLUTIONS" />
        <meta property="og:description" content="AI 客户互动与业务自动化系统 — 超越客服回复，深入路由、销售辅助、系统集成与业务增长。" />
        <meta property="og:image" content="/images/Products_ChatFlowEnterprise.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ChatFlow Enterprise | STARBRIGHT SOLUTIONS" />
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
              所有产品
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
                  ⚡ 开发中
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
                }}>+ 电商平台</span>
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
                AI 客户互动与业务自动化系统
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '16px',
                  color: 'rgba(255,255,255,0.55)', lineHeight: 1.8,
                  maxWidth: '540px', margin: '0 0 32px 0',
                }}>
                面向成长型企业与大型团队。统一多渠道客户互动、接入电商平台、支持销售转化流程，并将对话数据连接至内部业务系统，构建可衡量的业务增长支撑。
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
                  超越客服回复 — 路由、销售辅助、系统集成、业务增长
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
                  预约咨询
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
                  对比 Pro 版本
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
                  { value: '7+', label: '渠道接入' },
                  { value: '全功能', label: '含 Pro 全部' },
                  { value: '企业级', label: '权限与管控' },
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
            }}>企业级核心能力</h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px',
              color: 'rgba(255,255,255,0.45)', maxWidth: '480px', lineHeight: 1.75, margin: 0,
            }}>不只是更多功能，而是将 AI 对话能力延伸至销售转化、业务流程与战略决策层面。</p>
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
            }}>全功能模块详情</h2>
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
                  ChatFlow Enterprise 最适合需要多团队协同、平台集成与可量化转化支撑的企业——将 AI 系统定位为业务战略工具，而非仅仅是客服自动化。
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {['成长期企业与大型团队', '电商运营商（Shopee/Lazada/TikTok Shop）', '多部门业务需要统一管控的组织', '需要将 AI 互动数据接入 CRM 或内部系统的企业', '对转化率与 ROI 有明确追踪需求的管理团队'].map((item) => (
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
            }}>为成长型业务构建更完整的 AI 底座</h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px',
              color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, margin: '0 0 36px 0',
            }}>
              了解 ChatFlow Enterprise 如何帮助您的企业统一渠道、提升转化效率，并将客户互动数据接入整体业务体系。
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
                预约企业咨询
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
                查看 Pro 版本
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
