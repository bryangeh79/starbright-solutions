import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="回到顶部"
          style={{
            position: 'fixed', bottom: '28px', right: '28px', zIndex: 99,
            width: '44px', height: '44px', borderRadius: '12px',
            background: 'rgba(99,102,241,0.9)',
            border: '1px solid rgba(99,102,241,0.5)',
            backdropFilter: 'blur(12px)',
            color: '#fff', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(99,102,241,0.35)',
            transition: 'background 0.2s, box-shadow 0.2s, transform 0.15s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#6366f1';
            e.currentTarget.style.boxShadow = '0 4px 28px rgba(99,102,241,0.55)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(99,102,241,0.9)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(99,102,241,0.35)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
