<template>
  <nav class="navbar fixed-top navbar-light bg-light">
    <div class="container">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link class="nav-link" to="/home" tag="li">
              <a>Home</a>
            </router-link>
          </li>
          <li class="nav-item">  
            <router-link class="nav-link" to="/form" tag="li">
              <a>Open Request</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/myrequests" tag="li">
              <a>My Requests</a>
            </router-link>
          </li>
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
