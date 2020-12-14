
'use strict';

const FUNC_ERROR_TEXT = 'Expected a function';

export default {
    on: function(elem, type, listener, useCapture = false) {
        elem.addEventListener(type, listener, useCapture)
    },
    off: function(elem, type, listener, useCapture = false) {
        elem.removeEventListener(type, listener, useCapture)
    },
    toScroll: function(value, direction = "scrollY", target = window, speed = 5) {
        return new Promise(resolve => {
            if (typeof value !== 'number') {
                return resolve()
            }
            const dir = (target[direction] - value) > 0
            let prevScrollValue = -1
            let stop = false
            setTimeout(_ => {
                stop = true
            }, 1000)
            const attrsY = ['scrollY', 'scrollTop']
            const attrsX = ['scrollX', 'scrollLeft']
            animationScroll()
            function animationScroll() {
                const scrollValue = target[direction]
                if (!stop && prevScrollValue != scrollValue && ((dir && scrollValue > value) || (!dir && scrollValue < value))) {
                    requestAnimationFrame(_ => {
                        let targetValue = Math.ceil((target[direction] - value) / speed)
                        if (!dir) {
                            targetValue = targetValue || -1
                        } else {
                            targetValue = targetValue || 1
                        }
                        prevScrollValue = target[direction]
                        target.scrollTo(
                            attrsX.indexOf(direction) > -1 ? target[direction] - targetValue : 0,
                            attrsY.indexOf(direction) > -1 ? target[direction] - targetValue : 0
                        )
                        animationScroll()
                    })
                } else {
                    return resolve()
                }
            }
        })
    },
    /**
     * 获取指定元素样式值
     */
    getStyle (element, att) {
        let value
        if (window.getComputedStyle) {
            // 优先使用W3C规范
            value = window.getComputedStyle(element)[att]
        } else {
            // 针对IE9以下兼容
            value = element.currentStyle[att]
        }
        if (typeof value !== 'number' && !value) {
            throw new Error('属性不存在')
        }
        if (typeof parseFloat(value) === 'number') {
            value = parseFloat(value)
        }
        return value
    },

    // 节流
    throttle(func, wait) {
        var valid = true
        if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = Number(wait) || 0;
        return function() {
            if (!valid) {
                return
            }
            valid = false
            setTimeout(function() {
                func()
                valid = true
            }, wait)
        }
    },

    // 防抖
    debounce(func, wait) {
        if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = Number(wait) || 0;
        var timer = null
        return function() {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(func, wait)
        }
    },

    pageOffSet() {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

        var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
        var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
        return {
            x: x,
            y: y
        }
    }
}
