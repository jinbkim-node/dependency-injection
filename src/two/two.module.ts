import { Module } from '@nestjs/common';
import { OneService } from 'src/one/one.service';
import { TwoController } from './two.controller';
import { TwoService } from './two.service';

@Module({
  providers: [TwoService, OneService],
  controllers: [TwoController]
})
export class TwoModule {}
