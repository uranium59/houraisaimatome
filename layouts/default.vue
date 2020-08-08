<template>
  <v-app dark class="root-page">
    <v-img class="background" position="top right" :src="getBackgroundImageUrl" />
    <v-img v-if="isDesktop" class="kaguya-sama desktop" contain position="bottom left 20%" src="/img/bg/kaguya.png" />
    <v-img v-if="!isDesktop" class="kaguya-sama not-desktop" contain position="bottom left" src="/img/bg/kaguya.png" />
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list class="pt-12">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :href="item.href"
          :to="item.to"
          :target="item.target"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container class="app-container">
        <nuxt />
      </v-container>
    </v-content>
    <CartDialog />
  </v-app>
</template>

<script>
import CartDialog from '../components/CartDialog'
import sideMenuList from '../constants/sidemenu'
import breakpoints from '../mixins/breakpoint'
import { mapGetters } from 'vuex'

export default {
  components: {
    CartDialog,
  },
  mixins: [breakpoints],
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: sideMenuList,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '봉래제 마토메 사이트'
    }
  },
  computed: {
    ...mapGetters(['getOrderExist']),
    getBackgroundImageUrl () {
      return '/img/bg/background.jpg'
    },
    isCartExist () {
      console.log('function called')
      return this.getOrderExist
    },
  },
  mounted () {
    console.log('orderexist:', this.getOrderExist)
  },
}
</script>

<style lang="scss">
.v-card__subtitle {
  color: rgba(255, 255, 255, 0.85) !important;
}
.root-page {
  width: 100vw;
  height: 100vh;
}
.v-content {
  height: 100vh;
}
.background {
  position: fixed;
  right: 0;
  transform: translateY(0);
  z-index: -100;
  width: 100vw;
  height: 100vh;
}
.kaguya-sama {
  overflow: hidden;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: -99;
  width: 100vw;
  height: 90vh;
  &.not-desktop {
    overflow: hidden;
    left: -5%;
    height: 90vh;
    width: 100%;
    min-width: 600px;
  }
}
.theme--dark.v-application {
  background: rgba(0, 0, 0, 0) !important;
}
.v-application--wrap {
  background: rgba(0, 0, 0, 0) !important;
  height: 100vh;
  overflow-y: auto;
}
.app-container {
  margin: 0 auto;
  height: inherit;
  max-width: 900px;
  width: 100%;
}
</style>
