import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { AuthService } from './authService.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

import { Request } from 'express-session';

@Controller('auth')
export class AppController {
  public constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.OK)
  public async register(@Req() req: Request, @Body() dto: RegisterDto) {
    return this.authService.register(req, dto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Get('getUser/:id')
  getHello(@Param('id') id: string): string {
    console.log(id);
    return 'Hello';
  }

  @Post()
  postData(): string {
    return 'Success';
  }
}
