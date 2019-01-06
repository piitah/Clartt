<template>
    <div class="trans-main">
      <div class="trans-detail">
       <div class="row justify-content-center">
           <div class="col-md-4 trans-body">
               <div class="container">
                   <div class="trans-header">
                   <div class=" p-3 h-25" align="center">
                      <div class="float-left">
                          <v-icon>fa-check-circle text-success</v-icon>
                      </div>
                      <div>
                           <h3>Hello world</h3>
                            <div>NGN3,000,434.00</div>
                      </div>
                   </div>
               </div>
               <v-divider></v-divider>
               <div class="trans-mainmm p-3">
                   <div>
                    Lorem ipsum dolor, amet consectetur adipisicing elit. Modi beatae suscipit officia
                    deserunt itaque? Ad possimus recusandae alias blanditiis veritatis mollitia, quidem
                    cum voluptates molestias id dolor nobis similique aliquid!
                        Lorem ipsum dolor, amet consectetur adipisicing elit. Modi beatae suscipit officia
                    deserunt itaque? Ad possimus recusandae alias blanditiis veritatis mollitia, quidem
                    cum voluptates molestias id dolor nobis similique aliquid!
                    Ad possimus recusandae alias blanditiis veritatis mollitia, quidem
                    cum voluptates molestias id dolor nobis similique aliquid!
                   </div>
               </div>
               <v-divider></v-divider>
               <div class="trans-footer row justify-content-center">
                   <v-btn class="btn-bloc action-btn" large style="margin: 0;" @click="close_trans">Close</v-btn>
               </div>
               </div>
               
           </div>
       </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    close_trans: function() {
      this.$store.commit("toggle_trans");
    }
  }
};
</script>

<style scoped>
@import "../assets/css/custom.css";
.trans-main {
  position: fixed;
  height: 100%;
  background-color: #28282957;
  width: 100%;
  z-index: 999;
}
.trans-body {
  background-color: #f7f7f7;
  position: absolute;
  width: 90%;
  top: 50%;
  left: 50%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  border-radius: 0.3rem;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  transform: translate(-50%, -50%);
}
</style>

