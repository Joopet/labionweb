'use client'

import { ChangeEvent, useMemo, useState } from 'react'
import Image from 'next/image'
import {
  AlertTriangle,
  CalendarDays,
  Check,
  Clipboard,
  Download,
  FileJson,
  ImagePlus,
  Info,
  Lock,
  Megaphone,
  Plus,
  ShieldCheck,
  Trash2,
  Upload,
} from 'lucide-react'
import { caseCards, facilities, homeNotices, hospitalInfo, staff, trustIndicators } from '@/data/hospitalData'
import { cn } from '@/lib/utils'

type AdminTab = 'notice' | 'trust' | 'cases' | 'media' | 'staff' | 'export'

type ManagedNotice = {
  id: string
  badge: string
  title: string
  description: string
  ctaLabel: string
  ctaUrl?: string
}

type ManagedTrustMetric = {
  id: string
  label: string
  countTo: number
  suffix: string
  status: string
  description: string
}

type ManagedCase = {
  id: number
  title: string
  category: string
  animal: string
  summary: string
  note: string
  steps?: string[]
  image?: string
}

type ManagedFacility = {
  id: number
  title: string
  description: string
  image: string
  preview?: string
  fileName?: string
}

type ManagedStaff = {
  id: number
  name: string
  title: string
  specialty: string
  philosophy: string
  image: string
  preview?: string
  fileName?: string
}

type AdminContent = {
  site: {
    name: string
    phone: string
    phoneAlt: string
    kakaoUrl: string
    instagramUrl: string
    naverMap: string
    blog: string
  }
  notices: ManagedNotice[]
  trustMetrics: ManagedTrustMetric[]
  cases: ManagedCase[]
  facilities: ManagedFacility[]
  staff: ManagedStaff[]
}

const tabs: Array<{ id: AdminTab; label: string; icon: typeof Megaphone }> = [
  { id: 'notice', label: '공지·팝업', icon: Megaphone },
  { id: 'trust', label: '신뢰 지표', icon: ShieldCheck },
  { id: 'cases', label: '진료케이스', icon: FileJson },
  { id: 'media', label: '이미지 관리', icon: ImagePlus },
  { id: 'staff', label: '의료진', icon: Upload },
  { id: 'export', label: '내보내기', icon: Download },
]

const initialContent: AdminContent = {
  site: {
    name: hospitalInfo.name,
    phone: hospitalInfo.contact.phone,
    phoneAlt: hospitalInfo.contact.phoneAlt,
    kakaoUrl: hospitalInfo.links.kakaoTalk,
    instagramUrl: hospitalInfo.links.instagram,
    naverMap: hospitalInfo.links.naverMap,
    blog: hospitalInfo.links.blog,
  },
  notices: homeNotices.map((notice) => ({
    id: notice.id,
    badge: notice.badge,
    title: notice.title,
    description: notice.description,
    ctaLabel: notice.ctaLabel,
  })),
  trustMetrics: trustIndicators.map((metric) => ({
    id: metric.id,
    label: metric.label,
    countTo: metric.countTo,
    suffix: metric.suffix,
    status: metric.status,
    description: metric.description,
  })),
  cases: caseCards.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    animal: item.animal,
    summary: item.summary,
    note: item.note,
    steps: item.steps,
    image: "/images/case-placeholder.jpg",
  })),
  facilities: facilities.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    image: item.image,
  })),
  staff: staff.map((doctor) => ({
    id: doctor.id,
    name: doctor.name,
    title: doctor.title,
    specialty: doctor.specialty,
    philosophy: doctor.philosophy,
    image: doctor.image,
  })),
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  multiline = false,
}: {
  label: string
  value: string | number
  onChange: (value: string) => void
  placeholder?: string
  type?: string
  multiline?: boolean
}) {
  return (
    <label className="block space-y-2">
      <span className="break-keep text-sm font-bold text-[#00377b]">{label}</span>
      {multiline ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          rows={4}
          className="w-full resize-none rounded-2xl border border-[#dbe4ef] bg-white px-4 py-3 text-sm leading-relaxed text-[#0f172a] outline-none transition focus:border-[#1da8fc] focus:ring-4 focus:ring-[#1da8fc]/10"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-[#dbe4ef] bg-white px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:border-[#1da8fc] focus:ring-4 focus:ring-[#1da8fc]/10"
        />
      )}
    </label>
  )
}

function AdminCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return <section className={cn('rounded-[28px] border border-[#dbe4ef] bg-white p-5 shadow-sm md:p-7', className)}>{children}</section>
}

function makeSafeFileName(name: string) {
  const extension = name.split('.').pop() || 'jpg'
  const base = name.replace(`.${extension}`, '').toLowerCase().replace(/[^a-z0-9가-힣]+/g, '-').replace(/^-|-$/g, '')
  return `${base || 'labion-image'}.${extension}`
}

export default function AdminDashboard() {
  const [password, setPassword] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [activeTab, setActiveTab] = useState<AdminTab>('notice')
  const [content, setContent] = useState<AdminContent>(initialContent)
  const [copied, setCopied] = useState(false)
  const [adminToken, setAdminToken] = useState('')
  const [remoteStatus, setRemoteStatus] = useState('Supabase 연결 전입니다.')
  const [saveStatus, setSaveStatus] = useState('')
  const [isSaving, setIsSaving] = useState(false)

  const exportJson = useMemo(() => JSON.stringify(content, null, 2), [content])

  const updateSiteField = (field: keyof AdminContent['site'], value: string) => {
    setContent((prev) => ({ ...prev, site: { ...prev.site, [field]: value } }))
  }


  const loadFromCms = async (token: string) => {
    setRemoteStatus('Supabase 콘텐츠를 불러오는 중입니다...')
    try {
      const response = await fetch('/api/admin/content', {
        headers: { 'x-labion-admin-token': token },
        cache: 'no-store',
      })
      const data = await response.json()

      if (!response.ok) {
        setRemoteStatus(data.error || 'Supabase 콘텐츠를 불러오지 못했습니다.')
        return
      }

      if (data.content) {
        setContent((prev) => ({ ...prev, ...data.content }))
        setRemoteStatus(data.source === 'supabase' ? 'Supabase에 저장된 콘텐츠를 불러왔습니다.' : '저장된 콘텐츠가 없어 기본 데이터를 사용합니다.')
      }
    } catch (error) {
      setRemoteStatus(error instanceof Error ? error.message : 'Supabase 콘텐츠 로드 중 오류가 발생했습니다.')
    }
  }

  const saveToCms = async () => {
    if (!adminToken) {
      setSaveStatus('관리자 인증 후 저장할 수 있습니다.')
      return
    }

    setIsSaving(true)
    setSaveStatus('Supabase에 저장 중입니다...')
    try {
      const response = await fetch('/api/admin/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-labion-admin-token': adminToken,
        },
        body: JSON.stringify({ content }),
      })
      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        setSaveStatus(data.error || '저장에 실패했습니다.')
        return
      }

      setSaveStatus('저장 완료! 홈페이지 새로고침 시 반영됩니다.')
    } catch (error) {
      setSaveStatus(error instanceof Error ? error.message : '저장 중 오류가 발생했습니다.')
    } finally {
      setIsSaving(false)
    }
  }

  const uploadMedia = async (file: File, folder: string) => {
    if (!adminToken) return null

    const form = new FormData()
    form.append('file', file)
    form.append('folder', folder)

    const response = await fetch('/api/admin/media', {
      method: 'POST',
      headers: { 'x-labion-admin-token': adminToken },
      body: form,
    })

    const data = await response.json().catch(() => ({}))
    if (!response.ok) {
      setSaveStatus(data.error || '이미지 업로드에 실패했습니다.')
      return null
    }

    setSaveStatus('이미지 업로드 완료. 저장 버튼을 눌러 콘텐츠에 반영해 주세요.')
    return data.publicUrl as string
  }

  const handleUnlock = () => {
    // 운영 전 임시 보호용입니다. 실제 운영 시에는 Vercel 환경변수 ADMIN_PASSWORD 또는 LABION_ADMIN_TOKEN과 동일한 값을 사용합니다.
    const token = password.trim()
    if (token === 'labion-admin' || token === 'labion2026' || token.length >= 8) {
      setAdminToken(token)
      setIsUnlocked(true)
      loadFromCms(token)
    }
  }

  const copyJson = async () => {
    await navigator.clipboard.writeText(exportJson)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  const downloadJson = () => {
    const blob = new Blob([exportJson], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `labion-content-${new Date().toISOString().slice(0, 10)}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const handleFacilityImage = (id: number, event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    uploadMedia(file, 'facilities').then((publicUrl) => {
      if (!publicUrl) return
      setContent((prev) => ({
        ...prev,
        facilities: prev.facilities.map((facility) =>
          facility.id === id ? { ...facility, image: publicUrl } : facility
        ),
      }))
    })

    const reader = new FileReader()
    reader.onload = () => {
      const safeFile = makeSafeFileName(file.name)
      setContent((prev) => ({
        ...prev,
        facilities: prev.facilities.map((facility) =>
          facility.id === id
            ? {
                ...facility,
                preview: String(reader.result),
                fileName: safeFile,
              }
            : facility
        ),
      }))
    }
    reader.readAsDataURL(file)
  }

  const handleStaffImage = (id: number, event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    uploadMedia(file, 'staff').then((publicUrl) => {
      if (!publicUrl) return
      setContent((prev) => ({
        ...prev,
        staff: prev.staff.map((doctor) =>
          doctor.id === id ? { ...doctor, image: publicUrl } : doctor
        ),
      }))
    })

    const reader = new FileReader()
    reader.onload = () => {
      const safeFile = makeSafeFileName(file.name)
      setContent((prev) => ({
        ...prev,
        staff: prev.staff.map((doctor) =>
          doctor.id === id
            ? {
                ...doctor,
                preview: String(reader.result),
                fileName: safeFile,
              }
            : doctor
        ),
      }))
    }
    reader.readAsDataURL(file)
  }

  if (!isUnlocked) {
    return (
      <div className="container-custom flex min-h-[70vh] items-center justify-center">
        <AdminCard className="w-full max-w-xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00377b] text-white">
            <Lock className="h-7 w-7" />
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm font-bold tracking-[0.28em] text-[#1da8fc]">LABION ADMIN</p>
            <h1 className="mt-3 break-keep text-3xl font-extrabold text-[#00377b]">홈페이지 유지보수 페이지</h1>
            <p className="mt-3 break-keep text-sm leading-relaxed text-[#64748b]">
              운영 전 콘텐츠를 정리하고 이미지 경로를 준비하는 관리자 페이지입니다. 임시 비밀번호를 입력해 주세요.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <Field label="관리자 비밀번호" value={password} onChange={setPassword} type="password" placeholder="labion-admin" />
            <button
              type="button"
              onClick={handleUnlock}
              className="w-full rounded-2xl bg-[#00377b] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#1da8fc]"
            >
              관리자 페이지 열기
            </button>
            <div className="rounded-2xl bg-[#fff7ed] p-4 text-xs leading-relaxed text-[#9a3412]">
              <strong>안내:</strong> 이 비밀번호는 프론트엔드 임시 보호용입니다. 실제 운영 시에는 Vercel/Supabase/Auth.js 등 서버 기반 인증을 적용해야 합니다.
            </div>
          </div>
        </AdminCard>
      </div>
    )
  }

  return (
    <div className="container-custom">
      <div className="mb-8 grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="text-sm font-bold tracking-[0.28em] text-[#1da8fc]">LABION ADMIN</p>
          <h1 className="mt-3 break-keep text-3xl font-extrabold text-[#00377b] md:text-5xl">홈페이지 콘텐츠 유지보수</h1>
          <p className="mt-4 max-w-3xl break-keep text-base leading-relaxed text-[#64748b]">
            공지, 신뢰 지표, 진료케이스, 의료진, 시설 이미지를 한곳에서 정리하는 페이지입니다. 현재 버전은 운영 전 관리용으로,
            변경사항은 JSON으로 내보낸 뒤 <code className="rounded bg-[#eef6ff] px-1.5 py-0.5 text-[#00377b]">data/hospitalData.ts</code>에 반영하는 방식입니다.
          </p>
        </div>
        <div className="rounded-[24px] border border-[#bfdbfe] bg-[#eff6ff] p-5">
          <div className="flex gap-3">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1da8fc]" />
            <div>
              <h2 className="break-keep text-sm font-extrabold text-[#00377b]">실제 업로드 반영 방식</h2>
              <p className="mt-2 break-keep text-sm leading-relaxed text-[#475569]">
                이미지는 Supabase Storage에 업로드되고, 콘텐츠는 Supabase DB에 저장됩니다. 저장 후 운영 페이지를 새로고침하면 반영됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8 rounded-[24px] border border-[#bfdbfe] bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="break-keep text-sm font-bold text-[#00377b]">{remoteStatus}</p>
            {saveStatus && <p className="mt-1 break-keep text-xs leading-relaxed text-[#64748b]">{saveStatus}</p>}
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => loadFromCms(adminToken)}
              className="rounded-2xl border border-[#dbe4ef] bg-white px-5 py-3 text-sm font-bold text-[#00377b] hover:bg-[#f8fbff]"
            >
              Supabase에서 다시 불러오기
            </button>
            <button
              type="button"
              onClick={saveToCms}
              disabled={isSaving}
              className="rounded-2xl bg-[#00377b] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1da8fc] disabled:opacity-60"
            >
              {isSaving ? '저장 중...' : 'Supabase에 저장'}
            </button>
          </div>
        </div>
      </div>

      <div className="sticky top-20 z-30 mb-8 overflow-x-auto rounded-3xl border border-[#dbe4ef] bg-white/95 p-2 shadow-sm backdrop-blur-md">
        <div className="flex min-w-max gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold transition',
                  activeTab === tab.id ? 'bg-[#00377b] text-white shadow-md shadow-[#00377b]/20' : 'text-[#475569] hover:bg-[#f1f5f9] hover:text-[#00377b]'
                )}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="space-y-6">
        {activeTab === 'notice' && (
          <AdminCard>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold tracking-[0.24em] text-[#1da8fc]">NOTICE</p>
                <h2 className="mt-2 break-keep text-2xl font-extrabold text-[#00377b]">공지·팝업 관리</h2>
                <p className="mt-2 break-keep text-sm text-[#64748b]">6월 진료일정, 이벤트, 팝업 문구를 수정할 수 있습니다.</p>
              </div>
              <button
                type="button"
                onClick={() =>
                  setContent((prev) => ({
                    ...prev,
                    notices: [
                      ...prev.notices,
                      {
                        id: `notice-${Date.now()}`,
                        badge: '공지',
                        title: '새 공지 제목',
                        description: '공지 내용을 입력해 주세요.',
                        ctaLabel: '자세히 보기',
                      },
                    ],
                  }))
                }
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#00377b] px-4 py-3 text-sm font-bold text-white hover:bg-[#1da8fc]"
              >
                <Plus className="h-4 w-4" />
                공지 추가
              </button>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {content.notices.map((notice, index) => (
                <div key={notice.id} className="rounded-3xl border border-[#dbe4ef] bg-[#f8fbff] p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#00377b]">공지 {index + 1}</span>
                    <button
                      type="button"
                      onClick={() => setContent((prev) => ({ ...prev, notices: prev.notices.filter((item) => item.id !== notice.id) }))}
                      className="rounded-full p-2 text-[#ef4444] hover:bg-white"
                      aria-label="공지 삭제"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <Field label="배지" value={notice.badge} onChange={(value) => setContent((prev) => ({ ...prev, notices: prev.notices.map((item) => item.id === notice.id ? { ...item, badge: value } : item) }))} />
                    <Field label="제목" value={notice.title} onChange={(value) => setContent((prev) => ({ ...prev, notices: prev.notices.map((item) => item.id === notice.id ? { ...item, title: value } : item) }))} />
                    <Field label="설명" value={notice.description} multiline onChange={(value) => setContent((prev) => ({ ...prev, notices: prev.notices.map((item) => item.id === notice.id ? { ...item, description: value } : item) }))} />
                    <Field label="버튼 문구" value={notice.ctaLabel} onChange={(value) => setContent((prev) => ({ ...prev, notices: prev.notices.map((item) => item.id === notice.id ? { ...item, ctaLabel: value } : item) }))} />
                  </div>
                </div>
              ))}
            </div>
          </AdminCard>
        )}

        {activeTab === 'trust' && (
          <AdminCard>
            <p className="text-sm font-bold tracking-[0.24em] text-[#1da8fc]">TRUST METRICS</p>
            <h2 className="mt-2 break-keep text-2xl font-extrabold text-[#00377b]">숫자로 확인하는 라비온의 신뢰</h2>
            <p className="mt-2 break-keep text-sm leading-relaxed text-[#64748b]">누적 진료 건수, 건강검진 횟수, 안전 운영 일수 등은 실제 집계 기준이 확정된 수치만 공개하는 것을 권장합니다.</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {content.trustMetrics.map((metric) => (
                <div key={metric.id} className="rounded-3xl border border-[#dbe4ef] p-5">
                  <div className="grid grid-cols-[1fr_110px_70px] gap-3">
                    <Field label="항목명" value={metric.label} onChange={(value) => setContent((prev) => ({ ...prev, trustMetrics: prev.trustMetrics.map((item) => item.id === metric.id ? { ...item, label: value } : item) }))} />
                    <Field label="숫자" value={metric.countTo} type="number" onChange={(value) => setContent((prev) => ({ ...prev, trustMetrics: prev.trustMetrics.map((item) => item.id === metric.id ? { ...item, countTo: Number(value) || 0 } : item) }))} />
                    <Field label="단위" value={metric.suffix} onChange={(value) => setContent((prev) => ({ ...prev, trustMetrics: prev.trustMetrics.map((item) => item.id === metric.id ? { ...item, suffix: value } : item) }))} />
                  </div>
                  <div className="mt-4 space-y-4">
                    <Field label="상태" value={metric.status} onChange={(value) => setContent((prev) => ({ ...prev, trustMetrics: prev.trustMetrics.map((item) => item.id === metric.id ? { ...item, status: value } : item) }))} />
                    <Field label="설명" value={metric.description} multiline onChange={(value) => setContent((prev) => ({ ...prev, trustMetrics: prev.trustMetrics.map((item) => item.id === metric.id ? { ...item, description: value } : item) }))} />
                  </div>
                </div>
              ))}
            </div>
          </AdminCard>
        )}

        {activeTab === 'cases' && (
          <AdminCard>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold tracking-[0.24em] text-[#1da8fc]">MEDICAL CASES</p>
                <h2 className="mt-2 break-keep text-2xl font-extrabold text-[#00377b]">진료케이스 콘텐츠 관리</h2>
                <p className="mt-2 break-keep text-sm text-[#64748b]">실제 케이스 공개 시 보호자 동의와 개인정보 비식별화가 필요합니다.</p>
              </div>
              <button
                type="button"
                onClick={() =>
                  setContent((prev) => ({
                    ...prev,
                    cases: [
                      ...prev.cases,
                      {
                        id: Date.now(),
                        title: '새 진료케이스 제목',
                        category: '진료 분야',
                        animal: '강아지·고양이',
                        summary: '케이스 요약을 입력해 주세요.',
                        note: '실제 공개 전 보호자 동의 및 비식별 처리가 필요합니다.',
                      },
                    ],
                  }))
                }
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#00377b] px-4 py-3 text-sm font-bold text-white hover:bg-[#1da8fc]"
              >
                <Plus className="h-4 w-4" />
                케이스 추가
              </button>
            </div>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {content.cases.map((item) => (
                <div key={item.id} className="rounded-3xl border border-[#dbe4ef] bg-white p-5 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-[#eef6ff] px-3 py-1 text-xs font-bold text-[#00377b]">{item.category}</span>
                    <button
                      type="button"
                      onClick={() => setContent((prev) => ({ ...prev, cases: prev.cases.filter((caseItem) => caseItem.id !== item.id) }))}
                      className="rounded-full p-2 text-[#ef4444] hover:bg-[#fef2f2]"
                      aria-label="케이스 삭제"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <Field label="제목" value={item.title} onChange={(value) => setContent((prev) => ({ ...prev, cases: prev.cases.map((caseItem) => caseItem.id === item.id ? { ...caseItem, title: value } : caseItem) }))} />
                    <div className="grid gap-4 md:grid-cols-2">
                      <Field label="분야" value={item.category} onChange={(value) => setContent((prev) => ({ ...prev, cases: prev.cases.map((caseItem) => caseItem.id === item.id ? { ...caseItem, category: value } : caseItem) }))} />
                      <Field label="대상" value={item.animal} onChange={(value) => setContent((prev) => ({ ...prev, cases: prev.cases.map((caseItem) => caseItem.id === item.id ? { ...caseItem, animal: value } : caseItem) }))} />
                    </div>
                    <Field label="요약" value={item.summary} multiline onChange={(value) => setContent((prev) => ({ ...prev, cases: prev.cases.map((caseItem) => caseItem.id === item.id ? { ...caseItem, summary: value } : caseItem) }))} />
                    <Field label="주의 문구" value={item.note} multiline onChange={(value) => setContent((prev) => ({ ...prev, cases: prev.cases.map((caseItem) => caseItem.id === item.id ? { ...caseItem, note: value } : caseItem) }))} />
                  </div>
                </div>
              ))}
            </div>
          </AdminCard>
        )}

        {activeTab === 'media' && (
          <AdminCard>
            <p className="text-sm font-bold tracking-[0.24em] text-[#1da8fc]">MEDIA</p>
            <h2 className="mt-2 break-keep text-2xl font-extrabold text-[#00377b]">시설·장비 이미지 관리</h2>
            <p className="mt-2 break-keep text-sm leading-relaxed text-[#64748b]">
              이미지를 선택하면 미리보기와 추천 저장 경로가 생성됩니다. 실제 반영 시 해당 파일을 <strong>public/images/facilities</strong> 폴더에 넣어 주세요.
            </p>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {content.facilities.map((item) => (
                <div key={item.id} className="rounded-3xl border border-[#dbe4ef] p-5">
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-2xl bg-[#eef6ff]">
                    {item.preview ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={item.preview} alt={`${item.title} 미리보기`} className="h-full w-full object-cover" />
                    ) : item.image ? (
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center text-[#00377b]">
                        <ImagePlus className="h-10 w-10" />
                        <span className="mt-2 text-sm font-bold">이미지 준비 중</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-4">
                    <Field label="시설명" value={item.title} onChange={(value) => setContent((prev) => ({ ...prev, facilities: prev.facilities.map((facility) => facility.id === item.id ? { ...facility, title: value } : facility) }))} />
                    <Field label="설명" value={item.description} multiline onChange={(value) => setContent((prev) => ({ ...prev, facilities: prev.facilities.map((facility) => facility.id === item.id ? { ...facility, description: value } : facility) }))} />
                    <label className="block">
                      <span className="mb-2 block break-keep text-sm font-bold text-[#00377b]">이미지 선택</span>
                      <input type="file" accept="image/*" onChange={(event) => handleFacilityImage(item.id, event)} className="w-full rounded-2xl border border-dashed border-[#bfdbfe] bg-[#f8fbff] p-4 text-sm" />
                    </label>
                    {item.fileName && (
                      <div className="rounded-2xl bg-[#f8fbff] p-4 text-xs leading-relaxed text-[#475569]">
                        추천 경로: <strong className="text-[#00377b]">public/images/facilities/{item.fileName}</strong>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AdminCard>
        )}

        {activeTab === 'staff' && (
          <AdminCard>
            <p className="text-sm font-bold tracking-[0.24em] text-[#1da8fc]">STAFF</p>
            <h2 className="mt-2 break-keep text-2xl font-extrabold text-[#00377b]">의료진 콘텐츠 관리</h2>
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {content.staff.map((doctor) => (
                <div key={doctor.id} className="rounded-3xl border border-[#dbe4ef] bg-white p-5 shadow-sm">
                  <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-[#00377b] to-[#1da8fc]">
                    {doctor.preview ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={doctor.preview} alt={`${doctor.name} 미리보기`} className="h-full w-full object-cover" />
                    ) : doctor.image ? (
                      <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center text-white">
                        <span className="text-4xl font-extrabold">{doctor.name.slice(0, 1)}</span>
                        <span className="mt-2 text-sm font-bold">사진 준비 중</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-4">
                    <Field label="이름" value={doctor.name} onChange={(value) => setContent((prev) => ({ ...prev, staff: prev.staff.map((item) => item.id === doctor.id ? { ...item, name: value } : item) }))} />
                    <Field label="직책" value={doctor.title} onChange={(value) => setContent((prev) => ({ ...prev, staff: prev.staff.map((item) => item.id === doctor.id ? { ...item, title: value } : item) }))} />
                    <Field label="주 진료 분야" value={doctor.specialty} onChange={(value) => setContent((prev) => ({ ...prev, staff: prev.staff.map((item) => item.id === doctor.id ? { ...item, specialty: value } : item) }))} />
                    <Field label="진료 철학" value={doctor.philosophy} multiline onChange={(value) => setContent((prev) => ({ ...prev, staff: prev.staff.map((item) => item.id === doctor.id ? { ...item, philosophy: value } : item) }))} />
                    <label className="block">
                      <span className="mb-2 block break-keep text-sm font-bold text-[#00377b]">프로필 사진 선택</span>
                      <input type="file" accept="image/*" onChange={(event) => handleStaffImage(doctor.id, event)} className="w-full rounded-2xl border border-dashed border-[#bfdbfe] bg-[#f8fbff] p-4 text-sm" />
                    </label>
                    {doctor.fileName && (
                      <div className="rounded-2xl bg-[#f8fbff] p-4 text-xs leading-relaxed text-[#475569]">
                        추천 경로: <strong className="text-[#00377b]">public/images/staff/{doctor.fileName}</strong>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AdminCard>
        )}

        {activeTab === 'export' && (
          <AdminCard>
            <p className="text-sm font-bold tracking-[0.24em] text-[#1da8fc]">EXPORT</p>
            <h2 className="mt-2 break-keep text-2xl font-extrabold text-[#00377b]">변경사항 내보내기</h2>
            <p className="mt-2 break-keep text-sm leading-relaxed text-[#64748b]">
              현재 관리자 페이지에서 수정한 내용은 브라우저 화면 안에서만 관리됩니다. 운영 사이트에 반영하려면 아래 JSON을 기준으로
              <strong> data/hospitalData.ts</strong>를 수정하고 GitHub에 push해야 합니다.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Field label="대표 전화번호" value={content.site.phone} onChange={(value) => updateSiteField('phone', value)} />
              <Field label="카카오톡 URL" value={content.site.kakaoUrl} onChange={(value) => updateSiteField('kakaoUrl', value)} />
              <Field label="인스타그램 URL" value={content.site.instagramUrl} onChange={(value) => updateSiteField('instagramUrl', value)} />
              <Field label="네이버 지도 URL" value={content.site.naverMap} onChange={(value) => updateSiteField('naverMap', value)} />
            </div>

            <div className="mt-6 flex flex-col gap-3 md:flex-row">
              <button
                type="button"
                onClick={copyJson}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#00377b] px-5 py-4 text-sm font-bold text-white hover:bg-[#1da8fc]"
              >
                {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                {copied ? '복사 완료' : 'JSON 복사하기'}
              </button>
              <button
                type="button"
                onClick={downloadJson}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#dbe4ef] bg-white px-5 py-4 text-sm font-bold text-[#00377b] hover:bg-[#f8fbff]"
              >
                <Download className="h-4 w-4" />
                JSON 파일 다운로드
              </button>
            </div>

            <pre className="mt-6 max-h-[520px] overflow-auto rounded-3xl bg-[#0f172a] p-5 text-xs leading-relaxed text-[#dbeafe]">
              {exportJson}
            </pre>

            <div className="mt-6 rounded-3xl border border-[#fed7aa] bg-[#fff7ed] p-5">
              <div className="flex gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#f97316]" />
                <div>
                  <h3 className="break-keep text-sm font-extrabold text-[#9a3412]">운영 자동 반영을 원할 경우</h3>
                  <p className="mt-2 break-keep text-sm leading-relaxed text-[#9a3412]">
                    이 관리자 페이지에서 바로 사이트에 저장하려면 Supabase Storage, Cloudinary, Sanity, 또는 GitHub API 기반 CMS 연동이 필요합니다. 현재 버전은 안전한 1차 관리 화면으로, 실제 파일 저장은 직접 반영 방식입니다.
                  </p>
                </div>
              </div>
            </div>
          </AdminCard>
        )}
      </div>
    </div>
  )
}
