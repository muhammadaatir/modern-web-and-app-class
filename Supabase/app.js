import { getData, addData, deleteData, updateData, getSession, signOutUser } from './database.js'

const renderInitialInterface = async () => {
    let expensesDiv = document.getElementById("expenses")
    let not_found = document.getElementById("not_found")
    const expenses = await getData()
    not_found.style.display = "none"
    expenses.map((data, index) => {
        expensesDiv.innerHTML += `
            <li>
             ${data.name} ${data.expense ?? "0"} 
             <button id="deleteBtn" onclick="deleteExpense(${data.id})">Delete</button>
             <button onclick="updateExpense(${data.id})">Update</button>
             <div id="input_div_${data.id}"></div>

            </li>
        
        `
    })

}
renderInitialInterface()


const submit_btn = document.getElementById("submit_btn");
submit_btn.addEventListener("click", () => {
    const add_name = document.getElementById("name").value;
    const add_expanse = document.getElementById("expense").value;
    addData(add_name, add_expanse)
})

function deleteExpense(id) {
    deleteData(id)
}
window.deleteExpense = deleteExpense;

function updateExpense(id) {
    const input_div = document.getElementById(`input_div_${id}`)
    input_div.innerHTML = `
        <input id="edit_bar" type="text" />
        <input id="update_expense" type="text" />
        <button onclick="updateDataSubmit(${id})">Update</button> 
    `
}

function updateDataSubmit(id) {
    const edit_bar = document.getElementById("edit_bar")
    const update_expense = document.getElementById("update_expense")

    updateData(edit_bar.value, update_expense.value, id)
}
window.updateExpense = updateExpense;
window.updateDataSubmit = updateDataSubmit;

const signOutBtn = document.getElementById("signOut")
const getSessionUser = async () => {
    const getUser = await getSession()
    if (!getUser.session) {
        window.location.href = "/login.html"
    }
}
getSessionUser();

signOutBtn.addEventListener("click", async () => {
    const signOutResponse = await signOutUser()

    if(signOutResponse) {
        alert("Sign Out Successfull")
        window.location.href = "/login.html";
    } else {
        alert(signOutResponse.message)
    }
})