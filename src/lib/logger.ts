import { createLogger } from 'bunyan';
import { config } from '../config';

export const logger = createLogger({
  name: 'nodejs-typescript-starter',
  level: config.LOG_LEVEL
});
