// 18 Seeing the world: think of at least five places in the world you'd like to visit .
// store the location in a array.make sure the array is not in a alphabetical order. 
// print your array in its original ondragover. 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ['karachi', 'faslabad', 'multan', 'lahore', 'islamabad'];
console.log('original :' + places);
// print your array in a alphabetical order without modifying the actual List. 
console.log('copy ' + __spreadArray([], places, true).sort());
// show that your array is still in its original order by printing it.
console.log('original :' + places);
// print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
// Show that your array is still in it original order by printing it again.  
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
// Reverse the order of your list. Print the array to show that it order has changed.
console.log('copy ' + __spreadArray([], places, true).sort());
// Reverse the order of your list again. print the list to show its back to its original order.
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
// sort your array so its stored in alphabetical order.Print the array to show that it order has changed.
console.log('copy ' + __spreadArray([], places, true).sort());
