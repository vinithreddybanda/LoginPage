document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "password") {
        document.getElementById('message').innerText = "Login successful!";
        document.getElementById('message').style.color = "green";
    } else {
        document.getElementById('message').innerText = "Invalid username or password!";
        document.getElementById('message').style.color = "red";
    }
});
