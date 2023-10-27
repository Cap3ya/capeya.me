import { projects } from './assets/projects.js'
/// RENDER SKILLS LIST & NUM OF OCCURENCES TO DOC.MY_SKILLS \\\
(function Skills() {
    // Get skills from projects & Concatenate them
const skills = new Array;
projects.forEach(project => project.skills.forEach(skill => skills.push(skill)));

const skillObj = new Object;
for (let skill of skills) {
        !skillObj[skill] ?
            skillObj[skill] = 1 :
            skillObj[skill] += 1
} 
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
    const skills = document.createElement('p'); skills.className = "projectSkills"; project.skills.forEach(skill => skills.innerHTML += `<span class="${skill}">` + skill + "</span> "); section.appendChild(skills);
    const text = document.createElement('p'); text.textContent = project.text; section.appendChild(text);
    const button = document.createElement('button'); button.innerHTML = `<a href=${project.button.href}>` + project.button.text + "</a>"; section.appendChild(button);
});
})();