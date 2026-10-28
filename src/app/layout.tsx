import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#111827",
};

export const metadata: Metadata = {
  title:
    "싱크마스터 | 송파구 싱크대막힘·역류·배수통교체·수전교체 전문 (대표직접시공)",
  description:
    "송파구 싱크대 막힘 뚫음, 샤프트 스케일링, 수전 교체(설치대행), 배수통 교체. 잠실 엘스, 리센츠, 파크리오, 트리지움, 파인타운, 올림픽선수촌, 훼밀리타운 전 단지 24시간 대표 직접 출동! 못 뚫으면 0원.",
  keywords: [
    "송파구 싱크대 막힘",
    "송파구 싱크대 역류",
    "잠실 싱크대 막힘",
    "잠실 싱크대 역류",
    "잠실 엘스 싱크대 막힘",
    "잠실 리센츠 싱크대 막힘",
    "파크리오 싱크대 막힘",
    "트리지움 싱크대 막힘",
    "송파 파인타운 싱크대 막힘",
    "올림픽선수촌아파트 싱크대 막힘",
    "올림픽훼밀리타운 싱크대 막힘",
    "송파 꿈에그린 싱크대 막힘",
    "송파 포레나 싱크대 막힘",
    "송파 쌍용아파트 싱크대 막힘",
    "송파 더센트레 싱크대 막힘",
    "송파 힐스테이트 싱크대 막힘",
    "송파 와이즈더샵 싱크대 막힘",
    "송파 수전 교체",
    "송파 배수통 교체",
    "잠실 배수통 교체",
    "싱크대 수전 설치대행",
    "플렉스 샤프트 스케일링",
    "싱크마스터",
  ],
  openGraph: {
    title:
      "싱크마스터 | 송파구 싱크대막힘 전문 (대표직접시공 · 못 뚫으면 0원)",
    description:
      "송파구 전 지역(엘스·리센츠·파크리오·트리지움·파인타운·올림픽선수촌·훼밀리타운 등) 싱크대 막힘 뚫음, 샤프트 스케일링, 수전·배수통 교체. 24시간 대표 직접 출동.",
    type: "website",
    locale: "ko_KR",
    siteName: "싱크마스터 (SinkMaster)",
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "싱크마스터",
  telephone: "010-5024-8204",
  areaServed: [{ "@type": "AdministrativeArea", name: "서울특별시 송파구" }],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "미해결 시 0원",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col pb-20 md:pb-0">
        {children}
      </body>
    </html>
  );
}
