<template>
  <div class="container">
      <!-- <div class="row"> -->
        <!-- <app-navmenu> </app-navmenu> -->
          <div class="">
              <router-view name="header-top"></router-view>
              <router-view name="menu-top"></router-view>
              <router-view></router-view>
              <router-view name="header-bottom"></router-view>
          </div>
      <!-- </div> -->
  </div>
</template>

<script>
  import Header from './components/Shared/Header.vue';
  import Formbox from './components/Shared/Formbox.vue';
  import Navmenu from './components/Shared/Navmenu.vue';
  export default {
    data (){
      return{
        bende: 'bende'
      }
    },
    components: {
      appHeader: Header,
      appFormbox: Formbox,
      appNavmenu: Navmenu,
    },
  }
</script>


<style>

</style>
