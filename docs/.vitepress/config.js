const config = {
  base: '/w-design-vue/', // 发布路径 `https://domain.com/` 变成 `https://domain.com/w-design-vue/`
  title: 'W Design Vue',
  description: 'A simple components UI based on Vue 3.x + Vite 2.x.',
  lang: 'en-US',
  markdown: {
    lineNumbers: true,
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] }
  },
  // 默认主题配置
  themeConfig: {
    logo: 'logo.png',
    repo: 'weijuer/w-design-vue',
    docsDir: 'packages',
    editLinks: true,
    editLinkText: '编辑此页',
    lastUpdated: '上次更新',
    nav: require('./navbar'),
    sidebar: require('./sidebar')
  },
  head: [
    ['link', { rel: 'icon', href: '/w-design-vue/favicon.ico' }],
    ['meta', { name: 'author', content: 'Weijuer' }]
  ]
};

module.exports = config;
