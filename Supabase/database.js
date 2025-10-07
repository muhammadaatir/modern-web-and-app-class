const supabaseClient = supabase.createClient("https://ophpxkbpdmhyaewdtyna.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9waHB4a2JwZG1oeWFld2R0eW5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3ODU0NTcsImV4cCI6MjA3MzM2MTQ1N30.YSsSj7he-ajQPsReYUspRSd4huShG87oUyvnQhRQMFQ"
);
export const getData = async () => {
  const { data, error } = await supabaseClient
    .from("expenses")
    .select()
  // .eq('name', 'test')
  // const { data, error } = await supabaseClient
  //   .from('posts')
  //   .insert([{ name: "test", price: 100 }])


  if (error) {
    return error
  }
  console.log(data)
  return data
}


export const addData = async (name, expense) => {
  const { data, error } = await supabaseClient
    .from('expenses')
    .insert([{ name: name, expense: expense }])
    .select()

  if (error) {
    return error
  }
  console.log(data)
  window.location.reload()
  return await data
}


export const updateData = async (name, expense, id) => {
  const { data, error } = await supabaseClient
    .from('expenses')
    .update([{ name: name, expense: expense }])
    .eq('id', id)
    .select()

  if (error) {
    return error
  }
  console.log(data)
  window.location.reload()
  return data
}


export const deleteData = async (id) => {
  const { data, error } = await supabaseClient
    .from('expenses')
    .delete()
    .eq('id', id)
    .select()
  if (error) {
    return error
  }
  console.log(data)
  window.location.reload()
  return data
}

export const signupUser = async (email, password, name) => {
  const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name: name,
      }
    }
  })
  if (error) {
    return error.message
  }

  console.log(data)
  return data
}


export const signinUser = async (email, password) => {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: password,
  })
  if (error) {
    return error
  }
  console.log(data)
  return data
}

export const getSession = async () => {
  const { data, error } = await supabaseClient.auth.getSession()
  if (error) {
    console.error(error)
    return error
  }
  console.log(data)
  return data
}

export const signOutUser = async () => {
  const { error } = await supabaseClient.auth.signOut()

  if (error) {
    console.error(error)
    return error
  }

  return true;
}
