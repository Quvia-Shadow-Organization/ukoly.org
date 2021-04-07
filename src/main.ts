import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import 'focus-visible/dist/focus-visible';
Vue.prototype.$log = 'Vue global log'

import RCard from '@/components/box/RCard.vue'
import RPage from '@/components/page/RPage.vue'

Vue.component('RCard', RCard)
Vue.component('RPage', RPage)



//@ts-ignore
import Chakra, {
  CButton,
  CHeading,
  CBox,
  CIcon,
  CIconButton,
  CFade,
  CFlex,
  CCloseButton,
  CText,
  CSimpleGrid
} from '@chakra-ui/vue'

Vue.use(Chakra)

const components = [CButton, CHeading, CBox, CIcon, CIconButton, CFade, CFlex, CText, CCloseButton, CSimpleGrid]

components.forEach((component: Vue.VueConstructor) => {
  Vue.prototype.$log += '\nadded ' + component.name

  Vue.component(component.name, component)
})

//@ts-ignore
import EvaIcons, { EvaIcon } from 'vue-eva-icons'

Vue.component('EvaIcon', EvaIcon)
Vue.use(EvaIcons)

import style from '@/settings/style'
Vue.prototype.$style = style

Vue.prototype.$platform = {
  mobile: process.env.CORDOVA_PLATFORM == 'android' || process.env.CORDOVA_PLATFORM == 'ios' || window.innerWidth < 480,
  cordova: process.env.CORDOVA_PLATFORM,
  electron: process.env.IS_ELECTRON
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
