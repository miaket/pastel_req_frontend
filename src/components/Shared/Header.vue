<template>
  <div class="container py-5">
    <img src="../../assets/cielologo.png" id="logo" alt ="Logo">
    <div class="col-xs-12 form-group">
      <h1>Informações estratégicas</h1>
      <p>{{ user.username }}</p>
      <p>{{ user.userid }}</p>
      <!-- <ul class="nav nav-pills">
        <router-link to="/home" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/form" tag="li" active-class="active"><a>User</a></router-link>
      </ul> -->
      <hr>
    </div>
  </div>
</template>

<script>
  export default {
    data (){
      return{
        user:{
          userid: this.$store.state.userid,
          username: this.$store.state.username
        }
      }
    },
    computed: {
      updateUsername: function(){
        // return this.user
      }
    }
  }
</script>

<style scoped>
  #logo{
     width: 30%
  }
</style>
