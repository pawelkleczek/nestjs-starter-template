import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ValidationPipe } from './validation.pipe';

export function useMiddleware(app: INestApplication): INestApplication {
  app.enableCors();

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(new ValidationPipe());

  return app;
}

export async function createNestHttpApp(): Promise<INestApplication> {
  let app = await NestFactory.create(AppModule);

  app = useMiddleware(app);

  return app;
}
