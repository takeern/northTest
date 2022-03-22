import pkg from '../package.json';
import { North } from 'north';

export const config = {
  sentry: {
    dsn: "http://165c5f421710407ca56b502d864fc833@47.243.231.246:9000/5",
    tracesSampleRate: 1.0,
    release: `${pkg.name}@${pkg.version}`
  }
};

const north = new North(config);
export default north;