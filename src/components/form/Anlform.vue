<template>
  <form>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

        <div class="form-group">
        <label for="email">Mail</label>
        <input
            type="text"
            id="email"
            class="form-control">
        </div>
        <div class="form-group">
        <label for="password">Password</label>
        <input
            type="password"
            id="password"
            class="form-control">
        </div>
        <div class="form-group">
        <label for="age">Age</label>
        <input
            type="number"
            id="age"
            class="form-control">
        </div>

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
    </form>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>
