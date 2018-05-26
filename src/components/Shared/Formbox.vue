<template>
  <form>
    <h2>Demandas</h2>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <app-anlform></app-anlform>
      </div>
    <hr>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
        <label for="message">User Id</label><br>
        <textarea v-model="userid.id" name="userid" id="" class="form-control" rows="1"></textarea>
        <label for="message">Describe Request</label><br>
        <textarea v-model="userrequest.content"
          id="reqmsg"
          rows="5"
          class="form-control"></textarea>
          <p>{{userrequest.content}}</p>
      </div>
    <div class="">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <button @click.prevent='submitted'
          class="btn btn-primary">Submit!
        </button>
        <button @click.prevent="changeUserid" 
          class="btn btn-primary">Change Id
        </button>
      </div>
    </div>
  </form>
</template>

<script>
  import Anlform from '../form/Anlform.vue';
  export default {
    data (){
      return{
        userid:{
          id:''
        },
        userrequest: {
          content: ''
        }
      }
    },
    components: {
      appAnlform: Anlform,
    },
    methods: {
      submitted() {
        console.log ('under user: ' + this.$store.state.userid);
        this.$http.post('user/' + this.$store.state.userid + '/reqcreate', this.userrequest)
          .then(response => {
            console.log('Success: ', response.date);
          }, function(response){
          console.log('Error: ', response.data);
        });
      },
      changeUserid () {
        this.$store.commit('changeUserid',{
          userid: this.userid.id
        })
        console.log(this.$store.state.userid)
      },
    }
  }
</script>

<style scoped>

</style>
