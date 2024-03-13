import "reflect-metadata"
import { DataSource } from "typeorm"
import { CriarEscola1691936531606 } from "./database/migrations/1691936531606-CriarEscola"
import { CriarProfessor1691970561660 } from "./database/migrations/1691970561660-CriarProfessor"
import { Escola } from "./entities/Escola"
import { Professor } from "./entities/Professor"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "bancoTeste",
    synchronize: true,
    logging: false,
    entities: [Escola, Professor],
    migrations: [CriarEscola1691936531606, CriarProfessor1691970561660],
    subscribers: [],
})
