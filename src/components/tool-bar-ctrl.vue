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
//      pages: [
//        {
//          icon: "library_books",
//          title: "Alerts",
//          link: "/alerts"
//        },
//        {
//          icon: "recent_actors",
//          title: "Measurement",
//          link: "/measurement"
//        },
//        {
//          icon: "notifications_active",
//          title: "New Alerts",
//          link: "/new-alerts"
//        },
//        {
//          icon: "share",
//          title: "DC Push",
//          link: "/dc-push"
//        }
//      ]
    };
  },
  methods: {
    onListItemClick() {
      console.log("onListItemClick");
    },
    // https://stackoverflow.com/questions/40491506/vue-js-dynamic-images-not-working
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
