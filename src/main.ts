/**
 * @Description: 
 * @Author: alien
 * @Date: 2019-05-26 14:45:02
 * @LastEditTime: 2019-05-26 15:18:50
 */
import { MyLogger } from './utils/logger/logger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new MyLogger(),
  });
  await app.listen(3000);
}
bootstrap();
