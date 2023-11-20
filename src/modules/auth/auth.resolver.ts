import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ACCOUNT_NOT_EXIST, SUCCESS } from '@/common/constants/code';
import { Result } from '@/common/dto/result.type';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  @Mutation(() => Result, { description: 'User login' })
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<Result> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      return {
        code: ACCOUNT_NOT_EXIST,
        message: "account doesn't exist",
      };
    }
    const token = this.jwtService.sign({
      id: user.id,
    });
    return {
      code: SUCCESS,
      message: 'login successful',
      data: token,
    };
  }
}
