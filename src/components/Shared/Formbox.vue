<template>
  <form>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>File a Complaint</h1>
        <hr>
        <app-anlform></app-anlform>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
        <label for="message">Describe Request</label><br>
        <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
        <textarea
          id="reqmsg"
          rows="5"
          class="form-control"></textarea>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <button @click.prevent='submitted'
          class="btn btn-primary">Submit!
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
        bende: 'bende'
      }
    },
    components: {
      appAnlform: Anlform,
    },
    methods: {
      submitted() {
        console.log('inside vue submitted')
        let userreq = new FormData();
        userreq.append('userName','testing from vue');
        this.$http.post('user/1/reqcreate', userreq).then(function (response){
          console.log('Success: ', response.date);
        }, function(response){
          console.log('Error: ', response.data);
        });
      }
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
