<template>
    <v-layout row justify-center>

      <img src="../assets/p1.jpg" class="bg" />

      <progress-bar-ctrl
        v-show="startLoginRoutine"
      />

      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Login for Admin</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>

                <v-flex xs12>
                  <v-text-field label="Name" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Password" type="password" required></v-text-field>
                </v-flex>

              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              flat
              color="blue darken-1"
              dark
              @click.native="onClose"
            >Close</v-btn>
            <v-btn
              color="blue darken-1"
              dark
              @click.native="onLogin"
            >Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
</template>

<script>

  import ProgressBarCtrl from "./progress-bar-ctrl"
  import ServerProxy from "../proxy/server-proxy.js"

  export default {
    name: "LoginPage",
    components: {
      ProgressBarCtrl
    },
    data () {
      return {
        name: "admin",
        pwd: "admin",
        dialog: true,
        startLoginRoutine: false,
        serverProxy: null
      }
    },
    created: function () {
      this.serverProxy = new ServerProxy();
    },
    computed: {
//      pizza() {
//        return this.$store.getters.getPizza( this.id )
//      }
    },
    methods: {
      onClose() {
        this.dialog = false;
        return this.$router.push('/');
      },
      onLogin() {
        this.dialog = false;
        this.startLoginRoutine = true;

        console.log( `user,pwd: ${this.name} - ${this.pwd}`);

        this.serverProxy.userLogin( this.name, this.pwd, res => {

          this.startLoginRoutine = false;

          if(res.status === 'fail') {
            this.$store.dispatch("setMessage", res.error );
            this.$store.dispatch("setMessageImage", 'attention.png' );
            return this.$router.push('/message-page');
          }
          else if(res.status === 'success') {
            console.log(res.data.payload);
            this.$store.dispatch('setPizzas', res.data.payload );
            return this.$router.push('/data-grid-page');
          }
        });
      },
      getImgUrl(pic) {
        if(pic) {
          return require(`@/assets/${pic}`);
        }
      }
    }
  }
</script>

<style>

img.bg {
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
}

  .card {
    box-shadow: 6px 6px 9px rgba(0, 0, 0, 0.3) !important;
  }
</style>
