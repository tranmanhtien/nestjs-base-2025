// // import { DataSource } from 'typeorm';
// // import 'dotenv/config';

// // export const AppDataSource = new DataSource({
// //   type: 'postgres', // hoặc 'mysql' tùy vào database bạn dùng
// //   host: process.env.DB_HOST || 'localhost',
// //   port: Number(process.env.DB_PORT) || 5432,
// //   username: process.env.DB_USER || 'postgres',
// //   password: process.env.DB_PASSWORD || 'password',
// //   database: process.env.DB_NAME || 'mydatabase',
// //   entities: [__dirname + '/../**/*.entity.js'], // Nếu build bằng TypeScript
// //   migrations: [__dirname + '/../database/migrations/*.js'], // Nếu build bằng TypeScript
// //   synchronize: false,
// //   logging: true,
// // });

// import { DataSource, DataSourceOptions } from 'typeorm';
// import * as dotenv from 'dotenv';

// dotenv.config();

// export const connectionOptions: DataSourceOptions = {
//   type: 'mysql',
//   host: process.env.DATABASE_HOST || 'localhost',
//   port: parseInt(process.env.DATABASE_PORT || '3306'),
//   username: process.env.DATABASE_USERNAME || 'root',
//   password: process.env.DATABASE_PASSWORD || 'root',
//   database: process.env.DATABASE_NAME || 'jasmy',
//   synchronize: false,
//   entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
//   migrations: [__dirname + '/../database/migrations/**/*{.ts,.js}'],
//   migrationsRun: false,
//   logging: process.env.DATABASE_LOG === 'false' ? false : ['query', 'error'],
//   maxQueryExecutionTime: 1000,
// };

// const DBsource = new DataSource(connectionOptions);
// DBsource.initialize()
//   .then(() => {
//     console.info('DB mysql has been initialized!');
//   })
//   .catch((err) => {
//     console.error('Error during Postgres initialization', err);
//   });

// export default DBsource;
