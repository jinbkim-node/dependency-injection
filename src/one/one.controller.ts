import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { OneService } from './one.service';

@Controller('one')
export class OneController {
  constructor(
    private oneService: OneService,
    private appService: AppService,

  ){}

  @Get()
  one(){
    this.oneService.one();
  }

  @Get('bringApp')
  bringApp(){
    console.log('one : bringApp');
    this.appService.app();
  }
}
