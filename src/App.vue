<template>
<CThemeProvider>
    <CReset />
   <div class="bgc">

    <Sidenav background="white" :w="navbar.settings.width" @openChanged="openChanged" z-index="10" />
     
    <CBox :mb="$platform.mobile ? navbar.settings.mobile.height : ''" :ml="sidebar.open ? navbar.settings.width : '0'" :padding="['5', '10', '12', '3rem 7rem 7rem 7rem']" >
      <router-view />
    </CBox>
   </div>
  </CThemeProvider>
</template>

<script>
import { CThemeProvider, CReset } from '@chakra-ui/vue'
import Sidenav from './components/navigation/RNavbar.vue'
import navbar from './settings/navbar.ts'

export default {
  name: 'CarbonMain',
  data() {
    return {
      navbar: navbar,
      sidebar: {
        open: false
      }
    }
  },
  methods: {
    openChanged(value) {
      this.sidebar.open = value
    }
  },
  components: {
    CThemeProvider,
    CReset,
    Sidenav
  }
}
</script>
<style lang="scss">
body {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.select {
  -webkit-touch-callout: auto; /* iOS Safari */
    -webkit-user-select: auto; /* Safari */
     -khtml-user-select: auto; /* Konqueror HTML */
       -moz-user-select: auto; /* Old versions of Firefox */
        -ms-user-select: auto; /* Internet Explorer/Edge */
            user-select: auto; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.js-focus-visible :focus:not(select) {
  outline: 0;
  border-color: #e2e8f0;
  box-shadow: none;
}
</style>
