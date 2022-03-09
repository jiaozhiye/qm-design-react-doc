---
title: Anchor 锚点
nav:
  title: 组件
  path: /components
group:
  title: 组件列表
---

## API

## API

### Anchor 参数

| 参数       | 说明                               | 类型                    | 默认值 |
| ---------- | ---------------------------------- | ----------------------- | ------ |
| labelWidth | lable 标签宽度，单位 px            | number \| string        | 80     |
| size       | 尺寸                               | medium \| small \| mini | -      |
| labelList  | label 的配置列表，[配置项](#label) | array                   | -      |
| className  | 自定义类名                         | string                  | -      |
| style      | 自定义 css 样式                    | CSSProperties           | -      |

### 方法

| 方法名称       | 说明                                      | 参数                | 返回值 |
| -------------- | ----------------------------------------- | ------------------- | ------ |
| SCROLL_TO_ITEM | 滚动到指定 AnchorItem，参数是对应的索引值 | function(itemIndex) | -      |

### AnchorItem 参数

| 参数        | 说明                     | 类型          | 默认值 |
| ----------- | ------------------------ | ------------- | ------ |
| label       | lable 标签名称，必要参数 | string        | -      |
| showDivider | 是否添加分隔符           | boolean       | false  |
| className   | 自定义类名               | string        | -      |
| style       | 自定义 css 样式          | CSSProperties | -      |

### label

| 参数  | 说明                          | 类型   | 默认值 |
| ----- | ----------------------------- | ------ | ------ |
| id    | 锚点元素的 id，用于锚点的定位 | string | -      |
| label | label 标签名称                | string | -      |

### 说明

锚点组件需要有固定高度，否则不会出现滚动条，可以通过标签属性 class 或 style 设置
