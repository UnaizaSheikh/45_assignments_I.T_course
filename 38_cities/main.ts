// function that describe name of its city and its country
function describe_city(cityName : string, countryName : string = "Pakistan"){
    console.log(`${cityName} is in ${countryName}`);
}
describe_city(`Karachi`);
describe_city(`Agra,Inadia`);
describe_city(`Tehran,Iran`);
describe_city(`Hayderabad`);