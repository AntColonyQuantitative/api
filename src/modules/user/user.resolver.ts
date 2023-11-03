import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/new-user.input';
import { UserType } from './dto/user.type';
import { UserService } from './user.service';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserType], { description: 'Get all users' })
  async getUsers(): Promise<UserType[]> {
    return await this.userService.findAll();
  }

  @Query(() => UserType, { description: 'Find user by email' })
  async getUserByEmail(@Args('email') email: string): Promise<UserType> {
    return await this.userService.findByEmail(email);
  }

  @Query(() => UserType, { description: 'Find user by id' })
  async getUserById(@Args('id') id: string): Promise<UserType> {
    return await this.userService.find(id);
  }

  @Mutation(() => Boolean, { description: 'Create new user' })
  async createUser(@Args('input') input: CreateUserInput): Promise<boolean> {
    return await this.userService.create(input);
  }

  @Mutation(() => Boolean, { description: 'Update user info' })
  async updateUser(
    @Args('id') id: string,
    @Args('input') input: UpdateUserInput,
  ): Promise<boolean> {
    return await this.userService.update(id, input);
  }

  @Mutation(() => Boolean, { description: 'Hard delete an user' })
  async deleteUser(@Args('id') id: string): Promise<boolean> {
    return await this.userService.del(id);
  }
}
