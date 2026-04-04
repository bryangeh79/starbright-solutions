import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const pageTitle = 'STARBRIGHT SOLUTIONS | FAQ 常见问题：服务流程与合作说明';
const pageDescription =
  'STARBRIGHT SOLUTIONS FAQ 常见问题页，汇总企业官网建设、软件开发、Web Development、AI Automation 与 Digital Solutions 的服务流程、合作方式与常见咨询说明。';

const faqGroups = [
  {
    title: '服务合作',
    icon: '🤝',
    summary: '了解我们的服务范围与适合合作的业务场景',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.1)',
    border: 'rgba(99,102,241,0.3)',
    items: [
      {
        question: 'STARBRIGHT SOLUTIONS 主要提供哪些企业官网相关服务？',
        answer: '我们主要提供企业官网与网站系统开发、AI 客服机器人、自动回复系统、业务自动化解决方案，以及与业务展示、咨询承接和运营效率相关的数字化支持。',
      },
      {
        question: '你们是只做展示型网站，还是也能做业务系统？',
        answer: '我们不只做展示型网站，也可以根据业务场景开发轻量系统、业务工具、管理后台和自动化流程。核心目标是让官网和系统真正服务业务，而不是只停留在页面展示。',
      },
      {
        question: '适合哪些类型的企业来找你们合作？',
        answer: '适合希望建设官网、升级品牌形象、优化客户咨询流程、减少重复人工操作，或者提升线上转化能力的企业。也适合想把官网、AI 客服和自动化能力一起规划的团队。',
      },
    ],
  },
  {
    title: '项目流程',
    icon: '🗺️',
    summary: '看项目怎么开始、怎么推进、哪些事要先准备',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.1)',
    border: 'rgba(139,92,246,0.3)',
    items: [
      {
        question: '如果要开始合作，标准流程到底是什么？',
        answer: '通常先确认业务目标、页面范围和功能需求，再进行方案整理、内容规划与开发实施。我们会在开始前尽量明确范围、节奏、交付方式和关键里程碑，避免后续反复。',
      },
      {
        question: '合作前需要准备哪些资料，哪些可以后补？',
        answer: '如已备有品牌资料、参考网站、产品介绍、服务清单、现有系统说明或过往官网内容，将有助于我们更快判断项目方向与实施重点。如资料尚不完整，亦可先行沟通。',
      },
      {
        question: '如果我只有一个初步想法，你们能协助梳理吗？',
        answer: '可以。很多项目一开始都不是完整方案，我们会先帮你把业务目标、页面结构、功能优先级和转化路径理清，再决定要先做什么、后做什么。',
      },
    ],
  },
  {
    title: 'SEO 与技术实现',
    icon: '⚙️',
    summary: '判断网站结构、体验和后续扩展会不会拖后腿',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.1)',
    border: 'rgba(6,182,212,0.3)',
    items: [
      {
        question: '网站会考虑 SEO 和基础搜索可见性吗？',
        answer: '会。我们会在页面结构、标题层级、内容组织、基础性能和可读性上考虑 SEO 需求，尽量让网站更符合搜索引擎抓取逻辑，也更便于用户快速理解。',
      },
      {
        question: '网站建好后，后续维护和更新容易吗？',
        answer: '我们会根据项目需要选择合适的技术方案，在交付时尽量降低维护门槛，包括文档说明、操作指引和可扩展的结构设计。如需长期维护支持也可以按约定安排。',
      },
      {
        question: '网站上线后如果需要扩展功能或改版，需要重新开始吗？',
        answer: '不需要。我们在方案阶段就会尽量考虑后续扩展性，不管是新增页面、增加模块，还是功能迭代，都可以在原有基础上推进，不需要推倒重来。',
      },
    ],
  },
  {
    title: 'AI 自动化',
    icon: '🤖',
    summary: '判断 AI 客服和自动化有没有适合你的落地方式',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.1)',
    border: 'rgba(52,211,153,0.3)',
    items: [
      {
        question: 'AI 客服机器人真的适合我的业务吗？',
        answer: '若贵司业务存在高频重复咨询、需要全天候响应、跨多渠道同步运营，或希望降低人工处理成本，AI 客服通常能带来显著效益。我们将协助评估适合的介入点，再制定具体方案。',
      },
      {
        question: '业务自动化是什么意思？有哪些常见的落地场景？',
        answer: '业务自动化指用系统或机器人替代手动操作，比如自动接收咨询并分配、自动发送通知、自动整理数据、自动生成报表等。核心是减少重复人工动作，提高处理效率。',
      },
      {
        question: 'AI 客服、自动回复和业务自动化为什么常常要一起规划？',
        answer: '可以，而且通常更适合一起规划。这样可以把咨询入口、消息流转、通知机制和业务处理逻辑统一设计，减少系统之间的割裂感，后续维护也更清晰。',
      },
    ],
  },
  {
    title: '行业适配与售后支持',
    icon: '🏭',
    summary: '判断方案是不是贴合你的行业和后续维护方式',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
    border: 'rgba(245,158,11,0.3)',
    items: [
      {
        question: '你们能根据行业来设计页面内容和表达方式吗？',
        answer: '可以。我们会结合零售、餐饮、教育、金融、顾问、电商、制造和企业管理等行业特点，调整页面结构、表达重点和转化路径，让内容更贴近客户实际决策方式。',
      },
      {
        question: '项目交付后会提供哪些支持？',
        answer: '通常会提供必要的交付说明、上线协助和后续问题处理建议。具体支持范围会根据项目约定确认，重点是保证上线后能够稳定运行，并便于后续继续迭代。',
      },
      {
        question: '如果后续还想继续扩展页面或功能，可以接着做吗？',
        answer: '可以。我们在方案阶段就会尽量考虑后续扩展，不管是新增页面、增加内容模块，还是把官网进一步延伸成业务系统，都可以按阶段继续推进。',
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

function FAQAccordion({ items, color }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} style={{
            borderRadius: i === 0 ? '12px 12px 4px 4px' : i === items.length - 1 ? '4px 4px 12px 12px' : '4px',
            background: isOpen ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
            border: '1px solid ' + (isOpen ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)'),
            overflow: 'hidden',
            transition: 'background 0.2s, border-color 0.2s',
          }}>
            <button onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                width: '100%', padding: '16px 20px',
                display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px',
                background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
              }}>
              <span style={{
                fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600,
                color: isOpen ? '#fff' : 'rgba(255,255,255,0.75)',
                lineHeight: 1.5, transition: 'color 0.2s',
              }}>{item.question}</span>
              <div style={{
                width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
                background: isOpen ? color + '30' : 'rgba(255,255,255,0.07)',
                border: '1px solid ' + (isOpen ? color + '60' : 'rgba(255,255,255,0.12)'),
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s, transform 0.3s, border-color 0.2s',
                transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                marginTop: '1px',
              }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                  stroke={isOpen ? color : 'rgba(255,255,255,0.5)'} strokeWidth="2.5">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: 'hidden' }}>
                  <div style={{ padding: '0 20px 20px 20px' }}>
                    <div style={{
                      height: '1px', background: 'rgba(255,255,255,0.06)',
                      marginBottom: '16px',
                    }} />
                    <p style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '14px',
                      color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: 0,
                    }}>{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      {/* ── Hero ── */}
      <section style={{
        position: 'relative', background: '#000', overflow: 'hidden',
        paddingTop: '60px', minHeight: '44vh', display: 'flex', alignItems: 'center',
      }}>
        <div className="bg-grid-dots" style={{ position: 'absolute', inset: 0 }} />
        <div style={{
          position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
          width: '700px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.11) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '100px 24px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '64px', alignItems: 'center' }}
            className="sb-faq-hero-grid">

            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                style={{ marginBottom: '20px' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '5px 14px', borderRadius: '999px',
                  border: '1px solid rgba(99,102,241,0.4)', background: 'rgba(99,102,241,0.1)',
                  color: '#a5b4fc', fontSize: '12px', fontWeight: 500,
                  fontFamily: 'Inter, sans-serif', letterSpacing: '0.03em',
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#818cf8' }} />
                  常见问题中心 · 服务说明 · 合作澄清
                </span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(32px, 4vw, 54px)',
                  fontWeight: 700, lineHeight: 1.1,
                  letterSpacing: '-0.03em', color: '#fff',
                  margin: '0 0 20px 0',
                }}>
                把最常见的疑问<br />
                <span className="gradient-text-indigo">先讲清楚</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '16px',
                  lineHeight: 1.75, color: 'rgba(255,255,255,0.5)',
                  maxWidth: '460px', margin: '0 0 12px 0',
                }}>
                这页不是把问题凑齐，而是把客户在官网建设、系统开发、AI 自动化项目里最容易卡住的判断点先说明白，方便你更快知道适不适合继续聊。
              </motion.p>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '14px',
                  color: 'rgba(255,255,255,0.35)', lineHeight: 1.7,
                }}>
                如您正在评估方案、核算预算，或尚未确定切入点，建议先浏览以下常见问题，再决定是否进一步联系我们。
              </motion.p>
            </div>

            {/* Right checklist */}
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(12px)',
                padding: '32px',
              }}>
              <div style={{
                height: '3px', borderRadius: '2px',
                background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)',
                marginBottom: '24px',
              }} />
              <h2 style={{
                fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 700,
                color: '#fff', margin: '0 0 20px 0', letterSpacing: '-0.02em',
              }}>建议先确认以下三点</h2>
              {[
                { label: '我们到底做什么，不做什么', sub: '服务边界与能力范围' },
                { label: '项目通常怎么开始、怎么推进', sub: '流程节奏与里程碑说明' },
                { label: '哪些情况适合先聊，哪些可以先观察', sub: '帮你判断切入时机' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '14px', alignItems: 'flex-start',
                  paddingBottom: i < 2 ? '16px' : 0,
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  marginBottom: i < 2 ? '16px' : 0,
                }}>
                  <div style={{
                    width: '22px', height: '22px', borderRadius: '50%',
                    background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: '1px',
                    fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700,
                    color: '#818cf8',
                  }}>{i + 1}</div>
                  <div>
                    <p style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '13px',
                      fontWeight: 600, color: 'rgba(255,255,255,0.8)', margin: '0 0 3px 0',
                    }}>{item.label}</p>
                    <p style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '12px',
                      color: 'rgba(255,255,255,0.35)', margin: 0,
                    }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ Groups ── */}
      <section style={{ background: '#080808', padding: '80px 0 100px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            style={{ textAlign: 'center', marginBottom: '64px' }}>
            <motion.h2 variants={fadeUp}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 3vw, 38px)',
                fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', margin: '0 0 12px 0',
              }}>
              按主题查看常见问题
            </motion.h2>
            <motion.p variants={fadeUp} custom={0.05}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: '15px',
                color: 'rgba(255,255,255,0.4)', margin: '0 auto', maxWidth: '480px',
              }}>
              我们把问题按服务合作、项目流程、SEO 与技术、AI 自动化、行业适配进行分组
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {faqGroups.map((group, i) => (
              <motion.div key={group.title} variants={fadeUp} custom={i * 0.08}>
                {/* Group header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px',
                }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    background: group.bg, border: '1px solid ' + group.border,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '18px', flexShrink: 0,
                  }}>{group.icon}</div>
                  <div>
                    <h3 style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '17px', fontWeight: 700,
                      color: '#fff', margin: '0 0 2px 0', letterSpacing: '-0.02em',
                    }}>{group.title}</h3>
                    <p style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '13px',
                      color: 'rgba(255,255,255,0.4)', margin: 0,
                    }}>{group.summary}</p>
                  </div>
                </div>

                <FAQAccordion items={group.items} color={group.color} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: '#050505', padding: '80px 0 100px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}
            className="sb-faq-cta-grid">

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 style={{
                fontFamily: 'Inter, sans-serif', fontSize: 'clamp(24px, 2.5vw, 34px)',
                fontWeight: 700, color: '#fff', letterSpacing: '-0.03em',
                margin: '0 0 16px 0',
              }}>如果你还在判断要不要开始</h2>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: '15px',
                color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: '0 0 28px 0',
              }}>
                先把业务目标、当前状况和你最担心的地方说清楚，我们会帮你判断是先做官网、AI 客服、自动化，还是先补结构和内容。
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  '适合先做官网，还是官网与系统一起规划',
                  '适合先解决咨询转化，还是先做内部效率',
                  '适合直接开发，还是先做结构与内容梳理',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="#6366f1" strokeWidth="2.5" style={{ marginTop: '2px', flexShrink: 0 }}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '14px',
                      color: 'rgba(255,255,255,0.6)', lineHeight: 1.6,
                    }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }}
              style={{
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.03)',
                padding: '36px',
              }}>
              <h3 style={{
                fontFamily: 'Inter, sans-serif', fontSize: '20px', fontWeight: 700,
                color: '#fff', letterSpacing: '-0.02em', margin: '0 0 12px 0',
              }}>下一步建议</h3>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: '14px',
                color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: '0 0 28px 0',
              }}>
                如您已有旧站、产品资料或初步方案，欢迎直接提供，我们将协助评估适合的切入点与优先级安排。
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a href="/contact" style={{
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
                  联系我们
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                <a href="/solutions" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '12px 24px', borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'transparent',
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
                  查看解决方案
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .sb-faq-hero-grid { grid-template-columns: 1fr !important; }
          .sb-faq-cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
