import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Agr Reader",
  description: "Android端Material3风格的极简优美的RSS阅读器",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Changelog', link: '/changelog/index' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Agr-Reader/Agr-Reader' }
    ],
    footer: {
      message: 'Made with ❤️ by Lowae.',
      copyright: 'Copyright © 2024-present Lowae'
    },
    search: {
      provider: 'local'
    }
  }
})