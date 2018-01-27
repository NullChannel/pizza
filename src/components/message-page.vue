<template>

    <v-container>

    <v-layout column>

      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media
            class="white--text"
            height="200px"
            :src="getImgUrl('p1.jpg')"
          >
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">{{ current_date }}</span><br>
              <h3 class="headline mb-0">{{ message }}</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer/>
            <v-btn flat color="blue" v-on:click="onClickExit">Exit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

    </v-layout>

  </v-container>

</template>

<script>

  export default {
    name: "MessagePage",
    computed: {
      message() {
        return this.$store.getters.getMessage;
      },
      message_image() {
        return this.$store.getters.getMessageImage;
      },
      current_date() {
        return new Date().toLocaleDateString()
      }
    },
    methods: {
      onClickExit() {
        return this.$router.push('/');
      },
      getImgUrl(pic) {
        return require("../assets/" + pic);
      }
    }
  }
</script>

<style></style>
