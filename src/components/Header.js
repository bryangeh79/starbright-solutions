import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next/pages';

const LOCALES = [
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'ms', label: 'MY', flag: '🇲🇾' },
  { code: 'vi', label: 'VI', flag: '🇻🇳' },
  { code: 'id', label: 'ID', flag: '🇮🇩' },
  { code: 'th', label: 'TH', flag: '🇹🇭' },
];

export default function Header() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  const navItems = [
    { label: t('nav.solutions'), href: '/solutions' },
    { label: t('nav.industries'), href: '/industries' },
    { label: t('nav.products'), href: '/products' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.faq'), href: '/faq' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLocale = (code) => {
    setLangOpen(false);
    let path = asPath;
    const nonDefault = ['en', 'ms', 'vi', 'id', 'th'];
    for (const loc of nonDefault) {
      if (path === `/${loc}` || path === `/${loc}/`) { path = '/'; break; }
      if (path.startsWith(`/${loc}/`)) { path = path.slice(loc.length + 1); break; }
    }
    const newPath = code === 'zh' ? path : `/${code}${path === '/' ? '' : path}`;
    window.location.href = newPath;
  };

  const currentLocale = LOCALES.find((l) => l.code === locale) || LOCALES[0];
  const currentPath = pathname;

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
        height: '76px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: '24px',
      }}>

        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0 }}>
          <Image
            src="/images/starbright_logo_only_95percent_256.png"
            alt="Starbright Solutions"
            width={52}
            height={52}
            priority
            style={{ objectFit: 'contain' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{
              color: '#fff', fontWeight: 700, fontSize: '13px',
              letterSpacing: '0.08em', fontFamily: 'Inter, sans-serif',
            }}>STARBRIGHT</span>
            <span style={{
              color: 'rgba(255,255,255,0.6)', fontWeight: 400, fontSize: '10px',
              letterSpacing: '0.05em', fontFamily: 'Inter, sans-serif',
            }}>SOLUTIONS</span>
          </div>
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

        {/* Right: Lang switcher + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>

          {/* Language switcher */}
          <div ref={langRef} style={{ position: 'relative' }} className="sb-nav-desktop">
            <button onClick={() => setLangOpen(!langOpen)} style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '8px', padding: '5px 10px', cursor: 'pointer',
              color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontFamily: 'Inter',
              transition: 'background 0.2s, border-color 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}>
              <span>{currentLocale.flag}</span>
              <span>{currentLocale.label}</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                style={{ transform: langOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {langOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                background: 'rgba(10,10,20,0.97)', backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px',
                padding: '6px', minWidth: '130px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                zIndex: 200,
              }}>
                {LOCALES.map((loc) => (
                  <button key={loc.code} onClick={() => switchLocale(loc.code)} style={{
                    display: 'flex', alignItems: 'center', gap: '8px', width: '100%',
                    padding: '8px 12px', borderRadius: '8px', border: 'none',
                    background: locale === loc.code ? 'rgba(99,102,241,0.2)' : 'transparent',
                    color: locale === loc.code ? '#a5b4fc' : 'rgba(255,255,255,0.65)',
                    fontSize: '13px', fontFamily: 'Inter', cursor: 'pointer',
                    transition: 'background 0.15s',
                  }}
                    onMouseEnter={(e) => { if (locale !== loc.code) e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                    onMouseLeave={(e) => { if (locale !== loc.code) e.currentTarget.style.background = 'transparent'; }}>
                    <span>{loc.flag}</span>
                    <span>{loc.label}</span>
                    {locale === loc.code && (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="3" style={{ marginLeft: 'auto' }}>
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <a href="/contact" className="sb-cta-desktop" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '8px 18px', borderRadius: '999px',
            background: 'rgba(99,102,241,1)',
            color: '#fff', fontSize: '13px', fontWeight: 600,
            textDecoration: 'none', fontFamily: 'Inter, sans-serif',
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
            {t('nav.cta')}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

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

          {/* Mobile language switcher */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px', marginBottom: '8px' }}>
            {LOCALES.map((loc) => (
              <button key={loc.code} onClick={() => switchLocale(loc.code)} style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                padding: '6px 12px', borderRadius: '999px', border: 'none',
                background: locale === loc.code ? 'rgba(99,102,241,0.25)' : 'rgba(255,255,255,0.07)',
                color: locale === loc.code ? '#a5b4fc' : 'rgba(255,255,255,0.6)',
                fontSize: '12px', fontFamily: 'Inter', cursor: 'pointer',
              }}>
                <span>{loc.flag}</span>
                <span>{loc.label}</span>
              </button>
            ))}
          </div>

          <a href="/contact" style={{
            display: 'block', marginTop: '8px', padding: '13px 20px',
            borderRadius: '999px', background: '#6366f1',
            color: '#fff', fontSize: '14px', fontWeight: 600,
            textAlign: 'center', textDecoration: 'none', fontFamily: 'Inter, sans-serif',
          }}>{t('nav.cta')}</a>
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
