import minutesToHoursMinutes from './minutesToHoursMinutes';

describe('minutesToHoursMinutes', () => {
  it('should return in hours minutes format', () => {
    expect(minutesToHoursMinutes(40)).toEqual('0h 40');
    expect(minutesToHoursMinutes(60)).toEqual('1h 0');
    expect(minutesToHoursMinutes(80)).toEqual('1h 20');
    expect(minutesToHoursMinutes(90)).toEqual('1h 30');
  });
});