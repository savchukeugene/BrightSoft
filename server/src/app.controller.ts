import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

interface IDto {
  id: string;
  name: string;
  age: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postData(@Body() dto: IDto): string {
    console.log(dto);

    return 'Success';
  }
}
