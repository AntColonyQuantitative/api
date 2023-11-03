import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('/create')
  // async create(): Promise<boolean> {
  //   return await this.userService.create({
  //     email: 'admin@tougu.com',
  //     password: 'tougu_admin',
  //     displayName: 'admin',
  //     mobile: '0412 345 678',
  //     realName: 'tougu_master',
  //     ref: 'admin',
  //   });
  // }

  // @Get('/del')
  // async del(): Promise<boolean> {
  //   return await this.userService.del('dad134d2-9d78-4adc-9613-56f9a128dd33');
  // }

  // @Get('/update')
  // async update(): Promise<boolean> {
  //   return await this.userService.update(
  //     '98f3c4f9-94df-4263-b95c-18ce580559a5',
  //     {
  //       ref: 'super_admin',
  //     },
  //   );
  // }

  @Get('/healthCheck')
  healthCheck(): string {
    return this.appService.getHello();
  }
}
