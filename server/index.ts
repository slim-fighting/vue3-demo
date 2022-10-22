import express from 'express'

const app = express()
app.get('/',(req,res)=>{
    res.json({
        status: 200,
        message:"success",
        data:{
          msg:  "hello express"
        }
    })
})
app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000');
})