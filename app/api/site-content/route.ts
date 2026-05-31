import { NextResponse } from 'next/server'
import { staticCmsContent } from '@/lib/cmsContent'
import { getSupabaseConfig, supabaseFetch } from '@/lib/supabaseRest'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const config = getSupabaseConfig()
    const response = await supabaseFetch(`/rest/v1/${config.table}?id=eq.${encodeURIComponent(config.siteKey)}&select=content&limit=1`, {
      method: 'GET',
    })

    if (!response.ok) {
      return NextResponse.json({ content: staticCmsContent, source: 'static' })
    }

    const rows = await response.json()
    const content = rows?.[0]?.content
    return NextResponse.json({ content: content || staticCmsContent, source: content ? 'supabase' : 'static' })
  } catch {
    return NextResponse.json({ content: staticCmsContent, source: 'static' })
  }
}
