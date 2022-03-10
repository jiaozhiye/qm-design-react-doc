---
title: ConfigProvider 配置
nav:
  title: 组件
  path: /components
  order: 2
group:
  title: 配置
---

## API

### ConfigProvider

| 参数   | 说明                                | 类型                     | 默认值 |
| ------ | ----------------------------------- | ------------------------ | ------ |
| locale | 国际化设置                          | zh-cn \| en              | zh-cn  |
| size   | 组件尺寸                            | large \| middle \| small | -      |
| theme  | 自定义主题，十六进制格式            | string                   | -      |
| global | 组件库全局配置项，[配置项](#global) | object                   | -      |

### global

```bash
{
  print: {
    leftLogo: require('../assets/img/logo_l.png'), // 打印单左侧 Logo
    rightLogo: require('../assets/img/logo_r.png'), // 打印单右侧 Logo
    // LODOP 授权码
    LODOP_LICENSES: [
      ['xxxx', 'xxxxxxxxxxxxxxxxx', 'xxxx', 'xxxxxxxxxxxxxxxxx'],
      ['xxxx', '', 'xxxx', 'xxxxxxxxxxxxxxxxx'],
    ],
  },
  table: {
    pagination: {
      pageSize: 20, // 每页显示条目个数
      pageSizeOptions: [10, 20, 30, 40, 50, 100], // 分页个数选择器设置
    },
    recordExportLog: async ({ fileName }) => {}, // 记录导出日志接口
  },
  tinymce: {
    scriptSrc: '/static/tinymce/tinymce.min.js', // tinymce(富文本编辑器) js 插件路径
  },
  maskClosable: false, // qm-drawer 和 qm-modal 组件，点击遮罩层关闭
  autoInsertSpaceInButton: true, // 自动在两个中文字符之间插入空格
  getComponentConfigApi: async () => {}, // 获取服务端配置信息的接口
  saveComponentConfigApi: async () => {}, // 配置信息保存到服务端的接口
}
```
