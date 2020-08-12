<template>
  <div class="circle-list-wrapper">
    <v-img src="/img/bg/type.png" contain max-height="180px" />
    <v-card class="card-background pa-1 mt-2 mb-4">
      <v-card-subtitle class="pa-1 top-announce">
        <b>봉래제 ~air~ 는 봉래제에 부스들의 작품들을 정리한 통신판매 서비스입니다.</b><br><br>
        구매자 여러분들의 배송비 절감을 위해 통판 종료 직후 참가서클의 작품을 수량대로 봉래제 주최진이 먼저 모은후 구매자 분들에게 배송드리는 방법으로 진행하고 있사오니 작품을 받아보시는데 다소의 시간이 걸리는 점 양해 부탁드립니다.
      </v-card-subtitle>
    </v-card>
    <div class="top-text">
      정렬은 서클넘버를 기준으로 합니다.
    </div>
    <div class="show-howto" @click="showHowTo()">
      <v-icon class="howto-icon">
        mdi-chevron-double-right
      </v-icon>
      에어봉래제 통판 신청방법 자세히 보기
    </div>
    <CircleListItem v-for="(item, i) in circleList" :key="i" :circle-info="item" />
    <v-dialog
      v-model="showDialog"
      :width="!isDesktop ? 360 : 900"
    >
      <v-card class="howto-card">
        <v-card-title>
          에어 봉래제 통판 페이지 사용방법
        </v-card-title>
        <v-card-subtitle class="mt-2">
          1. 주문할 상품들을 둘러보기
        </v-card-subtitle>
        <v-card-text>
          <v-img max-height="400" contain src="/img/howto/1-3.png" />
          <br>
          먼저, 리스트를 둘러보며 관심있던 서클을 클릭해서 서클에서 판매하는 굿즈들의 정보를 확인합니다
        </v-card-text>
        <v-card-subtitle>
          2. 구입할 상품을 저장하기
        </v-card-subtitle>
        <v-card-text>
          <v-img contain src="/img/howto/2.png" />
          <br>
          사고싶은 물건을 정하셨다면 페이지 하단에서 각 상품별 수량을 입력하고 저장을 누릅니다.<br>
          상품에 세부 항목이 존재할 경우 우측의 옵션에 세부 항목들을 적습니다.<br>
          저장했던 내용을 삭제하고 싶을 경우 우측의 모두 지우기 버튼을 누르면 됩니다.<br>
          <v-img max-height="236" contain src="/img/howto/3.png" />
          <br>
          장바구니에 성공적으로 저장되었다면 우측 하단에 장바구니 버튼이 생깁니다.<br>
          <span class="important">※ 주의사항 ※ 각 상품에 적힌 재고는 실시간 재고가 아닌 전체 재고 입니다</span>
        </v-card-text>
        <v-card-subtitle>
          3. 구글 폼 데이터 작성하기
        </v-card-subtitle>
        <v-card-text>
          <v-img max-height="271" contain src="/img/howto/4.png" />
          <br>
          원하는 모든 물건을 장바구니에 담았다면 홈페이지에 있는 구글 폼 바로가기 버튼을 눌러 구글 폼에서 배송받을 주소 / 이름 / 연락처 등의 정보를 입력합니다
        </v-card-text>
        <v-card-subtitle>
          4. 저장된 상품 정보 붙여넣기
        </v-card-subtitle>
        <v-card-text>
          <v-img max-height="400" contain src="/img/howto/5.png" />
          <br>
          <v-img max-height="400" contain src="/img/howto/5-1.png" />
          <br>
          구글 폼에 있는 구입할 상품 목록 항목에 장바구니의 데이터 복사하기 버튼을 눌러 저장된 정보를 입력합니다.<br>
          항목에는 내용을 직접 입력하실수도 있지만 구입하는 물건이 많을경우 입력하신 정보를 목록으로 다시 만드는 과정에서 실수할 가능성이 있으니 가급적 홈페이지에서 복사한 정보만 붙여넣어주세요
        </v-card-text>
        <v-card-subtitle>
          5. 전송하기
        </v-card-subtitle>
        <v-card-text>
          <v-img max-height="330" contain src="/img/howto/6.png" />
          <br>
          모든 항목을 작성 완료하셨다면 끝!<br>
          구글폼에 나와있는 계좌에 입금을 하시고 상품의 배송을 편하게 기다려 주시면 됩니다!<br>
          <v-divider />
          <span class="important">※ 주의사항 ※ 재고가 부족한 물건은 신청 순서에 따라 주문이 취소 될 수 있습니다. 이점 양해 부탁드립니다.</span>
          <v-divider />
        </v-card-text>
        <v-card-subtitle>
          ※ 이 페이지는 서클리스트 상단의 "에어봉래제 통판 신청방법 자세히 보기" 를 눌러 다시 볼 수 있습니다<br>
          <v-btn class="mt-2" width="150" @click="showHowTo()">
            닫기
          </v-btn>
        </v-card-subtitle>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import CircleListItem from '../../components/AirHouraisaiCircleItem'
import breakpoints from '../../mixins/breakpoint'

export default {
  components: {
    CircleListItem,
  },
  mixins: [breakpoints],
  data () {
    return {
      circleList: [],
      showDialog: true,
    }
  },
  beforeMount () {
    this.$axios.$post('/query/airlist', {
      name: this.$route.params.name
    }).then((info) => {
      if(!info) {
        this.$router.push('/')
      }
      this.circleList = info
      this.isLoaded = true
      console.log(this.circle)
    })
    if(this.$store.state.firstInfoShow) {
      this.showDialog = false
    }
    this.$store.commit('infoShowed')
  },
  methods: {
    showHowTo () {
      this.showDialog = !this.showDialog
    }
  }
}
</script>
<style lang="scss" scoped>
.top-announce {
  font-size: 14px;
  color: white;
  b {
  font-size: 15px;
  }
}
.top-text {
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 3px black;
  cursor: default;
}
.show-howto {
  margin-top: 4px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 3px black;
  cursor: pointer;
  .howto-icon {
    margin-top: -4px;
    line-height: 1.5;
  }
}
.howto-card {
  max-width: 900px !important;
  min-width: 300px !important;
  .important {
    font-weight: bold;
    color: white;
  }
}
</style>
