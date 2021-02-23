function validationForm() {
    
    if (localStorage.getItem("userName") == "admin") {
        window.location = "https://gobikrishnas.github.io/library/admin-page/";
    }
    else{
        window.location = "https://gobikrishnas.github.io/library/user-page/";
    }
}
