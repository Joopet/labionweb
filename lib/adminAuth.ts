import { NextRequest } from 'next/server'

export function isAdminRequest(request: NextRequest) {
  const expected = process.env.LABION_ADMIN_TOKEN || process.env.ADMIN_PASSWORD
  const provided = request.headers.get('x-labion-admin-token') || request.headers.get('authorization')?.replace(/^Bearer\s+/i, '')

  if (!expected) {
    return false
  }

  return provided === expected
}

export function unauthorized() {
  return Response.json({ error: '관리자 인증이 필요합니다.' }, { status: 401 })
}
