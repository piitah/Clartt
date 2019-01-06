import Api from "@/services/api"

export default {
  login(credentials) {
    return Api().post('account/authenticate', credentials)
  },
  create_account(credentials) {
    return Api().post('account/new', credentials)
  },
  transactions(filter_startDate, filter_endDate) {
    return Api().get("transactions", {
      params: {
        startDate: filter_startDate,
        endDate: filter_endDate
      }
    })
  },
  send_money(credentials) {
    return Api().post("sendMoney", credentials)
  },
  withdraw_money(credentials) {
    return Api().post("withdraw_money", credentials)
  },
  send_money(credentials) {
    return Api().post("send_money", credentials)
  }
}

