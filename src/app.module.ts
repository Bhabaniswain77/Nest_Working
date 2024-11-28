import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewApp } from './app.service';
import { CatsController } from './cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, NewApp],
})
export class AppModule {}
