import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UserService } from '../user/user.service';
import { AuthMethods, User } from '../../prisma/__generated__';
import { LoginDto } from './dto/login.dto';

import { Request } from 'express';

@Injectable()
export class AuthService {
  public constructor(private readonly userService: UserService) {}

  public async register(req: Request, dto: RegisterDto) {
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
      'user',
    );

    return this.saveSession(req, newUser);
  }

  public async login(dto: LoginDto) {
    const user = await this.userService.findMyEmail(dto.email);

    if (!user || !user.password) {
      return new NotFoundException('Пользователь не был найден');
    }

    if (dto.password !== user.password)
      return new UnauthorizedException('Введён неверный пароль!');

    return user;
  }
  public async logout() {
    return new Promise(() => {});
  }

  private async saveSession(req: Request, user: User) {
    console.log(`Session was successfully saved for user ${user.userName}`);
    return new Promise((resolve, reject) => {
      req.session.userId = user.id;
      // req.session.save((e) => {
      //   if (e) {
      //     return reject(
      //       new InternalServerErrorException(
      //         'Произошла ошибка при сохранении сессии. Пожалуйта, повторите Ваш запрос позже.',
      //       ),
      //     );
      //   }
      //   resolve({ user });
      // });
      resolve({ user });
    });
  }
}
