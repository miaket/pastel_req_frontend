<template>
  <div class="container">
      <!-- <div class="row"> -->
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <router-view name="header-top"></router-view>
              <router-view></router-view>
              <router-view name="header-bottom"></router-view>
          </div>
      <!-- </div> -->
  </div>
</template>

<script>
  import Header from './components/Shared/Header.vue';
  import Formbox from './components/Shared/Formbox.vue';
  export default {
    data (){
      return{
        bende: 'bende'
      }
    },
    components: {
      appHeader: Header,
      appFormbox: Formbox,
    },
  }
</script>


<style>

</style>
