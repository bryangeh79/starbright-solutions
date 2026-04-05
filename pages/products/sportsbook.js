import Head from 'next/head';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';

const highlights = [
  {
    icon: '⚽',
    title: '覆盖全球主流赛事',
    desc: '实时接入足球、篮球、网球、棒球等全球主流体育赛事，为玩家提供丰富的投注选项，覆盖联赛级别从顶级联赛到地方赛事。',
  },
  {
    icon: '📊',
    title: '实时赔率管理',
    desc: '动态赔率引擎，支持实时赔率更新与灵活调整，帮助运营商精准把控盈利空间，快速响应市场变化。',
  },
  {
    icon: '🏗️',
    title: '投注构建器',
    desc: '让玩家自由组合多场赛事与多种投注类型，打造专属复式投注，提升玩家参与度与平均投注金额。',
  },
  {
    icon: '🛡️',
    title: '智能风险控制',
    desc: '内置多层风险管理机制，实时监控异常投注行为，自动触发预警与限额保护，有效控制运营风险。',
  },
  {
    icon: '📈',
    title: '深度数据分析',
    desc: '全面的赛事数据、玩家行为分析与收益报表，帮助运营商做出更有依据的决策，持续优化业务表现。',
  },
  {
    icon: '⚡',
    title: '滚球投注支持',
    desc: '支持赛事进行中的实时滚球投注，提供流畅的即时体验，满足追求实时刺激感的玩家需求。',
  },
];

const features = [
  { icon: '⚽', title: '多项目体育覆盖', desc: '足球、篮球、网球、棒球、板球等全球主流体育项目一网打尽。', color: '#f97316' },
  { icon: '📡', title: '实时赔率更新', desc: '赔率引擎实时驱动，赛事数据变动即时反映，保持竞争力。', color: '#06b6d4' },
  { icon: '🔒', title: '风险控制系统', desc: '多维度风险模型，自动识别异常、设置投注限额与保护机制。', color: '#22c55e' },
  { icon: '🏆', title: '投注构建器', desc: '玩家可自定义组合多场赛事，打造高赔率串关投注体验。', color: '#a78bfa' },
  { icon: '📊', title: '运营数据报表', desc: '全面的业务数据可视化，帮助管理团队实时掌握经营状态。', color: '#ec4899' },
];

const audiences = [
  '体育博彩平台运营商',
  '需要完善赔率管理系统的团队',
  '计划推出体育产品线的娱乐城',
  '寻求专业风险控制解决方案的企业',
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

export default function SportsbookPage() {
  return (
    <>
      <Head>
        <title>Sportsbook | STARBRIGHT SOLUTIONS</title>
        <meta name="description" content="Sportsbook — 体育博彩管理平台，覆盖全球主流赛事，提供赔率实时管理、投注构建器、风险控制与数据分析。" />
        <meta property="og:title" content="Sportsbook | STARBRIGHT SOLUTIONS" />
        <meta property="og:description" content="覆盖全球主流赛事的体育博彩管理平台，赔率实时管理、智能风险控制、深度数据分析。" />
        <meta property="og:image" content="/images/Products_Sports.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sportsbook | STARBRIGHT SOLUTIONS" />
        <meta name="twitter:description" content="体育博彩管理平台 — 全球赛事覆盖，实时赔率，专业风控。" />
        <meta name="twitter:image" content="/images/Products_Sports.png" />
      </Head>

      {/* ── Hero ── */}
      <section style={{
        position: 'relative', background: '#000', overflow: 'hidden',
        paddingTop: '60px', minHeight: '100vh', display: 'flex', alignItems: 'center',
      }}>
        <div className="bg-grid-dots" style={{ position: 'absolute', inset: 0 }} />
        <div style={{
          position: 'absolute', top: '20%', left: '5%', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)',
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
                background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.35)',
                color: '#fb923c', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter',
              }}>
                <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }}
                  style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fb923c' }} />
                ⚽ 开发中
              </span>
              <span style={{
                padding: '5px 14px', borderRadius: '999px',
                background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)',
                color: '#a5b4fc', fontSize: '12px', fontWeight: 500, fontFamily: 'Inter',
              }}>实时赔率</span>
              <span style={{
                padding: '5px 14px', borderRadius: '999px',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontFamily: 'Inter',
              }}>风险控制</span>
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
              Sportsbook
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: '18px',
                color: '#f97316', fontWeight: 500,
                margin: '0 0 20px 0', letterSpacing: '-0.01em',
              }}>
              体育博彩管理平台
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: '15px',
                lineHeight: 1.8, color: 'rgba(255,255,255,0.52)',
                maxWidth: '480px', margin: '0 0 32px 0',
              }}>
              覆盖全球主流赛事，提供可扩展的体育博彩解决方案。支持赔率实时管理、投注构建器、风险控制与数据分析，帮助运营商快速建立竞争力强的体育博彩业务。
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px', borderRadius: '999px',
                background: '#f97316', color: '#000',
                fontSize: '14px', fontWeight: 700,
                textDecoration: 'none', fontFamily: 'Inter',
                boxShadow: '0 0 24px rgba(249,115,22,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 0 36px rgba(249,115,22,0.5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(249,115,22,0.35)'; }}>
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
              border: '1px solid rgba(249,115,22,0.2)',
              position: 'relative', overflow: 'hidden',
              aspectRatio: '16/10',
              boxShadow: '0 0 60px rgba(249,115,22,0.1)',
            }}>
              <img
                src="/images/Products_Sports.png" alt="Sportsbook"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {[
                { label: 'Sports', value: '30+', color: '#f97316' },
                { label: 'Markets', value: '1000+', color: '#06b6d4' },
                { label: 'Live Betting', value: 'Yes', color: '#22c55e' },
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
              专业体育博彩平台，帮助运营商快速进入市场并持续保持竞争优势
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
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.25)'}
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
            }}>产品功能</h2>
            <p style={{ fontFamily: 'Inter', fontSize: '15px', color: 'rgba(255,255,255,0.4)', maxWidth: '480px', lineHeight: 1.7 }}>
              从赛事数据到风险管理，全方位保障体育博彩业务的稳健运营
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
                无论是初创体育博彩平台，还是希望提升现有系统能力的成熟运营商，我们都能提供匹配的解决方案。
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {audiences.map((a) => (
                  <div key={a} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
                      background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.4)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="3">
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
                border: '1px solid rgba(249,115,22,0.2)',
                background: 'linear-gradient(135deg, rgba(249,115,22,0.05) 0%, rgba(0,0,0,0) 100%)',
              }}>
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>⚽</div>
              <h3 style={{ fontFamily: 'Inter', fontSize: '18px', fontWeight: 700, color: '#fff', margin: '0 0 12px 0' }}>
                准备好建立您的体育博彩平台了吗？
              </h3>
              <p style={{ fontFamily: 'Inter', fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: '0 0 24px 0' }}>
                联系我们了解赛事覆盖范围、赔率系统架构与定制化风险管理方案，助力您的业务快速起步。
              </p>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', borderRadius: '999px',
                background: '#f97316', color: '#000',
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
