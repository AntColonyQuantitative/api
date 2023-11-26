import { Module, ConsoleLogger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceHistory } from './models/price_history.entity';
import { PriceHistoryService } from './price_history.service';
import { PriceHistoryResolver } from './price_history.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([PriceHistory])],
  providers: [ConsoleLogger, PriceHistoryService, PriceHistoryResolver],
  exports: [PriceHistoryService],
})
export class PriceHistoryModule {}