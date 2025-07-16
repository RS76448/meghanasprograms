'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { HeroSection } from '@/components/home/HeroSection'
import { AgentGrid } from '@/components/agents/AgentGrid'
import { AgentModal } from '@/components/agents/AgentModal'
import { Agent } from '@/lib/supabase'
import { motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import { Profile } from '@/components/profile/profile'

export default function ProfileIndex() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAgentClick = (agent: Agent) => {
    setSelectedAgent(agent)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedAgent(null)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
    
      
    <Profile />

     
    </div>
  )
}