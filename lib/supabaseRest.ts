const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const CONTENT_TABLE = process.env.SUPABASE_CONTENT_TABLE || 'site_content'
const MEDIA_BUCKET = process.env.SUPABASE_MEDIA_BUCKET || 'labion-media'
const SITE_KEY = process.env.SUPABASE_SITE_KEY || 'labion-homepage'

export function requireSupabaseConfig() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('Supabase 환경변수가 설정되지 않았습니다. NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY를 확인해 주세요.')
  }

  return {
    url: SUPABASE_URL.replace(/\/$/, ''),
    key: SUPABASE_SERVICE_ROLE_KEY,
    table: CONTENT_TABLE,
    bucket: MEDIA_BUCKET,
    siteKey: SITE_KEY,
  }
}

export async function supabaseFetch(path: string, init: RequestInit = {}) {
  const config = requireSupabaseConfig()
  const headers = new Headers(init.headers)
  headers.set('apikey', config.key)
  headers.set('Authorization', `Bearer ${config.key}`)

  if (!(init.body instanceof FormData) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json')
  }

  return fetch(`${config.url}${path}`, {
    ...init,
    headers,
    cache: 'no-store',
  })
}

export function getSupabaseConfig() {
  return requireSupabaseConfig()
}
