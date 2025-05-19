import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/createCourse.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}
  @Get('all')
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

  @Get('getCoursesByIdArray')
  @HttpCode(HttpStatus.OK)
  public async getCoursesByIdArray(@Query() query: { idArray: string[] }) {
    const data = await this.coursesService.getCoursesByIdArray(
      query['idArray[]'],
    );
    return data;
  }

  @Post(':id')
  public async getCourseById(@Body() dto: { id: string }) {
    const data = await this.coursesService.getCourseById(dto.id);
    return data;
  }
}
