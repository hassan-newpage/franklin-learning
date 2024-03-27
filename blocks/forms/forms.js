// JavaScript code with tabindex added
export default async function decorate(block) {
    console.log('forms', block);

    const formContainer = document.querySelector('.forms-container .forms');

    const form = document.createElement('form');
    form.id = "myForm";

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = "Name:";
    form.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');
    form.appendChild(nameInput);

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = "Email:";
    form.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    form.appendChild(emailInput);

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    // Append form to container
    formContainer.appendChild(form);

    // Form submission event listener
    form.addEventListener("submit", function (event) {
        nameInput.blur();
        emailInput.blur();
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(this);

        // Create the JSON object with the desired structure
        const jsonData = {
            "data": {
                "name": formData.get("name"),
                "email": formData.get("email")
            }
        };

        // Convert JSON object to a string
        const jsonString = JSON.stringify(jsonData);

        // Send data to specific URL using Fetch API
        const url = "https://admin.hlx.page/form/hassan-newpage/franklin-learning/main/email-form.json";

        // Replace with your desired URL
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonString
        })
            .then(response => {
                if (response.ok) {
                    console.log("Data sent successfully!", jsonString);
                    form.reset();
                    // Optionally, do something upon successful submission
                } else {
                    console.log('API request failed:', response.status);
                }
            })
            .catch(error => {
                console.error("Error sending data:", error);
            });
    });

}
