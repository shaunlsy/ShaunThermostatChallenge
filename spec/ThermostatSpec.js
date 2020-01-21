describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.temp).toEqual(20);
  });

  it("temperature can increase with up function", function() {
    thermostat.up(5);
    expect(thermostat.temp).toEqual(25);
  });

  it("temperature can decrease with down function", function() {
    thermostat.down(10);
    expect(thermostat.temp).toEqual(10);
  });

  it("temperature can increase and decrease", function() {
    thermostat.up(10);
    thermostat.down(5);
    expect(thermostat.temp).toEqual(25);
  });

  it("has a minimum temperature of 10", function() {
    expect(thermostat.minTemp).toEqual(10);
  });

  describe("Power saving mode", function() {
    it("has maximum temperature of 25 when the mode is on", function() {
      thermostat.powerSavingMode("On");
      expect(thermostat.maxTemp).toEqual(25);
    });

    it("has maximum temperature of 32 when the mode is off", function() {
      thermostat.powerSavingMode("Off");
      expect(thermostat.maxTemp).toEqual(32);
    });
  });
});
