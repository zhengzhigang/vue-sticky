!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t){throw new Error("Module build failed: SyntaxError: Unexpected token, expected , (84:6)\n\n[0m [90m 82 | [39m        }\n [90m 83 | [39m        console[33m.[39mlog([32m'*****'[39m[33m,[39m s[33m,[39m (stickyTop [33m*[39m ratio)\n[31m[1m>[22m[39m[90m 84 | [39m      } [36melse[39m {\n [90m    | [39m      [31m[1m^[22m[39m\n [90m 85 | [39m        s [33m=[39m {\n [90m 86 | [39m          height[33m:[39m height [33m+[39m [32m'px'[39m[33m,[39m\n [90m 87 | [39m          zIndex[33m:[39m zIndex[33m,[39m[0m\n")},function(e,t,n){"use strict";function o(e){e.component("sticky",r.default)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);n.o(r,"default")&&n.d(t,"sticky",function(){return r.default}),t.default=o,"undefined"!=typeof window&&window.Vue&&window.Vue.use(o)},function(e,t,n){"use strict";var o=n(0),r=(n.n(o),n(4)),i=n(3),s=i(o.default,r.a,!1,null,null,null);t.default=s.exports},function(e,t){e.exports=function(e,t,n,o,r,i){var s,u=e=e||{},d=typeof e.default;"object"!==d&&"function"!==d||(s=e,u=e.default);var c="function"==typeof u?u.options:u;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId=r);var f;if(i?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=f):o&&(f=o),f){var l=c.functional,m=l?c.render:c.beforeCreate;l?(c._injectStyles=f,c.render=function(e,t){return f.call(t),m(e,t)}):c.beforeCreate=m?[].concat(m,f):[f]}return{esModule:s,exports:u,options:c}}},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{height:e.style.height,zIndex:e.style.zIndex}},[n("div",{class:e.className,style:{top:e.style.isSticky,zIndex:e.style.zIndex,position:e.style.position,width:e.style.width,height:e.style.height,background:e.style.background}},[e._t("default",[n("div",[e._v("sticky")])])],2)])},r=[],i={render:o,staticRenderFns:r};t.a=i}])});
//# sourceMappingURL=sticky.js.map