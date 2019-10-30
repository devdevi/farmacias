import Vue from 'vue';
import Vuex from 'vuex';
import comunaService from '@/services/comunas';
import farmaciaService from '@/services/farmacias';
import data from '@/services/data.json';


Vue.use(Vuex);
const farmacias = data;
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
    GET_COMUNAS: ({ commit }) => comunaService.getComunas()
      .then((res) => {
        const name = 'comunas';
        console.log(res);
        const forceData = {
          1: 'REGION DE ARICA Y PARINACOTA',
          2: 'REGION DE TARAPACA',
          3: 'REGION DE ANTOFAGASTA',
          4: 'REGION DE ATACAMA',
          5: 'REGION DE COQUIMBO',
          6: 'REGION DE VALPARAISO',
          7: 'REGION METROPOLITANA',
          8: 'REGION DEL LIBERTADOR GENERAL BERNARDO OHIGGINS',
          9: 'REGION DEL MAULE',
          10: 'REGION DEL BIO-BIO',
          11: 'REGION DE LA ARAUCANIA',
          12: 'REGION DE LOS RIOS',
          13: 'REGION DE LOS LAGOS',
          14: 'REGION DE AYSEN DEL GENERAL CARLOS IBAÑEZ DEL CAMPO',
          15: 'REGION DE MAGALLANES Y LA ANTARTICA CHILENA',
          16: 'REGION DE ÑUBLE',
        };
        const value = forceData;
        commit('SET_DATA', { name, value });
      }),
    GET_FARMACIAS: ({ commit }) => farmaciaService.getData()
      .then((res) => {
        const name = 'farmacias';
        console.log(res);
        const value = farmacias;
        commit('SET_DATA', { name, value });
      }),
    FAKE: ({ commit }) => {
      const name = 'farmacias';
      const value = farmacias;
      commit('SET_DATA', { name, value });
    },
    FAKE_COMUNAS: ({ commit }) => {
      const name = 'comunas';
      const forceData = [
        'REGION DE ARICA Y PARINACOTA',
        'REGION DE TARAPACA',
        'REGION DE ANTOFAGASTA',
        'REGION DE ATACAMA',
        'REGION DE COQUIMBO',
        'REGION DE VALPARAISO',
        'REGION METROPOLITANA',
        'REGION DEL LIBERTADOR GENERAL BERNARDO OHIGGINS',
        'REGION DEL MAULE',
        'REGION DEL BIO-BIO',
        'REGION DE LA ARAUCANIA',
        'REGION DE LOS RIOS',
        'REGION DE LOS LAGOS',
        'REGION DE AYSEN DEL GENERAL CARLOS IBAÑEZ DEL CAMPO',
        'REGION DE MAGALLANES Y LA ANTARTICA CHILENA',
        'REGION DE ÑUBLE',
      ];
      const value = forceData;
      commit('SET_DATA', { name, value });
    },
  },
  modules: {
  },
});
