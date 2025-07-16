import { supabase } from './supabase'

export const inputTextToSummerizer = async (text: string): Promise<{ data: any; error: any }> => {
  const url="http://localhost:8000/summarize-default" // Adjust the URL to your backend endpoint
  const response = await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  })
  const { data, error } = await response.json()
  return { data, error }
}



export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}