import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex );

export const store = new Vuex.Store({
  state: {
    pizzas: [],
    // pizzas: [
    //   {
    //     color: "orange darken-1",
    //     link: "/order-pizza/8053cc44-5efd-4f89-b327-4c98431fd58a",
    //     flex: 3,
    //     src: "p-1.png",
    //     id: "8053cc44-5efd-4f89-b327-4c98431fd58a",
    //     title: "Winter Greens",
    //     subtitle: "Lemon Ricotta, Mozzarella, Olive Oil, Pecorino, Radicchio, Roasted Garlic",
    //     price: "9.99",
    //     prices: ['7.99','9.99','11.99']
    //   },
    //   {
    //     color: "deep-purple darken-1",
    //     link: "/order-pizza/9b9ebe22-6951-4d13-b6f3-e8fcb11bac02",
    //     flex: 3,
    //     src: "p-2.png",
    //     id: "9b9ebe22-6951-4d13-b6f3-e8fcb11bac02",
    //     title: "Cheazy-E",
    //     subtitle: "Frisee, Kalamata Olives, Asiago, Mozzarella, Muenster, Tomato Sauce",
    //     prices: ['10','12','14']
    //   },
    //   {
    //     color: "teal darken-1",
    //     link: "/order-pizza/887c0bcd-5a8f-42d9-be8e-bdd10561698f",
    //     flex: 3,
    //     src: "p-3.png",
    //     id: "887c0bcd-5a8f-42d9-be8e-bdd10561698f",
    //     title: "Thom Be Good",
    //     subtitle: "Calabrian Chili, Mozzarella, Pepperoni, Roasted Garlic, Sausage, Tomato Sauce",
    //     prices: ['13','15','17']
    //   },
    //   {
    //     color: "light-blue darken-1",
    //     link: "/order-pizza/887c0bcd-5a8f-42d9-be8e-bdd105616923",
    //     flex: 3,
    //     src: "p-4.png",
    //     id: "887c0bcd-5a8f-42d9-be8e-bdd105616923",
    //     title: "BBQ Chicken",
    //     subtitle: "BBQ Sauce, Jack, Ranch Dressing, Red Onions, Roasted Chicken, Cheddar",
    //     prices: ['16','18','20']
    //   }
    // ],
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



