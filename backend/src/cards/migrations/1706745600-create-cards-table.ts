import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCardsTable1706745600000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "cards" (
        "id" SERIAL PRIMARY KEY,
        "title" VARCHAR(255) NOT NULL,
        "description" TEXT NOT NULL,
        "assignee" VARCHAR(255),
        "priority" VARCHAR(10) NOT NULL,
        "dueDate" TIMESTAMP,
        "status" VARCHAR(20) NOT NULL
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cards";`);
  }
}