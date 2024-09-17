import express from 'express'
import {Request, Response}  from "express"

const app = express()



app.get("/", async (req:Request, res:Response)=>{

    try{

        //res.send("Hola a todos");
    }
    catch(error){

    }

})

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})