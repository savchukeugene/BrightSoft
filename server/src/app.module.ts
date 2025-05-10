import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IS_DEV_ENV } from './libs/common/utils/is-dev.util';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthServiceModule } from './auth-service/auth-service.module';
import { CoursesModule } from './courses/courses.module';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: !IS_DEV_ENV,
      isGlobal: true,
    }),
    PrismaModule,
    UserModule,
    AuthServiceModule,
    CoursesModule,
    LessonModule,
  ],
})
export class AppModule {}
