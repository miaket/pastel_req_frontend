<template>
<nav class="navbar fixed-top navbar-light bg-light">
  <div class="container">
      <ul class="nav nav-pills">
        <router-link class="navbar-brand" to="/home" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link class="navbar-brand" to="/form" tag="li" active-class="active"><a>Open Request</a></router-link>
        <router-link class="navbar-brand" to="/myrequests" tag="li" active-class="active"><a>My Requests</a></router-link>
      </ul>
      <hr>
  </div>
</nav>
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
  }
</script>

<style scoped>
</style>
