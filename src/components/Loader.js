// alert-modal.js
import Loader from './Loader.vue';

export default  {
    install(Vue) {
        var LoaderVue = Vue.extend(Loader)

        let _loading = document.createElement('div')
        document.body.appendChild(_loading)

        let loader = new LoaderVue( {
            el : _loading
        })

        Vue.prototype.showLoadingBar = function(milliSec) {
        	loader.show(milliSec)
        }

        Vue.prototype.hideLoadingBar = function() { 
        	loader.hide()
        }
    }
};