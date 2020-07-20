import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportSchema } from './report.schema';
import { ReportsResolver } from './reports.resolver';
import { ReportsService } from './reports.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Report', schema: ReportSchema }])],
  providers: [ReportsService, ReportsResolver]
})
export class ReportsModule { }
