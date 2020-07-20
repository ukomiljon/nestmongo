import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReportInput } from './report.input';
import { ReportType } from './reports.dto';
import { Report } from './reports.interface';
import { ReportsService } from './reports.service';

@Resolver('Reports')
export class ReportsResolver {

    constructor(private readonly reportsService: ReportsService) {
    }

    @Query(() => [ReportType])
    async reports() {
        return this.reportsService.findAll()
    }

    @Mutation(() => ReportType)
    async createReport(@Args('input') input: ReportInput) {
        return this.reportsService.create(input)
    }


}
