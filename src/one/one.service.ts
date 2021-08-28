import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { TwoService } from 'src/two/two.service';

@Injectable()
export class OneService {
  constructor(
    @Inject(forwardRef(() => TwoService))
    private readonly twoService: TwoService,
    @Inject(forwardRef(() => AppService))
    private appService: AppService,
  ){}
  one(){
    console.log('I am one');
  }
  
  two(){
    this.twoService.two();
  }

  app(){
    this.appService.app();
  }
}
