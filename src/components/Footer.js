import Image from 'next/image';

const navLinks = [
  { label: '解决方案', href: '/solutions' },
  { label: '行业应用', href: '/industries' },
  { label: '产品', href: '/products' },
  { label: '关于我们', href: '/about' },
  { label: '常见问题', href: '/faq' },
  { label: '联系我们', href: '/contact' },
];

const services = [
  '企业官网与网站系统',
  'AI 客服机器人',
  '自动回复系统',
  '业务自动化方案',
];

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
              为企业提供官网建设、AI 客服与业务自动化解决方案。帮助品牌表达更清晰、客户沟通更顺畅、业务流程更高效。
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
              导航
            </h3>
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={linkStyle}
                onMouseEnter={(e) => (e.target.style.color = 'rgba(255,255,255,0.8)')}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.38)')}
              >
                {item.label}
              </a>
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
              服务方向
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
            © 2026 STARBRIGHT SOLUTIONS · All rights reserved.
          </p>
          <p
            style={{
              color: 'rgba(255,255,255,0.2)',
              fontSize: '12px',
              margin: 0,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            企业官网 · AI 客服 · 业务自动化
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
