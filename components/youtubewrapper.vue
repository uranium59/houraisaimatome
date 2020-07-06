<template>
  <div>
    <iframe
      id="ytplayer" type="text/html" width="100%" height="300"
      :src="youtubeInfo.url"
      frameborder="0" allowfullscreen
    />
  </div>
</template>
<script>
export default {
  props: {
    youtubeInfo: {
      type: Object,
      default: () => {}
    }
  }  
}
</script>
<style lang="scss" scoped>

</style>
