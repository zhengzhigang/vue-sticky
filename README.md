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
<template>
  <div id="app">
    <ul>
      <ul>
        <li v-for="item in 8" :key="item">{{item}}</li>
      </ul>
    </ul>
    <sticky
      :stickyTop="40"
      :background="'#37fafa'"
      ref="stickyTab"
    >
      <ul class="nav">
        <li
          class="nav-item"
          v-for="(item, i) in nav"
          :key="i"
          :ref="'tab' + i"
          @click="switchTab(i)"
        >{{item}}</li>
      </ul>
    </sticky>
    <ul>
      <li v-for="item in 30" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import sticky from './lib/components/sticky'
export default {
  name: 'app',
  components: {
    sticky
  },
  data () {
    return {
      nav: ['导航一', '导航二', '导航三', '导航四']
    }
  },
  mounted() {
    var stickyTab = this.$refs.stickyTab
    stickyTab.setUnderline(this.$refs['tab0'][0])
  },

  methods: {
    switchTab(i) {
      var stickyTab = this.$refs.stickyTab
      stickyTab.setUnderline(this.$refs['tab' + i][0])
    }
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
| showUnderLine  |  是否展示基线 |  boolean  |  true/false  |  true  |


## methods
|  Methods   | Description  |
|  ----------  | -----------  |
| setUnderline  | 设置基线位置，接收一个参数：点击的当前tab的实例元素 |
