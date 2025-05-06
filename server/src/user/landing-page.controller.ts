import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { LandingPageService } from './landing-page.service';
import { CreateLandingPageDto } from './dto/createLandingPage.dto';
import { DeleteLandingPageDto } from './dto/deleteLandingPage.dto';
import { GetLandingPagesDto } from './dto/getLandingPage.dto';

@Controller('landing-pages')
export class LandingPageController {
  constructor(private readonly landingPageService: LandingPageService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() dto: CreateLandingPageDto) {
    return await this.landingPageService.create(dto);
  }

  @Post('all')
  @HttpCode(HttpStatus.OK)
  public async getAll(@Body() dto: GetLandingPagesDto) {
    return await this.landingPageService.getAll(dto.authorId);
  }

  @Delete('delete')
  @HttpCode(HttpStatus.OK)
  public async delete(@Body() dto: DeleteLandingPageDto) {
    return await this.landingPageService.delete(dto.id);
  }
}