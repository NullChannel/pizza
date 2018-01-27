<template>
  <div>

    <v-toolbar app>
      <img
        class="provider-logo"
        :src="getImgUrl(provider_logo)">
      <v-toolbar-title class="ml-2">
        <router-link
          to="/"
          tag="span"
          style="cursor:pointer">Pizza</router-link>
      </v-toolbar-title>
      <v-spacer/>
      <div>
        <span class="body-1">{{ user_name }}</span>
        <v-btn
          color="blue"
          fab
          small
          @click="onLogin"
          dark>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </div>
    </v-toolbar>

  </div>
</template>

<script>
export default {
  name: "ToolbarCtrl",
  props: ["provider_logo", "user_name"],

  data() {
    return {
    };
  },
  methods: {
    onLogin() {
      console.log("onListItemClick");
      return this.$router.push('/login-page');
    },
    getImgUrl(pic) {
      if(!pic) return;
      return require("../assets/" + pic);
    }
  }
};
</script>

<style scoped>
.drawer-bkgr {
  background-color: #1e88e5 !important;
}
.provider-logo {
  height: 30px;
  margin-left: 9px;
}
</style>
