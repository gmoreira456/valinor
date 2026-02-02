import { DataSource } from 'typeorm';
import { Card } from './cards/card.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1379',
  database: 'kanban',
  entities: [Card],
  migrations: [__dirname + '/cards/migrations/*.{ts,js}'],
  migrationsRun: true,
});
