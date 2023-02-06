import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exception.filter';
import { LoggingInterceptor } from './logging.interceptor';
import { ValidationPipe } from './validation.pipe';

export function useMiddleware(app: INestApplication): INestApplication {
  /**
   * Open up the gates,
   */
  app.enableCors();

  /**
   * ...stamp your mark on the world,
   */
  app.setGlobalPrefix('api/v1');

  /**
   * ...keep this app in shape,
   */
  app.useGlobalPipes(new ValidationPipe());

  /**
   * ...give it some finesse,
   */
  app.useGlobalFilters(new HttpExceptionFilter());

  /**
   * ... and add a pinch of superpowers!
   */
  app.useGlobalInterceptors(new LoggingInterceptor());

  return app;
}

export async function createNestHttpApp(): Promise<INestApplication> {
  let app = await NestFactory.create(AppModule);

  /**
   * Middleware meat grinder.
   */
  app = useMiddleware(app);

  return app;
}
