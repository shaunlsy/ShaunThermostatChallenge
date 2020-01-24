$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemp();

    function updateTemp() {
        $("#current-temp-display").text(thermostat.temp);
        $("#current-temp-display").attr("class", thermostat.currentEnergyUsage());
    }

    function displayWeather(city) {
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city;
        var token = "&appid=9c4f3f161177d59178b177a4f58243bc";
        var units = "&units=metric";
        $.get(url + token + units, function(data) {
            $("city-temp-display").text(data.main.temp);
        });
    }
    $("#select-city").submit(function(event) {
        event.preventDefault();
        var city = $("current-city").val();
        displayWeather(city);
        $("city").text(city);
    });

    $("#temp-up").on("click", function() {
        thermostat.up();
        updateTemp();
    });

    $("#temp-down").on("click", function() {
        thermostat.down();
        updateTemp();
    });

    $("#temp-reset").on("click", function() {
        thermostat.reset();
        updateTemp();
    });

    $('input[type="checkbox"').click(function() {
        if ($(this).is(":checked")) {
            thermostat.powerSavingMode("On");
            alert("CHeckbox is checked.");
        } else if ($(this).is(":not(:checked")) {
            thermostat.powerSavingMode("Off");
            alert("Checkbox us unchecked.");
        }
    });
});