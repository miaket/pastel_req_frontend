<template>
  <form>
    <div class="row">
      <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="getRequests()">trigger requests</button>
    </div>
    <ul>
      <li v-for="request in userRequests.body" :key="request.index">
        {{ request.createdAt}} - {{ request.requestId }} - {{ request.urgencyLevel }} 
        {{ request.customers}}

      </li>
    </ul>
    <div>

    </div>
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
      this.$http.get('user/myrequests')
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
