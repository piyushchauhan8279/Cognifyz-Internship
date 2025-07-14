// external modules
const express=require('express')
const app=express()

const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded)


const PORT=3000
app.listen(PORT,()=>{
  console.log(`Server is Listening at PORT:- ${PORT}`);
})