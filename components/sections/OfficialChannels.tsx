'use client'

import type { ElementType } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, MapPin, NotebookText, Instagram } from 'lucide-react'
import { channels } from '@/data/hospitalData'
import { useCmsContent } from '@/components/providers/CmsProvider'

const iconMap: Record<string, ElementType> = {
  naverMap: MapPin,
  blog: NotebookText,
  kakao: MessageCircle,
  instagram: Instagram,
}

export default function OfficialChannels() {
  const cms = useCmsContent()
  const site = cms?.site
  const channelItems = channels.map((channel) => {
    if (channel.id === 'naverMap' && site?.naverMap) return { ...channel, href: site.naverMap }
    if (channel.id === 'blog' && site?.blog) return { ...channel, href: site.blog }
    if (channel.id === 'kakao' && site?.kakaoUrl) return { ...channel, href: site.kakaoUrl }
    if (channel.id === 'instagram' && site?.instagramUrl) return { ...channel, href: site.instagramUrl }
    return channel
  })
  return (
    <section id="channels" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.28em] text-[#1da8fc] uppercase mb-3">LABION CHANNEL</p>
          <h2 className="break-keep text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">라비온 공식 채널</h2>
          <p className="break-keep text-[#64748b]">병원 소식, 위치, 상담 안내를 공식 채널에서 확인하세요.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {channelItems.map((channel, index) => {
            const Icon = iconMap[channel.id] || MapPin
            return (
              <motion.a
                key={channel.id}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group rounded-2xl border border-[#e2e8f0] bg-white p-6 hover:border-[#1da8fc]/40 hover:shadow-xl hover:shadow-[#00377b]/5 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#00377b]/8 flex items-center justify-center mb-5 group-hover:bg-[#00377b] transition-colors">
                  <Icon className="w-6 h-6 text-[#00377b] group-hover:text-white transition-colors" />
                </div>
                <h3 className="break-keep text-lg font-bold text-[#0f172a] mb-2">{channel.title}</h3>
                <p className="break-keep text-sm text-[#64748b]">{channel.description}</p>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
