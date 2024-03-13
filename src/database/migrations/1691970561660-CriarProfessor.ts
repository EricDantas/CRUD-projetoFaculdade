import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CriarProfessor1691970561660 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "professor",
                columns: [
                    {
                        name: "matricula",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: "titulacao",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "telefone",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "endereço",
                        type: "varchar"
                    },
                    {
                        name: "escola_id",
                        type: "uuid"
                    },
                    {
                        name: "criado_em",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                //CRIA CHAVE ESTRANGEIRA p/ escola_id
                foreignKeys: [
                    {
                        name: "fk_professor_escola",
                        columnNames: ["escola_id"],
                        referencedTableName: "escola",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("professor");
    }

}
