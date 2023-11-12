import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType('UserKey')
export class UserKeyType {
  @Field(type => Int, { description: 'ID' })
  id: number;
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
