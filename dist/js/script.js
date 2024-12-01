const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});




// Featured Projects Buttons Interactivity
const projectButtons = document.querySelectorAll('.project-buttons button');
const projectImage = document.querySelector('.project-display img');
const projectInfo = document.querySelector('.project-info h3');
const projectLocation = document.querySelector('.project-info p');

const projects = [
    {
        name: 'Dior Shopping Store',
        location: 'Paris, France',
        image: 'Image/ft1.jpeg'
    },
    {
        name: 'Maria Guest House',
        location: 'London, UK',
        image: 'Image/House.jpeg'
    },
    {
        name: 'YD Mall',
        location: 'Macau, China',
        image: 'Image/Mall.jpeg'
    }
];

projectButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Update active button
        projectButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Update project details
        projectImage.src = projects[index].image;
        projectInfo.textContent = projects[index].name;
        projectLocation.textContent = projects[index].location;
    });
});


document.querySelectorAll(".news-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });
});





