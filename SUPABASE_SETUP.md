# 라비온 홈페이지 Supabase CMS 설정 가이드

이 버전은 `/admin`에서 콘텐츠를 수정하고 Supabase에 저장하면, 홈페이지가 `/api/site-content`를 통해 저장된 콘텐츠를 불러오는 구조입니다.

## 1. Supabase 프로젝트 생성

1. Supabase에서 새 프로젝트를 생성합니다.
2. Project Settings → API에서 아래 값을 확인합니다.
   - Project URL
   - service_role key
3. Storage에서 `labion-media` 버킷을 생성합니다.
   - Public bucket으로 생성해야 홈페이지에서 이미지 URL이 바로 보입니다.

## 2. SQL Editor에서 테이블 생성

Supabase SQL Editor에 아래 SQL을 실행합니다.

```sql
create table if not exists public.site_content (
  id text primary key,
  content jsonb not null,
  updated_at timestamptz default now()
);

alter table public.site_content enable row level security;

-- public read는 막고, Next.js 서버 API에서 service role key로만 접근합니다.
-- 별도 RLS policy를 만들지 않아도 service role은 접근 가능합니다.
```

## 3. Vercel 환경변수 설정

Vercel → Project Settings → Environment Variables에 아래 값을 추가합니다.

```bash
NEXT_PUBLIC_SUPABASE_URL=https://프로젝트아이디.supabase.co
SUPABASE_SERVICE_ROLE_KEY=Supabase service_role key
SUPABASE_CONTENT_TABLE=site_content
SUPABASE_MEDIA_BUCKET=labion-media
SUPABASE_SITE_KEY=labion-homepage
ADMIN_PASSWORD=원하는관리자비밀번호
LABION_ADMIN_TOKEN=원하는관리자비밀번호
```

`SUPABASE_SERVICE_ROLE_KEY`는 절대 브라우저에 노출하면 안 됩니다. 이 프로젝트에서는 서버 API Route에서만 사용합니다.

## 4. 관리자 페이지 사용

1. `/admin` 접속
2. Vercel 환경변수에 넣은 `ADMIN_PASSWORD` 또는 `LABION_ADMIN_TOKEN` 입력
3. 콘텐츠 수정
4. `Supabase에 저장` 클릭
5. 홈페이지 새로고침

## 5. 로컬 실행 시 `.env.local` 예시

```bash
NEXT_PUBLIC_SUPABASE_URL=https://프로젝트아이디.supabase.co
SUPABASE_SERVICE_ROLE_KEY=xxxx
SUPABASE_CONTENT_TABLE=site_content
SUPABASE_MEDIA_BUCKET=labion-media
SUPABASE_SITE_KEY=labion-homepage
ADMIN_PASSWORD=labion-admin
LABION_ADMIN_TOKEN=labion-admin
```

## 주의사항

- 진료 건수, 무사고 일수, 장비 성능 등 신뢰 수치는 반드시 실제 집계 기준이 있는 경우에만 공개하세요.
- 진료케이스는 보호자 동의 및 개인정보 비식별화 후 공개하는 것을 권장합니다.
- 관리자 URL은 검색 노출을 막아두었지만, 운영 시에는 강한 비밀번호와 접근 제한을 권장합니다.
