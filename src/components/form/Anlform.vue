<template>
  <form>
    <div class="">
      <label for="message">EC/CNPJ
        <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
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
  
}
</script>

<style scoped>

</style>
