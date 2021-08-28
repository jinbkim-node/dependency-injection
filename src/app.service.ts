import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { OneService } from './one/one.service';
import { TwoService } from './two/two.service';

@Injectable()
export class AppService {
  constructor(
    @Inject(forwardRef(() => OneService))
    private readonly oneService: OneService,
    @Inject(forwardRef(() => TwoService))
    private readonly twoService: TwoService,

  ){}
  app(){
    console.log('I am app');
  }
  one(){
    this.oneService.one();
  }
  two(){
    this.twoService.two();
  }
}
