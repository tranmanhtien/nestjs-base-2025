import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from 'src/database/entities/user.entity';

dotenv.config();

export const connectionOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'mydatabase',
  synchronize: false,
  // entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
  entities: [User],
  migrations: [__dirname + '/../database/migrations/**/*{.ts,.js}'],
  migrationsRun: false,
  logging: process.env.DATABASE_LOG === 'false' ? false : ['query', 'error'],
  maxQueryExecutionTime: 1000,
};

const DBsource = new DataSource(connectionOptions);
DBsource.initialize()
  .then(() => {
    console.info('DB mysql has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Postgres initialization', err);
  });

export default DBsource;
