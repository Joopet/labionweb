// 팝업 공지 설정
// active: true 로 바꾸면 첫 화면에 팝업이 표시됩니다
export const popup = {
  active: true,
  badge: '공지사항',                         // 상단 배지 텍스트 (예: '이벤트', '공지사항', '휴진안내')
  title: '라비온 동물의료센터\n진료 개시 안내',  // \n 으로 줄바꿈 가능
  description:
    '라비온 동물의료센터가 안산 고잔동에 새롭게 문을 열었습니다.\n' +
    '내과·외과·예방의학 전문 의료진이 반려동물의 건강을 위해 최선을 다하겠습니다.',
  image: '',                                 // 이미지 경로 (비워두면 텍스트만 표시)
  cta: {
    label: '카카오톡으로 문의하기',
    url: 'https://pf.kakao.com/_xfLxgxj',
  },
  closable: true,                            // 닫기 버튼 표시 여부
  doNotShowTodayOption: true,                // "오늘 하루 보지 않기" 옵션 표시 여부
}

export const hospitalInfo = {
  name: '라비온동물의료센터',
  nameEn: 'La Bion Animal Medical Center',
  slogan: '사랑(Love), 동물(Animal), 생명(Bio) 그리고 따스한 온기 속에 피어나는 믿음',
  philosophy: '내 가족을 진료한다는 마음으로',
  
  // 대표 및 사업자 정보
  ceo: '하종수',
  businessRegistration: '396-01-03507',
  
  contact: {
    phone: '0507-1381-2786',
    phoneAlt: '031-8042-6788',
    kakao: '라비온 동물의료센터',
    kakaoUrl: 'https://pf.kakao.com/_xfLxgxj',
    blog: 'https://blog.naver.com/labionamc',
  },
  
  location: {
    address: '경기 안산시 단원구 광덕3로 178 209호',
    addressDetail: '고잔동, 화승타운',
    lat: 37.3176,
    lng: 126.8286,
    parking: '건물 내 주차 가능',
  },
  
  hours: {
    weekday: '10:00 - 20:00',
    weekend: '10:00 - 20:00',
    holiday: '연중무휴',
    breakTime: '13:00 - 14:00',
    lastReception: {
      morning: '12:30',
      afternoon: '19:30',
    },
    note: '매일 10:00 - 20:00 (연중무휴)',
  },
  
  brandMeaning: [
    { letter: 'L', word: 'Love', meaning: '사랑', description: '반려동물을 향한 무한한 사랑' },
    { letter: 'A', word: 'Animal', meaning: '동물', description: '모든 동물의 생명을 소중히' },
    { letter: 'Bio', word: 'Bio', meaning: '생명', description: '생명의 가치를 존중하는 의료' },
    { letter: 'On', word: 'On', meaning: '온기', description: '따스한 온기로 치유하는 공간' },
  ],
}

export const staff = [
  {
    id: 1,
    name: '하종수',
    nameEn: 'Jongsu Ha',
    title: '대표원장',
    specialty: '심장/내과 전문',
    image: '', // TODO: 실제 사진으로 교체
    education: [
      '충남대학교 수의과대학 수의학과 졸업',
    ],
    certifications: [
      '한국수의심장협회(KAVC) 정회원',
    ],
    experience: [
      '라비온 동물의료센터 대표원장',
      '충청북도청 공중방역수의사 검사관',
      '24시 D 동물병원 수의사',
      '24시 A 동물병원 수의사',
    ],
    training: [
      '서울대학교 최민철 교수 심장초음파 실기 수료',
      'GE Healthcare Cardiac Sonography Hands On',
      '해마루 2차 동물병원 임상수의학 기본과정 수료',
      '2025 경기 수의 컨퍼런스',
      '24시 청담우리 동물병원 임상로테이션',
      '강남 레이동물병원 임상로테이션',
      '충남대학교 동물병원 임상로테이션',
    ],
  },
  {
    id: 2,
    name: '김승남',
    nameEn: 'Seungnam Kim',
    title: '내과원장',
    specialty: '내과/응급중환자 전문',
    image: '', // TODO: 실제 사진으로 교체
    education: [
      '충남대학교 수의과대학 수의학과 졸업',
      '전북대학교 수의과대학 수의내과학 석사 졸업',
    ],
    certifications: [
      'VECC 국제수의응급중환자학회 정회원',
    ],
    experience: [
      '라비온 동물의료센터 내과원장',
    ],
    training: [
      '2025 ACVIM 미국수의내과학회 Forum',
      'FASAVA(아시아태평양소동물수의사회) 학술대회',
      '2025 춘계 수의학 학술대회 및 케이스 발표 - A Case of Abdominal Wall Angiosarcoma in a Cat: Clinical Outcome',
      '석사 학위 논문: Analysis of the Association Between Corrected Serum Chloride and Disease Severity in Dogs With Myxomatous Mitral Valve Disease(MMVD/이첨판폐쇄부전증 환자의 혈중 염소 농도에 따른 질환의 중증도 분석)',
      '2025 부산 수의 컨퍼런스',
      '현창백 교수 수의내과학 세미나 수료',
    ],
  },
  {
    id: 3,
    name: '양성현',
    nameEn: 'Sunghyun Yang',
    title: '외과원장',
    specialty: '외과/정형외과 전문',
    image: '', // TODO: 실제 사진으로 교체
    education: [
      '충남대학교 수의과대학 수의학과 졸업',
      '전남대학교 수의과대학 수의외과학 석사과정',
    ],
    certifications: [
      'ISVPS, General Practitioner Certificate in Small Animal Surgery',
    ],
    experience: [
      '라비온 동물의료센터 외과원장',
      '부평 A 동물의료센터 진료과장(외과)',
      '24시 시흥 S 동물의료센터 외과수의사',
    ],
    training: [
      '전북대학교 SASEC, Arthroscopy/TPLO Workshop',
      '서울대학교 강병재 교수, TPLO Hands On Course Wet Lab',
      'AOVET, Principles in Small Animal Fracture management, SEOUL, KOREA',
      '해마루 2차 동물병원 임상수의학 기본과정 수료',
      '2023 개원아카데미, 장재영 원장 초청 강연회',
      '인천광역시 수의사회, 수의치과학 임상심화과정',
      '청담 눈초롱 안과 동물병원, 수의안과학',
      '인천광역시 수의사회, 소동물 외과 임상 심화과정',
    ],
  },
]

