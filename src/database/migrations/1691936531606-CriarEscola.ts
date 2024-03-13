import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CriarEscola1691936531606 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "escola",
                columns: [
                    {
                        name: "id",
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
                        name: "telefone",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "endereço",
                        type: "varchar"
                    },
                    {
                        name: "criado_em",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("escola");
    }

}
