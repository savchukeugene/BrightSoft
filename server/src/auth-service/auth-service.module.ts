import { Module } from '@nestjs/common';
import { AppController } from './auth-service.controller';
import { AuthService } from './authService.service';
import { UserService } from '../user/user.service';

@Module({
  controllers: [AppController],
  providers: [AuthService, UserService],
})
export class AuthServiceModule {}
