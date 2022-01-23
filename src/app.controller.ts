import { Controller, Get } from '@nestjs/common';
import { AppService, Movie, Identity } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIdentity(): Identity {
    return this.appService.getIdentity();
  }
}
