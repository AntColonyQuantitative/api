import { Args, Mutation, Query, Resolver, Int } from '@nestjs/graphql';
import { CreateStrategyInput } from './dto/new-strategy.input';
import { StrategyType } from './dto/strategy.type';
import { StrategyService } from './strategy.service';
import { UpdateStrategyInput } from './dto/update-strategy.input';

@Resolver()
export class StrategyResolver {
  constructor(private readonly StrategyService: StrategyService) {}

  @Query(() => [StrategyType], { description: 'Get all rows' })
  async getStrategys(): Promise<StrategyType[]> {
    return await this.StrategyService.findAll();
  }

  @Query(() => StrategyType, { description: 'Find by id' })
  async getStrategyById(@Args('id') id: string): Promise<StrategyType> {
    return await this.StrategyService.find(id);
  }

  @Mutation(() => Boolean, { description: 'Create new one' })
  async createStrategy(@Args('input') input: CreateStrategyInput): Promise<boolean> {
    return await this.StrategyService.create(input);
  }

  @Mutation(() => Boolean, { description: 'Update info' })
  async updateStrategy(
    @Args('id') id: string,
    @Args('input') input: UpdateStrategyInput,
  ): Promise<boolean> {
    return await this.StrategyService.update(id, input);
  }

  @Mutation(() => Boolean, { description: 'Hard delete' })
  async deleteStrategy(@Args('id') id: string): Promise<boolean> {
    return await this.StrategyService.del(id);
  }
}
