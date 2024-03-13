import { AppDataSource } from "../data-source";
import { Escola } from "../entities/Escola";



export class UpdateEscolaService {
    async execute({id, nome, telefone, email, endereço}: EscolaUpdateRequest) {
        const repo = AppDataSource.getRepository(Escola);

        const escola = await repo.findOne({where: {id: id}});

        if(!escola) {
            return new Error("Essa Escola não existe!");
        }

        if(await repo.findOneBy({nome: nome}) && await escola.nome != nome) {
            return new Error("Escola já existe");
        }

        if(await repo.findOneBy({telefone: telefone}) && await escola.telefone != telefone) {
            return new Error("Telefone já existe");
        }

        escola.nome = nome ? nome : escola.nome;
        escola.telefone = telefone ? telefone : escola.telefone;
        escola.email = email ? email : escola.email;
        escola.endereço = endereço ? endereço : escola.endereço;

        await repo.save(escola);

        return escola;
    }
}