export const services = [
  {
    id: 'internal',
    title: '내과 진료',
    icon: 'Stethoscope',
    description: '심장, 호흡기, 소화기, 내분비 질환 등 내과 전반에 걸친 전문 진료',
    details: [
      '심장 질환 (심장초음파, 심전도)',
      '호흡기 질환',
      '소화기 질환',
      '내분비 질환 (당뇨, 갑상선 등)',
      '비뇨기 질환',
      '신경계 질환',
    ],
  },
  {
    id: 'surgery',
    title: '외과 수술',
    icon: 'Scissors',
    description: '정형외과, 연부조직 외과, 응급 수술 등 다양한 외과적 치료',
    details: [
      '정형외과 수술 (TPLO, 골절 정복)',
      '연부조직 수술',
      '종양 제거 수술',
      '응급 수술',
      '중성화 수술',
      '관절경 수술',
    ],
  },
  {
    id: 'prevention',
    title: '예방의학',
    icon: 'Shield',
    description: '건강검진과 예방접종으로 반려동물의 건강한 삶을 지원',
    details: [
      '종합 건강검진',
      '예방접종 (DHPPL, 코로나, 광견병 등)',
      '심장사상충 예방',
      '외부기생충 예방',
      '구강 스케일링',
      '노령동물 정기검진',
    ],
  },
  {
    id: 'imaging',
    title: '영상진단',
    icon: 'Scan',
    description: '첨단 영상 장비를 통한 정확한 진단',
    details: [
      '디지털 X-ray',
      '초음파 검사 (복부, 심장)',
      '내시경 검사',
    ],
  },
  {
    id: 'dental',
    title: '치과 진료',
    icon: 'Smile',
    description: '구강 건강 관리 및 치과 시술',
    details: [
      '치석 제거 (스케일링)',
      '발치',
      '구강 종양 치료',
      '치주 질환 치료',
    ],
  },
  {
    id: 'emergency',
    title: '응급 진료',
    icon: 'AlertCircle',
    description: '응급 상황에 대한 신속한 대응과 중환자 집중 치료',
    details: [
      '응급 환자 처치',
      '중환자 집중 치료 (ICU)',
      '수혈',
      '응급 수술',
    ],
  },
]

export const facilities = [
  {
    id: 1,
    title: '호흡 마취 및 모니터링 시스템',
    description: '안전한 수술을 위한 최신 마취 및 생체 모니터링 장비',
    image: '', // TODO: 실제 시설 이미지로 교체
  },
  {
    id: 2,
    title: '정형외과 수술 장비',
    description: 'TPLO, 골절 수술을 위한 전문 정형외과 수술 세트',
    image: '',
  },
  {
    id: 3,
    title: '심장 초음파',
    description: 'GE Healthcare 심장 초음파 장비로 정밀한 심장 검사',
    image: '',
  },
  {
    id: 4,
    title: '디지털 X-ray',
    description: '고해상도 디지털 X-ray로 빠르고 정확한 영상 진단',
    image: '',
  },
  {
    id: 5,
    title: '혈액 검사 장비',
    description: '원내 혈액 검사로 신속한 결과 확인',
    image: '',
  },
  {
    id: 6,
    title: '입원실',
    description: '쾌적한 환경의 입원 시설과 24시간 모니터링',
    image: '',
  },
]

