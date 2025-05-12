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
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

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
      (dto.firstName = ''),
      (dto.secondName = ''),
      (dto.fatherName = ''),
    );

    return this.saveSession(req, newUser);
  }

  public async login(req: Request, response: Response, dto: LoginDto) {
    const user = await this.userService.findMyEmail(dto.email);

    if (!user || !user.password) {
      throw new NotFoundException('Пользователь не был найден');
    }

    if (dto.password !== user.password) {
      throw new UnauthorizedException('Введён неверный пароль!');
    }

    const expires = new Date();
    expires.setMonth(expires.getMonth() + 1);
    const isoString = expires.toISOString();
    response.cookie('role', `${user.role}`, {
      path: '/',
      expires: new Date(isoString),
      httpOnly: true,
      secure: true,
    });
    response.cookie('userId', `${user.id}`, {
      path: '/',
      expires: new Date(isoString),
      httpOnly: true,
    });

    return this.saveSession(req, user);
  }

  public async logout(req: Request, res: Response): Promise<void> {
    return new Promise((resolve, reject) => {
      req.session.destroy((err) => {
        if (err) {
          return reject(
            new InternalServerErrorException(
              'Произошла ошибка при удалении сессии. Пожалуйста, повторите ваш запрос позже.',
            ),
          );
        }
        res.clearCookie(this.configService.getOrThrow<string>('SESSION_NAME'));
        res.clearCookie('role');
        res.clearCookie('userId');
        console.log('Session was successfully destroyed');
        resolve();
      });
    });
  }

  private async saveSession(req: Request, user: User) {
    return new Promise((resolve, reject) => {
      req.session.userId = user.id;
      req.session.save((e) => {
        if (e) {
          return reject(
            new InternalServerErrorException(
              'Произошла ошибка при сохранении сессии. Пожалуйта, повторите Ваш запрос позже.',
            ),
          );
        }
        console.log(`Session was successfully saved for user ${user.userName}`);
        resolve(this.generateToken(user));
      });
    });
  }

  private generateToken(user: User) {
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
      stars: user.stars,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
