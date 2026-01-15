'use client'

import { useEffect } from 'react'

interface ChatbotWidgetProps {
  workflowId: string
  theme?: 'deforge-light' | 'deforge-dark'
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
}

export default function ChatbotWidget({ 
  workflowId, 
  theme = 'deforge-light', 
  position = 'bottom-right' 
}: ChatbotWidgetProps) {
  useEffect(() => {
    // Load the script dynamically
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/deforge-widget/chatbot.min.js'
    script.async = true
    
    script.onload = () => {
      // Initialize widget after script loads
      if (typeof window !== 'undefined' && (window as any).ChatbotWidget) {
        new (window as any).ChatbotWidget({
          workflowId,
          theme,
          position
        })
      }
    }
    
    document.head.appendChild(script)
    
    // Cleanup
    return () => {
      document.head.removeChild(script)
    }
  }, [workflowId, theme, position])

  return null // Widget renders itself
}