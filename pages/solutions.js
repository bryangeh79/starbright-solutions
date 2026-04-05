import Head from 'next/head';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';

const solutions = [
  {
    tag: 'Web Dev',
    tagColor: '#6366f1',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: '企业官网与网站系统开发',
    intro: '为企业搭建官网、产品站或业务承接页，让对外表达、内容结构和页面承接保持统一。',
    audience: '适合需要官网升级、品牌重塑、产品展示、线索收集或多页面承接的企业。',
    detail: '重点在信息架构、页面逻辑和对外呈现，不只是把页面做出来。',
  },
  {
    tag: 'AI',
    tagColor: '#8b5cf6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12c0-2.76 1.12-5.26 2.93-7.07" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
      </svg>
    ),
    title: 'AI 客服机器人',
    intro: '把常见问题、产品介绍和基础咨询整理成可对话的智能入口，接住高频咨询。',
    audience: '适合咨询量较大、人工客服压力较高、需要更快响应的企业。',
    detail: '更适合放在官网入口、售前咨询入口或服务说明入口。',
  },
  {
    tag: 'Automation',
    tagColor: '#06b6d4',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: '自动回复系统',
    intro: '围绕表单、预约、通知或固定流程，建立稳定的自动回复机制。',
    audience: '适合需要线索确认、预约提醒、消息分发或固定场景应答的团队。',
    detail: '重点是把通知和回复变成标准流程，而不是临时人工处理。',
  },
  {
    tag: 'Workflow',
    tagColor: '#10b981',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="3" width="6" height="6" rx="1" />
        <rect x="9" y="15" width="6" height="6" rx="1" />
        <path d="M6 9v3a3 3 0 0 0 3 3M18 9v3a3 3 0 0 1-3 3" />
      </svg>
    ),
    title: '业务自动化解决方案',
    intro: '把线索流转、任务分派、审批协作等流程串起来，让业务动作按规则运行。',
    audience: '适合希望减少手工操作、提高跨部门配合效率、规范流程的组织。',
    detail: '更偏向流程编排和协作衔接，而不是单点功能工具。',
  },
  {
    tag: 'Analytics',
    tagColor: '#f59e0b',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: '数据分析与运营辅助工具',
    intro: '把访问、转化、咨询和内容表现整理成可读的数据视图，方便判断方向。',
    audience: '适合需要跟踪官网表现、评估活动效果、优化转化路径的企业。',
    detail: '重点是让运营判断更清楚，而不是堆报表。',
  },
];

const process = [
  { step: '01', title: '需求梳理', desc: '确认现状、目标与边界，明确从哪里切入最有价值。' },
  { step: '02', title: '方案拆解', desc: '把目标拆成可交付的模块，评估优先级与实现路径。' },
  { step: '03', title: '开发实施', desc: '按计划逐步推进，保持透明沟通，稳定交付。' },
  { step: '04', title: '上线支持', desc: '上线后持续跟进，支持后续扩展与运营调整。' },
];

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

