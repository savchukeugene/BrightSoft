import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('/all')
  public async getAllCourses() {
    return [
      {
        id: 1,
        name: 'Курс 1',
        previewPath: null,
        description: 'Описание курса 1',
        status: 'active',
      },
      {
        id: 2,
        name: 'Курс 2',
        previewPath: null,
        description: 'Описание курса 2',
        status: 'active',
      },
      {
        id: 3,
        name: 'Курс 3',
        previewPath: null,
        description: 'Описание курса 3',
        status: 'active',
      },
    ];
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
