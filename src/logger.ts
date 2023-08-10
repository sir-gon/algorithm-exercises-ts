/* eslint-disable jest/require-hook */
/* istanbul ignore file */

import pino from 'pino';

const logger = pino({
  customLevels: {
    log: 30
  },
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      // sync: true,
      ignore: 'pid,hostname'
    }
  },
  level: process.env.LOG_LEVEL?.toLowerCase() ?? 'fatal'
});

export default logger;
export { logger };
