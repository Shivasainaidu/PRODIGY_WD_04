document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'House Rental Management System',
            description: 'A MEAN stack application for managing house rentals.',
            link: '#'
        },
        {
            title: 'Plant Disease Identification',
            description: 'An AI and ML project for identifying plant diseases.',
            link: '#'
        }
    ];

    const projectList = document.querySelector('.project-list');

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.textContent = 'View Project';

        projectElement.appendChild(projectTitle);
        projectElement.appendChild(projectDescription);
        projectElement.appendChild(projectLink);

        projectList.appendChild(projectElement);
    });

    document.getElementById('contact-form').addEventListener('submit', event => {
        event.preventDefault();
        alert('Message sent! Thank you for contacting me.');
    });
});
