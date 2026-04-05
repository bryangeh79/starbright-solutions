import Head from 'next/head';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';

const industries = [
  {
    abbr: '零售',
    color: '#f59e0b',
    title: '零售与门店',
    challenge: '门店信息分散，商品展示层次不清晰，顾客从发现到到店的路径不连贯，导致咨询转化率偏低。',
    approach: '整合门店官网、商品展示、位置导航、预约咨询与活动信息，构建从线上浏览到线下到店的完整引导路径。',
    value: '提升顾客对门店的理解效率，缩短从了解到决策到访的时间周期。',
  },
  {
    abbr: '餐饮',
    color: '#ef4444',
    title: '餐饮与服务业',
    challenge: '品牌特色难以通过线上有效传达，菜单与套餐信息缺乏结构，预约与咨询入口不统一，影响顾客到访决策。',
    approach: '系统化呈现品牌定位、菜单结构与套餐说明，整合预约表单、活动公告与即时咨询入口，减少顾客信息获取成本。',
    value: '以结构化的线上呈现承接顾客兴趣，降低因信息缺失导致的流失率。',
  },
  {
    abbr: '教育',
    color: '#8b5cf6',
    title: '教育与培训机构',
    challenge: '课程体系繁多但差异化表达不足，师资专业背景难以有效呈现，报名路径冗长，影响潜在学员的决策转化。',
    approach: '构建完整的课程介绍、师资说明、学员案例与招生咨询路径，以结构化内容辅助机构建立专业可信度。',
    value: '通过清晰的价值传达与流畅的报名路径，将了解意愿有效转化为实际报名行动。',
  },
  {
    abbr: '金融',
    color: '#6366f1',
    title: '金融 / 顾问 / 专业服务',
    challenge: '客户在接触阶段优先评估服务方的专业性与可信赖程度。内容表达不系统，将直接影响客户进入深度沟通的意愿。',
    approach: '以专业官网、服务说明、成案展示与咨询入口构建清晰的评估依据，引导客户在充分了解能力后主动发起合作沟通。',
    value: '建立"可被理解、可被信赖、可被比较"的专业形象，降低客户的沟通门槛与决策阻力。',
  },
  {
    abbr: '电商',
    color: '#06b6d4',
    title: '电商与线上业务',
    challenge: '活动频繁但转化链路较长，用户在商品、活动与会员模块之间跳转频繁，易造成流量损耗与转化断层。',
    approach: '统一规划商品展示、活动落地页、会员转化模块与行为数据追踪，以整体运营视角优化各节点的衔接效率。',
    value: '以页面结构与数据反馈协同驱动转化，而非孤立优化单一功能模块。',
  },
  {
    abbr: '运营',
    color: '#10b981',
    title: '企业内部运营管理',
    challenge: '业务流程分散，跨部门信息流转依赖人工传递，重复操作多、追踪难，影响整体执行效率与管理可见性。',
    approach: '部署内部门户、流程自动化、任务分派、审批协同与数据看板，将信息流转与执行动作纳入可管理的系统框架。',
    value: '提升团队执行效率与流程可追踪性，为管理决策提供清晰的数据支撑。',
  },
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

export default function IndustriesPage() {
  return (
    <>
      <Head>
        <title>行业应用 | STARBRIGHT SOLUTIONS</title>
        <meta name="description" content="STARBRIGHT SOLUTIONS 按行业梳理核心挑战，为零售、餐饮、教育、金融、电商与企业运营提供针对性的数字化解决方案。" />
      </Head>

      {/* ── Hero ── */}
      <section style={{
        position: 'relative', background: '#000', overflow: 'hidden',
        paddingTop: '60px', minHeight: '52vh',
        display: 'flex', alignItems: 'center',
      }}>
        <div className="bg-grid-dots" style={{ position: 'absolute', inset: 0 }} />
        <div style={{
          position: 'absolute', top: '10%', right: '10%', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
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
              Industry Solutions
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(34px, 4.5vw, 58px)',
              fontWeight: 700, lineHeight: 1.12,
              letterSpacing: '-0.03em', color: '#fff',
              margin: '0 0 20px 0', maxWidth: '720px',
            }}>
            按行业梳理核心挑战，<br />
            <span style={{
              background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 50%, #818cf8 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>提供针对性的解决路径</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: '16px',
              lineHeight: 1.75, color: 'rgba(255,255,255,0.5)',
              maxWidth: '520px', margin: '0 0 36px 0',
            }}>
            我们针对不同行业在业务表达、客户承接与流程组织上的差异，提供更贴近实际需求的数字化解决方案。
          </motion.p>

          {/* Industry pills — no emoji, text only */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {industries.map((ind) => (
              <span key={ind.title} style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 16px', borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.04)',
                color: 'rgba(255,255,255,0.65)', fontSize: '13px',
                fontFamily: 'Inter, sans-serif',
              }}>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: ind.color, flexShrink: 0,
                }} />
                {ind.title}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Industry Cards ── */}
      <section style={{ background: '#080808', padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ marginBottom: '52px' }}>
            <span style={{
              display: 'block', fontSize: '11px', fontWeight: 600, color: '#818cf8',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              fontFamily: 'Inter, sans-serif', marginBottom: '14px',
            }}>行业场景分析</span>
            <h2 style={{
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 700, color: '#fff', letterSpacing: '-0.03em',
              lineHeight: 1.15, margin: '0 0 12px 0',
            }}>各行业数字化挑战与应对方向</h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px',
              color: 'rgba(255,255,255,0.45)', maxWidth: '520px', lineHeight: 1.75, margin: 0,
            }}>了解各行业的核心挑战，判断适合优先切入的解决方向。</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}
            className="sb-ind-grid">
            {industries.map((ind, i) => (
              <motion.div key={ind.title} variants={fadeUp}
                style={{
                  padding: '32px', borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.02)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                whileHover={{
                  borderColor: ind.color + '44',
                  boxShadow: '0 0 0 1px ' + ind.color + '18, 0 8px 40px ' + ind.color + '10',
                }}>

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '10px', flexShrink: 0,
                    background: ind.color + '15', border: '1px solid ' + ind.color + '35',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 700,
                      color: ind.color, letterSpacing: '0.02em',
                    }}>{ind.abbr}</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '17px', fontWeight: 700,
                      color: '#fff', letterSpacing: '-0.02em', margin: '0 0 3px 0',
                    }}>{ind.title}</h3>
                    <span style={{
                      fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.3)',
                      fontFamily: 'Inter', letterSpacing: '0.06em', textTransform: 'uppercase',
                    }}>行业场景</span>
                  </div>
                </div>

                {/* Content rows */}
                <div style={{ display: 'grid', gap: '16px' }}>
                  {[
                    { label: '核心挑战', text: ind.challenge, labelColor: '#f87171' },
                    { label: '解决方向', text: ind.approach, labelColor: ind.color },
                    { label: '核心价值', text: ind.value, labelColor: 'rgba(255,255,255,0.45)' },
                  ].map((row) => (
                    <div key={row.label}>
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        marginBottom: '7px',
                      }}>
                        <span style={{
                          width: '4px', height: '4px', borderRadius: '50%',
                          background: row.labelColor, flexShrink: 0,
                        }} />
                        <span style={{
                          fontSize: '11px', fontWeight: 700, color: row.labelColor,
                          fontFamily: 'Inter', letterSpacing: '0.06em', textTransform: 'uppercase',
                        }}>{row.label}</span>
                      </div>
                      <p style={{
                        fontSize: '13px', color: 'rgba(255,255,255,0.55)',
                        lineHeight: 1.75, fontFamily: 'Inter', margin: 0,
                      }}>{row.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Methodology ── */}
      <section style={{
        background: 'linear-gradient(180deg, #080808 0%, #0a0a14 100%)',
        padding: '96px 0',
        borderTop: '1px solid rgba(99,102,241,0.1)',
        borderBottom: '1px solid rgba(99,102,241,0.1)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}
            className="sb-match-grid">

            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <span style={{
                display: 'block', fontSize: '11px', fontWeight: 600, color: '#818cf8',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif', marginBottom: '14px',
              }}>我们的方法论</span>
              <h2 style={{
                fontFamily: 'Inter, sans-serif', fontSize: 'clamp(24px, 3vw, 38px)',
                fontWeight: 700, color: '#fff', letterSpacing: '-0.03em',
                lineHeight: 1.2, margin: '0 0 20px 0',
              }}>行业适配的核心逻辑</h2>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: '15px',
                color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, margin: '0 0 16px 0',
              }}>
                行业适配的关键，不在于将同一套方案套用不同名称，而在于深入理解目标客户在该行业中的决策逻辑——他们优先关注什么、顾虑什么，才会推进下一步。
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: '15px',
                color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, margin: 0,
              }}>
                当页面结构、案例选取、咨询入口与流程说明均围绕这一决策逻辑展开，内容才能真正服务于转化目标，而非仅完成信息展示。
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'grid', gap: '10px' }}>
              {[
                { step: '01', text: '评估所在行业与当前业务发展阶段', color: '#6366f1' },
                { step: '02', text: '识别影响客户咨询与承接效率的核心问题', color: '#8b5cf6' },
                { step: '03', text: '确定优先切入方向：官网 / AI 客服 / 自动化', color: '#06b6d4' },
                { step: '04', text: '依托现有基础逐步推进，避免不必要的重建成本', color: '#10b981' },
              ].map((item) => (
                <div key={item.step} style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '16px 20px', borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.025)',
                }}>
                  <span style={{
                    fontSize: '11px', fontWeight: 700, color: item.color,
                    fontFamily: 'monospace', flexShrink: 0,
                    background: item.color + '18', border: '1px solid ' + item.color + '35',
                    padding: '3px 9px', borderRadius: '6px',
                  }}>{item.step}</span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '14px',
                    color: 'rgba(255,255,255,0.7)', fontWeight: 500, lineHeight: 1.5,
                  }}>{item.text}</span>
                </div>
              ))}
            </motion.div>
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
              fontFamily: 'Inter, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 700, color: '#fff', letterSpacing: '-0.03em',
              lineHeight: 1.15, margin: '0 0 18px 0',
            }}>不确定应从哪个方向切入？</h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px',
              color: 'rgba(255,255,255,0.48)', lineHeight: 1.85, margin: '0 0 40px 0',
            }}>
              请告知您的行业背景与当前业务状况，我们将协助评估适合的切入方向与优先级安排。
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
                与我们联系
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="/solutions" style={{
                display: 'inline-flex', alignItems: 'center', padding: '14px 32px',
                borderRadius: '999px', border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.65)', fontSize: '15px', fontWeight: 500,
                textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}>
                查看解决方案
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .sb-ind-grid { grid-template-columns: 1fr !important; }
          .sb-match-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
