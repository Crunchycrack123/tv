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

    document.getElementById("greetings").innerHTML = `Hello ${localStorage.getItem("UserName")} !`;
});

function setDarkMode(isDark) {
    if (isDark) {
        localStorage.setItem("DarkMode", "True");
        document.body.style.color = "white";
        document.body.style.backgroundColor = "rgb(70, 63, 63)";
        document.querySelectorAll("dialog").forEach(dialog => {
            dialog.style.backgroundColor = "rgb(70, 63, 63)";
        });
        document.getElementById("body").style.backgroundImage = "url('../Images/Backgrounds/backgroundDark.jpg')";
        let dialogs = document.getElementsByClassName("dialog");
        for (let dialog of dialogs) {
            dialog.style.color = "white";
        }
        let covers = document.getElementsByClassName("cover");
        for (let cover of covers) {
            cover.style.backgroundColor = "gray";
        }
    } else {
        localStorage.setItem("DarkMode", "False");
        document.body.style.color = "black";
        document.body.style.backgroundColor = "white";
        document.querySelectorAll("dialog").forEach(dialog => {
            dialog.style.backgroundColor = "white";
        });
        document.getElementById("body").style.backgroundImage = "url('../Images/Backgrounds/backgroundLight.jpg')";
        let covers = document.getElementsByClassName("cover");
        for (let cover of covers) {
            cover.style.backgroundColor = "white";
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



        


