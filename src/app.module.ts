import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customers/customer.module';
import { StudentsModule } from './students/students.module';
import { UsersModule } from './users/users.module';
import { ReportsService } from './reports/reports.service';
import { ReportsModule } from './reports/reports.module';
import { join } from 'path';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { DatasourcesModule } from './datasources/datasources.module';
 
@Module({
  imports: [
    UsersModule,
    CustomerModule,
    StudentsModule,
    ReportsModule,
    DatasourcesModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost/nest', { useNewUrlParser: true, useUnifiedTopology: true }),
    ProductsModule, 
  ],
  controllers: [AppController ],
  providers: [AppService ],
})
 
 

export class AppModule { }
