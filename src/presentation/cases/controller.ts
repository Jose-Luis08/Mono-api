import { CaseModel } from "../../data/models/Case.model";
import {Request, Response}  from "express"
//import { EmailService } from "../../src/Domain/Service/email.service";

export class CaseController{

    public getCase = async(req: Request, res: Response)=>{
        try{
            //res.send("Hola a todos");
            const cases = await CaseModel.find();
            res.json(cases); 
        }
        catch(error){
    
        }

    }


    public createCase = async (req: Request, res: Response)=> {


        try {
            const {creationDate, age, genre, lat, lng, } = req.body;
            const newCase = await CaseModel.create({
                creationDate, age, genre, lat, lng});
    
            return res.json(newCase);
        }
        catch (error) {
            console.error(error)
    
        }

    }

    public getCaseById = async (req: Request, res: Response) => {

        const { id } = req.params;

        try{
            const casee = await CaseModel.findById(id);
            res.json(casee);
        }
        catch(error){
            console.error(error)
        }

    }

    public updateCase = async (req: Request, res: Response) => {

        const { id } = req.params;
        const {creationDate, age, genre, lat, lng} = req.body;

        try{
            const casee = await CaseModel.findByIdAndUpdate(id, {
                creationDate, age, genre, lat, lng
            });
            res.json(casee);
        }
        catch(error){
            console.error(error)
        }

    }

    public deleteCase= async (req: Request, res: Response) => {

        const { id } = req.params;

        try{
            const casee = await CaseModel.findByIdAndDelete(id);
            res.json("Registro eliminado");
        }
        catch(error){
            console.error(error)
        }


    }
}