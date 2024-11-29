function myFunction() {
    // Select all input and textarea elements within the form
    const inputs = document.querySelectorAll("#inp1 .text");
    let allValid = true; // To track if all inputs are valid

    // Loop through each input/textarea
    inputs.forEach((input) => {
        const errorSpan = input.nextElementSibling; // Get the corresponding <span> element

        // Reset styles and messages
        input.style.border = "";
        if (errorSpan) {
            errorSpan.textContent = "";
        }

        // Validate: Check if the input value is empty
        if (!input.value.trim()) {
            input.style.border = "2px solid red"; // Add red border
            if (errorSpan) {
                errorSpan.textContent = "This field is required."; // Display error message
                errorSpan.style.color = "red";
            }
            allValid = false; // Mark form as invalid
        }
    });

    if (allValid) {
        alert("Form submitted successfully!");
    } else {
        alert("Please fill in all required fields.");
    }
}