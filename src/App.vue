<template>
  <div class="container">
    <app-header></app-header>
    <app-formbox></app-formbox>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail:</p>
            <p>Password:</p>
            <p>Age:</p>
            <p>Message: </p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li></li>
            </ul>
            <p>Gender:</p>
            <p>Priority:</p>
            <p>Switched:</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Shared/Header.vue';
  import Formbox from './components/Shared/Formbox.vue';
  //import apiheader from "./component/shared/Header.vue";
  export default {
    data (){
      return{
        bende: 'bende'
      }
    },
    components: {
      appHeader: Header,
      appFormbox: Formbox,
      //Servers,
      //'app-server-details': ServerDetails,
      //'app-footer': Footer
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


<style>

</style>
