'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { HeroSection } from '@/components/home/HeroSection'
import { AgentGrid } from '@/components/agents/AgentGrid'
import { AgentModal } from '@/components/agents/AgentModal'
import { Agent } from '@/lib/supabase'
import { motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

export default function Home() {
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
      <HeroSection />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured AI Agents
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of AI agents, each designed to excel in specific domains
              and help you accomplish your goals more efficiently.
            </p>
          </motion.div>

          <AgentGrid onAgentClick={handleAgentClick} />
        </div>
      </section>

      <AgentModal
        agent={selectedAgent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </div>
  )
}