let users : string [] = ["saira","hina","warisha","kashmala","mahnoor","admin"]

for(let user of users){
    if(user === "admin"){
        console.log("hello admin, would you like to see a status report?")
    }

else{
    console.log(`hello ${user},thank you for loggin again`)
}
}