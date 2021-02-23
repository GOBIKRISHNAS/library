var books_available = 4
var books_borrwed = 5
var new_arrivals = 2

document.getElementsByClassName("user-name")[0].innerHTML = localStorage.getItem("userName");
document.getElementById("new-arrivals").innerHTML = new_arrivals;
document.getElementById("books-available").innerHTML = books_available;
document.getElementById("books-borrowed").innerHTML = books_borrwed;

var btn = document.getElementById("myBtn");
btn.onclick = function() {
    window.location = "gobikrishnas.github.io/library/search-results/";
    var search = document.getElementsByName("search")[0].value;
    localStorage.setItem("search_value", search);
}
