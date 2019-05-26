/**
 * @Description: 
 * @Author: alien
 * @Date: 2019-05-26 14:45:02
 * @LastEditTime: 2019-05-26 17:01:46
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
