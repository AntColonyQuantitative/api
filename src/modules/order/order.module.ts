import { Module, ConsoleLogger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './models/order.entity';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  providers: [ConsoleLogger, OrderService, OrderResolver],
  exports: [OrderService],
})
export class OrderModule {}