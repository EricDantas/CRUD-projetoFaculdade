import { Request, Response } from "express";
import { CreateEscolaService } from "../services/CreateEscolaService";


export class CreateEscolaController {
    async handle(request: Request, response: Response){
       const {nome, telefone, email, endereço} = request.body

       const service = new CreateEscolaService();

       const result = await service.execute({nome, telefone, email, endereço});

       if(result instanceof Error){
        return response.status(400).json(result.message);
       }

       return response.json(result);
    }
}