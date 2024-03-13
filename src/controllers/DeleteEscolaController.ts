import { Request, Response } from "express";
import { DeleteEscolaService } from "../services/DeleteEscolaService";


export class DeleteEscolaController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteEscolaService();

        const result= await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(200).end();
    }
}