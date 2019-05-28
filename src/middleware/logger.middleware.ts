/**
 * @Description: logger
 * @Author: alien
 * @Date: 2019-05-27 20:17:48
 * @LastEditTime: 2019-05-28 10:04:49
 */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    req.headers.requestId = new Date().getTime().toString() + '|' + process.hrtime()[1].toString();
    console.log(req.headers.requestId, new Date(), req.method, req.hostname, req.url, req.body);
    next();
  }
}
