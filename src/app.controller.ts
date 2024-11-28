import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { NewApp } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly newApp: NewApp,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/new')
  async getUser(): Promise<{ id: number; name: string }[]> {
    return this.newApp.findAll();
  }
}
