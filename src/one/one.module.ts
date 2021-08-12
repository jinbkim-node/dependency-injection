import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { OneController } from './one.controller';
import { OneService } from './one.service';

@Module({
  controllers: [OneController],
  providers: [OneService, AppService]
})
export class OneModule {}
