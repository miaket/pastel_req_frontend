<template>
  <form>
    <!-- <div class="row">
      <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="getRequests()">trigger requests</button>
    </div> -->
    <ul>
      <li v-for="request in userRequests.body" :key="request.index">
        {{ request.createdAt}} - {{ request.Id }} - {{ request.urgencyLevel }}
        {{ request.customers }}
      </li>
    </ul>
  </form>
</template>

<script>
  export default {
    data (){
      return{
        userid:{
          id:''
        },
        userRequests: {
        }
      }
    },
    computed: {},
    methods: {},
    mounted(){
      this.$http.get('req/myrequests/' + this.$store.getters.getUserid)
        .then(response => {
          this.userRequests = response;
          console.log (this.userRequests)
          return response
        }, function(response){
        console.log('Error: ', response.data);
      });
    }
  }
</script>

<style scoped>

</style>
