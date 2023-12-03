import { Injectable,Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Order } from './models/order.entity';
import * as ccxt from 'ccxt';
import { CreateOrderInput } from './dto/new.input';

@Injectable()
export class OrderService {
  private readonly logger = new Logger( OrderService.name);
  private exchange: ccxt.Exchange;

  constructor(
    @InjectRepository(Order)
    private OrderRepository: Repository<Order>,
  ) {
    this.exchange = new ccxt.binance(); // 使用Binance交易所
  }

  async createOrder(createOrderDto: CreateOrderInput): Promise<Order> {
    const order = this.OrderRepository.create(createOrderDto);
    return this.OrderRepository.save(order);
  }

  // get all
  async findAll(): Promise<Order[]> {
    const res = await this.OrderRepository.find();
    return res;
  }

}
