import { Module } from '@nestjs/common';
import { TwoController } from './two.controller';
import { TwoService } from './two.service';

@Module({
  providers: [TwoService],
  controllers: [TwoController]
})
export class TwoModule {}
