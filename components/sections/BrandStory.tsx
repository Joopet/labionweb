'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BrandStory() {
  const values = [
    {
      id: 1,
      englishTitle: 'Expertise',
      koreanTitle: '전문적인 기술',
      description: '사인은 서울대, 건대 석박사 출신의 전문 수의사이 상주합니다. 도락 더학병원장 정책을 활용하여 정밀하고 정확한 진단을 시행합니다.',
      image: '/images/expertise.jpg',
    },
    {
      id: 2,
      englishTitle: 'Standard',
      koreanTitle: '높은 수준의 기준',
      description: '사인의 의료진은 반려동물의 건전 지유를 위하여 매우 높은 의료 기준을 적용합니다. 정비 도구, 긴급 약품 등 사소한 것 하나도 터칭하지 않겨습니다.',
      image: '/images/standard.jpg',
    },
    {
      id: 3,
      englishTitle: 'Concentration',
      koreanTitle: '집중, 몰입의 개념',
      description: '내과, 외과, 영상의학과, 마취과 각 분야 전문 수의사가 실시간 협진하는 대학병원 수준의 진료시스템으로 운영됩니다. 각 의료진이 자신의 영역에 집중, 몰입할 수 있는 환경을 구축하고 있습니다.',
      image: '/images/concentration.jpg',
    },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-4xl"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0f172a] leading-tight">
            최고의 의료서비스를 통해<br />
            반려동물과 보호자의<br />
            행복한 삶을 만들어갑니다.
          </h2>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={value.image}
                  alt={value.koreanTitle}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="mb-4">
                  <p className="text-sm text-[#64748b] font-medium tracking-wide uppercase mb-1">
                    {value.englishTitle}
                  </p>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-3">
                    {value.koreanTitle}
                  </h3>
                  <div className="w-12 h-1 bg-[#00377b] rounded-full"></div>
                </div>

                <p className="text-base text-[#64748b] leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
