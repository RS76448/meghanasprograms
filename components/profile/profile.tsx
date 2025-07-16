'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Sparkles, Users, Zap } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { signOut } from '@/lib/auth'
export function Profile() {
const [user, setUser] = useState<any>(null)
useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      console.log('Current user:', user)
      setUser(user)
    }
    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  return (
    <section className="relative py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Profile
          </h2>
          
          <p className="text-gray-500 mt-2">
            {user ? `Welcome, ${user.email}` : 'Please sign in to view your profile.'}
          </p>
          <p className="text-gray-500 mt-2">Email: {user ? user.email : 'N/A'}</p>
          <p className="text-gray-500 mt-2">
            User ID: {user ? user.id : 'N/A'}
          </p>
          <p className="text-gray-500 mt-2">Name: { user?.full_name? user.full_name : 'N/A'}</p>
          <p className="text-gray-500 mt-2">Phone: {user?.phone ? user.phone : 'N/A'}</p>
        </motion.div>

      
      </div>
    </section>
  )
}