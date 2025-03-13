import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../prisma/__generated__';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleDestroy, OnModuleInit
{
  public async onModuleInit(): Promise<any> {
    await this.$connect();
  }

  public async onModuleDestroy(): Promise<any> {
    await this.$disconnect();
  }
}
