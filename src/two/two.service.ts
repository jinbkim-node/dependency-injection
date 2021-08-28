import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { OneService } from 'src/one/one.service';

@Injectable()
export class TwoService {
  constructor(
    @Inject(forwardRef(() => OneService))
    private readonly oneService: OneService,
    @Inject(forwardRef(() => AppService))
    private appService: AppService,
  ){}
  two(){
    console.log('I am two');
  }

  app(){
    this.appService.app();
  }
  one(){
    this.oneService.one();
  }
}
