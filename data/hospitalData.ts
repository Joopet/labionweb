// 라비온 동물의료센터 홈페이지 공통 데이터
// 실제 전화번호, 주소, 진료시간, 의료진 약력, 시설 사진은 이 파일에서 우선 관리합니다.

export const popup = {
  active: true,
  badge: '진료일정',
  title: '6월 진료일정 및 소식 안내',
  description: '6월 진료일정, 이벤트, 병원 소식을 홈페이지 팝업으로 안내합니다.\n진료시간: 매일 10:00 - 20:00\n점심시간: 13:00 - 14:00',
  image: '',
  cta: {
    label: '카카오톡으로 문의하기',
    url: 'http://pf.kakao.com/_XbSFn',
  },
  closable: true,
  doNotShowTodayOption: true,
}

export const hospitalInfo = {
  name: '라비온 동물의료센터',
  nameCompact: '라비온동물의료센터',
  nameEn: 'LABION ANIMAL MEDICAL CENTER',
  logoUrl: '/images/logo.png',
  slogan: '세심한 설명과 진료로 반려동물의 건강한 일상을 함께합니다',
  philosophy: '충분히 듣고, 이해하기 쉽게 설명하는 진료',
  brandColors: {
    primary: '#00377b',
    neutral: '#808080',
    accent: '#1da8fc',
  },

  ceo: '하종수',
  businessRegistration: '396-01-03507',

  contact: {
    phone: '0507-1381-2786',
    phoneAlt: '031-8042-6788',
    kakao: '라비온 동물의료센터',
    kakaoUrl: 'http://pf.kakao.com/_XbSFn',
    blog: 'https://blog.naver.com/labionamc',
    instagram: '@labionamc',
    instagramUrl: 'https://www.instagram.com/labionamc/',
  },

  links: {
    naverMap: 'https://naver.me/xoQrIVKl',
    blog: 'https://blog.naver.com/labionamc',
    kakaoTalk: 'http://pf.kakao.com/_XbSFn',
    instagram: 'https://www.instagram.com/labionamc/',
    privacyPolicy: '/privacy-policy',
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

  hero: {
    badge: '안산 고잔동 동물의료센터',
    title: '세심한 설명과 진료로\n반려동물의 건강한 일상을 함께합니다',
    description:
      '라비온 동물의료센터는 보호자와 반려동물이 안심할 수 있도록 충분한 설명과 책임 있는 진료를 지향합니다.',
    videoUrl: '',
    posterUrl: '/images/hero-fallback.jpg',
  },

  brandIntro: {
    category: 'LABION BRAND',
    title: '라비온은 보호자와 반려동물의 이야기를 세심하게 듣습니다.',
    description:
      '라비온 동물의료센터는 반려동물의 작은 변화까지 놓치지 않고 살피며, 보호자님이 치료 과정을 충분히 이해하실 수 있도록 차분히 설명드립니다. 아이의 건강한 일상을 위해 필요한 진료를 함께 고민하겠습니다.',
    keywords: ['세심한 진료', '쉬운 설명', '책임 있는 케어'],
  },

  philosophyTabs: [
    {
      id: 'origin',
      label: '라비온을 만든 생각',
      title: '반려동물의 건강은 보호자님의 작은 관찰에서 시작됩니다.',
      description:
        '라비온은 보호자님의 이야기를 충분히 듣고, 반려동물의 상태를 세심하게 확인하며 필요한 진료 방향을 함께 고민합니다.',
    },
    {
      id: 'philosophy',
      label: '진료 철학',
      title: '충분히 확인하고, 이해하기 쉽게 설명합니다.',
      description:
        '빠른 판단보다 충분한 확인을, 어려운 설명보다 이해하기 쉬운 설명을, 일방적인 진료보다 보호자와 함께 결정하는 진료를 지향합니다.',
    },
    {
      id: 'people',
      label: '사람들',
      title: '아이의 건강한 일상을 함께 고민하는 사람들',
      description:
        '라비온의 의료진은 반려동물의 상태뿐 아니라 보호자님의 걱정까지 함께 살피는 진료를 지향합니다.',
    },
  ],

  brandMeaning: [
    { letter: 'L', word: 'Love', meaning: '사랑', description: '반려동물을 향한 따뜻한 마음' },
    { letter: 'A', word: 'Animal', meaning: '동물', description: '강아지와 고양이의 건강한 일상' },
    { letter: 'Bio', word: 'Bio', meaning: '생명', description: '생명의 가치를 존중하는 진료' },
    { letter: 'On', word: 'On', meaning: '온기', description: '보호자와 반려동물이 안심하는 공간' },
  ],
}

export const staff = [
  {
    id: 1,
    name: '하종수',
    nameEn: 'Jongsu Ha',
    title: '대표원장',
    specialty: '내과 / 영상의학',
    image: '',
    philosophy: '보호자님이 아이의 상태를 충분히 이해하실 수 있도록 차분히 설명드리겠습니다.',
    education: ['주요 약력은 준비 중입니다.'],
    certifications: ['정확한 정보 확인 후 업데이트 예정입니다.'],
    experience: ['라비온 동물의료센터 대표원장'],
    training: [],
  },
  {
    id: 2,
    name: '김승남',
    nameEn: 'Seungnam Kim',
    title: '내과원장',
    specialty: '내과 / 영상의학',
    image: '',
    philosophy: '작은 변화도 놓치지 않도록 세심하게 살피고 설명드리겠습니다.',
    education: ['주요 약력은 준비 중입니다.'],
    certifications: ['정확한 정보 확인 후 업데이트 예정입니다.'],
    experience: ['라비온 동물의료센터 내과원장'],
    training: [],
  },
  {
    id: 3,
    name: '양성현',
    nameEn: 'Sunghyun Yang',
    title: '외과원장',
    specialty: '외과 / 정형외과',
    image: '',
    philosophy: '반려동물의 상태와 회복 과정을 고려해 신중하게 진료하겠습니다.',
    education: ['주요 약력은 준비 중입니다.'],
    certifications: ['정확한 정보 확인 후 업데이트 예정입니다.'],
    experience: ['라비온 동물의료센터 외과원장'],
    training: [],
  },
]

export const services = [
  {
    id: 'vaccine',
    title: '예방접종',
    icon: 'Shield',
    labelEn: 'VACCINATION',
    description: '연령과 생활 환경에 맞춘 예방접종 및 기초 건강관리 안내',
    details: ['강아지', '고양이', '항체가', '기초관리'],
  },
  {
    id: 'checkup',
    title: '건강검진',
    icon: 'Stethoscope',
    labelEn: 'HEALTH CHECKUP',
    description: '반려동물의 나이와 상태에 맞춘 기본 검진 및 건강 상태 확인',
    details: ['혈액검사', '영상검사', '정기검진', '노령검진'],
  },
  {
    id: 'internal',
    title: '내과 진료',
    icon: 'Stethoscope',
    labelEn: 'INTERNAL MEDICINE',
    description: '소화기, 호흡기, 내분비 등 다양한 내과 증상 상담 및 진료',
    details: ['소화기', '호흡기', '내분비', '만성질환'],
  },
  {
    id: 'skin',
    title: '피부·귀 진료',
    icon: 'HeartPulse',
    labelEn: 'DERMATOLOGY',
    description: '가려움, 피부 발진, 외이염 등 반복되는 피부·귀 증상 진료',
    details: ['피부염', '알러지', '외이염', '가려움'],
  },
  {
    id: 'dental',
    title: '치과 진료',
    icon: 'Smile',
    labelEn: 'DENTAL CARE',
    description: '구강 상태 확인, 스케일링, 발치 등 치과 진료 상담',
    details: ['구강검진', '스케일링', '발치', '치주관리'],
  },
  {
    id: 'neuter',
    title: '중성화 수술',
    icon: 'Scissors',
    labelEn: 'NEUTERING',
    description: '반려동물의 상태를 고려한 중성화 수술 상담 및 관리',
    details: ['수술상담', '마취상담', '회복관리'],
  },
  {
    id: 'surgery',
    title: '외과 진료',
    icon: 'Scissors',
    labelEn: 'SURGERY',
    description: '일반외과 및 정형외과 관련 상담과 진료',
    details: ['일반외과', '정형외과', '상처처치', '수술상담'],
  },
  {
    id: 'lab',
    title: '영상·혈액 검사',
    icon: 'Scan',
    labelEn: 'TESTS',
    description: 'X-ray, 초음파, 혈액검사 등 상태 확인에 필요한 검사',
    details: ['X-ray', '초음파', '혈액검사', '기본검사'],
  },
  {
    id: 'senior',
    title: '노령동물 관리',
    icon: 'PawPrint',
    labelEn: 'SENIOR CARE',
    description: '노령 반려동물의 만성질환 관리와 생활관리 상담',
    details: ['만성질환', '정기검진', '생활관리', '삶의 질'],
  },
]


export const serviceDetails = [
  {
    id: 'vaccine',
    title: '예방접종',
    subtitle: '강아지와 고양이의 생활 환경과 접종 이력을 고려해 기초 예방관리 방향을 안내합니다.',
    intro: '예방접종은 감염성 질환을 예방하고 건강한 생활을 이어가기 위한 기본 관리입니다. 라비온은 아이의 나이, 과거 접종 이력, 생활 환경을 확인한 뒤 필요한 접종 일정을 안내합니다.',
    recommendedFor: ['첫 예방접종이 필요한 어린 강아지·고양이', '추가 접종 시기를 확인하고 싶은 경우', '항체가 검사 등 기초 건강관리가 필요한 경우'],
    process: ['문진 및 과거 접종 이력 확인', '기본 신체 상태 확인', '접종 계획 안내 및 주의사항 설명'],
    note: '접종 가능 여부와 일정은 아이의 컨디션에 따라 달라질 수 있습니다.',
  },
  {
    id: 'checkup',
    title: '건강검진',
    subtitle: '나이, 품종, 생활 습관을 고려해 현재 건강 상태를 확인합니다.',
    intro: '건강검진은 증상이 뚜렷하지 않은 질환을 조기에 확인하고, 아이에게 맞는 건강관리 방향을 세우는 데 도움이 됩니다. 라비온은 기본 신체검사부터 혈액검사, 영상검사 등 필요한 항목을 보호자님과 상의합니다.',
    recommendedFor: ['정기적인 건강 상태 확인이 필요한 경우', '노령기에 접어든 반려동물', '식욕, 활력, 체중 변화가 관찰되는 경우'],
    process: ['생활 습관 및 보호자 관찰 내용 확인', '기본 신체검사', '필요 검사 항목 상담 및 결과 설명'],
    note: '검진 항목은 아이의 나이와 상태, 의료진 판단에 따라 달라질 수 있습니다.',
  },
  {
    id: 'internal',
    title: '내과 진료',
    subtitle: '소화기, 호흡기, 내분비 등 다양한 내과 증상을 세심하게 확인합니다.',
    intro: '내과 진료는 구토, 설사, 기침, 식욕 저하, 음수량 변화 등 보호자가 관찰한 증상을 바탕으로 원인을 확인해가는 과정입니다. 라비온은 문진과 필요한 검사를 통해 치료 방향을 함께 고민합니다.',
    recommendedFor: ['구토·설사 등 소화기 증상이 반복되는 경우', '기침, 호흡 불편 등 호흡기 증상이 있는 경우', '음수량·소변량 변화, 체중 변화가 있는 경우'],
    process: ['보호자 문진 및 증상 확인', '신체검사 및 필요 검사 상담', '검사 결과 설명과 치료 방향 안내'],
    note: '내과 증상은 원인이 다양하므로 증상 경과와 생활 정보를 함께 확인하는 것이 중요합니다.',
  },
  {
    id: 'skin',
    title: '피부·귀 진료',
    subtitle: '가려움, 피부 발진, 외이염 등 반복되는 증상의 원인을 확인합니다.',
    intro: '피부와 귀 질환은 재발이 잦고 생활 환경의 영향을 많이 받습니다. 라비온은 가려움, 발적, 귀 냄새, 귀지 증가 등 보호자가 발견한 변화를 바탕으로 필요한 검사를 안내합니다.',
    recommendedFor: ['몸을 자주 긁거나 핥는 경우', '귀 냄새, 귀지 증가, 머리 흔듦이 있는 경우', '피부 발진, 털 빠짐, 반복적인 피부 문제가 있는 경우'],
    process: ['증상 부위와 생활 환경 확인', '피부·귀 상태 확인 및 필요 검사', '치료 및 생활관리 방향 안내'],
    note: '피부·귀 증상은 재발 관리가 중요하므로 생활관리 상담을 함께 진행합니다.',
  },
  {
    id: 'dental',
    title: '치과 진료',
    subtitle: '구취, 치석, 잇몸 상태 등 구강 건강을 확인하고 관리 방향을 안내합니다.',
    intro: '구강 문제는 식욕 저하, 통증, 염증 등으로 이어질 수 있어 정기적인 확인이 필요합니다. 라비온은 구강 상태를 확인하고 스케일링, 발치 상담 등 필요한 진료 방향을 설명합니다.',
    recommendedFor: ['구취가 심하거나 치석이 많은 경우', '잇몸 출혈, 침 흘림, 씹기 불편이 있는 경우', '스케일링 또는 발치 상담이 필요한 경우'],
    process: ['구강 상태 확인', '필요 시 수술 전 검사 및 마취 상담', '치료 방향과 회복관리 안내'],
    note: '치과 진료 범위는 구강 상태와 전신 컨디션에 따라 달라질 수 있습니다.',
  },
  {
    id: 'neuter',
    title: '중성화 수술',
    subtitle: '수술 전 상태 확인과 회복 과정을 고려해 신중하게 상담합니다.',
    intro: '중성화 수술은 아이의 나이, 건강 상태, 생활 환경을 고려해 시기와 방법을 상담하는 것이 중요합니다. 라비온은 수술 전 검사와 마취 상담, 회복관리 안내를 함께 진행합니다.',
    recommendedFor: ['중성화 시기를 상담하고 싶은 경우', '수술 전 검사와 마취 상담이 필요한 경우', '수술 후 회복관리 방법을 알고 싶은 경우'],
    process: ['나이와 건강 상태 확인', '수술 전 검사 및 마취 상담', '수술 후 회복관리와 주의사항 안내'],
    note: '수술 여부와 일정은 진료 후 아이의 상태를 고려해 보호자님과 함께 결정합니다.',
  },
  {
    id: 'surgery',
    title: '외과 진료',
    subtitle: '일반외과 및 정형외과 관련 상담과 진료를 안내합니다.',
    intro: '외과 진료는 상처, 종괴, 보행 이상, 관절 문제 등 다양한 상황에서 상담이 필요할 수 있습니다. 라비온은 아이의 상태를 확인하고 필요한 검사와 치료 방향을 보호자님께 설명드립니다.',
    recommendedFor: ['상처 처치나 수술 상담이 필요한 경우', '보행 이상, 다리 절뚝거림이 있는 경우', '종괴, 탈장 등 외과적 확인이 필요한 경우'],
    process: ['증상 및 병력 확인', '신체검사와 필요 검사 상담', '진료 또는 수술 방향 안내'],
    note: '수술이 필요한 경우에는 수술 전 평가와 보호자 상담을 우선합니다.',
  },
  {
    id: 'lab',
    title: '영상·혈액 검사',
    subtitle: 'X-ray, 초음파, 혈액검사 등 상태 확인에 필요한 검사를 진행합니다.',
    intro: '영상·혈액 검사는 겉으로 보이지 않는 몸 상태를 확인하는 데 도움이 됩니다. 라비온은 증상과 신체검사 결과를 바탕으로 필요한 검사 항목을 안내하고 결과를 이해하기 쉽게 설명합니다.',
    recommendedFor: ['정확한 상태 확인이 필요한 경우', '혈액검사 또는 영상검사 상담이 필요한 경우', '수술 전 또는 건강검진 과정에서 검사가 필요한 경우'],
    process: ['증상과 검사 필요성 설명', '검사 진행', '결과 확인 및 진료 방향 상담'],
    note: '검사 항목은 아이의 상태와 진료 목적에 따라 달라질 수 있습니다.',
  },
  {
    id: 'senior',
    title: '노령동물 관리',
    subtitle: '노령기에 나타나는 작은 변화까지 살피며 생활관리 방향을 안내합니다.',
    intro: '노령 반려동물은 식욕, 활력, 체중, 음수량 등 작은 변화가 건강 신호일 수 있습니다. 라비온은 정기검진과 만성질환 관리, 생활관리 상담을 통해 아이의 건강한 일상을 돕습니다.',
    recommendedFor: ['노령기에 접어든 강아지·고양이', '만성질환 관리가 필요한 경우', '체중, 식욕, 활력 변화가 관찰되는 경우'],
    process: ['생활 변화와 기존 질환 확인', '필요 검진 항목 상담', '건강관리 및 생활관리 방향 안내'],
    note: '노령동물 관리는 정기적인 확인과 보호자 관찰이 함께 이루어질 때 도움이 됩니다.',
  },
]

export const facilities = [
  {
    id: 1,
    title: '외관 / 입구',
    category: 'space',
    description: '보호자님이 쉽게 찾아오실 수 있도록 입구와 안내 동선을 정리합니다.',
    image: '',
  },
  {
    id: 2,
    title: '대기 공간',
    category: 'space',
    description: '보호자와 반려동물이 편안하게 머무를 수 있는 대기 공간입니다.',
    image: '',
  },
  {
    id: 3,
    title: '진료실',
    category: 'medical',
    description: '보호자님과 충분히 상담하고 아이의 상태를 차분히 확인하는 공간입니다.',
    image: '',
  },
  {
    id: 4,
    title: '처치실',
    category: 'medical',
    description: '상태 확인과 기본 처치가 이루어지는 공간입니다.',
    image: '',
  },
  {
    id: 5,
    title: '수술실',
    category: 'medical',
    description: '수술 전 상태 확인과 회복 과정을 고려해 신중하게 진료하는 공간입니다.',
    image: '',
  },
  {
    id: 6,
    title: '영상검사실',
    category: 'equipment',
    description: 'X-ray, 초음파 등 상태 확인에 필요한 검사를 진행하는 공간입니다.',
    image: '',
  },
  {
    id: 7,
    title: '입원실',
    category: 'space',
    description: '입원 중인 아이들이 안정적으로 머무를 수 있도록 관리하는 공간입니다.',
    image: '',
  },
  {
    id: 8,
    title: '장비 사진',
    category: 'equipment',
    description: '진료와 검사에 필요한 장비를 실제 사진으로 소개할 예정입니다.',
    image: '',
  },
]


export const trustIndicators = [
  {
    id: 'total-care-count',
    label: '누적 진료 건수',
    value: '1,000건',
    countTo: 1000,
    suffix: '건',
    description: '홈페이지 시안용 예시 수치입니다. 실제 운영 데이터 확인 후 정확한 수치로 교체합니다.',
    status: '예시 데이터',
  },
  {
    id: 'checkup-count',
    label: '건강검진 진행',
    value: '300건',
    countTo: 300,
    suffix: '건',
    description: '건강검진 누적 수치를 보여줄 수 있는 영역입니다. 실제 집계 기준 확정 후 반영합니다.',
    status: '예시 데이터',
  },
  {
    id: 'safe-days',
    label: '안전 운영 일수',
    value: '100일',
    countTo: 100,
    suffix: '일',
    description: '무사고·안전 운영 등 보호자에게 신뢰를 줄 수 있는 지표로 활용할 수 있습니다.',
    status: '예시 데이터',
  },
  {
    id: 'medical-team',
    label: '의료진',
    value: '3인',
    countTo: 3,
    suffix: '인',
    description: '대표원장·내과원장·외과원장이 진료 분야별로 아이의 상태를 함께 살핍니다.',
    status: '확인 정보',
  },
]

export const futureTrustMetrics = [
  {
    id: 'safe-days',
    label: '안전 진료 지표',
    value: '실제 집계 후 입력',
    description: '무사고 일수, 마취·수술 안전 지표 등은 내부 기준과 산정 방식 확정 후 공개합니다.',
  },
  {
    id: 'total-care-count',
    label: '누적 진료 건수',
    value: '실제 집계 후 입력',
    description: '진료 건수는 기간, 기준, 집계 방식이 확정된 실제 데이터만 사용합니다.',
  },
]

export const homeNotices = [
  {
    id: 'june-schedule',
    badge: '진료일정',
    title: '6월 진료일정 안내',
    description: '6월 진료시간과 운영 안내를 확인해 주세요. 일정 변경이 있을 경우 이 영역에서 가장 먼저 안내합니다.',
    ctaLabel: '진료일정 확인하기',
    modalTitle: '6월 진료일정 안내',
    modalDescription:
      '라비온 동물의료센터의 6월 진료 운영 정보를 안내드립니다. 세부 일정은 병원 사정에 따라 변경될 수 있으니 방문 전 전화 또는 카카오톡으로 확인해 주세요.',
    details: [
      { label: '진료시간', value: '매일 10:00 - 20:00' },
      { label: '점심시간', value: '13:00 - 14:00' },
      { label: '접수마감', value: '오전 12:30 / 오후 19:30' },
      { label: '운영안내', value: '연중무휴 운영 예정' },
    ],
    notices: [
      '응급 상황 또는 의료진 일정에 따라 진료 일정이 일부 변경될 수 있습니다.',
      '수술·검진 예약은 카카오톡 상담 또는 전화 문의를 권장드립니다.',
    ],
    primaryCta: { label: '카카오톡으로 문의하기', href: hospitalInfo.links.kakaoTalk },
    secondaryCta: { label: '오시는 길 보기', href: hospitalInfo.links.naverMap },
  },
  {
    id: 'event-notice',
    badge: '이벤트',
    title: '검진·진료 이벤트 안내',
    description: '이벤트 진행 시 홈페이지 배너와 팝업을 통해 한눈에 확인할 수 있도록 안내합니다.',
    ctaLabel: '이벤트 확인하기',
    modalTitle: '검진·진료 이벤트 안내',
    modalDescription:
      '라비온에서 진행하는 검진·진료 이벤트를 안내하는 영역입니다. 현재는 시안용 문구이며, 실제 이벤트 내용 확정 후 기간과 혜택을 업데이트해 주세요.',
    details: [
      { label: '이벤트명', value: '6월 건강검진 이벤트 준비 중' },
      { label: '대상', value: '강아지·고양이 보호자' },
      { label: '기간', value: '확정 후 업데이트 예정' },
      { label: '안내', value: '세부 혜택은 카카오톡 상담으로 확인 가능' },
    ],
    notices: [
      '이벤트 내용은 실제 진행 여부와 기간이 확정된 뒤 공개하는 것을 권장합니다.',
      '진료·검진 비용 및 혜택은 반려동물 상태에 따라 달라질 수 있습니다.',
    ],
    primaryCta: { label: '카카오톡 상담하기', href: hospitalInfo.links.kakaoTalk },
    secondaryCta: { label: '블로그 소식 보기', href: hospitalInfo.links.blog },
  },
]

export const coreValues = [
  {
    title: '세심한 진료',
    description: '반려동물의 상태와 보호자님의 이야기를 충분히 확인합니다.',
    icon: 'Heart',
  },
  {
    title: '쉬운 설명',
    description: '검사 결과와 치료 방향을 이해하기 쉽게 안내합니다.',
    icon: 'MessageCircle',
  },
  {
    title: '책임 있는 케어',
    description: '아이의 컨디션과 생활 환경까지 고려해 필요한 진료를 함께 고민합니다.',
    icon: 'Shield',
  },
]

export const storyCards = [
  {
    id: 1,
    title: '강아지 예방접종 시기와 주의사항',
    category: '예방관리',
    summary: '연령과 생활 환경에 따라 달라지는 예방접종과 기초 관리 정보를 안내합니다.',
    date: 'Blog',
    href: hospitalInfo.contact.blog,
  },
  {
    id: 2,
    title: '고양이 구토, 언제 병원에 가야 할까요?',
    category: '고양이 건강',
    summary: '반복 구토, 식욕 저하 등 보호자가 놓치기 쉬운 신호를 쉽게 정리합니다.',
    date: 'Blog',
    href: hospitalInfo.contact.blog,
  },
  {
    id: 3,
    title: '노령견 건강검진이 필요한 이유',
    category: '건강검진',
    summary: '나이가 들수록 필요한 정기 확인 항목과 생활관리 포인트를 소개합니다.',
    date: 'Blog',
    href: hospitalInfo.contact.blog,
  },
]

export const channels = [
  {
    id: 'naverMap',
    title: '네이버 지도',
    description: '위치와 길찾기 확인',
    href: hospitalInfo.links.naverMap,
  },
  {
    id: 'blog',
    title: '네이버 블로그',
    description: '건강정보와 병원 소식',
    href: hospitalInfo.links.blog,
  },
  {
    id: 'kakao',
    title: '카카오톡 상담',
    description: '상담 및 문의 연결',
    href: hospitalInfo.links.kakaoTalk,
  },
  {
    id: 'instagram',
    title: '인스타그램',
    description: '사진과 병원 일상',
    href: hospitalInfo.links.instagram,
  },
]


export const caseCards = [
  {
    id: 1,
    title: '강아지 슬개골 탈구 진료케이스',
    category: '정형외과 상담',
    animal: '강아지',
    summary: '뒷다리 절뚝거림, 산책 중 다리 들기, 점프 후 불편감 등으로 내원했을 때의 상담·검사·치료 방향을 안내합니다.',
    steps: ['보행 상태 확인', '촉진 및 영상검사 상담', '수술·관리 방향 안내'],
    note: '현재는 예시 케이스입니다. 실제 케이스 공개 시 보호자 동의와 개인정보 비식별 처리를 거쳐 업데이트합니다.',
    href: '/cases',
  },
  {
    id: 2,
    title: '고양이 반복 구토 진료케이스',
    category: '내과 진료',
    animal: '고양이',
    summary: '반복 구토, 식욕 저하, 활력 감소 등 보호자가 자주 걱정하는 증상의 확인 과정과 상담 흐름을 정리합니다.',
    steps: ['문진 및 생활환경 확인', '필요 검사 항목 상담', '치료·식이관리 안내'],
    note: '구토 원인은 다양하므로 증상과 상태에 따라 진료 방향이 달라질 수 있습니다.',
    href: '/cases',
  },
  {
    id: 3,
    title: '강아지 피부 가려움 진료케이스',
    category: '피부·귀 진료',
    animal: '강아지',
    summary: '발 핥음, 귀 냄새, 긁음, 피부 발진 등 반복되는 피부·귀 증상의 진료 흐름을 안내합니다.',
    steps: ['피부·귀 상태 확인', '필요 시 기본 검사', '치료 및 생활관리 안내'],
    note: '피부 증상은 원인이 다양해 반복 증상은 진료를 통한 확인이 필요할 수 있습니다.',
    href: '/cases',
  },
  {
    id: 4,
    title: '치석·구취 치과 진료케이스',
    category: '치과 진료',
    animal: '강아지·고양이',
    summary: '구취, 치석, 잇몸 변화 등 구강 문제로 내원했을 때의 구강 상태 확인과 치과 상담 흐름을 정리합니다.',
    steps: ['구강 상태 확인', '스케일링·발치 상담', '회복 및 구강관리 안내'],
    note: '실제 처치 여부는 진료 후 아이의 상태를 고려해 보호자님과 상의합니다.',
    href: '/cases',
  },
]


export const encyclopediaCards = [
  {
    id: 'vaccine-guide',
    title: '강아지·고양이 예방접종',
    category: '예방관리',
    summary: '기초 예방접종, 추가 접종, 항체가 검사 등 보호자가 자주 궁금해하는 내용을 쉽게 정리합니다.',
    symptoms: ['접종 시기', '추가 접종', '항체가 검사'],
    caution: '접종 일정은 아이의 나이, 건강 상태, 과거 접종 이력에 따라 달라질 수 있습니다.',
    href: '/encyclopedia',
  },
  {
    id: 'cat-vomiting',
    title: '고양이 구토',
    category: '고양이 건강',
    summary: '일시적인 구토와 병원 확인이 필요한 구토를 구분하는 데 도움이 되는 기본 정보를 안내합니다.',
    symptoms: ['반복 구토', '식욕 저하', '무기력'],
    caution: '구토가 반복되거나 식욕·활력이 떨어진다면 병원 상담을 권장합니다.',
    href: '/encyclopedia',
  },
  {
    id: 'otitis',
    title: '외이염과 귀 가려움',
    category: '피부·귀 진료',
    summary: '귀 냄새, 귀지 증가, 머리 흔듦, 긁음 등 귀 질환에서 자주 보이는 신호를 정리합니다.',
    symptoms: ['귀 냄새', '귀지 증가', '머리 흔듦'],
    caution: '반복되는 외이염은 원인 확인과 생활관리 상담이 필요할 수 있습니다.',
    href: '/encyclopedia',
  },
  {
    id: 'skin-itching',
    title: '피부 가려움과 알러지',
    category: '피부 진료',
    summary: '피부 발진, 핥음, 긁음, 털 빠짐 등 보호자가 관찰할 수 있는 피부 신호를 안내합니다.',
    symptoms: ['가려움', '피부 발진', '반복 핥음'],
    caution: '피부 증상은 원인이 다양하므로 진료를 통해 원인을 확인하는 것이 중요합니다.',
    href: '/encyclopedia',
  },
  {
    id: 'dental-care',
    title: '치석과 구강관리',
    category: '치과 진료',
    summary: '구취, 치석, 잇몸 출혈 등 구강 문제를 예방하고 관리하기 위한 기본 정보를 안내합니다.',
    symptoms: ['구취', '치석', '잇몸 변화'],
    caution: '구강 상태에 따라 스케일링, 발치 등 진료 방향이 달라질 수 있습니다.',
    href: '/encyclopedia',
  },
  {
    id: 'senior-checkup',
    title: '노령동물 건강검진',
    category: '노령동물 관리',
    summary: '나이가 들수록 정기적으로 확인하면 좋은 건강 신호와 검진 상담 포인트를 정리합니다.',
    symptoms: ['활력 저하', '체중 변화', '음수량 변화'],
    caution: '노령동물은 작은 변화도 건강 신호일 수 있어 정기적인 상담이 도움이 됩니다.',
    href: '/encyclopedia',
  },
]

// 기존 케이스 페이지 호환용 데이터입니다. 실제 치료 케이스가 확정되기 전까지는 블로그형 콘텐츠로 표시합니다.
export const medicalCases = storyCards.map((item) => ({
  id: item.id,
  title: item.title,
  category: item.category,
  serviceId: 'internal',
  animal: '건강정보',
  breed: '블로그',
  age: '',
  summary: item.summary,
  image: '',
  date: item.date,
}))

export const surgicalCases = [
  {
    id: 1,
    title: '보호자님을 위한 진료 전 안내',
    category: '진료안내',
    serviceId: 'surgery',
    animal: '안내',
    breed: '블로그',
    age: '',
    summary: '처음 방문 전 확인하면 좋은 준비사항과 상담 동선을 안내합니다.',
    image: '',
    date: 'Blog',
  },
]
