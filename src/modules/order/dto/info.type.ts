import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class OrderType {
  @Field(() => Int)
  id: number;

  @Field()
  st_id: string;

  @Field()
  order_id: string;

  @Field()
  type: string;

  @Field()
  price: string;

  @Field()
  side: string;

  @Field()
  amount: string;

  @Field()
  funds: string;

  @Field()
  avg_price: string;

  @Field()
  deal_amount: string;

  @Field()
  cost: string;

  @Field()
  status: string;

  @Field()
  symbol: string;

  @Field()
  orders_id: string;

  @Field()
  mid: string;

  @Field()
  record_amount: string;

  @Field()
  record_cost: string;

  @Field()
  pl_create_at: string;

  @Field(() => Int)
  buy_times: number;

  @Field(() => Int)
  now_buy_times: number;

  @Field(() => Int)
  sell_times: number;

  @Field(() => Float)
  base_total: number;

  @Field(() => Float)
  quote_total: number;

  @Field(() => Float)
  value_total: number;

  @Field(() => Float)
  now_base_total: number;

  @Field(() => Float)
  now_quote_total: number;

  @Field(() => Float)
  profit: number;

  @Field(() => Float)
  profit_percentage: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
