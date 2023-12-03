import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class UpdateOrderInput {
  @Field({ nullable: true })
  st_id?: string;

  @Field({ nullable: true })
  order_id?: string;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  price?: string;

  @Field({ nullable: true })
  side?: string;

  @Field({ nullable: true })
  amount?: string;

  @Field({ nullable: true })
  funds?: string;

  @Field({ nullable: true })
  avg_price?: string;

  @Field({ nullable: true })
  deal_amount?: string;

  @Field({ nullable: true })
  cost?: string;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  symbol?: string;

  @Field({ nullable: true })
  orders_id?: string;

  @Field({ nullable: true })
  mid?: string;

  @Field({ nullable: true })
  record_amount?: string;

  @Field({ nullable: true })
  record_cost?: string;

  @Field({ nullable: true })
  pl_create_at?: string;

  @Field(() => Int, { nullable: true })
  buy_times?: number;

  @Field(() => Int, { nullable: true })
  now_buy_times?: number;

  @Field(() => Int, { nullable: true })
  sell_times?: number;

  @Field(() => Float, { nullable: true })
  base_total?: number;

  @Field(() => Float, { nullable: true })
  quote_total?: number;

  @Field(() => Float, { nullable: true })
  value_total?: number;

  @Field(() => Float, { nullable: true })
  now_base_total?: number;

  @Field(() => Float, { nullable: true })
  now_quote_total?: number;

  @Field(() => Float, { nullable: true })
  profit?: number;

  @Field(() => Float, { nullable: true })
  profit_percentage?: number;
}
