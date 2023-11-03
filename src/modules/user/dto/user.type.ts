import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field({ description: 'User ID' })
  id?: string;
  @Field({ description: 'Login email' })
  email: string;
  @Field({ description: 'User is referred by' })
  ref: string;
  @Field({ description: 'User real name' })
  realName?: string;
  @Field({ description: 'User display name' })
  displayName: string;
  @Field({ description: 'Mobile number' })
  mobile?: string;
  @Field({ description: 'Wechat' })
  wechat?: string;
  @Field({ description: 'QQ' })
  qq?: string;
}
