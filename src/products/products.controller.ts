/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/CreateProductDto.dto';
import { UpdateProductDto } from './dto/UpdateProductDto.dot';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Post()
    create(@Body(ValidationPipe) createProductDto: CreateProductDto){
        return this.productsService.create(createProductDto)
    }

    @Get()
    findAll(){
        return this.productsService.findAll();
    }

    @Get('transactions')
    getTransactions(){
        return this.productsService.getTransactions();
    }

    @Get(':id')
    findOne(@Param('id') id:number){
        return this.productsService.findOne(+id);
    }

    @Put(':id')
    updateProduct(@Param('id') id:number, @Body(ValidationPipe) updateProductDto: UpdateProductDto){
        return this.productsService.update(id,updateProductDto);
    }

    @Delete(':id')
    async delete(@Param('id') id:number){
        return await this.productsService.delete(id)
    }
}
