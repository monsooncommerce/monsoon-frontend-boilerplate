'use strict';
require('dotenv').config();


// Grab NODE_ENV and REACT_APP_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.

var REACT_ENV = /^REACT_/i;

function getClientEnvironment() {
  console.log(process.env)
  var raw = Object.keys(process.env).filter(key => REACT_ENV.test(key)).reduce((env, key) => {
      env[key] = process.env[key];
      return env;
    },
    {
      'NODE_ENV': process.env.NODE_ENV || 'development',
    }
  );

  var stringified = {
    'process.env': Object
      .keys(raw)
      .reduce((env, key) => {
        env[key] = JSON.stringify(raw[key]);
        return env;
      }, {})
  };

  return { raw, stringified };
}

module.exports = getClientEnvironment;
