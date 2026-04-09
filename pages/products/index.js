import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next/pages';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';

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

function ProductCard({ p, learnMore, comingSoon }) {
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
            style={{ objectFit: 'cover', position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, borderRadius: '0' }} />
        ) : (
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>🤖</div>
            <div style={{ padding: '6px 16px', borderRadius: '999px', background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.4)', color: '#a5b4fc', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter' }}>Coming Soon</div>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '16px' }}>
          <span style={{ padding: '3px 10px', borderRadius: '999px', background: p.statusBg, border: '1px solid ' + p.statusBorder, fontSize: '11px', fontWeight: 600, color: p.statusColor, fontFamily: 'Inter' }}>{p.statusLabel}</span>
        </div>

        <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', margin: '0 0 6px 0' }}>{p.name}</h3>

        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: p.accentColor, fontWeight: 600, margin: '0 0 12px 0', letterSpacing: '0.02em', textTransform: 'uppercase' }}>{p.tagline}</p>

        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: '0 0 20px 0', flex: 1 }}>{p.desc}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {p.tags.map((tag) => (
            <span key={tag} style={{ padding: '3px 10px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter' }}>{tag}</span>
          ))}
        </div>

        {p.href ? (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: p.accentColor, fontFamily: 'Inter' }}>
            {learnMore}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        ) : (
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter' }}>{comingSoon}</div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const { t } = useTranslation('common');

  const products = [
    {
      id: 'm33-lotto-bot',
      status: 'live',
      statusLabel: t('products_page.m33_status'),
      statusColor: '#34d399',
      statusBg: 'rgba(16,185,129,0.12)',
      statusBorder: 'rgba(16,185,129,0.3)',
      logo: '/images/Products_M33.png',
      logoBg: 'linear-gradient(135deg, #100900 0%, #241800 40%, #1a1100 100%)',
      logoFilter: 'drop-shadow(0 0 18px rgba(0,180,255,0.5)) drop-shadow(0 0 36px rgba(212,165,40,0.55))',
      name: 'M33 Lotto Bot',
      tagline: t('products_page.m33_tagline'),
      desc: t('products_page.m33_desc'),
      tags: [t('products_page.m33_t1'), t('products_page.m33_t2'), t('products_page.m33_t3'), t('products_page.m33_t4')],
      href: '/products/m33-lotto-bot',
      accentColor: '#d4a528',
      glowColor: 'rgba(212,165,40,0.15)',
    },
    {
      id: 'chatflow-pro',
      status: 'building',
      statusLabel: t('products_page.cfp_status'),
      statusColor: '#a78bfa',
      statusBg: 'rgba(139,92,246,0.12)',
      statusBorder: 'rgba(139,92,246,0.3)',
      logo: '/images/Products_ChatFlowPro.png',
      logoBg: 'linear-gradient(135deg, #06040f 0%, #130b28 40%, #081018 100%)',
      logoFilter: 'drop-shadow(0 0 22px rgba(139,92,246,0.75)) drop-shadow(0 0 44px rgba(6,182,212,0.45))',
      name: 'ChatFlow Pro',
      tagline: t('products_page.cfp_tagline'),
      desc: t('products_page.cfp_desc'),
      tags: [t('products_page.cfp_t1'), t('products_page.cfp_t2'), t('products_page.cfp_t3'), t('products_page.cfp_t4'), t('products_page.cfp_t5')],
      href: '/products/chatflow-pro',
      accentColor: '#a78bfa',
      glowColor: 'rgba(139,92,246,0.18)',
    },
    {
      id: 'chatflow-enterprise',
      status: 'building',
      statusLabel: t('products_page.cfe_status'),
      statusColor: '#d4a528',
      statusBg: 'rgba(212,165,40,0.12)',
      statusBorder: 'rgba(212,165,40,0.3)',
      logo: '/images/Products_ChatFlowEnterprise.png',
      logoBg: 'linear-gradient(135deg, #0e0b00 0%, #201600 40%, #150f00 100%)',
      logoFilter: 'drop-shadow(0 0 22px rgba(212,165,40,0.7)) drop-shadow(0 0 44px rgba(6,182,212,0.3))',
      name: 'ChatFlow Enterprise',
      tagline: t('products_page.cfe_tagline'),
      desc: t('products_page.cfe_desc'),
      tags: [t('products_page.cfe_t1'), t('products_page.cfe_t2'), t('products_page.cfe_t3'), t('products_page.cfe_t4'), t('products_page.cfe_t5')],
      href: '/products/chatflow-enterprise',
      accentColor: '#d4a528',
      glowColor: 'rgba(212,165,40,0.18)',
    },
    {
      id: 'games-aggregation',
      status: 'building',
      statusLabel: t('products_page.games_status'),
      statusColor: '#06b6d4',
      statusBg: 'rgba(6,182,212,0.12)',
      statusBorder: 'rgba(6,182,212,0.3)',
      logo: '/images/Products_Games.png',
      logoBg: 'linear-gradient(135deg, #051528 0%, #0a2847 40%, #061f3e 100%)',
      logoFilter: 'drop-shadow(0 0 22px rgba(6,182,212,0.6)) drop-shadow(0 0 44px rgba(34,197,94,0.3))',
      name: 'Games Aggregation',
      tagline: t('products_page.games_tagline'),
      desc: t('products_page.games_desc'),
      tags: [t('products_page.games_t1'), t('products_page.games_t2'), t('products_page.games_t3'), t('products_page.games_t4'), t('products_page.games_t5')],
      href: '/products/games-aggregation',
      accentColor: '#06b6d4',
      glowColor: 'rgba(6,182,212,0.15)',
    },
    {
      id: 'sportsbook',
      status: 'building',
      statusLabel: t('products_page.sports_status'),
      statusColor: '#f97316',
      statusBg: 'rgba(249,115,22,0.12)',
      statusBorder: 'rgba(249,115,22,0.3)',
      logo: '/images/Products_Sports.png',
      logoBg: 'linear-gradient(135deg, #1c0a00 0%, #3d1500 40%, #2a0d00 100%)',
      logoFilter: 'drop-shadow(0 0 22px rgba(249,115,22,0.6)) drop-shadow(0 0 44px rgba(59,130,246,0.3))',
      name: 'Sportsbook',
      tagline: t('products_page.sports_tagline'),
      desc: t('products_page.sports_desc'),
      tags: [t('products_page.sports_t1'), t('products_page.sports_t2'), t('products_page.sports_t3'), t('products_page.sports_t4'), t('products_page.sports_t5')],
      href: '/products/sportsbook',
      accentColor: '#f97316',
      glowColor: 'rgba(249,115,22,0.15)',
    },
    {
      id: 'api-support',
      status: 'building',
      statusLabel: t('products_page.api_status'),
      statusColor: '#22c55e',
      statusBg: 'rgba(34,197,94,0.12)',
      statusBorder: 'rgba(34,197,94,0.3)',
      logo: '/images/Products_API.png',
      logoBg: 'linear-gradient(135deg, #052e16 0%, #0d472a 40%, #07291e 100%)',
      logoFilter: 'drop-shadow(0 0 22px rgba(34,197,94,0.6)) drop-shadow(0 0 44px rgba(59,130,246,0.3))',
      name: 'API Support',
      tagline: t('products_page.api_tagline'),
      desc: t('products_page.api_desc'),
      tags: [t('products_page.api_t1'), t('products_page.api_t2'), t('products_page.api_t3'), t('products_page.api_t4'), t('products_page.api_t5')],
      href: '/products/api-support',
      accentColor: '#22c55e',
      glowColor: 'rgba(34,197,94,0.15)',
    },
    {
      id: 'payment-gateway',
      status: 'building',
      statusLabel: t('products_page.pay_status'),
      statusColor: '#ec4899',
      statusBg: 'rgba(236,72,153,0.12)',
      statusBorder: 'rgba(236,72,153,0.3)',
      logo: '/images/Products_Payment.png',
      logoBg: 'linear-gradient(135deg, #1f0531 0%, #4a1449 40%, #36023f 100%)',
      logoFilter: 'drop-shadow(0 0 22px rgba(236,72,153,0.6)) drop-shadow(0 0 44px rgba(59,130,246,0.3))',
      name: 'Payment Gateway',
      tagline: t('products_page.pay_tagline'),
      desc: t('products_page.pay_desc'),
      tags: [t('products_page.pay_t1'), t('products_page.pay_t2'), t('products_page.pay_t3'), t('products_page.pay_t4'), t('products_page.pay_t5')],
      href: '/products/payment-gateway',
      accentColor: '#ec4899',
      glowColor: 'rgba(236,72,153,0.15)',
    },
  ];

  const learnMore = t('products_page.learn_more');
  const comingSoon = t('products_page.coming_soon');

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
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(36px, 4.5vw, 60px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 18px 0' }}>
            {t('products_page.hero_title')}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: '520px', margin: 0 }}>
            {t('products_page.hero_desc')}
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
                    <ProductCard p={p} learnMore={learnMore} comingSoon={comingSoon} />
                  </a>
                ) : (
                  <ProductCard p={p} learnMore={learnMore} comingSoon={comingSoon} />
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
