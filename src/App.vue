<template>
  <v-app class="app-style">

    <!--<div style="display: none">{{ msg }}</div>-->

    <tool-bar-ctrl
      :provider_logo="company.logo"
      :user_name="user.name"
    />

    <!--<progress-bar-ctrl-->
      <!--v-show="!isUserLoaded"-->
    <!--/>-->

    <main
      class="grey lighten-1">
      <router-view/>
    </main>

    <v-footer
      class="pa-3">
      <v-spacer />
      <div>Pizza Inc. © {{ new Date().getFullYear() }}</div>
    </v-footer>

  </v-app>
</template>

<script>

import ToolBarCtrl from "./components/tool-bar-ctrl.vue";
import ProgressBarCtrl from "./components/progress-bar-ctrl";

export default {
  components: {
    ToolBarCtrl,
    ProgressBarCtrl
  },
  data() {
    return {
      user: {
        "id": "222339ba-8e4e-4489-85fe-2b1862f0f430",
        "name": "Ervin Howell",
        "role": "user",
      },
      company: {
        name: "Pizza Inc.",
        logo: "pizza-logo.png"
      }
    }
  },
  name: 'App'
}

</script>

<style>

  .app-style {
    display: block;
    background-color: lightgrey !important;
  }

  .hide-ctrl {
    display: none;
  }

  .disableSelection{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline: 0;
  }

</style>
