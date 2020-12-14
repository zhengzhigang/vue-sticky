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

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
}

.nav {
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  &-item {
    flex: 1;
    padding: 8px 0;
  }
}
</style>
