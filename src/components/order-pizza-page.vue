<template>
  <div>
    <p> {{ pizza.title }}</p>
  </div>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      pizza() {
        return this.$store.getters.getPizza( this.id )
      }
    },
    data() {
      return {

      }
    }
  }
</script>
