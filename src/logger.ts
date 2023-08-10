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

((): void => {
  const console = logger;
  logger.debug('LOG: DEBUG LEVEL ENABLED');
  logger.error('LOG: ERROR LEVEL ENABLED');
  logger.warn('LOG: WARN ENABLED');
  logger.info('LOG: INFO LEVEL ENABLED');
  console.info(`LOG: Instantiated at: ${new Date().toLocaleString()}`);
  console.info(`LOG LEVEL: ${logger.levelVal}`);
})();

export default logger;
export { logger };
