'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, MessageCircle, Car, Navigation } from 'lucide-react'
import { hospitalInfo } from '@/data/hospitalData'

export default function Location() {
  const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(hospitalInfo.location.address)}`
  const kakaoMapUrl = `https://map.kakao.com/link/search/${encodeURIComponent(hospitalInfo.location.address)}`

  return (
    <section id="location" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#00377b]/10 text-[#00377b] text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
            Location
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            오시는 길
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] rounded-2xl overflow-hidden border border-[#e2e8f0]"
          >
            <iframe
              src={`https://www.google.com/maps?q=${hospitalInfo.location.lat},${hospitalInfo.location.lng}&z=17&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="라비온 동물의료센터 위치"
              className="absolute inset-0"
            />
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Address Card */}
            <div className="bg-[#0f172a] rounded-2xl p-6 text-white">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 flex items-center justify-center bg-[#1da8fc]/20 rounded-xl flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#1da8fc]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">주소</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{hospitalInfo.location.address}</p>
                  <p className="text-white/40 text-xs mt-1">{hospitalInfo.location.addressDetail}</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <a
                  href={naverMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/10 rounded-xl text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  네이버 지도
                </a>
                <a
                  href={kakaoMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/10 rounded-xl text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  카카오맵
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-[#f8fafc] rounded-2xl p-6 border border-[#e2e8f0]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#00377b]/10 rounded-xl flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#00377b]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#0f172a] mb-3">진료시간</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#64748b]">매일</span>
                      <span className="font-medium text-[#0f172a]">{hospitalInfo.hours.weekday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748b]">휴게시간</span>
                      <span className="font-medium text-[#0f172a]">{hospitalInfo.hours.breakTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748b]">접수마감</span>
                      <span className="font-medium text-[#0f172a]">
                        {hospitalInfo.hours.lastReception.morning} / {hospitalInfo.hours.lastReception.afternoon}
                      </span>
                    </div>
                    <div className="pt-2 mt-2 border-t border-[#e2e8f0]">
                      <span className="text-[#1da8fc] font-medium">{hospitalInfo.hours.holiday}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-[#f8fafc] rounded-2xl p-6 border border-[#e2e8f0]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#00377b]/10 rounded-xl flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#00377b]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#0f172a] mb-3">연락처</h3>
                  <div className="space-y-2">
                    <a
                      href={`tel:${hospitalInfo.contact.phone}`}
                      className="flex items-center justify-between text-sm group"
                    >
                      <span className="text-[#64748b]">전화</span>
                      <span className="font-medium text-[#0f172a] group-hover:text-[#1da8fc] transition-colors">{hospitalInfo.contact.phone}</span>
                    </a>
                    <a
                      href={hospitalInfo.contact.kakaoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-sm group"
                    >
                      <span className="text-[#64748b]">카카오톡</span>
                      <span className="font-medium text-[#0f172a] group-hover:text-[#1da8fc] transition-colors flex items-center gap-1">
                        상담하기
                        <MessageCircle className="w-3.5 h-3.5" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking Info */}
            <div className="flex items-center gap-4 px-5 py-4 bg-[#1da8fc]/5 rounded-xl border border-[#1da8fc]/10">
              <Car className="w-5 h-5 text-[#1da8fc]" />
              <div className="text-sm">
                <span className="font-medium text-[#0f172a]">주차 안내</span>
                <span className="text-[#64748b] ml-2">{hospitalInfo.location.parking}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
