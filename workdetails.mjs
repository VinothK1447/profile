const details = {
	tcs: {
		firm: 'Tata Consultancy Services',
		position: 'Technical Architect',
		tenure: 'Nov 2022 - Present',
		roles: [
			'Working as a technical architect with responsibilities including designing, end-to-end solutioning of user interface, laying out basic code structure and creation of project, maintanence of code repositories, coding, handling and mentoring the team.',
			'Work closely in interacting with UX team and stakeholders to gather requirements and participate in design discussions.',
			'Create initial architecture of the project, reviewing with product and work with team in implementing the design.',
			'Work closely with team members in relaying the requirements and mentoring the team.',
			'Participate in recruitment activities like profile shortlisting and interviewing candidates.',
		],
		skills: [
			'React.js',
			'JavaScript',
			'Object Oriented JavaScript',
			'Architectural Design',
			'SCSS',
			'CSS',
			'HTML5',
			'HighCharts',
			'Redux.js',
			'W3C Standards',
			'Jest',
			'Team Leadership',
			'AJAX',
			'Node.js',
			'Webpack',
		],
	},
	yodlee: {
		firm: 'Envestnet Yodlee',
		position: 'Principal Engineer',
		tenure: 'Jun 2020 - Nov 2022',
		roles: [
			'Worked as a principal engineer with responsibilities including designing the user interface screens, coding, unit testing, debugging the software.',
			'Work closely in interacting with UX team and stakeholders to gather requirements and participate in design discussions.',
			'Create initial architecture of the project, reviewing with architects and work with team in implementing the design.',
			'Work closely with team members in relaying the requirements and mentoring junior developers.',
			'Participate in recruitment activities like profile shortlisting and interviewing candidates.',
		],
		skills: [
			'React.js',
			'JavaScript',
			'Object Oriented JavaScript',
			'Architectural Design',
			'SCSS',
			'CSS',
			'HTML5',
			'HighCharts',
			'Redux.js',
			'W3C Standards',
			'Jest',
			'Team Leadership',
			'AJAX',
			'MongoDB',
			'Node.js',
			'Webpack',
		],
	},
	adobe: {
		firm: 'Adobe Inc.',
		position: 'Senior Frontend Engineer',
		tenure: 'Oct 2011 - May 2020',
		roles: [
			'Worked as a senior front end engineer with responsibilities including designing the user interface screens, coding, unit testing, debugging the software.',
			'Worked closely with interacting with UX team and stakeholders to gather requirements and participate in design discussions.',
			'Took initiative and successfully delivered by migrating the older stack into newer stack for Adobe.com e-Commerce website.',
			'As a lead developer, worked closely with team members in relaying the requirements and mentored junior developers.',
			'Participated in recruitment activities like profile shortlisting and interviewing candidates.',
		],
		skills: [
			'React.js',
			'JavaScript',
			'Object Oriented JavaScript',
			'Architectural Design',
			'CSS',
			'HTML5',
			'Redux.js',
			'W3C Standards',
			'Jest',
			'Team Leadership',
			'AJAX',
			'MongoDB',
			'Node.js',
		],
	},
	symphony: {
		firm: 'Symphony Services',
		position: 'Technical Lead',
		tenure: 'Apr 2010 - Oct 2011',
		roles: [
			'Worked as a technical lead with responsibilities including designing the user interface screens, coding, unit testing, debugging the software.',
			'Worked closely with interacting with UX team and stakeholders to gather requirements and participate in design discussions.',
			'As a lead developer, worked closely with team members in relaying the requirements and mentored junior developers.',
			'Participated in recruitment activities like profile shortlisting and interviewing candidates.',
		],
		skills: [
			'JavaScript',
			'Object Oriented JavaScript',
			'Architectural Design',
			'CSS',
			'W3C Standards',
			'Team Leadership',
			'AJAX',
			'jQuery',
		],
	},
	sonata: {
		firm: 'Sonata Software Limited',
		position: 'Consultant',
		tenure: 'Jan 2008 - Mar 2010',
		roles: [
			'Worked as a consultant with responsibilities including designing the user interface screens, coding, unit testing, debugging the software.',
			'Worked closely with onsite teams and partnering vendors in assessing the requirements and UX designs.',
			'As a senior developer worked closely with team members in relaying the requirements and mentored junior developers.',
			'Proposed and successfully implemented unobtrusive code design, though java script is disabled the payments will happen seamlessly.',
			'Handled Thomson shops pin pad device (device taking payments from the chip and pin cards) payments and the payment server is enabled for accepting payments using this device for the shops which can be switched on or off based on the shop settings.',
		],
		skills: [
			'JavaScript',
			'Object Oriented JavaScript',
			'Architectural Design',
			'CSS',
			'W3C Standards',
			'Team Leadership',
			'AJAX',
			'jQuery',
		],
	},
	ibm: {
		firm: 'IBM India Private Limited',
		position: 'Senior Software Engineer',
		tenure: 'Sep 2006 - Dec 2007',
		roles: [
			'Worked as a senior software engineer with responsibilities including designing the user interface screens, coding, unit testing, debugging and implementation of the software.',
			'Worked closely with onsite teams and partnering vendors in assessing the requirements and UX designs.',
			'As a senior developer worked closely with team members in relaying the requirements and mentored junior developers.',
		],
		skills: ['JavaScript', 'CSS', 'W3C Standards', 'AJAX', 'jQuery'],
	},
	syntel: {
		firm: 'Syntel Limited',
		position: 'Analyst Programmer',
		tenure: 'Feb 2006 - Sep 2006',
		roles: [
			'Worked as a programmer and my responsibilities including coding, testing and supporting the clients in making use of the software.',
		],
		skills: ['Peoplesoft', 'SQL Server 2000'],
	},
	savant: {
		firm: 'Savant Technologies (P) Ltd',
		position: 'Software Engineer',
		tenure: 'Jun 2004 - Feb 2006',
		roles: [
			'Worked as a Software engineer with responsibilities including designing user interfaces, coding, testing, debugging and implementation of the software.',
		],
		skills: ['JavaScript', 'CSS', 'AJAX', 'jQuery'],
	},
};

