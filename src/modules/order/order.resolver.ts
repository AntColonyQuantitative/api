import { Args, Mutation, Query, Resolver, Int } from '@nestjs/graphql';
import { CreateOrderInput } from './dto/new.input';
import { OrderType } from './dto/info.type';
import { OrderService } from './order.service';
import { UpdateOrderInput } from './dto/update.input';

@Resolver()
export class OrderResolver {
  constructor(private readonly OrderService: OrderService) {}

  @Query(() => [OrderType], { description: 'Get all order' })
  async getOrders(): Promise<OrderType[]> {
    return await this.OrderService.findAll();
  }

}
