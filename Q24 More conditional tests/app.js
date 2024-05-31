var car = 'subaru';
var age = 25;
var numbers = [1, 2, 3, 4];
// // ***String Test***
// Test 1: Equality (True)
console.log("Is car == 'subaru'? I peridect True.");
console.log(car == 'subaru'); // True (case insensitive)
// Test 2: strict Equality (False)
console.log("Is car === 'subaru'? I peridect False.");
console.log(car === 'subaru'); // False (case insensitive)
//  ***Inequality***
// Test 3: Inequality (True)
console.log("Is car != 'Toyota'? I peridect True.");
console.log(car != 'Toyota'); // True
// Test 4: Inequality (False)
console.log("Is car !== 'Toyota'? I peridect False.");
console.log(car !== 'Toyota'); // False
// ***Lower case Function Tests***
// Test 5: // Lowercase conversion (True)
console.log("Is car.toLowerCase() == 'subaru'? I peridect True.");
console.log(car.toLowerCase() == 'subaru'); // True (converted to lowercase)
// Test 6: // Lowercase conversion (False)
console.log("Is car === car.toLowerCase()? == 'subaru'? I peridect False.");
console.log(car === car.toLowerCase()); // False (original value remains uppercase)
// ***Numerical Tests***
// Test 7: Equality (True)
console.log("Is age == 25? I predict True.");
console.log(age == 25); // True
// Test 8: Inequality (False)
console.log("Is age != 30? I predict False.");
console.log(age != 30); // False
// Test 9: Greater than (False)
console.log("Is age > 30? I predict False.");
console.log(age > 30); // False
// Test 10: less than or equal (True)
console.log("Is age <= 25? I predict True.");
console.log(age <= 25); // True
//  ***Logical operators***
// Test 11: AND (True)
console.log("is age > 20 && age < 30? I predict true.");
console.log("age > 20 && age < 30?"); // True (both condition met)
// Test 12: OR (False)
console.log("is age > 30 || age < 18? I predict False.");
console.log(age > 30 || age > 18); // False (neither condition met)
//   ***Array Tests***
// Test 13: In Array (True)
console.log("is 3 in number? I predict True.");
console.log(3 in numbers); // True (check for index existence)
// Test 14: Not in Array (False)
console.log("is 5 not in numbers? I predict False.");
console.log(!(5 in numbers)); // False (negation of "in" oprerator)
