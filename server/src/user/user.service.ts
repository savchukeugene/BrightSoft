import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { $Enums, AuthMethods } from '../../prisma/__generated__';
import UserRole = $Enums.UserRole;
import { Request } from 'express';
import { StarsDto } from './dto/stars.dto';

@Injectable()
export class UserService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async findById(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
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

  public async getAllUsers(): Promise<any> {
    const data = this.prismaService.user.findMany({});
    if (!data) throw new NotFoundException(`Пользователи не найдены!`);
    return data;
  }

  public async getUserInfo(role: UserRole, email: string, request: Request) {
    const data = this.findMyEmail(email);
    if (!data) throw new NotFoundException(`Пользователь не найден!`);
    return data;
  }

  public async deleteUser(id: string) {
    const data = this.prismaService.user.delete({
      where: { id },
    });
    if (!data) throw new NotFoundException(`Пользователь не найден!`);
    return data;
  }

  public async scoring(dto: StarsDto) {
    const user = await this.findById(dto.id);
    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    let updatedStars = user.stars;

    updatedStars =
      dto.operation === 'accrue'
        ? user.stars + dto.amount
        : Math.max(0, user.stars - dto.amount);

    return this.prismaService.user.update({
      where: { id: dto.id },
      data: { stars: updatedStars },
    });
  }

  public async getStars(id: string) {
    const user = await this.findById(id);
    if (!user) {
      throw new NotFoundException('Пользователь с таким id не был найден!');
    }
    return user.stars;
  }

  public async create(
    email: string,
    password: string,
    userName: string,
    picture: string,
    method: AuthMethods,
    isVerified: boolean,
    role: UserRole,
    firstName: string,
    secondName: string,
    fatherName: string,
  ) {
    const user = this.prismaService.user.create({
      data: {
        email,
        password,
        userName,
        picture,
        method,
        isVerified,
        role,
        firstName,
        secondName,
        fatherName,
      },
      include: {
        accounts: true,
      },
    });
    return user;
  }
}
