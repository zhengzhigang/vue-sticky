// src/index.js
import sticky  from './components/sticky'

function install(Vue){
    Vue.component('sticky', sticky);
}
export default install;
export {
    sticky
};
/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install)
}