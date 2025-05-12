import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateApplicationDto } from './dto/create-application.dto';

@Injectable()
export class ApplicationService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async findById(id: string) {
    const data = await this.prismaService.application.findUnique({
      where: { id },
    });
    return data;
  }

  public async create(dto: CreateApplicationDto) {
    const data = await this.prismaService.application.create({
      data: dto,
    });
    return data;
  }

  public async getApplications() {
    const data = await this.prismaService.application.findMany();
    return data;
  }

  public async closeApplication(id: string) {
    const data = await this.prismaService.application.update({
      where: { id },
      data: {
        status: 'closed',
      },
    });
    return data;
  }
}
