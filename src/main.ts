/**
 * @Description: 
 * @Author: alien
 * @Date: 2019-05-26 14:45:02
 * @LastEditTime: 2019-05-26 15:57:36
 */
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import * as rateLimit from 'express-rate-limit';
import * as compression from 'compression';

import { Logger } from './utils/logger/logger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new Logger(),
  });
  await app.listen(3000);
}
bootstrap();
