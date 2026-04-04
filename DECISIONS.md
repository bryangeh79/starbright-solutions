# Decisions

## Confirmed Decisions
- 官网项目采用 Next.js Pages Router
- 全站统一 Header / Footer
- 全局样式文件使用 `src/styles/globals.css`
- 全局入口使用 `src/pages/_app.js`
- 站点风格定位为正式、商务、科技感、可长期维护
- 页面优先服务企业官网展示、咨询承接与后续扩展
- 首页作为全站视觉样板页优先打磨
- 不采用复杂动画、不接后台作为当前阶段默认原则
- 页面级 SEO 使用统一站点基准：`https://starbright-solutions.example.com`
- `robots.txt` 与 `sitemap.xml` 使用同一站点基准，不再散写不同来源
- `faq.js` 采用整页重建策略处理编译污染，不做尾部补丁式修复
