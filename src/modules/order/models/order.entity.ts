import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('quants_orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  st_id: string;

  @Column({ type: 'varchar', length: 255 })
  order_id: string;

  @Column({ type: 'varchar', length: 255 })
  type: string;

  @Column({ type: 'varchar', length: 255 })
  price: string;

  @Column({ type: 'varchar', length: 255 })
  side: string;

  @Column({ type: 'varchar', length: 255 })
  amount: string;

  @Column({ type: 'varchar', length: 255 })
  funds: string;

  @Column({ type: 'varchar', length: 255 })
  avg_price: string;

  @Column({ type: 'varchar', length: 255 })
  deal_amount: string;

  @Column({ type: 'varchar', length: 255 })
  cost: string;

  @Column({ type: 'varchar', length: 255 })
  status: string;

  @Column({ type: 'varchar', length: 255 })
  symbol: string;

  @Column({ type: 'varchar', length: 255 })
  orders_id: string;

  @Column({ type: 'varchar', length: 255 })
  mid: string;

  @Column({ type: 'varchar', length: 255 })
  record_amount: string;

  @Column({ type: 'varchar', length: 255 })
  record_cost: string;

  @Column({ type: 'varchar', length: 255 })
  pl_create_at: string;

  @Column({ type: 'int' })
  buy_times: number;

  @Column({ type: 'int' })
  now_buy_times: number;

  @Column({ type: 'int' })
  sell_times: number;

  @Column({ type: 'int' })
  base_total: number;

  @Column({ type: 'int' })
  quote_total: number;

  @Column({ type: 'int' })
  value_total: number;

  @Column({ type: 'int' })
  now_base_total: number;

  @Column({ type: 'int' })
  now_quote_total: number;

  @Column({ type: 'int' })
  profit: number;

  @Column({ type: 'int' })
  profit_percentage: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
