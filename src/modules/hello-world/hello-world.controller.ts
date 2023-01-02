import { Controller, Get } from '@nestjs/common';
import { HelloWorldService } from './hello-world.service';

@Controller('/hello-world')
export class HelloWorldController {
  constructor(private readonly helloWorld: HelloWorldService) {}

  @Get()
  getHelloWorld(): string {
    return this.helloWorld.getHelloWorld();
  }
}
