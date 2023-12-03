import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository, Between } from 'typeorm';
import { Strategy } from './models/strategy.entity';
import * as ccxt from 'ccxt';

@Injectable()
export class StrategyService {
  constructor(
    @InjectRepository(Strategy)
    private StrategyRepository: Repository<Strategy>,
  ) {}

  // create an strategy
  async create(entity: DeepPartial<Strategy>): Promise<boolean> {

    // TODO verifies whether the exchange key can be used. The balance should be greater than the quantity of base currency invested in a single transaction.
    const verify = this.verifyExchangeKey(entity.exchangeName, entity.accessKey, entity.secretKey);
    if(!verify){
      return false;
    }
    // TODO The uid should be obtained from the cache.
    const res = await this.StrategyRepository.insert(entity);
    if (res && res.raw.length > 0) {
      return true;
    }
    return false;
  }

  async verifyExchangeKey(exchangeName: string, apiKey: string, secret: string): Promise<boolean> {
    try {
      const exchange = new (ccxt)[ exchangeName]({
          apiKey: apiKey,
          secret: secret,
          timeout: 60000,
      });
      // Try making a simple API call to verify the key
      const balance = await exchange.fetchBalance();
      // console.log(balance);
      // If there are no errors, the key verification is considered successful
      return true;
    } catch (error) {
        console.error(`Error verifying key for exchange ${exchangeName}:`, error);
        // If there are errors, it is considered that the key verification has failed
        return false;
    }
  }

  // Stop trading strategy operation
  async close(id: string): Promise<boolean> {
    // TODO
    const res = await this.StrategyRepository.delete(id);
    if (res.affected > 0) {
      return true;
    }
    return false;
  }

  // delete an strategy
  async del(id: string): Promise<boolean> {
    // TODO Detect if there are any unfinished transactions, and change the strategy to closed status after cancellation.
    const res = await this.StrategyRepository.delete(id);
    if (res.affected > 0) {
      return true;
    }
    return false;
  }

  // update an strategy
  async update(id: string, entity: DeepPartial<Strategy>): Promise<boolean> {
    // Ensure which can be updated.
    const res = await this.StrategyRepository.update(id, entity);
    // console.log(res);
    if (res.affected > 0) {
      return true;
    }
    return false;
  }

  async updateStrategyStatistics(strategy: Strategy, transactionResult) : Promise<Strategy>{
    //Check if the order status is' closed '(completed), and only update statistics in this case
    if (transactionResult.status === 'closed') {
      //Update policy statistics data
      strategy.buyTimes += 1; // Increase the number of purchases
      strategy.baseTotal += transactionResult.amount; // Increase the total purchase amount
      strategy.quoteTotal += transactionResult.cost; // Increase total expenses
      // 
      // Assuming you need to calculate profits, it will depend on your specific business logic
      // strategy.profit = ...;
      return await this.StrategyRepository.save(strategy);
    } else {
      console.log(`Order ${transactionResult.id} is not closed. Statistics not updated.`);
    }
  }

  // get all strategys
  async findAll(): Promise<Strategy[]> {
    // TODO Add deletion status filtering
    const res = await this.StrategyRepository.find();
    return res;
  }

  // find an strategy by id
  async find(id: string): Promise<Strategy> {
    // TODO Add deletion status filtering
    const res = await this.StrategyRepository.findOne({
      where: {
        id,
      },
    });
    return res;
  }

  //
  async getStrategiesForTime() {
    const specificTime = new Date('2023-11-30T15:00:00Z');
    const strategies = await this.getStrategiesForCurrentHour(specificTime);
    return strategies;
  }

  // get all current strategies that need to be executed
  async getStrategiesForCurrentHour(startTime?: Date): Promise<Strategy[]> {
    let startHour = startTime || new Date();
    startHour.setMinutes(0, 0, 0); // Set to start at the specified hour

    let endHour = new Date(startHour);
    endHour.setHours(startHour.getHours() + 1); // Set as the start of the next hour

    return this.StrategyRepository.find({
      where: {
        nextExecuteTime: Between(startHour, endHour),
        status: 'Active'
      },
    });
  }

}
