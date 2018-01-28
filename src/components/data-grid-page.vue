<template>
    <v-container>

      <v-layout column>

      <v-flex xs12 >
        <v-card>

            <v-card-title>
              <div>
                <h3 class="headline mb-0">Change Prices of Pizzas</h3>
              </div>
            </v-card-title>

            <v-data-table
              v-bind:headers="headers"
              v-bind:items="items"
              class="table-main "
              hide-actions
            >
            <template slot="headerCell" slot-scope="props">

              {{ props.header.text }}

            </template>

            <template slot="items" slot-scope="props">

              <!--@click="onRowClilck($event,props)"-->
              <tr >

                <td v-for="(column, index) in headers" :key="index" class="text-xs-right">

                  <template v-if="column.type==='fix'">
                      {{ props.item[column.value] }}
                  </template>

                  <!--v-on:keyup.enter="onInputDataTableItemChange(props.item)"-->
                  <template v-if="column.type=='editable'" >
                    <v-text-field class="data-table-editable"
                          slot="input"
                          v-model="props.item[column.value]"
                          single-line
                          counter
                     ></v-text-field>
                  </template>

                </td>
              </tr>
            </template>

          </v-data-table>

          <v-spacer></v-spacer>

           <v-card-actions>
            <v-btn flat color="blue" @click="OnCancel">Cancel</v-btn>
            <v-btn flat color="blue" @click="OnUpdate">Update</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>

    </v-layout>

  </v-container>

</template>

<script>

    export default {
    name: "DataGrid",
    data() {
      return {
        headers: [
          { text: 'Pizza Name', value: 'title', type: "fix" },
          { text: 'Pizza Toppings', value: 'subtitle', type: "fix" },
          { text: '$ Small ', value: 'small', type: "editable" },
          { text: '$ Medium', value: 'medium', type: "editable" },
          { text: '$ Large', value: 'large', type: "editable" },
        ],
        items: this.$store.getters.getPizzas
          /*[

          {
             color : "orange darken-1",
             link : "/order-pizza/8053cc44-5efd-4f89-b327-4c98431fd58a",
             flex : 3,
             src : "p-1.png",
             id : "8053cc44-5efd-4f89-b327-4c98431fd58a",
             title : "Winter Greens",
             subtitle : "Lemon Ricotta, Mozzarella, Olive Oil, Pecorino, Radicchio, Roasted Garlic",
             small: "7.99",
             medium: "9.99",
             large: "11",
             prices : ["7.99","9.99","11"]
          },
          {
             color : "deep-purple darken-1",
             link : "/order-pizza/9b9ebe22-6951-4d13-b6f3-e8fcb11bac02",
             flex : 3,
             src : "p-2.png",
             id : "9b9ebe22-6951-4d13-b6f3-e8fcb11bac02",
             title : "Cheese",
             subtitle : "Frisee, Kalamata Olives, Asiago, Mozzarella, Muenster, Tomato Sauce",
             small: "10",
             medium: "12",
             large: "14",
             prices : ["10","12","14"]
          },

          {
             color : "teal darken-1",
             link: "/order-pizza/887c0bcd-5a8f-42d9-be8e-bdd10561698f",
             flex: 3,
             src: "p-3.png",
             id: "887c0bcd-5a8f-42d9-be8e-bdd10561698f",
             title: "Pepperoni",
             subtitle: "Calabrian Chili, Mozzarella, Pepperoni, Roasted Garlic, Sausage, Tomato Sauce",
             small: "13",
             medium: "15",
             large: "17",
             prices: ["13","15","17"]
          },
          {
             color: "light-blue darken-1",
             link: "/order-pizza/887c0bcd-5a8f-42d9-be8e-bdd105616923",
             flex: 3,
             src: "p-4.png",
             id: "887c0bcd-5a8f-42d9-be8e-bdd105616923",
             title : "BBQ Chicken",
             subtitle : "BBQ Sauce, Jack, Ranch Dressing, Red Onions, Roasted Chicken, Cheddar",
             small: "16",
             medium: "18",
             large: "20",
             prices : ["16","18","20"]
          }

        ]*/
      }
    },
    computed: {
      message() {
        return this.$store.getters.getMessage;
      }
    },
    methods: {
      OnCancel() {
        return this.$router.push('/');
      },
      OnUpdate() {
        this.items.forEach( item => {
          item.prices = [];
          item.prices.push( item.small );
          item.prices.push( item.medium );
          item.prices.push( item.large );
        });

        console.log(this.items);

        this.$store.dispatch('setPizzas', this.items );


      },
      getImgUrl(pic) {
        pic = !pic ? 'attention.png' : pic;
        return require("../assets/" + pic);
      }
    }
  }

</script>

<style>
  .table-main {
    padding: 18px;
    width: 96%;
    margin: auto;
  }

  .data-table-editable {
    width: 39px !important;
    font-size: 13px !important;
    margin-left: 50%;
    padding: 0 !important;
  }

  .input-group__details {
    min-height: 9px;
  }

  .input-group--text-field input {
    text-align: center;
      font-size: 13px;
  }

  .data-table-editable .input-group__input {
    min-height: 0;
    width: 39px;
    text-align: center;
  }

</style>
