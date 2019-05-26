/**
 * @Description: logger
 * @Author: alien
 * @Date: 2019-05-26 15:17:14
 * @LastEditTime: 2019-05-26 17:07:17
 */
import { LoggerService, Module } from '@nestjs/common';
// tslint:disable-next-line:no-var-requires
const chalk = require('chalk');
// tslint:disable-next-line:no-var-requires
const Loggers = require('./config');
export class Logger implements LoggerService {
  log(message: string) {
    // tslint:disable-next-line:no-console
    console.log(chalk.blue(new Date()), chalk.green(message));
    Loggers.info(chalk.blue(new Date()), chalk.green(message));
  }
  error(message: string, trace: string) {
    // tslint:disable-next-line:no-console
    console.log(chalk.blue(new Date()), chalk.red(message, trace));
    Loggers.error(chalk.blue(new Date()), chalk.red(message, trace));
  }
  warn(message: string) {}
  debug(message: string) {}
  verbose(message: string) {}
}
