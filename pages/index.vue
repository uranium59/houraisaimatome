<template>
  <div class="matome-index-root">
    <v-img src="/img/bg/type.png" contain max-height="180px" />
    <v-card
      class="card-background index-card my-5"
      hover
      elevation="4"
      to="/airhouraisai"
    >
      <v-card-title>
        <v-icon class="menu-icon pr-3 pt-0">
          mdi-arrow-right
        </v-icon>
        에어 봉래제 서클 리스트 페이지
      </v-card-title>
      <v-card-text>
        주문 마감 기한 : 2020/09/30<br>
        입금 마감 기한 : 2020/09/30
      </v-card-text>
    </v-card>
    <!-- <v-card
      class="card-background index-card my-5"
      hover
      elevation="4"
      href="https://forms.gle/nL6giLH8eAvz8nD28"
      target="_blank"
    >
      <v-card-title>
        <v-icon class="menu-icon pr-3 pt-0">
          mdi-arrow-right
        </v-icon>
        에어 봉래제 주문 구글폼 바로가기
      </v-card-title>
    </v-card> -->
    <v-card
      class="card-background index-card my-5"
      hover
      elevation="4"
      href="http://houraisai.com"
      target="_blank"
    >
      <v-card-title>
        <v-icon class="menu-icon pr-3 pt-0">
          mdi-arrow-right
        </v-icon>
        봉래제 공식 홈페이지
      </v-card-title>
    </v-card>
    <v-card 
      class="card-background index-card my-5"
      elevation="4"
      href="https://houraisaimatome.com"
      target="_blank"
    >
      <v-card-title>
        <v-icon class="menu-icon pr-3 pt-0">
          mdi-arrow-right
        </v-icon>
        봉래제 어레인지 서클 리스트
      </v-card-title>
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
.index-card {
  border: 1px grey;
}
.menu-icon {
  line-height: 32px;
}
</style>
