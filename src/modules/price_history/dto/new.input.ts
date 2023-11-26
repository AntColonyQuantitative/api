import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreatePriceHistoryInput {
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
