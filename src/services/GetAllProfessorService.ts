import { AppDataSource } from "../data-source";
import { Professor } from "../entities/Professor";



export class GetAllProfessorService {
    async execute(){
        const repo = AppDataSource.getRepository(Professor);

        const professor = await repo.find({
            relations: ["escola"],
        });

        return professor;
    }
}