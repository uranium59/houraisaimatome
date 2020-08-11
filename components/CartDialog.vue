<template>
  <div class="cart-root">
    <v-menu
      top
      right
      transition="slide-y-transition"
      :close-on-content-click="false"
      :offset-y="true"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-fab-transition>
          <v-btn
            v-show="isCartExist"
            fixed
            bottom
            right
            large
            color="green"
            v-bind="attrs"
            v-on="on"
            @click="clickBtn()"
          >
            <v-icon>
              mdi-cart
            </v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
      <v-card>
        <v-card-subtitle>
          <v-textarea
            :value="readableData"
            label="찜한 리스트"
            no-resize
            readonly
            rows="7"
          />
          <v-textarea
            id="copy-area"
            :value="formData"
            label="구글 폼 입력용"
            no-resize
            readonly
            rows="3"
          />
        </v-card-subtitle>
        <v-card-text>
          <v-btn
            @click="copyData()"
          >
            데이터 복사하기
          </v-btn>
          <v-btn
            @click="gotoGoogleForm()"
          >
            구글 폼 바로가기
          </v-btn>
        </v-card-text>
      </v-card>
    </v-menu>
    <v-snackbar
      v-model="snackbar"
      class="snackbar"
      :timeout="2000"
      text
    >
      클립보드에 복사되었습니다
    </v-snackbar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      snackbar: false,
      readableData: '',
      formData: '',
    }
  },
  computed: {
    ...mapGetters(['getOrderExist']),
    isCartExist () {
      console.log('function called', this.getOrderExist)
      return this.getOrderExist
    },
    getReadableData () {
      const cart = this.$store.state.cart
      let totalPrice = 0
      const readable = Object.keys(cart).map(e => {
        const items = cart[e].map(p => {
          totalPrice += p.quantity * p.price
          return `${p.productName} / ${p.quantity} 개 / ${p.price} 원 / 총 ${p.quantity * p.price} 원`
        }).join('\n')
        return `${e}\n${items}`
      }).join('\n')
      return readable + `\n전체 ${totalPrice} 원`
    },
    getFormData () {
      const cart = this.$store.state.cart
      const formdata = Object.keys(cart).map(e => {
        const items = cart[e].map(p => {
          return `${e},${p.id},${p.quantity},${p.price},${p.quantity * p.price},${p.options ? p.options.replace(/,/, '/') : ''}`
        }).join('\n')
        return items
      }).join('\n')
      return formdata
    },
  },
  methods: {
    clickBtn () {
      this.readableData = this.getReadableData
      this.formData = this.getFormData
    },
    copyData () {
      const testingCodeToCopy = document.querySelector('#copy-area')
      testingCodeToCopy.setAttribute('type', 'text')
      testingCodeToCopy.select()
      testingCodeToCopy.setSelectionRange(0, 99999)
      const successful = document.execCommand('copy')
      this.snackbar = successful
      this.$nextTick(() => {
        if (window.getSelection) {
          window.getSelection().removeAllRanges()
        } else if (document.selection) {
          document.selection.empty()
        }
      })
    },
    gotoGoogleForm () {

    },
  }
}
</script>
<style lang="scss">
.cart-root {
  width: 100vw;
  height: 100vh;
}
.snackbar {
  text-align: center;
  .v-snack__content {
    justify-content: center;
  }
}
</style>
