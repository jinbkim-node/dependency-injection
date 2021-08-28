import { forwardRef, Module } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { OneModule } from 'src/one/one.module';
import { TwoController } from './two.controller';
import { TwoService } from './two.service';

@Module({
  imports: [
    forwardRef(() => OneModule), 
    forwardRef(() => AppModule)
  ],
  providers: [TwoService],
  controllers: [TwoController],
  exports: [TwoService],
})
export class TwoModule {}
