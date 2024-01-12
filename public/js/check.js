function check() {
    var input = document.getElementById("password").value;
    input = input.trim();
    document.getElementById("password").value = input;

    // Condition 0: Au moins une lettre minuscule
    if (input.match(/[a-z]/)) {
        document.getElementById("check0").style.color = "green";
        document.getElementById("check0").innerHTML = '<i class="far fa-check-circle"></i> <span>Au moins une lettre minuscule. ✅</span>';
    } else {
        document.getElementById("check0").style.color = "red";
        document.getElementById("check0").innerHTML = '<i class="far fa-check-circle"></i> <span>Au moins une lettre minuscule. ❌</span>';
    }

    // Condition 1: Au moins une lettre majuscule
    if (input.match(/[A-Z]/)) {
        document.getElementById("check1").style.color = "green";
        document.getElementById("check1").innerHTML = '<i class="far fa-check-circle"></i> <span>Au moins une lettre majuscule. ✅</span>';
    } else {
        document.getElementById("check1").style.color = "red";
        document.getElementById("check1").innerHTML = '<i class="far fa-check-circle"></i> <span>Au moins une lettre majuscule. ❌</span>';
    }

    // Condition 2: Au moins un chiffre
    if (input.match(/[0-9]/i)) {
        document.getElementById("check2").style.color = "green";
        document.getElementById("check2").innerHTML = '<i class="far fa-check-circle"></i> <span>Au moins un chiffre. ✅</span>';
    } else {
        document.getElementById("check2").style.color = "red";
        document.getElementById("check2").innerHTML = '<i class="far fa-check-circle"></i> <span>Au moins un chiffre. ❌</span>';
    }

    // Condition 3: Au moins un caractère spécial
    if (input.match(/[@$!%*?&]/i)) {
        document.getElementById("check3").style.color = "green";
        document.getElementById("check3").innerHTML = '<i class="far fa-check-circle"></i> <span>Au moins un caractère spécial parmi @, $, !, %, *, ?, &. ✅</span>';
    } else {
        document.getElementById("check3").style.color = "red";
        document.getElementById("check3").innerHTML = '<i class="far fa-check-circle"></i> <span>Au moins un caractère spécial parmi @, $, !, %, *, ?, &. ❌</span>';
    }

    // Condition 4: Au moins 8 caractères
    if (input.length >= 8) {
        document.getElementById("check4").style.color = "green";
        document.getElementById("check4").innerHTML = '<i class="far fa-check-circle"></i> <span>Au moins 8 caractères. ✅</span>';
    } else {
        document.getElementById("check4").style.color = "red";
        document.getElementById("check4").innerHTML = '<i class="far fa-check-circle"></i> <span>Au moins 8 caractères. ❌</span>';
    }
}

function check2() {
    var input = document.getElementById("username").value;
    input = input.trim();
    document.getElementById("username").value = input;

    // Au moins 3 caractères
    if (input.length >= 3) {
        document.getElementById("check5").style.color = "green";
        document.getElementById("check5").innerHTML = '<i class="far fa-check-circle"></i> <span>Au moins 3 caractères. ✅</span>';
    } else {
        document.getElementById("check5").style.color = "red";
        document.getElementById("check5").innerHTML = '<i class="far fa-check-circle"></i> <span>Au moins 3 caractères. ❌</span>';
    }
}

function check3() {
    var input = document.getElementById("email").value;
    input = input.trim();
    document.getElementById("email").value = input;

    // Email valide avec ce regex emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValidEmail = emailRegex.test(input);

    if (isValidEmail) {
        document.getElementById("check6").style.color = "green";
        document.getElementById("check6").innerHTML = '<i class="far fa-check-circle"></i> <span>Votre email est valide. ✅</span>';
    } else {
        document.getElementById("check6").style.color = "red";
        document.getElementById("check6").innerHTML = '<i class="far fa-check-circle"></i> <span>Votre email est valide. ❌</span>';
    }
}

function show(){
    var input = document.getElementById("password");
    if (input.type === "password") {
        input.type = "text";
        document.getElementById("eye").src="images/eye.png";
    } else {
        input.type = "password";
        document.getElementById("eye").src= "images/hidden.png";
    }
}
