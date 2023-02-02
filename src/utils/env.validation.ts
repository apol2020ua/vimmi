import { ClassConstructor, plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';
import { ValidationError } from 'class-validator/types/validation/ValidationError';
import { Logger } from '@nestjs/common';

export function validate<T>(
  config: Record<string, any>,
  schema: ClassConstructor<T>,
): T {
  const validatedConfig: T = plainToClass(schema, config, {
    enableImplicitConversion: true,
  });

  const errors: ValidationError[] = validateSync(
    validatedConfig as Record<string, unknown>,
    {
      skipMissingProperties: false,
    },
  );

  if (errors.length > 0) {
    const errMessage: string = errors
      .map((err) => err.toString(false))
      .toString();

    new Logger('EnvValidation').log(errMessage);
  }
  return validatedConfig;
}
