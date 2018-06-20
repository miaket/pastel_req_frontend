<template>
<div>
    <h2>Demandas</h2>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <app-anlform></app-anlform>
      </div>
    <hr>
        <!-- <label for="message">Urgency
        <textarea v-model="reqinfo.urgencyLevel" name="userid" id="" class="form-control" rows="1"></textarea>
          </label> -->
  <form>
        <div class="col-sm-2 col-lg-1">
          <div class="">
            <label for="urgency"> Urgency </label>
            <select
              v-model="reqinfo.urgencyLevel"
              id="priority"
              class="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>

      <div class  ="col-xs-12 col-sm-8 col-md-12">
        <label for="message">Describe Request
        </label>
        <textarea v-model="reqinfo.message"
          id="reqmsg"
          rows="5"
          class="form-control"></textarea>
          <p>{{reqinfo.message}}</p>
      </div>
      <div class="">
        <div class="col-md-4 col-md-offset-1">
          <button @click.prevent='submitted'
            class="btn btn-primary">Submit!
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import Anlform from '../form/Anlform.vue';
  export default {
    data (){
      return{
        userid:{
          id:''
        },
        reqinfo: {
          message: '',
          urgencyLevel: '3'
        }
      }
    },
    components: {
      appAnlform: Anlform,
    },
    methods: {
      submitted() {
        console.log ('posting: ' + 'req/' + this.$store.state.userid + '/reqcreate' + ', body:' + this.$store.getters.getForm);
        this.$http.post('req/' + this.$store.getters.getUser.id + '/reqcreate', this.$store.getters.getForm)
          .then(response => {
            console.log('Success: ', response.data);
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
