<template>

    <v-container>

    <v-layout column>

      <v-flex xs12 sm4 offset-sm4>
        <v-card>
          <v-card-media
            class="message-card white--text"
            height="200px"
            :src="getImgUrl(this.$store.getters.getMessageImage)"
          >
          </v-card-media>
          <v-card-title>
            <div>
              <br>
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
      }
    },
    methods: {
      onClickExit() {
        return this.$router.push('/');
      },
      getImgUrl(pic) {
        pic = !pic ? 'attention-4.png' : pic;
        return require("../assets/" + pic);
      }
    }
  }
</script>

<style>

  .message-card .card__media__background {
    background-size: contain !important;
  }

</style>
