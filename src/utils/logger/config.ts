/**
 * @Description:
 * @Author: alien
 * @Date: 2019-05-26 17:03:09
 * @LastEditTime: 2019-05-27 20:33:52
 */
// tslint:disable-next-line:no-var-requires
const eggLog = require('egg-logger').Logger;
// tslint:disable-next-line:no-var-requires
const FileTransport = require('egg-logger').FileTransport;
// tslint:disable-next-line:no-var-requires
const ConsoleTransport = require('egg-logger').ConsoleTransport;

export class Log {
    constructor(...arg)  {
        const Loggers = new eggLog();
        const now = new Date();
        const refile = arg[0] ? arg[0] : 'file';
        const [ yy, mm, dd ] = [ now.getFullYear(), now.getMonth(), now.getDate() ];
        Loggers.set('files', new FileTransport(
            {
            file: `./logs/${yy}${mm}${dd}-INFO-${refile}`,
            level: 'INFO',
            },
            ));
        Loggers.set('files', new FileTransport(
            {
            file: `./logs/${yy}${mm}${dd}-ERROR-${refile}`,
            level: 'ERROR',
            },
        ));
        Loggers.set('console', new ConsoleTransport({
            level: 'DEBUG',
        }));
    }
}
