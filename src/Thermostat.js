const MINTEMP = 10;

function Thermostat() {
  this.temp = 20;
  this.minTemp = MINTEMP;
  this.maxTemp;
}

Thermostat.prototype.up = function(degrees) {
  this.temp += degrees;
};

Thermostat.prototype.down = function(degrees) {
  this.temp -= degrees;
};

Thermostat.prototype.powerSavingMode = function(status) {
  if (status === "On") {
    return this._setMaxTemp(25);
  } else if (status === "Off") {
    return this._setMaxTemp(32);
  }
};

Thermostat.prototype._setMaxTemp = function(degrees) {
  this.maxTemp = degrees;
};
