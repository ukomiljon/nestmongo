import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Report } from './reports.interface'

@Injectable()
export class ReportsService {

    constructor(@InjectModel('Report') private readonly reportModel: Model<Report>) {

    }

    async findAll(): Promise<Report[]> {
        return await this.reportModel.find().exec();
    }

    async find(id: string): Promise<Report> {
        return await this.reportModel.findOne(id)
    }

    async create(report: Report): Promise<Report> {
        return await new this.reportModel(report).save()
    }

    async update(id: string, report: Report): Promise<Report> {
        return await this.reportModel.findByIdAndUpdate(id, report)
    }

    async delete(id: string): Promise<Report> {
        return await this.reportModel.findByIdAndRemove(id)
    }
}
