import dom from './dom.js';
import projects from './projects.js'
import carousel from './carousel.js';

const lines = ["Front End", "Back End", "Full Stack"];

// Header, Typing Effect
document.body.onload = async function () {
  carousel(lines, "#carousel");
};
// Append Projects
dom.appendProjects(projects)
// Navigation
dom.nav.addEventListener("click", (event) => {
  if (event.target.classList.contains('links')) {
    event.preventDefault();
    dom.getRoute(event.target.getAttribute("href"))
  }
})
