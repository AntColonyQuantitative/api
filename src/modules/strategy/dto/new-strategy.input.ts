import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateStrategyInput {
  @Field({ description: 'User ID' })
  uid: string;

  @Field({ description: 'Cycle type. Month, Day, Week' })
  period: string;

  @Field(type => Int, { nullable: true, description: 'Fixed investment cycle' })
  periodValue: number;

  @Field(type => Int, { description: 'At which hour did you make the purchase' })
  hour: number;

  @Field(type => Int, { description: 'Purchase: minute, randomly write 0-59 during creation, used for screening during order execution' })
  minute: number;

  // Calculate based on user set cycles
  // @Field(type => Date, { description: 'Next transaction time' })
  // nextExecuteTime: Date;

  @Field({ description: 'The ID of the market key set by the user' })
  userKeyID: string;

  // Query through userkeyid
  // @Field({ description: 'Exchange name' })
  // exchangeName: string;

  // @Field({ description: 'Access key' })
  // accessKey: string;

  // @Field({ description: 'Secret key' })
  // secretKey: string;

  @Field({ description: 'Transaction pairs' })
  symbol: string;

  @Field({ description: 'Basic currency, legal currency. Example: rmb, usdt' })
  base: string;

  @Field({ description: 'Tokens. Example: eos, lmc' })
  quote: string;

  @Field({ description: 'Each purchase amount' })
  baseLimit: number;

  // @Field({ description: 'Total purchase amount' })
  // baseTotal: number;

  // @Field({ description: 'Legal currency transaction fee' })
  // baseFee: number;

  // @Field({ description: 'Token transaction fee' })
  // quoteFee: number;

  // @Field({ description: 'Total acquired tokens' })
  // quoteTotal: number;

  // @Field(type => Int, { description: 'Number of purchases' })
  // buyTimes: number;

  // @Field(type => Int, { description: 'Number of sales' })
  // sellTimes: number;

  // @Field(type => Int, { description: 'Number of purchases in this round' })
  // nowBuyTimes: number;

  // @Field({ description: 'Current total legal currency' })
  // nowBaseTotal: number;

  // @Field({ description: 'Current total number of coins purchased' })
  // nowQuoteTotal: number;

  @Field({ description: 'Take profit rate (%)' })
  stopProfitPercentage: number;

  @Field({ description: 'Whether to enable maximum drawdown. Y: Yes, N: No' })
  drawdownStatus: string;

  // @Field({ description: 'Maximum drawdown (%)' })
  // drawdown: number;

  // @Field({ description: 'Lock-in price after triggering profit-taking' })
  // drawdownPrice: number;

  // @Field({ description: 'Selling price' })
  // sellPrice: number;

  // @Field({ description: 'Profit rate' })
  // profitPercentage: number;

  // @Field({ description: 'Profit' })
  // profit: number;

  @Field({ description: 'Investment type. Regular investment, Smart investment' })
  inType: string;

  // @Field({ description: 'Strategy status. Active, Trading, Closed, SoftDeleted' })
  // status: string;

  // @Field({ description: 'Reason for stopping' })
  // stopReason: string;

  @Field(type => Date, { description: 'Start time' })
  startAt: Date;

  // @Field(type => Date, { description: 'End time' })
  // endAt: Date;

}
