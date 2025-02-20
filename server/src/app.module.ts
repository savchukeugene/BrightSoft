import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthServiceModule } from './auth-service/auth-service.module';

@Module({
  imports: [AuthServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
