import { forwardRef, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OneModule } from './one/one.module';
import { TwoModule } from './two/two.module';

@Module({
  imports: [
    forwardRef(() => OneModule), 
    forwardRef(() => TwoModule),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
