<template>
  <div id="login">
    <h1>Login</h1>
    <input type="text" name="username" v-model="input.username" placeholder="Username" />
    <input type="password" name="password" v-model="input.password" placeholder="Password" />
    <button type="button" v-on:click="signin()">Signin</button>
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
              console.log(response)
              console.log('Success: ', response.date);
              this.$store.commit('changeuserid',{
                userid: response.id
              })
              this.$store.commit('changeUserName',{
                username: response.username
              })
              console.log(response)
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
    width: 500px;
    border: 1px solid #CCCCCC;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 200px;
    padding: 20px;
  }
</style>