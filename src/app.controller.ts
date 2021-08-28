import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ){}

  @Get()
  app(){
    this.appService.app();
  }

  @Get('bringTwo')
  bringTwo(){
    console.log('app : bringTwo');
    this.appService.two();
  }

  @Get('bringOne')
  bringOne(){
    console.log('app : bringOne');
    this.appService.one();
  }
}
