import Head from 'next/head';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <Head>
        <title>404 · 页面不存在 | STARBRIGHT SOLUTIONS</title>
      </Head>

      <section style={{
        position: 'relative', background: '#000', overflow: 'hidden',
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        paddingTop: '60px',
      }}>
        <div className="bg-grid-dots" style={{ position: 'absolute', inset: 0 }} />

        {/* Orb */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -60%)',
          width: '600px', height: '600px',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.14) 0%, transparent 68%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'relative', textAlign: 'center',
          maxWidth: '560px', padding: '0 24px',
        }}>
          {/* 404 number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={mounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: '24px' }}>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(96px, 18vw, 160px)',
              fontWeight: 800,
              letterSpacing: '-0.06em',
              lineHeight: 1,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'block',
              userSelect: 'none',
            }}>404</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: '12px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '4px 14px', borderRadius: '999px',
              border: '1px solid rgba(99,102,241,0.4)', background: 'rgba(99,102,241,0.1)',
              color: '#a5b4fc', fontSize: '12px', fontWeight: 500,
              fontFamily: 'Inter, sans-serif',
            }}>页面不存在</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.22 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 700, letterSpacing: '-0.03em',
              color: '#fff', margin: '0 0 16px 0',
            }}>
            这个页面找不到了
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px',
              color: 'rgba(255,255,255,0.45)', lineHeight: 1.75,
              margin: '0 0 36px 0',
            }}>
            你访问的链接可能已失效、被移除，或者地址拼写有误。可以从首页重新开始。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.38 }}
            style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>

            <a href="/" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '12px 24px', borderRadius: '999px',
              background: 'rgba(99,102,241,1)',
              color: '#fff', fontSize: '14px', fontWeight: 600,
              textDecoration: 'none', fontFamily: 'Inter, sans-serif',
              boxShadow: '0 0 20px rgba(99,102,241,0.35)',
              transition: 'background 0.2s, box-shadow 0.2s, transform 0.2s',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#5254cc';
                e.currentTarget.style.boxShadow = '0 0 32px rgba(99,102,241,0.55)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(99,102,241,1)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(99,102,241,0.35)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              回到首页
            </a>

            <a href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '12px 24px', borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: 500,
              textDecoration: 'none', fontFamily: 'Inter, sans-serif',
              transition: 'border-color 0.2s, color 0.2s, background 0.2s',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                e.currentTarget.style.background = 'transparent';
              }}>
              联系我们
            </a>
          </motion.div>

          {/* Quick nav */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ marginTop: '56px' }}>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '12px',
              color: 'rgba(255,255,255,0.25)', marginBottom: '14px',
            }}>或者直接访问</p>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { label: '解决方案', href: '/solutions' },
                { label: '行业应用', href: '/industries' },
                { label: '产品', href: '/products' },
                { label: '常见问题', href: '/faq' },
              ].map((item) => (
                <a key={item.href} href={item.href} style={{
                  padding: '5px 14px', borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.02)',
                  color: 'rgba(255,255,255,0.45)', fontSize: '12px',
                  textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)';
                    e.currentTarget.style.color = '#a5b4fc';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.45)';
                  }}>
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
