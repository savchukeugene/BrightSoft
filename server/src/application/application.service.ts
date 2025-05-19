import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { ApplicationStatus } from '../../prisma/__generated__';
import { UserService } from '../user/user.service';

@Injectable()
export class ApplicationService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly userService: UserService,
  ) {}

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

    const newData = await Promise.all(
      data.map(async (application) => {
        const user = await this.prismaService.user.findUnique({
          where: { id: application.userId },
        });
        const group = await this.prismaService.group.findUnique({
          where: {
            id: application.id,
          },
        });
        const course = await this.prismaService.courses.findUnique({
          where: {
            id: application.courseId,
          },
        });

        return {
          ...application,
          userName: user?.userName ?? 'Не найдено',
          groupNumber: group?.groupNumber ?? 'Не найдено',
          courseName: course?.name ?? 'Не найдено',
        };
      }),
    );

    return newData;
  }

  public async closeApplication(id: string, decision: ApplicationStatus) {
    const applicationInfo = await this.findById(id);
    if (!applicationInfo) {
      throw new NotFoundException('Такая заявка не найдена!');
    }
    const { courseName } = await this.userService.findById(
      applicationInfo.userId,
    );
    await this.prismaService.user.update({
      where: {
        id: applicationInfo.userId,
      },
      data: {
        courseName:
          courseName.length > 0
            ? [...courseName, applicationInfo.courseId]
            : [applicationInfo.courseId],
      },
    });
    const data = await this.prismaService.application.update({
      where: { id },
      data: {
        status: decision,
      },
    });
    return data;
  }
}
