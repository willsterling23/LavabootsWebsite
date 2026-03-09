
// Services image gallery logic

const servicesData = [
    {
        title: "Indie Publishing",
        description: "We help small teams with the launch of their game on Steam, providing marketing support and QA testing.",
        image: "Images/IndiePublishing.jpg"
    },
    {
        title: "Cross-Platform Development",
        description: "Our team specializes in porting PC titles to Xbox, PlayStation, and Nintendo Switch.",
        image: "Images/CrossPlatform.jpg"
    },
    {
        title: "Multiplayer Integration",
        description: "From peer-to-peer networking to dedicated server architecture, we build robust systems for seamless online co-op.",
        image: "Images/Multiplayer.jpg"
    },
    {
        title: "Procedural Generation Systems",
        description: "We develop custom algorithms for infinite terrain, loot tables, and quest branching.",
        image: "Images/ProceduralGeneration.jpg"
    }
];

function generateServicesContent() {
    const container = document.getElementById('services-container');
    
    container.innerHTML = '';

    servicesData.forEach(
        service => {
        const card = document.createElement('div');
        card.className = 'service-card';

        card.innerHTML = 
            `<img src="${service.image}" alt="${service.title}" class="service-image">
            <div class="service-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>`;

        container.appendChild(card);
    });
}

window.addEventListener('DOMContentLoaded', generateServicesContent);


// Contact form submission validation logic

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            contactForm.innerHTML = `<h3>Thanks, ${name}!</h3><p>We'll reach out to you soon.</p>`;
            contactForm.style.textAlign = "center";
        }
    });
}


// FAQ seciton log

const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        // Toggle the 'active' display
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});


// Game card logic

const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.game-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});


// This automatically updates the year in the footer copyright section

const footerYear = document.querySelector('footer p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = `&copy; ${currentYear} Lavaboots Studios. All rights reserved.`;
}


