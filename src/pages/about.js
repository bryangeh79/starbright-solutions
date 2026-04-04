import Head from 'next/head';
import { motion } from 'framer-motion';

const services = [
  { icon: '🌐', color: '#6366f1', title: '企业官网与网站系统', desc: '围绕品牌展示、产品介绍、客户咨询与后续扩展，建立稳定且适合长期运营的网站基础。' },
  { icon: '🤖', color: '#8b5cf6', title: 'AI 客服与自动回复', desc: '通过智能问答与自动响应，提升咨询效率，减少重复沟通成本，改善客户体验。' },
  { icon: '⚡', color: '#06b6d4', title: '业务自动化', desc: '围绕线索流转、任务分派、审批协作与通知同步，帮助企业提升流程效率与管理一致性。' },
  { icon: '📊', color: '#10b981', title: '数据分析与运营辅助', desc: '整合访问、转化与咨询数据，为运营优化提供更清晰的判断依据。' },
];

const values = [
  { num: '01', title: '业务目标优先', desc: '先把业务目标、使用场景和交付边界讲清楚，再决定结构、内容、开发和上线的顺序。减少返工，让每一步都有明确判断依据。' },
  { num: '02', title: '分清先后顺序', desc: '很多项目的问题，不是做得不够多，而是一开始就没有分清楚先后顺序。我们更在意的是：先解决什么、为什么先做这个、做完之后如何继续。' },
  { num: '03', title: '支持长期扩展', desc: '项目上线后能不能继续被使用、继续被判断、继续被扩展。后续扩展不会推翻前面的结构，而是在已有判断上继续往前走。' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] } }),
};

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>关于我们 | STARBRIGHT SOLUTIONS</title>
        <meta name="description" content="STARBRIGHT SOLUTIONS — 专注于企业官网建设、AI 客服与业务自动化的数字化解决方案团队。" />
      </Head>

      {/* ── Hero ── */}
      <section style={{
        position: 'relative', background: '#000', overflow: 'hidden',
        paddingTop: '60px', minHeight: '60vh', display: 'flex', alignItems: 'center',
      }}>
        <div className="bg-grid-dots" style={{ position: 'absolute', inset: 0 }} />
        <div style={{
          position: 'absolute', top: '10%', right: '10%', width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'relative', maxWidth: '1200px', margin: '0 auto',
          padding: '90px 24px 72px', width: '100%',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center',
        }} className="sb-about-hero-grid">

          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              style={{ marginBottom: '20px' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '5px 14px', borderRadius: '999px',
                border: '1px solid rgba(99,102,241,0.4)', background: 'rgba(99,102,241,0.1)',
                color: '#a5b4fc', fontSize: '12px', fontWeight: 500, fontFamily: 'Inter',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#818cf8' }} />
                About Us
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'Inter', fontSize: 'clamp(36px, 4.5vw, 60px)',
                fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em',
                color: '#fff', margin: '0 0 20px 0',
              }}>
              关于<br />
              <span style={{
                background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 50%, #818cf8 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>STARBRIGHT SOLUTIONS</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'Inter', fontSize: '15px', lineHeight: 1.8,
                color: 'rgba(255,255,255,0.5)', maxWidth: '460px', margin: '0 0 16px 0',
              }}>
              我们存在的原因很直接：很多企业已经有网站，却没有真正能承接咨询、说明服务、串起流程的数字化入口。
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              style={{
                fontFamily: 'Inter', fontSize: '15px', lineHeight: 1.8,
                color: 'rgba(255,255,255,0.5)', maxWidth: '460px', margin: '0 0 36px 0',
              }}>
              我们把官网、系统、AI 交互和自动化放在同一套业务逻辑里，帮企业把对外表达和内部运转接起来。
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 26px', borderRadius: '999px',
                background: '#6366f1', color: '#fff', fontSize: '14px', fontWeight: 600,
                textDecoration: 'none', fontFamily: 'Inter',
                boxShadow: '0 0 20px rgba(99,102,241,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(99,102,241,0.5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(99,102,241,0.35)'; }}>
                开始咨询
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="/solutions" style={{
                display: 'inline-flex', alignItems: 'center', padding: '12px 26px',
                borderRadius: '999px', border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.65)', fontSize: '14px', fontWeight: 500,
                textDecoration: 'none', fontFamily: 'Inter', transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}>
                查看服务
              </a>
            </motion.div>
          </div>

          {/* Right: brand statement */}
          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="sb-about-visual"
            style={{
              borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.03)', padding: '40px',
              position: 'relative', overflow: 'hidden',
            }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, transparent 0%, #6366f1 50%, transparent 100%)',
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at 70% 20%, rgba(99,102,241,0.08) 0%, transparent 60%)',
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{
                fontFamily: 'Inter', fontSize: '13px', color: '#818cf8',
                fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                margin: '0 0 20px 0',
              }}>我们在解决什么</p>
              <p style={{
                fontFamily: 'Inter', fontSize: '22px', fontWeight: 700,
                color: '#fff', lineHeight: 1.5, letterSpacing: '-0.02em',
                margin: '0 0 32px 0',
              }}>
                帮助企业把分散的展示、咨询、通知和流程，整理成一套更清楚的数字化基础。
              </p>
              <div style={{ display: 'grid', gap: '14px' }}>
                {['官网 · 系统 · AI · 自动化，在同一套逻辑里', '先解决什么，比做了多少更重要', '上线后能用，比上线前看起来好更重要'].map((t) => (
                  <div key={t} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#6366f1', marginTop: '2px', flexShrink: 0 }}>◆</span>
                    <span style={{ fontFamily: 'Inter', fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section style={{ background: '#080808', padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: '48px' }}>
            <span style={{
              display: 'block', fontSize: '11px', fontWeight: 600, color: '#818cf8',
              letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Inter', marginBottom: '14px',
            }}>What We Do</span>
            <h2 style={{
              fontFamily: 'Inter', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 700,
              color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.15, margin: 0,
            }}>服务方向</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}
            className="sb-about-services">
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUp}
                style={{
                  padding: '28px', borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                }}
                whileHover={{ borderColor: s.color + '44', boxShadow: '0 0 24px ' + s.color + '12' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: s.color + '18', border: '1px solid ' + s.color + '30',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', marginBottom: '18px',
                }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'Inter', fontSize: '15px', fontWeight: 600, color: '#fff', margin: '0 0 10px 0' }}>{s.title}</h3>
                <p style={{ fontFamily: 'Inter', fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{
        background: 'linear-gradient(180deg, #080808 0%, #0a0a14 100%)',
        padding: '96px 0', borderTop: '1px solid rgba(99,102,241,0.1)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: '52px' }}>
            <span style={{
              display: 'block', fontSize: '11px', fontWeight: 600, color: '#818cf8',
              letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Inter', marginBottom: '14px',
            }}>How We Work</span>
            <h2 style={{
              fontFamily: 'Inter', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 700,
              color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.15, margin: 0,
            }}>我们的合作方式</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="sb-values-grid">
            {values.map((v, i) => (
              <motion.div key={v.num}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  padding: '32px', borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                }}>
                <span style={{
                  display: 'inline-block', fontSize: '11px', fontWeight: 700, color: '#6366f1',
                  fontFamily: 'monospace', background: 'rgba(99,102,241,0.12)',
                  border: '1px solid rgba(99,102,241,0.25)', padding: '3px 9px',
                  borderRadius: '6px', marginBottom: '20px',
                }}>{v.num}</span>
                <h3 style={{ fontFamily: 'Inter', fontSize: '18px', fontWeight: 600, color: '#fff', margin: '0 0 12px 0' }}>{v.title}</h3>
                <p style={{ fontFamily: 'Inter', fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: 0 }}>{v.desc}</p>
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
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: '600px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', maxWidth: '640px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <h2 style={{
              fontFamily: 'Inter', fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 800,
              color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.1, margin: '0 0 18px 0',
            }}>想先确认项目方向？</h2>
            <p style={{ fontFamily: 'Inter', fontSize: '15px', color: 'rgba(255,255,255,0.48)', lineHeight: 1.8, margin: '0 0 40px 0' }}>
              可以先把业务目标、现有情况告诉我们，我们会协助判断最合适的推进方式。
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 32px', borderRadius: '999px', background: '#6366f1', color: '#fff',
                fontSize: '15px', fontWeight: 600, textDecoration: 'none', fontFamily: 'Inter',
                boxShadow: '0 0 24px rgba(99,102,241,0.4)', transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 0 36px rgba(99,102,241,0.55)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(99,102,241,0.4)'; }}>
                联系我们
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="/solutions" style={{
                display: 'inline-flex', alignItems: 'center', padding: '14px 32px',
                borderRadius: '999px', border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.65)', fontSize: '15px', fontWeight: 500,
                textDecoration: 'none', fontFamily: 'Inter', transition: 'border-color 0.2s, color 0.2s',
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
          .sb-about-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .sb-about-visual { display: none !important; }
          .sb-about-services { grid-template-columns: repeat(2, 1fr) !important; }
          .sb-values-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) {
          .sb-about-services { grid-template-columns: repeat(2, 1fr) !important; }
          .sb-values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
