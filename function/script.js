// Handle button click to download the app
document.getElementById('appDownload').addEventListener('click', function() {
    // Redirect to the app download page (replace the link with the actual download URL)
    window.location.href = 'https://your-app-download-link.com'; 
});

document.addEventListener("DOMContentLoaded", function() {
    // Set the current year in the footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
