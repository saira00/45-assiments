function describe_city(nameOfCity, country) {
    if (country === void 0) { country = "pakistan"; }
    return "".concat(nameOfCity, " is in ").concat(country);
}
;
var city1 = describe_city("south africa,cape town");
var city2 = describe_city("India,delhi");
var city3 = describe_city("Pakistan, Hyderbad");
var city4 = describe_city("Dubai, UAE");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
