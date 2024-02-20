const dom = {
	nav: document.querySelector("nav"),
	articleProjects: document.querySelector(".projects"),
	//NAV LINKS
	routes: {
		about: {
			link: document.querySelector('[href="about"]'),
			tag: document.querySelector('my-about'),
		},
		projects: {
			link: document.querySelector('[href="projects"]'),
			tag: document.querySelector('my-projects'),
		},
		contacts: {
			link: document.querySelector('[href="contacts"]'),
			tag: document.querySelector('my-contacts'),

		},
	},
	//METHODS
	appendProjects(projects) {
		for (const project of projects) {
			const section = document.createElement('section'); this.articleProjects.appendChild(section);
			const image = document.createElement('img'); image.src = project.image.src; image.alt = project.title + " Screenshot"; image.width = "364px"; image.height = "205px"; section.appendChild(image);
			const skills = document.createElement('p'); skills.className = "projectSkills"; project.skills.forEach(skill => skills.innerHTML += `<span class="${skill}">` + skill + "</span> "); section.appendChild(skills);
			const title = document.createElement('p'); title.textContent = project.title + ": "; title.classList.add('projectsTitle'); section.appendChild(title);
			const text = document.createElement('span'); text.textContent = project.text; title.appendChild(text);
			const buttons = document.createElement('div'); buttons.className = 'buttons'; section.appendChild(buttons);
			const livePreview = document.createElement('button'); livePreview.innerHTML = `<a href=${project.livePreview.href}>Live preview</a>`; buttons.appendChild(livePreview);
			const sourceCode = document.createElement('button'); sourceCode.innerHTML = `<a href=${project.sourceCode.href}>Source code</a>`; buttons.appendChild(sourceCode);
		}
	},
	getRoute(href) {
		Object.entries(this.routes).forEach(route => {
			if (route[0] === href) {
				route[1].link.classList.add("active");
				route[1].tag.hidden = false;
			}
			else {
				route[1].link.classList.remove("active");
				route[1].tag.hidden = true;
			}
		})
	}
}

export default dom;