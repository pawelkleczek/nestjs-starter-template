import { Module } from '@nestjs/common';
import { HelloWorldModule } from './modules/hello-world/hello-world.module';

@Module({
  imports: [HelloWorldModule],
})
export class AppModule {}
