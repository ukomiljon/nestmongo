import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductDTO } from './product.dto';
import { Product } from './product.interface';
import { ProductsService, } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {

    }

    // @Get('/all')
    @Get()
    findAll(): Promise<Product[]> {
        return this.productsService.findAll()
    }

    @Get(':id')
    find(@Param('id') id: string): Promise<Product> {  
        return this.productsService.find(id)
    }

    @Post()
    create(@Body() product: ProductDTO) {
        return this.productsService.create(product)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() product: ProductDTO): Promise<Product> {
        return this.productsService.update(id, product)
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<Product> {
        return this.productsService.delete(id)
    }





}
