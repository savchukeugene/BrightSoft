import { LessonService } from './lesson.service';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { createUploadInterceptor } from '../libs/common/utils/createUploadInterceptor.util';

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

  @Post('uploadImage')
  @HttpCode(HttpStatus.OK)
  @createUploadInterceptor(
    'file',
    process.env.IMAGE_FILE_PATH || '../../assets/image',
  )
  uploadPicture(@UploadedFile() file) {
    return {
      filename: file.filename,
      originalName: file.originalname,
      size: file.size,
      path: file.path,
    };
  }

  @Post('uploadVideo')
  @HttpCode(HttpStatus.OK)
  @createUploadInterceptor(
    'file',
    process.env.VIDEO_FILE_PATH || '../../assets/video',
  )
  uploadVideo(@UploadedFile() file) {
    return {
      filename: file.filename,
      originalName: file.originalname,
      size: file.size,
      path: file.path,
    };
  }
}
