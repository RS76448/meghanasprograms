import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Agent = {
  id: string
  name: string
  description: string
  category: string
  avatar_url: string
  rating: number
  price: number
  features: string[]
  created_at: string
  is_active: boolean
  creator_id: string
}

export type UserProfile = {
  id: string
  email: string
  full_name: string
  avatar_url: string
  created_at: string
  is_admin: boolean
}

export type Interaction = {
  id: string
  user_id: string
  agent_id: string
  message: string
  response: string
  created_at: string
}