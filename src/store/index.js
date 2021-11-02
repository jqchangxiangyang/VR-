import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goodsData: [],
    cartData: [],
    totalMount: 0,
    totalPrice: 0,
  },
  mutations: {
    SET_DATA(state, data) {
      const { goodsData, cartData, totalMount, totalPrice } = data;
      state.goodsData = goodsData;
      state.cartData = cartData;
      state.totalMount = totalMount;
      state.totalPrice = totalPrice;
    },
  },
  actions: {
    setData({ commit }) {
      // console.log(context);
      // context.commit('SET_DATA')
      // const goodsData=localStorage.getItem('goods')?JSON.parse(localStorage.getItem('goods')):[];
      const goodsData = JSON.parse(localStorage.getItem("goods")) || [];
      const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
      const totalMount = JSON.parse(localStorage.getItem("totalMount")) || 0;
      const totalPrice = JSON.parse(localStorage.getItem("totalPrice")) || 0;
      commit("SET_DATA", {
        goodsData,
        cartData,
        totalMount,
        totalPrice,
      });
    },
    setData2() {},
  },
  modules: {},
});
