import React from "react";
import { GraphsPresentationViewer } from "@/components/GraphsPresentationViewer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Трейдинг с нуля | Azhar Trading",
  description:
    "Полный образовательный курс: фондовый рынок, акции, японские свечи, технический и фундаментальный анализ",
};

export default function PresentationGraphsRu() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <GraphsPresentationViewer lang="ru" />
    </main>
  );
}
