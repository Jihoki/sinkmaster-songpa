import React from "react";
import { Component as HeroSectionWithNavigation } from "@/components/ui/hero-section-with-responsive-navigation";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import {
  Phone,
  ShieldCheck,
  Clock,
  UserCheck,
  Wrench,
  Droplets,
  CheckCircle2,
  MapPin,
  Stethoscope,
  Headphones,
  Layers,
  Gauge,
  Building2,
} from "lucide-react";

const FEATURED_APARTMENTS = [
  {
    name: "잠실 엘스 (LLS)",
    dong: "잠실동",
    note: "주방 하부장 배관 슬러지 스케일링 다수 시공",
  },
  {
    name: "잠실 리센츠",
    dong: "잠실동",
    note: "싱크대 역류 해결 및 올스텐 배수통 교체",
  },
  {
    name: "잠실 파크리오",
    dong: "신천동",
    note: "주방 배관 내시경 진단 및 샤프트 작업",
  },
  {
    name: "잠실 트리지움",
    dong: "잠실동",
    note: "고출력 석션 및 기름 슬러지 완벽 분쇄",
  },
  {
    name: "올림픽 선수촌 아파트",
    dong: "방이동",
    note: "구축 배관 맞춤 정밀 스케일링 및 노후 수전·배수통 교체",
  },
  {
    name: "올림픽 훼밀리타운",
    dong: "문정동",
    note: "노후 배관 역류 방지 시공 및 하부장 누수 해결",
  },
  {
    name: "송파 파인타운",
    dong: "장지동",
    note: "1~13단지 단지별 싱크대 배관 구조 완벽 숙지",
  },
  {
    name: "꿈에그린",
    dong: "송파·문정·잠실",
    note: "싱크대 막힘 뚫음 및 악취 차단 트랩 시공",
  },
  {
    name: "포레나",
    dong: "송파·거여",
    note: "싱크대 배수 불량 해결 및 직구 수전 설치대행",
  },
  {
    name: "쌍용아파트",
    dong: "잠실·가락",
    note: "배관 석회·유지방 제거 및 올스텐 배수통 교체",
  },
  {
    name: "더센트레",
    dong: "송파구",
    note: "주방 싱크대 역류 긴급 출동 및 내시경 검수",
  },
  {
    name: "힐스테이트",
    dong: "송파·문정",
    note: "싱크대 하수배관 스케일링 및 수전 교체",
  },
  {
    name: "와이즈더샵",
    dong: "송파구",
    note: "주방 배수구 막힘 해결 및 누수 완벽 점검",
  },
];

