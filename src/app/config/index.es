
import merge from 'merge';

const config = {
  port: process.env.APP_PORT || 3333,
  gaTrackingCode: 'UA-XXXXXX-XX',
};

if (process.env.NODE_ENV === 'production') {
  merge(config, {
    gaTrackingCode: 'UA-491601-17',
  });
}

export default config;
