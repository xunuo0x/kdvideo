# wxkdvideo

## 小程序第三方视频播放插件

### 接入方式

```
<kdvideo videoInfo="{{videoInfo}}"></kdvideo>
```

其中`videoInfo`是一个对象，有以下字段：

| 参数名     | 类型   | 必选 |
| ---------- | ------ | ---- |
| videoId      | string | yes  |
| videoUrl  | string | yes  |
| duration | integer | yes  |
| poster | string | yes  |
| height | integer | yes  |
| width | integer | yes  |
| title | string | yes  |
| owner | string | yes  |

