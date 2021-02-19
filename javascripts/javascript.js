var form = document.getElementById("form");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    form.style.display = "block";
}

span.onclick = function() {
    form.style.display = "none";
}

function validationForm() {
    var userName = document.getElementsByName("User Name")[0].value;
    var password = document.getElementsByName("Password")[0].value;

    if (userName == "" || password == "") {
        alert("Please Type the User Name and Password Correctly...");
    }
}

function directPage() {
    var userName = document.getElementsByName("User Name")[0].value;
    var password = document.getElementsByName("Password")[0].value;
    if ((userName != "" || password != "")) {
        if (userName == "admin" && password == "admin") {
            window.location = "https://gobikrishnas.github.io/library/admin-page/";
        } else {
            window.location = "https://gobikrishnas.github.io/html-css/library-management/";
        }
    }
}
