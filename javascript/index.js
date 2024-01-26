import { projects, projectSkills } from './projects.js'
import MySkills from './MySkills.js'
import Router from './Router.js';

function main() {

  /// APPEND (SKILL + OCCURENCE) LIST TO #mySkills \\\
  MySkills.set(projectSkills);
  MySkills.append();

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

  document.querySelectorAll(".links").forEach(element =>
    element.addEventListener('click', (event) => {
      event.preventDefault();

      const href = event.target.getAttribute("href");

      Object.entries(Router).forEach(route => {
        if (route[0] === href) {
          route[1].link.classList.add("active");
          route[1].tag.hidden = false;
        }
        else {
          route[1].link.classList.remove("active");
          route[1].tag.hidden = true;
        }
      });
    })
  )
}

main();
