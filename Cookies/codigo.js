// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to save username
function saveName() {
    var username = document.getElementById("usernameInput").value;
    if (username.trim() !== "") {
        setCookie("username", username, 30); // Cookie expires in 30 days
        document.getElementById("usernameDisplay").innerText = "Welcome, " + username + "!";
    } else {
        alert("Please enter your name.");
    }
}

// On page load, check if username cookie exists
window.onload = function () {
    var username = getCookie("username");
    if (username) {
        document.getElementById("usernameDisplay").innerText = "Welcome back, " + username + "!";
    }
};
