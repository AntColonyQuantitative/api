import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class UpdatePriceHistoryInput {

  @Field({ nullable: true })
  base?: string;

  @Field({ nullable: true })
  quote?: string;

  @Field({ nullable: true })
  exchange?: string;

  @Field({ nullable: true })
  candleTime?: Date;

  @Field(() => Float, { nullable: true })
  open?: number;

  @Field(() => Float, { nullable: true })
  close?: number;

  @Field(() => Float, { nullable: true })
  high?: number;

  @Field(() => Float, { nullable: true })
  low?: number;

  @Field(() => Float, { nullable: true })
  volume?: number;
}
