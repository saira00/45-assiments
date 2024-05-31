let guest_list = ['ali', 'farhan', 'raza', 'ayesha'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respeted Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow. \nThank you\n')
// }
let not_present = 'farhan';
let new_guest = 'Babar Azam';
guest_list[1] = new_guest;
// for (var i = 0; i < guest_list.length; i++) {
//     console.log('Respeted Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow. \nThank you\n');
// }
guest_list.unshift('shaheen', 'sarfaraz', 'rizwan');
// for (var i = 0; i < guest_list.length; i++) {
//     console.log('Respeted Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow. we found big table so we decide to invite 3 more guest\nThank you\n');
// }
console.log('\nunfortunataly we can not arrange big table , only two people allow.')
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`sorry sir/madam.${remove_guest} yor are not invited for dinner,`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respeted Sir/Madam ' + guest_list[i] + ',\nyes yor are still invite on tomorow dinner\nThank you\n');
}
guest_list.splice(0,2)
console.log(guest_list)