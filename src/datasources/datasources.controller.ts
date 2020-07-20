import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { DatasourceDTO } from "./datasource.dto";
import { Datasource } from "./datasource.interface";
import { DatasourcesService } from "./datasources.service";


@Controller('datasources')
export class DatasourcesController {

    constructor(private readonly datasourcesService: DatasourcesService) {

    }

    @Get()
    getAll(): Promise<Datasource[]> {
        return this.datasourcesService.find()
    }

    @Get(':id')
    get(@Param('id') id: string): Promise<Datasource> {
        return this.datasourcesService.findOne(id)
    }

    @Post()
    create(@Body() datasouce: DatasourceDTO): Promise<Datasource> {
        return this.datasourcesService.create(datasouce)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() datasource: DatasourceDTO) {
        this.datasourcesService.update(id, datasource)
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<Datasource> {
        return this.datasourcesService.delete(id)
    }

}