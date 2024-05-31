var cars = 'subaru';
// test 1: Equality comparison (true)
console.log("Is car == 'subaru'? I peridect true.");
console.log(cars == 'subaru'); // true
// test 2: Strict equality comparison (true)
console.log("Is car === 'subaru'? I peridect true.");
console.log(cars === 'subaru'); // true
// test 3: Inequality comparison (false)
console.log("Is car != 'subaru'? I peridect false.");
console.log(cars != 'subaru'); // false
// test 4: Strict inequality comparison (false)
console.log("Is car !== 'subaru'? I peridect false.");
console.log(cars !== 'subaru'); // false
// test 5: less than comparison (false)
console.log("Is car < 'subaru'? I peridect false.");
console.log(cars < 'subaru'); // false lexicographic comparison
// test 6: Greaten than comparison (false)
console.log("Is car > 'subaru'? I peridect false.");
console.log(cars > 'subaru'); // false lexicographic comparison
// test 7: less than or equal comparison (true)
console.log("Is car <= 'subaru'? I peridect true.");
console.log(cars <= 'subaru'); // true
// test 8: Greaten than or equal comparison (true)
console.log("Is car >= 'subaru'? I peridect true.");
console.log(cars >= 'subaru'); // true
// test 9: Checking truthiness (true)
console.log("Is car? 'subaru'? I peridect true.");
console.log(cars); // true (non-empty string is truthy)
// test 10: Checking falsiness (fasle)
console.log("Is car? 'subaru'? I peridect false.");
console.log(cars); // false (negation of a truthy value)
