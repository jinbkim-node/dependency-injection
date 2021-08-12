import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TwoService } from './two/two.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private twoService: TwoService,
  ){}

  @Get()
  app(){
    this.appService.app();
  }

  @Get('bringTwo')
  bringTwo(){
    console.log('app : bringTwo');
    this.twoService.two();
  }
}
