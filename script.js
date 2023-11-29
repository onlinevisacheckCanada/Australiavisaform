function login() {
    var userId = document.getElementById('userId').value;
    var password = document.getElementById('password').value;

    // Add your authentication logic here (e.g., check against a database)

    // For demonstration purposes, let's assume a simple check
    if (userId === '123' && password === '123') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}
// ... (previous code) ...

function uploadPhoto() {
    var photoInput = document.getElementById('photo');
    var photo = photoInput.files[0];

    if (photo) {
        // You can handle the uploaded photo here, such as displaying it or sending it to a server.
        alert('Photo uploaded successfully!');
    } else {
        alert('Please select a photo to upload.');
    }
}

