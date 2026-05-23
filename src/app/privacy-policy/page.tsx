import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { PageHero } from "@/components/ui/PageHero";
import { hospitalData } from "@/data/hospitalData";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 라비온 동물의료센터",
  description: "라비온 동물의료센터 개인정보처리방침입니다.",
};

const sections = [
  {
    title: "1. 개인정보의 처리 목적",
    content: `${hospitalData.name}은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.

• 진료 예약 및 상담: 보호자 본인 확인, 진료 예약 관리, 상담 내역 기록
• 서비스 제공: 진료 기록 관리, 처방전 발행, 검사 결과 안내
• 공지사항 전달: 진료 관련 안내, 예방접종 알림 등 서비스 관련 정보 제공`,
  },
  {
    title: "2. 개인정보의 처리 및 보유기간",
    content: `${hospitalData.name}은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.

• 진료 기록: 「의료법」에 따라 진료 기록부는 10년, 처방전은 2년 보존
• 전자상거래 관련 기록: 「전자상거래 등에서의 소비자보호에 관한 법률」에 따라 5년
• 상담 및 문의 기록: 상담 완료 후 1년`,
  },
  {
    title: "3. 개인정보의 제3자 제공",
    content: `${hospitalData.name}은(는) 정보주체의 개인정보를 제1조에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.

현재 개인정보를 제3자에게 제공하고 있지 않습니다.`,
  },
  {
    title: "4. 개인정보의 파기",
    content: `${hospitalData.name}은(는) 개인정보 보유기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.

• 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.
• 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.`,
  },
  {
    title: "5. 정보주체의 권리·의무",
    content: `정보주체는 ${hospitalData.name}에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.

• 개인정보 열람 요구
• 오류 등이 있을 경우 정정 요구
• 삭제 요구
• 처리 정지 요구

위의 권리 행사는 ${hospitalData.name}에 대해 서면, 전화, 전자우편 등을 통하여 하실 수 있으며, ${hospitalData.name}은(는) 이에 대해 지체 없이 조치하겠습니다.`,
  },
  {
    title: "6. 개인정보 보호책임자",
    content: `${hospitalData.name}은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.

• 개인정보 보호책임자: ${hospitalData.companyInfo.representative}
• 연락처: ${hospitalData.phone}

정보주체는 ${hospitalData.name}의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다.`,
  },
  {
    title: "7. 개인정보 처리방침 변경",
    content: `이 개인정보 처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경 내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.

• 시행일: 2025년 1월 1일`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full pb-16 lg:pb-0">
        <PageHero
          title="개인정보처리방침"
          description={`${hospitalData.name}의 개인정보처리방침을 안내합니다.`}
        />

        {/* Policy Content */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {sections.map((section) => (
                <article key={section.title}>
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--color-primary-blue)] mb-4 tracking-tight">
                    {section.title}
                  </h2>
                  <div className="text-sm sm:text-base text-gray-600 leading-relaxed whitespace-pre-line font-medium">
                    {section.content}
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom info */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-xs text-gray-400 font-medium">
                본 방침에 대한 문의사항이 있으시면{" "}
                <a
                  href={`tel:${hospitalData.phone.replace(/-/g, "")}`}
                  className="text-[var(--color-accent-blue)] hover:underline font-bold"
                >
                  {hospitalData.phone}
                </a>
                으로 연락해 주시기 바랍니다.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
