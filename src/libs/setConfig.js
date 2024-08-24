
import config from '../utils/conf.js';

export const setConfig = ({key,val}) => {
  config.set(key,val)
};

export const clearConfig = () => {
  config.clear();
};
