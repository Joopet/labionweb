export const hospitalData = {
  name: "라비온 동물의료센터",
  logoUrl: "", // e.g. "/images/logo.png"
  address: "경기도 안산시 단원구 광덕대로 154, 2층",
  phone: "031-123-4567",
  hours: [
    { day: "연중무휴", time: "10:00 - 20:00" },
    { day: "점심시간", time: "13:00 - 14:00" },
  ],
  parking: "건물 지하주차장 이용 가능 (내원 시 무료)",
  brandColors: {
    primaryBlue: "#00377b",
    neutralGray: "#808080",
    accentBlue: "#1da8fc",
    lightGray: "#F5F5F7"
  },
  hero: {
    videoUrl: "", // e.g., "/videos/main.mp4"
    posterUrl: "", // e.g., "/images/main-poster.jpg"
    imageUrl: "/images/hero-placeholder.jpg",
    title: "세심한 설명과 진료로\n반려동물의 건강한 일상을 함께합니다",
    description: "라비온 동물의료센터는 보호자와 반려동물이 안심할 수 있도록 충분한 설명과 책임 있는 진료를 지향합니다."
  },
  links: {
    naverMap: "https://naver.me/xoQrIVKl",
    blog: "https://blog.naver.com/labionamc",
    kakaoTalk: "https://pf.kakao.com/_XbSFn",
    instagram: "https://instagram.com", // placeholder
    privacyPolicy: "/privacy-policy",
  },
  brandIntro: {
    category: "LABION BRAND",
    title: "라비온은 보호자와 반려동물의 이야기를 세심하게 듣습니다.",
    description: "라비온 동물의료센터는 반려동물의 작은 변화까지 놓치지 않고 살피며, 보호자님이 치료 과정을 충분히 이해하실 수 있도록 차분히 설명드립니다."
  },
  philosophyTabs: [
    {
      id: "idea",
      tabName: "라비온을 만든 생각",
      title: "반려동물의 건강은 보호자님의 작은 관찰에서 시작됩니다.",
      description: "라비온은 보호자님의 이야기를 충분히 듣고, 반려동물의 상태를 세심하게 확인하며 필요한 진료 방향을 함께 고민합니다."
    },
    {
      id: "philosophy",
      tabName: "진료 철학",
      title: "충분히 확인하고, 이해하기 쉽게 설명합니다.",
      description: "빠른 판단보다 충분한 확인을, 어려운 설명보다 이해하기 쉬운 설명을, 일방적인 진료보다 보호자와 함께 결정하는 진료를 지향합니다."
    },
    {
      id: "people",
      tabName: "사람들",
      title: "아이의 건강한 일상을 함께 고민하는 사람들",
      description: "라비온의 의료진은 반려동물의 상태뿐 아니라 보호자님의 걱정까지 함께 살피는 진료를 지향합니다."
    }
  ],
  services: [
    {
      id: "vaccine",
      title: "예방접종",
      description: "연령과 생활 환경에 맞춘 예방접종 및 기초 건강관리 안내",
      tags: ["종합백신", "광견병", "코로나장염", "켄넬코프", "인플루엔자"],
    },
    {
      id: "checkup",
      title: "건강검진",
      description: "반려동물의 나이와 상태에 맞춘 기본 검진 및 건강 상태 확인",
      tags: ["연령별 맞춤 검진", "생애주기 검진", "정밀 초음파", "종합 혈액검사"],
    },
    {
      id: "internal",
      title: "내과 진료",
      description: "소화기, 호흡기, 내분비 등 다양한 내과 증상 상담 및 진료",
      tags: ["소화기능 장애", "호흡기 질환", "당뇨/갑상선", "신장/비뇨기 질환", "심장 질환"],
    },
    {
      id: "skin",
      title: "피부·귀 진료",
      description: "가려움, 피부 발진, 외이염 등 반복되는 피부·귀 증상 진료",
      tags: ["알레르기 피부염", "아토피", "만성 외이염", "곰팡이/세균 감염"],
    },
    {
      id: "dental",
      title: "치과 진료",
      description: "구강 상태 확인, 스케일링, 발치 등 치과 진료 상담",
      tags: ["스케일링", "폴리싱", "유치 발치", "치주염 치료", "구강 방사선"],
    },
    {
      id: "neuter",
      title: "중성화 수술",
      description: "반려동물의 상태를 고려한 중성화 수술 상담 및 관리",
      tags: ["수컷 중성화", "암컷 중성화", "잠복고환 수술", "최소 절개", "철저한 마취 관리"],
    },
    {
      id: "surgery",
      title: "외과 진료",
      description: "일반외과 및 정형외과 관련 상담과 진료",
      tags: ["슬개골 탈구", "골절 수술", "연부조직 수술", "종양 제거", "재활 치료"],
    },
    {
      id: "lab",
      title: "영상·혈액 검사",
      description: "X-ray, 초음파, 혈액검사 등 상태 확인에 필요한 검사",
      tags: ["디지털 X-ray", "정밀 초음파", "혈액화학 분석", "전해질/가스 분석", "현미경 검사"],
    },
    {
      id: "senior",
      title: "노령동물 관리",
      description: "노령 반려동물의 만성질환 관리와 생활관리 상담",
      tags: ["만성질환 집중 관리", "통증 관리", "치매/인지장애", "호스피스 케어", "영양/식이 상담"],
    },
  ],
  staff: [
    {
      name: "하종수",
      role: "대표원장",
      specialty: "내과 / 영상의학",
      philosophy: "보호자님이 아이의 상태를 충분히 이해하실 수 있도록 차분히 설명드리겠습니다.",
      imageUrl: "/images/staff-placeholder-1.jpg",
      history: [
        "현) 라비온 동물의료센터 대표원장",
        "전) 대형 동물의료센터 내과 과장",
        "수의내과학 석사 과정 수료",
        "한국수의내과연구회(KSVIM) 정회원",
      ],
    },
    {
      name: "양성현",
      role: "외과원장",
      specialty: "정형외과 / 일반외과",
      philosophy: "반려동물의 상태와 회복 과정을 고려해 신중하게 진료하겠습니다.",
      imageUrl: "/images/staff-placeholder-2.jpg",
      history: [
        "현) 라비온 동물의료센터 외과원장",
        "전) 동물의료센터 외과 팀장",
        "AOVET(국제수의정형외과) Basic Course 이수",
        "한국수의외과학회(KSVS) 정회원",
      ],
    },
    {
      name: "김승남",
      role: "내과원장",
      specialty: "내과 / 영상의학",
      philosophy: "작은 변화도 놓치지 않도록 세심하게 살피고 설명드리겠습니다.",
      imageUrl: "/images/staff-placeholder-3.jpg",
      history: [
        "현) 라비온 동물의료센터 내과원장",
        "전) 동물의료센터 영상진단과장",
        "수의영상의학 심화과정 수료",
        "한국임상수의학회 정회원",
      ],
    },
  ],
  facilities: [
    { id: "exterior", name: "외관 및 입구", description: "보호자와 반려동물을 환영하는 라비온의 첫인상입니다.", imageUrl: "/images/facility-placeholder-exterior.jpg" },
    { id: "lobby", name: "대기 공간", description: "진료 전 긴장을 풀 수 있도록 마련된 넓고 편안한 대기실입니다.", imageUrl: "/images/facility-placeholder-1.jpg" },
    { id: "clinic", name: "진료실", description: "아이들의 스트레스를 최소화하기 위해 분리된 맞춤형 진료실입니다.", imageUrl: "/images/facility-placeholder-2.jpg" },
    { id: "treatment", name: "처치실", description: "신속하고 안전한 응급 처치와 회복이 이루어지는 공간입니다.", imageUrl: "/images/facility-placeholder-treatment.jpg" },
    { id: "surgery", name: "수술실", description: "철저한 멸균 시스템과 최신 마취 모니터링 장비를 갖춘 수술실입니다.", imageUrl: "/images/facility-placeholder-3.jpg" },
    { id: "xray", name: "영상검사실", description: "X-ray 및 초음파 장비를 통해 정확한 영상 진단을 진행합니다.", imageUrl: "/images/facility-placeholder-4.jpg" },
    { id: "ward", name: "입원실", description: "수술 후 회복과 중증 환자 관리를 위한 산소 공급 및 항온항습 입원실입니다.", imageUrl: "/images/facility-placeholder-5.jpg" },
    { id: "lab", name: "혈액검사 장비", description: "신속하고 정밀한 분석이 가능한 최신 혈액 및 화학 분석 장비입니다.", imageUrl: "/images/facility-placeholder-lab.jpg" },
  ],
  storyCards: [
    {
      id: 1,
      title: "라비온 동물의료센터 진료 안내",
      summary: "보호자와 아이들이 편안하게 내원하실 수 있도록 라비온의 전문 진료과목과 진료 절차를 정성껏 안내해 드립니다.",
      link: "https://blog.naver.com/labionamc"
    },
    {
      id: 2,
      title: "반려동물 건강관리 정보",
      summary: "환절기 건강 관리부터 주기별 예방접종까지, 반려동물의 건강한 일상을 위해 꼭 알아야 할 기초 의학 정보를 전해 드립니다.",
      link: "https://blog.naver.com/labionamc"
    },
    {
      id: 3,
      title: "보호자님을 위한 진료 전 안내",
      summary: "진료 및 검사 전 금식 여부, 이동 시 안정을 돕는 방법 등 내원 시 반려동물의 스트레스를 덜어주는 필수 가이드입니다.",
      link: "https://blog.naver.com/labionamc"
    }
  ],
  channels: [
    {
      name: "네이버 지도",
      description: "병원 위치 확인 및 내비게이션 연결",
      url: "https://naver.me/xoQrIVKl"
    },
    {
      name: "네이버 블로그",
      description: "라비온의 다양한 진료 케이스와 소식",
      url: "https://blog.naver.com/labionamc"
    },
    {
      name: "카카오톡 상담",
      description: "간편한 1:1 채팅 문의 및 상담",
      url: "https://pf.kakao.com/_XbSFn"
    },
    {
      name: "인스타그램",
      description: "라비온의 따뜻한 일상 소통 채널",
      url: "https://instagram.com"
    }
  ],
  companyInfo: {
    businessNumber: "사업자등록번호 준비 중",
    representative: "하종수",
  },
  about: {
    brandMeaning: {
      title: "LABION의 의미",
      subtitle: "Lab(연구) + bion(생명) — 생명을 연구하고 살피는 곳",
      description: "라비온이라는 이름에는 반려동물의 생명을 소중히 여기고 과학적인 근거를 바탕으로 세심하게 진료하겠다는 의지가 담겨 있습니다. 보호자님의 이야기를 충분히 듣고, 반려동물의 작은 변화까지 놓치지 않는 것이 라비온 동물의료센터의 출발점입니다.",
    },
    promises: [
      {
        title: "충분히 듣고 설명합니다",
        description: "보호자님의 걱정과 반려동물의 상태를 세심하게 확인하고, 진료 과정과 치료 방향을 이해하기 쉽게 설명드립니다.",
      },
      {
        title: "필요한 진료를 함께 결정합니다",
        description: "증상과 상태를 바탕으로 필요한 검사와 진료 방향을 안내하고, 보호자님과 충분히 상의하며 치료 계획을 세웁니다.",
      },
      {
        title: "아이의 입장에서 살핍니다",
        description: "반려동물이 낯선 환경에서 느낄 수 있는 불안과 스트레스를 줄일 수 있도록 차분하고 세심한 진료를 지향합니다.",
      },
    ],
  },
  preVisitGuide: [
    {
      title: "금식 안내",
      description: "검사 종류에 따라 6~12시간 금식이 필요할 수 있습니다. 내원 전 전화로 확인해 주세요.",
    },
    {
      title: "이동 시 안전",
      description: "반려동물의 안전을 위해 이동장 또는 하네스를 착용하고 내원해 주세요.",
    },
    {
      title: "증상 기록",
      description: "평소와 다른 행동이나 증상이 있다면 메모 또는 사진·영상으로 기록해 오시면 진료에 도움이 됩니다.",
    },
    {
      title: "기존 진료 기록",
      description: "다른 병원에서 진료받으신 기록이 있다면 함께 가져오시면 진단에 도움이 됩니다.",
    },
  ],
};