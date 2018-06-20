<template>
  <form>
    <div>
      <input type="radio" id="cb_radio" value="Chargeback" v-model="anlType">
      <label for="one">Chargeback</label>
      <input type="radio" id="fr_radio" value="Fraude" v-model="anlType">
      <label for="two">Fraude</label>
    </div>
    <div class="">
      <label for="message">EC/CNPJ
      <textarea
        id="message"
        rows="5"
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
  }
</script>

<style scoped>

</style>
