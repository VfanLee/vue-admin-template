import { defineConfig } from 'vitepress'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  title: 'Vue3 Admin Template',
  description: 'Vue3 Admin Template',
  // https://vitepress.dev/zh/reference/default-theme-config
  themeConfig: {
    nav: [{ text: '项目概览', link: '/' }],
    sidebar: [
      {
        text: '基础',
        items: [
          { text: '介绍', link: '/basis/guide' },
          { text: '布局', link: '/basis/layout' },
          { text: '路由和侧边栏', link: '/basis/router-and-nav' }
        ]
      },
      {
        text: '其他',
        items: [{ text: '项目规范', link: '/other/dev-standard' }]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/VfanLee/vue3-admin-template' }]
  }
})
