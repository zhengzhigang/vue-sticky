# vue-sticky-header

> vue粘性导航，rem布局，以750宽度设计稿为准
> 插件只完成粘性功能，导航样式需要自己完成

## Build Setup

``` bash
# 安装
npm install vue-sticky-header
```

### 全局使用
```js
import sticky from 'vue-sticky-header'

Vue.use(sticky)
```

### 页面内使用
```js
template>
  <div id="app">
    <sticky :stickyTop="90">
        <div v-for="item in ['nav1', 'nav2', 'nav3']">{{ item }}</div>
    </sticky>
  </div>
</template>

<script>
import { sticky } from 'vue-sticky-header'

export default {
  name: 'app',
  components: {
    sticky
  }
}
</script>
```


## Options
|  Attribute   | Description  |  Type  |  Accepted Values  |  Default  |
|  ----------  | -----------  |  ----  |  ---------------  |  -------  |
| background  | 吸顶导航背景色，默认透明 |  string  |  -   |  -  |
| zIndex  |  层级，默认1000 |  |  number  |  -  |  1000  |
| stickyTop  |  吸顶距离顶部的位置，默认0 |  number  |  -  |  0  |
| className  |  内层box添加的类 |  string  |  -  |  -  |
| isRem  |  是否使用rem布局  |  boolean  |  true/false  |  true  |
| viewport  |  设计稿宽度  |  number  |  -  |  750  |
