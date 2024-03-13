import { Request, Response } from "express";
import { GetAllEscolaService } from "../services/GetAllEscolaService";


export class GetAllEscolaController {
    async handle(request: Request, response: Response){
        const service = new GetAllEscolaService();

        const escola = await service.execute();

        return response.json(escola);
    }
}