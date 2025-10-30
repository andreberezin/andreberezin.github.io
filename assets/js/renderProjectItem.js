function renderProjectItem({
							   featured, titleEN, titleEE, githubLink, year, isTeamProject, imgSrc, renderLink,
							   descriptionProjectEN, descriptionProjectEE, descriptionMyRoleEN, descriptionMyRoleEE, stack
						   }) {

	const projectTypeEN = isTeamProject ? 'team project' : 'solo project';
	const projectTypeEE = isTeamProject ? 'tiimiprojekt' : 'sooloprojekt';

	const mainlist = featured
		? document.getElementById("featured")
		: document.getElementById('other');

	const projectItemDiv = document.createElement("div");
	projectItemDiv.className = "project-item";

	const titleRowDiv = document.createElement("div");
	titleRowDiv.className = "title-row";

	// github link
	const githubLinkA = document.createElement("a");
	githubLinkA.href = githubLink;
	githubLinkA.className = "github-link";
	githubLinkA.target = "_blank";
	githubLinkA.title = "Github repository";

	// title wrapper and title
	const titleWrapperDiv = document.createElement("div");
	titleWrapperDiv.className = "title-wrapper";
	titleWrapperDiv.setAttribute("data-type-en", `${projectTypeEN} (${year})`);
	titleWrapperDiv.setAttribute("data-type-ee", `${projectTypeEE} (${year})`);

	const titleDiv = document.createElement("div");
	titleDiv.className = "title";
	// todo this might be wrong
	titleDiv.setAttribute("data-type-en", projectTypeEN);
	titleDiv.setAttribute("data-type-ee", projectTypeEE);

	// project icon
	const projectIconImg = document.createElement("img");
	projectIconImg.src = imgSrc;
	projectIconImg.alt = titleEN;
	projectIconImg.className = "icon";
	projectIconImg.id = titleEN.toLowerCase();

	// project name
	const projectNameEE = document.createElement("p");
	projectNameEE.textContent = titleEE;
	projectNameEE.className = "project-name";
	projectNameEE.lang = "ee"
	projectNameEE.hidden = true;

	const projectNameEN = document.createElement("p");
	projectNameEN.textContent = titleEN;
	projectNameEN.className = "project-name";
	projectNameEN.lang = "en"

	// render link
	const renderLinkA = document.createElement("a");
	renderLinkA.href = renderLink;
	renderLinkA.className = "website-link";
	renderLinkA.target = "_blank";
	renderLinkA.title = "Live website";

	const renderSpanEE = document.createElement("span");
	renderSpanEE.textContent = "Katseta!";
	renderSpanEE.lang = "ee";
	renderSpanEE.hidden = true;

	const renderSpanEN = document.createElement("span");
	renderSpanEN.textContent = "Try it out!";
	renderSpanEN.lang = "en";

	// descriptions
	const descriptionRowDiv = document.createElement("div");
	descriptionRowDiv.className = "description-row";

	const descriptionGithubLinkA = document.createElement("a");
	descriptionGithubLinkA.className = 'github-link';
	descriptionGithubLinkA.href = githubLink;
	descriptionGithubLinkA.target = "_blank";
	descriptionGithubLinkA.title = "Github repository";


	const descriptionProjectElementEN = document.createElement("p");
	descriptionProjectElementEN.textContent = descriptionProjectEN;
	descriptionProjectElementEN.lang = "en";
	descriptionProjectElementEN.className = "description";

	const descriptionProjectElementEE = document.createElement("p");
	descriptionProjectElementEE.textContent = descriptionProjectEE;
	descriptionProjectElementEE.lang = "ee";
	descriptionProjectElementEE.hidden = true;
	descriptionProjectElementEE.className = "description";

	const descriptionProjectMyRoleElementEN = document.createElement("p");
	descriptionProjectMyRoleElementEN.textContent = descriptionMyRoleEN;
	descriptionProjectMyRoleElementEN.lang = "en";
	descriptionProjectMyRoleElementEN.className = "description my-role";

	const descriptionProjectMyRoleElementEE = document.createElement("p");
	descriptionProjectMyRoleElementEE.textContent = descriptionMyRoleEE;
	descriptionProjectMyRoleElementEE.lang = "ee";
	descriptionProjectMyRoleElementEE.hidden = true;
	descriptionProjectMyRoleElementEE.className = "description my-role";

	const stackElement = document.createElement("p");
	stackElement.className = "stack";
	stackElement.textContent = stack;

	// 1. Add projectItemDiv to featured list
	mainlist.appendChild(projectItemDiv);

	// 2. Build titleRow and append to project item
	projectItemDiv.appendChild(titleRowDiv);
	projectItemDiv.appendChild(descriptionRowDiv);
	descriptionRowDiv.appendChild(descriptionGithubLinkA);

	// 3. Build the GitHub link structure
	titleRowDiv.appendChild(githubLinkA);

	// 3.1 Inside GitHub link → title-wrapper
	githubLinkA.appendChild(titleWrapperDiv);

	// 3.2 Inside title-wrapper → title div
	titleWrapperDiv.appendChild(titleDiv);

	// 3.3 Inside title → icon + project names
	titleDiv.appendChild(projectIconImg);
	titleDiv.appendChild(projectNameEN);
	titleDiv.appendChild(projectNameEE);

	// 4. Add live website link (Try it out!)
	if (renderLink) {
		titleRowDiv.appendChild(renderLinkA);
		renderLinkA.appendChild(renderSpanEN);
		renderLinkA.appendChild(renderSpanEE);
	}

	// 5. Add descriptions below the title row
	descriptionGithubLinkA.appendChild(descriptionProjectElementEN);
	descriptionGithubLinkA.appendChild(descriptionProjectElementEE);

	if (descriptionProjectMyRoleElementEN) {
		descriptionGithubLinkA.appendChild(descriptionProjectMyRoleElementEN);
		descriptionGithubLinkA.appendChild(descriptionProjectMyRoleElementEE);
	}

 	// 6. Add stack element (tech stack)
	descriptionGithubLinkA.appendChild(stackElement);
}