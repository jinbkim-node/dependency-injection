import { Controller, Get } from '@nestjs/common';
import { TwoService } from './two.service';

@Controller('two')
export class TwoController {
  constructor(private twoService: TwoService){}
  
  @Get()
  two(){
    this.twoService.two();
  }
}