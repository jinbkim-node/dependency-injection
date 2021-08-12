import { Controller, Get } from '@nestjs/common';
import { OneService } from 'src/one/one.service';
import { TwoService } from './two.service';

@Controller('two')
export class TwoController {
  constructor(
    private twoService: TwoService,
    private oneService: OneService,
  ){}
  
  @Get()
  two(){
    this.twoService.two();
  }

  @Get('bringOne')
  bringOne(){
    console.log('two : bringOne');
    this.oneService.one();
  }
}