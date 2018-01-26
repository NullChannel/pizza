<template>
    <v-layout row justify-center>

      <img src="../assets/p3.jpg" class="bg" />

      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline order-pizza-title">Pizza</span>
            <span class="pizza-order-name blue--text">"{{ pizza.title }}"</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>

                <div class="order-img-center">
                  <img
                    class="pizza-order-img"
                    :src="getImgUrl(pizza.src)" />
                </div>

                <!--<v-flex xs12>-->
                  <!--<v-text-field label="Address" required></v-text-field>-->
                <!--</v-flex>-->

                <v-flex xs12 sm5>
                  <v-select
                    label="Size"
                    v-model="default_pizza_size"
                    autocomplete
                    :items="['Small', 'Medium', 'Large']"
                  ></v-select>
                </v-flex>

                <v-spacer></v-spacer>

                <v-flex xs12 sm5>
                  <v-select
                    label="Amount"
                    v-model="default_pizza_amount"
                    autocomplete
                    :items="['1', '2', '3', '4', '5', '6', '10']"
                  ></v-select>

                </v-flex>

              </v-layout>
            </v-container>

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
              @click.native="onOrder"
            >Order</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      pizza() {
        return this.$store.getters.getPizza( this.id )
      }
    },
    data () {
      return {
        default_pizza_size: 'Medium',
        default_pizza_amount: '1',
        dialog: true
      }
    },
    methods: {
      onClose() {
        this.dialog = false;
        return this.$router.push('/');
      },
      onOrder() {
        this.dialog = false;
        return this.$router.push('/');
      },
      getImgUrl(pic) {
        if(!pic) return;
        return require(`@/assets/${pic}`);
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
  .order-img-center {
    text-align: center;
    width: 100%;
  }
  .pizza-order-img {
    width: 45%;
  }

  .order-pizza-title {
    font-size: 18px !important;
  }

  .pizza-order-name  {
    margin-left: 9px;
    font-size: 24px;
  }

  .card {
    box-shadow: 6px 6px 9px rgba(0, 0, 0, 0.3) !important;
  }
</style>
