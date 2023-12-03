import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { StrategyService } from '../../modules/strategy/strategy.service';
import { OrderService } from '../../modules/order/order.service';
import * as ccxt from 'ccxt';

@Injectable()
export class ScheduleService {
  constructor(
    private strategyService: StrategyService,
    private orderService: OrderService
  ) {}

  @Cron(CronExpression.EVERY_HOUR)
  async handleCron() {
    const strategies = await this.strategyService.getStrategiesForCurrentHour();

    for (const strategy of strategies) {

      // check strategy
      if(true){
        // in queue
      }

      // Execute buying and selling operations according to strategy
      const transactionResult = await this.executeStrategy(strategy);

      // Record orders to the order table
      await this.orderService.createOrder(transactionResult);

      // Update statistical data in the strategy table
      await this.strategyService.updateStrategyStatistics(strategy, transactionResult);
    }
  }

  async executeStrategy(strategy): Promise<any> {
    // Check if the exchange supports it
    if (!(strategy.exchangeName in ccxt.exchanges)) {
      throw new Error(`Exchange ${strategy.exchangeName} is not supported`);
    }

    // Instantiation exchange
    const exchangeClass = ccxt[strategy.exchangeName as keyof typeof ccxt] as typeof ccxt.Exchange;
    const exchange = new exchangeClass({
      apiKey: strategy.accessKey,
      secret: strategy.secretKey,
    });

    // Determine order parameters
    const symbol = `${strategy.base}/${strategy.quote}`;
    const type = 'market'; // Or 'limit', according to strategic requirements
    const side = 'buy'; // Or 'sell', according to policy requirements
    const amount = strategy.baseLimit; // Purchase quantity
    // const price = strategy.sellPrice; // Order price may not be required for market orders

    // try {
    //   const order = await exchange.createOrder(symbol, type, side, amount);
    //   console.log(order);
    // } catch (error) {
    //   console.error(`Order execution failed: ${error.message}`);
    // }

    // Simulate order execution results
    const order = {
      id: 'order1',
      clientOrderId: 'clientOrder1',
      datetime: '2021-01-01T00:00:00.000Z',
      timestamp: 1609459200000,
      lastTradeTimestamp: 1609459200000,
      status: 'closed',
      symbol: 'BTC/USD',
      type: 'limit',
      side: 'buy',
      price: 30000,
      amount: 1,
      filled: 1,
      remaining: 0,
      cost: 30000,
      trades: [],
      fee: { cost: 10, currency: 'USD' },
      info: {},
    };
    return order
  }
}
