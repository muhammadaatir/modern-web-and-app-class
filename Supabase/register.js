import { signupUser, getSession } from "./database.js"

const signUpBtn = document.getElementById("signUp");
signUpBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value
    const name = document.getElementById("name").value
    const password = document.getElementById("password").value

    const signInResponse = await signupUser(email, password, name)
    if (signInResponse.user) {
        alert("Sign up successfull")
        window.location.href = "/login.html"
    } else {
        alert(signInResponse.message)
    }
})
const getSessionUser = async () => {
    const getUser = await getSession()
    if (getUser.session) {
        window.location.href = "/"
    }
}
getSessionUser();