const projects = {
	root: document.querySelector(".projects"),

	append(projects) {
		projects.forEach(project => {
			const section = document.createElement('section'); this.root.appendChild(section);
			const image = document.createElement('img'); image.src = project.image.src; image.alt = project.image.alt; image.width = "364px"; image.height = "205px"; section.appendChild(image);
			const skills = document.createElement('p'); skills.className = "projectSkills"; project.skills.forEach(skill => skills.innerHTML += `<span class="${skill}">` + skill + "</span> "); section.appendChild(skills);
			const title = document.createElement('p'); title.textContent = project.title + ": "; title.classList.add('projectsTitle'); section.appendChild(title);
			const text = document.createElement('span'); text.textContent = project.text; title.appendChild(text);
			const buttons = document.createElement('div'); buttons.className = 'buttons'; section.appendChild(buttons);
			const livePreview = document.createElement('button'); livePreview.innerHTML = `<a href=${project.livePreview.href}>Live preview</a>`; buttons.appendChild(livePreview);
			const sourceCode = document.createElement('button'); sourceCode.innerHTML = `<a href=${project.sourceCode.href}>Source code</a>`; buttons.appendChild(sourceCode);
		})
	}
}

export default projects;