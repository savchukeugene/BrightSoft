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
  @UseGuards(new RolesGuard(['administrator', 'support']))
  public async getAllUsers() {
    return await this.userService.getAllUsers();
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

  @Get('courses')
  @HttpCode(HttpStatus.OK)
  public async getUsesCourses(@Query() query) {
    console.log(query);
    return {};
  }
}
