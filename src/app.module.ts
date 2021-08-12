import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OneModule } from './one/one.module';
import { TwoService } from './two/two.service';
import { TwoModule } from './two/two.module';

@Module({
  imports: [OneModule, TwoModule],
  controllers: [AppController],
  providers: [AppService, TwoService],
})
export class AppModule {}
