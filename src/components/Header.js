import { useState, useEffect } from 'react';

const navItems = [
  { label: '解决方案', href: '/solutions' },
  { label: '行业应用', href: '/industries' },
  { label: '产品', href: '/products' },
  { label: '关于我们', href: '/about' },
  { label: '常见问题', href: '/faq' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
      background: scrolled ? 'rgba(5,5,10,0.88)' : 'rgba(0,0,0,0.2)',
      backdropFilter: 'blur(18px)',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
        height: '60px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: '24px',
      }}>

        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: '30px', height: '30px', borderRadius: '8px',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 700, fontSize: '13px',
            boxShadow: '0 0 14px rgba(99,102,241,0.45)',
          }}>S</div>
          <span style={{
            color: '#fff', fontWeight: 700, fontSize: '13px',
            letterSpacing: '0.08em', fontFamily: 'Inter, sans-serif',
          }}>STARBRIGHT</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="sb-nav-desktop">
          {navItems.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <a key={item.href} href={item.href} style={{
                color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                fontSize: '14px', fontWeight: isActive ? 600 : 400,
                textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                padding: '6px 14px', borderRadius: '8px',
                background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                transition: 'color 0.2s, background 0.2s',
              }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}>
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <a href="/contact" className="sb-cta-desktop" style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          padding: '8px 18px', borderRadius: '999px',
          background: 'rgba(99,102,241,1)',
          color: '#fff', fontSize: '13px', fontWeight: 600,
          textDecoration: 'none', fontFamily: 'Inter, sans-serif',
          flexShrink: 0,
          boxShadow: '0 0 18px rgba(99,102,241,0.35)',
          transition: 'background 0.2s, box-shadow 0.2s, transform 0.2s',
        }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#5254cc';
            e.currentTarget.style.boxShadow = '0 0 28px rgba(99,102,241,0.55)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(99,102,241,1)';
            e.currentTarget.style.boxShadow = '0 0 18px rgba(99,102,241,0.35)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
          预约咨询
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="sb-menu-toggle"
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '4px', display: 'none' }}
          aria-label="菜单">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(4,4,10,0.97)', backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.07)', padding: '12px 24px 24px',
        }}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              color: 'rgba(255,255,255,0.75)', fontSize: '15px', fontWeight: 500,
              padding: '13px 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
              textDecoration: 'none', fontFamily: 'Inter, sans-serif',
            }}>
              {item.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ))}
          <a href="/contact" style={{
            display: 'block', marginTop: '16px', padding: '13px 20px',
            borderRadius: '999px', background: '#6366f1',
            color: '#fff', fontSize: '14px', fontWeight: 600,
            textAlign: 'center', textDecoration: 'none', fontFamily: 'Inter, sans-serif',
          }}>预约咨询</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .sb-nav-desktop { display: none !important; }
          .sb-cta-desktop { display: none !important; }
          .sb-menu-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
