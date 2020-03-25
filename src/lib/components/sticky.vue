<template>
  <div :style="{height:style.height,zIndex:style.zIndex}">
    <div
      :class="className"
      :style="{
        top: style.top,
        zIndex: style.zIndex,
        position: style.position,
        width: style.width,
        height: style.height,
        background: style.background}"
    >
      <slot>
        <div>sticky</div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sticky',
  props: {
    isRem: {
      type: Boolean,
      default: true
    },
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
    viewport: {
      type: Number,
      default: 750
    }
  },
  computed: {
        ratio() {
            return this.viewport / window.innerWidth
        },
        style() {
      let {
        isRem,
        height,
        zIndex,
        ratio,
        isSticky,
        stickyTop,
        position,
        width,
        background
      } = this
      let s
      if (isRem) {
        s = {
          height: (height * ratio) / 100+'rem',
          zIndex: zIndex,
          top: (isSticky ? (stickyTop * ratio) / 100 +'rem' : ''),
          position:position,
          width: width,
          height: (height * ratio) / 100+'rem',
          background: background
        }
        console.log('*****', stickyTop, ratio)
      } else {
        s = {
          height: height + 'px',
          zIndex: zIndex,
          top: isSticky ? stickyTop + 'px' : '',
          position: position,
          width: width,
          height: height + 'px',
          background: background
        }
      }

      return s
    }
  },
  data() {
    return {
      active: false,
      position: '',
      width: undefined,
      height: undefined,
      isSticky: false
    }
  },
  mounted() {
    this.height = this.$el.getBoundingClientRect().height
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
    }
  }
}
</script>
