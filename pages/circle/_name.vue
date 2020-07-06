<template>
  <div class="circle-root">
    <v-card v-if="isLoaded" class="circle-card">
      <div class="d-flex flex-no-wrap">
        <v-avatar
          class="ma-3"
          :class="!isDesktop ? 'mx-1' : ''"
          :size="isDesktop ? 200 : 140"
          tile
        >
          <v-img :src="getCircle.circleImage" />
        </v-avatar>
        <div>
          <v-card-title
            class="headline"
            :class="!isDesktop ? 'px-1' : ''"
            v-text="getCircle.circleName"
          />
          <v-card-subtitle
            :class="!isDesktop ? 'px-1' : ''"
            v-text="getCircle.description"
          />
          <v-card-subtitle
            :class="!isDesktop ? 'px-1' : ''"
          >
            홈페이지 : 
            <a class="hompage-link" :href="getCircle.homepage" target="_blank">
              {{ getCircle.homepage }}
            </a>
          </v-card-subtitle>
        </div>
      </div>
      <v-divider />

      <div class="album-info" :class="!isDesktop ? 'ml-3 mr-0' : 'ml-5 mr-2'">
        <v-card-title
          class="headline"
        >
          앨범 정보
        </v-card-title>
        <div v-for="(item, i) in getCircle.album" :key="i">
          <v-divider />
          <div class="d-flex flex-no-wrap">
            <v-avatar
              class="ma-3"
              :class="!isDesktop ? 'mx-1' : ''"
              :size="isDesktop ? 150 : 110"
              tile
            >
              <v-img :src="item.albumImage" />
            </v-avatar>
            <div>
              <v-card-title
                class="headline"
                :class="!isDesktop ? 'px-1' : ''"
                v-text="item.albumName"
              />
              <v-card-subtitle :class="!isDesktop ? 'px-1' : ''" v-html="item.description" />
            </div>
          </div>
          <div class="crossfade pa-3">
            크로스페이드
            <SoundCloud v-if="item.crossFade.type === 'soundcloud'" :soundcloud-info="item.crossFade" />
            <Youtube v-if="item.crossFade.type === 'youtube'" :youtube-info="item.crossFade" />
          </div>
          <v-divider />
          <div class="album-original-info">
            <v-card-subtitle class="album-original-title px-3">
              수록곡 정보
            </v-card-subtitle>
            <v-card-text class="album-original-data px-3" v-html="replaceNextline(item.detailInfo)" />
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
import SoundCloud from '../../components/soundcloudwrapper'
import Youtube from '../../components/youtubewrapper'
import breakpoints from '../../mixins/breakpoint'

export default {
  components: {
    SoundCloud,
    Youtube,
  },
  mixins: [breakpoints],
  data () {
    return {
      isLoaded: false,
      circle: {
        album: []
      }
    }
  },
  computed: {
    getCircle () {
      return this.circle
    }
  },
  beforeMount () {
    console.log('name: ', this.$route.params.name)
    console.log('circle: ', this.circle)
    this.$axios.$post('/query/circle', {
      name: this.$route.params.name
    }).then((info) => {
      if(!info) {
        this.$router.push('/')
      }
      this.circle = info
      this.isLoaded = true
      console.log(this.circle)
    })
  },
  methods: {
    replaceNextline (text) {
      return text.replace(/\n/gi, '<br>')
    }
  }
}
</script>
<style lang="scss" scoped>
.circle-root {
  margin-top: 8px;
  .hompage-link {
    font-weight: bold;
    color: white;
    word-break: break-word;
  }
}
.circle-card {
  background-color: rgba(22, 22, 22, 0.5) !important;
}
.album-original-title {
  font-size: 16px;
}
.album-original-data {
  font-size: 13px;
}
</style>
