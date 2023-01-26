import { BadRequestException, ValidationError } from '@nestjs/common';

export class BadRequestValidationException extends BadRequestException {
  public readonly errors: ValidationError[];

  constructor(
    errors: ValidationError[],
    error?: string | object | any,
    description?: string,
  ) {
    super(error, description);
    this.errors = errors;
  }
}
