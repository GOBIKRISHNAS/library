var user_details = [
    {userName: "krishna", user_id: 12345, books_purchased: 5, credits: 3},
    {userName: "abirami", user_id: 09876, books_purchased: 7, credits: 4},
    {userName: "admin", user_id: 13579, books_purchased: 4, credits: 2}
];

var obj = user_details.find(o => o.userName === localStorage.getItem("userName"));

document.getElementById("user-id").innerHTML = obj.user_id
document.getElementById("user-name").innerHTML = localStorage.getItem("userName")
document.getElementById("books-purchased").innerHTML = obj.books_purchased
document.getElementById("credits").innerHTML = obj.credits

function validationForm() {
    
    if (localStorage.getItem("userName") == "admin") {
        window.location = "https://gobikrishnas.github.io/library/admin-page/";
    }
    else{
        window.location = "https://gobikrishnas.github.io/library/user-page/";
    }
}
