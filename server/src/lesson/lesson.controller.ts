import { LessonService } from './lesson.service';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Controller('lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Post('create')
  @HttpCode(HttpStatus.OK)
  public async createLesson(@Body() dto: CreateLessonDto) {
    const data = await this.lessonService.create(dto);
    return data;
  }

  @Get('getByCourseId')
  @HttpCode(HttpStatus.OK)
  public async getByCourseId(@Query() dto: { courseId: string }) {
    const data = await this.lessonService.getByCourseId(dto.courseId);
    return data;
  }
}
