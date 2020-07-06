<template>
  <div class="wrapper-root">
    <iframe
      width="100%"
      height="166"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      :src="soundcloudInfo.iframeURL"
    />
    <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
      <a :href="soundcloudInfo.userUrl" :title="soundcloudInfo.userName" target="_blank" style="color: #cccccc; text-decoration: none;">{{ soundcloudInfo.userName }}</a>
      ·
      <a :href="soundcloudInfo.songUrl" :title="soundcloudInfo.songName" target="_blank" style="color: #cccccc; text-decoration: none;">{{ soundcloudInfo.songName }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    soundcloudInfo: {
      type: Object,
      default: () => {

      }
    }
  }
}
</script>
