/* eslint-disable prettier/prettier */
import 'dotenv/config';
import { DataSource } from 'typeorm';
import { User } from './users/user.entity';
import { Product } from './products/product.entity';
import { Transactions } from './transactions/transactions.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'db', // matches Docker service name
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'nestdb',
  entities: [User, Product, Transactions],
  migrations: ['src/migrations/*.ts'],
  logging: true,
});