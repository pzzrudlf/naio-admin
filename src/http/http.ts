import request from './request'
const http = new request({
    baseURL:'http://119.45.133.128:8098',
    timeout:10000
})
export default http