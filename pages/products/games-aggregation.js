import Head from 'next/head';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';

const highlights = [
  {
    icon: '🎮',
    title: '500+ 游戏一键接入',
    desc: '通过单一集成即可访问 500 多家顶级游戏供应商，覆盖老虎机、真人荷官、快速游戏等全品类，快速丰富您的游戏库。',
  },
  {
    icon: '⚡',
    title: '实时数据同步',
    desc: '所有游戏数据实时同步，包括余额、投注记录与中奖结果，确保玩家体验流畅无缝，后台数据准确可靠。',
  },
  {
    icon: '🔌',
    title: '单一 API 极速集成',
    desc: '无需逐一对接每家供应商，一次集成即完成全部接入。大幅降低技术复杂度与开发成本，缩短上线周期。',
  },
  {
    icon: '📊',
    title: '统一后台管理',
    desc: '所有游戏供应商、玩家数据与运营报表汇聚于一个管理界面，简化运营流程，提升管理效率。',
  },
  {
    icon: '🌍',
    title: '多语言多货币支持',
    desc: '内置多语言界面与多货币结算，轻松支持不同地区市场，帮助运营商快速拓展国际业务。',
  },
  {
    icon: '🛡️',
    title: '稳定可靠的技术架构',
    desc: '高可用架构设计，保障系统 24/7 稳定运行，为玩家提供不间断的优质游戏体验，减少业务损失。',
  },
];

const features = [
  { icon: '🎰', title: '老虎机 & 电子游艺', desc: '接入数百家顶级老虎机与电子游艺供应商，提供丰富多样的游戏选择。', color: '#06b6d4' },
  { icon: '🃏', title: '真人荷官游戏', desc: '集成顶级真人直播游戏，包括百家乐、轮盘、德州扑克等经典桌游。', color: '#22c55e' },
  { icon: '⚡', title: '快速游戏 & 彩票', desc: '覆盖快速开奖类游戏与在线彩票，满足追求即时刺激的玩家需求。', color: '#a78bfa' },
  { icon: '🔌', title: 'Seamless API 集成', desc: '标准化 API 接口，完整文档与沙箱环境支持，技术团队可快速完成对接。', color: '#f97316' },
  { icon: '📈', title: '实时报表与分析', desc: '多维度数据报表，帮助运营商实时掌握游戏表现、玩家行为与收益数据。', color: '#ec4899' },
];

