/*
 * @Author: 焦质晔
 * @Date: 2022-03-10 12:35:49
 * @Last Modified by:   焦质晔
 * @Last Modified time: 2022-03-10 12:35:49
 */
const path = require('path');
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
  lessLoader: {
    javascriptEnabled: true,
    paths: [path.resolve(__dirname, 'node_modules')], // 重要
  },
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
