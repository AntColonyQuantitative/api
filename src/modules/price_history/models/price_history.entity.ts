import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity('PortalPriceHistory')
export class PriceHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  candleTime: Date; // 蜡烛图的时间

  @Column({ type: 'float' })
  open: number; // 开盘价

  @Column({ type: 'float' })
  close: number; // 收盘价

  @Column({ type: 'float' })
  high: number; // 最高价

  @Column({ type: 'float' })
  low: number; // 最低价

  @Column({ type: 'float' })
  volume: number; // 交易量

  @Column()
  base: string; // 基础货币

  @Column()
  quote: string; // 报价货币，例如 'USDT'

  @Column()
  exchange: string; // 交易所名称，例如 'binance'

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;
}
