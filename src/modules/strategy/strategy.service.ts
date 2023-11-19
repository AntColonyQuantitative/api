import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
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
}
