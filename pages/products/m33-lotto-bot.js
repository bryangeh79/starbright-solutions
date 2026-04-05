import Head from 'next/head';
import { motion } from 'framer-motion';

const highlights = [
  {
    icon: '⚡',
    title: '一站式自动化管理',
    desc: '从下注输入、资料整理、开奖结果处理，到报表生成与后台设置，整套流程一体化运行，减少人工切换与重复操作。',
  },
  {
    icon: '🎯',
    title: '提升效率，减少人为错误',
    desc: '通过自动识别、自动计算、自动汇总，大幅降低人工记录、手动对账与重复检查所带来的时间成本和失误风险。',
  },
  {
    icon: '📊',
    title: '实时报表输出',
    desc: '系统可快速整理每日关键数据，生成清晰报表，让管理者更快掌握业务动态，提升决策效率。',
  },
  {
    icon: '👥',
    title: '适合团队协作',
    desc: '支持多角色、多操作场景管理，方便团队成员分工配合，让业务流程更顺畅，管理更清晰。',
  },
  {
    icon: '🔧',
    title: '后台参数灵活可控',
    desc: '系统支持多项业务参数调整与后台设置，可根据实际运营需求灵活配置，提升适应性与可管理性。',
  },
  {
    icon: '🏗️',
    title: '稳定的业务流程支持',
    desc: '以实际业务流程为核心进行设计，注重实用性、稳定性与可持续操作，适合日常高频使用场景。',
  },
  {
    icon: '💡',
    title: '清晰直观的操作体验',
    desc: '界面与指令逻辑清楚，方便上手，减少培训成本，让日常操作更轻松、更直接。',
  },
  {
    icon: '📈',
    title: '帮助业务走向系统化',
    desc: '将原本依赖人工经验与零散操作的流程，升级为更规范、更标准化的管理模式，提升整体专业度。',
  },
];

const features = [
  {
    icon: '🎰',
    title: '智能下注管理',
    desc: '快速处理下注资料，优化输入与整理流程，提升日常操作效率。',
    color: '#d4a528',
  },
  {
    icon: '🎯',
    title: '开奖结果处理',
    desc: '支持开奖结果录入与相关数据处理，让后续核对与业务整理更加顺畅。',
    color: '#06b6d4',
  },
  {
    icon: '📋',
    title: '自动报表生成',
    desc: '自动整理关键业务数据，输出更清晰、更易阅读的日报与明细内容。',
    color: '#10b981',
  },
  {
    icon: '⚙️',
    title: '后台管理系统',
    desc: '可进行多项业务参数、权限、玩法设置与系统管理，方便运营团队灵活调整。',
    color: '#8b5cf6',
  },
  {
    icon: '🔍',
    title: '数据整合与明细追踪',
    desc: '让每日业务数据更有条理，方便后续查看、核对与管理。',
    color: '#6366f1',
  },
];

const audiences = [
  '彩票业务运营团队',
  '需要提升效率的代理与管理者',
  '想降低人工操作压力的业务场景',
  '希望将流程标准化、系统化的团队',
];

