import Head from 'next/head';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';

const highlights = [
  {
    icon: '💳',
    title: '200+ 全球支付方式',
    desc: '集成信用卡、借记卡、电子钱包、网银转账、加密货币与各地区本地支付渠道，满足全球不同市场的玩家支付偏好。',
  },
  {
    icon: '🔒',
    title: '安全交易处理',
    desc: '采用银行级别加密技术与多层安全机制，保障每一笔交易的安全性与数据完整性，让玩家与运营商都安心无忧。',
  },
  {
    icon: '🌍',
    title: '多币种结算支持',
    desc: '支持主流法币与加密货币的实时汇率换算与多币种结算，帮助运营商轻松拓展国际市场，无缝处理跨境资金流转。',
  },
  {
    icon: '🛡️',
    title: '智能欺诈检测',
    desc: '基于机器学习的欺诈识别模型，实时分析交易风险，自动拦截可疑交易，将欺诈损失降至最低。',
  },
  {
    icon: '📊',
    title: '完整财务报表',
    desc: '详尽的交易明细、对账报告与财务统计，帮助运营商全面掌握资金流动状况，简化财务管理与审计流程。',
  },
  {
    icon: '⚡',
    title: '快速到账结算',
    desc: '优化结算流程，支持快速到账与灵活结算周期配置，改善资金流动效率，提升运营商的流动性管理能力。',
  },
];

const features = [
  { icon: '💳', title: '多渠道支付接入', desc: '信用卡、电子钱包、加密货币、本地支付等 200+ 支付方式统一管理。', color: '#ec4899' },
  { icon: '🔒', title: '安全加密传输', desc: 'PCI DSS 标准合规，端对端加密，保障每一笔交易的安全性。', color: '#06b6d4' },
  { icon: '🌍', title: '多币种支持', desc: '实时汇率换算，支持主流法币与加密货币，轻松应对国际市场。', color: '#22c55e' },
  { icon: '🤖', title: '智能欺诈防控', desc: 'AI 驱动的实时欺诈检测，自动识别并拦截异常交易行为。', color: '#a78bfa' },
  { icon: '📈', title: '财务数据报表', desc: '全面的交易统计与对账报告，支持数据导出与财务审计。', color: '#f97316' },
];

const audiences = [
  '在线娱乐城与体育博彩平台',
  '需要处理多国支付的跨境电商',
  '寻求安全合规支付解决方案的企业',
  '希望降低欺诈风险的金融类平台',
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

export default function PaymentGatewayPage() {
  return (
    <>
      <Head>
        <title>Payment Gateway | STARBRIGHT SOLUTIONS</title>
        <meta name="description" content="Payment Gateway — 支付网关集成方案，集成 200+ 全球支付方式，支持多币种、加密货币与欺诈检测，提供完整财务报表。" />
        <meta property="og:title" content="Payment Gateway | STARBRIGHT SOLUTIONS" />
        <meta property="og:description" content="集成 200+ 全球支付方式，安全交易处理、多币种支持、智能欺诈检测与完整财务报表。" />
        <meta property="og:image" content="/images/Products_Payment.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Payment Gateway | STARBRIGHT SOLUTIONS" />
        <meta name="twitter:description" content="支付网关集成方案 — 200+ 支付方式，多币种，智能欺诈检测。" />
        <meta name="twitter:image" content="/images/Products_Payment.png" />
      </Head>

      {/* ── Hero ── */}
      <section style={{
        position: 'relative', background: '#000', overflow: 'hidden',
        paddingTop: '60px', minHeight: '100vh', display: 'flex', alignItems: 'center',
      }}>
        <div className="bg-grid-dots" style={{ position: 'absolute', inset: 0 }} />
        <div style={{
          position: 'absolute', top: '20%', left: '5%', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)',
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
                background: 'rgba(236,72,153,0.12)', border: '1px solid rgba(236,72,153,0.35)',
                color: '#f472b6', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter',
              }}>
                <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }}
                  style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f472b6' }} />
                💳 开发中
              </span>
              <span style={{
                padding: '5px 14px', borderRadius: '999px',
                background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)',
                color: '#a5b4fc', fontSize: '12px', fontWeight: 500, fontFamily: 'Inter',
              }}>200+ 支付方式</span>
              <span style={{
                padding: '5px 14px', borderRadius: '999px',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontFamily: 'Inter',
              }}>加密货币支持</span>
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
              Payment Gateway
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: '18px',
                color: '#ec4899', fontWeight: 500,
                margin: '0 0 20px 0', letterSpacing: '-0.01em',
              }}>
              支付网关集成方案
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: '15px',
                lineHeight: 1.8, color: 'rgba(255,255,255,0.52)',
                maxWidth: '480px', margin: '0 0 32px 0',
              }}>
              集成 200+ 全球支付方式，包括信用卡、电子钱包、加密货币与本地支付渠道。提供安全的交易处理、多币种支持、欺诈检测与完整的财务报表，助力运营商在全球市场顺畅收款。
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px', borderRadius: '999px',
                background: '#ec4899', color: '#fff',
                fontSize: '14px', fontWeight: 700,
                textDecoration: 'none', fontFamily: 'Inter',
                boxShadow: '0 0 24px rgba(236,72,153,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 0 36px rgba(236,72,153,0.5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(236,72,153,0.35)'; }}>
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
              border: '1px solid rgba(236,72,153,0.2)',
              position: 'relative', overflow: 'hidden',
              aspectRatio: '16/10',
              boxShadow: '0 0 60px rgba(236,72,153,0.1)',
            }}>
              <img
                src="/images/Products_Payment.png" alt="Payment Gateway"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {[
                { label: 'Payment Methods', value: '200+', color: '#ec4899' },
                { label: 'Currencies', value: '50+', color: '#06b6d4' },
                { label: 'Crypto', value: 'Yes', color: '#22c55e' },
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
              安全、高效、全球化的支付解决方案，让收款不再是业务扩张的瓶颈
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
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(236,72,153,0.25)'}
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
              覆盖支付全流程，从接入到安全再到财务管理，一体化解决方案
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
                无论您的业务覆盖哪些地区与市场，我们的支付网关解决方案都能为您提供灵活、安全的收款能力。
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {audiences.map((a) => (
                  <div key={a} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
                      background: 'rgba(236,72,153,0.15)', border: '1px solid rgba(236,72,153,0.4)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="3">
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
                border: '1px solid rgba(236,72,153,0.2)',
                background: 'linear-gradient(135deg, rgba(236,72,153,0.05) 0%, rgba(0,0,0,0) 100%)',
              }}>
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>💳</div>
              <h3 style={{ fontFamily: 'Inter', fontSize: '18px', fontWeight: 700, color: '#fff', margin: '0 0 12px 0' }}>
                准备好优化您的支付体验了吗？
              </h3>
              <p style={{ fontFamily: 'Inter', fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: '0 0 24px 0' }}>
                告诉我们您的目标市场与支付需求，我们将为您定制最适合的支付网关集成方案。
              </p>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', borderRadius: '999px',
                background: '#ec4899', color: '#fff',
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
