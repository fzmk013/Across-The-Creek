/** @format */

import supabase from "./supabase";
// ********SIGNUP*********
// sign up suder to the supabase
export async function signUp({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        // pass any kind of information abouth this user
        fullName,
      },
    },
  });

  if (error) throw Error(error.message);

  return data;
}

// ********LOGIN*********
export async function Login({ email, password }) {
  // on our supabase client we can use the Auth sub module and on here can call all kinds of methods (the most basic one is exactly the sign in with password)
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw Error(error.message);

  return data;
}

// Log the users in using signInWithPassword and react query

export async function getCurrntUser() {
  // check if there is a active session
  // get the data from local storage
  const { data: session } = await supabase.auth.getSession();

  // if there is no current user
  if (!session.session) return null;

  // if there is we can get that user from supabase
  // GET USER
  const { data, error } = await supabase.auth.getUser();

  console.log(data);

  if (error) throw Error(error.message);

  // we just want the user not session , ..
  return data?.user;
}

// ********LOGOUT*********
// function to interact with our API
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
