var form = document.getElementById("form");
var username = document.getElementById("username");
var name_ = document.getElementById("name")
var sirname = document.getElementById("sirname");
var email = document.getElementById("mail");
var pw = document.getElementById("pw");
var pwConfirm = document.getElementById("pw-confirm");
var button = document.getElementById("button");
var alertText = document.getElementById("alert");
var inputs = document.querySelectorAll(".form input");
var alertDiv = document.getElementById("alert-div");

button.addEventListener("click", function() {
    alertText.innerHTML = "";
    var hata = 0;
    for (var e of inputs) {
        if (e.value === "") {
            alertText.innerHTML += "* " + e.placeholder + " can't be empty<br>";
            alertText.classList.add("error-span");
            e.classList.add("error-input");
            hata = 1;
        }
        else if (e.value !== "") {
            e.classList.remove("error-input");
        }
    }
    if (pw.value.length < 8) {
        pw.classList.add("error-input");
        alertText.classList.add("error-span");
        alertText.innerHTML +="* Password must be longer than 8 characters.<br>";
        hata = 1;
    }
    else if (pwConfirm.value.length < 8) {
        pwConfirm.classList.add("error-input");
        alertText.classList.add("error-span");
        alertText.innerHTML +="* Password must be longer than 8 characters.<br>";
        hata = 1;
    }
    else if (pw.value !== pwConfirm.value) {
        pw.classList.add("error-input");
        pwConfirm.classList.add("error-input");
        alertText.classList.add("error-span");
        alertText.innerHTML +="* Passwords must be same.<br>";
        hata = 1;
    }
    else{
        pw.classList.remove("error-input");
        pwConfirm.classList.remove("error-input");
    }
    if (hata === 0) {
        form.classList.add("form-disabled");
        username.value = name_.value.toLowerCase() + sirname.value.toLowerCase();
        username.classList.remove("username");
        alertText.innerText = "Welcome " + "@" + username.value;
        alertDiv.classList.add("center");
        alertText.classList.add("success-span");
    }
});