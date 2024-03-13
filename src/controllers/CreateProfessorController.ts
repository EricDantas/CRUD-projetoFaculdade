import { Request, Response } from "express";
import { CreateProfessorService } from "../services/CreateProfessorService";


export class CreateProfessorController {
    async handle(request: Request, response: Response){
        const {nome, titulacao, telefone, email, endereço, escola_id} = request.body

        const service = new CreateProfessorService();

        const result = await service.execute({nome, titulacao, telefone, email, endereço, escola_id});

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result);
    }
}