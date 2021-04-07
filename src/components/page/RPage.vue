<template>
  <div>
    <CBox>
      <CHeading mb="5">
        {{ title }}
      </CHeading>
      <slot />
    </CBox>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    title: {
      type: String,
      default: 'New RPage'
    }
  }
})
export default class RPage extends Vue {}
</script>

<style scoped>
</style>