import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  app(){
    console.log('I am app');
  }
}
