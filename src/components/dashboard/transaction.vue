<template>
    <div class="wrapper-primary">
        <div class="main_wrapper">
            <div class="p-4">
                <div class="title-header">
                    Recent Transactions
                </div>
                <div class="row align-items-baseline filter-bg border m-1 mt-4 pr-3 pl-2">           
                  <span class="filter-mid">
                  <v-menu style="margin-bottom:-2rem !important;"
                          ref="menu"
                          :close-on-content-click="false"
                          v-model="menu"
                          :nudge-right="40"
                          :return-value.sync="date"
                          lazy
                          transition="scale-transition"
                          offset-y
                          full-width
                          min-width="290px"
                      >
                          <v-text-field
                          slot="activator"
                          v-model="date"
                          label="start date"
                          prepend-icon="fa-calendar-alt fa-1x"
                          readonly
                          style="width:8rem !important; font-size: 13px !important"
                          ></v-text-field>
                          <v-date-picker v-model="date" no-title scrollable>
                          <v-spacer></v-spacer>
                          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                          </v-date-picker>
                      </v-menu>
                  </span>
                  <span class="filter-mid mt-2">
                    <v-menu
                        ref="menu2"
                        :close-on-content-click="false"
                        v-model="menu2"
                        :nudge-right="40"
                        :return-value.sync="date2"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                    >
                        <v-text-field
                        slot="activator"
                        v-model="date2"
                        label="End date"
                        prepend-icon="fa-calendar-alt fa-1x"
                        readonly
                        style="width:8rem !important; font-size: 13px !important;"
                        ></v-text-field>
                        <v-date-picker v-model="date2" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="menu2 = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.menu2.save(date2)">OK</v-btn>
                        </v-date-picker>
                    </v-menu>
                </span>
                <span class="filter-mid mb-3">
                    <v-btn ripple class="p-2 filter-mid-btn bg-info text-white" @click="filter_data()">Filter</v-btn>
                </span>
                </div>
                <div class="add-card-wrapper mt-5 w-100" v-if="$store.state.has_no_Transaction">
                    <div class="p-2 ">
                        <div class="add-card-content">
                            <span style="font-weight: 500; font-size: 15px;">No recent transaction found</span>
                        </div>
                    </div>
                </div>
                <div class="has-transaction" v-else>
                    <transaction-detail :id="id" :dialog3="$store.state.dialog3"></transaction-detail>
                    <ul class="recent-transactions mt-3">
                        <!-- <li class="add-card-wrapper" v-if="!datas" >
                            <div class="pt-5 pb-5">
                            <div class="m-loader m-loader--brand"></div>
                            </div>
                        </li> -->
                        <li class="load-trans" @click="View_transaction(data.trans_id)" v-for="data in datas" :key="data.id">
                            <div class="clearfix" style="text-overflow: ellipsis;white-space: nowrap;">
                                <div class="trans-status">
                                    <v-icon class="icon" key="1" v-if="data.trans_status === 0">fa-times-circle text-danger</v-icon>
                                    <v-icon class="icon"  key="2" v-else-if="data.trans_status === 1">fa-exclamation-circle text-warning</v-icon>
                                    <v-icon class="icon" key="3" v-else-if="data.trans_status === 2">fa-check-circle text-success</v-icon>
                                </div>

                                <div class="trans-amount">
                                    {{ data.trans_amount}}
                                    <span>{{ data.trans_type}}</span>
                                </div>

                                <div class="trans-recipient">
                                    {{ data.trans_to}}
                                    <span>{{ data.trans_date}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div ref="trans_bottom" id="bottom" class="mt-3">
                    <div v-html="Loader" align="center"></div>
                    <div v-if="no_more_transaction">
                      No more transactions...
                    </div>
                </div>
            </div>        
        </div>
    </div>
</template>

<script>
import authenticationService from "@/services/authenticationService";
import scrollMonitor from "scrollmonitor";
import transactionDetail from "@/components/dashboard/trans_dialog/transactionDetails";

export default {
  name: "transaction",
  data() {
    return {
      Loader: "",
      date: null,
      date2: null,
      datas: [],
      transactions: [],
      menu: false,
      modal: false,
      menu2: false
    };
  },
  methods: {
    //   to view transaction details on modal when clicked
    View_transaction: async function(id) {
      this.$store.commit("toggle_transDetail");
      this.id = null;
      try {
        const response = (await authenticationService.transaction_details({
          transaction_id: id
        })).data;
        this.id = response;
      } catch (error) {}
    },

    // fetch transaction data and also filter transactions
    filter_data: async function() {
      const route = {
        name: "transaction"
      };
      if (this.date !== "" && this.date2 !== "") {
        route.query = {
          startDate: this.date,
          endDate: this.date2
        };
      }
      this.$router.push(route);
      try {
        const response = (await authenticationService.transactions(
          this.$route.query.startDate,
          this.$route.query.endDate
        )).data;
        if (response.length === 0) {
          this.$store.commit("check_if_trans_exist");
        } else {
          this.transactions = response;
          this.appendTransactions();
        }
      } catch (error) {
        // Error
      }
    },

    // appening data
    appendTransactions: function() {
      if (this.datas.length < this.transactions.length) {
        let append = this.transactions.slice(
          this.datas.length,
          this.datas.length + 12
        );
        this.datas = this.datas.concat(append);
      }
    }
  },
  created() {
    this.filter_data();
  },
  computed: {
    no_more_transaction: function() {
      if (
        this.datas.length === this.transactions.length &&
        this.transactions > 0
      ) {
        return true;
      }
    }
  },
  components: {
    transactionDetail
  },
  mounted() {
    let vueinstance = this;
    let elem = this.$refs.trans_bottom;
    let Watcher = scrollMonitor.create(elem);
    Watcher.enterViewport(function() {
      if (this.transactions.length < 0) {
        return;
      } else {
        vueinstance.Loader = `<span><div class="m-loader m-loader--brand"></div></span>`;
        setTimeout(function() {
          console.log("me and you together we stand, together we fall");
          vueinstance.appendTransactions();
          vueinstance.Loader = "";
        }, 3000);
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/custom.css";
</style>