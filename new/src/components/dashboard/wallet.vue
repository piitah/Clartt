<template>
    <div>
      <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
      </div>
      <img src="../../assets/imgs/clartt_3.png" align="center" class="img-fluid" alt="">
    </div>
</template>

<script>
import authenticationService from "@/services/authenticationService";

export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/custom.css";
</style>