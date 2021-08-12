import { Injectable } from '@nestjs/common';

@Injectable()
export class OneService {
  one(){
    console.log('I am one');
  }
}
