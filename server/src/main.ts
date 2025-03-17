import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import IORedis from 'ioredis';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import { ms, StringValue } from './libs/common/utils/ms.util';
import { parseBoolean } from './libs/common/utils/parse-boolean.util';
import { RedisStore } from 'connect-redis';
let express = require('express');

dotenv.config();
let router = express.Router();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  const redis: IORedis = new IORedis({
    port: config.getOrThrow('REDIS_PORT'),
    host: config.getOrThrow('REDIS_HOST'),
    password: config.getOrThrow('REDIS_PASSWORD'),
  });
  app.use(router);
  app.use(
    session({
      secret: config.getOrThrow<string>('SESSION_SECRET'),
      name: config.getOrThrow<string>('SESSION_NAME'),
      resave: true,
      saveUninitialized: false,
      cookie: {
        domain: config.getOrThrow<string>('SESSION_DOMAIN'),
        maxAge: ms(config.getOrThrow<StringValue>('SESSION_MAX_AGE')),
        httpOnly: parseBoolean(config.getOrThrow<string>('SESSION_HTTP_ONLY')),
        secure: parseBoolean(config.getOrThrow<string>('SESSION_SECURE')),
        sameSite: 'lax',
      },
      store: new RedisStore({
        client: redis,
        prefix: config.getOrThrow<string>('SESSION_FOLDER'),
      }),
    }),
  );
  // Cookie adjusting
  app.use(cookieParser(config.getOrThrow<string>('COOKIE_SECRET')));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors({
    origin: config.getOrThrow<string>('ALLOWED_ORIGINS'),
    credentials: true,
    exposedHeaders: ['set-cookie'],
  });

  const port: number = config.getOrThrow<number>('PORT') || 3000;
  await app.listen(port);
}
bootstrap();
