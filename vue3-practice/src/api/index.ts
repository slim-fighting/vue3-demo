import axios from 'axios'

const Api = axios.create({
    baseURL:"http://localhost:3000",
})
export const getApiList = ()=> Api.get('/api/list').then(res=>res.data)
