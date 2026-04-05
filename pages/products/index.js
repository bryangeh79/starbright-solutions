import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  {
    id: 'm33-lotto-bot',
    status: 'live',
    statusLabel: '✦ 已上线',
    statusColor: '#34d399',
    statusBg: 'rgba(16,185,129,0.12)',
    statusBorder: 'rgba(16,185,129,0.3)',
    logo: '/images/Products_M33.png',
    logoBg: 'linear-gradient(135deg, #100900 0%, #241800 40%, #1a1100 100%)',
    logoFilter: 'drop-shadow(0 0 18px rgba(0,180,255,0.5)) drop-shadow(0 0 36px rgba(212,165,40,0.55)) drop-shadow(0 0 60px rgba(212,165,40,0.2))',
    name: 'M33 Lotto Bot',
    tagline: '智能化彩票平台管理机器人',
    desc: '为彩票业务打造的一站式自动化解决方案，结合自动化处理、实时数据整理、报表生成与多角色操作支持。',
    tags: ['Telegram Bot', '自动化', '多语言', '报表系统'],
    href: '/products/m33-lotto-bot',
    accentColor: '#d4a528',
    glowColor: 'rgba(212,165,40,0.15)',
  },
  {
    id: 'chatflow-pro',
    status: 'building',
    statusLabel: '⚡ 开发中',
    statusColor: '#a78bfa',
    statusBg: 'rgba(139,92,246,0.12)',
    statusBorder: 'rgba(139,92,246,0.3)',
    logo: '/images/Products_ChatFlowPro.png',
    logoBg: 'linear-gradient(135deg, #06040f 0%, #130b28 40%, #081018 100%)',
    logoFilter: 'drop-shadow(0 0 22px rgba(139,92,246,0.75)) drop-shadow(0 0 44px rgba(6,182,212,0.45)) drop-shadow(0 0 70px rgba(139,92,246,0.2))',
    name: 'ChatFlow Pro',
    tagline: 'AI 智能接待与客服自动化系统',
    desc: '为中小企业打造的 AI 客服解决方案，覆盖 Website、Telegram、WhatsApp、Facebook Messenger，快速响应、线索采集、团队协作一体化。',
    tags: ['AI 客服', '多渠道接入', '线索采集', '团队协作', '多语言'],
    href: '/products/chatflow-pro',
    accentColor: '#a78bfa',
    glowColor: 'rgba(139,92,246,0.18)',
  },
  {
    id: 'chatflow-enterprise',
    status: 'building',
    statusLabel: '⚡ 开发中',
    statusColor: '#d4a528',
    statusBg: 'rgba(212,165,40,0.12)',
    statusBorder: 'rgba(212,165,40,0.3)',
    logo: '/images/Products_ChatFlowEnterprise.png',
    logoBg: 'linear-gradient(135deg, #0e0b00 0%, #201600 40%, #150f00 100%)',
    logoFilter: 'drop-shadow(0 0 22px rgba(212,165,40,0.7)) drop-shadow(0 0 44px rgba(6,182,212,0.3)) drop-shadow(0 0 70px rgba(212,165,40,0.2))',
    name: 'ChatFlow Enterprise',
    tagline: 'AI 客户互动与业务自动化系统',
    desc: '面向成长型企业与大型团队的全功能 AI 系统，在 Pro 基础上扩展电商接入、销售转化流程、工作流自动化与深度分析报表。',
    tags: ['全渠道', '电商接入', '销售自动化', 'CRM 集成', '企业级'],
    href: '/products/chatflow-enterprise',
    accentColor: '#d4a528',
    glowColor: 'rgba(212,165,40,0.18)',
  },
  {
    id: 'games-aggregation',
    status: 'building',
    statusLabel: '🎮 开发中',
    statusColor: '#06b6d4',
    statusBg: 'rgba(6,182,212,0.12)',
    statusBorder: 'rgba(6,182,212,0.3)',
    logo: '/images/Products_Games.png',
    logoBg: 'linear-gradient(135deg, #051528 0%, #0a2847 40%, #061f3e 100%)',
    logoFilter: 'drop-shadow(0 0 22px rgba(6,182,212,0.6)) drop-shadow(0 0 44px rgba(34,197,94,0.3))',
    name: 'Games Aggregation',
    tagline: '游戏聚合与集成平台',
    desc: '统一接入 500+ 游戏供应商，覆盖老虎机、真人游戏、快速游戏等多种类型，通过单一 API 实现快速集成与实时数据同步，为运营商提供完整的游戏库解决方案。',
    tags: ['游戏聚合', '500+ 游戏', '单一API', '多供应商', '实时同步'],
    accentColor: '#06b6d4',
    glowColor: 'rgba(6,182,212,0.15)',
  },
  {
    id: 'sportsbook',
    status: 'building',
    statusLabel: '⚽ 开发中',
    statusColor: '#f97316',
    statusBg: 'rgba(249,115,22,0.12)',
    statusBorder: 'rgba(249,115,22,0.3)',
    logo: '/images/Products_Sports.png',
    logoBg: 'linear-gradient(135deg, #1c0a00 0%, #3d1500 40%, #2a0d00 100%)',
    logoFilter: 'drop-shadow(0 0 22px rgba(249,115,22,0.6)) drop-shadow(0 0 44px rgba(59,130,246,0.3))',
    name: 'Sportsbook',
    tagline: '体育博彩管理平台',
    desc: '覆盖全球主流赛事，提供可扩展的体育博彩解决方案。支持赔率实时管理、投注构建器、风险控制与数据分析，帮助运营商快速建立竞争力强的体育博彩业务。',
    tags: ['体育博彩', '赔率管理', '实时更新', '风险控制', '数据分析'],
    accentColor: '#f97316',
    glowColor: 'rgba(249,115,22,0.15)',
  },
  {
    id: 'api-support',
    status: 'building',
    statusLabel: '⚙️ 开发中',
    statusColor: '#22c55e',
    statusBg: 'rgba(34,197,94,0.12)',
    statusBorder: 'rgba(34,197,94,0.3)',
    logo: '/images/Products_API.png',
    logoBg: 'linear-gradient(135deg, #052e16 0%, #0d472a 40%, #07291e 100%)',
    logoFilter: 'drop-shadow(0 0 22px rgba(34,197,94,0.6)) drop-shadow(0 0 44px rgba(59,130,246,0.3))',
    name: 'API Support',
    tagline: '游戏 API 技术支援',
    desc: '提供 24/7 专业技术支援与集成咨询，协助运营商快速集成游戏供应商 API、处理技术问题、优化系统性能。包括详细文档、沙箱环境与实时故障排查。',
    tags: ['24/7 支持', 'API集成', '技术咨询', '沙箱环境', '实时排查'],
    accentColor: '#22c55e',
    glowColor: 'rgba(34,197,94,0.15)',
  },
  {
    id: 'payment-gateway',
    status: 'building',
    statusLabel: '💳 开发中',
    statusColor: '#ec4899',
    statusBg: 'rgba(236,72,153,0.12)',
    statusBorder: 'rgba(236,72,153,0.3)',
    logo: '/images/Products_Payment.png',
    logoBg: 'linear-gradient(135deg, #1f0531 0%, #4a1449 40%, #36023f 100%)',
    logoFilter: 'drop-shadow(0 0 22px rgba(236,72,153,0.6)) drop-shadow(0 0 44px rgba(59,130,246,0.3))',
    name: 'Payment Gateway',
    tagline: '支付网关集成方案',
    desc: '集成 200+ 全球支付方式，包括信用卡、电子钱包、加密货币与本地支付渠道。提供安全的交易处理、多币种支持、欺诈检测与完整的财务报表。',
    tags: ['200+ 支付方式', '多币种', '加密货币', '安全交易', '欺诈检测'],
    accentColor: '#ec4899',
    glowColor: 'rgba(236,72,153,0.15)',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ProductsPage() {
  return (
    <>
      <Head>
        <title>产品 | STARBRIGHT SOLUTIONS</title>
        <meta name="description" content="STARBRIGHT SOLUTIONS 智能产品矩阵：M33 Lotto Bot、ChatFlow Pro 与 ChatFlow Enterprise — 整合前沿 AI 技术，精心打造真正能用、好用的智能化解决方案。" />
        <meta property="og:title" content="产品 | STARBRIGHT SOLUTIONS" />
        <meta property="og:description" content="整合前沿 AI 技术与多年业务实战经验，精心打造真正能用、好用的智能化解决方案。" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="产品 | STARBRIGHT SOLUTIONS" />
        <meta name="twitter:description" content="M33 Lotto Bot 已上线，ChatFlow Pro 与 Enterprise 开发中。" />
      </Head>

      {/* ── Hero ── */}
      <section style={{
        position: 'relative', background: '#000', overflow: 'hidden',
        paddingTop: '60px', minHeight: '46vh', display: 'flex', alignItems: 'center',
      }}>
        <div className="bg-grid-dots" style={{ position: 'absolute', inset: 0 }} />
        <div style={{
          position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
          width: '700px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.13) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '80px 24px 64px' }}>
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
              Our Products
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(36px, 4.5vw, 60px)',
              fontWeight: 700, lineHeight: 1.1,
              letterSpacing: '-0.03em', color: '#fff',
              margin: '0 0 18px 0',
            }}>
            我们的智能产品
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: '16px',
              lineHeight: 1.75, color: 'rgba(255,255,255,0.5)',
              maxWidth: '520px', margin: 0,
            }}>
            整合前沿 AI 技术与多年业务实战经验，精心打造真正能用、好用的智能化解决方案。
          </motion.p>
        </div>
      </section>

      {/* ── Products Grid ── */}
      <section style={{ background: '#080808', padding: '80px 0 112px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px' }}
            className="sb-products-index-grid">
            {products.map((p, i) => (
              <motion.div key={p.id} variants={fadeUp} custom={i * 0.1}>
                {p.href ? (
                  <a href={p.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                    <ProductCard p={p} />
                  </a>
                ) : (
                  <ProductCard p={p} />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .sb-products-index-grid { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important; }
        }
        @media (max-width: 640px) {
          .sb-products-index-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

function ProductCard({ p }) {
  return (
    <div style={{
      borderRadius: '20px',
      border: '1px solid rgba(255,255,255,0.09)',
      background: 'rgba(255,255,255,0.03)',
      overflow: 'hidden',
      transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.2s',
      cursor: p.href ? 'pointer' : 'default',
      height: '100%', display: 'flex', flexDirection: 'column',
    }}
      onMouseEnter={(e) => {
        if (!p.href) return;
        e.currentTarget.style.borderColor = p.accentColor + '55';
        e.currentTarget.style.boxShadow = '0 0 0 1px ' + p.accentColor + '20, 0 12px 48px ' + p.glowColor;
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}>

      {/* Visual header */}
      <div style={{
        background: p.logoBg || 'linear-gradient(135deg, #0a0a18 0%, #12102a 100%)',
        minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden', padding: '32px',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% 60%, ' + p.glowColor.replace('0.15', '0.45').replace('0.18', '0.45') + ' 0%, ' + p.glowColor.replace('0.15', '0.15').replace('0.18', '0.15') + ' 45%, transparent 72%)',
        }} />
        {p.logo ? (
          <Image src={p.logo} alt={p.name}
            width={480} height={200}
            priority={false}
            loading="lazy"
            style={{
              objectFit: 'cover', position: 'absolute', inset: 0,
              width: '100%', height: '100%', zIndex: 1,
              borderRadius: '0',
            }} />
        ) : (
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>🤖</div>
            <div style={{
              padding: '6px 16px', borderRadius: '999px',
              background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.4)',
              color: '#a5b4fc', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter',
            }}>Coming Soon</div>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '16px' }}>
          <span style={{
            padding: '3px 10px', borderRadius: '999px',
            background: p.statusBg, border: '1px solid ' + p.statusBorder,
            fontSize: '11px', fontWeight: 600, color: p.statusColor, fontFamily: 'Inter',
          }}>{p.statusLabel}</span>
        </div>

        <h3 style={{
          fontFamily: 'Inter, sans-serif', fontSize: '20px', fontWeight: 700,
          color: '#fff', letterSpacing: '-0.03em', margin: '0 0 6px 0',
        }}>{p.name}</h3>

        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: '12px',
          color: p.accentColor, fontWeight: 600, margin: '0 0 12px 0',
          letterSpacing: '0.02em', textTransform: 'uppercase',
        }}>{p.tagline}</p>

        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: '13px',
          color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: '0 0 20px 0',
          flex: 1,
        }}>{p.desc}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {p.tags.map((t) => (
            <span key={t} style={{
              padding: '3px 10px', borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.1)',
              fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter',
            }}>{t}</span>
          ))}
        </div>

        {p.href ? (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '13px', fontWeight: 600, color: p.accentColor, fontFamily: 'Inter',
          }}>
            了解详情
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        ) : (
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter' }}>
            即将推出 · 可提前预约了解
          </div>
        )}
      </div>
    </div>
  );
}
