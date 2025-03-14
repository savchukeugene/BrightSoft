import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { AuthService } from './authService.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AppController {
  public constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.OK)
  public async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
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
