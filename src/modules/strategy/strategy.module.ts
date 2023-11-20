import { Module, ConsoleLogger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Strategy } from './models/strategy.entity';
import { StrategyService } from './strategy.service';
import { StrategyResolver } from './strategy.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Strategy])],
  providers: [ConsoleLogger, StrategyService, StrategyResolver],
  exports: [StrategyService],
})
export class StrategyModule {}