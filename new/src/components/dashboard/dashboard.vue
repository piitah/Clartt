<template>
    <div class="wrapper-primary">
        <div class="main_wrapper">
            <div class="p-4">
                <ul class="user">
                   <li class="float-left">
                        <v-icon class="p-4 border" round>fa-user fa-2x</v-icon>
                   </li>
                    <li class="ml-3 mt-1">
                       <div>
                           <span> <span class="title-header">Hi</span>, <span class="font-weight-medium">Mr alisson Becker</span></span><br>
                           <span><a href="#" class="btn-text">Edit profile  &rarr;</a></span>
                           <span>&nbsp;</span>
                       </div>
                    </li>
                </ul>
                <div class="row justify-content-center mb-4 mt-4">
                    <div class=" user_notice">
                      <div v-if="!bal" class="pt-2 pb-2">
                        <div class="m-loader m-loader--brand"></div>
                      </div>
                      <span v-else class="title-header">{{ bal }}</span>
                    </div>
                </div>
                <v-divider></v-divider>

                <div class=" mx-auto ">
                    <v-dialog v-model="dialog1" max-width="300px">
                        <v-btn slot="activator" class="btn-primary action-btn pl-5 pr-5" color="primary" >Send</v-btn>
                        <v-card style="margin-top:0px important; border-radius: 10px !important;">
                            <v-container nowrap  style="margin-top:0px important;">
                                <div class="p-3">
                                    <div class="row justify-content-center" style="margin-top: -7.9px; margin-bottom: -1.4rem;">
                                        <div class="trans-details-header w-100 p-4 rounded-top" style=" margin: -16px 0px 0px 0px;">
                                            <div class="row justify-content-center">
                                                <span class="title-header">Send money</span>
                                            </div>
                                        </div>
                                        <v-container>
                                            <v-layout wrap>
                                                <v-flex xs12>
                                                    <v-form>
                                                        <v-text-field v-model="email" style="font-size: 14px !important;font-weight: 500 !important;" label="Recipient's email address" type="email" required></v-text-field>
                                                        <v-text-field v-model="send_amount" style="font-size: 14px !important;font-weight: 500 !important;" label="Amount" type="number" required></v-text-field>
                                                        <v-btn class="btn-secondary" color="primary action-btn btn-block" style="margin-left:0 !important;" @click.native="send">Send</v-btn>
                                                    </v-form>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </div>
                                </div>
                            </v-container>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialog2" max-width="300px">
                        <v-btn slot="activator" class="btn-primary1 action-btn pl-5 pr-5 bg-success" >Withdraw</v-btn>
                        <v-card style="margin-top:0px important; border-radius: 10px !important;">
                            <v-container nowrap  style="margin-top:0px important;">
                                <div class="p-3">
                                    <div class="row justify-content-center" style="margin-top: -7.9px; margin-bottom: -1.4rem;">
                                        <div class="trans-details-header w-100 p-4" style="margin: -16px 0px 0px 0px; border-radius: 6px !important;">
                                            <div class="row justify-content-center">
                                                <span class="title-header">Withdraw money</span>
                                            </div>
                                        </div>
                                        <v-container>
                                            <v-layout wrap>
                                                <v-flex xs12>
                                                    <v-form>
                                                        <v-text-field style="font-size: 14px !important;font-weight: 500 !important;" label="Amount" type="number" v-model="withdraw_amount" required></v-text-field>
                                                        <v-select style="font-size: 14px !important;font-weight: 500 !important;" :items="items" v-model="cardType" label="Card" ></v-select>
                                                        <v-btn class="btn-secondary" color="primary action-btn btn-block" style="margin-left:0 !important;" @click="withdraw">Send</v-btn>
                                                    </v-form>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </div>
                                </div>
                            </v-container>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialog4" max-width="350px" >
                        <v-btn slot="activator" color="info" round class="btn-primay action-btn pl-5 pr-5 bg-success" >Fund wallet</v-btn>
                        <v-card style="margin-top:0px important; border-radius: 10px !important;">
                            <v-container nowrap  style="margin-top:0px important;">
                                <div class="p-3">
                                    <div class="row justify-content-center" style="margin-top: -7.9px; margin-bottom: -1.4rem;">
                                        <div class="trans-details-header w-100 p-4" style="margin: -16px 0px 0px 0px; border-radius: 6px;">
                                            <div class="row justify-content-center">
                                                <span class="title-header">Fund wallet</span>
                                            </div>
                                        </div>
                                        <v-container>
                                            <v-layout wrap>
                                                <v-flex xs12>
                                                    <v-form>
                                                        <v-text-field class=""  style="font-size: 14px !important;font-weight: 500 !important;" label="Account name" type="text"></v-text-field>
                                                        <v-text-field style="font-size: 14px !important;font-weight: 500 !important;" label="Amount" type="number" required></v-text-field>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <v-text-field label="email" type="email"></v-text-field>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <v-text-field label="email" type="email"></v-text-field>
                                                            </div>
                                                        </div>
                                                        <v-select style="font-size: 14px !important;font-weight: 500 !important;" :items="items" label="Card" ></v-select>
                                                        <v-btn class="btn-secondary" color="primary action-btn btn-block" style="margin-left:0 !important;" @click.native="fund_wallet">Send</v-btn>
                                                    </v-form>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </div>
                                </div>
                            </v-container>
                        </v-card>
                    </v-dialog>
                </div>
                <div class=" mt-4">
                    <div class="row ">
                        <div class="col-md-8 details w-100 mb-4">
                            <div class="m-0 p-0">
                                <div class="title-header">
                                    Recent Transactions
                                </div>
                                <div class="add-card-wrapper mt-3 w-100" v-if="$store.state.has_no_Transaction">
                                    <div class="p-2">
                                        <div class="add-card-content">
                                            <span style="font-weight: 500; font-size: 15px; line-height:2rem;">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                Accusamus optio delectus a architecto assumenda? 
                                                 odio nulla delectus. Vero sequi vitae qui, expedita doloribus totam asperiores debitis!
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="" v-else>
                                    <transaction-detail :id="id" :dialog3="$store.state.dialog3"></transaction-detail>
                                    <ul class="recent-transactions mt-3">
                                        <li class="" v-if="!datas">
                                        <div class="pt-5 pb-5">
                                            <div class="m-loader m-loader--brand"></div>
                                        </div>
                                        </li>
                                        <li v-else class="load-trans" ref="lexy" @click="toggle(data.trans_id)" v-for="data in datas" :key="data.id">
                                            <div class="clearfix" style="text-overflow: ellipsis;white-space: nowrap;">
                                                <div class="trans-status">
                                                    <v-icon class="icon" key="1" v-if="data.trans_status === 0">fa-times-circle text-danger</v-icon>
                                                    <v-icon class="icon"  key="2" v-else-if="data.trans_status === 1">fa-exclamation-circle text-warning</v-icon>
                                                    <v-icon class="icon" key="3" v-else-if="data.trans_status === 2">fa-check-circle text-success</v-icon>
                                                </div>

                                                <div class="trans-amount">
                                                    NGN {{ data.trans_amount}}
                                                    <span>{{ data.trans_type}}</span>
                                                </div>

                                                <div class="trans-recipient">
                                                    {{ data.trans_to}}
                                                    <span>{{ data.trans_date}}</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="" v-if="datas">
                                            <div class="clearfix" align="center" style="text-overflow: ellipsis;white-space: nowrap;">
                                                <router-link to="/transaction" class="text-white"><v-btn class="btn-primary trans-btn">View all transactions</v-btn></router-link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 details">
                            <div class="title-header mb-3">
                                Cards
                            </div>
                            <div class="add-card-wrapper">
                                <div class="add-card-content">
                                    <p> Lorem ipsum dolor sittempore ex?</p>
                                    <p> Illum inventore laudantium ab?</p>
                                    <p>ipsun lorem illum dolor </p>
                                    <div class="" style="padding-left:58%;">
                                        <v-dialog v-model="dialog_new" max-width="300px">
                                            <v-btn slot="activator" ripple class="btn-primary action-btn mt-3 ml-auto" >Add new Card</v-btn>
                                            <v-card style="margin-top:0px important; border-radius: 10px !important;">
                                                <v-container nowrap  style="margin-top:0px important;">
                                                    <div class="p-3">
                                                        <div class="row justify-content-center" style="margin-top: -7.9px; margin-bottom: -1.4rem;">
                                                            <div class="trans-details-header w-100 p-4" style="margin: -16px 0px 0px 0px; border-radius: 6px !important;">
                                                                <div class="row justify-content-center">
                                                                    <span class="title-header">New Card</span>
                                                                </div>
                                                            </div>
                                                            <v-container>
                                                                <v-layout wrap>
                                                                    <v-flex xs12>
                                                                        <v-form>
                                                                            <v-text-field style="font-size: 14px !important;font-weight: 500 !important;" label="Amount" type="text" required></v-text-field>
                                                                            <v-text-field style="font-size: 14px !important;font-weight: 500 !important;" label="Amount" type="number" required></v-text-field>
                                                                            <v-text-field style="font-size: 14px !important;font-weight: 500 !important;" label="Amount" type="text" required></v-text-field>                                                                                                                                                       
                                                                            <v-btn class="btn-secondary" color="primary action-btn btn-block" style="margin-left:0 !important;" @click="Add_card">Add card</v-btn>
                                                                        </v-form>
                                                                    </v-flex>
                                                                </v-layout>
                                                            </v-container>
                                                        </div>
                                                    </div>
                                                </v-container>
                                            </v-card>
                                        </v-dialog>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import authenticationService from "@/services/authenticationService";
