const getCarrier = require('./getCarrier');

describe('getCarrier', () => {

  let carriers;

  beforeAll(() => {
    carriers = [{
      "Id": 885,
      "Code": "BE",
      "Name": "Flybe",
      "ImageUrl": "http://s1.apideeplink.com/images/airlines/BE.png",
      "DisplayCode": "BE"
    }];
    return carriers;
  });

  it('should return correct Carrier Object with found Id', () => {
    const carrier = getCarrier(carriers, 885);
    expect(carrier.Id).toBe(885);
    expect(carrier.Code).toBe("BE");
    expect(carrier.Name).toBe("Flybe");
    expect(carrier.ImageUrl).toBe("http://s1.apideeplink.com/images/airlines/BE.png");
    expect(carrier.DisplayCode).toBe("BE");
    expect(typeof carrier).toBe("object");
  });

  it('should return undefined with unfound Id', () => {
    const carrier = getCarrier(carriers, 886);
    expect(carrier).toBeUndefined();
  });

});