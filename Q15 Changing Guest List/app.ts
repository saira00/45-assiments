let guest_list : string [] = ['ali','farhan','raza','ayesha'];
for(let i=0; i<guest_list.length; i++){
    console.log('Respeted Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow. \nThank you\n')
}
let not_present : string = 'farhan';
let new_guest : string = 'Babar Azam'; 
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respeted Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow. \nThank you\n')
}
console.log(`Mr. ${not_present} will not coming tomorrow dinner.`)