$(document).ready(function() {
  var thermostat = new Thermostat();
  $("#current-temp-display").text(thermostat.temp);
  $("#temp-up").on("click", function() {
    thermostat.up();
    $("#current-temp").text(thermostat.temp);
  });
});
