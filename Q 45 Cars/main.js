"use strict";
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("toyota", "corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("ford", "fiesta", ["color", "blue"], ["sunroof", true]));
