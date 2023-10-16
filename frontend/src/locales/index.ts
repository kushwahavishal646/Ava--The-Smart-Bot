/* eslint-disable camelcase */
import auth_en from './en/auth.json';
import common_en from './en/common.json';

const langSetupOptions = {
  resources: {
    en: {
      common: common_en,
      auth: auth_en,
    },
  },
  ns: ['common', 'auth'],
  defaultNS: 'common',
};
export default langSetupOptions;
