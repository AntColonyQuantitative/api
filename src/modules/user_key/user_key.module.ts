import { Module, ConsoleLogger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserKey } from './models/user_key.entity';
import { UserKeyService } from './user_key.service';
import { UserKeyResolver } from './user_key.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UserKey])],
  providers: [ConsoleLogger, UserKeyService, UserKeyResolver],
  exports: [UserKeyService],
})
export class UserKeyModule {}