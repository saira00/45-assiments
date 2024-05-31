let magicians: string[] = ["Don","Rmeez","saira","chris"];

function make_great(magicians: string[]) {
      for (let i = 0; i < magicians.length; i ++) {
           magicians[i] = magicians[i] + "the Great";
     }
}
make_great(magicians);  //modifies the original array
// show_magicians(magicians);  //showmodified names