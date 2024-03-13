import { AppDataSource } from "../data-source";
import { Escola } from "../entities/Escola";


export class GetAllEscolaService {
    async execute() {
        const repo = AppDataSource.getRepository(Escola);

        const escola = await repo.find();

        return escola;
    }
}