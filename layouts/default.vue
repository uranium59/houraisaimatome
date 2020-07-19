<template>
  <v-app dark class="root-page">
    <v-img class="background" position="top right" :src="getBackgroundImageUrl" />
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
  </v-app>
</template>

<script>
import breakpoints from '../mixins/breakpoint'

export default {
  mixins: [breakpoints],
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-page-next-outline',
          title: '에어봉래제',
          to: '/airhouraisai',
        },
        {
          icon: 'mdi-open-in-new',
          title: '봉래제 공식 홈페이지',
          href: 'http://houraisai.com',
          target: '_blank',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About Us',
          to: '/aboutus',
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '봉래제 마토메 사이트'
    }
  },
  computed: {
    getBackgroundImageUrl () {
      return this.isDesktop ? '/img/bg/pc.png' : '/img/bg/mobile.png'
    }
  }
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
