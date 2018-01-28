<template>
  <v-app class="app-style">

    <tool-bar-ctrl
      v-show="isLoaded"
      class="app-header"
      :provider_logo="company.logo"
    />

    <progress-bar-ctrl
      v-show="!isLoaded" />

    <main
      v-if="isLoaded"
      class="grey lighten-1">
      <router-view/>
    </main>

    <v-footer
      v-if="isLoaded"
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
  mounted: async function() {
    const serverProxy = new ServerProxy();
    let response = await serverProxy.loadPizzas();
    if( response !== null ) {
      this.$store.dispatch("setPizzas", response.pizzas );
      this.isLoaded = true;
    }
  },
  data() {
    return {
      isLoaded: false,
      company: {
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
