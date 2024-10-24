// scripts.js

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulate login verification (Replace with actual backend login)
    if (username === "user" && password === "password") {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("meter-section").style.display = "block";
        document.getElementById("profile-section").style.display = "block";
        document.getElementById("profile-username").textContent = username;
    } else {
        alert("Invalid credentials. Try again.");
    }
});

document.getElementById("meter-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const meterReading = document.getElementById("meter-reading").value;
    const meterPhoto = document.getElementById("meter-photo").files[0];

    if (meterPhoto && meterReading) {
        // Simulate file upload and meter reading submission
        alert("Meter reading and photo submitted successfully!");
    } else {
        alert("Please provide a valid meter reading and photo.");
    }
});
