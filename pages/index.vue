<template>
  <div class="matome-index-root">
    <v-card
      class="index-card my-5"
      to="/airhouraisai"
    >
      <v-card-title>
        <v-icon class="menu-icon pr-3 pt-0">
          mdi-arrow-right
        </v-icon>
        에어 봉래제 참여 페이지
      </v-card-title>
      <v-card-text>
        주문 마감 기한 : 2020/08/31<br>
        입금 마감 기한 : 2020/09/30
      </v-card-text>
    </v-card>
    <v-card
      class="index-card my-5"
      href="https://google.com"
      target="_blank"
    >
      <v-card-title>
        <v-icon class="menu-icon pr-3 pt-0">
          mdi-arrow-right
        </v-icon>
        에어 봉래제 주문 구글폼 바로가기
      </v-card-title>
    </v-card>
    <v-card 
      class="index-card my-5"
      to="/arrangelist"
    >
      <v-card-title>
        <v-icon class="menu-icon pr-3 pt-0">
          mdi-arrow-right
        </v-icon>
        봉래제 어레인지 서클 리스트
      </v-card-title>
    </v-card>
    <v-card
      class="index-card my-5"
      disabled
    >
      <v-card-title>
        <v-icon class="menu-icon pr-3 pt-0">
          mdi-arrow-right
        </v-icon>
        봉래제 마토메
      </v-card-title>
      <v-card-subtitle>
        준비중
      </v-card-subtitle>
    </v-card>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">

</style>
<style lang="scss" scoped>
.menu-icon {
  line-height: 32px;
}
</style>
