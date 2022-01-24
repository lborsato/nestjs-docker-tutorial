import { Controller, Get } from '@nestjs/common';
import { AppService, Movie, Identity, Data } from './app.service';

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

}
