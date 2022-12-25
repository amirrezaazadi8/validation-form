const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const signingMsg = document.querySelector(".signing-status");
const signingBtn = document.querySelector(".signing-button");

signingBtn.addEventListener("click", signIn);

function signIn(event) {
    event.preventDefault();
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    usernameMsg.innerText = "";
    passwordMsg.innerText = ""
    let ifSendData = true;
    if (usernameValue.length === 0 || usernameValue.indexOf("@") === -1 || usernameValue.indexOf(".") === -1) {
        usernameMsg.innerText = "please enter a valid email!";
        ifSendData = false;
    }
    if (passwordValue.length === 0) {
        passwordMsg.innerText = "please enter your password correct!";
        ifSendData = false;
    } else if (passwordValue.length <= 4) {
        passwordMsg.innerText = "Your password is too short";
        ifSendData = false;
    }
    if (ifSendData) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                username: usernameValue,
                password: passwordValue
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                if (response.ok) {
                    signingMsg.innerText ="You signing is successfully";
                }
            })
    }
}
