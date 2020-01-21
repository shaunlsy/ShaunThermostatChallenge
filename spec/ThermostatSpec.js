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
    thermostat.down(5);
    expect(thermostat.temp).toEqual(15);
  });

  it("temperature can increase and decrease", function() {
    thermostat.up(10);
    thermostat.down(5);
    expect(thermostat.temp).toEqual(25);
  });

  describe("Minimum temperature", function() {
    it("has a minimum temperature of 10", function() {
      expect(thermostat.minTemp).toEqual(10);
    });

    it("raises an error when the temperature is lower than the minTemp", function() {
      expect(function() {
        thermostat.down(11);
      }).toThrowError("Min Temp is reached");
    });
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

    it("is on by deafult", function() {
      expect(thermostat.maxTemp).toEqual(25);
    });
  });

  describe("Reset temperature", function() {
    it("You can reset temp to 20 with reset function", function() {
      thermostat.reset();
      expect(thermostat.temp).toEqual(20);
    });

    it("You can increase temp and reset temp to 20", function() {
      thermostat.up(10);
      thermostat.reset();
      expect(thermostat.temp).toEqual(20);
    });
  });

  describe("Current energy usage", function() {
    it("returns 'medium-usage' when temp is < 25", function() {
      expect(thermostat.currentEnergyUsage()).toEqual("medium-usage");
    });

    it("returns 'low-usage' when temp is < 18", function() {
      thermostat.down(5);
      expect(thermostat.currentEnergyUsage()).toEqual("low-usage");
    });

    it("returns 'high-usage' when temp is > 25", function() {
      thermostat.up(10);
      expect(thermostat.currentEnergyUsage()).toEqual("high-usage");
    });
  });
});
