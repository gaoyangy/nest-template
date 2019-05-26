/**
 * @Description:
 * @Author: alien
 * @Date: 2019-05-26 17:03:09
 * @LastEditTime: 2019-05-26 17:04:44
 */
// tslint:disable-next-line:no-var-requires
const eggLog = require('egg-logger').Logger;
// tslint:disable-next-line:no-var-requires
const FileTransport = require('egg-logger').FileTransport;
// tslint:disable-next-line:no-var-requires
const ConsoleTransport = require('egg-logger').ConsoleTransport;
const Loggers = new eggLog();
const now = new Date();
const [ yy, mm, dd ] = [ now.getFullYear(), now.getMonth(), now.getDate() ];
Loggers.set('files', new FileTransport(
    {
    file: `./logs/${yy}${mm}${dd}-INFO`,
    level: 'INFO',
    },
    ));
Loggers.set('files', new FileTransport(
    {
    file: `./logs/${yy}${mm}${dd}-ERROR`,
    level: 'ERROR',
    },
));
Loggers.set('console', new ConsoleTransport({
    level: 'DEBUG',
}));

module.exports = Loggers;
