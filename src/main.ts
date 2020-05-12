/**
 * @Description: 
 * @Author: alien
 * @Date: 2019-05-26 14:45:02
 * @LastEditTime: 2019-05-26 15:57:36
 */
import 'dotenv/config';
import * as path from 'path';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import * as rateLimit from 'express-rate-limit';
import * as compression from 'compression';
import { NestExpressApplication } from '@nestjs/platform-express';
import { HttpExceptionFilter } from './filtter/http-exception';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './transform/interceptor';
import { ValidationPipe } from './pipe/validation';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import config from '../config'

async function bootstrap() {
  const PORT = process.env.PORT || 8080;
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true, // 设置跨站访问
    logger: false,
  });
  // 配置api文档信息
  const options = new DocumentBuilder()
  .setTitle('接口文档')
  .setDescription('api接口文档')
  // .setBasePath('/')
  .addBearerAuth({ type: 'apiKey', in: 'header', name: 'token' })
  .setVersion('0.0.1')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api', app, document);
  //配置静态资源目录
  app.useStaticAssets(path.join(__dirname, '..', 'public'), {
    prefix: config.staticPrefixPath
  });
  // Web漏洞的
  app.use(helmet());
  app.useGlobalFilters(new HttpExceptionFilter());
  // 全局注册拦截器(成功返回格式)
  app.useGlobalInterceptors(new TransformInterceptor());
  // 全局使用管道(数据校验)
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () => {
    Logger.log(`服务已经启动,请访问:http://wwww.localhost:${PORT}`);
  });
}
bootstrap().catch(e => Logger.error('错误', e));
