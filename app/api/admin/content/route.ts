import { NextRequest, NextResponse } from 'next/server'
import { staticCmsContent } from '@/lib/cmsContent'
import { isAdminRequest, unauthorized } from '@/lib/adminAuth'
import { getSupabaseConfig, supabaseFetch } from '@/lib/supabaseRest'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) return unauthorized()

  try {
    const config = getSupabaseConfig()
    const response = await supabaseFetch(`/rest/v1/${config.table}?id=eq.${encodeURIComponent(config.siteKey)}&select=content&limit=1`, {
      method: 'GET',
    })

    if (!response.ok) {
      const message = await response.text()
      return NextResponse.json({ content: staticCmsContent, source: 'static', warning: message }, { status: 200 })
    }

    const rows = await response.json()
    const content = rows?.[0]?.content
    return NextResponse.json({ content: content || staticCmsContent, source: content ? 'supabase' : 'static' })
  } catch (error) {
    return NextResponse.json({ content: staticCmsContent, source: 'static', warning: error instanceof Error ? error.message : 'load failed' })
  }
}

export async function PUT(request: NextRequest) {
  if (!isAdminRequest(request)) return unauthorized()

  const body = await request.json()
  const content = body?.content

  if (!content) {
    return NextResponse.json({ error: '저장할 content가 없습니다.' }, { status: 400 })
  }

  const config = getSupabaseConfig()
  const response = await supabaseFetch(`/rest/v1/${config.table}?on_conflict=id`, {
    method: 'POST',
    headers: {
      Prefer: 'resolution=merge-duplicates,return=representation',
    },
    body: JSON.stringify({
      id: config.siteKey,
      content,
      updated_at: new Date().toISOString(),
    }),
  })

  if (!response.ok) {
    const message = await response.text()
    return NextResponse.json({ error: message }, { status: response.status })
  }

  return NextResponse.json({ ok: true })
}
