import { Injectable,Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { PriceHistory } from './models/price_history.entity';
import * as ccxt from 'ccxt';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class PriceHistoryService {
  private readonly logger = new Logger( PriceHistoryService.name);
  private exchange: ccxt.Exchange;

  constructor(
    @InjectRepository(PriceHistory)
    private PriceHistoryRepository: Repository<PriceHistory>,
  ) {
    this.exchange = new ccxt.binance(); // 使用Binance交易所
  }

  async executeTaskManually() {
    try {
      await this.handleCron(); // 调用定时任务的方法
    } catch (error) {
      // 处理错误
      this.logger.error('Failed to execute fetch price:', error);
    }
  }

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  // @Cron('10 * * * * *')
  async handleCron() {
    try {
      const base = 'BTC';
      const quote = 'USDT';
      const exchangeName = 'binance';
      const symbol = `${base}/${quote}`;
      // const price = await this.fetchPrice(symbol);
      const candle = await this.fetchCandlestickData(symbol, '1d'); // 获取1天的蜡烛图数据
      await this.saveCandleData(candle, base, quote, exchangeName);

      // await this.savePrice(price, base, quote, exchangeName);
      this.logger.log(`Fetched and saved daily candle data for ${symbol} from ${exchangeName}`);
    } catch (error) {
      this.logger.error('Failed to fetch price:', error);
    }
  }

  private async fetchCandlestickData(symbol: string, timeframe: string) {
    try {
      const candles = await this.exchange.fetchOHLCV(symbol, timeframe);
      // 通常最新的蜡烛图数据在数组的最后一位
      const latestCandle = candles[candles.length - 1];
      return {
        candleTime: new Date(latestCandle[0]),
        open: latestCandle[1],
        high: latestCandle[2],
        low: latestCandle[3],
        close: latestCandle[4],
        volume: latestCandle[5]
      };
    } catch (error) {
      this.logger.error(`Error fetching daily candle data for ${symbol}:`, error);
      throw error;
    }
  }

  private async saveCandleData(candleData, base, quote, exchange) {
    const candle = this.PriceHistoryRepository.create({ ...candleData, base, quote, exchange });
    await this.PriceHistoryRepository.save(candle);
  }

  // private async fetchPrice(symbol: string) {
  //   try {
  //     const ticker = await this.exchange.fetchTicker(symbol);
  //     return ticker.last;
  //   } catch (error) {
  //     this.logger.error(`Error fetching price for ${symbol}:`, error);
  //     throw error;
  //   }
  // }

  // private async savePrice(price: number, base: string, quote: string, exchange: string) {
  //   const btcPrice = this.PriceHistoryRepository.create({ price, base, quote, exchange });
  //   await this.PriceHistoryRepository.save(btcPrice);
  //   this.logger.log(`Saved price for ${base}/${quote} from ${exchange}: ${price}`);
  // }

  // get all
  async findAll(): Promise<PriceHistory[]> {
    const res = await this.PriceHistoryRepository.find();
    return res;
  }

}
