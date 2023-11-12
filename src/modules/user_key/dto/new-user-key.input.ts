import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserKeyInput {
  @Field({ description: 'User ID' })
  uid: string;
  @Field({ description: 'Exchange name' })
  exchangeName: string;
  @Field({ description: 'Access key' })
  accessKey: string;
  @Field({ description: 'Secret key' })
  secretKey: string;
  @Field({ description: 'Remarks' })
  remarks?: string;
}