import transactionDetail from "@/components/dashboard/trans_dialog/transactionDetails";
export default {
  name: "Header",
  data() {
    return {
      bal: null,
      id: null,
      datas: null,
      dialog1: false,
      dialog2: false,
      dialog4: false,
      dialog_new: false,
      items: ["MasterCard", "Visa", "eed", "Buzz"],
      withdraw_amount: "",
      cardType: "",
      send_amount: "",
      email: ""
    };
  },
  created() {
    this.fetch_data();
    this.fetch_balance();
  },
  methods: {
    fetch_balance: async function() {
      try {
        const response = (await authenticationService.get_balance()).data;
        this.bal = response;
      } catch (error) {}
    },
    fetch_data: async function() {
      try {
        const response = (await authenticationService.transactions()).data.slice(
          0,
          10
        );
        if (response.length < 0) {
          this.$store.commit("check_if_trans_exist");
        } else {
          this.datas = response;
        }
      } catch (error) {}
    },
    withdraw: async function() {
      this.dialog2 = false;
      const response = (await authenticationService.withdraw_money({
        amount: this.withdraw_amount,
        card: this.cardType
      })).data;
      if (response.status) {
        this.$swal({
          type: "success",
          title: "Withdrawal successful",
          text: "Thanks for using clartt",
          showConfirmbutton: true
        });
      } else {
        this.$swal({
          type: "error",
          title: "Withdrawal successful",
          text: "Thanks for using clartt",
          showConfirmbutton: true
        });
      }
    },
    Add_card: function() {
      this.dialog_new = false;
      this.$swal({
        type: "success",
        title: "Withdrawal successful",
        text: "Thanks for using clartt",
        showConfirmbutton: true
      });
    },
    fund_wallet: function() {
      this.dialog4 = false;
      this.$swal({
        type: "error",
        title: "Funding failed",
        text: "Invalid card, Please enter correct card",
        showConfirmbutton: true
      });
    },
    send: async function() {
      this.dialog1 = false;
      const response = (await authenticationService.send_money({
        email: this.email,
        amount: this.send_amount
      })).data;
      if (response.status) {
        this.$swal({
          type: "success",
          title: "Withdrawal successful",
          text: "Thanks for using clartt",
          showConfirmbutton: true
        });
      } else {
        this.$swal({
          type: "error",
          title: "Withdrawal successful",
          text: "Thanks for using clartt",
          showConfirmbutton: true
        });
      }
    },
    toggle: async function(id) {
      this.$store.commit("toggle_transDetail");
      this.id = null;
      try {
        const response = (await authenticationService.transaction_details({
          transaction_id: id
        })).data;
        this.id = response;
      } catch (error) {}
    }
  },
  components: {
    transactionDetail
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/custom.css";
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
