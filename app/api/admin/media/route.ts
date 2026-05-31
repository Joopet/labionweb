import { NextRequest, NextResponse } from 'next/server'
import { isAdminRequest, unauthorized } from '@/lib/adminAuth'
import { getSupabaseConfig } from '@/lib/supabaseRest'

export const dynamic = 'force-dynamic'

function safeFileName(name: string) {
  const extension = name.split('.').pop() || 'jpg'
  const base = name
    .replace(new RegExp(`\\.${extension}$`), '')
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, '-')
    .replace(/^-|-$/g, '')
  return `${base || 'labion-image'}-${Date.now()}.${extension}`
}

export async function POST(request: NextRequest) {
  if (!isAdminRequest(request)) return unauthorized()

  const form = await request.formData()
  const file = form.get('file')
  const folder = String(form.get('folder') || 'uploads').replace(/[^a-z0-9/_-]/gi, '')

  if (!(file instanceof File)) {
    return NextResponse.json({ error: '업로드할 파일이 없습니다.' }, { status: 400 })
  }

  const config = getSupabaseConfig()
  const path = `${folder}/${safeFileName(file.name)}`
  const uploadUrl = `${config.url}/storage/v1/object/${config.bucket}/${path}`

  const uploadResponse = await fetch(uploadUrl, {
    method: 'POST',
    headers: {
      apikey: config.key,
      Authorization: `Bearer ${config.key}`,
      'Content-Type': file.type || 'application/octet-stream',
      'x-upsert': 'true',
    },
    body: await file.arrayBuffer(),
    cache: 'no-store',
  })

  if (!uploadResponse.ok) {
    const message = await uploadResponse.text()
    return NextResponse.json({ error: message }, { status: uploadResponse.status })
  }

  const publicUrl = `${config.url}/storage/v1/object/public/${config.bucket}/${path}`
  return NextResponse.json({ path, publicUrl })
}
