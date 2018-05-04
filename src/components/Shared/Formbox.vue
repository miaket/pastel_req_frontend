<template>
  <form>
    <div class="row">

      <app-anlform></app-anlform>

    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
        <label for="message">User Id</label><br>
        <textarea v-model="userid.id" name="userid" id="" class="form-control" rows="1"></textarea>
      </div>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
        <label for="message">Describe Request</label><br>
        <textarea v-model="userrequest.content"
          id="reqmsg"
          rows="5"
          class="form-control"></textarea>
          <p>{{userrequest.content}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <button @click.prevent='submitted'
          class="btn btn-primary">Submit!
        </button>
        <button @click.prevent="changeUserId" class="btn"></button>
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
        console.log ('under user: ' + this.$store.state.userId);

        this.$http.post('user/' + this.$store.state.userId + '/reqcreate', this.userrequest)
          .then(response => {
            console.log('Success: ', response.date);
          }, function(response){
          console.log('Error: ', response.data);
        });
      },
      changeUserId () {
        // this.$store.commit('increment')
        console.log(this.$store.state.userId)
        this.$store.commit('changeUserId',{
          userId: this.userid.id
        })
      },
    }
  }
// <script>
//     import Switch from './Switch.vue';
//     export default {
//         data () {
//             return {
//                 userData: {
//                     email: '',
//                     password: '',
//                     age: 27
//                 },
//                 message: 'A new Text',
//                 sendMail: [],
//                 gender: 'Male',
//                 selectedPriority: 'High',
//                 priorities: ['High', 'Medium', 'Low'],
//                 dataSwitch: true,
//                 isSubmitted: false
//             }
//         },
//         methods: {
//           submitted() {
//               this.isSubmitted = true;
//           }
//         },
//         components: {
//             appSwitch: Switch
//         }
//     }
// </script>

</script>

<style scoped>

</style>
