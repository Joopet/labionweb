import { caseCards, facilities, homeNotices, hospitalInfo, popup, staff, trustIndicators } from '@/data/hospitalData'

export type CmsNotice = {
  id: string
  badge: string
  title: string
  description: string
  ctaLabel?: string
  ctaUrl?: string
}

export type CmsTrustMetric = {
  id: string
  label: string
  countTo: number
  suffix: string
  status?: string
  description?: string
  value?: string
}

export type CmsCase = {
  id: number
  title: string
  category: string
  animal: string
  summary: string
  note?: string
  image?: string
  steps?: string[]
}

export type CmsFacility = {
  id: number
  title: string
  description: string
  image: string
}

export type CmsStaff = {
  id: number
  name: string
  title: string
  specialty: string
  philosophy: string
  nameEn?: string
  image: string
  credentials?: string[]
}

export type CmsSiteContent = {
  site: {
    name: string
    phone: string
    phoneAlt: string
    kakaoUrl: string
    instagramUrl: string
    naverMap: string
    blog: string
  }
  popup: {
    active: boolean
    badge: string
    title: string
    description: string
    image?: string
    ctaLabel: string
    ctaUrl: string
  }
  notices: CmsNotice[]
  trustMetrics: CmsTrustMetric[]
  cases: CmsCase[]
  facilities: CmsFacility[]
  staff: CmsStaff[]
}

export const staticCmsContent: CmsSiteContent = {
  site: {
    name: hospitalInfo.name,
    phone: hospitalInfo.contact.phone,
    phoneAlt: hospitalInfo.contact.phoneAlt,
    kakaoUrl: hospitalInfo.links.kakaoTalk,
    instagramUrl: hospitalInfo.links.instagram,
    naverMap: hospitalInfo.links.naverMap,
    blog: hospitalInfo.links.blog,
  },
  popup: {
    active: popup.active,
    badge: popup.badge,
    title: popup.title,
    description: popup.description,
    image: popup.image,
    ctaLabel: popup.cta?.label || '자세히 보기',
    ctaUrl: popup.cta?.url || hospitalInfo.links.kakaoTalk,
  },
  notices: homeNotices.map((notice) => ({
    id: notice.id,
    badge: notice.badge,
    title: notice.title,
    description: notice.description,
    ctaLabel: notice.ctaLabel,
    ctaUrl: notice.primaryCta.href,
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
    image: "/images/case-placeholder.jpg",
    steps: item.steps,
  })),
  facilities: facilities.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    image: "/images/case-placeholder.jpg",
  })),
  staff: staff.map((doctor) => ({
    id: doctor.id,
    name: doctor.name,
    title: doctor.title,
    specialty: doctor.specialty,
    nameEn: doctor.nameEn,
    philosophy: doctor.philosophy,
    image: doctor.image,
    credentials: [
    ...doctor.education,
    ...doctor.certifications,
    ...doctor.experience,
    ...doctor.training,
    ],
  })),
}
