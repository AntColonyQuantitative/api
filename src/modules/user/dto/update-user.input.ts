import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field({ description: 'User is referred by', nullable: true })
  ref?: string;
  @Field({ description: 'User real name', nullable: true })
  realName?: string;
  @Field({ description: 'User display name', nullable: true })
  displayName?: string;
  @Field({ description: 'Password', nullable: true })
  password?: string;
  @Field({ description: 'Mobile number', nullable: true })
  mobile?: string;
}
