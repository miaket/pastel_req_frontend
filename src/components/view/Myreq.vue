<template>
  <form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Date of creation</th>
          <th scope="col">Message</th>
          <th scope="col">Customers</th>
          <th scope="col">Urgency</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in userRequests.body" :key="request.index">
          <th scope="row">{{ request.id }}</th>
          <td>{{ request.createdAt}}</td>
          <td>{{ request.message }}</td>
          <td>
            <ul v-for="customer in request.customers" :key="customer.index">
              <li>{{ customer.regNumber }} - {{ customer.name }}</li>
            </ul>
          </td>
          <td>{{ request.urgencyLevel }}</td>
        </tr>
      </tbody>
    </table>
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
      this.$http.get('req/myrequests/' + this.$store.getters.getUser.id)
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