const languages = [
  { flag: '🇬🇧', label: 'English' },
  { flag: '🇨🇳', label: '中文' },
  { flag: '🇻🇳', label: 'Tiếng Việt' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function M33LottoBotPage() {
  return (
    <>
      <Head>
        <title>M33 Lotto Bot | STARBRIGHT SOLUTIONS</title>
        <meta name="description" content="M33 Lotto Bot — 智能化彩票平台管理机器人，为彩票业务打造的一站式自动化解决方案，结合自动化处理、实时数据整理、报表生成与多角色操作支持。" />
        <meta property="og:title" content="M33 Lotto Bot | STARBRIGHT SOLUTIONS" />
        <meta property="og:description" content="智能化彩票平台管理机器人 — 一站式自动化解决方案，支持 Telegram Bot 多语言操作与实时报表生成。" />
        <meta property="og:image" content="/images/Products_M33.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="M33 Lotto Bot | STARBRIGHT SOLUTIONS" />
        <meta name="twitter:description" content="智能化彩票平台管理机器人 — 一站式自动化解决方案。" />
        <meta name="twitter:image" content="/images/Products_M33.png" />
      </Head>

      {/* ── Hero ── */}
      <section style={{
        position: 'relative', background: '#000', overflow: 'hidden',
        paddingTop: '60px', minHeight: '100vh', display: 'flex', alignItems: 'center',
      }}>
        <div className="bg-grid-dots" style={{ position: 'absolute', inset: 0 }} />
        {/* Gold glow */}
        <div style={{
          position: 'absolute', top: '20%', left: '5%', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(212,165,40,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        {/* Blue glow */}
        <div style={{
          position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(0,180,255,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'relative', maxWidth: '1200px', margin: '0 auto',
          padding: '100px 24px 80px', width: '100%',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '64px', alignItems: 'center',
        }} className="sb-m33-hero-grid">

          {/* Left copy */}
          <div>
            {/* Breadcrumb */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }} style={{ marginBottom: '24px' }}>
              <a href="/products" style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '13px', color: 'rgba(255,255,255,0.35)',
                textDecoration: 'none', fontFamily: 'Inter',
                transition: 'color 0.2s',
              }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                产品列表
              </a>
            </motion.div>

            {/* Status badges */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '5px 14px', borderRadius: '999px',
                background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.35)',
                color: '#34d399', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter',
              }}>
                <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }}
                  style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399' }} />
                Live · 已上线
              </span>
              <span style={{
                padding: '5px 14px', borderRadius: '999px',
                background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)',
                color: '#a5b4fc', fontSize: '12px', fontWeight: 500, fontFamily: 'Inter',
              }}>Telegram Bot</span>
              <span style={{
                padding: '5px 14px', borderRadius: '999px',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontFamily: 'Inter',
              }}>Web App · 开发中</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(38px, 4.5vw, 62px)',
                fontWeight: 800, lineHeight: 1.08,
                letterSpacing: '-0.04em', color: '#fff',
                margin: '0 0 14px 0',
              }}>
              M33 Lotto Bot
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: '18px',
                color: '#d4a528', fontWeight: 500,
                margin: '0 0 20px 0', letterSpacing: '-0.01em',
              }}>
              智能化彩票平台管理机器人
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: '15px',
                lineHeight: 1.8, color: 'rgba(255,255,255,0.52)',
                maxWidth: '480px', margin: '0 0 32px 0',
              }}>
              为彩票业务打造的一站式自动化解决方案。结合自动化处理、实时数据整理、报表生成与多角色操作支持，帮助团队提升运营效率、降低人工失误，让每日业务流程更稳定、有序、清晰。
            </motion.p>

            {/* Language support */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter' }}>支持语言</span>
              {languages.map((l) => (
                <span key={l.label} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '4px 12px', borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.04)',
                  fontSize: '12px', color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter',
                }}>
                  {l.flag} {l.label}
                </span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px', borderRadius: '999px',
                background: '#d4a528', color: '#000',
                fontSize: '14px', fontWeight: 700,
                textDecoration: 'none', fontFamily: 'Inter',
                boxShadow: '0 0 24px rgba(212,165,40,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 0 36px rgba(212,165,40,0.5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(212,165,40,0.35)'; }}>
                立即咨询
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="/products" style={{
                display: 'inline-flex', alignItems: 'center', padding: '13px 28px',
                borderRadius: '999px', border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.65)', fontSize: '14px', fontWeight: 500,
                textDecoration: 'none', fontFamily: 'Inter',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}>
                查看所有产品
              </a>
            </motion.div>
          </div>

          {/* Right: Logo + stats */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="sb-m33-visual"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px', paddingTop: '60px' }}>

            {/* Logo card */}
            <div style={{
              width: '100%', borderRadius: '24px',
              border: '1px solid rgba(212,165,40,0.2)',
              position: 'relative', overflow: 'hidden',
              aspectRatio: '16/10',
              boxShadow: '0 0 60px rgba(212,165,40,0.1)',
            }}>
              <img
                src="/images/Products_M33.png" alt="M33 Lotto Bot"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%', objectFit: 'cover',
                }} />
            </div>

            {/* Live stats */}
            <div style={{
              width: '100%', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px',
            }}>
              {[
                { label: 'Status', value: 'Online', color: '#34d399' },
                { label: 'Languages', value: '3', color: '#d4a528' },
                { label: 'Platform', value: 'Telegram', color: '#60a5fa' },
              ].map((s) => (
                <div key={s.label} style={{
                  padding: '14px 16px', borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)', textAlign: 'center',
                }}>
                  <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace', marginBottom: '6px', letterSpacing: '0.06em' }}>{s.label}</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: s.color, fontFamily: 'monospace' }}>{s.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section style={{ background: '#080808', padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginBottom: '52px' }}>
            <span style={{
              display: 'block', fontSize: '11px', fontWeight: 600, color: '#d4a528',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              fontFamily: 'Inter, sans-serif', marginBottom: '14px',
            }}>Product Highlights</span>
            <h2 style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 3vw, 42px)',
              fontWeight: 700, color: '#fff', letterSpacing: '-0.03em',
              lineHeight: 1.15, margin: 0,
            }}>产品亮点</h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}
            className="sb-highlights-grid">
            {highlights.map((h, i) => (
              <motion.div key={h.title} variants={fadeUp} custom={i * 0.05}
                style={{
                  padding: '24px', borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                whileHover={{
                  borderColor: 'rgba(212,165,40,0.3)',
                  boxShadow: '0 0 24px rgba(212,165,40,0.08)',
                }}>
                <div style={{ fontSize: '24px', marginBottom: '14px' }}>{h.icon}</div>
                <h3 style={{
                  fontFamily: 'Inter', fontSize: '14px', fontWeight: 600,
                  color: '#fff', letterSpacing: '-0.01em', margin: '0 0 8px 0',
                }}>{h.title}</h3>
                <p style={{
                  fontFamily: 'Inter', fontSize: '13px',
                  color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0,
                }}>{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section style={{
        background: 'linear-gradient(180deg, #080808 0%, #0a0a14 100%)',
        padding: '96px 0',
        borderTop: '1px solid rgba(212,165,40,0.1)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginBottom: '52px' }}>
            <span style={{
              display: 'block', fontSize: '11px', fontWeight: 600, color: '#d4a528',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              fontFamily: 'Inter, sans-serif', marginBottom: '14px',
            }}>Core Features</span>
            <h2 style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 3vw, 42px)',
              fontWeight: 700, color: '#fff', letterSpacing: '-0.03em',
              lineHeight: 1.15, margin: 0,
            }}>核心功能概览</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="sb-features-grid">
            {features.map((f, i) => (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  padding: '28px', borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: f.color + '18', border: '1px solid ' + f.color + '30',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '22px', marginBottom: '18px',
                }}>{f.icon}</div>
                <h3 style={{
                  fontFamily: 'Inter', fontSize: '16px', fontWeight: 600,
                  color: '#fff', letterSpacing: '-0.02em', margin: '0 0 10px 0',
                }}>{f.title}</h3>
                <p style={{
                  fontFamily: 'Inter', fontSize: '14px',
                  color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: 0,
                }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Audience + Why ── */}
      <section style={{ background: '#080808', padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="sb-audience-grid">

            {/* Audience */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: '36px', borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.09)',
                background: 'rgba(255,255,255,0.03)',
              }}>
              <span style={{
                display: 'block', fontSize: '11px', fontWeight: 600, color: '#d4a528',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                fontFamily: 'Inter', marginBottom: '14px',
              }}>Suitable For</span>
              <h2 style={{
                fontFamily: 'Inter', fontSize: '26px', fontWeight: 700,
                color: '#fff', letterSpacing: '-0.03em', margin: '0 0 24px 0',
              }}>适用对象</h2>
              <div style={{ display: 'grid', gap: '12px' }}>
                {audiences.map((a) => (
                  <div key={a} style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '14px 18px', borderRadius: '12px',
                    border: '1px solid rgba(212,165,40,0.15)',
                    background: 'rgba(212,165,40,0.05)',
                  }}>
                    <span style={{ color: '#d4a528', fontSize: '16px', flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: 'Inter', fontSize: '14px', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{a}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: '36px', borderRadius: '20px',
                border: '1px solid rgba(99,102,241,0.2)',
                background: 'linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(212,165,40,0.03) 100%)',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              }}>
              <div>
                <span style={{
                  display: 'block', fontSize: '11px', fontWeight: 600, color: '#818cf8',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  fontFamily: 'Inter', marginBottom: '14px',
                }}>Why M33</span>
                <h2 style={{
                  fontFamily: 'Inter', fontSize: '26px', fontWeight: 700,
                  color: '#fff', letterSpacing: '-0.03em', margin: '0 0 20px 0',
                }}>为什么选择 M33 Lotto Bot</h2>
                <p style={{
                  fontFamily: 'Inter', fontSize: '15px',
                  color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, margin: '0 0 18px 0',
                }}>
                  真正有价值的系统，不只是"能用"，而是要稳定、清晰、省时、省力，还能真正贴近业务流程。M33 Lotto Bot 的设计重点，不是堆砌复杂功能，而是围绕实际运营需求，把每天最重要、最频繁、最容易出错的工作，变得更简单、更高效。
                </p>
                <p style={{
                  fontFamily: 'Inter', fontSize: '15px',
                  color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, margin: 0,
                  fontStyle: 'italic',
                }}>
                  "它不只是一个机器人，它是帮助团队提升效率、优化流程、走向专业化管理的重要工具。"
                </p>
              </div>
              <div style={{ marginTop: '28px' }}>
                <a href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '12px 24px', borderRadius: '999px',
                  background: '#d4a528', color: '#000',
                  fontSize: '14px', fontWeight: 700,
                  textDecoration: 'none', fontFamily: 'Inter',
                  boxShadow: '0 0 20px rgba(212,165,40,0.3)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(212,165,40,0.5)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(212,165,40,0.3)'; }}>
                  了解更多 / 立即咨询
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .sb-m33-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .sb-m33-visual { display: none !important; }
          .sb-highlights-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .sb-features-grid { grid-template-columns: 1fr !important; }
          .sb-audience-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) {
          .sb-highlights-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .sb-features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
