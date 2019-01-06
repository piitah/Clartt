<template>
    <div>
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
                                            <v-text-field style="font-size: 14px !important;font-weight: 500 !important;" label="Amount" type="number" required></v-text-field>
                                            <v-select style="font-size: 14px !important;font-weight: 500 !important;" :items="items" label="Card" ></v-select>
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
    </div>
</template>

<script>
export default {
  name: "dialog",
  props: ["dialog2", "items"],
  data() {
    return {
      // dialog2: "",
      items: ""
    };
  },
  computed: {},
  methods: {
    withdraw: function() {
      this.$emit("withdraw");
    }
  }
};
</script>

<style scoped>
@import "../../../assets/css/custom.css";
</style>
