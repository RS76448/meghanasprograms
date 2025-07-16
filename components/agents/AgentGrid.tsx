'use client'

import { useState, useEffect } from 'react'
import { AgentCard } from './AgentCard'
import { Agent } from '@/lib/supabase'
import { motion } from 'framer-motion'

const sampleAgents: Agent[] = [
  {
    id: '1',
    name: 'Text Summerizer for Blogs',
    description: 'AI-powered tool for summarizing blog posts and articles into concise summaries.',
    category: 'Summarization',
    avatar_url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    price: 0,
    features: ['Text Summarization', 'Keyword Extraction', 'Sentiment Analysis', 'Topic Identification'],
    created_at: '2024-01-15T10:00:00Z',
    is_active: true,
    creator_id: 'system'
  },
  {
    id: '2',
    name: 'ContentCraft',
    description: 'Creative writing assistant specializing in blog posts, marketing copy, and social media content.',
    category: 'Writing',
    avatar_url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    price: 15,
    features: ['Blog Writing', 'SEO Optimization', 'Social Media', 'Copywriting'],
    created_at: '2024-01-16T10:00:00Z',
    is_active: true,
    creator_id: 'system'
  },
  {
    id: '3',
    name: 'DataInsight Pro',
    description: 'Advanced data analysis and visualization tool that transforms raw data into actionable insights.',
    category: 'Analytics',
    avatar_url: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    price: 29,
    features: ['Data Analysis', 'Visualization', 'Reports', 'Machine Learning'],
    created_at: '2024-01-17T10:00:00Z',
    is_active: true,
    creator_id: 'system'
  },
  {
    id: '4',
    name: 'DesignGenius',
    description: 'AI-powered design assistant for creating stunning graphics, logos, and marketing materials.',
    category: 'Design',
    avatar_url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    price: 25,
    features: ['Logo Design', 'Graphics', 'Branding', 'Templates'],
    created_at: '2024-01-18T10:00:00Z',
    is_active: true,
    creator_id: 'system'
  },
  {
    id: '5',
    name: 'MarketingMind',
    description: 'Comprehensive marketing strategy assistant with campaign planning and optimization capabilities.',
    category: 'Marketing',
    avatar_url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    price: 35,
    features: ['Campaign Planning', 'Ad Optimization', 'Analytics', 'ROI Tracking'],
    created_at: '2024-01-19T10:00:00Z',
    is_active: true,
    creator_id: 'system'
  },
  {
    id: '6',
    name: 'ResearchPro',
    description: 'Academic and business research assistant with advanced information gathering and analysis.',
    category: 'Research',
    avatar_url: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    price: 20,
    features: ['Literature Review', 'Data Collection', 'Citation Management', 'Report Generation'],
    created_at: '2024-01-20T10:00:00Z',
    is_active: true,
    creator_id: 'system'
  }
]

interface AgentGridProps {
  onAgentClick: (agent: Agent) => void
}

export function AgentGrid({ onAgentClick }: AgentGridProps) {
  const [agents, setAgents] = useState<Agent[]>(sampleAgents)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {agents.map((agent, index) => (
        <motion.div
          key={agent.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <AgentCard agent={agent} onClick={() => onAgentClick(agent)} />
        </motion.div>
      ))}
    </div>
  )
}