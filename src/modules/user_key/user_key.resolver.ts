import { Args, Mutation, Query, Resolver, Int } from '@nestjs/graphql';
import { CreateUserKeyInput } from './dto/new-user-key.input';
import { UserKeyType } from './dto/user-key.type';
import { UserKeyService } from './user_key.service';
import { UpdateUserKeyInput } from './dto/update-user-key.input';

@Resolver()
export class UserKeyResolver {
  constructor(private readonly userKeyService: UserKeyService) {}

  @Query(() => [UserKeyType], { description: 'Get all user keys' })
  async getUserKeys(): Promise<UserKeyType[]> {
    return await this.userKeyService.findAll();
  }

  @Query(() => UserKeyType, { description: 'Find user key by id' })
  async getUserKeyById(@Args('id', { type: () => Int } ) id: number): Promise<UserKeyType> {
    return await this.userKeyService.find(id);
  }

  @Mutation(() => Boolean, { description: 'Create new user key' })
  async createUserKey(@Args('input') input: CreateUserKeyInput): Promise<boolean> {
    return await this.userKeyService.create(input);
  }

  @Mutation(() => Boolean, { description: 'Update user key info' })
  async updateUserKey(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateUserKeyInput,
  ): Promise<boolean> {
    return await this.userKeyService.update(id, input);
  }

  @Mutation(() => Boolean, { description: 'Hard delete an user key' })
  async deleteUserKey(@Args('id',  { type: () => Int }) id: number): Promise<boolean> {
    return await this.userKeyService.del(id);
  }
}
