import { defineConfig } from 'dumi';

export default defineConfig({
  title: '技术平台文档',
  mode: 'site',
  hash: true,
  locales: [['zh-CN', '中文']],
  favicon: '/favicon.ico',
  logo: '/assets/img/logo.png',
  publicPath: '/',
  // base: '/site/',
  // publicPath: '/site/',
  externals: { darkreader: 'window.DarkReader' },
  theme: {
    '@c-primary': '#1890ff',
  },
  styles: [
    `
    .__dumi-default-navbar-logo {
      padding-left: 70px !important;
    }
  `,
  ],
});
