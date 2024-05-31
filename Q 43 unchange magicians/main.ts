let magicians: string[] = ["Alice","David","Chris"];

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
     magicians.forEach(magician => {
          great_magicians.push(`${magician}the great`);    
     });
     return great_magicians;
}
let great_magicians = make_great(magicians.slice());
console.log("original magicians", magicians);
console.log("Great magicians", great_magicians);
