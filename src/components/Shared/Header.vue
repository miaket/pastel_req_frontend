<template>
  <div class="container">
    <img src="../../assets/cielologo.png" id="logo" alt ="Logo">
    <div class="col-xs-12 form-group">
      <h1>Informações estratégicas</h1>
      <p>{{ user.userName }}</p>
      <hr>
      <h2>Demandas</h2>
    </div>
    <!-- <textarea v-model="flexUser.userName" name="" id="" cols="30" rows="10"></textarea> -->
    <!-- <button @click.prevent="changeUserName" class="btn">change User</button> -->
  </div>
</template>

<script>
  export default {
    data (){
      return{
        user:{
          userName: this.$store.state.userName
        },
        flexUser:{
          userName: ""
        }
      }
    },
    // methods: {
    //   changeUserName () {
    //     console.log(this.$store.state.userName)
    //     this.$store.commit('changeUserName',{
    //       userName: this.flexUser.userName
    //     })
    //   },
    // },
  }
</script>

<style scoped>
  #logo{
     width: 20%
  }
</style>
