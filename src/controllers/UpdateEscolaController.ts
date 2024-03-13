import { Request, Response } from "express";
import { UpdateEscolaService } from "../services/UpdateEscolaService";


export class UpdateEscolaController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { nome, telefone, email, endereço } = request.body;

        const service = new UpdateEscolaService();

        const result = await service.execute({id, nome, telefone, email, endereço});

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}