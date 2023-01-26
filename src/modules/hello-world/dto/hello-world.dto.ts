import { IsString } from 'class-validator';

export class HelloWorldDto {
  @IsString()
  text: string;
}
