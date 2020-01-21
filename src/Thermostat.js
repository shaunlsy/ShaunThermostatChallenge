const MINTEMP = 10;

function Thermostat() {
  this.temp = 20;
  this.minTemp = MINTEMP;
  this.maxTemp;
  this.powerSavingMode("On");
}

Thermostat.prototype.up = function(degrees) {
  this.temp += degrees;
};

Thermostat.prototype.down = function(degrees) {
  if (this.temp - degrees < this.minTemp) {
    throw new Error("Min Temp is reached");
  } else {
    this.temp -= degrees;
  }
};

Thermostat.prototype.powerSavingMode = function(status = "On") {
  if (status === "On") {
    this._setMaxTemp(25);
  } else if (status === "Off") {
    this._setMaxTemp(32);
  }
  return status;
};

Thermostat.prototype.reset = function() {
  this.temp = 20;
};

Thermostat.prototype.currentEnergyUsage = function() {
  if (this.temp < 18) {
    return "low-usage";
  } else if (this.temp < 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
};

Thermostat.prototype._setMaxTemp = function(degrees) {
  this.maxTemp = degrees;
};
