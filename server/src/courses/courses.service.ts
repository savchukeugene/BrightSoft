import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto } from './dto/createCourse.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CoursesService {
  public constructor(private readonly prismaService: PrismaService) {}
  public async create(dto: CreateCourseDto) {
    const data = await this.prismaService.courses.create({
      data: {
        ...dto,
        previewPath: '',
        status: 'active',
        lessons: [],
      },
    });
    return data;
  }

  public async getAllCourses() {
    const data = await this.prismaService.courses.findMany().then((courses) =>
      courses.map((course) => ({
        id: course.id,
        name: course.name,
        description: course.description,
        previewPath: course.previewPath,
        status: course.status,
      })),
    );
    return data;
  }

  public async getCourseById(id: string) {
    const course = await this.prismaService.courses.findUnique({
      where: { id },
    });

    if (!course) return null;

    const lessons = await Promise.all(
      course.lessons.map(async (lessonId) => {
        const data = await this.prismaService.lesson.findUnique({
          where: { id: lessonId },
        });
        return data;
      }),
    );

    return {
      ...course,
      lessons,
    };
  }
}
