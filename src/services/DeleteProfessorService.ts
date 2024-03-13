import { AppDataSource } from "../data-source";
import { Professor } from "../entities/Professor";


export class DeleteProfessorService {
    async execute(matricula: string) {
        const repo = AppDataSource.getRepository(Professor);

        if(!(await repo.findOne({where: {matricula: matricula}}))){
            return new Error("Esse Professor(a) não existe!")
        }

        await repo.delete(matricula);
    }
}