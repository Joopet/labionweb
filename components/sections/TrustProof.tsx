'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Activity, CalendarCheck2, CheckCircle2, ShieldCheck, Stethoscope } from 'lucide-react'
import { trustIndicators, futureTrustMetrics } from '@/data/hospitalData'
import { useCmsContent } from '@/components/providers/CmsProvider'

const icons = [Stethoscope, Activity, ShieldCheck, CalendarCheck2]

type AnimatedCounterProps = {
  value: number
  suffix?: string
  duration?: number
}

function AnimatedCounter({ value, suffix = '', duration = 1200 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let frameId = 0
    const startTime = performance.now()
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    const update = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setDisplayValue(Math.round(value * easeOutCubic(progress)))

      if (progress < 1) frameId = requestAnimationFrame(update)
    }

    frameId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(frameId)
  }, [duration, isInView, value])

  return (
    <span ref={ref}>
      {displayValue.toLocaleString('ko-KR')}
      {suffix}
    </span>
  )
}

export default function TrustProof() {
  const cms = useCmsContent()
  const metrics = cms?.trustMetrics?.length ? cms.trustMetrics : trustIndicators
  return (
    <section id="trust" className="relative z-10 overflow-hidden bg-white py-12 md:py-20">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#eff8ff] to-transparent" />
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 max-w-2xl text-center md:mb-10"
        >
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1da8fc] md:mb-3 md:text-xs">
            LABION TRUST
          </p>
          <h2 className="break-keep text-2xl font-black leading-tight text-[#0f172a] sm:text-3xl md:text-5xl">
            숫자로 확인하는 라비온의 신뢰
          </h2>
          <p className="mx-auto mt-3 max-w-xl break-keep text-xs leading-relaxed text-[#64748b] sm:text-sm md:mt-5 md:text-base">
            라비온이 보호자님께 보여드릴 수 있는 주요 지표를 한눈에 확인하세요.
            <span className="hidden md:inline"> 현재 수치는 시안용 예시이며 실제 데이터 확인 후 교체합니다.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {metrics.map((item, index) => {
            const Icon = icons[index] || CheckCircle2
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group relative overflow-hidden rounded-2xl border border-[#dbeafe] bg-white p-4 shadow-sm shadow-[#00377b]/5 transition-all hover:-translate-y-1 hover:border-[#1da8fc]/50 hover:shadow-2xl hover:shadow-[#00377b]/10 sm:p-5 md:rounded-3xl md:p-6"
              >
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#1da8fc]/10 transition-transform group-hover:scale-125 md:h-28 md:w-28" />
                <div className="relative mb-3 flex items-center justify-between gap-2 md:mb-5 md:gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00377b] shadow-lg shadow-[#00377b]/20 md:h-12 md:w-12 md:rounded-2xl">
                    <Icon className="h-5 w-5 text-white md:h-6 md:w-6" />
                  </div>
                  <span className="rounded-full border border-[#dbeafe] bg-[#eff8ff] px-2 py-0.5 text-[9px] font-semibold text-[#00377b] md:px-3 md:py-1 md:text-[11px]">
                    {item.status}
                  </span>
                </div>
                <p className="break-keep text-xs font-semibold text-[#64748b] md:mb-2 md:text-sm">{item.label}</p>
                <p className="break-keep mt-1 text-2xl font-black tracking-tight text-[#00377b] sm:text-3xl md:mb-4 md:text-5xl">
                  {typeof item.countTo === 'number' ? (
                    <AnimatedCounter value={item.countTo} suffix={item.suffix} />
                  ) : (
                    item.value
                  )}
                </p>
                <p className="mt-2 hidden break-keep text-sm leading-relaxed text-[#64748b] md:block">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-4 rounded-2xl border border-dashed border-[#1da8fc]/35 bg-[#eff8ff] px-4 py-3 md:mt-6 md:px-5 md:py-4">
          <p className="break-keep text-xs leading-relaxed text-[#475569] md:text-sm">
            <span className="font-semibold text-[#00377b]">운영 전 확인 필요:</span>{' '}
            현재 숫자는 홈페이지 시안용 임시 수치입니다. {futureTrustMetrics.map((item) => item.label).join(' · ')} 등은
            실제 기준이 확정된 데이터만 공개하는 것을 권장합니다.
          </p>
        </div>
      </div>
    </section>
  )
}
