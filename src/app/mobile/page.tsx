"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Smartphone, ExternalLink, RotateCcw } from "lucide-react";

const DEVICES = [
  { id: "iphone-15", name: "iPhone 15 Pro (393×852)", width: 393, height: 852 },
  { id: "iphone-se", name: "iPhone SE / 소형 (375×667)", width: 375, height: 667 },
  { id: "galaxy-s24", name: "Galaxy S24 (412×915)", width: 412, height: 915 },
];

export default function MobilePreviewPage() {
  const [device, setDevice] = useState(DEVICES[0]);
  const [iframeKey, setIframeKey] = useState(0);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center py-6 px-4">
      {/* Top Control Bar */}
      <div className="w-full max-w-4xl bg-slate-800/90 border border-slate-700 rounded-2xl p-4 mb-6 flex flex-wrap items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-extrabold text-white">
              싱크마스터 모바일 화면 미리보기
            </h1>
            <p className="text-xs text-slate-400">
              실제 스마트폰 해상도({device.width}px)에서 보이는 실시간 화면입니다
            </p>
          </div>
        </div>

        {/* Device Selector & Actions */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex bg-slate-900 p-1 rounded-xl border border-slate-700">
            {DEVICES.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setDevice(d)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  device.id === d.id
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {d.name.split(" ")[0]} {d.width}px
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIframeKey((k) => k + 1)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-xs font-bold text-slate-200 transition-colors"
            title="새로고침"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>새로고침</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs font-extrabold transition-colors"
          >
            <span>전체 화면(PC) 보기</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Smartphone Frame */}
      <div
        className="relative rounded-[44px] bg-slate-950 p-3 shadow-[0_25px_80px_rgba(0,0,0,0.65)] border-[4px] border-slate-700 transition-all duration-300"
        style={{
          width: `${device.width + 24}px`,
          maxWidth: "100%",
        }}
      >
        {/* Top Speaker / Notch Bar */}
        <div className="w-28 h-5 bg-slate-950 rounded-b-2xl mx-auto mb-1 flex items-center justify-center">
          <div className="w-12 h-1.5 rounded-full bg-slate-800" />
        </div>

        {/* Mobile Viewport Iframe */}
        <div
          className="bg-white rounded-[32px] overflow-hidden border border-slate-800"
          style={{
            width: "100%",
            height: `${device.height}px`,
            maxHeight: "82vh",
          }}
        >
          <iframe
            key={iframeKey}
            src="/"
            title="싱크마스터 모바일 화면"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
