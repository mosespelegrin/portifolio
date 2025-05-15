// Add an event listener to handle form submission
document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Function to sanitize user input
    const sanitizeInput = (input) => {
        return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
    };

    // Get form fields
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const ageField = document.getElementById('age');
    const genderField = document.getElementById('gender');
    const feedbackField = document.getElementById('feedback');

    // Sanitize inputs
    const name = sanitizeInput(nameField.value);
    const email = sanitizeInput(emailField.value);
    const age = sanitizeInput(ageField.value);
    const gender = sanitizeInput(genderField.value);
    const feedback = sanitizeInput(feedbackField.value);

    // Validation
    let isValid = true;
    let errorMessage = '';

    if (!name) {
        isValid = false;
        errorMessage += 'Name is required.\n';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        isValid = false;
        errorMessage += 'A valid email is required.\n';
    }

    if (!age || isNaN(age) || age <= 0) {
        isValid = false;
        errorMessage += 'A valid age is required.\n';
    }

    if (!gender) {
        isValid = false;
        errorMessage += 'Gender selection is required.\n';
    }

    if (!feedback) {
        isValid = false;
        errorMessage += 'Feedback is required.\n';
    }

    // Show error messages or success message
    if (!isValid) {
        alert(errorMessage);
    } else {
        alert('Thank you for your feedback!');
        // Optionally, you can submit the form data to a server here
        // Example: send data via an API or save it locally
        // this.submit(); // Uncomment to allow form submission
    }
});