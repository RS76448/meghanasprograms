'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, Clock, Users, Zap } from 'lucide-react'
import { Agent } from '@/lib/supabase'
import { ChatInterface } from '@/components/chat/ChatInterface'

interface AgentModalProps {
  agent: Agent | null
  isOpen: boolean
  onClose: () => void
}

export function AgentModal({ agent, isOpen, onClose }: AgentModalProps) {
  if (!agent) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={agent.avatar_url} />
              <AvatarFallback className="bg-purple-100 text-purple-600 text-xl">
                {agent.name[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <DialogTitle className="text-2xl font-bold text-gray-900">{agent.name}</DialogTitle>
              <div className="flex items-center space-x-4 mt-2">
                <Badge variant="secondary">{agent.category}</Badge>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{agent.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Zap className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    {agent.price === 0 ? 'Free' : `$${agent.price}/month`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-gray-600">{agent.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {agent.features.map((feature, index) => (
                  <Badge key={index} variant="outline" className="justify-center">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">1.2k users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-green-500" />
                  <span className="text-sm">~1s response</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Try {agent.name}</h3>
            <ChatInterface agent={agent} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}