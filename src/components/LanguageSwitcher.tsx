"use client";

import { useTranslation } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
    const { lang, setLang } = useTranslation();

    return (
        <div className="flex bg-surface/80 backdrop-blur-md border border-primary/20 rounded-full p-1 shadow-sm items-center">
            <button
                onClick={() => setLang("ru")}
                className={`relative px-3 py-1 text-sm font-medium rounded-full transition-colors z-10 ${lang === "ru" ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"
                    }`}
            >
                {lang === "ru" && (
                    <motion.div
                        layoutId="lang-bg"
                        className="absolute inset-0 bg-primary rounded-full z-[-1]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                )}
                RU
            </button>
            <button
                onClick={() => setLang("kz")}
                className={`relative px-3 py-1 text-sm font-medium rounded-full transition-colors z-10 ${lang === "kz" ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"
                    }`}
            >
                {lang === "kz" && (
                    <motion.div
                        layoutId="lang-bg"
                        className="absolute inset-0 bg-primary rounded-full z-[-1]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                )}
                KZ
            </button>
        </div>
    );
}
