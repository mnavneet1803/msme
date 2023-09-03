const express=require("express")
const app =express()

app.get("/",(req,res)=>{
    console.log("api hitted successfully")
    res.send("server is running")
})

const PORT = process.env.PORT||8000

app.listen(PORT,()=>{
    console.log(`server is running at port : ${PORT}`)
})