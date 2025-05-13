import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateApplicationDto } from '../application/dto/create-application.dto';
import { GroupCreateDto } from './dto/group-create.dto';

@Injectable()
export class GroupService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async getAllGroups() {
    const data = await this.prismaService.group.findMany();
    return data;
  }

  public async findById(id: string) {
    const data = await this.prismaService.group.findUnique({
      where: { id },
    });
    return data;
  }

  public async create(dto: GroupCreateDto) {
    const data = await this.prismaService.group.create({
      data: dto,
    });
    return data;
  }

  public async assignUsers(dto: { id: string; users: string[] }) {
    const data = await this.prismaService.group.update({
      where: {
        id: dto.id,
      },
      data: { users: dto.users },
    });
  }
}
