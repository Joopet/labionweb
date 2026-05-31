'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { CmsSiteContent } from '@/lib/cmsContent'

type CmsContextValue = {
  content: CmsSiteContent | null
  isLoading: boolean
}

const CmsContext = createContext<CmsContextValue>({ content: null, isLoading: true })

export function CmsProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<CmsSiteContent | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let ignore = false

    async function loadContent() {
      try {
        const response = await fetch('/api/site-content', { cache: 'no-store' })
        const data = await response.json()
        if (!ignore) setContent(data.content || null)
      } catch {
        if (!ignore) setContent(null)
      } finally {
        if (!ignore) setIsLoading(false)
      }
    }

    loadContent()
    return () => {
      ignore = true
    }
  }, [])

  return <CmsContext.Provider value={{ content, isLoading }}>{children}</CmsContext.Provider>
}

export function useCmsContent() {
  return useContext(CmsContext).content
}
