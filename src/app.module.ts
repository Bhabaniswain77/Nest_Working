import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewApp } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,NewApp],
})
export class AppModule {}
