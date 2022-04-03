import axios from "axios";
import {ElMessage} from "element-plus";

// axios.defaults.baseURL = 'http://127.0.0.1:5000/'
axios.defaults.baseURL = 'http://127.0.0.1:8081/'
const request = axios.create({
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
    }
})

request.interceptors.request.use(config => {
    config.headers['Authorization'] = localStorage.getItem('token')
    return config
})

request.interceptors.response.use(response => {
    let res = response.data
    if (res.code === '200') {
        ElMessage.success({
            message: res.message,
            duration: 1000
        })
        return response
    } else {
        ElMessage.error(res.message ? res.message : '系统异常')
        return Promise.reject(response.data.message)
    }
}, error => {
    if (error.response.status === 401) {
        error.message = error.response.data.message
    }
    ElMessage.error(error.message)
    return Promise.reject(error)
})

export default request