const audiences = [
  '在线娱乐城运营商',
  '需要快速扩充游戏库的平台',
  '寻求技术简化与成本降低的运营团队',
  '计划进入多市场的游戏企业',
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

export default function GamesAggregationPage() {
  return (
    <>
      <Head>
        <title>Games Aggregation | STARBRIGHT SOLUTIONS</title>
        <meta name="description" content="Games Aggregation — 游戏聚合与集成平台，统一接入 500+ 游戏供应商，通过单一 API 实现快速集成与实时数据同步。" />
        <meta property="og:title" content="Games Aggregation | STARBRIGHT SOLUTIONS" />
        <meta property="og:description" content="统一接入 500+ 游戏供应商，覆盖老虎机、真人游戏、快速游戏等多种类型，通过单一 API 实现快速集成。" />
        <meta property="og:image" content="/images/Products_Games.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Games Aggregation | STARBRIGHT SOLUTIONS" />
        <meta name="twitter:description" content="游戏聚合与集成平台 — 500+ 供应商，单一 API 接入。" />
        <meta name="twitter:image" content="/images/Products_Games.png" />
      </Head>

      {/* ── Hero ── */}
      <section style={{
        position: 'relative', background: '#000', overflow: 'hidden',
        paddingTop: '60px', minHeight: '100vh', display: 'flex', alignItems: 'center',
      }}>
        <div className="bg-grid-dots" style={{ position: 'absolute', inset: 0 }} />
        <div style={{
          position: 'absolute', top: '20%', left: '5%', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'relative', maxWidth: '1200px', margin: '0 auto',
          padding: '100px 24px 80px', width: '100%',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '64px', alignItems: 'center',
        }} className="sb-m33-hero-grid">

          {/* Left copy */}
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
                background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.35)',
                color: '#22d3ee', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter',
              }}>
                <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }}
                  style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22d3ee' }} />
                🎮 开发中
              </span>
              <span style={{
                padding: '5px 14px', borderRadius: '999px',
                background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)',
                color: '#a5b4fc', fontSize: '12px', fontWeight: 500, fontFamily: 'Inter',
              }}>500+ 供应商</span>
              <span style={{
                padding: '5px 14px', borderRadius: '999px',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontFamily: 'Inter',
              }}>单一 API 接入</span>
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
              Games Aggregation
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: '18px',
                color: '#06b6d4', fontWeight: 500,
                margin: '0 0 20px 0', letterSpacing: '-0.01em',
              }}>
              游戏聚合与集成平台
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: '15px',
                lineHeight: 1.8, color: 'rgba(255,255,255,0.52)',
                maxWidth: '480px', margin: '0 0 32px 0',
              }}>
              统一接入 500+ 游戏供应商，覆盖老虎机、真人游戏、快速游戏等多种类型。通过单一 API 实现快速集成与实时数据同步，为运营商提供完整的游戏库解决方案，大幅降低技术门槛与运营成本。
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px', borderRadius: '999px',
                background: '#06b6d4', color: '#000',
                fontSize: '14px', fontWeight: 700,
                textDecoration: 'none', fontFamily: 'Inter',
                boxShadow: '0 0 24px rgba(6,182,212,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 0 36px rgba(6,182,212,0.5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(6,182,212,0.35)'; }}>
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

          {/* Right: Visual */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="sb-m33-visual"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px', paddingTop: '60px' }}>

            <div style={{
              width: '100%', borderRadius: '24px',
              border: '1px solid rgba(6,182,212,0.2)',
              position: 'relative', overflow: 'hidden',
              aspectRatio: '16/10',
              boxShadow: '0 0 60px rgba(6,182,212,0.1)',
            }}>
              <img
                src="/images/Products_Games.png" alt="Games Aggregation"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {[
                { label: 'Providers', value: '500+', color: '#06b6d4' },
                { label: 'Game Types', value: '10+', color: '#22c55e' },
                { label: 'Integration', value: 'Single API', color: '#a78bfa' },
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
            }}>
              核心优势
            </h2>
            <p style={{ fontFamily: 'Inter', fontSize: '16px', color: 'rgba(255,255,255,0.45)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              一站式游戏聚合方案，让运营商专注业务增长，而非技术集成
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
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(6,182,212,0.25)'}
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
            }}>
              产品功能
            </h2>
            <p style={{ fontFamily: 'Inter', fontSize: '15px', color: 'rgba(255,255,255,0.4)', maxWidth: '480px', lineHeight: 1.7 }}>
              覆盖游戏接入全流程，从集成到运营，一套方案搞定
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
                无论您是新兴运营商还是成熟平台，Games Aggregation 都能帮助您快速扩充游戏内容，降低接入成本。
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {audiences.map((a) => (
                  <div key={a} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
                      background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.4)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="3">
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
                border: '1px solid rgba(6,182,212,0.2)',
                background: 'linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(0,0,0,0) 100%)',
              }}>
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>🎮</div>
              <h3 style={{ fontFamily: 'Inter', fontSize: '18px', fontWeight: 700, color: '#fff', margin: '0 0 12px 0' }}>
                准备好扩充您的游戏库了吗？
              </h3>
              <p style={{ fontFamily: 'Inter', fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: '0 0 24px 0' }}>
                联系我们了解集成细节、供应商列表与定制方案，我们将为您提供专业的接入支持。
              </p>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', borderRadius: '999px',
                background: '#06b6d4', color: '#000',
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
