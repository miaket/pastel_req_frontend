<template>
  <div id="login">
    <form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputUsername" class="sr-only">Email address</label>
      <input type="text" name="username" class="form-control" v-model="input.username" placeholder="Username" />
      <input type="password" name="password" class="form-control" v-model="input.password" placeholder="Password" />
      <label for="inputPassword" class="sr-only">Password</label>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="signin()">Signin</button>
      <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
    </form>
  </div>
</template>


<script>
  export default {
    name: 'Signin',
    data() {
      return {
        input: {
          username: "",
          password: ""
        }
      }
    },
    methods: {
      signin() {
        if(this.input.username != "" && this.input.password != "") {
          this.$http.post('signin', this.input)
            .then(response => {
              if (response.username)
              this.$store.commit('changeUserid',{
                userid: response.id
              })
              this.$store.commit('changeUsername',{
                username: response.body.username
              })
              this.$store.commit('changeUserid',{
                userid: response.body.id
              })
              this.$router.replace({ name: "home" });
            }, function(response){
            console.log('Error: ', response.data);
          });
        } else {
          console.log("A username and password must be present");
        }
      }
    }
  }
</script>

<style scoped>
  #login {
    width: 400px;
    border: 1px solid #CCCCCC;
    background-color: #FFFFFF;
    margin: auto;
    padding: 20px;
    font-size: 20;
    
  }
</style>