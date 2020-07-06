<template>
  <div>
    <v-card class="aboutus-card">
      <v-card-title>
        봉래제 어레인지 마토메
      </v-card-title>
      <v-card-text>
        정보 제공에 도움을 주신<br>
        봉래제 주최측과 어레인지 서클들<br>
        그리고 이 페이지를 방문해주신 여러분들께 감사드립니다.
      </v-card-text>
      <v-card-text>
        Made by uranium59<br>
        <v-icon>
          mdi-twitter
        </v-icon>
        :
        <a :href="twitter" target="_blank">
          {{ twitter }}
        </a>
        <br>
        <v-icon>
          mdi-soundcloud
        </v-icon>
        :
        <a :href="soundcloud" target="_blank">
          {{ soundcloud }}
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      twitter: 'https://twitter.com/uranium59',
      soundcloud: 'https://soundcloud.com/uranium59'
    }
  }
}
</script>
<style lang="scss" scoped>
.aboutus-card {
  a {
    word-break: break-all;
    font-weight: bold;
    color: white;
    letter-spacing: 1px;
  }
}
</style>
