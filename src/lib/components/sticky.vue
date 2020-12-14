<template>
  <div :style="{height:height,zIndex:style.zIndex}">
    <div
      :class="className"
      :style="{
        top: style.top,
        zIndex: style.zIndex,
        position: style.position,
        width: style.width,
        background: style.background}"
    >
      <div v-if="showUnderLine" class="sticky-tab-scroll" ref="anchorTabScrollEl">
          <div class="sticky-tab-group">
              <slot></slot>
              <div
                class="sticky-base-line"
                :style="{left: underLineLeft + 'px', ...underLineStyle}"
                ref="underLineEl"
              >
                  <slot name="base-line">
                      <span class="sticky-base-line__sty"></span>
                  </slot>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import util from '../util'
export default {
  name: 'sticky',
  props: {
    stickyTop: {
      type: Number,
      default: 0
    },
    zIndex: {
      type: Number,
      default: 1000
    },
    className: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    },
    showUnderLine: {
      type: Boolean,
      default: true
    },
    underLineStyle: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    style() {
      let {
        zIndex,
        isSticky,
        stickyTop,
        position,
        width,
        background
      } = this

      return  {
        zIndex: zIndex,
        top: isSticky ? stickyTop + 'px' : '',
        position:position,
        width: width,
        background: background
      }
    }
  },
  data() {
    return {
      active: false,
      position: '',
      width: undefined,
      height: undefined,
      isSticky: false,
      underLineLeft: null
    }
  },
  mounted() {
    this.height = this.$el.getBoundingClientRect().height + 'px'
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  },
  activated() {
    this.handleScroll()
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    sticky() {
      if (this.active) {
        return
      }
      this.position = 'fixed'
      this.active = true
      this.width = this.width + 'px'
      this.isSticky = true
    },
    handleReset() {
      if (!this.active) {
        return
      }
      this.reset()
    },
    reset() {
      this.position = ''
      this.width = 'auto'
      this.active = false
      this.isSticky = false
    },
    handleScroll() {
      const width = this.$el.getBoundingClientRect().width
      this.width = width || 'auto'
      const offsetTop = this.$el.getBoundingClientRect().top
      if (offsetTop < this.stickyTop) {
        this.sticky()
        return
      }
      this.handleReset()
    },
    handleResize() {
      if (this.isSticky) {
        this.width = this.$el.getBoundingClientRect().width + 'px'
      }
    },

    /**
     * 设置基线位置
     */
    setUnderline(targetEl) {
      if (!targetEl) return
      const offsetLeft = targetEl.offsetLeft
      const width = util.getStyle(targetEl, 'width')
      const underLineWidth = util.getStyle(this.$refs.underLineEl, 'width')
      let difference = width - underLineWidth
      if (width < underLineWidth) {
          difference = underLineWidth - width
      }
      this.underLineLeft = offsetLeft + difference / 2
    }
  }
}
</script>
<style scoped>
.sticky-tab-scroll {
    display: flex;
    width: 100%;
    box-sizing: content-box;
    align-items: center;
    overflow-x: scroll;
    overflow-y: hidden;
}
.sticky-tab-group {
    position: relative;
    display: flex;
    width: 100%;
}
.sticky-base-line {
    position: absolute;
    bottom: 5px;
    transition: left .2s ease-in-out;
}
.sticky-base-line__sty {
    display: block;
    width: 18px;
    height: 3px;
    background: #4abab4;
    border-radius: 3px;
}
</style>
