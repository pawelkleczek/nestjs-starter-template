import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

export function useMiddleware(app: INestApplication): INestApplication {
  app.enableCors();

  app.setGlobalPrefix('api/v1');

  return app;
}

export async function createNestHttpApp(): Promise<INestApplication> {
  let app = await NestFactory.create(AppModule);

  app = useMiddleware(app);

  return app;
}
