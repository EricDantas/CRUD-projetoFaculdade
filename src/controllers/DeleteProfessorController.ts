import { Request, Response } from "express";
import { request } from "http";
import { DeleteProfessorService } from "../services/DeleteProfessorService";



export class DeleteProfessorController {
    async handle(request: Request, response: Response){
        const { matricula } = request.params;
        
        const service = new DeleteProfessorService;

        const result = await service.execute(matricula);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(200).end();
    }

}