import { Injectable } from '@nestjs/common';

@Injectable()
export class TwoService {
  two(){
    console.log('I am two');
  }
}
