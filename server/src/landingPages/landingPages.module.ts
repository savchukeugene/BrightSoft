import { Module } from '@nestjs/common';
import { LandingPagesController } from './landingPages.controller';
import { LandingPagesService } from './landingPages.service';

@Module({
  controllers: [LandingPagesController],
  providers: [LandingPagesService],
})
export class LandingPagesModule {}
