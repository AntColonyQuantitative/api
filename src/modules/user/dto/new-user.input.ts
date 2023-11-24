import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ description: 'Login email' })
  email: string;
  @Field({ description: 'User is referred by' })
  ref: string;
  @Field({ description: 'User real name', nullable: true })
  realName?: string;
  @Field({ description: 'User display name' })
  displayName: string;
  @Field({ description: 'Password' })
  password: string;
  @Field({ description: 'Mobile number', nullable: true })
  mobile?: string;
}
