<template>
  <v-app class="app-style">

    <tool-bar-ctrl
      class="app-header"
      :provider_logo="company.logo"
    />

    <progress-bar-ctrl v-show="!isPizzasLoaded" />

    <main class="grey lighten-1">
      <router-view/>
    </main>

    <v-footer
      class="app-footer pa-3">
      <v-spacer />
      <div>Pizza Inc. © {{ new Date().getFullYear() }}</div>
    </v-footer>

  </v-app>
</template>

<script>

import ServerProxy from "./proxy/server-proxy"
import ToolBarCtrl from "./components/tool-bar-ctrl.vue";
import ProgressBarCtrl from "./components/progress-bar-ctrl";

export default {
  name: 'App',
  components: {
    ToolBarCtrl,
    ProgressBarCtrl
  },
//  created: function () {
//    this.serverProxy = new ServerProxy();
//  },
  mounted: async function() {
    const serverProxy = new ServerProxy();

    let response = await serverProxy.loadPizzas();
    if( response !== null ) {
      this.$store.dispatch("setPizzas", response.pizzas );
      this.isPizzasLoaded = true;
    }
  },
  data() {
    return {
      company: {
        serverProxy: null,
        isPizzasLoaded: false,
        name: "Pizza Inc.",
        logo: "pizza-logo.png"
      }
    }
  }
}

</script>

<style>

  .app-header,
  .app-footer {
    z-index: 99;
  }

  .app-style {
    display: block;
    background-color: lightgrey !important;
  }

  .hide-ctrl {
    display: none;
  }

  /*.disableSelection{*/
    /*-webkit-touch-callout: none;*/
    /*-webkit-user-select: none;*/
    /*-khtml-user-select: none;*/
    /*-moz-user-select: none;*/
    /*-ms-user-select: none;*/
    /*user-select: none;*/
    /*outline: 0;*/
  /*}*/

</style>
