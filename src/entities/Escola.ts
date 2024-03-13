import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid} from "uuid";

@Entity("escola")
export class Escola {

    @PrimaryColumn()
    id: string;

    @Column({ unique: true})
    nome: string;

    @Column({ unique: true})
    telefone: string;

    @Column()
    email: string;

    @Column()
    endereço: string;

    @CreateDateColumn()
    criado_em: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}