/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { ProductsModule } from './products/products.module';
import { Product } from './products/product.entity';
import { Transactions } from './transactions/transactions.entity';

@Module({ 
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:(configService:ConfigService) => ({
        type:'postgres',
        host:configService.get('DB_HOST'),
        port:+configService.get('DB_PORT'),
        username:configService.get('DB_USERNAME'),
        password:configService.get('DB_PASSWORD'),
        database:configService.get('DB_DATABASE'),
        entities:[User,Product,Transactions],
        synchronize: true
      }),
      inject:[ConfigService]
    }),
    UsersModule,
    ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
