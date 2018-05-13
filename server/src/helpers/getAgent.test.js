const getAgent = require('./getAgent');

describe('getAgent', () => {
  let agents;

  beforeAll(() => {
    agents = [{
      "Id": 1963108,
      "Name": "Mytrip",
      "ImageUrl": "http://s1.apideeplink.com/images/websites/at24.png",
      "Status": "UpdatesComplete",
      "OptimisedForMobile": true,
      "BookingNumber": "+448447747881",
      "Type": "TravelAgent"
    }];
    return agents;
  });

  it('should return correct Agent Object with found Id', () => {
    const agent = getAgent(agents, 1963108);
    expect(agent.Id).toBe(1963108);
    expect(agent.Name).toBe("Mytrip");
    expect(agent.ImageUrl).toBe("http://s1.apideeplink.com/images/websites/at24.png");
    expect(agent.Status).toBe("UpdatesComplete");
    expect(agent.OptimisedForMobile).toBe(true);
    expect(agent.BookingNumber).toBe("+448447747881");
    expect(agent.Type).toBe("TravelAgent");

  })

  it('should return undefined with unfound Id', () => {
    const agent = getAgent(agents, 1963188);
    expect(agent).toBeUndefined();
  });
})