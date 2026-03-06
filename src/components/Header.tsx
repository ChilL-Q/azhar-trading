"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface HeaderProps {
    onOpenModal: () => void;
}

export function Header({ onOpenModal }: HeaderProps) {
    const { t } = useTranslation();

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex h-16 sm:h-20 items-center justify-between px-4 sm:px-8 border-b border-primary/10 bg-background/80 backdrop-blur-md"
        >
            <div className="flex items-center gap-2">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden border border-primary/20 shadow-sm flex-shrink-0">
                    <img src="/expert-avatar.jpg" alt="Azhar Trading" className="w-full h-full object-cover object-top" />
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-sm sm:text-lg tracking-tight text-foreground leading-tight">
                        Azhar Trading
                    </span>
                    <span className="text-[10px] sm:text-xs text-foreground/50 font-medium">Халяль инвестиции</span>
                </div>
            </div>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-foreground/80">
                <a href="#about" className="hover:text-primary-foreground transition-colors">{t("header.about")}</a>
                <a href="#program" className="hover:text-primary-foreground transition-colors">{t("header.program")}</a>
                <a href="#reviews" className="hover:text-primary-foreground transition-colors">{t("header.reviews")}</a>
            </nav>

            <div className="flex items-center gap-2 sm:gap-4">
                <LanguageSwitcher />

                <button
                    onClick={onOpenModal}
                    className="group relative inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/20 hover:scale-105 active:scale-95"
                >
                    <span className="hidden sm:inline mr-2">{t("header.btn")}</span>
                    <span className="sm:hidden mr-1">{t("header.btn_short")}</span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
            </div>
        </motion.header>
    );
}
