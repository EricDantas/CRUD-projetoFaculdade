import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid} from "uuid";
import { Escola } from "./Escola";

@Entity("professor")
export class Professor {

    @PrimaryColumn()
    matricula: string;

    @Column({ unique: true})
    nome: string;

    @Column()
    titulacao: string;

    @Column({ unique: true})
    telefone: string;

    @Column({ unique: true})
    email: string;

    @Column({ unique: true})
    endereço: string;

    @Column()
    escola_id: string;
    
    @ManyToOne(() => Escola)
    @JoinColumn({ name: "escola_id" })
    escola: Escola;

    @CreateDateColumn()
    criado_em: Date;

    constructor() {
        if(!this.matricula){
            this.matricula = uuid();
        }
    }
}