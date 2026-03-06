"use client";

import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { PainPoints } from "@/components/PainPoints";
import { TargetAudience } from "@/components/TargetAudience";
import { ExpertBio } from "@/components/ExpertBio";
import { WebinarProgram } from "@/components/WebinarProgram";
import { CourseBenefits } from "@/components/CourseBenefits";
import { SocialProof } from "@/components/SocialProof";
import { CourseTeaser } from "@/components/CourseTeaser";
import { Footer } from "@/components/Footer";
import { LeadModal } from "@/components/LeadModal";
import { useState } from "react";
// We will add more components here later.

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const telegramLink = "https://t.me/azhar_ustaz";
  const whatsappLink = "https://wa.me/77774001518";

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <PainPoints />
      <TargetAudience />
      <ExpertBio />
      <WebinarProgram />
      <CourseBenefits />
      <SocialProof />
      <CourseTeaser onOpenModal={() => setIsModalOpen(true)} />
      <Footer telegramLink={telegramLink} whatsappLink={whatsappLink} />

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        telegramLink={telegramLink}
        whatsappLink={whatsappLink}
      />
    </main>
  );
}
