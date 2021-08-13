import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('exclude')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('')
  getHello2(): string {
    return this.appService.getHello();
  }
}