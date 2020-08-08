<template>
  <v-card class="card-background circle-list-item my-2" hover @click="gotoCircleInfo">
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
          class="headline mb-1"
          v-text="getCircleName"
        />
        <v-card-subtitle
          class="circle-number pb-2"
          v-text="getCircleNumber"
        />
        <v-card-text
          class="circle-text pt-1 pb-2"
          v-text="getCircleDescription"
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
  },
  methods: {
    gotoCircleInfo () {
      this.$router.push('/arrangelist/circle/' + this.circleInfo.id)
    }
  }
}

</script>

<style lang="scss" scoped>
.circle-list-item {
  min-width: 300px;
  width: 100%;
}
.circle-number {
  font-size: 1.2rem;
  color: white !important;
}
.headline {
  text-shadow: 1px 1px 3px darkgreen;
}
</style>
