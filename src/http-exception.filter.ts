import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { Request, Response } from 'express';
import { BadRequestValidationException } from './exceptions/bad-request-validation.exception';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    let errors: string[];
    if (exception instanceof BadRequestValidationException) {
      errors = this.formatValidationErrors(exception.errors);
    } else {
      errors = [exception.message];
    }

    response.status(status).json({
      errors,
      statusCode: status,
      name: exception.name,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }

  private formatValidationErrors(
    errors: ValidationError[],
    path?: string,
  ): string[] {
    return errors.flatMap((error) => {
      if (error.children.length) {
        return this.formatValidationErrors(
          error.children,
          [path, error.property].filter(Boolean).join('.'),
        );
      }
      return Object.values(error.constraints).map(
        (constraint) => `${path}.${constraint}`,
      );
    });
  }
}
