import { Controller, Get } from '@nestjs/common';
import { OneService } from './one.service';

@Controller('one')
export class OneController {
  constructor(private oneService: OneService){}

  @Get()
  one(){
    this.oneService.one();
  }
}
