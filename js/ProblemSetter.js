let users = []

$.get('/users', (object) => {
    users = object.data;
    done();
})

console.log("The users are: " + users);