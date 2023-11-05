import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserKeyInput {
  @Field({ description: 'Exchange name' })
  exchange_name: string;
  @Field({ description: 'User is referred by' })
  ref: string;
  @Field({ description: 'User real name' })
  realName?: string;
  @Field({ description: 'User display name' })
  displayName: string;
  @Field({ description: 'Password' })
  password: string;
  @Field({ description: 'Mobile number' })
  mobile?: string;
}
