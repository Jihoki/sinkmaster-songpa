"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  MoveHorizontal,
  Columns2,
  SlidersHorizontal,
  MapPin,
} from "lucide-react";

interface GalleryCase {
  id: string;
  badge: string;
  location: string;
  title: string;
  beforeLabel: string;
  afterLabel: string;
  beforeDesc: string;
  afterDesc: string;
  beforeImg: string;
  afterImg: string;
  tags: string[];
}

const CASES: GalleryCase[] = [
  {
    id: "case-1",
    badge: "Case 01 · 배관 스케일링",
    location: "잠실 엘스 · 리센츠 · 파크리오 · 트리지움",
    title: "기름 슬러지로 꽉 막힌 배관 샤프트 스케일링 전/후",
    beforeLabel: "시공 전",
    afterLabel: "시공 후",
    beforeDesc:
      "다년간 누적된 식용유·기름 슬러지가 단단하게 굳어 싱크대 배관이 막히고 하부장으로 역류하던 상태",
    afterDesc:
      "플렉스 샤프트 스케일링과 고출력 석션 작업으로 배관 내벽 슬러지까지 깨끗하게 분쇄·복원",
    beforeImg: "/images/case1-before.svg",
    afterImg: "/images/case1-after.svg",
    tags: ["플렉스 샤프트", "고출력 석션", "배관 내시경 검수"],
  },
  {
    id: "case-2",
    badge: "Case 02 · 배수통 교체",
    location: "올림픽 선수촌 · 올림픽 훼밀리타운 · 쌍용",
    title: "노후되고 곰팡이 핀 배수통 → 올스텐 배수통 교체",
    beforeLabel: "교체 전",
    afterLabel: "교체 후",
    beforeDesc:
      "오래된 플라스틱 배수통 오염 및 고무 패킹 부식으로 하부장 누수와 배수구 악취가 발생하던 현장",
    afterDesc:
      "위생적인 SUS304 올스텐 배수통 및 냄새/악취 차단 트랩·호스 전면 교체 완료",
    beforeImg: "/images/case2-before.svg",
    afterImg: "/images/case2-after.svg",
    tags: ["SUS304 올스텐 배수통", "악취 차단 트랩", "하부장 누수 해결"],
  },
  {
    id: "case-3",
    badge: "Case 03 · 수전 설치",
    location: "송파 파인타운 · 포레나 · 더센트레 · 힐스테이트",
    title: "노후 누수 수전 → 깔끔한 새 수전 설치",
    beforeLabel: "교체 전",
    afterLabel: "교체 후",
    beforeDesc:
      "오래된 수전 카트리지 파손과 호스 누수로 싱크대 상판 물고임 및 수압 저하 발생",
    afterDesc:
      "깔끔한 신형 거위목 수전 설치 후 냉·온수 수압 및 연결부 누수 완벽 테스트 완료",
    beforeImg: "/images/case3-before.svg",
    afterImg: "/images/case3-after.svg",
    tags: ["전문 수전 교체", "직구 수전 설치대행", "누수 완벽 테스트"],
  },
];

