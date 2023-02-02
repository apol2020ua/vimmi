import { Type } from 'class-transformer';
import { IsNumber, Max, Min } from 'class-validator';

export class Environment {
  @IsNumber()
  @Min(1024)
  @Max(65535)
  @Type(() => Number)
  PORT: number;
}