const SONGPA_ZONES = [
  {
    region: "잠실 · 신천 · 풍납 권역",
    subtitle: "잠실 대단지 상시 대기 (20분 내 출동)",
    dongs: ["잠실동", "신천동", "풍납동", "잠실본동"],
    apts: ["엘스", "리센츠", "파크리오", "트리지움", "잠실 쌍용", "꿈에그린"],
  },
  {
    region: "방이 · 오금 · 송파 · 석촌 · 삼전",
    subtitle: "송파 중심권 전 지역 신속 방문",
    dongs: ["방이동", "오금동", "송파동", "석촌동", "삼전동"],
    apts: ["올림픽 선수촌 아파트", "더센트레", "포레나", "힐스테이트"],
  },
  {
    region: "문정 · 장지 · 가락 권역",
    subtitle: "문정·장지·가락 대단지 집중 관할",
    dongs: ["문정동", "장지동", "가락동", "가락본동"],
    apts: ["올림픽 훼밀리타운", "파인타운", "가락 쌍용", "힐스테이트", "꿈에그린"],
  },
  {
    region: "거여 · 마천 권역",
    subtitle: "신축·구축 단지 완벽 대응",
    dongs: ["거여동", "마천동", "송파구 전 지역"],
    apts: ["와이즈더샵", "포레나", "더센트레", "송파 전 아파트·빌라·상가"],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "전화 상담 & 증상 접수",
    desc: "증상 확인 및 방문 일정 협의 (24시간 접수)",
    detail:
      "거주하시는 송파구 아파트 단지명과 현재 싱크대 막힘·역류·누수 증상을 말씀해 주시면 예상 원인과 방문 시간을 안내해 드립니다.",
    icon: Headphones,
  },
  {
    step: "02",
    title: "대표 현장 방문 & 정밀 진단",
    desc: "전문 장비로 원인 확인 및 작업 내용 안내",
    detail:
      "하청 기사 없이 대표가 직접 방문하여 배관 내시경 등 전문 장비로 정확한 원인을 진단하고 작업 전 투명한 견적을 안내합니다.",
    icon: Stethoscope,
  },
  {
    step: "03",
    title: "정직한 시공 & 통수 확인",
    desc: "막힘 제거, 수전 교체 후 누수/배수 완벽 테스트",
    detail:
      "플렉스 샤프트 스케일링·석션·수전 및 배수통 교체를 정석대로 시공하며, 고객님과 함께 배수 상태와 누수 여부를 확인합니다.",
    icon: Wrench,
  },
  {
    step: "04",
    title: "미해결 시 0원",
    desc: "해결 불가 시 비용 0원 결제 원칙",
    detail:
      "만약 문제를 해결하지 못하면 출장비와 내시경 점검비를 포함해 단 1원도 청구하지 않습니다.",
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* =========================================================
          HEADER & SECTION 1: HERO SECTION (송파구 싱크대 막힘 집중)
         ========================================================= */}
      <HeroSectionWithNavigation />

      <main className="flex-1">
        {/* =========================================================
            SECTION 2: 차별점 (Why SinkMaster)
           ========================================================= */}
        <section
          id="why-sinkmaster"
          className="py-14 sm:py-24 bg-white border-t border-gray-100 scroll-mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
              <p className="text-xs sm:text-sm font-bold text-blue-600 tracking-wide uppercase">
                WHY SINKMASTER
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-4xl tracking-tight leading-snug">
                설비 업체를 부를 때 가장 불안한 지점,
                <br />
                싱크마스터가 정면으로 해소합니다
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                과도한 중개 수수료나 무책임한 외주 배정 없이, 처음 상담부터 시공 후 검수까지 대표가 직접 책임집니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-7">
              {/* Item 1 */}
              <div className="rounded-2xl bg-gray-50 border border-gray-200/80 p-6 sm:p-8 flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center">
                      <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-sm font-bold text-gray-400">01</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    외주/하청 없는 100% 대표 직접 시공
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    중개 플랫폼의 과도한 수수료나 무책임한 외주 기사 배정이 아닌,{" "}
                    <strong className="text-gray-900 font-semibold">
                      대표 본인이 직접 방문해 끝까지 책임집니다.
                    </strong>
                  </p>
                </div>
                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-gray-200/70 text-xs font-bold text-gray-500">
                  수수료 거품 없는 정직한 현장 견적
                </div>
              </div>

              {/* Item 2 */}
              <div className="rounded-2xl bg-gray-50 border border-gray-200/80 p-6 sm:p-8 flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-sm font-bold text-gray-400">02</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    미해결 시 0원 보장제
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    최신 배관 내시경과 전문 장비로 원인을 진단하며,{" "}
                    <strong className="text-gray-900 font-semibold">
                      문제를 해결하지 못하면 출장비와 점검비를 단 1원도 청구하지 않습니다.
                    </strong>
                  </p>
                </div>
                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-gray-200/70 text-xs font-bold text-blue-600">
                  출장비 · 내시경 점검비 일체 0원 원칙
                </div>
              </div>

              {/* Item 3 */}
              <div className="rounded-2xl bg-gray-50 border border-gray-200/80 p-6 sm:p-8 flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-sm font-bold text-gray-400">03</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    송파구 지역 밀착형 빠른 출동
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    송파구 전 지역 집중 운영으로{" "}
                    <strong className="text-gray-900 font-semibold">
                      야간/주말에도 지체 없이 20~30분 내 신속 방문합니다.
                    </strong>
                  </p>
                </div>
                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-gray-200/70 text-xs font-bold text-gray-500">
                  송파구 아파트 단지별 배관 특성 완벽 파악
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 3: 서비스 안내 (Service Scope - 수전교체/배수통 포함)
           ========================================================= */}
        <section
          id="services"
          className="py-14 sm:py-24 bg-gray-50 border-t border-gray-200/70 scroll-mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
              <p className="text-xs sm:text-sm font-bold text-blue-600 tracking-wide uppercase">
                SERVICE SCOPE
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-4xl tracking-tight leading-snug">
                전문 서비스 안내
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                최신 배관 장비와 검증된 정품 자재로 원인을 정확히 진단하고 재발 없이 해결합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-7">
              {/* Service Card 1 */}
              <div className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center mb-4 sm:mb-6">
                    <Gauge className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    싱크대 막힘 & 역류 뚫음
                  </h3>
                  <p className="text-sm text-gray-500 mb-5 sm:mb-6 leading-relaxed">
                    단순 관통이 아닌 배관 내벽에 굳은 기름 슬러지를 근본적으로 분쇄·세척합니다.
                  </p>

                  <ul className="space-y-3 sm:space-y-3.5 border-t border-gray-100 pt-5 sm:pt-6">
                    <li className="flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-medium text-gray-800">
                        고출력 석션 흡입 작업
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-medium text-gray-800">
                        배관 내부 기름 슬러지 분쇄 (플렉스 샤프트 스케일링)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-medium text-gray-800">
                        정밀 배관 내시경 정밀 검사
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-gray-100">
                  <a
                    href="tel:01050248204"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gray-900 hover:bg-gray-700 text-white font-bold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>막힘·역류 상담 전화하기</span>
                  </a>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center mb-4 sm:mb-6">
                    <Droplets className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    수전 교체 & 설치 대행
                  </h3>
                  <p className="text-sm text-gray-500 mb-5 sm:mb-6 leading-relaxed">
                    노후 누수 수전 교체부터 고객님이 직접 구매하신 수전 설치 대행까지 깔끔하게 시공합니다.
                  </p>

                  <ul className="space-y-3 sm:space-y-3.5 border-t border-gray-100 pt-5 sm:pt-6">
                    <li className="flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-medium text-gray-800">
                        싱크대 원홀/코브라 등 전문 수전 교체
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-medium text-gray-800">
                        고객 직접 구매(인터넷/직구) 수전 설치 대행
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-medium text-gray-800">
                        하부장 앵글밸브 점검 및 누수 완벽 테스트
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-gray-100">
                  <a
                    href="tel:01050248204"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gray-900 hover:bg-gray-700 text-white font-bold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>수전 교체·설치대행 문의</span>
                  </a>
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center mb-4 sm:mb-6">
                    <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    배수통 및 호스 교체
                  </h3>
                  <p className="text-sm text-gray-500 mb-5 sm:mb-6 leading-relaxed">
                    곰팡이와 악취, 하부장 누수를 유발하는 오래된 배수통과 호스를 위생적으로 전면 교체합니다.
                  </p>

                  <ul className="space-y-3 sm:space-y-3.5 border-t border-gray-100 pt-5 sm:pt-6">
                    <li className="flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-medium text-gray-800">
                        노후된 배수통 교체 (일반형 / 위생적인 올스텐 배수통)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-medium text-gray-800">
                        냄새/악취 차단 트랩 및 호스 전면 교체
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-medium text-gray-800">
                        싱크볼 하단 패킹 누수 완벽 밀폐 시공
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-gray-100">
                  <a
                    href="tel:01050248204"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gray-900 hover:bg-gray-700 text-white font-bold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>배수통·악취차단 문의</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 4: 현장 시공 갤러리 (Before & After)
           ========================================================= */}
        <BeforeAfterGallery />

        {/* =========================================================
            SECTION 5: 송파구 서비스 가능 지역 & 대표 출동 아파트 단지
           ========================================================= */}
        <section
          id="coverage"
          className="py-14 sm:py-24 bg-gray-50 border-t border-gray-200/70 scroll-mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
              <p className="text-xs sm:text-sm font-bold text-blue-600 tracking-wide uppercase">
                SONGPA-GU COVERAGE AREA
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-4xl tracking-tight leading-snug">
                송파구 전 지역 · 대표 아파트 단지 책임 시공
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                타 지역 무리한 출장 대신 오직 <strong className="text-gray-900 font-bold">송파구 전 지역</strong>에만 집중하여
                단지별 배관 구조에 맞는 정확한 시공과 빠른 출동을 보장합니다.
              </p>
            </div>

            {/* Songpa-gu Representative Apartments Showcase Grid */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200/90 p-5 sm:p-10 shadow-sm mb-8 sm:mb-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gray-900 text-white flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-extrabold text-gray-900">
                      송파구 다빈도 시공 대표 아파트 단지
                    </h3>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-blue-600">
                  단지별 싱크대 하부 배관 구조 및 수전·배수통 규격 완벽 숙지
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {FEATURED_APARTMENTS.map((apt) => (
                  <div
                    key={apt.name}
                    className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200/70 hover:bg-white hover:border-gray-300 transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-sm sm:text-base font-extrabold text-gray-900">
                        {apt.name}
                      </span>
                      <span className="text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded bg-white border border-gray-200 text-gray-600 shrink-0">
                        {apt.dong}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {apt.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Songpa-gu Dong Zones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {SONGPA_ZONES.map((zone) => (
                <div
                  key={zone.region}
                  className="bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center shrink-0">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-gray-900">
                        {zone.region}
                      </h3>
                    </div>
                    <p className="text-xs font-medium text-gray-500 mb-3.5 sm:mb-4">
                      {zone.subtitle}
                    </p>

                    <div className="mb-3">
                      <div className="text-[11px] font-bold text-gray-400 uppercase mb-1.5">
                        관할 행정동
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {zone.dongs.map((dong) => (
                          <span
                            key={dong}
                            className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200/80 text-xs font-medium text-gray-700"
                          >
                            {dong}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-blue-600 uppercase mb-1.5">
                        주요 아파트 단지
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {zone.apts.map((apt) => (
                          <span
                            key={apt}
                            className="px-2.5 py-1 rounded-md bg-blue-50/70 border border-blue-100 text-xs font-semibold text-gray-800"
                          >
                            {apt}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Required Coverage Policy Notice */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/90 text-center shadow-sm">
              <p className="text-xs sm:text-base font-semibold text-gray-800 leading-relaxed">
                &ldquo;집중 지역(송파구) 외에는 하청을 주지 않고 일정을 무리하게 잡지 않기 위해{" "}
                <span className="text-blue-600 underline underline-offset-4">
                  정해진 송파구 권역만 책임 시공합니다.
                </span>
                &rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 6: 진행 절차 (Process)
           ========================================================= */}
        <section
          id="process"
          className="py-14 sm:py-24 bg-white border-t border-gray-100 scroll-mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
              <p className="text-xs sm:text-sm font-bold text-blue-600 tracking-wide uppercase">
                PROCESS
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-4xl tracking-tight leading-snug">
                진행 절차 안내
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                상담부터 사후 검수까지 투명하고 정직한 4단계 원칙을 지킵니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {PROCESS_STEPS.map((item, idx) => {
                const IconComponent = item.icon;
                const isLast = idx === PROCESS_STEPS.length - 1;
                return (
                  <div
                    key={item.step}
                    className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between ${
                      isLast
                        ? "bg-gray-900 text-white border-gray-900 shadow-lg"
                        : "bg-gray-50 text-gray-900 border-gray-200/80"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <span
                          className={`text-xs font-extrabold px-2.5 py-1 rounded-md ${
                            isLast
                              ? "bg-white text-gray-900"
                              : "bg-white text-gray-900 border border-gray-200"
                          }`}
                        >
                          STEP {item.step}
                        </span>
                        <IconComponent
                          className={`w-5 h-5 sm:w-6 sm:h-6 ${
                            isLast ? "text-blue-400" : "text-gray-700"
                          }`}
                        />
                      </div>

                      <h3 className="text-base sm:text-lg font-bold mb-1.5">{item.title}</h3>
                      <p
                        className={`text-xs sm:text-sm font-semibold mb-2.5 sm:mb-3 ${
                          isLast ? "text-blue-300" : "text-blue-600"
                        }`}
                      >
                        {item.desc}
                      </p>
                      <p
                        className={`text-xs sm:text-sm leading-relaxed ${
                          isLast ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Clean Bottom CTA Box */}
            <div className="mt-10 sm:mt-16 rounded-2xl sm:rounded-3xl bg-gray-50 border border-gray-200/90 p-6 sm:p-12 text-center max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
                송파구 싱크대 막힘, 지금 바로 대표와 직접 상담하세요
              </h3>
              <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
                거주하시는 아파트 단지명과 증상을 말씀해 주시면 과잉 견적 없이 정직하고 정확하게 안내해 드립니다.
                야간·주말·당일 언제든 긴급 출동 가능합니다.
              </p>
              <div className="mt-6 sm:mt-7 flex justify-center">
                <a
                  href="tel:01050248204"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 text-base sm:text-lg font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-700 transition-all shadow-lg shadow-gray-900/10"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  <span>010-5024-8204 전화 연결</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================
          FOOTER: 푸터 정보 (주소 비공개 정책 반영)
         ========================================================= */}
      <footer className="bg-gray-50 text-gray-600 border-t border-gray-200 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                <Wrench className="w-4 h-4" />
              </div>
              <span className="text-base sm:text-lg font-extrabold text-gray-900">
                싱크마스터
              </span>
              <span className="text-xs font-semibold text-gray-400">
                송파구점
              </span>
            </div>

            <a
              href="tel:01050248204"
              className="text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              대표 직통 상담: 010-5024-8204
            </a>
          </div>

          <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-gray-500">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
              <span>
                <strong className="text-gray-800 font-semibold">상호명:</strong>{" "}
                싱크마스터
              </span>
              <span>
                <strong className="text-gray-800 font-semibold">대표 전화:</strong>{" "}
                <a href="tel:01050248204" className="hover:underline">
                  010-5024-8204
                </a>
              </span>
              <span>
                <strong className="text-gray-800 font-semibold">
                  사업자등록번호:
                </strong>{" "}
                849-13-02664
              </span>
            </div>
            <p className="text-xs text-gray-400">
              © SinkMaster. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* =========================================================
          MOBILE FLOATING BAR: 모바일 전용 하단 고정 바
         ========================================================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 pt-2.5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <a
          href="tel:01050248204"
          className="w-full flex items-center justify-center gap-2 bg-gray-900 active:bg-gray-800 text-white font-bold text-[15px] py-3.5 px-4 rounded-xl shadow-md"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span>24시간 긴급 전화 연결 (010-5024-8204)</span>
        </a>
      </div>
    </div>
  );
}