export default function openContentModal(type) {
	var modal = new tingle.modal({
		footer: false,
		stickyFooter: false,
		closeMethods: ['overlay', 'button', 'escape'],
		closeLabel: 'X',
		onOpen: function () {
			let content = frameModalContent(type);
			this.setContent(content);
		},
	});
	modal.open();
}

const frameModalContent = (type) => {
	let modalContentContainer = document.createElement('div');
	let titleContainer = document.createElement('div');
	titleContainer.innerHTML = details[type].position;
	titleContainer.classList.add('modal-title');

	let subtitleContainer = document.createElement('div');
	subtitleContainer.innerHTML = `${details[type].firm} (${details[type].tenure})`;
	subtitleContainer.classList.add('modal-company');

	let rolesResponsibilitiesContainer = document.createElement('section');
	let rolesResponsibilitiesHeader = document.createElement('div');
	rolesResponsibilitiesHeader.innerHTML = `Roles & Responsibilites`;
	rolesResponsibilitiesHeader.classList.add(
		'modal-roles-responsibility-header'
	);
	rolesResponsibilitiesContainer.appendChild(rolesResponsibilitiesHeader);
	let rolesResponsibilitiesContent = document.createElement('ul');
	let roles = details[type].roles;
	roles.forEach((role) => {
		let childEl = document.createElement('li');
		childEl.innerHTML = `<div class='li-roles'><i class='fa-solid fa-circle-check'></i> <div>${role}</div></div>`;
		rolesResponsibilitiesContent.appendChild(childEl);
	});
	rolesResponsibilitiesContent.classList.add(
		'modal-roles-responsibility-content'
	);
	rolesResponsibilitiesContainer.appendChild(rolesResponsibilitiesContent);
	rolesResponsibilitiesContainer.classList.add('modal-roles-responsibility');

	let skillsUsedContainer = document.createElement('section');
	let skillsUsedHeader = document.createElement('div');
	skillsUsedHeader.innerHTML = `Skills Used`;
	skillsUsedHeader.classList.add('modal-skills-used-header');
	skillsUsedContainer.appendChild(skillsUsedHeader);
	let skillsUsedContent = document.createElement('ul');
	let skills = details[type].skills;
	skills.forEach((skill) => {
		let childEl = document.createElement('li');
		childEl.innerHTML = `<span> <i class='fa-regular fa-circle-dot'></i> ${skill} </span>`;
		skillsUsedContent.appendChild(childEl);
	});
	skillsUsedContent.classList.add('modal-skills-used-content');
	skillsUsedContainer.appendChild(skillsUsedContent);
	skillsUsedContainer.classList.add('modal-skills-used');

	modalContentContainer.appendChild(titleContainer);
	modalContentContainer.appendChild(subtitleContainer);
	modalContentContainer.appendChild(rolesResponsibilitiesContainer);
	modalContentContainer.appendChild(skillsUsedContainer);
	return modalContentContainer;
};
