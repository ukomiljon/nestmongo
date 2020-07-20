import { Controller, Get, Post, Put, Delete, ParamDecoratorEnhancer, Param, Body } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomerDTO } from './customer.dto'
import { Customer } from './customer.interface';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {

    }

    @Get()
    findAll(): Promise<Customer[]> {
        return this.customersService.findAll()
    }

    @Get(':id')
    find(@Param('id') id: string): Promise<Customer> {
        return this.customersService.find(id)
    }

    @Post()
    create(@Body() customer: CustomerDTO): Promise<Customer> {
        return this.customersService.create(customer)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() customer: CustomerDTO): Promise<Customer> {
        return this.customersService.update(id, customer)
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<number> {
        return this.customersService.delete(id)
    }
}
