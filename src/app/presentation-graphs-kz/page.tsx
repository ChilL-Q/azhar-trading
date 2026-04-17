import React from "react";
import { GraphsPresentationViewer } from "@/components/GraphsPresentationViewer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Трейдинг негіздері | Azhar Trading",
  description:
    "Толық білім беру курсы: қор нарығы, акциялар, жапон шамдары, техникалық және фундаменталды анализ",
};

export default function PresentationGraphsKz() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <GraphsPresentationViewer lang="kz" />
    </main>
  );
}
