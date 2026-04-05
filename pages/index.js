import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// ─── Data ────────────────────────────────────────────────────
const INITIAL_ACTIVE = new Set([2, 7, 10, 18, 21, 27, 35, 43, 52, 58, 63, 30]);

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: '企业官网与网站系统',
    desc: '建设稳定、专业、可扩展的官网与网站系统，兼顾品牌展示、业务承接与后续运营。',
    tag: 'Web Dev',
    color: '#6366f1',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12c0-2.76 1.12-5.26 2.93-7.07" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
      </svg>
    ),
    title: 'AI 客服机器人',
    desc: '覆盖常见咨询、产品介绍与基础售前响应，提升服务效率与客户体验。',
    tag: 'AI',
    color: '#8b5cf6',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: '自动回复系统',
    desc: '围绕表单、预约、通知与固定场景应答，减少漏回漏接与重复处理。',
    tag: 'Automation',
    color: '#06b6d4',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <rect x="15" y="3" width="6" height="6" rx="1" />
        <rect x="9" y="15" width="6" height="6" rx="1" />
        <path d="M6 9v3a3 3 0 0 0 3 3M18 9v3a3 3 0 0 1-3 3" />
      </svg>
    ),
    title: '业务自动化解决方案',
    desc: '打通线索流转、任务分派、审批协作等环节，让业务流程更稳定、更可控。',
    tag: 'Workflow',
    color: '#10b981',
  },
];

const stats = [
  { value: '50+', label: '成功项目交付' },
  { value: '6', label: '覆盖核心行业' },
  { value: '98%', label: '客户满意度' },
  { value: '24h', label: '快速响应承诺' },
];

const steps = [
  {
    num: '01',
    title: '需求沟通',
    desc: '确认业务目标、现有资产与项目边界，明确交付标准，避免方向偏差。',
    icon: '💬',
  },
  {
    num: '02',
    title: '方案设计',
    desc: '内容结构、视觉系统与功能规划一体推进，给出可执行的落地方案。',
    icon: '🎨',
  },
  {
    num: '03',
    title: '开发交付',
    desc: '持续迭代推进，稳定上线，支持后续扩展与长期运营维护。',
    icon: '🚀',
  },
];

const industries = [
  { label: '零售与门店', icon: '🏪' },
  { label: '餐饮与服务业', icon: '🍽️' },
  { label: '教育与培训', icon: '📚' },
  { label: '金融顾问与专业服务', icon: '💼' },
  { label: '电商与线上业务', icon: '🛒' },
  { label: '企业内部运营管理', icon: '⚙️' },
];

const marqueeItems = [
  '企业官网建设', 'AI 客服系统', '业务流程自动化',
  '数字化转型', 'Web Development', 'AI Automation',
  'Digital Solutions', '线索转化优化', '品牌数字升级',
];

