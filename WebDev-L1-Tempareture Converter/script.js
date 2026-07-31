const temperatureInput = document.getElementById("temperature");

const inputUnit = document.getElementById("inputUnit");

const convertBtn = document.getElementById("convertBtn");

const clearBtn = document.getElementById("clearBtn");

const errorMessage = document.getElementById("errorMessage");

const celsiusResult = document.getElementById("celsiusResult");

const fahrenheitResult = document.getElementById("fahrenheitResult");

const kelvinResult = document.getElementById("kelvinResult");

convertBtn.addEventListener("click", function () {

    
    const temperature = parseFloat(temperatureInput.value);

    
    const unit = inputUnit.value;


    if (
        temperatureInput.value.trim() === "" ||
        isNaN(temperature)
    ) {

        errorMessage.textContent =
            "Please enter a valid numeric temperature.";

        clearResults();

        return;
    }


    
    let celsius;


    if (unit === "celsius") {

        celsius = temperature;

    } else if (unit === "fahrenheit") {

        celsius = (temperature - 32) * 5 / 9;

    } else if (unit === "kelvin") {

        celsius = temperature - 273.15;
    }


    if (celsius < -273.15) {

        errorMessage.textContent =
            "Temperature cannot be below absolute zero (-273.15°C).";

        clearResults();

        return;
    }


    
    errorMessage.textContent = "";

    const fahrenheit = (celsius * 9 / 5) + 32;


    
    const kelvin = celsius + 273.15;


    celsiusResult.textContent =
        `${celsius.toFixed(2)} °C`;

    fahrenheitResult.textContent =
        `${fahrenheit.toFixed(2)} °F`;

    kelvinResult.textContent =
        `${kelvin.toFixed(2)} K`;

});



clearBtn.addEventListener("click", function () {

    
    temperatureInput.value = "";

    
    inputUnit.value = "celsius";

    
    errorMessage.textContent = "";


    clearResults();

});

function clearResults() {

    celsiusResult.textContent = "-- °C";

    fahrenheitResult.textContent = "-- °F";

    kelvinResult.textContent = "-- K";
}