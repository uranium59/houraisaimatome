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

      <div class="product-info" :class="!isDesktop ? 'ml-2 mr-2 pb-3' : 'ml-5 mr-2 pb-3'">
        <v-card-title
          class="headline"
        >
          상품 정보
        </v-card-title>
        <v-card-subtitle>
          주의! 표시되는 재고는 현재 남은 재고가 아니라 전체 재고 수량입니다.
        </v-card-subtitle>
        <div v-for="(item, i) in getInfoProducts" :key="i">
          <v-divider />
          <div class="d-flex flex-no-wrap mb-1">
            <v-avatar
              v-if="item.coverImage"
              class="ma-3"
              :class="!isDesktop ? 'mx-1' : ''"
              :size="isDesktop ? 150 : 110"
              tile
            >
              <v-img :src="item.coverImage" />
            </v-avatar>
            <div>
              <v-card-title
                class="headline"
                :class="!isDesktop ? 'px-1' : ''"
                v-text="item.productName"
              />
              <v-card-subtitle :class="!isDesktop ? 'px-1 pb-2' : 'pb-2'" v-text="item.price + ' 원' + (item.remains ? ` (재고 수량 : ${item.remains})` : '')" />
              <v-card-subtitle :class="!isDesktop ? 'px-1' : ''" v-html="item.description" />
            </div>
          </div>
          <v-divider />
          <div class="album-original-info">
            <v-expansion-panels v-if="item.detailInfo" accordion multiple class="background-inherit">
              <v-expansion-panel class="click-guidance elevation-5">
                <v-expansion-panel-header class="py-0 px-1">
                  <v-card-subtitle class="product-accodian-header px-3 py-2">
                    추가정보
                  </v-card-subtitle>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="py-0 px-0">
                  <div v-if="item.externalUrl">
                    외부 링크 : <a target="_blank" :href="item.externalUrl">{{ item.externalUrl }}</a>
                  </div>
                  <div v-for="(desc, d) in item.detailInfo" :key="d">
                    <v-card-text class="product-detail-head px-3 py-2">
                      {{ desc.head }}
                    </v-card-text>
                    <v-card-text class="product-detail-body px-3 py-2" v-html="replaceNextline(desc.body)" />
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>
        <v-expansion-panels v-if="getCircle.productImages && getCircle.productImages.length > 0" accordion multiple class="background-inherit mt-4">
          <v-expansion-panel class="click-guidance elevation-5">
            <v-expansion-panel-header class="py-0 px-1">
              <v-card-subtitle class="image-expand al-title px-3 py-2">
                상품 이미지
              </v-card-subtitle>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="py-0 px-0">
              <v-card-text class="product-detail-body px-3 py-2">
                <v-img v-for="(img, m) in getCircle.productImages" :key="m" class="my-1" :src="img" />
              </v-card-text>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-divider />
      </div>
      <!-- <div class="product-info" :class="!isDesktop ? 'ml-2 mr-2' : 'ml-5 mr-2'">
        <v-card-title
          class="headline mt-3"
        >
          찜 목록
        </v-card-title>
        <v-divider />
        <v-data-table
          class="cart-table"
          hide-default-footer
          :headers="headers"
          :items="products"
          item-key="id"
          items-per-page="50"
        >
          <template v-slot:[`item.price`]="{ item }">
            {{ item.price + '원' }}
          </template>
          <template v-slot:[`item.quantity`]="{ item }">
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
          <template v-slot:[`item.options`]="{ item }">
            <div class="quantity-option-wrapper">
              <v-text-field
                v-model="item.options"
                dense
                single-line
                class="quantity-input"
              />
            </div>
          </template>
        </v-data-table>
        <v-divider />
        <v-btn class="mt-3" @click="saveOrder()">
          저장하기
        </v-btn>
        <v-btn class="mt-3" @click="clearOrder()">
          모두 지우기
        </v-btn>
        <v-card-subtitle>
          주의! 입력한 찜 목록은 사이트를 벗어나면 초기화 됩니다!
        </v-card-subtitle>
      </div> -->
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
          width: 100,
          sortable: false,
        },
        {
          text: '옵션',
          value: 'options',
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
.circle-root a {
  color: white !important;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    outline-width: 1px;
  }
}
.cart-table {
  .text-start {
    min-width: 100px !important;
  }
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
.product-accodian-header {
  font-size: 18px;
}
.product-detail-head {
  font-size: 16px;
  font-weight: bold;
}
.product-detail-body {
  font-size: 13px;
}
.album-original-data {
  font-size: 13px;
}
.image-expand {
  font-size: 18px;
}
.background-inherit {
  background-color: inherit !important;
  .click-guidance {
    background-color: rgba(38, 171, 207, 0.274) !important;
  }
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
