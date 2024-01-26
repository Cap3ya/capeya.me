import { projects, projectSkills } from './projects.js'
import skills from './Skills.js'

function main() {

    /// APPEND SKILLS LIST & NUM OF OCCURENCES TO DOC.MY_SKILLS \\\
    projectSkills.forEach(skill => skills.set(skill));

    const root = document.getElementById('mySkills')
    for (let skill of skills.get()) {
        const p = document.createElement('p')
        p.classList = "skill"
        p.innerHTML = skill[0] + " <span>" + skill[1] + "</span>"
        root.append(p)
    }

    /// RENDER PROJECTS TO DOC.MY_PROJECTS \\\
    (function Projects() {
        const root = document.querySelector(".projects")

        projects.forEach(project => {
            const section = document.createElement('section'); root.appendChild(section);
            const header = document.createElement('h3'); header.textContent = project.title; section.appendChild(header);
            const image = document.createElement('img'); image.src = project.image.src; image.alt = project.image.alt; image.width = project.image.width; image.height = project.image.height; section.appendChild(image);
            const skills = document.createElement('p'); skills.className = "projectSkills"; project.skills.forEach(skill => skills.innerHTML += `<span class="${skill}">` + skill + "</span> "); section.appendChild(skills);
            const text = document.createElement('p'); text.textContent = project.text; section.appendChild(text);
            const livePreview = document.createElement('button'); livePreview.innerHTML = `<a href=${project.livePreview.href}>Live preview</a>`; section.appendChild(livePreview);
            const sourceCode = document.createElement('button'); sourceCode.innerHTML = `<a href=${project.sourceCode.href}>Source code</a>`; section.appendChild(sourceCode);

        });
    })();

}

main(); 
