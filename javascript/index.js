import data from './data.js'
import project from './projects.js';
import router from './router.js';
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
  project.append(data)

  document.querySelectorAll(".links").forEach(element =>
    element.addEventListener('click', (event) => {
      event.preventDefault();

      const href = event.target.getAttribute("href");

      Object.entries(router).forEach(route => {
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
