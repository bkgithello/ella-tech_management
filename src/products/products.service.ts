/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/CreateProductDto.dto';
import { UpdateProductDto } from './dto/UpdateProductDto.dot';
import { Transactions } from 'src/transactions/transactions.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        @InjectRepository(Transactions)  // <-- inject transaction repository
  private readonly transactionRepository: Repository<Transactions>,
    ){}

    create(createProductDto:CreateProductDto){
        const product = this.productRepository.create(createProductDto);
        return this.productRepository.save(product)
    }

   async findAll(){
        return await this.productRepository.find()
    }

   async findOne(id:number){
        return await this.productRepository.findOne({where: {id}});
    }

    async update(id:number, updateProductDto:UpdateProductDto){
        const product = await this.productRepository.findOneBy({id})
        if(!product){
            throw new NotFoundException("Product not found")
        }

        // new code 
        const previousQuantity = product.quantity;
        // end code 

        const updated = Object.assign(product, updateProductDto)

        //new code
        if(updated.quantity<0){
            throw new BadRequestException("Quantity cannot be negative")
        }
        // end code

        const savedProduct = await this.productRepository.save(updated)

        if(
            updateProductDto.quantity != undefined &&
            updateProductDto.quantity !== previousQuantity
        ){
            const changeAmount = updateProductDto.quantity - previousQuantity;
    await this.transactionRepository.save({
      productId: product.id,      // use fetched product id
      changeAmount,
      previousQuantity,
      newQuantity: updateProductDto.quantity,
    });
        }
        return savedProduct;
    }

    async getTransactions() {
  return this.transactionRepository.find({ order: { createdAt: 'DESC' } });
}

   async delete(id:number){
        const product = await this.productRepository.findOneBy({id})
        if(!product){
            throw new NotFoundException("Product not found")
        }
        await this.productRepository.delete(id);
        return product
    }
}
