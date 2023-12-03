import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity('MWStrategy')
export class Strategy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ comment: 'User ID' })
  @IsNotEmpty()
  @Index()
  uid: string;

  // market info
  @Column({ comment: 'The ID of the market key set by the user' })
  userKeyID: string;

  @Column({ comment: 'Exchange name'})
  @IsNotEmpty()
  exchangeName: string;

  @Column({ comment: 'Access key'})
  @IsNotEmpty()
  accessKey: string;

  @Column({ comment: 'Secret key' })
  @IsNotEmpty()
  secretKey: string;

  // parameter
  @Column({ comment: 'Cycle type. Month, Week, Day'})
  @IsNotEmpty()
  period: string;

  @Column({ comment: 'Fixed investment cycle', type: 'int' })
  @IsNotEmpty()
  periodValue: number;

  @Column({ comment: 'graphql',type: 'int', default: 10 })
  @IsNotEmpty()
  hour: number;

  @Column({ comment: 'Purchase: minute, randomly write 0-59 during creation, used for screening during order execution', type: 'int', default: 0 })
  @IsNotEmpty()
  minute: number;

  @Column({ comment: 'Next transaction time' })
  @IsNotEmpty()
  nextExecuteTime: Date;

  @Column({ comment: 'Symbol' })
  @IsNotEmpty()
  symbol: string;

  @Column({ comment: 'Basic currency, legal currency. Example: rmb, usdt'})
  @IsNotEmpty()
  base: string;

  @Column({ comment: 'Tokens. Example: eos, lmc'})
  @IsNotEmpty()
  quote: string;

  @Column({ comment: 'Each purchase amount', type: 'float', default: 0 })
  @IsNotEmpty()
  baseLimit: number;

  @Column({ comment: 'Total purchase amount', type: 'float', default: 0 })
  baseTotal: number;

  @Column({ comment: 'Legal currency transaction fee', type: 'float', default: 0 })
  baseFee: number;

  @Column({ comment: 'Token transaction fee', type: 'float', default: 0 })
  quoteFee: number;

  @Column({ comment: 'Total acquired tokens', type: 'float', default: 0 })
  quoteTotal: number;

  @Column({ comment: 'Number of purchases', type: 'int', default: 0 })
  buyTimes: number;

  @Column({ comment: 'Number of sales', type: 'int', default: 0 })
  sellTimes: number;

  @Column({ comment: 'Number of purchases in this round', type: 'int', default: 0 })
  nowBuyTimes: number;

  @Column({ comment: 'Current total legal currency', type: 'float', default: 0 })
  nowBaseTotal: number;

  @Column({ comment: 'Current total number of coins purchased', type: 'float', default: 0 })
  nowQuoteTotal: number;

  @Column({ comment: 'Take profit rate (%)', default: 0 })
  stopProfitPercentage: number;

  @Column({ comment: 'Whether to enable maximum drawdown. Y: Yes, N: No', default: 'N' })
  drawdownStatus: string;

  @Column({ comment: 'Maximum drawdown (%)',  type: 'float', default: 0 })
  drawdown: number;

  @Column({ comment: 'Lock-in price after triggering profit-taking', type: 'float', default: 0 })
  drawdownPrice: number;

  @Column({ comment: 'Selling price', type: 'float', default: 0 })
  sellPrice: number;

  @Column({ comment: 'Profit rate', type: 'float', default: 0 })
  profitPercentage: number;

  @Column({ comment: 'Profit', type: 'float', default: 0 })
  profit: number;

  @Column({ comment: 'Investment type. 1: Regular, 2: Smart' })
  @IsNotEmpty()
  inType: string;

  @Column({ comment: 'Strategy status. Active, Trading, Closed, SoftDeleted', default: 'Active' })
  status: string;

  @Column({ comment: 'Reason for stopping', default: '', nullable: true })
  stopReason: string;

  @Column({ comment: 'Start time', type: 'timestamp'})
  startAt: Date;

  @Column({ comment: 'End time', type: 'timestamp', nullable: true })
  endAt: Date;
}
