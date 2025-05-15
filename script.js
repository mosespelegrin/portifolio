document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    projects.forEach((project) => {
        observer.observe(project);
    });
});

// 1. Greeting function that runs on page load based on time of day
window.addEventListener('DOMContentLoaded', () => {
    const greetingMessage = document.createElement('p');
    const hours = new Date().getHours();
    const greetingText = (hours < 12) ? "Good Morning!" : (hours < 18) ? "Good Afternoon!" : "Good Evening!";
    greetingMessage.textContent = greetingText;
    greetingMessage.style.fontSize = "1.2em";
    greetingMessage.style.fontWeight = "bold";
    greetingMessage.style.color="red";
    document.body.prepend(greetingMessage); // Add the greeting at the top of the page
});

// 3. Toggle dark/light mode
window.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.createElement('button');
    toggleThemeButton.textContent = "Toggle Dark/Light Mode";
    toggleThemeButton.style.position = "absolute";
    toggleThemeButton.style.top = "10px";
    toggleThemeButton.style.right = "10px";
    toggleThemeButton.style.padding = "8px 10px";
    toggleThemeButton.style.color = "red";
    toggleThemeButton.style.cursor = "pointer";
    document.body.appendChild(toggleThemeButton);

    toggleThemeButton.addEventListener('click', () => {
        const lightThemeStylesheetId = 'light-theme-stylesheet';
        const existingLink = document.getElementById(lightThemeStylesheetId);

        if (existingLink) {
            // If light theme is active, remove it to go back to the original theme
            existingLink.remove();
            document.body.classList.remove('light-mode');
        } else {
            // If light theme is not active, add it
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'white.css';
            link.id = lightThemeStylesheetId;
            document.head.appendChild(link);
            document.body.classList.add('light-mode');
        }
    });
});

// 4. Dynamically show/hide project details
document.addEventListener('DOMContentLoaded', () => {
    const projectDetails = document.querySelectorAll('.project');
    projectDetails.forEach((project) => {
        const showDetailsButton = document.createElement('button');
        showDetailsButton.textContent = "Show/Hide Details";
        project.appendChild(showDetailsButton);

        showDetailsButton.addEventListener('click', () => {
            const details = project.querySelector('p');
            if (details.style.display === 'none') {
                details.style.display = 'block';
            } else {
                details.style.display = 'none';
            }
        });
    });
});
// Form validation using regex for email and phone number
function validateForm() {
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('num');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(emailField.value)) {
        alert("Please enter a valid email address!");
        return false;
    }
    if (!phoneRegex.test(phoneField.value)) {
        alert("Please enter a valid 10-digit phone number!");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}
