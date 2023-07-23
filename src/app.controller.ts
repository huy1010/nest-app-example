import { Controller, Get, Req  } from '@nestjs/common';
import { AppService } from './app.service';
import os from 'os';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req) {
    return {
      clientIp: req.headers['x-forwarded-for'],
      elbIp: req.socket.remoteAddress,
      ip: req.ip,
      containerIp: req.socket.localAddress,
      headers: req.headers,
    }
  }
}
