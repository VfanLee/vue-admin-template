import { defineConfig } from 'vitepress'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  title: 'Vue3 Admin Template',
  description: 'Vue3 Admin Template',
  // https://vitepress.dev/zh/reference/default-theme-config
  themeConfig: {
    nav: [{ text: '指南', link: '/' }],
    sidebar: [
      {
        text: '基础',
        items: [
          { text: '介绍', link: '/essentials/guide' },
          { text: '布局', link: '/essentials/layout' },
          { text: '路由和侧边栏', link: '/essentials/router-and-nav' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/VfanLee/vue3-admin-template' }]
  }
})
