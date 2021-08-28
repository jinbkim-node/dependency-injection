import { Controller, Get } from '@nestjs/common';
import { OneService } from './one.service';

@Controller('one')
export class OneController {
  constructor(
    private oneService: OneService,
  ){}

  @Get()
  one(){
    this.oneService.one();
  }

  @Get('bringApp')
  bringApp(){
    console.log('one : bringApp');
    this.oneService.app();
  }

  @Get('bringTwo')
  bringTwo(){
    console.log('one : bringTwo');
    this.oneService.two();
  }
}
