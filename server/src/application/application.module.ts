import { Module } from '@nestjs/common';
import { ApplicationController } from './application.controller';
import { ApplicationService } from './application.service';
import { UserService } from '../user/user.service';

@Module({
  controllers: [ApplicationController],
  providers: [ApplicationService, UserService],
})
export class ApplicationModule {}