function BeforeAfterCard({
  item,
  viewMode,
}: {
  item: GalleryCase;
  viewMode: "slider" | "sideBySide";
}) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <article className="bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      {/* Header Info */}
      <div className="p-5 sm:p-6 pb-4 sm:pb-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-gray-100 text-gray-800">
            {item.badge}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500">
            <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>{item.location}</span>
          </span>
        </div>
        <h3 className="text-base sm:text-xl font-bold text-gray-900 leading-snug">
          {item.title}
        </h3>
      </div>

      {/* Image Comparison Area */}
      {viewMode === "slider" ? (
        <div className="relative bg-gray-100 select-none border-y border-gray-100">
          <div className="relative w-full aspect-[4/3] overflow-hidden touch-pan-y">
            <Image
              src={item.afterImg}
              alt={`${item.title} - ${item.afterLabel}`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority={item.id === "case-1"}
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <Image
                src={item.beforeImg}
                alt={`${item.title} - ${item.beforeLabel}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority={item.id === "case-1"}
              />
            </div>

            <div className="absolute top-3 left-3 z-10 pointer-events-none">
              <span className="px-2.5 py-1 rounded-md bg-gray-900/80 backdrop-blur-sm text-white text-xs font-bold">
                BEFORE
              </span>
            </div>
            <div className="absolute top-3 right-3 z-10 pointer-events-none">
              <span className="px-2.5 py-1 rounded-md bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold">
                AFTER
              </span>
            </div>

            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-md pointer-events-none z-10"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-gray-900 border border-gray-200 shadow-lg flex items-center justify-center">
                <MoveHorizontal className="w-4 h-4" />
              </div>
            </div>

            <input
              type="range"
              min={5}
              max={95}
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              aria-label={`${item.title} 전후 비교 슬라이더`}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
          </div>
          <div className="bg-gray-50 px-4 py-2 text-center text-xs font-medium text-gray-500">
            슬라이더를 좌우로 움직여 시공 전·후를 비교해보세요
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-px bg-gray-200 border-y border-gray-200">
          <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
            <Image
              src={item.beforeImg}
              alt={`${item.title} - ${item.beforeLabel}`}
              fill
              sizes="(max-width: 768px) 50vw, 20vw"
              className="object-cover"
            />
            <div className="absolute top-2.5 left-2.5">
              <span className="px-2 py-0.5 rounded bg-gray-900/80 text-white text-[11px] font-bold">
                BEFORE
              </span>
            </div>
          </div>
          <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
            <Image
              src={item.afterImg}
              alt={`${item.title} - ${item.afterLabel}`}
              fill
              sizes="(max-width: 768px) 50vw, 20vw"
              className="object-cover"
            />
            <div className="absolute top-2.5 left-2.5">
              <span className="px-2 py-0.5 rounded bg-blue-600/90 text-white text-[11px] font-bold">
                AFTER
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Clean Description */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 sm:space-y-5">
        <div className="space-y-2.5 sm:space-y-3">
          <div className="text-[13px] sm:text-sm text-gray-600 leading-relaxed">
            <span className="font-bold text-gray-900 mr-1.5">시공 전:</span>
            {item.beforeDesc}
          </div>
          <div className="text-[13px] sm:text-sm text-gray-900 font-medium leading-relaxed bg-gray-50 p-3 sm:p-3.5 rounded-xl border border-gray-100">
            <span className="font-bold text-blue-600 mr-1.5">시공 후:</span>
            {item.afterDesc}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function BeforeAfterGallery() {
  const [viewMode, setViewMode] = useState<"slider" | "sideBySide">(
    "sideBySide"
  );

  return (
    <section
      id="gallery"
      className="py-14 sm:py-24 bg-white border-t border-gray-100 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Clean Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm font-bold text-blue-600 tracking-wide uppercase">
            BEFORE & AFTER GALLERY
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-4xl tracking-tight leading-snug">
            송파구 아파트 현장 시공 갤러리
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            모든 사진은 대표가 송파구 현장에서 직접 작업한{" "}
            <strong className="text-gray-900 font-bold underline underline-offset-4">
              100% 실제 현장 사진
            </strong>
            입니다.
          </p>

          {/* Clean Mode Toggle */}
          <div className="mt-5 sm:mt-6 inline-flex p-1 rounded-xl bg-gray-100 border border-gray-200">
            <button
              type="button"
              onClick={() => setViewMode("sideBySide")}
              className={`inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                viewMode === "sideBySide"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Columns2 className="w-4 h-4" />
              <span>2컷 비교</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("slider")}
              className={`inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                viewMode === "slider"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>슬라이드 비교</span>
            </button>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-7">
          {CASES.map((item) => (
            <BeforeAfterCard key={item.id} item={item} viewMode={viewMode} />
          ))}
        </div>

        {/* Trust Notice */}
        <div className="mt-8 sm:mt-10 p-3.5 sm:p-4 rounded-2xl bg-gray-50 border border-gray-200/80 flex items-center justify-center gap-2 text-center text-xs sm:text-sm text-gray-700 font-medium">
          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            모든 사진은 대표가 직접 작업한 100% 실제 현장 사진입니다.
          </span>
        </div>
      </div>
    </section>
  );
}
