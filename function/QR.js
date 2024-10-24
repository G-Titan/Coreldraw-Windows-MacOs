document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const image = new Image();
            image.src = e.target.result;

            image.onload = function() {
                // Draw the image on a hidden canvas to extract pixel data
                const canvas = document.getElementById('qrCanvas');
                const ctx = canvas.getContext('2d');
                
                // Set canvas size to match the uploaded image size
                canvas.width = image.width;
                canvas.height = image.height;

                // Draw the image onto the canvas
                ctx.drawImage(image, 0, 0, image.width, image.height);

                // Extract image data from canvas
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

                // Use jsQR to decode the QR code
                const qrCodeData = jsQR(imageData.data, canvas.width, canvas.height);

                if (qrCodeData) {
                    // Display the QR code data
                    document.getElementById('qrResult').innerText = "QR Code Data: " + qrCodeData.data;
                } else {
                    document.getElementById('qrResult').innerText = "No QR code detected.";
                }
            };
        };
        reader.readAsDataURL(file);
    }
});
