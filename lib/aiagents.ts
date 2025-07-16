import { supabase } from './supabase'

export const inputTextToSummerizer = async (text: string): Promise<{ data: any; error: any }> => {
  const url="http://localhost:8000/summarize-default" // Adjust the URL to your backend endpoint
  const textpayload=[{
        "page_content":text
    }]
  const response = await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text:textpayload }),
  })
  const data = await response.json()
  console.log("Response from backend:", data)
  return {data:data.summary.summary.summary, error: null}
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