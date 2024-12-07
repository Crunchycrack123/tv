document.addEventListener("DOMContentLoaded", ()=> {
    if (localStorage.getItem("UserName")) {
        console.log("Everything is Okay !")   
    }
    else {
        location.href = "../index.html"
    }
})

document.addEventListener("DOMContentLoaded", ()=> {
    if (localStorage.getItem("DarkMode") === "True") {
        localStorage.setItem("DarkMode","True")
        document.body.style.color = "white";
        document.body.style.backgroundColor = "rgb(70, 63, 63)";
        document.querySelectorAll("dialog").forEach(dialog => {
            dialog.style.backgroundColor = "rgb(70, 63, 63)";
        });
        let dialogs = document.getElementsByClassName("dialog");
    for (let dialog of dialogs) {
        dialog.style.color = "white";

    }
    }
    else if (localStorage.getItem("DarkMode") === "False") {
        localStorage.setItem("DarkMode","False")
        document.body.style.color = "black";
        document.body.style.backgroundColor = "white";
        document.querySelectorAll("dialog").forEach(dialog => {
            dialog.style.backgroundColor = "white";
        });
        let dialogs = document.getElementsByClassName("dialog");
    for (let dialog of dialogs) {
        dialog.style.color = "black";
    }
    }
})