export const coreValues = [
  {
    title: '전문성',
    description: '각 분야 전문 수의사 3인이 협진하여 최선의 치료를 제공합니다.',
    icon: 'Award',
  },
  {
    title: '신뢰',
    description: '투명한 진료 과정과 충분한 설명으로 보호자와 신뢰를 쌓습니다.',
    icon: 'Heart',
  },
  {
    title: '따뜻함',
    description: '반려동물과 보호자 모두에게 따뜻한 케어를 제공합니다.',
    icon: 'Sparkles',
  },
]

// 진료/수술 케이스 샘플 데이터
// serviceId: 진료과목과 연결 (internal, surgery, prevention, imaging, dental, emergency)
export const medicalCases = [
  {
    id: 1,
    title: '이첨판 폐쇄부전증(MMVD) 치료 사례',
    category: '심장',
    serviceId: 'internal',
    animal: '강아지',
    breed: '말티즈',
    age: '10세',
    summary: '심장비대 및 폐수종을 동반한 중증 심장질환 환자의 내과적 치료',
    image: '', // TODO: 실제 케이스 이미지
    date: '2025.03',
  },
  {
    id: 2,
    title: '만성 신부전 관리 사례',
    category: '내과',
    serviceId: 'internal',
    animal: '고양이',
    breed: '코리안숏헤어',
    age: '14세',
    summary: '만성 신부전 3기 환자의 장기적인 내과 관리 및 식이요법',
    image: '',
    date: '2025.02',
  },
  {
    id: 3,
    title: '당뇨병 관리 사례',
    category: '내분비',
    serviceId: 'internal',
    animal: '강아지',
    breed: '푸들',
    age: '8세',
    summary: '인슐린 의존성 당뇨병 환자의 혈당 조절 및 관리',
    image: '',
    date: '2025.01',
  },
  {
    id: 4,
    title: '림프종 치료 사례',
    category: '종양',
    serviceId: 'internal',
    animal: '강아지',
    breed: '골든리트리버',
    age: '7세',
    summary: '다중심형 림프종 환자의 항암 화학요법 치료',
    image: '',
    date: '2024.12',
  },
  {
    id: 5,
    title: '치석 제거 및 발치 사례',
    category: '치과',
    serviceId: 'dental',
    animal: '강아지',
    breed: '시츄',
    age: '9세',
    summary: '중증 치주 질환 환자의 전신 마취 하 스케일링 및 발치',
    image: '',
    date: '2025.02',
  },
  {
    id: 6,
    title: '응급 위확장-염전 증후군(GDV) 치료',
    category: '응급',
    serviceId: 'emergency',
    animal: '강아지',
    breed: '도베르만',
    age: '6세',
    summary: '위확장-염전 증후군 응급 환자의 신속한 안정화 및 수술 연계',
    image: '',
    date: '2025.01',
  },
]

export const surgicalCases = [
  {
    id: 1,
    title: 'TPLO 수술 사례',
    category: '정형외과',
    serviceId: 'surgery',
    animal: '강아지',
    breed: '래브라도 리트리버',
    age: '5세',
    summary: '전십자인대 파열 환자의 TPLO 수술 및 재활',
    image: '',
    date: '2025.03',
  },
  {
    id: 2,
    title: '슬개골 탈구 교정 수술',
    category: '정형외과',
    serviceId: 'surgery',
    animal: '강아지',
    breed: '포메라니안',
    age: '3세',
    summary: '양측 슬개골 탈구 4기 환자의 교정 수술',
    image: '',
    date: '2025.02',
  },
  {
    id: 3,
    title: '비장 종양 적출 수술',
    category: '연부조직',
    serviceId: 'surgery',
    animal: '강아지',
    breed: '골든리트리버',
    age: '11세',
    summary: '비장 혈관육종 의심 환자의 응급 비장 적출 수술',
    image: '',
    date: '2025.01',
  },
  {
    id: 4,
    title: '요도 결석 제거 수술',
    category: '비뇨기',
    serviceId: 'surgery',
    animal: '고양이',
    breed: '페르시안',
    age: '6세',
    summary: '요도 폐색 환자의 응급 수술 및 식이 관리',
    image: '',
    date: '2024.12',
  },
]
