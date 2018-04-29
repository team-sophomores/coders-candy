let users = []

$.get('/api/users', (object) => {
    users = object.data;
    createHTML(users);
})

function createHTML(users) {
    var template = document.getElementById("problem_template").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var GeneratedHTML = compiledTemplate(users);

    var container = document.getElementById("problem_container");
    container.innerHTML = GeneratedHTML;
}