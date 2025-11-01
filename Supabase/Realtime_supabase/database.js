const supabaseClient = supabase.createClient("", "")
// localStorage.removeItem("senderEmail")

// const fetchData = async (table, currentEmail) => {
//     const { data, error } = await supabaseClient
//         .from(table)
//         .select()
//         .neq('email', currentEmail)
//     if (error) {
//         console.log(error.message)
//         return
//     }
//     console.log(data)
//     return data
// }
// const fetchChats = async (userEmail, senderEmail) => {
//     const { data, error } = await supabaseClient
//         .from("chat_app")
//         .select()
//         .match({
//             first_email: userEmail,
//             second_email: senderEmail,
//         });
//     if (error) {
//         console.log(error.message)
//         return error
//     }
//     console.log(data)
//     return data

// }
// // const fetchMessages = async (table, query) => {
// //     const userEmail = localStorage.getItem('userEmail')
// //     const { data, error } = await supabaseClient
// //         .from(table)
// //         .select()
// //         .eq("send_by", userEmail)
// //         .eq("send_to", query)
// //     if (error) {
// //         console.log(error.message)
// //         return
// //     }
// //     console.log(data)
// //     return data
// // }

// const insertData = async (message, first_email, second_email) => {
//     const { data, error } = await supabaseClient
//         .from('chat_app')
//         .insert({ messages: message, first_email: first_email, second_email: second_email })
//         .select()
//     if (error) {
//         console.log(error.message)
//         return error
//     }
//     console.log(data)
//     return data
// }


// // const initialRender = async () => {
// //     const senderEmail = event.target.innerText
// //     localStorage.setItem("senderEmail", senderEmail)
// //     const container = document.getElementById('container')
// //     const data = await fetchMessages('chat_app', String(senderEmail))
// //     const userEmail = localStorage.getItem('userEmail')
// //     console.log(data)
// //     data.map((chat) => {
// //         container.innerHTML += `
// //         <div style="border: 1px solid ${chat.send_by === userEmail ? "red" : "green"}; margin-bottom: 5px;"> 
// //             <h3> ${chat.message} </h3>
// //         </div>
// //         `
// //     })
// // }


// const sendMessage = async (name) => {
//     const userEmail = localStorage.getItem("userEmail")
//     const senderEmail = localStorage.getItem("senderEmail")
//     const message = document.getElementById('message')
//     // const message2 = document.getElementById('message2')
//     // const message = name === "user1" ? message : message2
//     if (message.value.trim() !== "") {
//         const sendFunction = await insertData(message.value, user.email, senderEmail)
//         if (sendFunction.message) {
//             alert("Message not send")
//             return
//         }
//         // alert("Message Send")
//         message.value = ""
//     }

// }

// // const AddMessage = async (eventType, new_col) => {
// //     const container = document.getElementById('container')
// //     const data = await fetchData('chat_app');
// //     const userEmail = localStorage.getItem('userEmail')
// //     console.log(data)
// //     if (eventType === "INSERT") {
// //         container.innerHTML += `
// //         <div style="border: 1px solid ${new_col.send_by === userEmail ? "red" : "green"}; margin-bottom: 5px;"> 

// //         <h3> ${new_col.message} </h3>
// //         </div>
// //         `
// //     } 
// // }

// const chats = supabaseClient.channel('room1')
//     .on('postgres_changes', { event: '*', schema: 'public', table: 'chat_app' }, payload => {
//         AddMessage(payload.eventType, payload.new)
//         console.log('Change received!', payload)
//     })
//     .subscribe()

// const getSession = async () => {
//     const { data, error } = await supabaseClient.auth.getSession()
//     if (error) {
//         console.error(error);
//         return error
//     }
//     console.log(data);
//     return data
// }

// const checkSession = async () => {
//     const session = await getSession()
//     console.log(session);
//     if (!session.session) {
//         window.location.href = "/login.html"
//         return
//     }
//     localStorage.setItem("userEmail", session.session.user.email)
// }
// checkSession()

// const signout = async () => {
//     const { error } = await supabaseClient.auth.signOut()
//     if (error) {
//         console.error(error);
//         return error
//     }
//     window.location.reload()
// }

// const renderUser = async () => {
//     const userContainer = document.getElementById("userContainer")
//     const userEmail = localStorage.getItem("userEmail")
//     const senderEmail = localStorage.getItem("senderEmail")
//     const data = await fetchData('users', userEmail)
//     // const filteredData = data.filter((user) => user.email !== userEmail)
//     data.map((user) => {
//         userContainer.innerHTML += `
//         <div style="border: 1px solid black; margin-bottom: 5px; " onclick='clickedUser()'"> 
//             ${user.email}
//         </div>
//         `
//     })

// }
// renderUser()

// const clickedUser = async () => {
//     const senderEmail = event.target.innerText
//     localStorage.setItem("senderEmail", senderEmail)
//     const userEmail = localStorage.getItem('userEmail')
//     const container = document.getElementById('container')
//     container.innerHTML = `
//     <h4>${senderEmail}</h4>
//     `
//     const previousChats = await fetchChats(userEmail, senderEmail)
//     const previousChatsReverse = await fetchChats(senderEmail, userEmail)
//     if(!previousChats.length && !previousChatsReverse.length) {
//         await insertData('[]', userEmail, senderEmail)
//     }
// }

const fetchData = async () => {
    const { data, error } = await supabaseClient
        .from("doctors")
        .select()
    if (error) {
        console.log(error.message)
        return
    }
    console.log(data)
    return data
}
const date = document.getElementById("date")
const getDate = () => {
    console.log(date.value)
}

const getDoctor = (event) => {
    console.log(event.target.value)
} 

date.addEventListener("change", async (event) => {
    const doctorsData = await fetchData()

    console.log(doctorsData)
    const currentDate = new Date()
    const year = currentDate.toLocaleString("default", { year: "numeric" });
    const month = currentDate.toLocaleString("default", { month: "2-digit" });
    const day = currentDate.toLocaleString("default", { day: "2-digit" });

    // // Generate yyyy-mm-dd date string
    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate)
    const TodayDate = new Date(event.target.value).getDay()
    // const getDay = 
    console.log(TodayDate)
    if(event.target.value > formattedDate) {
    
    }
})



