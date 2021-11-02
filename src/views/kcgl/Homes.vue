<template>
  <div id="page-list" class="device">
    <header>
      <router-link class="cart" to="/Cart">购物车</router-link>
      <span class="header-title">商品列表</span>
    </header>
    <div class="page">
      <div class="tab-wrap">
        <ul class="cate-tab">
          <!-- <li class="cate tab-active">推荐</li>
          <li class="cate">母婴</li>
          <li class="cate">鞋包饰品</li>
          <li class="cate">食品</li>
          <li class="cate">数码家电</li>
          <li class="cate">居家百货</li> -->
          <li
            class="cate"
            :class="{ 'tab-active': type == item.type }"
            v-for="item in cartType"
            :key="item.id"
            @click="type = item.type"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <ul class="filter-bar">
        <li
          class="filter-opt price-up"
          :class="{ 'filter-active': status == 'all' }"
          @click="status = 'all'"
        >
          综合排序
        </li>
        <li
          class="filter-opt price-up"
          :class="{ 'filter-active': status == 'sales' }"
          @click="status = 'sales'"
        >
          销量优先
        </li>
        <li
          class="filter-opt filter-price price-up"
          :class="{
            'filter-active': status == 'priceMax' || status == 'priceMin',
          }"
          @click="changePrice"
        >
          价格
        </li>
      </ul>
      <ul class="goods-list">
        <li class="goods-item" v-for="item in showGoodsData" :key="item.id">
          <div class="goods-img">
            <img :src="item.img" alt="item.name" />
            <!---->
          </div>
          <div class="goods-info">
            <p class="goods-title">{{ item.name }}</p>
            <div class="goods-price">
              <span
                >¥<b>{{ item.price }}</b></span
              >
            </div>
            <span class="des">{{ item.sales }}人付款</span>
            <span class="save">+</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
const cartType = [
  {
    id: 0,
    name: "推荐",
    type: 0,
  },
  {
    id: 1,
    name: "母婴",
    type: 1,
  },
  {
    id: 2,
    name: "鞋包饰品",
    type: 2,
  },
  {
    id: 3,
    name: "食品",
    type: 3,
  },
  {
    id: 4,
    name: "数码家电",
    type: 4,
  },
  {
    id: 5,
    name: "居家百货",
    type: 5,
  },
];
let boo = true;
export default {
  data() {
    return {
      // goodsData:this.$store.state.goodsData
      cartType,
      type: 0,
      status: "all",
    };
  },
  computed: {
    // goodsData(){
    //     return this.$store.state.goodsData;
    // },
    ...mapState(["goodsData"]),
    showGoodsData() {
      let data = null;
      if (this.type == 0) {
        // return this.$store.state.goodsData;
        data = this.goodsData.map((item) => item);
      } else {
        // return  this.goodsData.filter(item=>item.type==this.type);
        data = this.goodsData.filter((item) => item.type == this.type);
      }
      console.log(data);
      switch (this.status) {
        case "all":
          return data;
        case "sales":
          console.log(123);
          return data.sort((a, b) => {
            return b.sales - a.sales;
          });
        case "priceMax":
          return data.sort((a, b) => b.price - a.price);
        case "priceMin":
          return data.sort((a, b) => a.price - b.price);
      }
    },
  },
  created() {
    // console.log(this.$store);
    this.$store.dispatch("setData");
  },
  methods: {
    changePrice() {
      if (boo) {
        this.status = "priceMax";
        boo = false;
      } else {
        this.status = "priceMin";
        boo = true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.device {
  position: relative;
  float: left;
  width: 100%;
  height: 6.67rem;
  background-color: #eee;
  border-radius: 0.04rem;
  overflow: hidden;
}

header {
  padding: 0 4%;
  position: relative;
  height: 0.44rem;
  line-height: 0.44rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  text-align: center;
}

.header-title {
  font-size: 0.16rem;
  text-align: center;
}

.header-edit {
  float: right;
  padding: 0 0.1rem;
  cursor: pointer;
}
.cart {
  float: left;
}

.tab-wrap {
  width: 100%;
  height: 0.6rem;
  background: red;
  overflow: hidden;
}

.cate-tab {
  white-space: nowrap;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  background-color: #5d4285;
}

.cate {
  display: inline-block;
  width: 0.8rem;
  height: 0.7rem;
  color: #fff;
  line-height: 0.6rem;
  text-align: center;
}

.tab-active {
  background-color: #9a51ff;
}

.filter-bar {
  display: flex;
  height: 0.4rem;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  line-height: 0.4rem;
}

.filter-opt {
  position: relative;
  width: 33.3%;
  color: #5f646e;
  text-align: center;
}

.filter-active {
  // color: #7B57C5;
  color: red;
}

.filter-price:after {
  position: absolute;
  top: 0.13rem;
  margin-left: 0.04rem;
  content: "";
  display: inline-block;
  width: 0.08rem;
  height: 0.14rem;
  background: url("http://ov52d8mm7.bkt.clouddn.com/arrow-default.png")
    no-repeat;
  background-size: 0.08rem 0.14rem;
}

.filter-active.price-up:after {
  background: url("http://ov52d8mm7.bkt.clouddn.com/arrow-down.png") no-repeat;
  background-size: 0.08rem 0.14rem;
}

.filter-active.price-down:after {
  background: url("http://ov52d8mm7.bkt.clouddn.com/arrow-up.png") no-repeat;
  background-size: 0.08rem 0.14rem;
}

.goods-list {
  padding-top: 0.08rem;
  height: 5.13rem;
  overflow-y: scroll;
}

.cart-list {
  height: 5.6rem;
}

.goods-item {
  display: flex;
  margin-bottom: 0.08rem;
  padding: 0.1rem 0.06rem;
  min-height: 0.62rem;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
}

.goods-img {
  position: relative;
  margin-right: 4%;
  display: block;
  width: 16%;
}

.goods-img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.goods-item .flag {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.2rem;
  height: 0.2rem;
  font-size: 0.12rem;
  color: #fff;
  text-align: center;
  line-height: 0.2rem;
  background-color: #fc5951;
  border-radius: 50%;
}

.goods-info {
  position: relative;
  width: 80%;
  text-align: left;
}

.goods-title {
  width: 80%;
  height: 0.38rem;
  color: #363636;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.goods-price {
  margin-top: 0.06rem;
  line-height: 1;
}

.goods-price span {
  font-size: 0.15rem;
  color: #7a45e5;
  /*   background: linear-gradient(90deg, #03D2B3 0, #2181FB 80%, #2181FB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
}

.des {
  font-size: 0.12rem;
  color: #888;
}

.save {
  position: absolute;
  right: 0.1rem;
  bottom: 0.02rem;
  width: 0.32rem;
  height: 0.22rem;
  background-color: #7a45e5;
  font-size: 0.16rem;
  line-height: 0.19rem;
  text-align: center;
  color: #fff;
  border-radius: 0.12rem;
  overflow: hidden;
}
</style>
