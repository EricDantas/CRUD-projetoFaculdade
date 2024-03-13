import { AppDataSource } from "../data-source";
import { Escola } from "../entities/Escola";
import { Professor } from "../entities/Professor";


export class CreateProfessorService {
    async execute({nome, titulacao, telefone, email, endereço, escola_id}: ProfessorRequest): Promise<Professor | Error> {
        const repo = AppDataSource.getRepository(Professor);
        const repoEscola = AppDataSource.getRepository(Escola);

        if(!await repoEscola.findOne({where: {id: escola_id}})){
            return new Error("Essa Escola não existe!")
        }

        const professor = repo.create({nome, titulacao, telefone, email, endereço, escola_id});

        await repo.save(professor);

        return professor;
    }
}