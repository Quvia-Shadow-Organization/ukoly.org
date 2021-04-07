<template>
  <div>
    <!-- <CHeading v-if="sidebar.mobile" padding="3"> Reboost </CHeading> -->
    <div v-if="!sidebar.mobile">
      <!-- Desktop navbar version -->
      <CFlex v-if="!sidebar.open" align-items="center" p="3">
        <CIconButton
          icon="add"
          aria-label="Open Menu"
          @click="sidebarOpen(true)"
          size="md"
        >
        </CIconButton>
        <CHeading as="span" ml="3"> Reboost</CHeading>
      </CFlex>
      <CBox
        position="absolute"
        left="0"
        :w="sidebar.options.width"
        h="100vh"
        borderRadius="10px 10px 10px 10px"
        boxShadow="0 10px 30px -1px rgba(0, 0, 0, 0.1)"
        v-if="sidebar.open"
        padding="5"
      >
        <CBox mb="8" justify-content="space-between" align-items="bottom">
          <CHeading as="span" size="lg" mr="3"> Reboost Home </CHeading>
          <!-- <CText as="span" mx="auto">BETA</CText> -->
          <!-- <CCloseButton @click="sidebarOpen(false)" /> -->
        </CBox>
        <div
          v-for="(item, index) in items"
          :key="index"
          :item="item"
          @click="
            $router.currentRoute.path !== item.path
              ? goto(item.path)
              : ''
          "
        >
          <Item :selected="$route.path == item.path" :item="item" />
        </div>
      </CBox>
    </div>

    <div v-if="sidebar.mobile">
      <CFlex
        :h="sidebar.options.mobile.height"
        w="100%"
        position="fixed"
        bottom="0px"
        backgroundColor="gray.100"
        justify-content="center"
        align="center"
      >
      <!-- Div was used here, not a flexbox, because of the onclick event support -->
        <div
          v-for="(item, index) in mobileItems"
          :key="index"
          :item="item"
          @click="
            $router.currentRoute.path !== item.path
              ? goto(item.path)
              : ''
          "
          display="flex" 
          justify-content="center"
          align-items="center"
          width="100%"
          height="100%"
          v-chakra
        >
            <MobileItem
              my="auto"
              v-if="item.mobile"
              :selected="$router.currentRoute.path === item.path"
              :item="item"
            />
        </div>
      </CFlex>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import navbar from '@/settings/navbar'
import Item from './addons/Item.vue'
import MobileItem from './addons/MobileItem.vue'

@Component({
  components: {
    Item,
    MobileItem
  }
})
export default class RNavbar extends Vue {
  items = navbar.items
  mobileItems = this.mobileItemsComputation()
  public sidebar = {
    options: navbar.settings,
    open: true,
    mobile: false
  }
  mobileItemsComputation() {
    let a = []
    for (let item of navbar.items) {
      if (item.mobile) {
        a.push(item)
      }
    }
    return a
  }
  goto(page: string) {
    if(this.$platform.cordova) navigator.vibrate(70)
    this.$router.push(page)
  }
  computeMobile() {
    const a = window.innerWidth < 480
    this.sidebarOpen(!a)
    this.sidebar.mobile = a
    return a
  }
  created() {
    this.computeMobile()
    window.addEventListener('resize', this.computeMobile)
  }
  destroyed() {
    window.removeEventListener('resize', this.computeMobile)
  }

  sidebarOpen(val: boolean) {
    this.$emit('openChanged', val)
    this.sidebar.open = val
  }
}
</script>

<style scoped>
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>