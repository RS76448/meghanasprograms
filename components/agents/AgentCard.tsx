'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, MessageCircle, Zap } from 'lucide-react'
import { Agent } from '@/lib/supabase'

interface AgentCardProps {
  agent: Agent
  onClick: () => void
}

export function AgentCard({ agent, onClick }: AgentCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200 border-0 shadow-md bg-gradient-to-br from-white to-gray-50">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={agent.avatar_url} />
                <AvatarFallback className="bg-purple-100 text-purple-600">
                  {agent.name[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{agent.name}</h3>
                <Badge variant="secondary" className="text-xs">
                  {agent.category}
                </Badge>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">{agent.rating}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{agent.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {agent.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-green-500" />
              <span className="text-sm text-gray-600">
                {agent.price === 0 ? 'Free' : `$${agent.price}/month`}
              </span>
            </div>
            <Button onClick={onClick} size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <MessageCircle className="h-4 w-4 mr-2" />
              Try Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}