// SKILLS DISPLAY (EASIER MANAGEMENT WITH JS, and prevents code copying/pasting
var skills = 
[
    {
        name: "HTML5",
        image: 'html.jpg',
        // level: 5,
    },
    {
        name: "CSS",
        image: 'css.png',
        // level: 5,
    },
    {
        name: "JS",
        image: 'js.jpg',
        // level: 5,
    },
    {
        name: "PHP",
        image: 'php7.png',
        // level: 5,
    },
    {
        name: "MYSQL",
        image: 'mysql.png',
        // level: 5,
    },
    {
        name: "Symfony",
        image: 'symfony.png',
        // level: 5,
    },
    {
        name: "Git",
        image: 'git.png',
        // level: 5,
    },
]

skills.forEach(s => {
    // CREATION OF SKILL CONTAINER HTML ELEMENT
    var skillContainer = document.createElement('tr');
    skillContainer.classList.add('text-center', 'flex-column');
    // var name = document.createElement('td');
    // name.innerText = s.name;
    var tdImage = document.createElement('td');
    var image = document.createElement('img');
    image.src = 'img/'+s.image;
    image.classList.add('responsive-img');
    tdImage.appendChild(image);
    // var level = document.createElement('td');
    // level.classList.add('b-0', 'level', 'l-'+s.level);
    // skillContainer.appendChild(name);
    skillContainer.appendChild(tdImage);
    // skillContainer.appendChild(level);

    // APPENDING THAT ELEMENT ON THE TABLE
    document.getElementById('tools-body').appendChild(skillContainer);
});