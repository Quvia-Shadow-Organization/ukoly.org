<template>
  <RPage title="About">
    <CText>
      - Made by galook &amp; jiricek_cz <br />
      - Hosted in Germany <br />
      - Fully TypeScript <br />
    </CText>
    <br />
    <CButton mr="5" @click="vibrate">Vibrate</CButton>
    <CButton @click="vibrate">Vibrate</CButton>
  </RPage>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class About extends Vue {
  vibrate() {
    if (this.$platform.cordova) {
      navigator.vibrate(50)
    } else {
      this.$toast({
        title: 'No vibration for you',
        description:
          'Your device is not a vibrator. Try this on one of our native apps',
        status: 'error',
        duration: 5100
      })
    }
  }
}
</script>

<style scoped></style>
