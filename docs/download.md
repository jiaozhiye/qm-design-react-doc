---
title: Download 下载
nav:
  title: 组件
  path: /components
  order: 2
group:
  title: 组件列表
---

## API

### Download

| 参数            | 说明                                                   | 类型                                                    | 默认值  |
| --------------- | ------------------------------------------------------ | ------------------------------------------------------- | ------- |
| action          | 下载地址 或 通过请求获取获取下载地址，[配置项](#fetch) | string \| object                                        | -       |
| fileName        | 文件名                                                 | string                                                  | -       |
| size            | 按钮的尺寸                                             | large \| middle \| small                                | -       |
| headers         | 下载请求的 header 头信息                               | object                                                  | -       |
| params          | 下载请求的额外参数                                     | object                                                  | -       |
| withCredentials | 请求时是否携带 cookie                                  | boolean                                                 | false   |
| beforeDownload  | 下载之前的拦截器，若返回 false 则阻止下载              | function(actionUrl)                                     | -       |
| type            | 按钮的类型                                             | primary \| success \| warning \| danger \| info \| text | primary |
| disabled        | 是否禁用状态                                           | boolean                                                 | false   |
| icon            | 下载按钮的图标组件                                     | ReactNode                                               | -       |

### 事件

| 事件名称  | 说明           | 回调参数 |
| --------- | -------------- | -------- |
| onSuccess | 下载完成后触发 | -        |
| onError   | 下载失败时触发 | 错误对象 |

### fetch

| 参数   | 说明               | 类型           | 默认值 |
| ------ | ------------------ | -------------- | ------ |
| api    | 接口地址，必要参数 | async function | -      |
| params | 接口默认参数       | object         | -      |
