import Head from 'next/head';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';

const highlights = [
  {
    icon: '🕐',
    title: '24/7 专业技术支援',
    desc: '全天候技术团队待命，无论何时遇到 API 集成问题、系统故障或性能瓶颈，我们都能快速响应，确保业务不间断运行。',
  },
  {
    icon: '📄',
    title: '完整 API 文档',
    desc: '提供详尽、结构清晰的 API 文档，涵盖端点说明、参数定义、请求示例与错误代码，帮助开发团队快速理解并高效集成。',
  },
  {
    icon: '🧪',
    title: '沙箱测试环境',
    desc: '独立沙箱环境让开发者在不影响生产系统的前提下充分测试集成方案，降低上线风险，保障集成质量。',
  },
  {
    icon: '⚡',
    title: '快速故障排查',
    desc: '专业技术工程师提供实时故障诊断与修复支持，精准定位问题根因，最短时间内恢复系统正常运行。',
  },
  {
    icon: '🔧',
    title: '集成咨询顾问',
    desc: '从架构规划到具体实施，提供一对一技术咨询，帮助您制定最优的 API 集成方案，避免常见坑点与性能隐患。',
  },
  {
    icon: '📈',
    title: '性能优化建议',
    desc: '基于实际业务场景，提供针对性的 API 调用优化策略，提升系统响应速度与稳定性，支持业务规模扩展。',
  },
];

const features = [
  { icon: '🔌', title: 'API 集成支持', desc: '协助完成游戏供应商 API 接入，提供分步指导与代码示例，快速完成对接。', color: '#22c55e' },
  { icon: '📋', title: '技术文档库', desc: '完整的 API 参考文档，持续更新维护，支持团队随时查阅与自助解决问题。', color: '#06b6d4' },
  { icon: '🧪', title: '沙箱环境', desc: '专用测试沙箱，模拟真实生产环境，支持全面的集成验证与压力测试。', color: '#a78bfa' },
  { icon: '🛡️', title: '实时故障排查', desc: '7×24 小时故障响应机制，技术工程师实时协助定位与解决生产问题。', color: '#f97316' },
  { icon: '📊', title: 'API 性能监控', desc: '实时监控 API 调用状态与响应时间，主动预警潜在问题，保障系统稳定。', color: '#ec4899' },
];

