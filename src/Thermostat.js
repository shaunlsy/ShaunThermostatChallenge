function Thermostat() {
  this.temp = 20
}

Thermostat.prototype.up = function(degrees) {
  this.temp += degrees
};

Thermostat.prototype.down = function(degrees) {
  this.temp -= degrees
};