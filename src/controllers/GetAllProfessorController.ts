import { Request, Response } from "express";
import { GetAllProfessorService } from "../services/GetAllProfessorService";


export class GetAllProfessorController {
    async handle(request: Request, response: Response){
        const service = new GetAllProfessorService();

        const professor = await service.execute();

        return response.json(professor);
    }
}