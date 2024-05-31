let current_users: string[] = ["saba","misbah","ujala","talha","admin"];
let new_users: string[] = ["husna","kashmala","mahnoor","musfera","admin"];

new_users.forEach((new_Users) => {
    if(
        current_users.some(
            (currentUser) => currentUser.toLowerCase() === new_Users.toLowerCase()
        )

    ){
        console.log(`${new_Users} well need to enter a new username`);
    } else {

        console.log(`${new_Users} is available`);
    }
});
