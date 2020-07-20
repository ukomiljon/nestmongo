import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; 
import { LoggerMiddleware } from '../middleware/logger.middleware';
import { ProductSchema } from './product.schema';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Product", schema: ProductSchema }])],
    controllers: [ProductsController],
    providers: [ProductsService]
})
 
// export class ProductsModule { }

export class ProductsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(LoggerMiddleware)
        .forRoutes('products');
    }
  }


