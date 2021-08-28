import { Controller, Get } from '@nestjs/common';
import { TwoService } from './two.service';

@Controller('two')
export class TwoController {
  constructor(
    private twoService: TwoService,
  ){}
  
  @Get()
  two(){
    this.twoService.two();
  }

  @Get('bringOne')
  bringOne(){
    console.log('two : bringOne');
    this.twoService.one();
  }

  @Get('bringApp')
  bringApp(){
    console.log('two : bringApp');
    this.twoService.app();
  }
}