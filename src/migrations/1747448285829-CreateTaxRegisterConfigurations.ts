import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class CreateTaxRegisterConfigurations1747448285829
  implements MigrationInterface
{
  name = 'CreateTaxRegisterConfigurations1747448285829';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableName = 'tax_register_configuration';
    const tableExists = await queryRunner.hasTable(tableName);

    if (!tableExists) {
      await queryRunner.query(`CREATE TABLE "tax_register_configuration"
                               (
                                 "id"          SERIAL            NOT NULL,
                                 "api_key"     character varying NOT NULL,
                                 "description" character varying NOT NULL,
                                 "environment" integer           NOT NULL,
                                 "company_id"  integer           NOT NULL,
                                 "user_id"     integer           NOT NULL,
                                 "deleted_at"  TIMESTAMP         NOT NULL,
                                 "created_at"  TIMESTAMP         NOT NULL DEFAULT now(),
                                 "updated_at"  TIMESTAMP         NOT NULL DEFAULT now(),
                                 CONSTRAINT "PK_f8cb829db19e21109aba1aa147f" PRIMARY KEY ("id")
                               )`);

      // Chave estrangeira: company_id → companies(id)
      await queryRunner.createForeignKey(
        tableName,
        new TableForeignKey({
          columnNames: ['company_id'],
          referencedTableName: 'companies',
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE',
        }),
      );

      // Chave estrangeira: user_id → users(id)
      await queryRunner.createForeignKey(
        tableName,
        new TableForeignKey({
          columnNames: ['user_id'],
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE',
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tax_register_configuration"`);
  }
}
