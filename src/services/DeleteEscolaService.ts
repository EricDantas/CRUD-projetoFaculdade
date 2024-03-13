import { AppDataSource } from "../data-source";
import { Escola } from "../entities/Escola";

export class DeleteEscolaService {
    async execute(id: string) {
        const repo = AppDataSource.getRepository(Escola);

        if(!(await repo.findOne({where: {id: id}}))){
            return new Error("Essa Escola não existe!")
        }

        await repo.delete(id);
    }
}