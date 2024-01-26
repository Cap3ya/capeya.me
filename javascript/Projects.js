const Projects = {
	root: document.querySelector(".projects"),

	append(projects) {
		projects.forEach(project => {
			const section = document.createElement('section'); this.root.appendChild(section);
			const header = document.createElement('h3'); header.textContent = project.title; section.appendChild(header);
			const image = document.createElement('img'); image.src = project.image.src; image.alt = project.image.alt; image.width = project.image.width; image.height = project.image.height; section.appendChild(image);
			const skills = document.createElement('p'); skills.className = "projectSkills"; project.skills.forEach(skill => skills.innerHTML += `<span class="${skill}">` + skill + "</span> "); section.appendChild(skills);
			const text = document.createElement('p'); text.textContent = project.text; section.appendChild(text);
			const buttons = document.createElement('div'); buttons.className = 'buttons'; section.appendChild(buttons);
			const livePreview = document.createElement('button'); livePreview.innerHTML = `<a href=${project.livePreview.href}>Live preview</a>`; buttons.appendChild(livePreview);
			const sourceCode = document.createElement('button'); sourceCode.innerHTML = `<a href=${project.sourceCode.href}>Source code</a>`; buttons.appendChild(sourceCode);

			//Projects.root.appendChild(section)
		})
	}
}

export default Projects;