<template>
  <form>
    <div>
      <input type="radio" id="cb_radio" value="Chargeback" v-model="reqinfo.anlType">
      <label for="cb">Chargeback</label>
      <input type="radio" id="fr_radio" value="Fraud" v-model="reqinfo.anlType">
      <label for="fr">Fraud</label>
    </div>
    <div class="">
      <label for="message">EC number/CNPJ:
      <textarea
        id="message"
        rows="1"
        class="form-control"
        v-model="auxRegNumber"></textarea>
        </label>
    </div>
  </form>
</template>

<script>
  export default {
    data (){
      return{
        auxRegNumber: '',
        reqinfo:{
          anlType: 'Chargeback',
          regNumber: []
        }
      }
    },
    methods:{
      storeForm(dataObj){
        this.$store.dispatch('changeForm',{
          form: dataObj
        })
      },
    },
    watch: {
      'reqinfo.anlType': function () {
        this.storeForm(this.reqinfo);
      },
      auxRegNumber: function () {
        let regNumberArray = this.auxRegNumber.split(',');
        this.reqinfo.regNumber = regNumberArray
        this.storeForm(this.reqinfo);
      }
    },
  }
</script>

<style scoped>

</style>
