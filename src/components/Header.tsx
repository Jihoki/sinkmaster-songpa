"use client";

import React, { useState } from "react";
import { Phone, Wrench, Menu, X, ShieldCheck } from "lucide-react";

const navItems = [
  { label: "차별점", href: "#why-sinkmaster" },
  { label: "서비스 안내", href: "#services" },
  { label: "시공 갤러리", href: "#gallery" },
  { label: "서비스 가능 지역", href: "#coverage" },
  { label: "진행 절차", href: "#process" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-lg">
      {/* Top micro announcement bar */}
      <div className="bg-blue-600/95 text-white text-xs sm:text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
            <span>
              송파·강동·위례·미사 <strong className="text-amber-300">100% 대표 직접 방문</strong> · 못 뚫으면 출장비 0원
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-blue-100 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            24시간 야간·주말·당일 긴급출동 대기중
          </span>
        </div>
      </div>

      {/* Main Header Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="싱크마스터 홈으로 이동"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform">
            <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                싱크마스터
              </span>
              <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">
                SinkMaster
              </span>
            </div>
            <span className="text-[11px] text-slate-400 hidden sm:block">
              배관 스케일링 · 수전 · 배수통 책임시공
            </span>
          </div>
        </a>

        {/* Desktop Anchor Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm lg:text-base font-semibold text-slate-200 hover:text-amber-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Top-Right Call CTA */}
        <div className="flex items-center gap-2.5">
          <a
            href="tel:01050248204"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl shadow-md shadow-amber-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm lg:text-base"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950 shrink-0" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1.5 leading-tight">
              <span className="hidden lg:inline text-xs font-bold bg-slate-950/15 px-1.5 py-0.5 rounded">
                전화 상담
              </span>
              <span className="tracking-tight">010-5024-8204</span>
            </div>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="tel:01050248204"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl shadow-md"
            >
              <Phone className="w-5 h-5" />
              <span>대표 직통 전화상담 (010-5024-8204)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
