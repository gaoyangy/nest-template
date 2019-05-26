/**
 * @Description: 
 * @Author: alien
 * @Date: 2019-05-26 14:45:02
 * @LastEditTime: 2019-05-26 15:20:12
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
