describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.temp).toEqual(20);
  });

  it("temperature can increase with up function", function() {
    thermostat.up(5)
    expect(thermostat.temp).toEqual(25);
  });

  it("temperature can decrease with down function", function() {
    thermostat.down(10)
    expect(thermostat.temp).toEqual(10);
  });

  it("temperature can increase and decrease", function() {
    thermostat.up(10)
    thermostat.down(5)
    expect(thermostat.temp).toEqual(25);
  });
});