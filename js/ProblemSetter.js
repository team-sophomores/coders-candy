let users = []

$.get('/api/users', (object) => {
    users = object.data;
    console.log(users);
    
})
console.log(users);
console.log("The users are: " + users);