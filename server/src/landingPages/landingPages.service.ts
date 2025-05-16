import { PrismaService } from '../prisma/prisma.service';
import { CreateLandingPageDto } from './dto/createLandingPage.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LandingPagesService {
  public constructor(private readonly prismaService: PrismaService) {}
  public async create(dto: CreateLandingPageDto) {
    const data = await this.prismaService.landingPage2.create({
      data: {
        ...dto,
      },
    });
    return data;
  }

  public async getAllLandingPages() {
    const data = await this.prismaService.landingPage2.findMany().then((landingPage2) =>
        landingPage2.map((landingPage2) => ({
        id: landingPage2.id,
        name: landingPage2.name,
        description: landingPage2.description,
        previewPath: landingPage2.previewPath,
        status: landingPage2.status,
        createdAt: landingPage2.createdAt,
        updatedAt: landingPage2.updatedAt,
      })),
    );
    return data;
  }

  public async getLandingPageById(id: string) {
    const landingPage2 = await this.prismaService.landingPage2.findUnique({
      where: { id },
    });

    if (!landingPage2) return null;

    const lessons = await Promise.all(
        landingPage2.lessons.map(async (lessonId) => {
        const data = await this.prismaService.lesson.findUnique({
          where: { id: lessonId },
        });
        return data;
      }),
    );

    return {
      ...landingPage2,
      lessons,
    };
  }
}
