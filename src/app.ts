import express from 'express'
import {Request, Response}  from "express"
import { envs } from "./config/envs";
import { CaseModel } from './data/models/Case.model';
import { MongoDatabase } from './data/init';

const app = express();
app.use(express.json());

(async () => 
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName:envs.MONGO_DB    
}))()




app.get("/", async (req:Request, res:Response)=>{

    try{

        res.send("Hola a todos");
    }
    catch(error){

    }

})



app.post('/', async (req:Request, res:Response) => {
    try {
        const {creationDate, age, genre, lat, lng, } = req.body;
        const newCase = await CaseModel.create({
            creationDate, age, genre, lat, lng});

        return res.json(newCase);
    }
    catch (error) {
        console.error(error)

    }
});

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})