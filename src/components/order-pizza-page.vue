<template>
    <v-layout row justify-center>

      <img src="../assets/p3.jpg" class="bg" />

      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline order-pizza-title">Pizza</span>
            <span class="pizza-order-name">"{{ pizza.title }}"</span>
          </v-card-title>
          <div class="pizza-price">${{ price }}</div>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <div class="order-img-center">
                  <img
                    class="pizza-order-img"
                    :src="getImgUrl(pizza.src)" />
                </div>
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
              color="grey darken-1"
              dark
              @click.native="onClose"
            >Close</v-btn>
            <v-btn
              color="red darken-1"
              dark
              @click.native="onOrder"
            >Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
</template>

<script>
  export default {
    name: "OrderPizzaPage",
    props: ['id'],
    computed: {
      title_color() {
        return this.pizza.color;
      },
      price() {
        let price = 0;

        console.log('this.pizza:', this.pizza);
        switch( this.default_pizza_size ) {
          case 'Small' : price = this.pizza.prices[0]; break;
          case 'Medium' : price = this.pizza.prices[1]; break;
          case 'Large' : price = this.pizza.prices[2]; break;
          default: price = this.pizza.prices[0]; break;
        }
        return parseInt( this.default_pizza_amount ) * price;
      },
      pizza() {
        return this.$store.getters.getPizza( this.id );
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

        const msg = `Order: ${this.default_pizza_amount} - "${this.pizza.title}", Total: $${this.price}`;
        this.$store.dispatch("setMessage", msg );
        this.$store.dispatch("setMessageImage", 'thankyou-2.jpg' );

        return this.$router.push('/message-page');
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

  .pizza-price {
    position: absolute;
    top: 15px;
    right: 33px;
    font-size: 45px;
    color: red;
    text-shadow: 3px 3px 15px rgba(0, 0, 0, 0.6);
  }

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
    color: lightgrey;
    font-size: 15px !important;
  }

  .pizza-order-name  {
    margin-left: 9px;
    font-size: 24px;
  }

</style>
