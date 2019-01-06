<template>
  <div id="app">
      <v-app>
         <router-view/>

         <transition class="alert-in" mode="ease-in-out" appear="">
           <!-- <panel v-if="show"></panel> -->
         </transition>
         
      </v-app>
  </div>
</template>

<script>
import panel from "@/components/panel";
import { mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    panel
  },
  computed: {
    show() {
      return this.$store.state.show_details;
    }
  }
};
</script>

<style>
/* @import "../../../static/css/v.css"; */
#app {
  font-family: Camphor, Open Sans, Segoe UI, san-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a {
  color: #008fda !important;
}
.alert-in-enter-active {
  animation: bounce-in 8s;
  animation-delay: 4s;
  transition-delay: 3s;
}
.alert-in-leave-active {
  animation: bounce-in 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
