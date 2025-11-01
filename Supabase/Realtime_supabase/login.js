const supabaseClient = supabase.createClient("", "")

const fetchUsers = async (email) => {
    const { data, error } = await supabaseClient
        .from('users')
        .select()
        .eq('email', email)
    if (error) {
        console.log(error.message)
        return
    }
    console.log(data)
    return data
}

const insertData = async (email) => {
    const { data, error } = await supabaseClient
        .from('users')
        .insert({ email: email })
        .select()
    if (error) {
        console.log(error.message)
        return error
    }
    console.log(data)
    return data
}

const loginUser = async () => {
    const password = document.getElementById('password')
    const email = document.getElementById('email')
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    })

    if (error) {
        console.log(error.message)
        return error
    }
    const checkExistingUsers = await fetchUsers(email.value)
    console.log(checkExistingUsers)
    if(!checkExistingUsers.length) {
        insertData(email.value)
    }
    console.log(data);
    // window.location.reload()
    
    
}
const getSession = async () => {
    const { data, error } = await supabaseClient.auth.getSession()
    if (error) {
        console.error(error);
        return error    
    }
    console.log(data);
    return data
}

const checkSession = async () => {
    const session = await getSession()
    console.log(session);
    
    if(session.session){
       window.location.href = "/" 
    }
}
checkSession()