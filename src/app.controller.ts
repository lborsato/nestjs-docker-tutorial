import { Controller, Get } from '@nestjs/common';
import { AppService, Movie, Identity } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMovies(): Movie[] {
    return this.appService.getMovies();
  }

  @Get('/identity')
  getIdentity(): Identity {
    return this.appService.getIdentity();
  }

}
