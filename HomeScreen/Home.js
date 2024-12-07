document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("DarkMode") === "True") {
        setDarkMode(true);
    } else if (localStorage.getItem("DarkMode") === "False") {
        setDarkMode(false);
    }

    if (localStorage.getItem("UserName")) {
        console.log("Device is logged in!");
    } else {
        location.href = "../index.html";
    }

    document.getElementById("greetings").innerHTML = `Hello ${localStorage.getItem("UserName")}, How are You today? The Hall of Free-Movies! Download as MUCH as you WANT, It's free! 99.999% ADS free!`;
});

function setDarkMode(isDark) {
    if (isDark) {
        localStorage.setItem("DarkMode", "True");
        document.body.style.color = "white";
        document.body.style.backgroundColor = "rgb(70, 63, 63)";
        document.querySelectorAll("dialog").forEach(dialog => {
            dialog.style.backgroundColor = "rgb(70, 63, 63)";
        });
        let dialogs = document.getElementsByClassName("dialog");
        for (let dialog of dialogs) {
            dialog.style.color = "white";
        }
    } else {
        localStorage.setItem("DarkMode", "False");
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
}

function darkMode() {
    if (localStorage.getItem("DarkMode") === "True") {
        setDarkMode(false);
    } else {
        setDarkMode(true);
    }
}




        


