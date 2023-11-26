import { ObjectType, Field, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class PriceHistoryType {
  @Field(() => Int)
  id: number;

  @Field()
  base: string;

  @Field()
  quote: string;

  @Field()
  exchange: string;

  @Field()
  candleTime: Date;

  @Field(() => Float)
  open: number;

  @Field(() => Float)
  close: number;

  @Field(() => Float)
  high: number;

  @Field(() => Float)
  low: number;

  @Field(() => Float)
  volume: number;
}
