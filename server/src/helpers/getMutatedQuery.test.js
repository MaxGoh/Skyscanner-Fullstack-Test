const getMutatedQuery = require('./getMutatedQuery');
const mockResults = require('./mockResult');

describe('getMutatedQuery', () => {
  let result;

  beforeAll(() => {
    result = mockResults;
    return result;
  });

  it('should return a Query object properly', () => {
    const mutatedQuery = getMutatedQuery(result);
    expect(typeof mutatedQuery).toBe("object");
  });

});