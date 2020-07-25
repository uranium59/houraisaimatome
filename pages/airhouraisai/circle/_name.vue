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

      <div class="product-info" :class="!isDesktop ? 'ml-3 mr-0' : 'ml-5 mr-2'">
        <v-card-title
          class="headline"
        >
          상품 정보
        </v-card-title>
        <div v-for="(item, i) in getInfoProducts" :key="i">
          <v-divider />
          <div class="d-flex flex-no-wrap">
            <v-avatar
              v-if="item.productImage"
              class="ma-3"
              :class="!isDesktop ? 'mx-1' : ''"
              :size="isDesktop ? 150 : 110"
              tile
            >
              <v-img v-if="item.productImage.length > 0" :src="item.productImage[0]" />
            </v-avatar>
            <div>
              <v-card-title
                class="headline"
                :class="!isDesktop ? 'px-1' : ''"
                v-text="item.productName"
              />
              <v-card-subtitle :class="!isDesktop ? 'px-1' : ''" v-text="item.price + ' 원'" />
              <v-card-subtitle :class="!isDesktop ? 'px-1' : ''" v-html="item.description" />
            </div>
          </div>
          <v-divider />
          <div class="album-original-info">
            <v-expansion-panels v-if="item.detailInfo" accordion multiple flat class="background-inherit">
              <v-expansion-panel class="background-inherit">
                <v-expansion-panel-header class="py-0 px-1">
                  <v-card-subtitle class="album-original-title px-3 py-2">
                    상품 이미지
                  </v-card-subtitle>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="py-0 px-0">
                  <v-card-text class="album-original-data px-3 py-2">
                    <v-img v-for="(img, m) in removeCover(item.productImage)" :key="m" class="my-1" :src="img" />
                  </v-card-text>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel class="background-inherit">
                <v-expansion-panel-header class="py-0 px-1">
                  <v-card-subtitle class="album-original-title px-3 py-2">
                    추가정보
                  </v-card-subtitle>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="py-0 px-0">
                  <v-card-text class="album-original-data px-3 py-2">
                    <a v-if="item.externalUrl" class="hompage-link" :href="item.externalUrl" target="_blank">
                      {{ item.externalUrl }}
                    </a>
                  </v-card-text>
                  <v-card-text class="album-original-data px-3 py-2" v-html="replaceNextline(item.detailInfo)" />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>
      </div>
      <div class="product-info" :class="!isDesktop ? 'ml-3 mr-0' : 'ml-5 mr-2'">
        <v-card-title
          class="headline mt-5"
        >
          찜 목록
        </v-card-title>
        <v-data-table
          class="cart-table"
          hide-default-footer
          :headers="headers"
          :items="products"
          item-key="id"
        >
          <template v-slot:item.price="{ item }">
            {{ item.price + '원' }}
          </template>
          <template v-slot:item.quantity="{ item }">
            <div class="quantity-input-wrapper">
              <v-text-field
                v-model="item.quantity"
                dense
                single-line
                class="quantity-input"
                type="number"
                @change="() => {if(Number(item.quantity) > 99){ item.quantity = 99 } if(Number(item.quantity) < 0){ item.quantity = 0 }}"
                @keyup="() => {if(Number(item.quantity) > 99){ item.quantity = 99 } if(Number(item.quantity) < 0){ item.quantity = 0 }}"
              />
            </div>
          </template>
        </v-data-table>
        <v-btn class="mt-3" @click="saveOrder()">
          저장하기
        </v-btn>
        <v-btn class="mt-3" @click="clearOrder()">
          모두 지우기
        </v-btn>
        <v-card-subtitle>
          주의! 입력한 찜 목록은 사이트를 벗어나면 초기화 됩니다!
        </v-card-subtitle>
      </div>
    </v-card>
    <v-dialog>
      <v-card>
        <v-card-title>
          에러!
        </v-card-title>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import breakpoints from '../../../mixins/breakpoint'

export default {
  mixins: [breakpoints],
  data () {
    return {
      isLoaded: false,
      circle: {
        products: []
      },
      headers: [
        {
          text: 'id',
          align: 'start',
          value: 'id',
          sortable: false,
        },
        {
          text: '상품명',
          value: 'productName',
          sortable: false,
        },
        {
          text: '가격',
          value: 'price',
          sortable: false,
        },
        {
          text: '수량',
          value: 'quantity',
          width: 200,
          sortable: false,
        },
      ],
      products: [

      ],
    }
  },
  computed: {
    getCircle () {
      return this.circle
    },
    getInfoProducts () {
      return this.getCircle.products
    }
  },
  beforeMount () {
    console.log('name: ', this.$route.params.name)
    console.log('circle: ', this.circle)
    this.$axios.$post('/query/aircircle', {
      name: this.$route.params.name
    }).then((info) => {
      if(!info) {
        this.$router.push('/')
      }
      this.circle = info
      this.products = info.products.map(e => {
        return {
          id: e.productId,
          productName: e.productName,
          price: e.price,
          quantity: 0,
        }
      })
      const oldOrders = this.$store.getters.getCircleOrder(this.circle.boothNumber) || []
      oldOrders.forEach(e => {
        const product = this.products.find(p => {
          return p.id === e.id
        })
        product.quantity = JSON.parse(JSON.stringify(e.quantity))
      })
      
      this.isLoaded = true
      console.log(this.circle)
    })
  },
  methods: {
    saveOrder () {
      const filtered = this.products.filter(e => {
        return e.quantity > 0
      })
      console.log(filtered)
      this.$store.commit('changeOrder', {
        circlenumber: this.circle.boothNumber, 
        orderinfo: JSON.parse(JSON.stringify(filtered))
      })
    },
    clearOrder () {
      this.products.forEach(e => {
        e.quantity = 0
      })
      this.$store.commit('changeOrder', {
        circlenumber: this.circle.boothNumber, 
        orderinfo: [],
      })
    },
    replaceNextline (text) {
      if(!text) {
        return ''
      }
      return text.replace(/\n/gi, '<br>')
    },
    removeCover (list) {
      if(list.length < 2) {
        return []
      }
      return list.slice(1)
    },
  }
}
</script>
<style lang="scss">
.circle-root .v-data-table__mobile-row {
  min-height: 32px !important;
}
</style>
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
.background-inherit {
  background-color: inherit !important;
}
.cart-table {
  background-color: inherit !important;
}
.quantity-input-wrapper {
  max-width: 160px;
}
.quantity-input {
  max-width: 150px !important;
}
</style>