const audiences = [
  '需要对接游戏供应商 API 的开发团队',
  '遇到技术集成问题的运营商',
  '希望优化现有 API 性能的企业',
  '需要专业技术顾问支持的项目团队',
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

export default function ApiSupportPage() {
  return (
    <>
      <Head>
        <title>API Support | STARBRIGHT SOLUTIONS</title>
        <meta name="description" content="API Support — 游戏 API 技术支援，提供 24/7 专业技术支持、详细文档、沙箱环境与实时故障排查服务。" />
        <meta property="og:title" content="API Support | STARBRIGHT SOLUTIONS" />
        <meta property="og:description" content="24/7 游戏 API 技术支援，协助运营商快速集成、处理技术问题、优化系统性能。" />
        <meta property="og:image" content="/images/Products_API.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="API Support | STARBRIGHT SOLUTIONS" />
        <meta name="twitter:description" content="游戏 API 技术支援 — 24/7 支持，完整文档，沙箱环境。" />
        <meta name="twitter:image" content="/images/Products_API.png" />
      </Head>

      {/* ── Hero ── */}
      <section style={{
        position: 'relative', background: '#000', overflow: 'hidden',
        paddingTop: '60px', minHeight: '100vh', display: 'flex', alignItems: 'center',
      }}>
        <div className="bg-grid-dots" style={{ position: 'absolute', inset: 0 }} />
        <div style={{
          position: 'absolute', top: '20%', left: '5%', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'relative', maxWidth: '1200px', margin: '0 auto',
          padding: '100px 24px 80px', width: '100%',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '64px', alignItems: 'center',
        }} className="sb-m33-hero-grid">

          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }} style={{ marginBottom: '24px' }}>
              <a href="/products" style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '13px', color: 'rgba(255,255,255,0.35)',
                textDecoration: 'none', fontFamily: 'Inter',
                transition: 'color 0.2s',
              }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                产品列表
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '5px 14px', borderRadius: '999px',
                background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.35)',
                color: '#4ade80', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter',
              }}>
                <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }}
                  style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }} />
                ⚙️ 开发中
              </span>
              <span style={{
                padding: '5px 14px', borderRadius: '999px',
                background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)',
                color: '#a5b4fc', fontSize: '12px', fontWeight: 500, fontFamily: 'Inter',
              }}>24/7 支持</span>
              <span style={{
                padding: '5px 14px', borderRadius: '999px',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontFamily: 'Inter',
              }}>沙箱环境</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(38px, 4.5vw, 62px)',
                fontWeight: 800, lineHeight: 1.08,
                letterSpacing: '-0.04em', color: '#fff',
                margin: '0 0 14px 0',
              }}>
              API Support
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: '18px',
                color: '#22c55e', fontWeight: 500,
                margin: '0 0 20px 0', letterSpacing: '-0.01em',
              }}>
              游戏 API 技术支援
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: '15px',
                lineHeight: 1.8, color: 'rgba(255,255,255,0.52)',
                maxWidth: '480px', margin: '0 0 32px 0',
              }}>
              提供 24/7 专业技术支援与集成咨询，协助运营商快速集成游戏供应商 API、处理技术问题、优化系统性能。包括详细文档、沙箱环境与实时故障排查，让您的技术团队始终有坚实后盾。
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px', borderRadius: '999px',
                background: '#22c55e', color: '#000',
                fontSize: '14px', fontWeight: 700,
                textDecoration: 'none', fontFamily: 'Inter',
                boxShadow: '0 0 24px rgba(34,197,94,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 0 36px rgba(34,197,94,0.5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(34,197,94,0.35)'; }}>
                立即咨询
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="/products" style={{
                display: 'inline-flex', alignItems: 'center', padding: '13px 28px',
                borderRadius: '999px', border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.65)', fontSize: '14px', fontWeight: 500,
                textDecoration: 'none', fontFamily: 'Inter',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}>
                查看所有产品
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="sb-m33-visual"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px', paddingTop: '60px' }}>

            <div style={{
              width: '100%', borderRadius: '24px',
              border: '1px solid rgba(34,197,94,0.2)',
              position: 'relative', overflow: 'hidden',
              aspectRatio: '16/10',
              boxShadow: '0 0 60px rgba(34,197,94,0.1)',
            }}>
              <img
                src="/images/Products_API.png" alt="API Support"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {[
                { label: 'Support', value: '24/7', color: '#22c55e' },
                { label: 'Response', value: '<1h', color: '#06b6d4' },
                { label: 'Sandbox', value: 'Yes', color: '#a78bfa' },
              ].map((s) => (
                <div key={s.label} style={{
                  padding: '14px 16px', borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)', textAlign: 'center',
                }}>
                  <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace', marginBottom: '6px', letterSpacing: '0.06em' }}>{s.label}</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: s.color, fontFamily: 'monospace' }}>{s.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section style={{ background: '#080808', padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(28px, 3vw, 42px)',
              fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 16px 0',
            }}>核心优势</h2>
            <p style={{ fontFamily: 'Inter', fontSize: '16px', color: 'rgba(255,255,255,0.45)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              专业的技术支援团队，让 API 集成不再是业务推进的障碍
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {highlights.map((h, i) => (
              <motion.div key={h.title} variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i * 0.05}
                style={{
                  padding: '28px', borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: 'rgba(255,255,255,0.02)',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(34,197,94,0.25)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}>
                <div style={{ fontSize: '28px', marginBottom: '16px' }}>{h.icon}</div>
                <h3 style={{ fontFamily: 'Inter', fontSize: '15px', fontWeight: 700, color: '#fff', margin: '0 0 10px 0' }}>{h.title}</h3>
                <p style={{ fontFamily: 'Inter', fontSize: '13px', lineHeight: 1.75, color: 'rgba(255,255,255,0.45)', margin: 0 }}>{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ background: '#000', padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginBottom: '52px' }}>
            <h2 style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 2.8vw, 38px)',
              fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 14px 0',
            }}>服务内容</h2>
            <p style={{ fontFamily: 'Inter', fontSize: '15px', color: 'rgba(255,255,255,0.4)', maxWidth: '480px', lineHeight: 1.7 }}>
              从文档到实时支持，全流程陪伴您的技术团队完成集成
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
            {features.map((f, i) => (
              <motion.div key={f.title} variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i * 0.06}
                style={{
                  padding: '24px 20px', borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: 'rgba(255,255,255,0.02)',
                }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: `${f.color}18`, border: `1px solid ${f.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', marginBottom: '14px',
                }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: 700, color: '#fff', margin: '0 0 8px 0' }}>{f.title}</h3>
                <p style={{ fontFamily: 'Inter', fontSize: '12px', lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', margin: 0 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Audience ── */}
      <section style={{ background: '#080808', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="sb-m33-hero-grid">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 style={{
                fontFamily: 'Inter', fontSize: 'clamp(24px, 2.5vw, 36px)',
                fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 16px 0',
              }}>适合哪些团队？</h2>
              <p style={{ fontFamily: 'Inter', fontSize: '15px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: '0 0 28px 0' }}>
                无论您的技术团队规模大小，我们的 API 支援服务都能帮助您高效完成集成，专注于业务本身。
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {audiences.map((a) => (
                  <div key={a} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
                      background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.4)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span style={{ fontFamily: 'Inter', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>{a}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              style={{
                padding: '36px', borderRadius: '20px',
                border: '1px solid rgba(34,197,94,0.2)',
                background: 'linear-gradient(135deg, rgba(34,197,94,0.05) 0%, rgba(0,0,0,0) 100%)',
              }}>
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>⚙️</div>
              <h3 style={{ fontFamily: 'Inter', fontSize: '18px', fontWeight: 700, color: '#fff', margin: '0 0 12px 0' }}>
                需要技术集成支援？
              </h3>
              <p style={{ fontFamily: 'Inter', fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: '0 0 24px 0' }}>
                告诉我们您的集成需求与技术环境，我们将为您制定专属的支援方案，助力项目顺利推进。
              </p>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', borderRadius: '999px',
                background: '#22c55e', color: '#000',
                fontSize: '14px', fontWeight: 700,
                textDecoration: 'none', fontFamily: 'Inter',
              }}>
                立即咨询
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
