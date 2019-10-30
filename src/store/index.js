import Vue from 'vue';
import Vuex from 'vuex';
import comunaService from '@/services/comunas';
import farmaciaService from '@/services/farmacias';

// Data Dummy
// import data from '@/services/data.json';


Vue.use(Vuex);
// const farmacias = data;
export default new Vuex.Store({
  state: {
    comunas: {},
    farmacias: [],
  },
  mutations: {
    SET_DATA: (state, { name, value }) => {
      state[name] = value;
    },
  },
  actions: {
    GET_COMUNAS: ({ commit }) => comunaService.getData()
      .then((res) => {
        const name = 'comunas';
        const value = res.data;
        commit('SET_DATA', { name, value });
      }),
    GET_FARMACIAS: ({ commit }) => farmaciaService.getData()
      .then((res) => {
        const name = 'farmacias';
        const value = res.data;
        commit('SET_DATA', { name, value });
      }),
  },
  modules: {
  },
});
