"use strict";

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  it("temperature can increase with up function", function() {
    thermostat.up();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });

  describe("#down", function() {
    it("temperature can decrease with down function", function() {
      thermostat.down();
      expect(thermostat.getCurrentTemp()).toEqual(19);
    });

    it("temperature can decrease multiple degrees with down function", function() {
      for (var i = 0; i < 5; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemp()).toEqual(15);
    });
  });

  describe("Maximum temperature", function() {
    it("raises an error when the temperature is higher than 25", function() {
      thermostat.powerSavingMode("On");
      expect(function() {
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        };
      }).toThrowError("Over Max Temp");
    });

    it("raises an error when the temperature is higher than 32", function() {
      thermostat.powerSavingMode("Off");
      expect(function() {
        for (var i = 0; i < 13; i++) {
          thermostat.up();
        };
      }).toThrowError("Over Max Temp");
    });
  });

  describe("Minimum temperature", function() {
    it("has a minimum temperature of 10", function() {
      expect(thermostat.minTemp).toEqual(10);
    });

    it("raises an error when the temperature is lower than the minTemp", function() {
      expect(function() {
        for (var i = 0; i < 11; i++) {
          thermostat.down();
        };
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
      expect(thermostat.getCurrentTemp()).toEqual(20);
    });

    it("You can increase temp and reset temp to 20", function() {
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      };
      thermostat.reset();
      expect(thermostat.getCurrentTemp()).toEqual(20);
    });
  });

  describe("Current energy usage", function() {
    it("returns 'medium-usage' when temp is < 25", function() {
      expect(thermostat.currentEnergyUsage()).toEqual("medium-usage");
    });

    it("returns 'low-usage' when temp is < 18", function() {
      for (var i = 0; i < 5; i++) {
        thermostat.down();
      };
      expect(thermostat.currentEnergyUsage()).toEqual("low-usage");
    });

    it("returns 'high-usage' when temp is > 25", function() {
      thermostat.powerSavingMode("Off");
      for (var i = 0; i < 10; i++) {
        thermostat.up();
      };
      expect(thermostat.currentEnergyUsage()).toEqual("high-usage");
    });
  });
});
