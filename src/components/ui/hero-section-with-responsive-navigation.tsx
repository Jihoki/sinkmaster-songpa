"use client";

import React, { useState } from "react";
import {
  Phone,
  Wrench,
  Menu,
  X,
  UserCheck,
  ShieldCheck,
  Clock,
  Building2,
  Play,
  Sparkles,
} from "lucide-react";

const SONGPA_APARTMENTS = [
  "잠실 엘스",
  "리센츠",
  "파크리오",
  "트리지움",
  "올림픽 선수촌 아파트",
  "올림픽 훼밀리타운",
  "송파 파인타운",
  "꿈에그린",
  "포레나",
  "쌍용아파트",
  "더센트레",
  "힐스테이트",
  "와이즈더샵",
];

export const Component = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Sticky & Clean Responsive Navigation Header */}
      <header className="sticky top-0 z-50 bg-gray-50/95 backdrop-blur-md border-b border-gray-200/80 py-3.5 md:py-5">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <div className="flex-shrink-0">
              <a
                href="#"
                className="flex items-center gap-2 sm:gap-2.5 rounded-lg outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gray-900 text-white flex items-center justify-center shadow-sm shrink-0">
                  <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg sm:text-xl font-extrabold tracking-tight text-gray-900">
                    싱크마스터
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-gray-500 tracking-wider uppercase">
                    송파구점
                  </span>
                </div>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:01050248204"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-gray-900 rounded-xl shadow-sm active:scale-95 transition-transform"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>전화상담</span>
              </a>
              <button
                type="button"
                className="p-2 text-gray-900 rounded-lg hover:bg-gray-200/60 transition-colors"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                aria-label="메뉴 열기"
              >
                {expanded ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Desktop Center Anchor Links */}
            <nav className="hidden lg:flex lg:ml-12 lg:items-center lg:justify-center lg:space-x-9 xl:space-x-12">
              <a
                href="#why-sinkmaster"
                className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                차별점
              </a>
              <a
                href="#services"
                className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                서비스 안내
              </a>
              <a
                href="#gallery"
                className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                시공 갤러리
              </a>
              <a
                href="#coverage"
                className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                송파구 출동 지역·단지
              </a>
              <a
                href="#process"
                className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                진행 절차
              </a>
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-6">
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                송파구 24시 상시 대기
              </span>
              <a
                href="tel:01050248204"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-700 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>전화 상담 (010-5024-8204)</span>
              </a>
            </div>
          </div>

          {/* Mobile Expanded Menu */}
          {expanded && (
            <nav className="lg:hidden border-t border-gray-200 mt-3.5 pt-3 pb-2">
              <div className="grid gap-y-1">
                {[
                  { label: "차별점 (Why SinkMaster)", href: "#why-sinkmaster" },
                  { label: "전문 서비스 안내", href: "#services" },
                  { label: "현장 시공 갤러리", href: "#gallery" },
                  { label: "송파구 출동 지역·아파트 단지", href: "#coverage" },
                  { label: "진행 절차", href: "#process" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setExpanded(false)}
                    className="flex items-center px-3 py-2.5 text-sm sm:text-base font-semibold text-gray-900 hover:bg-gray-100 active:bg-gray-200/70 rounded-xl transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="tel:01050248204"
                  onClick={() => setExpanded(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-700"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>전화 상담 (010-5024-8204)</span>
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section (오직 송파구 싱크대 막힘만 강조) */}
      <section className="pt-8 sm:pt-16 lg:pt-20 bg-gray-50 overflow-x-hidden">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Top Sub-copy Pill */}
            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs sm:text-base font-semibold text-gray-700 max-w-full">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0" />
              <span className="truncate sm:whitespace-normal">
                하청 없는 100% 대표 직접 시공 · 못 뚫으면 0원
              </span>
            </div>

            {/* Main Headline (수전교체 제외, 송파구 싱크대 막힘만 집중) */}
            <h1 className="mt-5 sm:mt-6 text-[30px] font-extrabold text-gray-900 sm:text-5xl lg:text-[56px] leading-[1.26] sm:leading-[1.22] tracking-tight">
              송파구 싱크대 막힘,
              <br />
              <span className="relative inline-flex mt-1.5 sm:mt-2">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 absolute inset-0"></span>
                <span className="relative">대표가 직접 갑니다.</span>
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-[15px] sm:text-lg text-gray-600 max-w-2xl mx-auto leading-[1.65] sm:leading-relaxed">
              엘스 · 리센츠 · 파크리오 · 트리지움 · 올림픽선수촌 · 훼밀리타운 · 파인타운 등
              송파구 아파트 단지별 배관 구조를 완벽히 파악한 대표가 직접 방문하여
              기름 슬러지 막힘과 역류를 근본적으로 해결합니다.
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row sm:justify-center gap-3 sm:gap-4">
              <a
                href="tel:01050248204"
                className="inline-flex items-center justify-center gap-2.5 w-full px-6 sm:px-8 py-4 text-base sm:text-lg font-bold text-white bg-gray-900 rounded-xl sm:w-auto hover:bg-gray-700 active:scale-[0.99] transition-all shadow-lg shadow-gray-900/10"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>24시 긴급 출동 전화하기</span>
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center justify-center w-full px-6 py-3.5 sm:py-4 text-base sm:text-lg font-bold text-gray-900 bg-white border-2 border-gray-300 rounded-xl sm:w-auto hover:bg-gray-900 hover:text-white hover:border-gray-900 active:scale-[0.99] transition-all"
              >
                <Play className="w-4 h-4 mr-2 fill-current shrink-0" />
                <span>시공 전/후 사진 보기</span>
              </a>
            </div>

            <p className="mt-4 sm:mt-5 text-xs sm:text-sm font-medium text-gray-500 leading-relaxed">
              송파구 직통 <strong className="text-gray-800">010-5024-8204</strong> · 미해결 시 출장비·내시경 점검비 일체 0원
            </p>
          </div>
        </div>

        {/* Split Background Showcase Card (3대 안심 약속 & 송파구 주요 출동 아파트 단지) */}
        <div className="pb-12 sm:pb-16 pt-8 sm:pt-10 bg-white">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="rounded-2xl sm:rounded-3xl bg-white border border-gray-200/90 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.08)] p-5 sm:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 pb-4 sm:pb-6 mb-5 sm:mb-6 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-sm sm:text-base font-bold text-gray-900">
                        싱크마스터 3대 안심 약속
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-500">
                      송파구 전 지역 20~30분 내 신속 방문
                    </span>
                  </div>

                  {/* 3 Trust Badges */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
                    <div className="p-4 sm:p-6 rounded-2xl bg-gray-50/80 border border-gray-100 flex items-start sm:flex-col gap-3.5 sm:gap-0 justify-between">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gray-900 text-white flex items-center justify-center shrink-0 sm:mb-4">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] sm:text-xs font-bold text-blue-600 mb-0.5 sm:mb-1">
                          PROMISE 01
                        </div>
                        <h2 className="text-base sm:text-lg font-extrabold text-gray-900">
                          100% 대표 직접 방문
                        </h2>
                        <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                          외주·하청 기사를 보내지 않고 대표가 직접 방문하여 정직한 비용으로 책임 시공합니다.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6 rounded-2xl bg-gray-50/80 border border-gray-100 flex items-start sm:flex-col gap-3.5 sm:gap-0 justify-between">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gray-900 text-white flex items-center justify-center shrink-0 sm:mb-4">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] sm:text-xs font-bold text-blue-600 mb-0.5 sm:mb-1">
                          PROMISE 02
                        </div>
                        <h2 className="text-base sm:text-lg font-extrabold text-gray-900">
                          못 뚫으면 0원
                        </h2>
                        <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                          싱크대 막힘을 해결하지 못하면 출장비와 내시경 점검비를 단 1원도 청구하지 않습니다.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6 rounded-2xl bg-gray-50/80 border border-gray-100 flex items-start sm:flex-col gap-3.5 sm:gap-0 justify-between">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gray-900 text-white flex items-center justify-center shrink-0 sm:mb-4">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] sm:text-xs font-bold text-blue-600 mb-0.5 sm:mb-1">
                          PROMISE 03
                        </div>
                        <h2 className="text-base sm:text-lg font-extrabold text-gray-900">
                          24시간 야간/당일 긴급 출동
                        </h2>
                        <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                          갑작스러운 싱크대 역류와 막힘에도 야간·주말·공휴일 상관없이 즉시 출동합니다.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Songpa-gu Representative Apartment Complexes Bar */}
                  <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 mb-2.5 sm:mb-3">
                      <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>송파구 주요 다빈도 출동 아파트 단지</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      {SONGPA_APARTMENTS.map((apt) => (
                        <span
                          key={apt}
                          className="inline-flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-gray-100 text-gray-800 text-[11px] sm:text-xs font-semibold"
                        >
                          {apt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
