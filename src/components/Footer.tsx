"use client";

import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { PrivacyModal } from "./PrivacyModal";
import { TermsModal } from "./TermsModal";
import { RiskModal } from "./RiskModal";
import { useTranslation } from "@/i18n/LanguageContext";
import Image from "next/image";

interface FooterProps {
    telegramLink: string;
    whatsappLink: string;
}

export function Footer({ telegramLink, whatsappLink }: FooterProps) {
    const { t } = useTranslation();
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isRiskOpen, setIsRiskOpen] = useState(false);

    return (
        <footer className="bg-slate-950 text-white py-12 border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">

                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 relative rounded-full bg-accent flex items-center justify-center font-bold text-accent-foreground overflow-hidden">
                            <Image src="/avatar-new.jpg" alt="Azhar Trading" fill className="object-cover object-center" sizes="40px" />
                        </div>
                        <div>
                            <span className="font-semibold text-xl tracking-tight block">
                                Azhar Trading
                            </span>
                            <span className="text-sm text-white/50 block">Халяль инвестиции</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center h-12 w-12 rounded-full bg-white/10 hover:bg-[#25D366] transition-colors"
                            aria-label="Написать в WhatsApp"
                        >
                            <MessageCircle className="h-5 w-5 text-white" />
                        </a>
                        <a
                            href={telegramLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center h-12 w-12 rounded-full bg-white/10 hover:bg-[#0088cc] transition-colors"
                            aria-label="Написать в Telegram"
                        >
                            <Send className="h-5 w-5 text-white ml-[-2px]" />
                        </a>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5 text-sm text-white/50">
                    <div className="max-w-xl text-center md:text-left">
                        <p className="mb-2">© {new Date().getFullYear()} Azhar Trading. {t("footer.rights")}</p>
                        <p className="text-[10px] sm:text-xs leading-tight opacity-70">
                            {t("footer.risk_warning")}
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white transition-colors">{t("footer.privacy")}</button>
                        <button onClick={() => setIsTermsOpen(true)} className="hover:text-white transition-colors">{t("footer.terms")}</button>
                        <button onClick={() => setIsRiskOpen(true)} className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4">{t("footer.disclaimer")}</button>
                    </div>
                </div>
            </div>

            <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
            <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
            <RiskModal isOpen={isRiskOpen} onClose={() => setIsRiskOpen(false)} />
        </footer>
    );
}
