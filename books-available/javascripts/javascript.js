books_list = [
    {name: "Eating in the Age of Dieting", author: "Rujuta Diwekar", cost: "₹265.00", books_available: 2, img_url: "https://images-eu.ssl-images-amazon.com/images/I/31970VMFv5L._AC_SX184_.jpg"},
    {name: "The Complete Novels of Sherlock Holmes", author: "Arthur Conan Doyle", cost: "₹₹149", books_available: 4, img_url: "https://images-eu.ssl-images-amazon.com/images/I/41tT5SJp6+L._AC_SX184_.jpg"},
    {name: "The Secret Garden", author: "Frances Hodgson Burnett", cost: "₹124.00", books_available: 5, img_url: "https://images-eu.ssl-images-amazon.com/images/I/51V-OwTiNVL._AC_SX184_.jpg"},
    {name: "Black 13 (Scott Pearce)", author: "Adam Hamdy", cost: "₹333.00", books_available: 7, img_url: "https://images-eu.ssl-images-amazon.com/images/I/419Y6Jy1OUL._AC_SX184_.jpg"},
]

str=""

if (books_list.length>0){
for (i = 0; i < books_list.length; i++) {
    str = str + "<li><img src = '"+ books_list[i].img_url + "' alt='' width=180px id='pic'><div class='details'><h1>" + books_list[i].name + "</h1><p>" + books_list[i].author +"</p><p>" + books_list[i].cost + "</p><p>Books Available: " + books_list[i].books_available + "</p><input type='button' value='Buy Now'></div></li>"
}}
else{
    str = "NO Books Available"
}

document.getElementById("content").innerHTML = str

function validationForm() {
    
    if (localStorage.getItem("userName") == "admin") {
        window.location = "https://gobikrishnas.github.io/library/admin-page/";
    }
    else{
        window.location = "https://gobikrishnas.github.io/library/user-page/";
    }
}
