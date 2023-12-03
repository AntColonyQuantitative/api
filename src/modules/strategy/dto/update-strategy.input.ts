import { Field, InputType, Int, Float } from '@nestjs/graphql';

@InputType()
export class UpdateStrategyInput {
  @Field({ description: 'User ID' })
  uid?: string;

  @Field({description: 'Cycle type. Month, Week, Day' })
  period?: string;

  @Field(type => Int, { description: 'Fixed investment cycle' })
  periodValue?: number;

  @Field(type => Int, { description: 'At which hour did you make the purchase' })
  hour?: number;

  @Field(type => Int, { description: 'Purchase: minute, randomly write 0-59 during creation, used for screening during order execution' })
  minute?: number;

  @Field({ description: 'Next transaction time' })
  nextExecuteTime: Date;

  // @Field({ nullable: true, description: 'The ID of the market key set by the user' })
  // userKeyID?: string;

  // @Field({ description: 'Exchange name', nullable: true  })
  // exchangeName?: string;

  // @Field({ description: 'Access key', nullable: true  })
  // accessKey?: string;

  // @Field({ description: 'Secret key', nullable: true  })
  // secretKey?: string;


  // @Field({ nullable: true, description: 'Transaction pairs' })
  // symbol?: string;

  // @Field({ nullable: true, description: 'Basic currency, legal currency. Example: rmb, usdt' })
  // base?: string;

  // @Field({ nullable: true, description: 'Tokens. Example: eos, lmc' })
  // quote?: string;

  // @Field({ nullable: true, description: 'Each purchase amount' })
  // baseLimit?: number;

  @Field({ nullable: true, description: 'Total purchase amount' })
  baseTotal?: number;

  @Field(type => Float, { nullable: true, description: 'Legal currency transaction fee' })
  baseFee?: number;

  @Field(type => Float, { nullable: true, description: 'Token transaction fee' })
  quoteFee?: number;

  @Field(type => Int, { nullable: true, description: 'Total acquired tokens' })
  quoteTotal?: number;

  @Field(type => Int, { nullable: true, description: 'Number of purchases' })
  buyTimes?: number;

  @Field(type => Int, { nullable: true, description: 'Number of sales' })
  sellTimes?: number;

  @Field(type => Int, { nullable: true, description: 'Number of purchases in this round' })
  nowBuyTimes?: number;

  @Field(type => Int, { nullable: true, description: 'Current total legal currency' })
  nowBaseTotal?: number;

  @Field(type => Int, { nullable: true, description: 'Current total number of coins purchased' })
  nowQuoteTotal?: number;

  @Field(type => Float, { nullable: true, description: 'Take profit rate (%)' })
  stopProfitPercentage?: number;

  @Field({ nullable: true, description: 'Whether to enable maximum drawdown. Y: Yes, N: No' })
  drawdownStatus?: string;

  @Field(type => Float, { nullable: true, description: 'Maximum drawdown (%)' })
  drawdown?: number;

  @Field(type => Float, { nullable: true, description: 'Lock-in price after triggering profit-taking' })
  drawdownPrice?: number;

  @Field(type => Float, { nullable: true, description: 'Selling price' })
  sellPrice?: number;

  @Field(type => Float, { nullable: true, description: 'Profit rate' })
  profitPercentage?: number;

  @Field(type => Float, { nullable: true, description: 'Profit' })
  profit?: number;

  @Field({ description: 'Investment type. 1: Regular investment, 2: Smart investment' })
  inType?: string;

  @Field( { nullable: true, description: 'Strategy status. Active, Trading, Closed, SoftDeleted' })
  status?: string;

  @Field({ nullable: true, description: 'Reason for stopping' })
  stopReason?: string;

  @Field(type => Date, { nullable: true, description: 'Start time' })
  startAt?: Date;

  @Field(type => Date, { nullable: true, description: 'End time' })
  endAt?: Date;
}
