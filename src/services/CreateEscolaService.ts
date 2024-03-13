import { Escola } from "../entities/Escola";
import { AppDataSource } from "../data-source";


export class CreateEscolaService {

    async execute({ nome, telefone, email, endereço }:EscolaRequest):Promise<Escola | Error> {
        const repo = AppDataSource.getRepository(Escola);

        if(await repo.findOneBy({nome: nome})) {
            return new Error("Escola já existe");
        }

        if(await repo.findOneBy({telefone: telefone})) {
            return new Error("Telefone já existe");
        }

        const escola = repo.create({
            nome,
            telefone,
            email,
            endereço
        })

        await repo.save(escola);

        return escola;
    }
}