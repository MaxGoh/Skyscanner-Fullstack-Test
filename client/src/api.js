import querystring from 'querystring';
import * as commons from './commons';

export const fetchAPI = (params) => {
  return fetch(`${commons.API_URL}/api/search?${querystring.stringify(params)}`);
};