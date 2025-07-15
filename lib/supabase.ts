import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://naszulahxzhrvqodfsai.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hc3p1bGFoeHpocnZxb2Rmc2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1OTc4NzUsImV4cCI6MjA2ODE3Mzg3NX0.IKz7g5LDqZRQBjn3P-2sqms1CKCzUk4xH2cTUYd7Hsw'

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