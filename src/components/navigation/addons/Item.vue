<template>
  <div>
    <CFlex
      dir="column"
      mb="1rem"
      border="2px"
      :borderColor="selected ? 'blue.200' : 'gray.200'"
      :boxShadow="selected ? '3px 7px 7px 2px rgba(125, 177, 255, 0.3)' : 'md'"
      borderRadius="lg"
      align="center"
      padding="2"
    >
      <eva-icon :name="`${item.icon}-outline`" />
      <CHeading as="span" size="sm" ml="3">
        {{ item.name }}
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
export default class Item extends Vue {
  selected!: boolean
  item!: any
}
</script>

<style scoped>
</style>