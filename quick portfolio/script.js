// Project data
const projects = [
    {
        title: "Project Alpha",
        description: "An experimental design system with dynamic theming",
        tags: ["React", "TypeScript", "Tailwind"]
    },
    {
        title: "Project Beta",
        description: "Real-time data visualization dashboard",
        tags: ["React", "D3.js", "WebSocket"]
    },
    {
        title: "Project Gamma",
        description: "AI-powered content recommendation engine",
        tags: ["Python", "TensorFlow", "FastAPI"]
    }
];

// Function to create project cards
function createProjectCards() {
    const projectGrid = document.getElementById('projectGrid');
    
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Add delay to stagger animation
        setTimeout(() => card.classList.add('visible'), index * 200);
        
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        
        projectGrid.appendChild(card);
    });
}

// Smooth scroll functionality
document.querySelector('.scroll-down').addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add( 'visible');
        }
    });
}, {
    threshold: 0.1
});

// Initialize project cards
document.addEventListener('DOMContentLoaded', () => {
    createProjectCards();
    
    // Observe all project cards for scroll animations
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
});