/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Transactions } from 'src/transactions/transactions.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Product, Transactions])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
