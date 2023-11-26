import { Args, Mutation, Query, Resolver, Int } from '@nestjs/graphql';
import { CreatePriceHistoryInput } from './dto/new.input';
import { PriceHistoryType } from './dto/info.type';
import { PriceHistoryService } from './price_history.service';
import { UpdatePriceHistoryInput } from './dto/update.input';

@Resolver()
export class PriceHistoryResolver {
  constructor(private readonly PriceHistoryService: PriceHistoryService) {}

  @Query(() => [PriceHistoryType], { description: 'Get all price histories' })
  async getPriceHistorys(): Promise<PriceHistoryType[]> {
    return await this.PriceHistoryService.findAll();
  }

  // @Mutation(() => Boolean, { description: 'Create new user key' })
  // async createPriceHistory(@Args('input') input: CreatePriceHistoryInput): Promise<boolean> {
  //   return await this.PriceHistoryService.create(input);
  // }

  @Query(() => String)
  async executeTaskManually(): Promise<any> {
    await this.PriceHistoryService.executeTaskManually();
    return 'Task executed successfully';
  }

}
