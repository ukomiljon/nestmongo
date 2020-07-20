import { Injectable } from '@nestjs/common';
import { ProductDTO } from './product.dto';
import { Product } from './product.interface';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {

    }

    async delete(id: string): Promise<Product> {
        return await this.productModel.findByIdAndRemove(id)
    }
    async update(id: string, product: Product): Promise<Product> {
        return await this.productModel.findByIdAndUpdate(id, product)
    }
    async create(product: Product) {
        return await new this.productModel(product).save()
    }
    async find(id: string): Promise<Product> {
        return await this.productModel.findById(id)
    }
    async findAll(): Promise<Product[]> {
        return await this.productModel.find()
    }
}
