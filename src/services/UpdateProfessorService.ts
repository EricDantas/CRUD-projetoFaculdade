import { AppDataSource } from "../data-source";
import { Escola } from "../entities/Escola";
import { Professor } from "../entities/Professor";


export class UpdateProfessorService {
    async execute({matricula, nome ,titulacao , telefone, email, endereço, escola_id}: ProfessorUpdateRequest){
        const repo = AppDataSource.getRepository(Professor);

        const repoEscola = AppDataSource.getRepository(Escola); 

        const professor = await repo.findOne({where: {matricula: matricula}});

        
        if(!professor) {
            return new Error("Esse Professor não existe!");
        }
        
        if(!await repoEscola.findOne({where: {id: escola_id}})){
            return new Error("Essa Escola não existe!")
        }
        
        if(await repoEscola.findOneBy({nome: nome}) && await professor.nome != nome){
            return new Error("Esse Nome já existe!")
        }

        if(await repoEscola.findOneBy({telefone: telefone}) && await professor.telefone != telefone){
            return new Error("Esse Telefone já existe!")
        }

        if(await repoEscola.findOneBy({email: email}) && await professor.email != email){
            return new Error("Esse Email já existe!")
        }

        if(!await repoEscola.findOneBy({endereço: endereço}) && await professor.endereço != endereço){
            return new Error("Esse Endereço já existe!")
        }

        professor.nome = nome ? nome : professor.nome;
        professor.titulacao = titulacao ? titulacao : professor.titulacao;
        professor.telefone = telefone ? telefone : professor.telefone;
        professor.email = email ? email : professor.email;
        professor.endereço = endereço ? endereço : professor.endereço;
        professor.escola_id = escola_id ? escola_id : professor.escola_id;

        await repo.save(professor);

        return professor;
    }
}