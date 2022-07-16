import { Controller, Get, Req, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get()
  @Header('Cache-Control', 'none')
  getRoot(@Req() req: Request): string {
    console.log(`Request ${req.ip}`);
    return 'root path handler';
  }
}
