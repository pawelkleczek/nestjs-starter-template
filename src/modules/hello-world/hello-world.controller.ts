import { Body, Controller, Get, Post } from '@nestjs/common';
import { HelloWorldDto } from './dto/hello-world.dto';
import { HelloWorldService } from './hello-world.service';

@Controller('/hello-world')
export class HelloWorldController {
  constructor(private readonly helloWorld: HelloWorldService) {}

  @Get()
  getHelloWorld(): string {
    return this.helloWorld.getHelloWorld();
  }

  @Post()
  setHelloWorld(@Body() helloWorldDto: HelloWorldDto): string {
    return this.helloWorld.setHelloWorld(helloWorldDto);
  }
}
