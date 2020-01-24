"use strict";

const MINTEMP = 10;

function Thermostat() {
    this.temp = 20;
    this.minTemp = MINTEMP;
    this.maxTemp;
    this.powerSavingMode("On");
}

Thermostat.prototype.getCurrentTemp = function() {
    return this.temp;
};

Thermostat.prototype.up = function() {
    if (this.isMaxTemp()) {
        throw new Error("Over Max Temp");
    }
    this.temp += 1;
};

Thermostat.prototype.down = function() {
    if (this.isMinTemp()) {
        throw new Error("Min Temp is reached");
    }
    this.temp -= 1;
};

Thermostat.prototype.isMinTemp = function() {
    return this.temp === this.minTemp;
};

Thermostat.prototype.isMaxTemp = function() {
    return this.temp === this.maxTemp;
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
    return (this.temp = 20);
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