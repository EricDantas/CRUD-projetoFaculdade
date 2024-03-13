import { Request, Response } from "express";
import { UpdateProfessorService } from "../services/UpdateProfessorService";



export class UpdateProfessorController {
    async handle(request: Request, response: Response){
        const { matricula } = request.params;

        const { nome ,titulacao , telefone, email, endereço, escola_id } = request.body;
        
        const service = new UpdateProfessorService();

        const result = await service.execute({matricula ,nome ,titulacao , telefone, email, endereço, escola_id});

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}