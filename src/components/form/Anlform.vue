<template>
  <form>
    <div>
      <input type="radio" id="cb_radio" value="Chargeback" v-model="anlinfo.anlType">
      <label for="cb">Chargeback</label>
      <input type="radio" id="fr_radio" value="Fraud" v-model="anlinfo.anlType">
      <label for="fr">Fraud</label>
    </div>
    <div class="">
      <label for="message">EC number/CNPJ:
      <textarea
        id="message"
        rows="1"
        class="form-control"
        v-model="anlinfo.regNumber"></textarea>
        </label>
    </div>
  </form>
</template>

<script>
  export default {
    data (){
      return{
        anlinfo:{
          anlType: 'Chargeback',
          regNumber: ''
        }
      }
    },
    methods:{
      storeForm(val){
        this.$store.commit('changeForm',{
          form: this.anlinfo
        })
      },
    },
    watch: {
      'anlinfo.regNumber': function (val) {
        this.storeForm(this.anlinfo)
      }
    },
  }
</script>

<style scoped>

</style>