export default function SolutionsPage() {
  return (
    <>
      <Head>
        <title>解决方案 | STARBRIGHT SOLUTIONS</title>
        <meta name="description" content="STARBRIGHT SOLUTIONS 解决方案总览：企业官网建设、AI 客服、自动化与数字化服务。" />
      </Head>

      {/* ── Hero ── */}
      <section style={{
        position: 'relative', background: '#000', overflow: 'hidden',
        paddingTop: '60px', minHeight: '52vh',
        display: 'flex', alignItems: 'center',
      }}>
        <div className="bg-grid-dots" style={{ position: 'absolute', inset: 0 }} />
        <div style={{
          position: 'absolute', top: '0', left: '20%', width: '600px', height: '500px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '80px 24px 72px' }}>
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
              Solutions Overview
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(36px, 4.5vw, 60px)',
              fontWeight: 700, lineHeight: 1.1,
              letterSpacing: '-0.03em', color: '#fff',
              margin: '0 0 20px 0', maxWidth: '700px',
            }}>
            把解决方案讲清楚，<br />
            <span style={{
              background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 50%, #818cf8 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>也把业务入口搭稳</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: '16px',
              lineHeight: 1.75, color: 'rgba(255,255,255,0.5)',
              maxWidth: '520px', margin: '0 0 36px 0',
            }}>
            我们围绕官网、AI 客服、自动化与数据四个方向整理解决方案，让企业按真实目标选择合适的切入点。
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 26px', borderRadius: '999px',
              background: '#6366f1', color: '#fff',
              fontSize: '14px', fontWeight: 600,
              textDecoration: 'none', fontFamily: 'Inter, sans-serif',
              boxShadow: '0 0 20px rgba(99,102,241,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(99,102,241,0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(99,102,241,0.35)'; }}>
              立即咨询
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#solutions-overview" style={{
              display: 'inline-flex', alignItems: 'center', padding: '12px 26px',
              borderRadius: '999px', border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.65)', fontSize: '14px', fontWeight: 500,
              textDecoration: 'none', fontFamily: 'Inter, sans-serif',
              transition: 'border-color 0.2s, color 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}>
              查看方案结构
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Solutions Grid ── */}
      <section id="solutions-overview" style={{ background: '#080808', padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginBottom: '52px' }}>
            <span style={{
              display: 'block', fontSize: '11px', fontWeight: 600,
              color: '#818cf8', letterSpacing: '0.12em', textTransform: 'uppercase',
              fontFamily: 'Inter, sans-serif', marginBottom: '14px',
            }}>方案分类</span>
            <h2 style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 700, color: '#fff', letterSpacing: '-0.03em',
              lineHeight: 1.15, margin: '0 0 12px 0',
            }}>每一项方案都能独立落地</h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px',
              color: 'rgba(255,255,255,0.45)', maxWidth: '480px', lineHeight: 1.75, margin: 0,
            }}>也可以组合推进，按业务链条逐步补齐，不推翻重做。</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}
            className="sb-sol-grid">
            {solutions.map((s) => (
              <motion.div key={s.title} variants={fadeUp}
                style={{
                  padding: '32px', borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                whileHover={{
                  borderColor: s.tagColor + '44',
                  boxShadow: '0 0 0 1px ' + s.tagColor + '1a, 0 8px 32px ' + s.tagColor + '14',
                }}>
                {/* Header row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: s.tagColor + '18', border: '1px solid ' + s.tagColor + '30',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.tagColor,
                  }}>{s.icon}</div>
                  <span style={{
                    fontSize: '11px', fontWeight: 600, color: s.tagColor,
                    border: '1px solid ' + s.tagColor + '40', background: s.tagColor + '12',
                    padding: '4px 12px', borderRadius: '999px',
                    fontFamily: 'Inter, sans-serif', letterSpacing: '0.04em',
                  }}>{s.tag}</span>
                </div>

                <h3 style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '17px', fontWeight: 600,
                  color: '#fff', letterSpacing: '-0.02em', margin: '0 0 10px 0',
                }}>{s.title}</h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: '0 0 16px 0',
                }}>{s.intro}</p>

                {/* Detail rows */}
                <div style={{
                  paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.07)',
                  display: 'grid', gap: '8px',
                }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <span style={{ fontSize: '11px', color: s.tagColor, fontWeight: 600, fontFamily: 'Inter', flexShrink: 0, marginTop: '2px' }}>适合</span>
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, fontFamily: 'Inter' }}>{s.audience}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontWeight: 600, fontFamily: 'Inter', flexShrink: 0, marginTop: '2px' }}>特点</span>
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.65, fontFamily: 'Inter' }}>{s.detail}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Process ── */}
      <section style={{
        background: 'linear-gradient(180deg, #080808 0%, #0a0a14 100%)',
        padding: '96px 0',
        borderTop: '1px solid rgba(99,102,241,0.1)',
        borderBottom: '1px solid rgba(99,102,241,0.1)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginBottom: '52px' }}>
            <span style={{
              display: 'block', fontSize: '11px', fontWeight: 600, color: '#818cf8',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              fontFamily: 'Inter, sans-serif', marginBottom: '14px',
            }}>方案组合建议</span>
            <h2 style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 700, color: '#fff', letterSpacing: '-0.03em',
              lineHeight: 1.15, margin: '0 0 12px 0',
            }}>明确当前业务的关键瓶颈</h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px',
              color: 'rgba(255,255,255,0.45)', maxWidth: '560px', lineHeight: 1.75, margin: 0,
            }}>
              品牌表达不清晰 → 优先建设官网；咨询响应效率低 → 接入 AI 客服；线索流转不稳定 → 部署业务自动化；需要数据支撑决策 → 纳入数据工具体系。
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }} className="sb-process-grid">
            {process.map((p, i) => (
              <motion.div key={p.step}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  padding: '28px', borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  position: 'relative',
                }}>
                <span style={{
                  display: 'inline-block', fontSize: '11px', fontWeight: 700,
                  color: '#6366f1', letterSpacing: '0.1em', fontFamily: 'monospace',
                  background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)',
                  padding: '3px 9px', borderRadius: '6px', marginBottom: '18px',
                }}>{p.step}</span>
                <h3 style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600,
                  color: '#fff', letterSpacing: '-0.02em', margin: '0 0 10px 0',
                }}>{p.title}</h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '13px',
                  color: 'rgba(255,255,255,0.45)', lineHeight: 1.72, margin: 0,
                }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: 'linear-gradient(180deg, #0a0a14 0%, #06060f 100%)',
        padding: '112px 0', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', maxWidth: '640px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <h2 style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(30px, 4vw, 52px)',
              fontWeight: 800, color: '#fff', letterSpacing: '-0.04em',
              lineHeight: 1.1, margin: '0 0 18px 0',
            }}>想先确认适合哪种方案？</h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px',
              color: 'rgba(255,255,255,0.48)', lineHeight: 1.8, margin: '0 0 40px 0',
            }}>
              我们可以先做需求梳理，再决定是从官网、AI 客服、自动化还是数据工具切入，方案之间不会互相打架。
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 32px', borderRadius: '999px',
                background: '#6366f1', color: '#fff',
                fontSize: '15px', fontWeight: 600,
                textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                boxShadow: '0 0 24px rgba(99,102,241,0.4)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 0 36px rgba(99,102,241,0.55)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(99,102,241,0.4)'; }}>
                联系我们
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="/" style={{
                display: 'inline-flex', alignItems: 'center', padding: '14px 32px',
                borderRadius: '999px', border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.65)', fontSize: '15px', fontWeight: 500,
                textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}>
                返回首页
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .sb-sol-grid { grid-template-columns: 1fr !important; }
          .sb-process-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .sb-process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
