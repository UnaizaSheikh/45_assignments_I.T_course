// function that describe name of its city and its country
function describe_city(cityName, countryName) {
    if (countryName === void 0) { countryName = "Pakistan"; }
    console.log("".concat(cityName, " is in ").concat(countryName));
}
describe_city("Karachi");
describe_city("Agra,Inadia");
describe_city("Tehran,Iran");
describe_city("Hayderabad");
