<template>
<div>
  <div class="body-wrapper1"></div>
  <div class="body-wrapper2"></div>
  
  <div class="main-body">
    <div class="container">
        <div align="center" class="mt-3">
          <img src="../assets/imgs/logo.png" class="img-fluid logo-img-resize" alt="">
        </div>
        <div class="row justify-content-center pl-3 pr-3">
          <div class="col-md-4 login-wrapper p-5">
              <div class="mb-4 justify-content-center">
                <div class="hd1 text-center">Create an account</div>
              </div>
              <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="create_account">
                  <div class="row">
                    <div class="col-md-12">
                        <v-text-field type="text" :rules="fullnameRules" v-model="fulltname" label="Fullname" required></v-text-field>
                    </div>
                  
                    <div class="col-md-12">
                        <v-text-field type="email" :rules="emailRules" v-model="email" label="Email address" required></v-text-field>
                    </div>
                    <div class="col-md-12">
                      <v-select v-model="country" :rules="[v => !!v || 'Country is required']" :items="items" label="Country" required></v-select>
                    </div>
                    <div class="col-md-12">
                        <v-text-field type="password" :rules="passwordRules" v-model="password" label="Password"  required></v-text-field>
                    </div>
                    <small class="ml-3">Minimum of 8 characters with a mix of letters, numbers & symbols</small>
                  </div>
                <div class="row justify-content-center mt-3">
                  <v-btn class="curve" type="submit" :disabled="!valid" v-html="sign_up_btn"></v-btn>
                  </div>
                  <div class="row justify-content-center mt-2">
                    <div class=""> <router-link to="/login">Already have an account? Sign in instead</router-link></div>
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
      valid: true,
      error: null,
      sign_up_btn: "Create Account",
      fullname: "",
      fullnameRules: [v => !!v || "Firstname is required"],
      email: "",
      emailRules: [
        v => !!v || "Email is required",
        v => /.+@.+/.test(v) || "Email must be valid"
      ],
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 8) || "Password too weak"
      ],
      country: null,
      items: [
        "Nigeria",
        "Ghana",
        "Congo",
        "Mali",
        "Brazil",
        "China",
        "Spain",
        "France"
      ]
    };
  },
  methods: {
    create_account: async function() {
      if (this.$refs.form.validate()) {
        this.sign_up_btn = `<span><div class="m-loader m-loader--brand"></div></span>`;
        this.valid = false;
        try {
          const response = (await authenticationService.create_account({
            fullname: this.fullname,
            email: this.email,
            country: this.country,
            password1: this.password
          })).data;
          if (response.status) {
            if (response.code) {
              this.$store.dispatch("setToken", response.data.token);
              this.$store.dispatch("setCustomer", response.data);
              this.$router.push({
                path: "/dashboard"
              });
            } else {
            }
          } else {
          }
        } catch (error) {
          this.error = error.response.data.error;
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