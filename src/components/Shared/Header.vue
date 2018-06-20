<template>
  <div class="pt-5 my-5">
    <img src="../../assets/cielologo.png" id="logo" alt ="Logo">
    <div class="col-xs-12 form-group">
      <h1>Informações estratégicas</h1>
      <p v-if="getUsername">Hello, {{ getUsername }}!</p>
      <hr>
    </div>
  </div>
</template>

<script>
  export default {
    data (){
      return{

      }
    },
    computed: {
      getUsername () {
        return this.$store.getters.getUser.name
      },
    }
  }
</script>

<style scoped>
  #logo{
    height: 60px
  }
</style>
