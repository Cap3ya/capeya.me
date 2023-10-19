/// MY_PROJECTS DATABASE \\\
const projects = [
    {
        title: "Rock Paper Scissors",
        image: {
            src: "./images/rockPaperScissors.png", 
            alt: "Screenshot", 
            height: "205",
            width: "364",
        },
        skills: ["HTML", "CSS", "JavaScript"],
        text: "Play a gainst a well behaved bot and try, in five rounds, to win the game!",
        button: {
            href: "https://Cap3ya.github.io/RockPaperScissors/rockPaperScissors.html",
            text: "Beat him"
        },
    },
    {
        title: "Calculator",
        image: {
            src: "./images/calculator.png", 
            alt: "Screenshot", 
            height: "205",
            width: "364",
        },
        skills: ["HTML", "CSS", "JavaScript"],
        text: "A calculator that allows to perform the four basic arithmetic operations.",
        button: {
            href: "https://Cap3ya.github.io/Calculator/calculator.html",
            text: "Sum up"
        },
    },
    {
        title: "Sign up Page",
        image: {
            src: "./images/signupPage.png", 
            alt: "Screenshot", 
            height: "205",
            width: "364",
        },
        skills: ["HTML", "CSS", "JavaScript"],
        text: "A sign up page that uses forms, inputs and sanitization to signup.",
        button: {
            href: "https://Cap3ya.github.io/SignupPage/signUpPage.html",
            text: "Sign up"
        },
    },
    {
        title: "Library",
        image: {
            src: "./images/library.png", 
            alt: "Screenshot", 
            height: "205",
            width: "364",
        },
        skills: ["HTML", "CSS", "JavaScript"],
        text: "Use localStorage and JSON to add, remove and edit books from your library.",
        button: {
            href: "https://Cap3ya.github.io/Library/library.html",
            text: "Store them"
        },
    },
];
/// RENDER SKILLS LIST & NUM OF OCCURENCES TO DOC.MY_SKILLS \\\
(function Skills() {

// Get skills from projects & Concatenate them
const skills = new Array
projects.forEach(project => project.skills.forEach(skill => skills.push(skill)));

const skillObj = new Object;
for (let skill of skills) {
        !skillObj[skill] ?
            skillObj[skill] = 1 :
            skillObj[skill] += 1
} 
console.log(skillObj)
// Append skill + # of occurences to #mySkills
const root = document.getElementById('mySkills')
for (let skill in skillObj) {
    const p = document.createElement('p')
    p.classList = "skill"
    p.innerHTML = skill + " <span>" + skillObj[skill] + "</span>"
    root.append(p)
}
})();
/// RENDER PROJECTS TO DOC.MY_PROJECTS \\\
(function Projects() {
const root = document.querySelector(".projects")

projects.forEach(project => {
    const section = document.createElement('section'); root.appendChild(section);
    const header = document.createElement('h3'); header.textContent = project.title; section.appendChild(header);
    const image = document.createElement('img'); image.src = project.image.src; image.alt = project.image.alt; image.width = project.image.width; image.height = project.image.height; section.appendChild(image);
    const skills = document.createElement('p'); project.skills.forEach(skill => skills.innerHTML += `<span class="${skill}">` + skill + "</span> "); section.appendChild(skills);
    const text = document.createElement('p'); text.textContent = project.text; section.appendChild(text);
    const button = document.createElement('button'); button.innerHTML = `<a href=${project.button.href}>` + project.button.text + "</a>"; section.appendChild(button);
});
})();