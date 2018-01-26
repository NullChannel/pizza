<template>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="500px">
        <!--<v-btn color="primary" dark slot="activator">Open Dialog</v-btn>-->
        <v-card>
          <v-card-title>
            <span class="headline">Order Pizza</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>

                <!--
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Legal first name" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Legal last name" hint="example of persistent helper text"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-flex>
                -->

                <!--<img-->
                <!--class="provider-logo"-->
                <!--:src="getImgUrl(pizza.src)">-->

                <!--<img :src="require('@/assets/p-1.png')" />-->

                <div class="order-img-center">
                  <img
                    class="pizza-order"
                    :src="getImgUrl(pizza.src)" />
                </div>


              <!--<v-card-media-->
                <!--src="https://vuetifyjs.com/static/doc-images/cards/desert.jpg"-->
                <!--height="180px"-->
              <!--/>-->


                <v-flex xs12>
                  <v-text-field label="Email" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Password" type="password" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <!--<v-select-->
                    <!--label="Age"-->
                    <!--required-->
                    <!--:items="['0-17', '18-29', '30-54', '54+']"-->
                  <!--&gt;</v-select>-->
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select
                    label="Amount"
                    autocomplete
                    :items="['1', '2', '3', '4', '5', '6', '10']"
                  ></v-select>
                </v-flex>
              </v-layout>
            </v-container>
            <!--<small>*indicates required field</small>-->
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Submit Order</v-btn>
            <!--<v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>-->
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
        dialog: true
      }
    },
    methods: {
      getImgUrl(pic) {
        if(!pic) return;
        return require(`@/assets/${pic}`);
      }
    }
  }
</script>

<style>
  .order-img-center {
    text-align: center;
    width: 100%;
  }
  .pizza-order {
    width: 36%;
  }
</style>
