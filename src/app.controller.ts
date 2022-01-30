import { Controller, Get, Response } from '@nestjs/common';
import { AppService, Identity, Data, Hello } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIdentity(): Identity {
    return this.appService.getIdentity();
  }

  @Get('config')
  getConfig(): Data {
    return this.appService.getConfig();
  }

  @Get('info')
  getInfo(): Data {
    return this.appService.getInfo();
  }

  @Get('transactions')
  htmlResponse(@Response() res) {
    res.set('Content-Type', 'text/html');
    res.send(this.appService.getTransactions());
  }

  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
