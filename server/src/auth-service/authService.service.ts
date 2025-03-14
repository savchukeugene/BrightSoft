import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UserService } from '../user/user.service';
import { AuthMethods, User } from '../../prisma/__generated__';

@Injectable()
export class AuthService {
  public constructor(private readonly userService: UserService) {}

  public async register(dto: RegisterDto) {
    const isExist = await this.userService.findMyEmail(dto.email);

    if (isExist) {
      throw new ConflictException(
        `Пользователь с email ${dto.email} уже существует`,
      );
    }

    const newUser = await this.userService.create(
      dto.email,
      dto.password,
      dto.name,
      '',
      AuthMethods.credantials,
      false,
      'administrator',
    );

    return this.saveSession(newUser);
  }
  public async login() {}
  public async logout() {}
  private async saveSession(user: User) {
    console.log(`Session was successfully saved for user ${user.userName}`);
  }
}
