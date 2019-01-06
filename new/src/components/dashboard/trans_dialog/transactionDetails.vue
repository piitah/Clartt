<template>
    <div>
        <v-dialog v-model="dialog3" max-width="600px" style="border-radius: 15px!important;">
            <v-card style="border: 3px solid #375592 !important; border-radius: 15px !important;">
                <v-container>
                    <div class="justify-content-center">
                        <div v-if="!id" class="pt-5 pb-5">
                            <div class="m-loader m-loader--brand"></div>
                        </div>
                        <div v-else class="trans-body">
                            <div class="trans-amount2">
                            <i v-if="id.trans_status === 0" class="fa fa-times-circle text-danger"></i>
                            <i v-else-if="id.trans_status === 1" class="fa fa-exclamation-circle text-warning"></i>
                            <i v-else-if="id.trans_status === 2" class="fa fa-check-circle text-success"></i>
                            <span>{{id.trans_amount}}</span>
                            </div>
                            <div class="trans-type text-success">{{ id.trans_type}}</div>
                            <div class="row trans-info mt-4 ">
                            <div class="col-12 mb-3 text-center">
                                <div class="info-title">Transaction date</div>
                                <div class="info-data">{{ id.trans_date}}</div>
                            </div>
                            </div>
                            <div class="divider mb-3"></div>
                            <div class="info-tabs">
                            <span class="info-title">Transaction ref.:</span>
                            <span class="info-data">{{ id.trans_ref}}</span>
                            </div>
                            <div class="info-tabs">
                            <span class="info-title">Transacted from:</span>
                            <span class="info-data">{{ id.trans_from}}</span>
                            </div>
                            <div class="info-tabs">
                            <span class="info-title">Transacted to:</span>
                            <span class="info-data"> {{ id.trans_to}}</span>
                            </div>
                            <div class="info-tabs">
                            <span class="info-title">Transaction fee:</span>
                            <span class="info-data">{{id.trans_fee}}</span>
                            </div>
                            <div class="info-tabs">
                            <span class="info-title">Transaction Status:</span>
                            <span class="info-data text-bold text-success">APPROVED</span>
                            </div>
                            <div class="mt-3 text-secondary text-center">
                            If you have any enquiry about this transaction, please <a href="">contact us</a> immediately.
                            </div>
                        </div>
                    </div>
                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
  name: "transactionDetails",
  props: ["id", "dialog3"],
  data() {
    return {};
  },
  methods: {}
};
</script>
