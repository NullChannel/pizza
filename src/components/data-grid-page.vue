<template>
    <v-container>

      <v-layout column>

      <progress-bar-ctrl
        v-show="startUpdateRoutine"
      />


      <v-dialog v-model="analysis_dlg" persistent max-width="500px">
        <!--<v-btn color="primary" dark slot="activator">Open Dialog</v-btn>-->
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
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
                <v-flex xs12>
                  <v-text-field label="Email" required></v-text-field>
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
            <v-btn color="blue darken-1" flat @click="OnAnalysisClose">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>














      <v-flex xs12 v-show="data_grid" >
        <v-card>

            <v-card-title>
              <div>
                <h3 class="headline mb-0">Change Prices of Pizzas</h3>
              </div>
              <v-spacer></v-spacer>
              <v-btn class="analysis-btn" color="blue" dark @click="OnAnalysis" >Analysis</v-btn>
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

              <tr >

                <td
                  v-for="(column, index) in headers"
                  :key="index"
                  class="text-xs-right">

                  <template v-if="column.type==='fix'">
                      {{ props.item[column.value] }}
                  </template>

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

import ProgressBarCtrl from "./progress-bar-ctrl"
import ServerProxy from "../proxy/server-proxy.js"

  export default {
    name: "DataGridPage",
    components: {
      ProgressBarCtrl
    },
    data() {
      return {
        analysis_dlg: false,
        data_grid: true,
        startUpdateRoutine: false,
        serverProxy: null,
        headers: [
          { text: 'Pizza Name', value: 'title', type: "fix" },
          { text: 'Pizza Toppings', value: 'subtitle', type: "fix" },
          { text: '$ Small ', value: 'small', type: "editable" },
          { text: '$ Medium', value: 'medium', type: "editable" },
          { text: '$ Large', value: 'large', type: "editable" },
        ],
        items: this.$store.getters.getPizzas
      }
    },
    created: function () {
      this.serverProxy = new ServerProxy();
    },
    methods: {
      OnAnalysis() {
        this.data_grid = false;
        this.analysis_dlg = true;
      },
      OnAnalysisClose() {
        this.analysis_dlg = false;
        this.data_grid = true;
      },


      OnCancel() {
        return this.$router.push('/');
      },
      OnUpdate() {
        this.data_grid = false;
        this.startUpdateRoutine = true;

        this.items.forEach( item => {
          item.prices = [];
          item.prices.push( item.small );
          item.prices.push( item.medium );
          item.prices.push( item.large );
        });

        console.log(this.items);

        this.$store.dispatch('setPizzas', this.items );

        this.serverProxy.updatePizzas( this.items, res => {
          if(res.status === 'fail') {
            this.$store.dispatch("setMessage", res.error );
            this.$store.dispatch("setMessageImage", 'attention.png' );
            return this.$router.push('/message-page');
          }
          else if(res.status === 'success') {
            return this.$router.push('/');
          }
        });
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
