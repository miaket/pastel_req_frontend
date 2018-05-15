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
              if (User.username)
              console.log('Success: ', response.date);
              this.$store.commit('changeUserId',{
                userId: this.userid.id
              })
              this.$router.replace({ name: "secure" });
            }, function(response){
            console.log('Error: ', response.data);
          });
          // if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
          //   this.$emit("authenticated", true);
          //   this.$router.replace({ name: "secure" });
          // } else {
          //   console.log("The username and / or password is incorrect");
          // }
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