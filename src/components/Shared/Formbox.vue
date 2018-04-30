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
        <label for="message">Message</label><br>
        <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
        <textarea
          id="message"
          rows="5"
          class="form-control"></textarea>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="form-group">
        <label for="sendmail">
          <input
            type="checkbox"
            id="sendmail"
            value="SendMail"> Send Mail
        </label>
        <label for="sendInfomail">
          <input
            type="checkbox"
            id="sendInfomail"
            value="SendInfoMail"> Send Infomail
        </label>
        </div>

      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
        <label for="male">
        <input
            type="radio"
            id="male"
            value="Male"> Male
        </label>
        <label for="female">
        <input
            type="radio"
            id="female"
            value="Female"> Female
        </label>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
        <label for="priority">Priority</label>
        <select
          id="priority"
          class="form-control">
        <option></option>
        </select>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <button
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
