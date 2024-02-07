 const express=require('express')
 const app=express()
 app.use(express())
 app.use(express.urlencoded({extended:true}))
 require('./model/index')
 app.get('/',(req,res)=>{
    res.send("I am alive")
 })
 app.listen(3000,()=>{
    console.log('ready')
 })