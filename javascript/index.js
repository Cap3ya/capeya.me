import { data, dataSkills } from './data.js'
import Projects from './Projects.js';
import Router from './Router.js';
import { carousel } from './typingEffect.js';

const carouselText = [
  { text: "Front End", color: "#ff663f" },
  { text: "Back End", color: "ff663f" },
  { text: "Full Stack", color: "#ff663f" }
]

function main() {

  document.body.onload = async function () {
    carousel(carouselText, "#carousel");
  };


  /// RENDER PROJECTS TO DOC.MY_PROJECTS \\\
  Projects.append(data)

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
