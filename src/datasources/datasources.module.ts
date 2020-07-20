import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DatasourceSchema } from "./datasource.schema";
import { DatasourcesController } from "./datasources.controller";
import { DatasourcesService } from "./datasources.service";


@Module({
    imports: [MongooseModule.forFeature([{ name: 'datasource', schema: DatasourceSchema }])],
    providers: [DatasourcesService],
    controllers: [DatasourcesController]
})

export class DatasourcesModule { }