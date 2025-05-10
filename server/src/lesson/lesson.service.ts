import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Injectable()
export class LessonService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async create(dto: CreateLessonDto) {
    const data = await this.prismaService.lesson.create({
      data: { ...dto, picture: '', video: '', position: 1 },
    });
    return data;
  }

  public async getByCourseId(courseId: string) {
    const data = await this.prismaService.lesson.findMany({
      where: { course: courseId },
    });
    return data;
  }
}
