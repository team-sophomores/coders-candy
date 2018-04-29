let users = []

$.get('/api/problems', (object) => {
    obj = {
        problems: object.data,
    }
        
    createHTML(obj);
})

function createHTML(problems) {
    var rawTemplate = document.getElementById("problem_template").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var GeneratedHTML = compiledTemplate(problems);

    var container = document.getElementById("problem_container");
    container.innerHTML = GeneratedHTML;
}