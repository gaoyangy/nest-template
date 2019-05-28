/**
 * @Description: logger
 * @Author: alien
 * @Date: 2019-05-26 15:17:14
 * @LastEditTime: 2019-05-27 20:27:52
 */
import { LoggerService, Module } from '@nestjs/common';
// tslint:disable-next-line:no-var-requires
const chalk = require('chalk');
// tslint:disable-next-line:no-var-requires
import { Log } from './config';
export class Logger implements LoggerService {
  log(message: string) {
    // tslint:disable-next-line:no-console
    console.log(chalk.blue(new Date()), chalk.green(message));
    const Logs = new Log();
  }
  error(message: string, trace: string) {
    // tslint:disable-next-line:no-console
    console.log(chalk.blue(new Date()), chalk.red(message, trace));
  }
  warn(message: string) {}
  debug(message: string) {}
  verbose(message: string) {}
}
