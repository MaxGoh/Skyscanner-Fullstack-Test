const getPlace = require('./getAgent');

describe('getPlace', () => {
  let places;

  beforeAll(() => {
    places = [{
      "Id": 11235,
      "ParentId": 2343,
      "Code": "EDI",
      "Type": "Airport",
      "Name": "Edinburgh"
    }];
    return places;
  });

  it('should return correct Place Object with found Id', () => {
    const place = getPlace(places, 11235);
    expect(place.Id).toBe(11235);
    expect(place.ParentId).toBe(2343);
    expect(place.Code).toBe("EDI");
    expect(place.Type).toBe("Airport");
    expect(place.Name).toBe("Edinburgh");
  });

  it('should return undefined with unfound Id', () => {
    const place = getPlace(places, 11236);
    expect(place).toBeUndefined();
  });

})