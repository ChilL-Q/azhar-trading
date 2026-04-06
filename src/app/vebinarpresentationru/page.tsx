import React from "react";
import { PresentationViewer } from "@/components/PresentationViewer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Вебинар Презентация | Azhar Trading',
  description: 'Презентация онлайн вебинара: инвестиции, трейдинг, заработок на акциях',
};

export default function VebinarPresentationPageRu() {
  return (
    <main className="min-h-screen bg-black">
      <PresentationViewer lang="ru" />
    </main>
  );
}
