<template>
  <form>
    <div class="row">
      <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="getRequests()">trigger requests</button>
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
    methods: {
      getRequests() {
        // if(this.input.username != "" && this.input.password != "") {
        this.$http.get('user/myrequests', this.input)
          .then(response => {
            this.userRequests = response;
            console.log (response)
            console.log (this.userRequests)
          }, function(response){
          console.log('Error: ', response.data);
        });
        // } else {
        //   console.log("A username and password must be present");
        // }
      }
    }
  }
</script>

<style scoped>

</style>
