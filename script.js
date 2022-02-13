function getVal() {
    window.valueIs = parseInt(document.getElementsByTagName("input")[0].value);
}

function convertFrom() {
    window.optionSelectorFrom = document.getElementById("temperature").value;
}

function convertTo() {
    window.optionSelectorTo = document.getElementById("temperatureUnit").value;
}

document.getElementById('displayValue').readOnly = true;

let convertButton = document.getElementsByTagName("input")[1]
convertButton.addEventListener('click', () => {
    switch (optionSelectorFrom + "|" + optionSelectorTo) {
        case `1|1`:
            document.getElementsByName("display")[0].value = `${valueIs} °C`;
            break;
        case `1|2`:
            let fahrenheit = (valueIs * 1.8) + 32;
            document.getElementsByName("display")[0].value = `${fahrenheit} °F`;
            break;
        case `1|3`:
            let kelvin = 273.15 + valueIs;
            document.getElementsByName("display")[0].value = `${kelvin} K`;
            break;
        case `2|1`:
            let celsius = (valueIs - 32) * (5 / 9);
            document.getElementsByName("display")[0].value = `${celsius} °C`;
            break;
        case `2|2`:
            document.getElementsByName("display")[0].value = `${valueIs} °F`;
            break;
        case `2|3`:
            let kelvin1 = (valueIs + 459.67) * 5 / 9;
            document.getElementsByName("display")[0].value = `${kelvin1} K`;
            break;
        case `3|1`:
            let celsius1 = valueIs - 273.15;
            document.getElementsByName("display")[0].value = `${celsius1} °C`;
            break;
        case `3|2`:
            let fahrenheit1 = (valueIs * 9 / 5) - 459.67;
            document.getElementsByName("display")[0].value = `${fahrenheit1} °F`;
            break;
        case `3|3`:
            document.getElementsByName("display")[0].value = `${valueIs} K`;
            break;
    }
});