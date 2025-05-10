import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/createCourse.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}
  @Get('/all')
  public async getAllCourses() {
    const data = await this.coursesService.getAllCourses();
    return data;
  }

  @Post('create')
  @HttpCode(HttpStatus.OK)
  public async createCourse(@Body() dto: CreateCourseDto) {
    const data = await this.coursesService.create(dto);
    return data;
  }

  @Post(':id')
  public async getCourseById(@Body() dto: { id: string }) {
    return {
      id: 123,
      name: 'Курс 1',
      previewPath: null,
      description: 'Тотали дристня',
      status: 'active',
      lessons: [
        {
          id: '2',
          name: 'Урок 1',
          status: 'hidden',
          description: 'Описание',
        },
        {
          id: '2',
          name: 'Урок 1',
        },
        {
          id: '2',
          name: 'Урок 1',
        },
        {
          id: '2',
          name: 'Урок 1',
        },
        {
          id: '2',
          name: 'Урок 1',
        },
        {
          id: '2',
          name: 'Урок 1',
        },
      ],
    };
  }
}
