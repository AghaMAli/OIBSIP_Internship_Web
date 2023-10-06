function convert() {
    var inputTemperature = document.getElementById("input");
    var outputResult = document.getElementById("output");
    var unitDropdown = document.getElementById("unit");  
    
    var selectedUnitIndex = unitDropdown.options[unitDropdown.selectedIndex].value;
    var selectedUnitText = unitDropdown.options[unitDropdown.selectedIndex].text;
  
    if (inputTemperature.value !== "") {
      if (selectedUnitIndex == 0) {
        alert("Please select a temperature unit");
      } else {
        var temperatureValue = parseFloat(inputTemperature.value);
  
        if (selectedUnitText === "Fahrenheit") {
          var celsiusTemperature = ((temperatureValue - 32) * 5) / 9;
          var kelvinTemperature = celsiusTemperature + 273.15;
  
          outputResult.value = celsiusTemperature.toFixed(2) + "°C | " +
                               kelvinTemperature.toFixed(2) + "K";
        }
  
        if (selectedUnitText === "Celsius") {
          var fahrenheitTemperature = (temperatureValue * 9) / 5 + 32;
          var kelvinTemperature = temperatureValue + 273.15;
  
          outputResult.value = fahrenheitTemperature.toFixed(2) + "°F | " +
                               kelvinTemperature.toFixed(2) + "K";
        }
  
        if (selectedUnitText === "Kelvin") {
          var celsiusTemperature = temperatureValue - 273.15;
          var fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  
          outputResult.value = celsiusTemperature.toFixed(2) + "°C | " +
                               fahrenheitTemperature.toFixed(2) + "°F";
        }
      }
    } else {
      alert("Please enter a temperature to convert");
    }
  }
  