const breakpoint = {
  data () {
    return {
      isMounted: false,
    }
  },
  computed: {
    isDesktop () {
      return this.isMounted && this.$vuetify.breakpoint.lgAndUp
    },
    isTablet () {
      return this.isMounted && this.$vuetify.breakpoint.mdOnly
    },
    isMobile () {
      return this.isMounted ? this.$vuetify.breakpoint.smAndDown : true
    },
    getBreakPointName (){
      return this.isMounted ? this.$vuetify.breakpoint.name : 'lg'
    },
    displayMode () {
      if(this.isDesktop){
        return 'desktop'
      }else if(this.isTablet){
        return 'tablet'
      }else{
        return 'mobile'
      }
    }
  },
  mounted () {
    this.isMounted = true
  }
}

export default breakpoint
