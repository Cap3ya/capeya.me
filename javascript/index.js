import { projects, projectSkills } from './data.js'
import MySkills from './MySkills.js'
import Projects from './Projects.js';
import Router from './Router.js';

function main() {

  /// APPEND (SKILL + OCCURENCE) LIST TO #mySkills \\\
  MySkills.set(projectSkills);
  MySkills.append();

  /// RENDER PROJECTS TO DOC.MY_PROJECTS \\\
  Projects.append(projects)

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
