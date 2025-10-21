const supabaseApi = supabase.createClient("");
// const pathname = window.location.pathname

// const getAllData = async () => {
//     const { data, error, } = await supabaseApi
//         .from('tasks')
//         .select()
//         .eq("email", "aatir@gmail.com")

//         .eq("public", false)
//     if (error) {
//         console.error(error.message)
//         return error
//     }
//     return data
// }

// const addData = async () => {
//     const { data, error } = await supabaseApi
//         .from('tasks')
//         .insert({ name: 'test', tasks: "coding", email: "aatir@gmail.com" })
//         .select()
//     if (error) {
//         console.error(error.message)
//         return error
//     }
//     return data
// }

// // addData()

// const updateData = async () => {
//     const { data, error } = await supabaseApi
//         .from('tasks')
//         .update({ name: 'aatir' })
//         .eq('email', "aatir@gmail.com")
//         .select("*")
//     if (error) {
//         console.error(error.message)
//         return error
//     }
//     console.log(data)
//     return data
// }
// // updateData()

// const deleteData = async () => {
//     const { data, error, ...other } = await supabaseApi
//         .from('tasks')
//         .delete()
//         .eq('id', 2)
//         .select()
//     if (error) {
//         console.error(error.message)
//         return error
//     }
//     console.log(data)
//     return data
// }
// // deleteData()



// const registerUser = async (name, email, password) => {
//     const { data, error } = await supabaseApi.auth.signUp({
//         email: email,
//         password: password,
//         options: {
//             data: {
//                 first_name: name,
//                 age: 27,
//             }
//         }
//     })
//     if (error) {
//         console.error(error.message)
//         return error
//     }
//     console.log(data)
//     return data
// }
// // registerUser()

// const signInUser = async (email, password) => {
//     const { data, error } = await supabaseApi.auth.signInWithPassword({
//         email: email,
//         password: password,
//     })
//     if (error) {
//         console.error(error.message)
//         return error
//     }
//     console.log(data)
//     return data
// }
// // signInUser();

// const signOutUser = async () => {
//     const { error } = await supabaseApi.auth.signOut()
//     if (error) {
//         console.error(error.message)
//         return error
//     }
// }
// // signOutUser()

// const getUserSession = async () => {
//     const { data, error } = await supabaseApi.auth.getSession()
//     if (error) {
//         console.error(error.message)
//         return error
//     }
//     // console.log(data)
//     return data
// }

// const initialRender = async () => {
//     const allData = await getAllData()
//     const { session } = await getUserSession()
//     const useremail = session?.user?.email
//     console.log(useremail)
//     if (!session) {
//         window.location.href = "/login.html"
//     }
//     const list = document.getElementById("task_list")
//     allData.map((task) => {

//         list.innerHTML += `
//         <li>${task.tasks}</li>
//         `
//     })

// }
// if (pathname === "/") {
//     initialRender()
// }

// const showLoginPage = pathname === "/login.html" || pathname === "/register.html"
// // Login functionality Start
// const intialLogin = async () => {
//     const { session: UserSession } = await getUserSession();
//     console.log("test", UserSession)
//     // const userSession = session?.session
//     if (UserSession) {
//         window.location.href = "/"
//     }
// }
// if (showLoginPage) {
//     intialLogin()
// }





// const registerFunction = async () => {
//     const login_name = document.querySelector("#login_name").value;
//     const login_email = document.querySelector("#login_email").value;
//     const login_password = document.querySelector("#login_password").value;

//     const registeredUser = await registerUser(login_name, login_email, login_password)
//     if (registeredUser.message) {
//         alert(registeredUser.message)
//         return
//     }

//     alert("User successfully registered.");
//     window.location.href = `/Supabase_Revision/`
// }

// const userLogin = async () => {
//     const user_email = document.getElementById("user_email").value
//     const user_password = document.getElementById("user_password").value
//     const signUser = await signInUser(user_email, user_password)

//     if (signUser.message) {
//         alert(signUser.message)
//         return
//     }

//     alert("User successfully login.");
//     window.location.href = `/Supabase_Revision/`
// }

// const isUserSignedIn = async () => {
//     const { session } = await getUserSession();
//     console.log(session)
//     if (window.location.pathname !== "/Supabase_Revision/") {
//         if (session) {
//             window.location.href = '/Supabase_Revision/'
//         }
//     } else {
//         if (!session) {
//             window.location.href = '/Supabase_Revision/login.html'
//         }

//     }
// }
// isUserSignedIn()

// const getBucket = async () => {
//     // const { data, error } = await supabaseApi
//     //     .storage
//     //     .listBuckets()


//     // console.log(error?.message)
//     // console.log(data)
//     const { data, error } = await supabaseApi
//         .storage
//         .getBucket('assets')
//     if (error) {
//         console.error(error.message)
//         return error
//     }
//     console.log(data)
// }
// getBucket()


const uploadImage = async () => {
    const image = document.getElementById("image").files[0]
    console.log(image)
    const { data, error } = await supabaseApi
        .storage
        .from('assets')
        .upload('/public/' + image.name, image)
    if (error) {
        console.log(error.message)
    }
    console.log(data)
}

const getImage = async () => {
    // const { data, error } = await supabaseApi
    //     .storage
    //     .from('assets')
    //     .getPublicUrl('public/download.jpg')
    //         if (error) {
    //     console.log(error.message)
    // }
    // console.log(data)
    const { data, error } = await supabaseApi
        .storage
        .from('assets')
        .download('public/images.png')
            if (error) {
        console.log(error.message)
    }
    const image = document.querySelector('img')
    image.src = URL.createObjectURL(data)
    downloadImageFromBlob(data, "test")
    console.log(data, )
}

function downloadImageFromBlob(blob, filename) {
  const blobUrl = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = blobUrl;
  a.download = filename;
  a.style.display = 'none'; // Hide the anchor element

  document.body.appendChild(a);
  a.click();

  URL.revokeObjectURL(blobUrl);
  document.body.removeChild(a);
}
