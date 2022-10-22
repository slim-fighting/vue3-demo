import axios from 'axios'

type ApiResponse = {
    status: number,
    message: string,
    result: any
}
const Api = axios.create({
    baseURL:"http://localhost:3000",
})
export const getApiList = ()=> Api.get('/api/list').then(res=>res.data.result.data)
