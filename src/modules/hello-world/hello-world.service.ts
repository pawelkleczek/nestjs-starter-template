import { Injectable } from '@nestjs/common';
import { HelloWorldDto } from './dto/hello-world.dto';

@Injectable()
export class HelloWorldService {
  getHelloWorld(): string {
    return 'Hello, World!';
  }

  setHelloWorld(helloWorldDto: HelloWorldDto): string {
    return helloWorldDto.text;
  }
}
