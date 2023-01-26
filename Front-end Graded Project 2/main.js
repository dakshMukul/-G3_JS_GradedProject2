function addData() {
    // Get the values of the username and password input fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Store the values in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    document.getElementById("signup-button").addEventListener("click", function(){
        window.location.replace("login.html");
    });
    
}

