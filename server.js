const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const authRoute=require('./routes/authRoute')
const userRoute=require('./routes/userRoute')
dotenv.config()
mongoose.connect(process.env.DB)
.then(()=>console.log('connected to database'))
.catch((err)=>console.log(err))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/users',userRoute)
app.use('/api/',authRoute)
app.listen(process.env.PORT||6000,console.log(`app runnng on port ${process.env.PORT}`))

