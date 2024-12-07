
document.addEventListener("DOMContentLoaded", ()=> {
    if (localStorage.getItem("UserName")) {
        location.href = "./HomeScreen/home.html"
    }
    else {
        console.warn("deviceNotRegistered")
    }
let textPopUp = document.getElementById("textPopUp");
    textPopUp.style.opacity = "0";
    textPopUp.style.transition = "all 2s"
    setTimeout(() => {
        textPopUp.style.opacity = "1";
    }, 2000);
})
document.addEventListener("DOMContentLoaded", ()=> {
    let textPopUp2 = document.getElementById("textPopUp2");
        textPopUp2.style.opacity = "0";
        textPopUp2.style.transition = "all 2s"
        setTimeout(() => {
            textPopUp2.style.opacity = "1";
        }, 2000);
    })

function submitName() {
    let NameInput = document.getElementById("NameIp");
    let ConfirmingDialog = document.getElementById("confirming");
    let textPopUp2 = document.getElementById("textPopUp2");
    
    if (NameInput.value === "" || NameInput.value === " ") {
        textPopUp2.innerText = "Please Fill in the empty text Fields !"
        textPopUp2.style.color = "red";
        setTimeout(() => {
            textPopUp2.innerText = "Think Of it Wisely, you won't be able to change it ! !"
            textPopUp2.style.color = "black";
        }, 2000);
    }else {
        ConfirmingDialog.innerHTML = `        <p style="text-align: center;">
            Well Hello ${NameInput.value} ! If you'd like to change names, or dont really like this one, click this button !
            <br>
            <button class="SubmitBtn" onclick="confirming.close()">I prefer Changing.</button>
            But if you Like to stay with ${NameInput.value}, then go on and press this one ! 
            <br>
            <button class="SubmitBtn" onclick="SetUsername()">I like this one</button>
        </p>`
        ConfirmingDialog.showModal();   
    }

}

function SetUsername() {
    let UserName = document.getElementById("NameIp");
    localStorage.setItem("UserName",UserName.value) 
    location.href = "./HomeScreen/home.html"
}

