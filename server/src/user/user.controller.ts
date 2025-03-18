import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { WhoAmIDto } from './dto/whoAmI.dto';
import { UserRole } from '../../prisma/__generated__';
import { UserInfoDto } from './dto/userInfo.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('whoAmI')
  @HttpCode(HttpStatus.OK)
  public async whoAmI(@Body() dto: WhoAmIDto) {
    return await this.userService.findById(dto.userId);
  }

  @Post('allUsers')
  @HttpCode(HttpStatus.OK)
  public async getAllUsers(@Body() dto: { role: UserRole }) {
    return await this.userService.getAllUsers(dto.role);
  }

  @Post('userInfo')
  @HttpCode(HttpStatus.OK)
  public async getUserInfo(@Body() dto: UserInfoDto) {
    return await this.userService.getUserInfo(dto.role, dto.email);
  }
}
