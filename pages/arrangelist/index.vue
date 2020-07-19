<template>
  <div class="circle-list-wrapper">
    <div class="top-text">
      정렬은 서클넘버를 기준으로 합니다.
    </div>
    <CircleListItem v-for="(item, i) in circleList" :key="i" :circle-info="item" />
  </div>
</template>

<script>
import CircleListItem from '../../components/CircleListItem'

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
    this.$axios.$post('/query/arrangelist', {
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
<style lang="scss" scoped>
.top-text {
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 3px black;
}
</style>
