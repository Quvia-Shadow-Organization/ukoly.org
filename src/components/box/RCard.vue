<template>
  <div>
    <CBox
      :max-w="$style.mobile.maxWidth"
      min-w="12rem"
      h="20rem"
      padding="3"
      border-width="1px"
      borderColor="gray.200"
      boxShadow="lg"
      borderRadius="lg"
    >
      <CHeading size="lg">
        {{ title }}
      </CHeading>
      <CDivider />
      <slot />
    </CBox>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'RCard',
  props: {
    title: {
      type: String,
      default: 'Reboost Card'
    }
  }
})
export default class RCard extends Vue {}
</script>

<style scoped>

</style>