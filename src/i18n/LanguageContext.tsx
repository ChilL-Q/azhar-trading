"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ru } from "./ru";
import { kz } from "./kz";

type Language = "ru" | "kz";
type Dictionary = typeof ru;

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: (key: keyof Dictionary) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Language>("ru");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Retrieve language from localStorage safely
        const storedLang = localStorage.getItem("app_lang") as Language | null;
        if (storedLang && (storedLang === "ru" || storedLang === "kz")) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setLang(storedLang);
        }
        setMounted(true);
    }, []);

    const handleSetLang = (newLang: Language) => {
        setLang(newLang);
        localStorage.setItem("app_lang", newLang);
    };

    const t = (key: keyof Dictionary): string => {
        const dictionary = lang === "kz" ? kz : ru;
        return dictionary[key] || ru[key] || key;
    };

    // Removed !mounted condition to prevent useContext throwing on first render

    return (
        <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useTranslation must be used within a LanguageProvider");
    }
    return context;
}
