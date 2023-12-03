import { Module } from '@nestjs/common';
import { ScheduleModule as NestScheduleModule } from '@nestjs/schedule';
import { ScheduleService } from './schedule.service';
import { StrategyModule } from '../../modules/strategy/strategy.module';

@Module({
  imports: [
    NestScheduleModule.forRoot(),
    StrategyModule,
  ],
  providers: [ScheduleService],
})
export class ScheduleModule {}
