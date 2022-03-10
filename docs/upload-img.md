---
title: UploadImg 图片上传
nav:
  title: 组件
  path: /components
  order: 2
group:
  title: 组件列表
---

## API

### UploadImg

| 参数      | 说明                                         | 类型     | 默认值   |
| --------- | -------------------------------------------- | -------- | -------- |
| fixedSize | 裁剪框的宽高比，空数组则不约束裁剪框的宽高比 | array    | [1.5, 1] |
| quality   | 裁剪后图片的质量                             | 0 - 1    | 1        |
| fileTypes | 限制上传附件的类型                           | string[] | -        |
| fileSize  | 限制上传文件的大小，单位是 M                 | number   | -        |

说明：其他参数与 antd Upload 组件一样，参考地址：https://ant.design/components/upload-cn/#API
