import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Student } from './student.interface';

@Injectable()
export class StudentsService {

    constructor(@InjectModel('Student') private readonly studentModel: Model<Student>) {

    }

    async findAll(): Promise<Student[]> {
        return await this.studentModel.find({})
    }

    async find(id: string): Promise<Student> {
        return await this.studentModel.findOne(id)
    }

    async create(student: Student): Promise<Student> {
        return await this.studentModel(student).save()
    }

    async update(id: string, student: Student): Promise<Student> { 
        return await this.studentModel.findByIdAndUpdate(id, student)
    }


    async delete(id: string): Promise<Student> {
        return this.studentModel.findByIdAndRemove(id)
    }
}
