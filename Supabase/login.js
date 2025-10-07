import { signinUser, getSession } from "./database.js"

const signInBtn = document.getElementById("signIn");
signInBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    
    const signInResponse = await signinUser(email, password)
    if(signInResponse.user){
        alert("Sign in successfull")
        window.location.href = "/"
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