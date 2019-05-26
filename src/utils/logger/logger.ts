/**
 * @Description: logger
 * @Author: alien
 * @Date: 2019-05-26 15:17:14
 * @LastEditTime: 2019-05-26 15:40:48
 */

import { LoggerService } from '@nestjs/common';
const chalk = require('chalk');
export class MyLogger implements LoggerService {
  log(message: string) {
      // tslint:disable-next-line:no-console
      console.log(chalk.blue(new Date()), chalk.green(message));
  }
  error(message: string, trace: string) {}
  warn(message: string) {}
  debug(message: string) {}
  verbose(message: string) {}
}