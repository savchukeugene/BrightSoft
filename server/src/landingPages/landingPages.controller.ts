import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { LandingPagesService } from './landingPages.service';
import { CreateLandingPageDto } from './dto/createLandingPage.dto';

@Controller('landingPages')
export class LandingPagesController {
  constructor(private readonly landingPagesService: LandingPagesService) {}
  @Get('all')
  public async getAllLandingPages() {
    const data = await this.landingPagesService.getAllLandingPages();
    return data;
  }

  @Post('create')
  @HttpCode(HttpStatus.OK)
  public async createLandingPages(@Body() dto: CreateLandingPageDto) {
    const data = await this.landingPagesService.create(dto);
    return data;
  }

  @Post(':id')
  public async getLandingPageById(@Body() dto: { id: string }) {
    const data = await this.landingPagesService.getLandingPageById(dto.id);
    return data;
  }
}
