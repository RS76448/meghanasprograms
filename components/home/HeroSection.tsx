'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Sparkles, Users, Zap } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Discover Powerful AI Agents
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore a curated marketplace of AI agents designed to boost your productivity, 
            creativity, and efficiency. Find the perfect AI assistant for any task.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search AI agents..."
                className="pl-10 h-12 text-lg"
              />
            </div>
            <Button className="h-12 px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Sparkles className="mr-2 h-5 w-5" />
              Explore
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Access</h3>
              <p className="text-gray-600">
                Start using AI agents immediately with no setup required
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Community</h3>
              <p className="text-gray-600">
                Join thousands of users already boosting their productivity
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cutting Edge</h3>
              <p className="text-gray-600">
                Access the latest AI technologies and capabilities
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}