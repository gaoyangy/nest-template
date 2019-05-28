/**
 * @Description: 
 * @Author: alien
 * @Date: 2019-05-27 20:17:48
 * @LastEditTime: 2019-05-28 09:54:49
 */
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware';
import * as helmet from 'helmet';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(helmet(), LoggerMiddleware)
      .forRoutes('*');
  }
}