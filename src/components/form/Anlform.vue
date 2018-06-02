<template>
  <form>
    <div class="">
      <label for="message">Message</label><br>
        <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
      <textarea
        id="message"
        rows="5"
        class="form-control"></textarea>
    </div>
    <div class="">
      <div class="">
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
    <div class="">
      <div class="">
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
    <div class="">
      <div class="">
        <label for="priority">Priority</label>
        <select
          id="priority"
          class="form-control">
        <option></option>
        </select>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>
