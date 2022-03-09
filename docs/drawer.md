---
title: Drawer 抽屉
nav:
  title: 组件
  path: /components
group:
  title: 组件列表
---

## API

### Drawer

| 参数     | 说明                                                                       | 类型                     | 默认值 |
| -------- | -------------------------------------------------------------------------- | ------------------------ | ------ |
| size     | 尺寸                                                                       | large \| middle \| small | -      |
| loading  | Drawer Body 的 loading 状态，不传此参数，会默认开启 200ms 的 loading 动画  | boolean                  | -      |
| onClose  | Drawer 关闭前的回调，若返回 false 或者返回 Promise 且被 reject，则阻止关闭 | function                 | -      |
| onClosed | Drawer 完全关闭后的回调                                                    | function                 | -      |

说明：其他参数与 antd Drawer 组件一样，参考地址：https://ant.design/components/drawer-cn/#API
