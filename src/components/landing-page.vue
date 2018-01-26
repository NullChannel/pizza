<template>

  <v-container>

    <v-layout column>

      <v-flex xs10 offset-sm1>

        <v-container grid-list-xl >
          <v-layout row wrap >

            <v-flex
              v-for="page in pages"
              :key="page.id"
              v-bind="{ [`md${page.flex}`]: true }"
              router
            >
            <v-card
              dark
              :color="page.color" >
              <v-card-media
                :src="getImgUrl(page.src)"
                height="180px"
              />
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{ page.title }}</div>
                  <span class="description white--text">{{ page.subtitle }}</span>
                  <span class="price" >{{ page.price }}</span>
                </div>
              </v-card-title>
              <v-card-actions class="action">
                <v-btn :to="page.link">Order</v-btn>
              </v-card-actions>
            </v-card>
            </v-flex>

          </v-layout>

        </v-container>

      </v-flex>

    </v-layout>

  </v-container>

</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      msg: "Home page",
      showAlert: false,
      showAnalysis: false,
      showInfo: false,
      pages: [
        {
          color: "orange darken-1",
          show_info: false,
          link: "/order/8053cc44-5efd-4f89-b327-4c98431fd58a",
          flex: 3,
          src: "p-1.png",
          id: "8053cc44-5efd-4f89-b327-4c98431fd58a",
          title: "Winter Greens",
          subtitle: "Lemon Ricotta, Mozzarella, Olive Oil, Pecorino, Radicchio, Roasted Garlic",
          price: "$9.99"
        },
        {
          enable: true,
          color: "deep-purple darken-1",
          link: "/order/9b9ebe22-6951-4d13-b6f3-e8fcb11bac02",
          flex: 3,
          src: "p-2.png",
          id: "9b9ebe22-6951-4d13-b6f3-e8fcb11bac02",
          title: "Cheazy-E",
          subtitle: "Frisee, Kalamata Olives, Asiago, Mozzarella, Muenster, Tomato Sauce",
          price: "$12"
        },
        {
          enable: true,
          color: "teal darken-1",
          link: "/new-alerts",
          flex: 3,
          src: "p-3.png",
          id: "887c0bcd-5a8f-42d9-be8e-bdd10561698f",
          title: "Thom Be Good",
          subtitle: "Calabrian Chili, Mozzarella, Pepperoni, Roasted Garlic, Sausage, Tomato Sauce",
          price: "$15"
        },
        {
          enable: true,
          color: "light-blue darken-1",
          link: "/order/887c0bcd-5a8f-42d9-be8e-bdd105616923",
          flex: 3,
          src: "p-4.png",
          id: "887c0bcd-5a8f-42d9-be8e-bdd105616923",
          title: "BBQ Chicken",
          subtitle: "BBQ Sauce, Jack, Ranch Dressing, Red Onions, Roasted Chicken, Cheddar",
          price: "$18"
        }
      ]
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    }
  }
};
</script>

<style >
.description {
  display: block;
  min-height: 63px;
  /*height: 96px;*/
}

.card__media__background {
  background-size: contain !important;
}

.price {
  position: absolute;
  bottom: 3px;
  right: 12px;
  font-size: 42px;
   text-shadow: 3px 3px 15px rgba(0, 0, 0, 0.6);
}

/*.action {*/
  /*position: absolute;*/
  /*top: 12px;*/
/*}*/


</style>
