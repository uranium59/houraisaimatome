<template>
  <div class="circle-list-wrapper">
    <CircleListItem v-for="(item, i) in circleList" :key="i" :circle-info="item" />
  </div>
</template>

<script>
import CircleListItem from '../components/CircleListItem'

export default {
  components: {
    CircleListItem,
  },
  data () {
    return {
      circleList: []
    }
  },
  beforeMount () {
    console.log('name: ', this.$route.params.name)
    console.log('circle: ', this.circle)
    this.$axios.$post('/query/list', {
      name: this.$route.params.name
    }).then((info) => {
      if(!info) {
        this.$router.push('/')
      }
      this.circleList = info
      this.isLoaded = true
      console.log(this.circle)
    })
  },
}
</script>
