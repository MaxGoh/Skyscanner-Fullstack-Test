import { fetchAPI } from './api';
import moment from 'moment';

describe('Fetch API', () => {

  const params = {
    adults: 2,
    class: 'Economy',
    toPlace: 'LOND-sky',
    fromPlace: 'EDI-sky',
    toDate: moment().day(1 + 8).format('YYYY-MM-DD'),
    fromDate: moment().day(1 + 7).format('YYYY-MM-DD')
  }

  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should return a promise object', () => {
    fetch.mockResponseOnce(JSON.stringify({'max': 1}));

    fetchAPI(params)
      .then((response) => {
        expect(typeof response).toBe('object');
      })

  })

});