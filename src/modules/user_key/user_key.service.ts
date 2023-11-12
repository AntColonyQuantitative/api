import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { UserKey } from './models/user_key.entity';
import * as ccxt from 'ccxt';

@Injectable()
export class UserKeyService {
  constructor(
    @InjectRepository(UserKey)
    private UserKeyRepository: Repository<UserKey>,
  ) {}

  // create an user key
  async create(entity: DeepPartial<UserKey>): Promise<boolean> {

    // console.log(ccxt.version);
    // console.log(ccxt.exchanges);
    // console.log(Object.keys(ccxt.exchanges));

    const verify = this.verifyExchangeKey(entity.exchangeName, entity.accessKey, entity.secretKey);
    if(!verify){
      return false;
    }
    const res = await this.UserKeyRepository.insert(entity);
    if (res && res.raw.length > 0) {
      return true;
    }
    return false;
  }

  async verifyExchangeKey(exchangeName: string, apiKey: string, secret: string): Promise<boolean> {
      try {
        // TODO Verify that the exchangeName is correct.
        const exchange = new (ccxt)[ exchangeName]({
            apiKey: apiKey,
            secret: secret,
            timeout: 60000,
        });
        // Try making a simple API call to verify the key
        const balance = await exchange.fetchBalance();
        // console.log(balance);
        //If there are no errors, the key verification is considered successful
        return true;
      } catch (error) {
          console.error(`Error verifying key for exchange ${exchangeName}:`, error);
          //If there are errors, it is considered that the key verification has failed
          return false;
      }
  }

  // delete an user key
  async del(id: number): Promise<boolean> {
    const res = await this.UserKeyRepository.delete(id);
    if (res.affected > 0) {
      return true;
    }
    return false;
  }

  // update an user key
  async update(id: number, entity: DeepPartial<UserKey>): Promise<boolean> {
    const res = await this.UserKeyRepository.update(id, entity);
    console.log(res);
    if (res.affected > 0) {
      return true;
    }
    return false;
  }

  // get all user keys
  async findAll(): Promise<UserKey[]> {
    const res = await this.UserKeyRepository.find();
    return res;
  }

  // find an user key by id
  async find(id: number): Promise<UserKey> {
    const res = await this.UserKeyRepository.findOne({
      where: {
        id,
      },
    });
    return res;
  }
}
