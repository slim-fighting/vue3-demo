import express, { Router, Express } from 'express'
import axios from 'axios'
const router:Router = express.Router()
const app: Express = express()

router.get('/list', async (req,res)=>{
    const result = await axios.post('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=localCityNCOVDataList,diseaseh5Shelf')
    res.json({
        status: 200,
        message:'success',
        result: {
            data: result.data.data
        } 
    })
})
app.use('*', (req,res,next)=>{
    res.header('Access-Control-Allow-Origin', "*")
    next()
})
app.use('/api', router)
app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000');
})