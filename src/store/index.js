import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex );

export const store = new Vuex.Store({
  state: {
    serverProxy: null,  // pointer to server proxy object, create once and use per session
    session_token: '222339ba-8e4e-4489-85fe-2b1862f0f222',
    user: {
      // 3:20 min
      //https://www.youtube.com/watch?v=GcyjaJZaVLg&index=9&list=PL55RiY5tL51qxUbODJG9cgrsVd7ZHbPrt
    },
    pizzas: [
      {
        color: "orange darken-1",
        show_info: false,
        link: "/order-pizza/8053cc44-5efd-4f89-b327-4c98431fd58a",
        flex: 3,
        src: "p-1.png",
        id: "8053cc44-5efd-4f89-b327-4c98431fd58a",
        title: "Winter Greens",
        subtitle: "Lemon Ricotta, Mozzarella, Olive Oil, Pecorino, Radicchio, Roasted Garlic",
        price: "$9.99"
      },
      {
        enable: true,
        color: "deep-purple darken-1",
        link: "/order-pizza/9b9ebe22-6951-4d13-b6f3-e8fcb11bac02",
        flex: 3,
        src: "p-2.png",
        id: "9b9ebe22-6951-4d13-b6f3-e8fcb11bac02",
        title: "Cheazy-E",
        subtitle: "Frisee, Kalamata Olives, Asiago, Mozzarella, Muenster, Tomato Sauce",
        price: "$12"
      },
      {
        enable: true,
        color: "teal darken-1",
        link: "/order-pizza/887c0bcd-5a8f-42d9-be8e-bdd10561698f",
        flex: 3,
        src: "p-3.png",
        id: "887c0bcd-5a8f-42d9-be8e-bdd10561698f",
        title: "Thom Be Good",
        subtitle: "Calabrian Chili, Mozzarella, Pepperoni, Roasted Garlic, Sausage, Tomato Sauce",
        price: "$15"
      },
      {
        enable: true,
        color: "light-blue darken-1",
        link: "/order-pizza/887c0bcd-5a8f-42d9-be8e-bdd105616923",
        flex: 3,
        src: "p-4.png",
        id: "887c0bcd-5a8f-42d9-be8e-bdd105616923",
        title: "BBQ Chicken",
        subtitle: "BBQ Sauce, Jack, Ranch Dressing, Red Onions, Roasted Chicken, Cheddar",
        price: "$18"
      }
    ]
  },

  mutations: {  // for change state

    setUser(state, payload) {
      state.user = payload;
    },


  },

  actions: {     // to dispatch mutation

    // call from any components: this.$store.dispatch('createToDo', { id: '12we344' });

    // https://alligator.io/vuejs/intro-to-vuex/ - async
    loadUser: async function (context) {
      if (!context.state.serverProxy) {
        context.state.serverProxy = new ServerProxy();
      }

      let response = await context.state.serverProxy.getUser();
      //console.log('store.action(loadUser): ', response.user );
      context.commit('setUser', response.user );
    },


  },

  getters: {    // get store value from components

    // call from any components: this.$store.getters.getUser;
    // getUser(state) {
    //   return state.user;
    // },
    //
    // getServerProxy(state) {
    //   return state.serverProxy;
    // },

    getPizzas( state ) {
      return state.pizzas;
    },

    getPizza( state ) {
      return ( pizza_id ) => {
        return state.pizzas.find( pizza => {
          return pizza.id === pizza_id
        })
      }
    }
  }
});



