<template>
  <div>
    <CFlex dir="row" align="center" justify-content="center" my="auto">
      <eva-icon :name="`${item.icon}${selected ? '' : '-outline'}`" :fill="selected ? '#7DB1FF' : ''" />
      <CHeading as="span" size="sm" :color=" selected ? '#7DB1FF' : ''" ml="1">
        {{ item.mobile.name }}
      </CHeading>
    </CFlex>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    item: {
      type: undefined,
      default: {}
    }
  },
  computed: {
    selected() {
      //@ts-ignore
      return this.$route.path == this.item.path
    }
  }
})
export default class Item extends Vue {}
</script>

<style scoped>
</style>