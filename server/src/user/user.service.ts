import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { $Enums, AuthMethods } from '../../prisma/__generated__';
import UserRole = $Enums.UserRole;

@Injectable()
export class UserService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async findById(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
      include: {
        accounts: true,
      },
    });

    if (!user)
      throw new NotFoundException(
        `Пользователь с идентификатором ${id} не найден!`,
      );
    return user;
  }

  public async findMyEmail(email: string) {
    const user = this.prismaService.user.findUnique({
      where: { email },
      include: {
        accounts: true,
      },
    });

    if (!user)
      throw new NotFoundException(
        `Пользователь с почтой ${email} не был найден!`,
      );

    return user;
  }

  public async getAllUsers(role: UserRole) {
    if (role !== 'administrator') {
      throw new ForbiddenException(
        'У вас нету прав для получения данной информации',
      );
    }
    const data = this.prismaService.user.findMany({});
    if (!data) throw new NotFoundException(`Пользователи не найдены!`);
    return data;
  }

  public async create(
    email: string,
    password: string,
    userName: string,
    picture: string,
    method: AuthMethods,
    isVerified: boolean,
    role: UserRole,
  ) {
    const user = this.prismaService.user.create({
      data: { email, password, userName, picture, method, isVerified, role },
      include: {
        accounts: true,
      },
    });
    return user;
  }
}
