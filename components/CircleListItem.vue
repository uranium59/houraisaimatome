<template>
  <v-card class="circle-list-item my-2" hover @click="gotoCircleInfo">
    <div class="d-flex flex-no-wrap">
      <v-avatar
        class="ma-3"
        size="150"
        tile
      >
        <v-img :src="circleInfo.image" />
      </v-avatar>
      <div>
        <v-card-title
          class="headline"
          v-text="getCircleName"
        />
        <v-card-subtitle
          class="circle-number pb-3"
          v-text="'부스넘버 : ' + getCircleNumber"
        />
        <v-card-text
          class="circle-text py-2"
          v-text="getCircleDescription"
        />
        <v-card-text
          class="circle-text py-2"
          v-text="getCircleAlbumList"
        />
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    circleInfo: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {

    }
  },
  computed: {
    getCircleName () {
      return this.circleInfo.name
    },
    getCircleNumber () {
      return this.circleInfo.number
    },
    getCircleDescription () {
      return this.circleInfo.description
    },
    getCircleAlbumList () {
      return '출품 앨범: ' + this.circleInfo.albumList.join(', ')
    },
  },
  methods: {
    gotoCircleInfo () {
      this.$router.push('/circle/' + this.circleInfo.id)
    }
  }
}

</script>

<style lang="scss">
.circle-list-item {
  background-color: rgba(22, 22, 22, 0.5) !important;
  min-width: 300px;
  width: 100%;
}
.circle-number {
  font-size: 1rem;
  color: white !important;
}
</style>
