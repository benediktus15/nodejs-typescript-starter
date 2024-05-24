import rc from 'rc';

/**
 * Configuration data structure
 * @exports
 * @interface Config
 */
export interface Config {
  APP_HOST: string;
  APP_PORT: number;
  LOG_LEVEL: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';
}

export const configDefault: Config = {
  APP_HOST: 'http://localhost',
  APP_PORT: 3011,
  LOG_LEVEL: 'error'
};

/**
 * Read RC Configuration file
 * Option: dev or non-dev source by NODE_ENV
 * @returns {Config}
 */
function readRcFile(): Config {
  const configSource = 'config';
  const config = rc(configSource, configDefault) as Config;
  return config;
}

export const config: Config = readRcFile();
