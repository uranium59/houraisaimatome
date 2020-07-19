<template>
  <div class="circle-wrapper">
    <div class="to-main-wrapper">
      <nuxt-link to="/airhouraisai" class="to-main mb-2">
        <v-icon class="left-arrow" color="#eeeeee">
          mdi-arrow-left
        </v-icon>
        <span>
          이전으로
        </span>
      </nuxt-link>
    </div>
    <nuxt-child />
  </div>
</template>
<style lang="scss" scoped>
.left-arrow {
  margin-top: -7px;
  line-height: 1;
}
.circle-wrapper {
  margin: 0 auto;
  max-width: 900px;
}
.to-main-wrapper {
  display: inline-block;
  padding-left: 8px;
  height: 36px;
  width: 150px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.3);
}
.to-main {
  height: 30px;
  text-decoration: none;
  color: #eeeeee;
  font-size: 24px;
  text-shadow: 1px 1px 2px black;
  span {
    color: #eeeeee;
    line-height: 1.6;
  }
}
</style>