// ─── AI Grid Component ───────────────────────────────────────
function AIGrid() {
  const [activeNodes, setActiveNodes] = useState(INITIAL_ACTIVE);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNodes((prev) => {
        const arr = [...prev];
        const next = new Set(arr);
        const toRemove = arr[Math.floor(Math.random() * arr.length)];
        next.delete(toRemove);
        let toAdd;
        do { toAdd = Math.floor(Math.random() * 64); } while (next.has(toAdd));
        next.add(toAdd);
        return next;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', inset: '-40px',
        background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.22) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', borderRadius: '20px',
        border: '1px solid rgba(255,255,255,0.12)',
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(12px)',
        overflow: 'hidden',
      }}>
        {/* Scan beam */}
        <div className="scan-beam" style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.8) 50%, transparent 100%)',
        }} />

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '14px 20px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(255,255,255,0.02)',
        }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 10px rgba(52,211,153,0.8)' }} />
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace', letterSpacing: '0.04em' }}>
            STARBRIGHT · AI Core · Online
          </span>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <motion.div
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#818cf8' }}
            />
            <span style={{ fontSize: '11px', color: '#818cf8', fontFamily: 'monospace' }}>Processing</span>
          </div>
        </div>

        {/* Dot grid */}
        <div style={{ padding: '22px 22px 16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '11px' }}>
            {Array.from({ length: 64 }, (_, i) => {
              const isActive = activeNodes.has(i);
              return (
                <motion.div
                  key={i}
                  animate={isActive
                    ? { scale: [1, 1.6, 1], opacity: [0.8, 1, 0.8] }
                    : { scale: 1, opacity: 1 }
                  }
                  transition={isActive
                    ? { duration: 1.6, repeat: Infinity, delay: (i % 8) * 0.12, ease: 'easeInOut' }
                    : {}
                  }
                  style={{
                    width: '7px', height: '7px', borderRadius: '50%',
                    background: isActive ? '#818cf8' : 'rgba(255,255,255,0.15)',
                    boxShadow: isActive ? '0 0 10px rgba(99,102,241,0.9)' : 'none',
                    transition: 'background 0.5s ease, box-shadow 0.5s ease',
                  }}
                />
              );
            })}
          </div>

          {/* Stats row */}
          <div style={{
            marginTop: '18px', paddingTop: '14px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px',
          }}>
            {[
              { label: 'Active Nodes', value: activeNodes.size + '/64', color: '#818cf8' },
              { label: 'Accuracy', value: '98.7%', color: '#34d399' },
              { label: 'Latency', value: '12ms', color: 'rgba(255,255,255,0.6)' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace', marginBottom: '4px' }}>{s.label}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: s.color, fontFamily: 'monospace' }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Badge strip */}
        <div style={{
          padding: '10px 20px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(255,255,255,0.02)',
          display: 'flex', gap: '8px', flexWrap: 'wrap',
        }}>
          {['Web Dev', 'AI Chatbot', 'Automation', 'Analytics'].map((tag) => (
            <span key={tag} style={{
              padding: '3px 10px', borderRadius: '999px',
              fontSize: '10px', fontWeight: 500,
              color: 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.12)',
              fontFamily: 'Inter, sans-serif', letterSpacing: '0.03em',
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── Section Label ───────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <span style={{
      display: 'inline-block', fontSize: '11px', fontWeight: 600,
      color: '#818cf8', letterSpacing: '0.12em', textTransform: 'uppercase',
      fontFamily: 'Inter, sans-serif', marginBottom: '14px',
    }}>{children}</span>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: 'clamp(28px, 3.5vw, 44px)',
      fontWeight: 700, color: '#fff',
      letterSpacing: '-0.03em', lineHeight: 1.15,
      margin: '0 0 14px 0',
    }}>{children}</h2>
  );
}

function SectionDesc({ children }) {
  return (
    <p style={{
      fontFamily: 'Inter, sans-serif', fontSize: '15px',
      color: 'rgba(255,255,255,0.5)', maxWidth: '520px',
      lineHeight: 1.75, margin: 0,
    }}>{children}</p>
  );
}

// ─── Page ────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Head>
        <title>STARBRIGHT SOLUTIONS | AI-Powered Digital Solutions</title>
        <meta name="description" content="STARBRIGHT SOLUTIONS 专注于企业官网建设、AI 客服、业务自动化与数字化解决方案。" />
      </Head>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="sb-hero-section" style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#000',
        overflow: 'hidden',
      }}>
        {/* 背景底色 */}
        <div style={{ position: 'absolute', inset: 0, background: '#020510', zIndex: 0 }} />

        {/* 星点层 - 大中小混合，向上流动 */}
        {[...Array(120)].map((_, i) => {
          const x = ((i * 137.5) % 100);
          const startY = ((i * 97.3) % 100);
          // 大中小三种尺寸
          const sizeType = i % 7;
          const size = sizeType === 0 ? 6 : sizeType <= 2 ? 4 : 2;
          const opacity = size === 3 ? 0.9 : size === 2 ? 0.6 : 0.35;
          const duration = 6 + (i % 10); // 6-15秒不等
          const delay = -((i * 1.3) % 15); // 错开起始点
          return (
            <div key={`star-${i}`} style={{
              position: 'absolute',
              width: size + 'px', height: size + 'px',
              borderRadius: '50%',
              background: size === 3 ? 'rgba(255,255,255,1)' : size === 2 ? 'rgba(200,230,255,0.9)' : 'rgba(180,210,255,0.7)',
              boxShadow: size === 3 ? '0 0 4px rgba(255,255,255,0.8)' : 'none',
              left: x + '%',
              bottom: '-4px',
              animation: `starFloat ${duration}s linear ${delay}s infinite`,
              zIndex: 0,
            }} />
          );
        })}

        {/* 流星 */}
        {[...Array(3)].map((_, i) => (
          <div key={`meteor-${i}`} style={{
            position: 'absolute',
            width: '120px', height: '1px',
            background: 'linear-gradient(90deg, rgba(255,255,255,0), rgba(6,182,212,0.8), rgba(255,255,255,0))',
            top: (15 + i * 25) + '%',
            left: '-120px',
            transform: 'rotate(-20deg)',
            animation: `shootingStar 8s linear ${i * 3}s infinite`,
            zIndex: 0,
          }} />
        ))}

        <div style={{
          position: 'relative', maxWidth: '1200px', margin: '0 auto',
          padding: '120px 24px 80px', width: '100%',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '56px', alignItems: 'center', boxSizing: 'border-box', zIndex: 10,
        }} className="sb-hero-grid">

          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: '20px' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '5px 14px', borderRadius: '999px',
                border: '1px solid rgba(99,102,241,0.4)',
                background: 'rgba(99,102,241,0.1)',
                color: '#a5b4fc', fontSize: '12px', fontWeight: 500,
                fontFamily: 'Inter, sans-serif', letterSpacing: '0.03em',
              }}>
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#818cf8', flexShrink: 0 }}
                />
                AI-Powered · Enterprise Digital Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(40px, 4.8vw, 64px)',
                fontWeight: 700, lineHeight: 1.08,
                letterSpacing: '-0.03em', color: '#fff',
                margin: '0 0 20px 0',
              }}>
              把企业官网<br />
              升级成更成熟的<br />
              <span className="gradient-text-indigo">数字化主舞台</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: '15px',
                lineHeight: 1.8, color: 'rgba(255,255,255,0.52)',
                maxWidth: '420px', margin: '0 0 28px 0',
              }}>
              STARBRIGHT SOLUTIONS 为企业搭建更清晰的官网、AI 客服与自动化入口，帮助品牌表达、客户沟通与运营流程同步升级。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="/contact" className="btn-glow-indigo" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px', borderRadius: '999px',
                background: '#6366f1', color: '#fff',
                fontSize: '14px', fontWeight: 600,
                textDecoration: 'none', fontFamily: 'Inter, sans-serif',
              }}>
                获取方案建议
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="/solutions" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px', borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.18)',
                color: 'rgba(255,255,255,0.75)', fontSize: '14px', fontWeight: 500,
                textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}>
                查看服务结构
              </a>
            </motion.div>
          </div>

          {/* Right: AI Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hero-visual">
            <AIGrid />
          </motion.div>
        </div>
      </section>

      {/* ── Marquee ──────────────────────────────────────── */}
      <div style={{
        background: '#0a0a0a',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '14px 0', overflow: 'hidden',
      }}>
        <div className="marquee-track" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{
              fontFamily: 'Inter, sans-serif', fontSize: '13px',
              color: 'rgba(255,255,255,0.35)',
              padding: '0 28px', flexShrink: 0,
              display: 'inline-flex', alignItems: 'center', gap: '28px',
            }}>
              {item}
              <span style={{ color: 'rgba(99,102,241,0.6)', fontSize: '8px' }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats ────────────────────────────────────────── */}
      <section className="sb-section-pad" style={{ background: '#080808', padding: '96px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
              borderRadius: '20px', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.03)',
            }}
            className="sb-stats-grid">
            {stats.map((s, i) => (
              <motion.div key={s.label} variants={fadeUp} style={{
                padding: '44px 32px', textAlign: 'center',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(36px, 4vw, 56px)',
                  fontWeight: 800, letterSpacing: '-0.04em',
                  background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text', lineHeight: 1, marginBottom: '10px',
                }}>{s.value}</div>
                <div style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '13px',
                  color: 'rgba(255,255,255,0.5)', fontWeight: 500,
                }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section className="sb-section-pad-b" style={{
        background: 'linear-gradient(180deg, #080808 0%, #0d0d18 100%)',
        padding: '0 0 96px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="sb-services-heading"
            style={{ marginBottom: '48px', paddingTop: '96px' }}>
            <SectionLabel>Core Services</SectionLabel>
            <SectionHeading>核心服务概览</SectionHeading>
            <SectionDesc>我们提供的内容很明确：官网、网站系统、AI 客服、自动回复和业务自动化，分别对应不同业务环节。</SectionDesc>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}
            className="sb-services-grid">
            {services.map((svc) => (
              <motion.div key={svc.title} variants={fadeUp}
                style={{
                  padding: '32px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.04)',
                  transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.2s',
                  cursor: 'default',
                }}
                whileHover={{
                  borderColor: svc.color + '55',
                  boxShadow: '0 0 0 1px ' + svc.color + '22, 0 8px 40px ' + svc.color + '18',
                  y: -2,
                }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: svc.color + '18',
                    border: '1px solid ' + svc.color + '30',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: svc.color,
                  }}>{svc.icon}</div>
                  <span style={{
                    fontSize: '11px', fontWeight: 600, color: svc.color,
                    border: '1px solid ' + svc.color + '40',
                    background: svc.color + '12',
                    padding: '4px 12px', borderRadius: '999px',
                    fontFamily: 'Inter, sans-serif', letterSpacing: '0.04em',
                  }}>{svc.tag}</span>
                </div>
                <h3 style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 600,
                  color: '#fff', letterSpacing: '-0.02em', margin: '0 0 10px 0',
                }}>{svc.title}</h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: 0,
                }}>{svc.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Steps ────────────────────────────────────────── */}
      <section className="sb-section-pad" style={{
        background: 'linear-gradient(180deg, #0d0d18 0%, #0a0a14 100%)',
        padding: '96px 0',
        borderTop: '1px solid rgba(99,102,241,0.12)',
        borderBottom: '1px solid rgba(99,102,241,0.12)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginBottom: '56px' }}>
            <SectionLabel>Process</SectionLabel>
            <SectionHeading>合作方式清晰</SectionHeading>
            <SectionDesc>从需求确认、结构规划到开发交付与上线支持，每一步都围绕可执行与可交付展开。</SectionDesc>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="sb-steps-grid">
            {steps.map((step, i) => (
              <motion.div key={step.num}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  padding: '32px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.04)',
                  position: 'relative',
                }}>
                {/* Number + icon row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <span style={{
                    fontSize: '12px', fontWeight: 700, color: '#6366f1',
                    letterSpacing: '0.1em', fontFamily: 'monospace',
                    background: 'rgba(99,102,241,0.12)',
                    border: '1px solid rgba(99,102,241,0.25)',
                    padding: '4px 10px', borderRadius: '6px',
                  }}>{step.num}</span>
                  <span style={{ fontSize: '24px' }}>{step.icon}</span>
                </div>
                <h3 style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '19px', fontWeight: 600,
                  color: '#fff', letterSpacing: '-0.02em', margin: '0 0 12px 0',
                }}>{step.title}</h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: 0,
                }}>{step.desc}</p>

                {i < steps.length - 1 && (
                  <div className="sb-step-arrow" style={{
                    position: 'absolute', right: '-11px', top: '50%',
                    transform: 'translateY(-50%)', zIndex: 2,
                    color: 'rgba(99,102,241,0.5)', fontSize: '20px',
                  }}>→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ───────────────────────────────────── */}
      <section className="sb-section-pad" style={{ background: '#080808', padding: '96px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginBottom: '48px' }}>
            <SectionLabel>Industries</SectionLabel>
            <SectionHeading>行业覆盖</SectionHeading>
            <SectionDesc>如果你在这些行业里，需要更清晰的官网表达与更顺的线上承接，我们会比较适合。</SectionDesc>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}
            className="sb-industries-grid">
            {industries.map((item) => (
              <motion.div key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ borderColor: 'rgba(99,102,241,0.4)', y: -2 }}
                style={{
                  padding: '20px 24px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.04)',
                  display: 'flex', alignItems: 'center', gap: '14px',
                  cursor: 'default',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}>
                <span style={{ fontSize: '22px', flexShrink: 0 }}>{item.icon}</span>
                <span style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '15px',
                  fontWeight: 500, color: 'rgba(255,255,255,0.8)',
                }}>{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Products / Case Studies ─────────────────────── */}
      <section className="sb-section-pad" style={{ background: '#000', padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginBottom: '64px' }}>
            <span style={{
              display: 'block', fontSize: '11px', fontWeight: 600, color: '#818cf8',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              fontFamily: 'Inter, sans-serif', marginBottom: '14px',
            }}>Real Products</span>
            <h2 style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 700, color: '#fff', letterSpacing: '-0.03em',
              lineHeight: 1.15, margin: '0 0 14px 0',
            }}>我们的智能产品</h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px',
              color: 'rgba(255,255,255,0.45)', maxWidth: '500px', lineHeight: 1.75, margin: 0,
            }}>整合前沿 AI 技术与多年业务实战经验，精心打造真正能用、好用的智能化解决方案。</p>
          </motion.div>

          {/* Products grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'stretch' }} className="sb-products-grid">

            {/* ── M33 Lotto Bot ── */}
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.03)', overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}>

              {/* Hero visual area */}
              <div style={{
                background: 'linear-gradient(135deg, #0a0800 0%, #1a1200 50%, #0f0a00 100%)',
                position: 'relative', overflow: 'hidden', height: '320px',
              }}>
                {/* Gold glow */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'radial-gradient(ellipse at 50% 40%, rgba(212,165,40,0.18) 0%, transparent 65%)',
                  pointerEvents: 'none',
                }} />
                {/* Blue accent glow */}
                <div style={{
                  position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)',
                  width: '300px', height: '150px',
                  background: 'radial-gradient(ellipse, rgba(0,180,255,0.12) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />

                {/* Scene image */}
                <img
                  src="/images/Products_M33.png"
                  alt="M33 Lotto Bot"
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%', objectFit: 'cover',
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '28px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <span style={{
                    padding: '3px 10px', borderRadius: '999px',
                    background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)',
                    fontSize: '11px', fontWeight: 600, color: '#34d399', fontFamily: 'Inter',
                  }}>✦ Live</span>
                  <span style={{
                    padding: '3px 10px', borderRadius: '999px',
                    background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)',
                    fontSize: '11px', color: '#818cf8', fontFamily: 'Inter',
                  }}>Telegram Bot</span>
                </div>

                <h3 style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '22px', fontWeight: 700,
                  color: '#fff', letterSpacing: '-0.03em', margin: '0 0 10px 0',
                }}>M33 Lotto Bot</h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px',
                  color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: '0 0 20px 0',
                }}>
                  Telegram 彩票自动化系统，支持自动下注、实时开奖查询、自动结算报告与多语言界面（EN / 中文 / Tiếng Việt）。
                </p>

                {/* Feature tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                  {['自动下注', '实时开奖', '自动结算', '多语言', '管理员控制', '报表导出'].map((f) => (
                    <span key={f} style={{
                      padding: '4px 12px', borderRadius: '999px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      fontSize: '12px', color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter',
                    }}>{f}</span>
                  ))}
                </div>

                <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <p style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '12px',
                    color: 'rgba(255,255,255,0.3)', margin: '0 0 4px 0',
                  }}>下一步</p>
                  <p style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '13px',
                    color: 'rgba(255,255,255,0.55)', margin: 0,
                  }}>🚀 Web & 手机 App 版本开发中</p>
                </div>
              </div>
            </motion.div>

            {/* ── AI Auto Chat Bot (Coming Soon) ── */}
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{
                borderRadius: '20px',
                border: '1px solid rgba(99,102,241,0.2)',
                background: 'linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(139,92,246,0.03) 100%)',
                overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}>

              {/* Visual area */}
              <div style={{
                background: 'linear-gradient(135deg, #0a0a18 0%, #12102a 100%)',
                height: '320px', position: 'relative', overflow: 'hidden',
              }}>
                {/* Scene image */}
                <img
                  src="/images/Products_ChatFlowPro.png"
                  alt="ChatFlow Pro"
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%', objectFit: 'cover',
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '28px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <span style={{
                    padding: '3px 10px', borderRadius: '999px',
                    background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)',
                    fontSize: '11px', fontWeight: 600, color: '#fbbf24', fontFamily: 'Inter',
                  }}>⚡ 开发中</span>
                  <span style={{
                    padding: '3px 10px', borderRadius: '999px',
                    background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)',
                    fontSize: '11px', color: '#818cf8', fontFamily: 'Inter',
                  }}>AI Chatbot</span>
                </div>

                <h3 style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '22px', fontWeight: 700,
                  color: '#fff', letterSpacing: '-0.03em', margin: '0 0 10px 0',
                }}>AI Auto Chat Bot</h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px',
                  color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: '0 0 20px 0',
                }}>
                  企业级 AI 客服系统，自动处理高频咨询、售前引导与常见问题，7×24 小时响应，无缝接入官网与多渠道平台。
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                  {['自然语言理解', '多渠道接入', '7×24 响应', '知识库管理', '人工转接', '数据分析'].map((f) => (
                    <span key={f} style={{
                      padding: '4px 12px', borderRadius: '999px',
                      border: '1px solid rgba(99,102,241,0.2)',
                      fontSize: '12px', color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter',
                    }}>{f}</span>
                  ))}
                </div>

                <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(99,102,241,0.12)' }}>
                  <a href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '10px 20px', borderRadius: '999px',
                    background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.35)',
                    color: '#a5b4fc', fontSize: '13px', fontWeight: 600,
                    textDecoration: 'none', fontFamily: 'Inter',
                    transition: 'background 0.2s, border-color 0.2s',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(99,102,241,0.25)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(99,102,241,0.15)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.35)'; }}>
                    提前预约了解
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(180deg, #080808 0%, #06060f 100%)',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '120px 0', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'relative', maxWidth: '680px', margin: '0 auto',
          padding: '0 24px', textAlign: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <h2 style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(36px, 5vw, 62px)',
              fontWeight: 800, color: '#fff',
              letterSpacing: '-0.04em', lineHeight: 1.1,
              margin: '0 0 20px 0',
            }}>准备好开始了吗？</h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '16px',
              color: 'rgba(255,255,255,0.5)', lineHeight: 1.8,
              margin: '0 0 44px 0',
            }}>
              如果你已有官网草案、旧站、产品资料或项目目标，我们可以直接从需求梳理开始，快速进入方案阶段。
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" className="btn-glow-indigo" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '15px 36px', borderRadius: '999px',
                background: '#6366f1', color: '#fff',
                fontSize: '15px', fontWeight: 600,
                textDecoration: 'none', fontFamily: 'Inter, sans-serif',
              }}>
                立即联系我们
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="/faq" style={{
                display: 'inline-flex', alignItems: 'center', padding: '15px 36px',
                borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)',
                color: 'rgba(255,255,255,0.7)', fontSize: '15px', fontWeight: 500,
                textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}>
                查看常见问题
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes starFloat {
          0%   { transform: translateY(0) translateX(0px); opacity: 0; }
          5%   { opacity: 1; }
          50%  { transform: translateY(-50vh) translateX(15px); opacity: 1; }
          90%  { opacity: 0.3; }
          100% { transform: translateY(-105vh) translateX(25px); opacity: 0; }
        }
        @keyframes shootingStar {
          0%   { left: -120px; opacity: 0; }
          5%   { opacity: 1; }
          30%  { left: 110%; opacity: 0; }
          100% { left: 110%; opacity: 0; }
        }
        @keyframes auroraA {
          0%   { transform: translate(0px, 0px) scale(1); opacity: 1; }
          33%  { transform: translate(-120px, 80px) scale(1.2); opacity: 0.8; }
          66%  { transform: translate(60px, -60px) scale(0.9); opacity: 1; }
          100% { transform: translate(0px, 0px) scale(1); opacity: 1; }
        }
        @keyframes auroraB {
          0%   { transform: translate(0px, 0px) scale(1); opacity: 1; }
          33%  { transform: translate(100px, -80px) scale(1.15); opacity: 0.75; }
          66%  { transform: translate(-80px, 60px) scale(0.95); opacity: 1; }
          100% { transform: translate(0px, 0px) scale(1); opacity: 1; }
        }
        @keyframes auroraC {
          0%   { transform: translate(0px, 0px) scale(1); opacity: 0.8; }
          50%  { transform: translate(-150px, -100px) scale(1.3); opacity: 0.5; }
          100% { transform: translate(0px, 0px) scale(1); opacity: 0.8; }
        }
        @keyframes heroParticleFloat {
          0% { transform: translateY(0) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(60px); opacity: 0; }
        }
        @keyframes floatSphere1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-30px, -50px) scale(1.1); }
        }
        @keyframes floatSphere2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(40px, 40px) scale(1.15); }
        }
        @keyframes floatSphere3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(0.9); }
        }
        @media (max-width: 768px) {
          .sb-hero-section { min-height: auto !important; padding: 0 !important; }
          .sb-hero-grid { grid-template-columns: 1fr !important; gap: 0 !important; padding: 100px 20px 60px !important; }
          .sb-hero-visual { display: none !important; }
          .sb-section-pad { padding: 56px 0 !important; }
          .sb-section-pad-b { padding-bottom: 56px !important; }
          .sb-services-heading { padding-top: 48px !important; margin-bottom: 32px !important; }
          .sb-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .sb-services-grid { grid-template-columns: 1fr !important; }
          .sb-steps-grid { grid-template-columns: 1fr !important; }
          .sb-industries-grid { grid-template-columns: 1fr !important; }
          .sb-step-arrow { display: none !important; }
          .sb-products-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) {
          .sb-steps-grid { grid-template-columns: 1fr !important; }
          .sb-step-arrow { display: none !important; }
          .sb-industries-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .sb-products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
