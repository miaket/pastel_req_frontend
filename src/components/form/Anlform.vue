<template>
  <form>
    <div>
      <input type="radio" id="cb_radio" value="Chargeback" v-model="anlType">
      <label for="one">Chargeback</label>
      <input type="radio" id="fr_radio" value="Fraud" v-model="anlType">
      <label for="two">Fraud</label>
    </div>
    <div class="">
      <label for="message">EC number/CNPJ:
      <textarea
        id="message"
        rows="1"
        class="form-control"></textarea>
        </label><br>
    </div>
  </form>
</template>

<script>
  export default {
    data (){
      return{
        anlType: 'Chargeback'
      }
    },
    methods:{
      storeForm(){
        this.$store.commit('changeForm',{
          form: this.reqinfo
        })
      },
    },

  }
</script>

<style scoped>

</style>
