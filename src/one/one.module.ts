import { forwardRef, Module } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { TwoModule } from 'src/two/two.module';
import { OneController } from './one.controller';
import { OneService } from './one.service';

@Module({
  imports: [
    forwardRef(() => TwoModule), 
    forwardRef(() => AppModule)
  ],
  controllers: [OneController],
  providers: [OneService],
  exports: [OneService],
})
export class OneModule {}
