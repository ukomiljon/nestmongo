import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'
import { DatasourceDTO } from "./datasource.dto";
import { Datasource } from "./datasource.interface";


@Injectable()
export class DatasourcesService {

    constructor(@InjectModel('datasource') private readonly datasourceModel: Model<Datasource>) {

    }


    async find(): Promise<Datasource[]> {
        return await this.datasourceModel.find()
    }
    async findOne(id: string): Promise<Datasource> {
        return await this.datasourceModel.findById(id)
    }

    async create(datasouce: Datasource): Promise<Datasource> {
        return await this.datasourceModel(datasouce).save()
    }

    async update(id: string, datasource: DatasourceDTO) {
        return await this.datasourceModel.findByIdAndUpdate(id, datasource)
    }

    async delete(id: string): Promise<Datasource> {
        return await this.datasourceModel.findByIdAndRemove(id)
    }


}