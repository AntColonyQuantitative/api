import { Module, ConsoleLogger } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [],
  providers: [ConsoleLogger, AuthService, AuthResolver],
  exports: [AuthService],
})
export class AuthModule {}
