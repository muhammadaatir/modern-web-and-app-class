const supabaseApi = supabase.createClient("https://ophpxkbpdmhyaewdtyna.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9waHB4a2JwZG1oeWFld2R0eW5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3ODU0NTcsImV4cCI6MjA3MzM2MTQ1N30.YSsSj7he-ajQPsReYUspRSd4huShG87oUyvnQhRQMFQ");
const pathname = window.location.pathname

const getAllData = async () => {
    const { data, error, } = await supabaseApi
        .from('tasks')
        .select()
        .eq("email", "aatir@gmail.com")

        .eq("public", false)
    if (error) {
        console.error(error.message)
        return error
    }
    return data
}

const addData = async () => {
    const { data, error } = await supabaseApi
        .from('tasks')
        .insert({ name: 'test', tasks: "coding", email: "aatir@gmail.com" })
        .select()
    if (error) {
        console.error(error.message)
        return error
    }
    return data
}

// addData()

const updateData = async () => {
    const { data, error } = await supabaseApi
        .from('tasks')
        .update({ name: 'aatir' })
        .eq('email', "aatir@gmail.com")
        .select("*")
    if (error) {
        console.error(error.message)
        return error
    }
    console.log(data)
    return data
}
// updateData()

const deleteData = async () => {
    const { data, error, ...other } = await supabaseApi
        .from('tasks')
        .delete()
        .eq('id', 2)
        .select()
    if (error) {
        console.error(error.message)
        return error
    }
    console.log(data)
    return data
}
// deleteData()



const registerUser = async () => {
    const { data, error } = await supabaseApi.auth.signUp({
        email: 'a12345@email.com',
        password: '123456',
        options: {
            data: {
                first_name: 'Ahmed',
                age: 27,
            }
        }
    })
    if (error) {
        console.error(error.message)
        return error
    }
    console.log(data)
    return data
}
// registerUser()

const signInUser = async () => {
    const { data, error } = await supabaseApi.auth.signInWithPassword({
        email: '1@gmail.com',
        password: '123456',
    })
    if (error) {
        console.error(error.message)
        return error
    }
    console.log(data)
    return data
}
signInUser();

const signOutUser = async () => {
    const { error } = await supabaseApi.auth.signOut()
    if (error) {
        console.error(error.message)
        return error
    }
}
// signOutUser()

const getUserSession = async () => {
    const { data, error } = await supabaseApi.auth.getSession()
    if (error) {
        console.error(error.message)
        return error
    }
    // console.log(data)
    return data
}

const initialRender = async () => {
    const allData = await getAllData()
    const { session } = await getUserSession()
    const useremail = session?.user?.email
    console.log(useremail)
    if (!session) {
        window.location.href = "/login.html"
    }
    const list = document.getElementById("task_list")
    allData.map((task) => {

        list.innerHTML += `
        <li>${task.tasks}</li>
        `
    })

}
if (pathname === "/") {
    initialRender()
}

const showLoginPage = pathname === "/login.html" || pathname === "/register.html"
// Login functionality Start
const intialLogin = async () => {
    const { session: UserSession } = await getUserSession();
    console.log("test", UserSession)
    // const userSession = session?.session
    if (UserSession) {
        window.location.href = "/"
    }
}
if (showLoginPage) {
    intialLogin()
}



const getBucket = async () => {
    const { data, error } = await supabaseApi
        .storage
        .listBuckets()
    // console.log(error.message)
    console.log(data)
}
getBucket()