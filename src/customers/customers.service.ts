import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from './customer.interface';
 


@Injectable()
export class CustomersService {
    constructor(
        @InjectModel('Customer') private readonly customerModel: Model<Customer>,
    ) { }

    async findAll(): Promise<Customer[]> {
        const customers = await this.customerModel.find({})
        return customers.map(item => ({
            id: item.id,
            title: item.name,
            age: item.age
        }));
    }


    async find(id: String): Promise<Customer> {
        return await this.customerModel.findOne({ _id: id })
    }

    async create(customer: Customer): Promise<Customer> {
        const newCustomer = new this.customerModel(customer)
        return await newCustomer.save();
    }

    async update(id: string, customer: Customer): Promise<Customer> {
        return await this.customerModel.findByIdAndUpdate(id, customer, { new: true });
    }

    async delete(id: string): Promise<number> {
        return await this.customerModel.findByIdAndRemove(id)
    }

}
