import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next/pages';

const NAV_HREFS = ['/solutions', '/industries', '/products', '/about', '/faq', '/contact'];
const NAV_KEYS = ['solutions', 'industries', 'products', 'about', 'faq', 'contact'];

const linkStyle = {
  color: 'rgba(255,255,255,0.38)',
  fontSize: '13px',
  textDecoration: 'none',
  fontFamily: 'Inter, sans-serif',
  transition: 'color 0.2s ease',
  display: 'block',
  marginBottom: '12px',
};

export default function Footer() {
  const { t } = useTranslation('common');

  const navLinks = NAV_KEYS.map((key, i) => ({ label: t(`nav.${key}`), href: NAV_HREFS[i] }));
  const services = [
    t('footer.service1'),
    t('footer.service2'),
    t('footer.service3'),
    t('footer.service4'),
  ];

  return (
    <footer style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '64px 24px 0',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr 1fr',
            gap: '48px',
            paddingBottom: '48px',
          }}
          className="sb-footer-grid"
        >
          {/* Brand col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Image
                src="/images/starbright_logo_only_95percent_256.png"
                alt="Starbright Solutions"
                width={40}
                height={40}
                style={{ objectFit: 'contain', flexShrink: 0 }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span
                  style={{
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '13px',
                    letterSpacing: '0.06em',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  STARBRIGHT
                </span>
                <span
                  style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontWeight: 400,
                    fontSize: '11px',
                    letterSpacing: '0.05em',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  SOLUTIONS
                </span>
              </div>
            </div>
            <p
              style={{
                color: 'rgba(255,255,255,0.35)',
                fontSize: '13px',
                lineHeight: '1.75',
                maxWidth: '320px',
                margin: 0,
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {t('footer.desc')}
            </p>
          </div>

          {/* Nav col */}
          <div>
            <h3
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '20px',
                marginTop: 0,
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {t('footer.nav_title')}
            </h3>
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={linkStyle}
                onMouseEnter={(e) => (e.target.style.color = 'rgba(255,255,255,0.8)')}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.38)')}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Services col */}
          <div>
            <h3
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '20px',
                marginTop: 0,
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {t('footer.services_title')}
            </h3>
            {services.map((item) => (
              <p key={item} style={{ ...linkStyle, cursor: 'default' }}>
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <p
            style={{
              color: 'rgba(255,255,255,0.25)',
              fontSize: '12px',
              margin: 0,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {t('footer.rights')}
          </p>
          <p
            style={{
              color: 'rgba(255,255,255,0.2)',
              fontSize: '12px',
              margin: 0,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {t('footer.tagline')}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sb-footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
