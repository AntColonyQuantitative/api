import { Module, ConsoleLogger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserService } from '../user/user.service';
import { JwtStrategy } from './jwt.strategy';
import { User } from '../user/models/user.entity';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: 60 * 60 * 24 + 's',
      },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    ConsoleLogger,
    AuthService,
    AuthResolver,
    UserService,
    JwtStrategy,
  ],
  exports: [],
})
export class AuthModule {}
