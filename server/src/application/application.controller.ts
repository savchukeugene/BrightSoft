import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { ApplicationService } from './application.service';
import { ApplicationStatus } from '../../prisma/__generated__';

@Controller('application')
export class ApplicationController {
  public constructor(private readonly applicationService: ApplicationService) {}
  @Post('createApplication')
  @HttpCode(HttpStatus.OK)
  public async create(@Body() dto: CreateApplicationDto) {
    const data = await this.applicationService.create(dto);
    return data;
  }

  @Get('getApplications')
  @HttpCode(HttpStatus.OK)
  public async getApplications() {
    const data = await this.applicationService.getApplications();
    return data;
  }

  @Get('getById')
  @HttpCode(HttpStatus.OK)
  public async getApplicationById(@Query() query: { applicationId: string }) {
    const data = await this.applicationService.findById(query.applicationId);
    return data;
  }

  @Patch('closeApplication')
  @HttpCode(HttpStatus.OK)
  public async closeApplication(
    @Query() query: { applicationId: string; decision: ApplicationStatus },
  ) {
    const data = await this.applicationService.closeApplication(
      query.applicationId,
      query.decision,
    );
    return data;
  }
}
