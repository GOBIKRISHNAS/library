var books_available = 250
var books_borrwed = 100
var new_arrivals = 50

document.getElementsByClassName("user-name")[0].innerHTML = localStorage.getItem("userName");
document.getElementById("new-arrivals").innerHTML = new_arrivals;
document.getElementById("books-available").innerHTML = books_available;
document.getElementById("books-borrowed").innerHTML = books_borrwed;
