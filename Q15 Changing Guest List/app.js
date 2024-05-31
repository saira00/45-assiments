var guest_list = ['ali', 'farhan', 'raza', 'ayesha'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respeted Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow. \nThank you\n');
}
var not_present = 'farhan';
var new_guest = 'Babar Azam';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respeted Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow. \nThank you\n');
}
console.log("Mr. ".concat(not_present, " will not coming tomorrow dinner."));
