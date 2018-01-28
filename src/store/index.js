import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex );

export const store = new Vuex.Store({
  state: {
    pizzas: [],
    message: '',
    message_image: ''
  },

  mutations: {

    setUser(state, payload) {
      state.user = payload;
    },

    setPizzas(state, payload) {
      state.pizzas = payload;
    },

    setMessage(state, payload) {
       state.message = payload;
    },

    setMessageImage(state, payload ) {
      state.message_image = payload;
    }
  },

  actions: {

    setPizzas(context, pizzas ) {
      context.commit('setPizzas', pizzas );
    },

    setMessage(context, msg) {
      context.commit('setMessage', msg);
    },

    setMessageImage(context, image ) {
      context.commit('setMessageImage', image );
    }
  },

  getters: {

    getPizzas( state ) {
      return state.pizzas;
    },

    getPizza( state ) {
      return ( pizza_id ) => {
        return state.pizzas.find( pizza => {
          return pizza.id === pizza_id
        })
      }
    },

    getMessage(state) {
      return state.message;
    },

    getMessageImage(state) {
      return state.message_image;
    },
  }
});



