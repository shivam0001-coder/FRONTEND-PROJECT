function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    if (name == "" || email == "" || password == "") {
        message.innerHTML = "Please fill all fields";
        message.style.color = "red";
        return false;
    }

    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        message.innerHTML = "Please enter a valid email";
        message.style.color = "red";
        return false;
    }

    if (password.length < 6) {
        message.innerHTML = "Password must be at least 6 characters";
        message.style.color = "red";
        return false;
    }

    message.innerHTML = "Signup successful!";
    message.style.color = "green";

    return false;
}