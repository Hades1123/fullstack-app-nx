import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { createUserReq } from '@fullstack-app/datatypes';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post()
  async createUser(@Body() body: createUserReq) {
    return this.appService.createNewUser(body.name, body.email);
  }
}
