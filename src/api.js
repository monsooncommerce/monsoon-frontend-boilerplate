import request from 'superagent';
import Promise from 'bluebird';

const appDomain = process.env.REACT_APP_DOMAIN_APP;
const reportingDomain = process.env.REACT_APP_DOMAIN_REPORTING;
const streamDomain = process.env.REACT_APP_DOMAIN_STREAM + '/api/v1';

const mockEndpoint = 'https://jsonplaceholder.typicode.com';

const apiConfig = {
  fake_data(request, {txnId}) {
    return request
      .get(`${mockEndpoint}/users`);
  }
};

const requestFactory = (config) => (key) => (options) => {
  const jwt = localStorage.getItem('jwt');
  return config[key](request, options)
    .set('X-JWT', jwt)
};

export default requestFactory(apiConfig);
