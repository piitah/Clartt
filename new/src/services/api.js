import axios from "axios"
import store from '@/store/store'

export default () => {
    return axios.create({
        baseURL: 'https://clartt-api.herokuapp.com/api',
        headers: {
            'Authorization': 'Bearer Token' + store.state.token,
            'Content-Type': 'application/json'
        }
    })

    instance.interceptors.request.use(config => {
        Nprogress.start()
        return config
    })

    instance.interceptors.response.use(response => {
        Nprogress.done()
        return response
    })
}
