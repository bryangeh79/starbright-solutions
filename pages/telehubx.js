import Head from 'next/head';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';

// ─── Download URL ────────────────────────────────────────────────────────────
// The .exe (101.5 MB) cannot be committed to the repo or hosted on Vercel
// (Vercel static file limit is 50 MB).
// Bryan: set TELEHUBX_DOWNLOAD_URL in Vercel environment variables,
// or replace the fallback string below with the VPS/CDN direct link.
const DOWNLOAD_URL =
  process.env.NEXT_PUBLIC_TELEHUBX_DOWNLOAD_URL ||
  'https://download.starbright-solutions.com/TeleHubX-Setup-1.0.0.exe';

const FILE_NAME = 'TeleHubX-Setup-1.0.0.exe';
const FILE_SIZE = '101.5 MB';
const FILE_SHA256 = 'cf9d9e22ff42cf4bdc07e6b9adfa6fc54a6f02d4cb9b00b77b51ef84d4117ab1';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function TeleHubXPage({ downloadUrl }) {
  return (
    <>
      <Head>
        <title>TeleHubX Windows Installer | STARBRIGHT SOLUTIONS</title>
        <meta
          name="description"
          content="Download TeleHubX v1.0.0 Pilot/Acceptance Build — Windows installer for Telegram multi-account ads, warmup, and intelligent customer-service system."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* ── Hero ── */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #05050a 0%, #0a0a14 60%, #0d0d1a 100%)',
        paddingTop: '120px',
        paddingBottom: '80px',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px', width: '100%' }}>

          {/* Badge */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)',
              borderRadius: '999px', padding: '6px 16px', marginBottom: '32px',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
              <span style={{ color: '#f59e0b', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                v1.0.0 · Pilot / Acceptance Build · VM Acceptance Pending
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={0.05}
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, color: '#fff',
              fontFamily: 'Inter, sans-serif', lineHeight: 1.15, marginBottom: '24px',
            }}>
            TeleHubX{' '}
            <span style={{ background: 'linear-gradient(90deg,#6366f1,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Windows Installer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
            style={{
              color: 'rgba(255,255,255,0.65)', fontSize: '16px', lineHeight: 1.8,
              fontFamily: 'Inter, sans-serif', maxWidth: '660px', marginBottom: '16px',
            }}>
            Local Windows installer for TeleHubX — Telegram multi-account ads, warmup, and
            intelligent customer-service system.
          </motion.p>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.12}
            style={{
              color: 'rgba(255,200,50,0.75)', fontSize: '14px', lineHeight: 1.7,
              fontFamily: 'Inter, sans-serif', maxWidth: '660px', marginBottom: '48px',
              background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
              borderRadius: '10px', padding: '12px 16px',
            }}>
            ⚠️ This build is for <strong style={{ color: '#f59e0b' }}>pilot / acceptance use</strong> only.
            Final Win11 VM validation is still pending before general availability.
          </motion.p>

          {/* Download Card */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.15}
            style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px', padding: '36px 40px', marginBottom: '32px',
            }}>

            {/* File info row */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px', marginBottom: '36px',
            }} className="telehubx-info-grid">
              {[
                { label: 'File Name', value: FILE_NAME, mono: true },
                { label: 'File Size', value: FILE_SIZE },
                { label: 'Platform', value: 'Windows 10 / 11 (64-bit)' },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', marginBottom: '6px' }}>
                    {item.label}
                  </div>
                  <div style={{
                    color: '#fff', fontSize: item.mono ? '13px' : '15px',
                    fontFamily: item.mono ? 'Courier New, monospace' : 'Inter, sans-serif',
                    fontWeight: 500, wordBreak: 'break-all',
                  }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Download button */}
            <a
              href={downloadUrl}
              download={FILE_NAME}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: '#fff', fontWeight: 700, fontSize: '16px',
                fontFamily: 'Inter, sans-serif', textDecoration: 'none',
                padding: '16px 36px', borderRadius: '999px',
                boxShadow: '0 0 32px rgba(99,102,241,0.35)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 0 48px rgba(99,102,241,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0 32px rgba(99,102,241,0.35)';
              }}
            >
              {/* Windows icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 5.557L10.333 4.5v7.31H3V5.557zM11.19 4.37L21 3v8.81h-9.81V4.37zM3 12.19h7.333V19.5L3 18.443V12.19zM11.19 12.19H21V21l-9.81-1.37V12.19z"/>
              </svg>
              Download for Windows
            </a>

            <div style={{ marginTop: '16px', color: 'rgba(255,255,255,0.3)', fontSize: '13px', fontFamily: 'Inter, sans-serif' }}>
              {FILE_SIZE} · {FILE_NAME}
            </div>
          </motion.div>

          {/* SHA256 */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
            style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '12px', padding: '16px 20px', marginBottom: '32px',
            }}>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', marginBottom: '8px' }}>
              SHA-256 Checksum (Verify Integrity)
            </div>
            <code style={{
              color: '#a5b4fc', fontSize: '12px', fontFamily: 'Courier New, monospace',
              wordBreak: 'break-all', lineHeight: 1.6,
            }}>
              {FILE_SHA256}
            </code>
          </motion.div>

          {/* SmartScreen notice */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.25}
            style={{
              background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.2)',
              borderRadius: '12px', padding: '20px 24px', marginBottom: '24px',
            }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '20px', flexShrink: 0 }}>🛡️</span>
              <div>
                <div style={{ color: '#a5b4fc', fontWeight: 700, fontSize: '14px', fontFamily: 'Inter, sans-serif', marginBottom: '6px' }}>
                  Windows SmartScreen Notice
                </div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
                  If Windows SmartScreen blocks the file, click <strong style={{ color: '#fff' }}>"More info"</strong> → <strong style={{ color: '#fff' }}>"Run anyway"</strong> to proceed with installation.
                  This is expected for pilot builds that have not yet received code-signing certification.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Support note */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
            style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '12px', padding: '20px 24px',
            }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '20px', flexShrink: 0 }}>💬</span>
              <div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 700, fontSize: '14px', fontFamily: 'Inter, sans-serif', marginBottom: '6px' }}>
                  Need Help?
                </div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
                  Contact StarBright support if installation or license activation fails.
                  Reach us via <a href="/contact" style={{ color: '#a5b4fc', textDecoration: 'none' }}>the contact page</a> or WhatsApp.
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          .telehubx-info-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      downloadUrl: DOWNLOAD_URL,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
