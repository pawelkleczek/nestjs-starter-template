import { Type } from 'class-transformer';
import { IsDefined, IsString, ValidateNested } from 'class-validator';

class SenderDto {
  @IsString()
  name: string;
}

class GreetingDto {
  @IsString()
  text: string;

  @IsDefined()
  @ValidateNested()
  @Type(() => SenderDto)
  sender: SenderDto;
}

export class HelloWorldDto {
  @IsDefined()
  @ValidateNested()
  @Type(() => GreetingDto)
  greeting: GreetingDto;
}
