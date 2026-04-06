import React from "react";
import { PresentationViewer } from "@/components/PresentationViewer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Вебинар Презетациясы | Azhar Trading',
  description: 'Онлайн вебинар презентациясы: инвестициялар, трейдинг, акциялармен табыс табу',
};

export default function VebinarPresentationPageKz() {
  return (
    <main className="min-h-screen bg-black">
      <PresentationViewer lang="kz" />
    </main>
  );
}
