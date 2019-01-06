<template>
<div>
  <div class="body-wrapper1"></div>
  <div class="body-wrapper2"></div>
  <div class="main-body">
    <div class="container">
        <div align="center" class="mt-5">
          <img src="../assets/imgs/logo.png" class="img-fluid logo-img-resize" alt="">
        </div>
        <div class="row justify-content-center  pl-3 pr-3">
          <div class="col-md-4 login-wrapper p-5">
            <div class="mb-4 justify-content-center">
              <div class="hd1 text-center">Sign In</div>
              <span class="text-danger">{{ error }}</span>
            </div>
            <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="login()">
              <div class="">
                  <v-text-field type="email" :rules="emailRules" v-model="email" label="Email address" required></v-text-field>
              </div>
              <div class="">
                  <v-text-field :rules="passwordRules" :append-icon="show1 ? 'fa-eye-slash' : 'fa-eye'" @click:append="show1 = !show1" :type="show1 ? 'text' : 'password'" v-model="Password" label="Enter your password" required></v-text-field>
              </div>
              <div align="mt-3">
                <v-btn class="curve2" type="submit" style="margin-left:-1.5px;" v-html="sign_in_btn" :disabled="!valid"></v-btn>
              </div>
              <div class="text-center mt-3 text-bold">
                <span>Dont have an account? <router-link to="register">Click here</router-link></span>
              </div>
              <div class="text-center mt-3 text-bold">
                <router-link to="register">Forgot password? Reset it</router-link>
              </div>
            </v-form>
        </div>
      </div>
      <div class="row justify-content-center pl-3 pr-3">
          <div class="col-md-4 mt-2">
              <div class="d-flex w-100 flex-row align-items-baseline footer-text">
                  <div class="w-75">&copy; 2018</div>
                  <div class="flex-shrink-0 pl-2 pr-2">Help</div>
                  <div class="flex-shrink-0 pl-2 pr-2">Privacy</div>
                  <div class="flex-shrink-0 pl-2 ">Terms</div>
              </div>
          </div>
      </div>
      </div>
  </div>
  </div>
</template>
<script>
import authenticationService from "@/services/authenticationService";

export default {
  name: "Header",
  data() {
    return {
      show1: false,
      valid: true,
      error: "",
      sign_in_btn: "SIGN IN",
      email: null,
      emailRules: [
        v => !!v || "Email is required",
        v => /.+@.+/.test(v) || "Email must be valid"
      ],
      password: "",
      passwordRules: [v => !!v || "Password is required"]
    };
  },
  computed: {
    token: function() {
      return this.$store.state.token;
    }
  },
  methods: {
    login: async function() {
      if (this.$refs.form.validate()) {
        this.sign_in_btn = `<span><div class="m-loader m-loader--brand"></div></span>`;
        this.valid = false;
        try {
          const response = (await authenticationService.login({
            email: this.email,
            password: this.password
          })).data;
          if (response.status) {
            if (response.code) {
              this.$store.dispatch("setToken", response.data.token);
              this.$store.dispatch("setUser", response.data);
              this_router.$router.push({
                path: "/dashboard"
              });
            } else {
            }
          } else {
            this.error = response.data.message;
          }
        } catch (error) {
          this.error = error.response.data.message;
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import "../assets/css/index.css"; */
</style>
