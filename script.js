let p = document.getElementById("password")
let p2 = document.getElementById("password-confirm")
let pMsg = document.getElementById("password-message")

pClass = p.classList
p2Class = p2.classList

function validatePassword() {
    pMsg.textContent = ""
    p.classList.remove("valid")
    p2.classList.remove("valid")
    pClass.remove("invalid")
    p2Class.remove("invalid")
    let errors = []
    let ptest = p.value
    if (ptest.length < 8) {
        errors.push("Your password must be at least 8 characters.");
    }
    if (ptest.search(/[a-z]/i) < 0) {
        errors.push("Your password must contain at least one letter.");
    }
    if (ptest.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit.");
    }

    if (ptest.search(/[A-Z]/) < 0) {
        errors.push("Your password must contain at least one capital letter.")
    }

    if (errors.length > 0) {
        pMsg.innerText = errors.join("\n")
        return pClass.add("invalid");
    } else {
        p.classList.remove("invalid");
        passwordMatch()
    }
}

function passwordMatch() {
    if (p.value !== p2.value) {
        pClass.add("invalid")
        p2Class.add("invalid")
        pMsg.textContent = "Your passwords do not match."
    } else if (p2.value == '') {
        pClass.add("invalid")
        p2Class.add("invalid")
        pMsg.textContent = "Your password confirmation cannot be blank."
    } else if (p.value === p2.value) {
        pClass.add("valid")
        p2Class.add("valid")
    }
}
