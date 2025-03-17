import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { WhoAmIDto } from './dto/whoAmI.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('whoAmI')
  @HttpCode(HttpStatus.OK)
  public async whoAmI(@Body() dto: WhoAmIDto) {
    return await this.userService.findById(dto.userId);
  }
}
