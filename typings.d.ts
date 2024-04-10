declare module 'gen-logger' {
    import { Signale } from 'signale';
  
    interface LoggerOptions {
      disabled?: boolean;
      interactive?: boolean;
      logLevel?: string;
      scope?: string;
    }
  
    interface LoggerTypeConfig {
      badge: string;
      color: string;
      label: string;
    }
  
    interface LoggerTypes {
      [key: string]: LoggerTypeConfig;
    }
  
    class Logger extends Signale {
      constructor(options?: LoggerOptions);
    }
  
    export = Logger;
}
  