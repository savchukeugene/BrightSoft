import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  public constructor(private readonly prismaService: PrismaService) {}

  public findById() {}
}
