let users = []

$.get('/api/users', (object) => {
    obj = {
        users: object.data,
    }
    createHTML(obj);
})

function createHTML(users) {
    var rawTemplate = document.getElementById("problem_template").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var GeneratedHTML = compiledTemplate(users);

    var container = document.getElementById("problem_container");
    container.innerHTML = GeneratedHTML;
}