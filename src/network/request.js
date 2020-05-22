import axios from 'axios'

export function request(config) {
        const instance = axios.create({
            baseURL:'详情联系本人',
            timeout:5000,
        })
        instance.interceptors.response.use(config => {
            return config.data
        },err => {
            console.log(err)
        })

        return instance(config)
}

