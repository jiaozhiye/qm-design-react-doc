---
title: Split 分割面板
nav:
  title: 组件
  path: /components
group:
  title: 组件列表
---

## API

### Split 参数

| 参数         | 说明                             | 类型                   | 默认值     |
| ------------ | -------------------------------- | ---------------------- | ---------- |
| direction    | 排列的方向                       | horizontal \| vertical | horizontal |
| defaultValue | 第一个容器的默认尺寸             | string \| number       | 50%        |
| uniqueKey    | 用于尺寸变化的本地缓存，不能重复 | string                 | -          |
| className    | 自定义类名                       | string                 | -          |
| style        | 自定义样式                       | CSSProperties          | -          |

### 事件

| 事件名称 | 说明         | 回调参数                  |
| -------- | ------------ | ------------------------- |
| onChange | 在拖拽时触发 | 第一个容器的尺寸，单位 px |

### Split.Pane 参数

| 参数      | 说明                      | 类型   | 默认值 |
| --------- | ------------------------- | ------ | ------ |
| min       | 容器的最小尺寸(宽度/高度) | number | -      |
| className | 自定义类名                | string | -      |
