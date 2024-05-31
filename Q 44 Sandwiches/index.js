"use strict";
function make_sandwich(...items) {
    console.log(`Make a sandwich with:${items.join(',')}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato", "ketchup");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
