import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { WhoAmIDto } from './dto/whoAmI.dto';
import { UserDeleteDto, UserInfoDto } from './dto/userInfo.dto';
import { Request } from 'express';
import { RolesGuard } from '../libs/common/decorators/role-validator';
import { GetStarsDto, StarsDto } from './dto/stars.dto';
import { UserRole } from '../../prisma/__generated__';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('whoAmI')
  @HttpCode(HttpStatus.OK)
  public async whoAmI(@Query() dto: WhoAmIDto) {
    return await this.userService.findById(dto.userId);
  }

  @Post('allUsers')
  @HttpCode(HttpStatus.OK)
  @UseGuards(new RolesGuard(['administrator', 'support', 'teacher']))
  public async getAllUsers(@Query() query?: { roles: UserRole }) {
    return await this.userService.getAllUsers(query?.roles);
  }

  @Post('userInfo')
  @HttpCode(HttpStatus.OK)
  @UseGuards(new RolesGuard(['administrator', 'support']))
  public async getUserInfo(@Body() dto: UserInfoDto, @Req() request: Request) {
    return await this.userService.getUserInfo(dto.role, dto.email, request);
  }

  @Delete('deleteUser')
  @HttpCode(HttpStatus.OK)
  @UseGuards(new RolesGuard(['administrator']))
  public async deleteUser(@Body() dto: UserDeleteDto) {
    return await this.userService.deleteUser(dto.id);
  }

  @Post('scoring')
  @HttpCode(HttpStatus.OK)
  public async scoring(@Body() dto: StarsDto) {
    return await this.userService.scoring(dto);
  }

  @Post('getStars')
  @HttpCode(HttpStatus.OK)
  public async getStars(@Body() dto: GetStarsDto) {
    return await this.userService.getStars(dto.id);
  }

  @Post('updateUser')
  @HttpCode(HttpStatus.OK)
  public async updateUser(@Body() dto) {}

  @Get('courses')
  @HttpCode(HttpStatus.OK)
  public async getUserCourses(@Query() query: { id: string }) {
    const data = await this.userService.getCourses(query.id);
    return data;
  }
}
